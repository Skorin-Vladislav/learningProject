import { Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import NavBar from "./components/NavBar";
import Gallery from "./components/pages/Gallery";
import About from "./components/pages/About";
import SignUp from "./components/pages/SignUp";
import Blog from "./components/pages/Blog";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="wraper">
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/blog/china" element={<Blog />} />
        <Route path="/blog/argentina" element={<Blog />} />
        <Route path="/blog/vietnam" element={<Blog />} />
        <Route path="/blog/UAE" element={<Blog />} />
        <Route path="/blog/somalia" element={<Blog />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
