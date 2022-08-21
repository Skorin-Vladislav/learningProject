import { Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Blog from "./components/Blog";
import Galary from "./components/Galary";
import About from "./components/About";

function App() {
  return (
    <div className="wraper">
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/galary" element={<Galary />} />
      </Routes>
    </div>
  );
}

export default App;
