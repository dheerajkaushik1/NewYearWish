import { useEffect, useState } from "react";
import Envelope from "./components/Envelope";
import Letter from "./components/Letter";
import FireworksCanvas from "./components/FireworksCanvas";

function App() {
  const [opened, setOpened] = useState(false);

useEffect(() => {
  const shapes = document.querySelectorAll(".bg-shape");

  let mouseX = 0;
  let mouseY = 0;
  let currentX = 0;
  let currentY = 0;

  const lerp = (start, end, amt) => start + (end - start) * amt;

  const animate = () => {
    currentX = lerp(currentX, mouseX, 0.05);
    currentY = lerp(currentY, mouseY, 0.05);

    shapes.forEach((shape, index) => {
      const depth = (index + 1) * 20;
      shape.style.transform = `
        translate(${currentX / depth}px, ${currentY / depth}px)
      `;
    });

    requestAnimationFrame(animate);
  };

  const handleMove = (e) => {
    const x = e.clientX || e.touches?.[0]?.clientX;
    const y = e.clientY || e.touches?.[0]?.clientY;

    mouseX = (x / window.innerWidth - 0.5) * 100;
    mouseY = (y / window.innerHeight - 0.5) * 100;
  };

  window.addEventListener("mousemove", handleMove);
  window.addEventListener("touchmove", handleMove, { passive: true });

  animate();

  return () => {
    window.removeEventListener("mousemove", handleMove);
    window.removeEventListener("touchmove", handleMove);
  };
}, []);




  return (
    <>
      {/* Background Shapes */}
      <div className="bg-shape shape1"></div>
      <div className="bg-shape shape2"></div>
      <div className="bg-shape shape3"></div>

      {/* Fireworks */}
      <FireworksCanvas />

      {/* Content */}
      {!opened && <Envelope onOpen={() => setOpened(true)} />}
      {opened && <Letter />}
    </>
  );
}

export default App;
