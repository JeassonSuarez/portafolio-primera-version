import React, { useState } from "react";
import "../../styles/Proyecto.styles.css";
import github from "../../imagenes/gato.svg";
import vista from "../../imagenes/review.svg";

const Poyecto = ({
  foto,
  nombre,
  descripcion,
  linkGitHub,
  linkGitHubBack,
  linkProyectoVivo,
}) => {
  const [abrirD, setAbrirD] = useState(false);
  const abrirDatos = () => {
    linkProyectoVivo && window.open(linkProyectoVivo, "_blank");
    setAbrirD(!abrirD);
  };

  return (
    <div className="div-proyecto">
        <h3 className="proyecto-h3-nombre">{nombre}</h3>
        <img
          loading="lazy"
          src={foto}
          alt={nombre}
          className="proyecto-img"
          onClick={abrirDatos}
        />
      {
        <div className={`proyecto-datos ${abrirD && "activoPD"}`}>
          <p>{descripcion}</p>
          <div className="datos-links">
            <a
              href={linkGitHub}
              title={nombre}
              target="_blank"
              rel="noopener noreferrer"
              className="links-a-btn-datos-proyecto"
            >
              <img
                src={github}
                alt="GitHub"
                height="50"
                width="50"
                className="li-img-tec iconLink"
              ></img>
              Ir a codigo Frontend
            </a>
            {linkGitHubBack && (
              <a
                href={linkGitHubBack}
                title={`${nombre}, backend`}
                target="_blank"
                rel="noopener noreferrer"
                className="links-a-btn-datos-proyecto"
              >
                <img
                  src={github}
                  alt="GitHub"
                  height="50"
                  width="50"
                  className="li-img-tec iconLink"
                ></img>
                Ir a codigo Backend
              </a>
            )}
            {linkProyectoVivo && (
              <a
                href={linkProyectoVivo}
                title={nombre}
                target="_blank"
                rel="noopener noreferrer"
                className="links-a-btn-datos-proyecto"
              >
                <img
                  src={vista}
                  alt="GitHub"
                  height="50"
                  width="50"
                  className="li-img-tec iconLink"
                ></img>
                Ver el proyecto en vivo
              </a>
            )}
          </div>
        </div>
      }
    </div>
  );
};

export default Poyecto;
