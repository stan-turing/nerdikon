import React from "react";
import "./Header.css";

const Header = () => (
    <header className="header">
      <h1 className="logo">Nerdikon</h1>
      <nav className="nav">
        <a href="#tutorial">Nerdikon Tutorial</a>
        <a href="#about">Über Nerdikon</a>
        <a href="#faq">FAQU</a>
        <a href="#contact">Kontakt</a>
      </nav>
    </header>
  );
  
export default Header;