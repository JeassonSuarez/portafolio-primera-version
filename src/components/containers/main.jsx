import React from "react";
import "../../styles/main.styles.css";
import Presentacion from "../pure/Presentacion";
import SobreMi from "../pure/SobreMi";
import reactjsjs from '../../imagenes/react.svg'
import js from '../../imagenes/javascript.svg'
import hyper from '../../imagenes/html.svg'
import estilos from '../../imagenes/css.svg'
import db from '../../imagenes/database.svg'
import pg from '../../imagenes/pg.svg'
import node from '../../imagenes/node.svg'
import github from '../../imagenes/gato.svg'
import Contactame from "../pure/Contactame";
import Proyecto from "../pure/Poyecto"
import prueba from '../../imagenes/Portada.png'

const Main = () => {
  return (
    <div className="main">
        <Presentacion />
        <h2 className="info-h2-title title" id="sobremi">Sobre Mí</h2>
        <SobreMi />
        <h2 className="info-h2-title title">Tecnologias</h2>
        <div className="main-div-tecnologias">
          <img src={reactjsjs} alt='react' height="50" width="50" className="li-img-tec"></img>
          <img src={js} alt='JavaScript' height="50" width="50" className="li-img-tec"></img>
          <img src={hyper} alt='html' height="50" width="50" className="li-img-tec"></img>
          <img src={estilos} alt='css' height="50" width="50" className="li-img-tec"></img>
          <img src={db} alt='Bases de datos' height="50" width="50" className="li-img-tec"></img>
          <img src={pg} alt='Bases de datos' height="50" width="50" className="li-img-tec"></img>
          <svg className="li-img-tec" role="img" viewBox="0 0 24 24" height="50" width="40" xmlns="http://www.w3.org/2000/svg"><title/><path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.82M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.568 2.082-1.006 3.776-.892 3.776-.892M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0-.001.07-.062.09-.118M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.888 4.832-.001 6.836-2.274-2.053-3.943-3.858-2.824-5.539 1.644-2.469 6.197-3.665 5.19-7.627M9.734 23.924c4.322.277 10.959-.153 11.116-2.198 0 0-.302.775-3.572 1.391-3.688.694-8.239.613-10.937.168 0-.001.553.457 3.393.639"/></svg>
          <svg className="li-img-tec" fill="currentColor" height="50" viewBox="0 0 16 16" width="50" xmlns="http://www.w3.org/2000/svg"><path d="M15.698 7.287 8.712.302a1.03 1.03 0 0 0-1.457 0l-1.45 1.45 1.84 1.84a1.223 1.223 0 0 1 1.55 1.56l1.773 1.774a1.224 1.224 0 0 1 1.267 2.025 1.226 1.226 0 0 1-2.002-1.334L8.58 5.963v4.353a1.226 1.226 0 1 1-1.008-.036V5.887a1.226 1.226 0 0 1-.666-1.608L5.093 2.465l-4.79 4.79a1.03 1.03 0 0 0 0 1.457l6.986 6.986a1.03 1.03 0 0 0 1.457 0l6.953-6.953a1.031 1.031 0 0 0 0-1.457"/></svg>
          <img src={github} alt='Bases de datos' height="50" width="50" className="li-img-tec"></img>
          <img src={node} alt='Bases de datos' height="50" width="50" className="li-img-tec"></img>
        </div>
        <h2 className="info-h2-title title" id="proyectos">Proyectos</h2>
        <Proyecto foto={prueba} nombre="Encriptador de textos" linkGitHub="https://github.com/JeassonSuarez/encriptador-textos" linkProyectoVivo="https://jeassonsuarez.github.io/encriptador-textos/" descripcion="Con este proyecto, he aprendido un poco mas de metodos de JavaScrip, especificamente metodos de Arreglos, String, y Objetos JSON, con dichos metodos se ha podido realizar de una manera mas sencilla la aplicacion, pues al recorrer las llaves de un objeto usando un forof por ejemplo, se evita realizarlo de una manera mas manual, convirtiendo el algoritmo de cifrado y decifrado en pocas lineas de codigo."/>
        <h2 className="info-h2-title title" id="contacto">Contacto</h2>
        <Contactame />
    </div>
  );
};

export default Main;
