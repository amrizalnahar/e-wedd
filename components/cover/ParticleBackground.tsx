"use client";

import { useEffect, useState } from "react";

interface Petal {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
  color: string;
}

export function ParticleBackground() {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const colors = [
      "rgba(212, 165, 165, 0.6)", // dusty-rose
      "rgba(201, 168, 76, 0.4)",  // gold
      "rgba(168, 181, 160, 0.5)", // sage
      "rgba(232, 213, 163, 0.5)", // gold-light
    ];

    const generated: Petal[] = Array.from({ length: 18 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 10,
      duration: 10 + Math.random() * 15,
      size: 6 + Math.random() * 10,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
    setPetals(generated);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {petals.map((p) => (
        <div
          key={p.id}
          className="petal absolute"
          style={{
            left: `${p.left}%`,
            top: "-5%",
            width: `${p.size}px`,
            height: `${p.size}px`,
            borderRadius: "50% 0 50% 0",
            backgroundColor: p.color,
            animationName: "floatPetal",
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
            willChange: "transform",
          }}
        />
      ))}
    </div>
  );
}
