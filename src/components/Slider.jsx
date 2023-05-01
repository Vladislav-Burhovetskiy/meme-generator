import React from "react";

export default function Slider({ darkMode, toggleDarkMode }) {
  return (
    <nav className={darkMode ? "dark" : ""}>
      <div className="toggler">
        <p className="toggler--light">Light</p>
        <div className="toggler--slider" onClick={toggleDarkMode}>
          <div className="toggler--slider--circle"></div>
        </div>
        <p className="toggler--dark">Dark</p>
      </div>
    </nav>
  );
}
