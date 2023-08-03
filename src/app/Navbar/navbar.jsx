import React from "react";
import '../Navbar/navbar.css'

export function Navbar() {
  return (
    <nav className="navbar">
    <div class="logo">
    <span>RealEstate </span>
    </div>
      <ul className="nav-links">
        <li><a href="#">Inicio </a></li>
        <li><a href="#">Acerca de</a></li>
        <li><a href="#">Servicios </a></li>
        <li><a href="#">Quienes Somos </a></li>
      </ul>
    </nav>
  );
}
