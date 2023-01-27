import React from "react";
import "../../styles/footer.styles.css";
import logo from "../../imagenes/logo.svg";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="header-div-logo logo">
        <img src={logo} alt="Logo" className="logo-img"></img>
      </div>
      <span>Todos los derechos reservados.</span>
    </footer>
  );
};

export default Footer;
