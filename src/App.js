import { Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import NavBar from "./components/NavBar";
import Gallery from "./components/pages/Gallery";
import About from "./components/pages/About";
import SignUp from "./components/pages/SignUp";
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
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
