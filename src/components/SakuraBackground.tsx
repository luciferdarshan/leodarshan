"use client";

import { useEffect, useRef, useState } from "react";

interface Petal {
  x: number;
  y: number;
  r: number; // radius or size
  d: number; // density or weight
  rotation: number;
  rotationSpeed: number;
  swaySpeed: number;
  swayOffset: number;
}

export default function SakuraBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [enabled, setEnabled] = useState(true);

  // Initialize from localStorage on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("sakura-enabled");
      if (stored === "false") {
        setEnabled(false);
      }
    }
  }, []);

  // Listen to toggle events
  useEffect(() => {
    const handleToggle = (e: Event) => {
      const customEvent = e as CustomEvent<{ enabled: boolean }>;
      setEnabled(customEvent.detail.enabled);
    };
    window.addEventListener("toggle-sakura", handleToggle);
    return () => {
      window.removeEventListener("toggle-sakura", handleToggle);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let petals: Petal[] = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initPetals();
    };

    const initPetals = () => {
      petals = [];
      const petalCount = Math.min(Math.floor(canvas.width / 40), 25);
      for (let i = 0; i < petalCount; i++) {
        petals.push({
          x: Math.random() * canvas.width,
          y: Math.random() * -canvas.height, // start above screen
          r: Math.random() * 5 + 4, // 4px to 9px size
          d: Math.random() * 0.5 + 0.3, // speed weight
          rotation: Math.random() * Math.PI,
          rotationSpeed: (Math.random() - 0.5) * 0.01,
          swaySpeed: Math.random() * 0.005 + 0.002,
          swayOffset: Math.random() * Math.PI * 2,
        });
      }
    };

    // Draw single sakura petal
    const drawPetal = (ctx: CanvasRenderingContext2D, p: Petal) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);

      // Blossom pink/red with slight transparency
      ctx.fillStyle = "rgba(200, 59, 59, 0.12)";
      ctx.strokeStyle = "rgba(200, 59, 59, 0.2)";
      ctx.lineWidth = 0.5;

      ctx.beginPath();
      // Draw sakura petal leaf shape using bezier curves
      ctx.moveTo(0, 0);
      ctx.bezierCurveTo(-p.r * 1.5, -p.r * 0.5, -p.r * 1.5, p.r * 1.5, 0, p.r * 1.5);
      ctx.bezierCurveTo(p.r * 1.5, p.r * 1.5, p.r * 1.5, -p.r * 0.5, 0, 0);
      
      // Heart-shape notch at top
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      ctx.restore();
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (!enabled) {
        return;
      }

      petals.forEach((p) => {
        drawPetal(ctx, p);

        // Update positions
        p.y += p.d * 0.8 + 0.4; // downward fall
        p.x += Math.sin(p.swayOffset) * 0.3; // sway side to side
        p.swayOffset += p.swaySpeed;
        p.rotation += p.rotationSpeed;

        // Reset petal to top if it goes off bottom or sides
        if (p.y > canvas.height + 20 || p.x < -20 || p.x > canvas.width + 20) {
          p.y = -20;
          p.x = Math.random() * canvas.width;
          p.d = Math.random() * 0.5 + 0.3;
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    draw();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [enabled]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-30 pointer-events-none w-full h-full bg-transparent"
    />
  );
}
