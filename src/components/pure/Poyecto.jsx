import React from "react";
import "../../styles/Proyecto.styles.css";
import github from '../../imagenes/gato.svg'
import vista from '../../imagenes/review.svg'

const Poyecto = ({
  foto,
  nombre,
  descripcion,
  linkGitHub,
  linkProyectoVivo,
}) => {
  return (
    <div className="div-proyecto">
      <img loading="lazy" src={foto} alt={nombre} className="proyecto-img" />
      <div className="proyecto-datos">
        <h3>{nombre}</h3>
        <p>{descripcion}</p>
        <div className="datos-links">
          <a href={linkGitHub} title={nombre} target="_blank" rel="noopener noreferrer">
            <img src={github} alt='GitHub' height="50" width="50" className="li-img-tec iconLink"></img>
          </a>
          <a href={linkProyectoVivo} title={nombre} target="_blank" rel="noopener noreferrer">
            <img src={vista} alt='GitHub' height="50" width="50" className="li-img-tec iconLink"></img>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Poyecto;
