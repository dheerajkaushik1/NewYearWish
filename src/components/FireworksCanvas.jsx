import { useEffect, useRef } from "react";

export default function FireworksCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let fireworks = [];

    class Particle {
      constructor(x, y, angle, speed) {
        this.x = x;
        this.y = y;
        this.vx = Math.cos(angle) * speed;
        this.vy = Math.sin(angle) * speed;
        this.alpha = 1;
        this.gravity = 0.04;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.vy += this.gravity;
        this.alpha -= 0.015;
      }

      draw() {
        ctx.globalAlpha = this.alpha;
        ctx.beginPath();
        ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = "gold";
        ctx.fill();
        ctx.globalAlpha = 1;
      }
    }

    class Firework {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height * 0.5;
        this.particles = [];

        for (let i = 0; i < 40; i++) {
          this.particles.push(
            new Particle(
              this.x,
              this.y,
              Math.random() * Math.PI * 2,
              Math.random() * 3 + 2
            )
          );
        }
      }

      update() {
        this.particles.forEach(p => p.update());
        this.particles = this.particles.filter(p => p.alpha > 0);
      }

      draw() {
        this.particles.forEach(p => p.draw());
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (Math.random() < 0.04) fireworks.push(new Firework());

      fireworks.forEach(f => {
        f.update();
        f.draw();
      });

      fireworks = fireworks.filter(f => f.particles.length > 0);
      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1,
        pointerEvents: "none"
      }}
    />
  );
}
