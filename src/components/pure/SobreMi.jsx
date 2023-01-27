import React from "react";
import foto from "../../imagenes/jeasson.png";

const SobreMi = () => {
  return (
    <div className="div-sobremi">
      <div className="sobremi-info">
        <div className="info-div">
          <p>
          Hola, soy Jeasson, desarrollador Frontend que le ha tomado gusto a la programacion desde el colegio, apasionado y enfocado en
          desarrollo de aplicaciones web. 
          </p>
          <p>Mis habilidades y conocimientos incluyen:</p>
          <ul>
            <li className="info-ul-li">
              Desarrollo Frontend con ReactJS, JavaScript, HTML, CSS 
            </li>
            <li className="info-ul-li">Diseños de bases de datos basico de Oracle, PostgreSQL</li>
            <li className="info-ul-li">Desarrollo de REST API usando NodeJS y ExpressJS</li>
            <li className="info-ul-li">Desarrollo de aplicaciones de escritorio con JAVA</li>
            <li className="info-ul-li">Manejo de versionamiento con Git y GitHub</li>
          </ul>
          <p>Mi pasion por la programacion arranco en el colegio, donde tuve mis primeros acercamientos con HTML y JAVA.</p>
        </div>
      </div>
      <img src={foto} alt="foto" className="main-foto"></img>
    </div>
  );
};

export default SobreMi;
