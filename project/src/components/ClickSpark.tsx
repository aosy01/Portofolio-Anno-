import React, { useEffect, useRef, useState } from "react";

interface ClickSparkProps {
  children: React.ReactNode;
  sparkColor?: string;
  sparkCount?: number;
  duration?: number;
}

interface Spark {
  id: number;
  x: number;
  y: number;
  angle: number;
  life: number;
}

export default function ClickSpark({
  children,
  sparkColor = "#60A5FA",
  sparkCount = 8,
  duration = 600,
}: ClickSparkProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [sparks, setSparks] = useState<Spark[]>([]);
  const idRef = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleClick = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const newSparks: Spark[] = [];

      for (let i = 0; i < sparkCount; i++) {
        newSparks.push({
          id: idRef.current++,
          x,
          y,
          angle: (Math.PI * 2 * i) / sparkCount,
          life: 1,
        });
      }

      setSparks((prev) => [...prev, ...newSparks]);
    };

    container.addEventListener("click", handleClick);
    return () => container.removeEventListener("click", handleClick);
  }, [sparkCount]);

  // animate
  useEffect(() => {
    if (!sparks.length) return;

    const interval = setInterval(() => {
      setSparks((prev) =>
        prev
          .map((s) => ({
            ...s,
            life: s.life - 16 / duration,
          }))
          .filter((s) => s.life > 0)
      );
    }, 16);

    return () => clearInterval(interval);
  }, [sparks, duration]);

  return (
    <div ref={containerRef} className="relative">
      {children}

      <svg
        className="absolute inset-0 pointer-events-none"
        width="100%"
        height="100%"
      >
        {sparks.map((s) => {
          const progress = 1 - s.life;
          const distance = 22 * progress; // pendek, UI style

          const x = s.x + Math.cos(s.angle) * distance;
          const y = s.y + Math.sin(s.angle) * distance;

          const length = 12 * s.life;

          return (
            <line
              key={s.id}
              x1={x}
              y1={y}
              x2={x + Math.cos(s.angle) * length}
              y2={y + Math.sin(s.angle) * length}
              stroke={sparkColor}
              strokeWidth={2}
              strokeLinecap="round"
              opacity={s.life}
            />
          );
        })}
      </svg>
    </div>
  );
}
