import React, { useState } from "react";
import "./Navbar.css";
import CartWidget from "../CartWidget";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <span className="nav-logo">ML</span>
      <div className={`nav-items ${isOpen && "open"}`}>
        <NavLink to={'/'}>inicio</NavLink>
        <NavLink to={'/categorias/productos'}>productos</NavLink>
        <NavLink to={'/categorias/celdas'}>celdas</NavLink>
        <NavLink to={"/contact"}><CartWidget /></NavLink>
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