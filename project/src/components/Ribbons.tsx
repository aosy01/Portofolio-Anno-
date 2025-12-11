import React, { useEffect, useRef } from "react";
import { Renderer, Transform, Vec3, Color, Polyline } from "ogl";
import "./Ribbons.css";

interface RibbonsProps {
  colors?: string[];
  baseSpring?: number;
  baseFriction?: number;
  baseThickness?: number;
  offsetFactor?: number;
  maxAge?: number;
  pointCount?: number;
  speedMultiplier?: number;
  enableFade?: boolean;
  enableShaderEffect?: boolean;
  effectAmplitude?: number;
  backgroundColor?: [number, number, number, number];
  mouseAttraction?: number;
  mouseRepulsion?: number;
}

const Ribbons: React.FC<RibbonsProps> = ({
  colors = ["#06b6d4", "#8b5cf6", "#ec4899", "#00ff99"],
  baseSpring = 0.12,
  baseFriction = 0.88,
  baseThickness = 35,
  offsetFactor = 0.15,
  maxAge = 600,
  pointCount = 60,
  speedMultiplier = 1.2,
  enableFade = true,
  enableShaderEffect = true,
  effectAmplitude = 3,
  backgroundColor = [0, 0, 0, 0],
  mouseAttraction = 0.12,
  mouseRepulsion = 0.02,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Shader (lengkap & aman)
  const vertex = /* glsl */ `
    precision highp float;

    attribute vec3 position;
    attribute vec3 next;
    attribute vec3 prev;
    attribute vec2 uv;
    attribute float side;

    uniform vec2 uResolution;
    uniform float uDPR;
    uniform float uThickness;
    uniform float uTime;
    uniform float uEnableShaderEffect;
    uniform float uEffectAmplitude;

    varying vec2 vUV;

    vec4 getPosition() {
        vec4 current = vec4(position, 1.0);
        vec2 aspect = vec2(uResolution.x / uResolution.y, 1.0);
        vec2 nextScreen = next.xy * aspect;
        vec2 prevScreen = prev.xy * aspect;
        vec2 tangent = normalize(nextScreen - prevScreen);
        vec2 normal = vec2(-tangent.y, tangent.x);
        normal /= aspect;
        normal *= mix(1.0, 0.1, pow(abs(uv.y - 0.5) * 2.0, 2.0));
        float dist = length(nextScreen - prevScreen);
        normal *= smoothstep(0.0, 0.02, dist);
        float pixelWidthRatio = 1.0 / (uResolution.y / uDPR);
        float pixelWidth = current.w * pixelWidthRatio;
        normal *= pixelWidth * uThickness;
        current.xy -= normal * side;

        if (uEnableShaderEffect > 0.5) {
            current.xy += normal * sin(uTime * 3.0 + current.x * 10.0) * uEffectAmplitude;
        }

        return current;
    }

    void main() {
        vUV = uv;
        gl_Position = getPosition();
    }
  `;

  const fragment = /* glsl */ `
    precision highp float;
    uniform vec3 uColor;
    uniform float uOpacity;
    uniform float uEnableFade;
    varying vec2 vUV;

    void main() {
        float fadeFactor = 1.0;
        if (uEnableFade > 0.5) {
            fadeFactor = 1.0 - smoothstep(0.0, 1.0, vUV.y);
        }
        gl_FragColor = vec4(uColor, uOpacity * fadeFactor);
    }
  `;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const renderer = new Renderer({
      dpr: Math.min(window.devicePixelRatio, 2),
      alpha: true,
    });
    const gl = renderer.gl;
    gl.clearColor(...backgroundColor);

    gl.canvas.style.position = "absolute";
    gl.canvas.style.inset = "0";
    gl.canvas.style.pointerEvents = "none";
    container.appendChild(gl.canvas);

    const scene = new Transform();

    // Proper interface tanpa any!
    interface Line {
      spring: number;
      friction: number;
      mouseVelocity: Vec3;
      mouseOffset: Vec3;
      points: Vec3[];
      polyline: Polyline;
    }

    const lines: Line[] = [];

    const resize = () => {
      renderer.setSize(container.clientWidth, container.clientHeight);
      lines.forEach((line) => line.polyline.resize?.());
    };
    window.addEventListener("resize", resize);

    const center = (colors.length - 1) / 2;
    colors.forEach((color, i) => {
      const line: Line = {
        spring: baseSpring + Math.random() * 0.08,
        friction: baseFriction + Math.random() * 0.05,
        mouseVelocity: new Vec3(),
        mouseOffset: new Vec3(
          (i - center) * offsetFactor + (Math.random() - 0.5) * 0.3,
          (Math.random() - 0.5) * 0.4,
          0
        ),
        points: Array.from({ length: pointCount }, () =>
          new Vec3(Math.random() * 4 - 2, Math.random() * 4 - 2, 0)
        ),
        polyline: null!, // ! = non-null assertion (akan diisi sebelum digunakan)
      };

      line.polyline = new Polyline(gl, {
        points: line.points,
        vertex,
        fragment,
        uniforms: {
          uColor: { value: new Color(color) },
          uThickness: { value: baseThickness + Math.random() * 15 },
          uOpacity: { value: 0.9 },
          uTime: { value: 0 },
          uEnableShaderEffect: { value: enableShaderEffect ? 1 : 0 },
          uEffectAmplitude: { value: effectAmplitude },
          uEnableFade: { value: enableFade ? 1 : 0 },
        },
      });

      line.polyline.mesh.setParent(scene);
      lines.push(line);
    });

    resize();

    const mouse = new Vec3();
    const handleMouse = (e: MouseEvent | TouchEvent) => {
      const rect = container.getBoundingClientRect();
      const clientX = "touches" in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
      const clientY = "touches" in e ? e.touches[0].clientY : (e as MouseEvent).clientY;

      mouse.set(
        ((clientX - rect.left) / rect.width) * 2 - 1,
        -((clientY - rect.top) / rect.height) * 2 + 1,
        0
      );
    };

    container.addEventListener("mousemove", handleMouse);
    container.addEventListener("touchmove", handleMouse, { passive: true });

    let frame: number;
    const tmp = new Vec3();

    const update = () => {
      frame = requestAnimationFrame(update);

      lines.forEach((line) => {
        // Attraction + offset
        tmp.copy(mouse)
          .sub(line.points[0])
          .multiply(mouseAttraction)
          .add(line.mouseOffset);

        line.mouseVelocity.add(tmp).multiply(line.friction);
        line.points[0].add(line.mouseVelocity);

        // Repulsion
        if (mouseRepulsion > 0) {
          const dist = line.points[0].distance(mouse);
          if (dist < 0.5) {
            tmp.copy(line.points[0]).sub(mouse).normalize().multiply(mouseRepulsion);
            line.points[0].add(tmp);
          }
        }

        // Trail update
        for (let i = 1; i < line.points.length; i++) {
          line.points[i].lerp(line.points[i - 1], 0.12);
        }

        line.polyline.mesh.program.uniforms.uTime.value += 0.016;
        line.polyline.updateGeometry();
      });

      renderer.render({ scene });
    };

    update();

    return () => {
      window.removeEventListener("resize", resize);
      container.removeEventListener("mousemove", handleMouse);
      cancelAnimationFrame(frame);
      if (gl.canvas && container.contains(gl.canvas)) {
        container.removeChild(gl.canvas);
      }
    };
  }, [
    colors,
    baseSpring,
    baseFriction,
    baseThickness,
    offsetFactor,
    maxAge,
    pointCount,
    speedMultiplier,
    enableFade,
    enableShaderEffect,
    effectAmplitude,
    backgroundColor,
    mouseAttraction,
    mouseRepulsion,
  ]);

  return <div ref={containerRef} className="ribbons-container" />;
};

export default Ribbons;