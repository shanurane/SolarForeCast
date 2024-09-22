// src/App.jsx
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Predict from "./components/Predict";
import About from "./components/About";
import Contact from "./components/Contact";
import Weather from "./components/Weather";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Display from "./components/Display";

// Components for each route
// const Home = () => <h2>Home Page</h2>;
// const About = () => <h2>About Page</h2>;
// const Contact = () => <h2>Contact Page</h2>;

const App = () => {
  return (
    <Router>
      <div className="m-2">
        <Navbar />
        <div className="min-h-[82vh] border-x-[1.5px] border-black">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/predict" element={<Predict />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/weather" element={<Weather />} />
            <Route path="/display" element={<Display />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
