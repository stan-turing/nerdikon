import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <p>&copy; {new Date().getFullYear()} Nerdikon. Alle Rechte vorbehalten.</p>
    <p className="impress"><a href="#impress">Impressum</a></p>
  </footer>
);

export default Footer;
