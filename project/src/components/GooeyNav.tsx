// src/components/GooeyNav.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import "./GooeyNav.css";

interface NavItem {
  label: string;
  href: string;
  id?: string;
}

interface GooeyNavProps {
  items: NavItem[];
  animationTime?: number;
  particleCount?: number;
  particleDistances?: [number, number];
  particleR?: number;
  timeVariance?: number;
  colors?: number[];
  initialActiveIndex?: number;
  activeIndex?: number; // INI YANG BIKIN BISA DIKENDALI DARI LUAR!
}

const GooeyNav: React.FC<GooeyNavProps> = ({
  items,
  animationTime = 600,
  particleCount = 15,
  particleDistances = [90, 10],
  particleR = 100,
  timeVariance = 300,
  colors = [1, 2, 3, 1, 2, 3, 1, 4],
  initialActiveIndex = 0,
  activeIndex: externalActiveIndex,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLUListElement>(null);
  const filterRef = useRef<HTMLSpanElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  // Gunakan externalActiveIndex kalau ada, kalau tidak → internal state
  const [internalIndex, setInternalIndex] = useState(initialActiveIndex);
  const activeIndex = externalActiveIndex !== undefined ? externalActiveIndex : internalIndex;

  const noise = (n = 1) => n / 2 - Math.random() * n;

  const getXY = (d: number, i: number, t: number): [number, number] => {
    const a = ((360 + noise(8)) / t) * i * (Math.PI / 180);
    return [d * Math.cos(a), d * Math.sin(a)];
  };

  const createParticle = (i: number, t: number) => {
    const r = noise(particleR / 10);
    return {
      start: getXY(particleDistances[0], particleCount - i, particleCount),
      end: getXY(particleDistances[1] + noise(7), particleCount - i, particleCount),
      time: t,
      scale: 1 + noise(0.2),
      color: colors[Math.floor(Math.random() * colors.length)],
      rotate: r > 0 ? (r + particleR / 20) * 10 : (r - particleR / 20) * 10,
    };
  };

  const makeParticles = (el: HTMLElement) => {
    el.style.setProperty("--time", `${animationTime * 2 + timeVariance}ms`);

    // Hapus partikel lama
    el.querySelectorAll(".particle").forEach(p => p.remove());

    for (let i = 0; i < particleCount; i++) {
      const t = animationTime * 2 + noise(timeVariance * 2);
      const p = createParticle(i, t);

      setTimeout(() => {
        const particle = document.createElement("span");
        const point = document.createElement("span");

        particle.className = "particle";
        point.className = "point";

        Object.entries({
          "--start-x": `${p.start[0]}px`,
          "--start-y": `${p.start[1]}px`,
          "--end-x": `${p.end[0]}px`,
          "--end-y": `${p.end[1]}px`,
          "--time": `${p.time}ms`,
          "--scale": `${p.scale}`,
          "--rotate": `${p.rotate}deg`,
          "--color": `var(--color-${p.color}, #06b6d4)`,
        }).forEach(([k, v]) => particle.style.setProperty(k, v));

        particle.appendChild(point);
        el.appendChild(particle);

        requestAnimationFrame(() => el.classList.add("active"));

        setTimeout(() => particle.remove(), t + 100);
      }, i * 30);
    }
  };

  const updateEffectPosition = (index: number) => {
    if (!containerRef.current || !filterRef.current || !textRef.current) return;
    if (!navRef.current) return;

    const li = navRef.current.children[index] as HTMLElement;
    if (!li) return;

    const c = containerRef.current.getBoundingClientRect();
    const p = li.getBoundingClientRect();

    const s = {
      left: `${p.x - c.x}px`,
      top: `${p.y - c.y}px`,
      width: `${p.width}px`,
      height: `${p.height}px`,
    };

    Object.assign(filterRef.current.style, s);
    Object.assign(textRef.current.style, s);
    textRef.current.textContent = li.textContent || "";
  };

  const activate = (index: number) => {
    if (activeIndex === index) return;

    // Kalau tidak dikendalikan dari luar → update internal state
    if (externalActiveIndex === undefined) {
      setInternalIndex(index);
    }

    updateEffectPosition(index);

    if (filterRef.current) {
      makeParticles(filterRef.current);
    }

    if (textRef.current) {
      textRef.current.classList.remove("active");
      void textRef.current.offsetWidth;
      textRef.current.classList.add("active");
    }
  };

  // Update saat externalActiveIndex berubah (dari scroll)
  useEffect(() => {
    if (externalActiveIndex !== undefined && externalActiveIndex !== activeIndex) {
      activate(externalActiveIndex);
    }
  }, [externalActiveIndex]);

  // Inisialisasi pertama
  useEffect(() => {
    updateEffectPosition(activeIndex);
    if (textRef.current) textRef.current.classList.add("active");

    const ro = new ResizeObserver(() => {
      updateEffectPosition(activeIndex);
    });
    if (containerRef.current) ro.observe(containerRef.current);

    return () => ro.disconnect();
  }, [activeIndex]);

  return (
    <div className="gooey-nav-container" ref={containerRef}>
      <nav>
        <ul ref={navRef}>
          {items.map((item, i) => (
            <li key={i} className={i === activeIndex ? "active" : ""}>
              <a
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  activate(i);

                  // Smooth scroll ke section
                  const target = document.querySelector(item.href);
                  if (target) {
                    target.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <span className="effect filter" ref={filterRef} />
      <span className="effect text" ref={textRef} />
    </div>
  );
};

export default GooeyNav;