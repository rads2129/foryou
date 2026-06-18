import { useNavigate } from "react-router-dom";
import "../css/home.css";
import sad from "../assets/images/sad.jpg"; // Replace with your image

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="overlay">
        <div className="home-card">
          <h1 className="title">Hey there you 👁️👄👁️</h1>

          <p className="quote">
            Little birdie told me that someone's not in a great mood today
          </p>

          <img
            src={sad}
            alt="Us Together"
            className="couple-image"
          />

          <button
            className="enter-btn"
            onClick={() => navigate("/memos")}
          >
            Wanna feel better?✨
          </button>
        </div>
      </div>
    </div>
  );
}