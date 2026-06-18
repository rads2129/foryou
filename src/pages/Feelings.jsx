import { useState } from "react";
import "../css/feelings.css";

import img1 from "../assets/images/feel1.jpg";
import img2 from "../assets/images/feel2.jpg";
import img3 from "../assets/images/feel3.jpg";
import img4 from "../assets/images/feel4.jpg";
import img5 from "../assets/images/feel5.jpg";

export default function Feelings() {
  const feelings = [
    {
      image: img2,
      quote:
        "Sometime i feel like this",
    },
    {
      image: img3,
      quote:
        "and sometimes like this",
    },
    {
      image: img4,
      quote:
        "But mostly its like this",
    },
    {
      image: img1,
      quote:
        "You make everything feel special ❤️",
    },
    {
      image: img5,
      quote:
        "Thank you for loving me exactly the way I am ❤️",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [started, setStarted] = useState(false);
  const [hearts, setHearts] = useState(false);

  const handleClick = () => {
    if (!started) {
      setStarted(true);
      return;
    }

    if (current < feelings.length - 1) {
      setCurrent(current + 1);
    }
    if(current===1)
    {
      setHearts(true);
    }
  };

  const finished =
    started && current === feelings.length - 1;

  return (
    <div className="feelings-container">
      {hearts && <div className="hearts">
        <span>❤️</span>
        <span>💕</span>
        <span>💖</span>
        <span>💗</span>
        <span>💘</span>
        <span>💞</span>
        <span>❤️</span>
        <span>💕</span>
      </div>}
      <div className="feelings-card">
        <h1>What I Feel About You ❤️</h1>

        {!started ? (
          <>
            <p className="subtitle">
              There's something I've always wanted
              to tell you...
            </p>

            <button
              className="love-btn"
              onClick={handleClick}
            >
              Click To See ❤️
            </button>
          </>
        ) : (
          <>
            <img
              src={feelings[current].image}
              alt="memory"
              className="feeling-image"
            />

            <p className="feeling-quote">
              {feelings[current].quote}
            </p>

            {!finished ? (
              <button
                className="love-btn"
                onClick={handleClick}
              >
                Show Me More 💌
              </button>
            ) : (
              <div className="final-message">
                <p>
                  I'd choose you in every universe❤️
                </p>

                <h1 className="love-text">
                  I LOVE YOU ❤️
                </h1>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}