import React, { useState } from "react";
import "./Navbar.css";
import CartWidget from "../CartWidget";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <span className="nav-logo">ML</span>
      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="/home">inicio</a>
        <a href="/about">productos</a>
        <a href="/service">servicios</a>
        <a href="/contact"><CartWidget /></a>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar;