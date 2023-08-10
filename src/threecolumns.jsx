import React, { useState, useEffect } from "react";
import "./style.css";

const ThreeColumns = () => {
  const [selected, setSelected] = useState("");

  useEffect(() => {
    function handleClick() {
      setSelected("");
    }

    if (selected) {
      document.addEventListener("mousedown", handleClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [selected]);

  const handleButtonClick = (type) => {
    setSelected(type);
  };

  return (
    <div className="container">
      {(!selected || selected === "sedan") && (
        <div id="sedan" className={selected === "sedan" ? "enlarged" : ""}>
          <h1 className="header">SEDANS</h1>
          <p>
            Choose a sedan for its affordability and excellent fuel economy.
            Ideal for cruising in the city or on your next road trip.
          </p>
          {selected !== "sedan" && (
            <input
              type="button"
              id="sedanbtn"
              className="more"
              value="Learn More"
              onClick={() => handleButtonClick("sedan")}
            />
          )}
        </div>
      )}
      {(!selected || selected === "SUVs") && (
        <div id="SUVs" className={selected === "SUVs" ? "enlarged" : ""}>
          <h1 className="header">SUVs</h1>
          <p>
            Take an SUV for its spacious interior, power, and versatility.
            Perfect for your next family vacation and off-road adventures.
          </p>
          {selected !== "SUVs" && (
            <input
              type="button"
              id="suvbtn"
              className="more"
              value="Learn More"
              onClick={() => handleButtonClick("SUVs")}
            />
          )}
        </div>
      )}
      {(!selected || selected === "luxury") && (
        <div id="luxury" className={selected === "luxury" ? "enlarged" : ""}>
          <h1 className="header">LUXURY</h1>
          <p>
            Cruise in the best car brands without the bloated prices. Enjoy the
            enhanced comfort of a luxury rental and arrive in style.
          </p>
          {selected !== "luxury" && (
            <input
              type="button"
              id="luxbtn"
              className="more"
              value="Learn More"
              onClick={() => handleButtonClick("luxury")}
            />
          )}
        </div>
      )}
      <div className="attribution">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by <a href="#">Gabriel Perez</a>.
      </div>
    </div>
  );
};

export default ThreeColumns;
