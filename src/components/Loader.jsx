import { useEffect } from "react";
import gsap from "gsap";

export default function Loader({ onFinish }) {
  useEffect(() => {
    gsap.fromTo(".loader-text",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1 }
    );

    setTimeout(onFinish, 3000);
  }, []);

  return (
    <div className="loader">
      <h1 className="loader-text">Preparing something special… ✨</h1>
    </div>
  );
}
