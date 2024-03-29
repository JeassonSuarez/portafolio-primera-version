import React from "react";
import "../../styles/main.styles.css";
import Presentacion from "../pure/Presentacion";
import SobreMi from "../pure/SobreMi";
import reactjsjs from "../../imagenes/react.svg";
import js from "../../imagenes/javascript.svg";
import hyper from "../../imagenes/html.svg";
import estilos from "../../imagenes/css.svg";
import db from "../../imagenes/database.svg";
import pg from "../../imagenes/pg.svg";
import node from "../../imagenes/node.svg";
import github from "../../imagenes/gato.svg";
import Contactame from "../pure/Contactame";
import Proyecto from "../pure/Poyecto";
import encripta from "../../imagenes/proyectos/Portada.png";
import grafo from "../../imagenes/proyectos/grafo pintado.png";
import vuelos from "../../imagenes/proyectos/existecnia vuelo.png";
import tareas from "../../imagenes/proyectos/review-tareas.png";
import paises from "../../imagenes/proyectos/paises.png";
import pomodoro from "../../imagenes/proyectos/pomodoro.png";

const Main = () => {
  return (
    <div className="main">
      <Presentacion />
      <h2 className="info-h2-title title" id="sobremi">
        Sobre Mí
      </h2>
      <SobreMi />
      <h2 className="info-h2-title title">Tecnologías</h2>
      <div className="main-div-tecnologias">
        <img
          src={reactjsjs}
          alt="react"
          height="50"
          width="50"
          className="li-img-tec"
        ></img>
        <img
          src={js}
          alt="JavaScript"
          height="50"
          width="50"
          className="li-img-tec"
        ></img>
        <img
          src={hyper}
          alt="html"
          height="50"
          width="50"
          className="li-img-tec"
        ></img>
        <img
          src={estilos}
          alt="css"
          height="50"
          width="50"
          className="li-img-tec"
        ></img>
        <img
          src={db}
          alt="Bases de datos"
          height="50"
          width="50"
          className="li-img-tec"
        ></img>
        <img
          src={pg}
          alt="Bases de datos"
          height="50"
          width="50"
          className="li-img-tec"
        ></img>
        <svg
          className="li-img-tec"
          role="img"
          viewBox="0 0 24 24"
          height="50"
          width="40"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title />
          <path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.82M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.568 2.082-1.006 3.776-.892 3.776-.892M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0-.001.07-.062.09-.118M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.888 4.832-.001 6.836-2.274-2.053-3.943-3.858-2.824-5.539 1.644-2.469 6.197-3.665 5.19-7.627M9.734 23.924c4.322.277 10.959-.153 11.116-2.198 0 0-.302.775-3.572 1.391-3.688.694-8.239.613-10.937.168 0-.001.553.457 3.393.639" />
        </svg>
        <svg
          className="li-img-tec"
          fill="currentColor"
          height="50"
          viewBox="0 0 16 16"
          width="50"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M15.698 7.287 8.712.302a1.03 1.03 0 0 0-1.457 0l-1.45 1.45 1.84 1.84a1.223 1.223 0 0 1 1.55 1.56l1.773 1.774a1.224 1.224 0 0 1 1.267 2.025 1.226 1.226 0 0 1-2.002-1.334L8.58 5.963v4.353a1.226 1.226 0 1 1-1.008-.036V5.887a1.226 1.226 0 0 1-.666-1.608L5.093 2.465l-4.79 4.79a1.03 1.03 0 0 0 0 1.457l6.986 6.986a1.03 1.03 0 0 0 1.457 0l6.953-6.953a1.031 1.031 0 0 0 0-1.457" />
        </svg>
        <img
          src={github}
          alt="Bases de datos"
          height="50"
          width="50"
          className="li-img-tec"
        ></img>
        <img
          src={node}
          alt="Bases de datos"
          height="50"
          width="50"
          className="li-img-tec"
        ></img>
      </div>
      <h2 className="info-h2-title title" id="proyectos">
        Proyectos
      </h2>
      <Proyecto
        foto={pomodoro}
        nombre="Enfocate Pomodoro"
        linkGitHub="https://github.com/JeassonSuarez/pomodoro"
        linkProyectoVivo="https://jeassonsuarez.github.io/pomodoro/"
        descripcion="Esta aplicación cuenta con una funcionalidad única que te permite configurar el tiempo del pomodoro, así como los intervalos de descanso corto y descanso largo. El método de pomodoro es una técnica de gestión del tiempo muy efectiva, y mi aplicación te ayuda a implementarla de manera personalizada y conveniente. Con una interfaz intuitiva y fácil de usar, puedes establecer tus propios tiempos y mantener un enfoque óptimo en tus tareas. Ya sea que estés estudiando, trabajando en un proyecto o simplemente necesites aumentar tu productividad, esta aplicación de pomodoro se convertirá en tu aliado confiable."
      />

      <Proyecto
        foto={paises}
        nombre="Uso de REST API COUNTRIES"
        linkGitHub="https://github.com/JeassonSuarez/UsoApiRESTCOUNTRIES"
        linkProyectoVivo="https://jeassonsuarez.github.io/UsoApiRESTCOUNTRIES/"
        descripcion="En este proyecto se busca desarrollar una aplicación en ReactJS que te permite explorar información detallada de países de todo el mundo. Conectada al API REST Countries, podrás descubrir datos geográficos, demográficos y culturales de forma interactiva y visualmente atractiva. Explora diferentes regiones, busca países por nombre y sumérgete en su diversidad cultural con esta herramienta fácil de usar."
      />
      <Proyecto
        foto={tareas}
        nombre="Aplicación cliente-servidor de tareas"
        linkGitHub="https://github.com/JeassonSuarez/app-tareas-front-react"
        linkGitHubBack="https://github.com/JeassonSuarez/app-tareas-back-node-pg"
        linkProyectoVivo="https://jeassonsuarez.github.io/app-tareas-front-react/"
        descripcion="Este proyecto se realizo debido a una necesidad propia, pues al ser estudiante constantemente tengo que realizar actividades, alguna veces son muchas y tener esto en la mente es complicado, por lo cual decidi realizar una app tipo cliente servidor que me permitiera tener mas facil el acceso a todas las actividades que debo realizar, el aplicativo se desarrollo en ReactJS, NodeJs, ExpressJS, y Postgres SQL, el frontend se encuentra desplegado en GitHun Pages, mientras que el backend esta desplegado en un servicio gratuito llamado Railway."
      />
      <Proyecto
        foto={encripta}
        nombre="Encriptador de textos"
        linkGitHub="https://github.com/JeassonSuarez/encriptador-textos"
        linkProyectoVivo="https://jeassonsuarez.github.io/encriptador-textos/"
        descripcion="Con este proyecto, he aprendido un poco más de métodos de JavaScript, específicamente métodos de Arreglos, String, y Objetos JSON, con dichos métodos se ha podido realizar de una manera más sencilla la aplicación, pues al recorrer las llaves de un objeto usando un forof por ejemplo, se evita realizarlo de una manera más manual, convirtiendo el algoritmo de cifrado y descifrado en pocas líneas de código."
      />
      {/* <Proyecto
        foto={grafo}
        nombre="Algoritmo de Floyd-Warshall"
        linkGitHub="https://github.com/JeassonSuarez/AlgoritmoDeFloyd-Warshall"
        linkProyectoVivo="https://jeassonsuarez.github.io/AlgoritmoDeFloyd-Warshall/"
        descripcion="Este proyecto fue un trabajo realizado para ser entregado en la carrera, para la materia ciencias de la computación, donde se expresó que se podía desarrollar en cualquier lenguaje de programación, por lo cual se seleccionó JavaScript, HTML, y CSS. Además se realizó la implementación del API canvas de HTML para poder realizar el trazado del grafo que se mostrara en pantalla."
      /> */}
      <h2 className="info-h2-title title" id="contacto">
        Contacto
      </h2>
      <Contactame />
    </div>
  );
};

export default Main;
