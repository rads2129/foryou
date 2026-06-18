import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Memos from "./pages/Memos.jsx"
import Feelings from "./pages/Feelings.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/memos" element={<Memos />} />
        <Route path="/feelings" element={<Feelings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;