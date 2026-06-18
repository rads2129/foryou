import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useWindowSize } from 'react-use'
import Confetti from 'react-confetti'
import "../css/memos.css";

import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";
import img4 from "../assets/images/img4.jpg";
import img5 from "../assets/images/img5.jpg";
import img6 from "../assets/images/img6.jpg";
import img7 from "../assets/images/img7.jpg";
import img8 from "../assets/images/img8.jpg";
import img9 from "../assets/images/img9.jpg";
import img10 from "../assets/images/img10.jpg";
import img11 from "../assets/images/img11.jpg";
import img12 from "../assets/images/img12.jpg";
import img13 from "../assets/images/img13.jpg";
import img14 from "../assets/images/img14.jpg";
import img15 from "../assets/images/img15.jpg";
import img16 from "../assets/images/img16.jpg";
import img17 from "../assets/images/img17.jpg";
import img18 from "../assets/images/img18.jpg";

export default function FeelGood() {
  const navigate = useNavigate();

  const memories = [
    {
      image: img15,
      caption: "Hope your mood goes from this...",
    },
    {
      image: img16,
      caption: "to this :)",
    },
    {
      image: img1,
      caption: "The one with the butter container story😛",
    },
    {
      image: img2,
      caption: "And the day it happened😂",
    },
    {
      image: img3,
      caption: "The windy selfie💕",
    },
    {
      image: img4,
      caption: "Sad ride home :)",
    },
    {
      image: img5,
      caption: "The first date🥰",
    },
    {
      image: img18,
      caption: "And the first matcha🤢",
    },
    {
      image: img6,
      caption: "Still smiling because of this moment 🥰",
    },
    {
      image: img7,
      caption: "I look stupid😂",
    },
    {
      image: img8,
      caption: "We both look stupid😂😂",
    },
    {
      image: img9,
      caption: "I am better than you💪🏼",
    },
    {
      image: img10,
      caption: "You can be cute at times👻",
    },
    {
      image: img14,
      caption: "good day it was",
    },
    {
      image: img11,
      caption: "We cool😎",
    },
    {
      image: img13,
      caption: "We cute🐼",
    },
    {
      image: img12,
      caption: "and cuter",
    },
    {
      image: img17,
      caption: "Hope your mood got better😚",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [showConfetti,setShowConfetti]=useState(false);
  const { width, height } = useWindowSize()

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % memories.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? memories.length - 1 : prev - 1
    );
  };

  return (
    <div className="feelgood-container">
      <div className="feelgood-card">
        <h1>Our Happy Memories ❤️</h1>

        <div className="carousel">
          <button className="arrow-btn" onClick={prevSlide}>
            ❮
          </button>

          <div className="memory-content">
            <img
              src={memories[current].image}
              alt="memory"
              className="memory-image"
            />

            <p className="caption">
              {memories[current].caption}
            </p>
          </div>

          <button className="arrow-btn" onClick={nextSlide}>
            ❯
          </button>
        </div>

        <div className="btn-grp">
          <button
            className="next-page-btn"
            onClick={() => setShowConfetti(true)}
          >
            Yes
          </button>

          <button
            className="next-page-btn"
            onClick={() => alert("NO IS NOT AN OPTION!")}
          >
            No
          </button>
        </div>

          <button
            className="next-page-btn"
            onClick={() => navigate("/feelings")}
          >
            Wanna See More? 💌
          </button>

          {showConfetti && <Confetti
            width={width}
            height={height}
          />
}
      </div>
    </div>
  );
}