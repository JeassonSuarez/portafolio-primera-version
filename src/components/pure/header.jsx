import React from "react";
import "../../styles/header.styles.css";
import logo from "../../imagenes/logo.svg";
import ln from "../../imagenes/linkedin.svg";
import gato from "../../imagenes/gato.svg";

const Header = ({isActive}) => {

  return (
    <header className="header">
      <div className="header-div-logo logo">
        <img src={logo} alt="Logo" className="logo-img"></img>
      </div>
      <ul className={`header-ul-list-secciones secciones ${ isActive && 'isActive' }`}>
        <li className="secciones-li underline"><button className="underline-btn"><a href="#proyectos">PROYECTOS</a></button></li>
        <li className="secciones-li underline"><button className="underline-btn"><a href="#sobremi">SOBRE MÍ</a></button></li>
        <li className="secciones-li underline"><button className="underline-btn"><a href="#contacto">CONTACTO</a></button></li>
      </ul>
      <div className="header-div-redes redes">
        <img src={ln} alt="LinkedIn" className="redes-img"></img>
        <img src={gato} alt="GitHub" className="redes-img"></img>
      </div>
    </header>
  );
};

export default Header;
