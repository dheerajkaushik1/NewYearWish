import { useEffect } from "react";

export default function Letter() {
  useEffect(() => {
    const lines = document.querySelectorAll(".line");
    lines.forEach((line, index) => {
      line.style.animationDelay = `${index * 0.6}s`;
      line.classList.add("fade-in-line"); // ensure animation triggers
    });
  }, []);

  return (
    <div className="letter-wrapper">
      {/* Fireworks */}
      <div className="firework f1"></div>
      <div className="firework f2"></div>
      <div className="firework f3"></div>

      <div className="letter">
        <h1 className="line">Happy New Year 2026 🎆</h1>

        <p className="line">
          Whoever is watching this message,
        </p>

        <p className="line">
          if this reaches you, it means you are special to me.
        </p>

        <p className="line">
          May this new year fill your life with love, happiness, and endless laughter.
        </p>

        <p className="line">
          May you achieve all your dreams and find joy in every small moment.
        </p>

        <p className="line">
          Thank you for being a part of my journey — your presence truly matters 💖
        </p>

        <p className="line">
          — With love,<br />
          <strong>Dheeraj Kaushik</strong>
        </p>
      </div>
    </div>
  );
}
