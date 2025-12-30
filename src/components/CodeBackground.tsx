"use client";

import { useEffect, useRef } from "react";

export default function CodeBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // TypeScript/Code snippets to display
    const codeSnippets = [
      "interface ExecMember {",
      "  name: string;",
      "  role: string;",
      "  img: string;",
      "}",
      "const execMembers: ExecMember[] = [];",
      "function handleClick() {",
      "  console.log('Hello');",
      "}",
      "type Event = {",
      "  title: string;",
      "  date: Date;",
      "};",
      "export default function Page() {",
      "  return <div>Content</div>;",
      "}",
      "const [state, setState] = useState();",
      "useEffect(() => {",
      "  // effect",
      "}, []);",
      "const data = await fetch('/api');",
      "type Props = {",
      "  children: ReactNode;",
      "};",
      "import { useState } from 'react';",
      "const Component = () => {",
      "  return null;",
      "};",
      "export default Component;",
      "type User = {",
      "  id: number;",
      "  name: string;",
      "};",
      "const users: User[] = [];",
      "async function fetchData() {",
      "  const res = await fetch(url);",
      "  return res.json();",
      "}",
      "const handleSubmit = (e: Event) => {",
      "  e.preventDefault();",
      "};",
    ];

    const particles: Array<{
      text: string;
      x: number;
      y: number;
      opacity: number;
      speed: number;
      fontSize: number;
    }> = [];

    // Initialize particles - more particles for better coverage
    for (let i = 0; i < 50; i++) {
      particles.push({
        text: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        opacity: Math.random() * 0.1 + 0.08, // Much more subtle opacity (0.08-0.18)
        speed: Math.random() * 0.5 + 0.2,
        fontSize: Math.random() * 8 + 10, // Smaller font size
      });
    }

    let animationFrame: number;
    const animate = () => {
      // Use a slightly lighter dark background for better contrast
      ctx.fillStyle = "#0f0f0f";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.y += particle.speed;
        if (particle.y > canvas.height) {
          particle.y = -50;
          particle.x = Math.random() * canvas.width;
        }

        // Very subtle fade effect - code stays highly visible
        const fadeStart = canvas.height * 0.75;
        const fadeEnd = canvas.height * 0.98;
        let opacity = particle.opacity;
        
        if (particle.y > fadeStart) {
          const fadeProgress = (particle.y - fadeStart) / (fadeEnd - fadeStart);
          opacity = particle.opacity * (1 - Math.min(fadeProgress * 0.5, 0.5)); // Minimal fade
        }

        ctx.fillStyle = `rgba(207, 185, 145, ${opacity})`;
        ctx.font = `${particle.fontSize}px 'Courier New', monospace`;
        ctx.fillText(particle.text, particle.x, particle.y);
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ background: "#0f0f0f" }}
    />
  );
}

