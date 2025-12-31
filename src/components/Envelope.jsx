import { useState } from "react";
import "./envelope.css";

export default function Envelope({ onOpen }) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
    setTimeout(onOpen, 1200);
  };

  return (
    <div className="envelope-wrapper">
      <div className={`envelope ${open ? "open" : ""}`} onClick={handleClick}>
        <div className="flap"></div>
        <div className="body"></div>
        <span className="tap-text">Tap to open</span>
      </div>
    </div>
  );
}
