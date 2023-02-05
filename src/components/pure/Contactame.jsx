import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../../styles/Contactame.styles.css";

const Contactame = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pzd4iyz",
        "template_q8s5m6i",
        form.current,
        "G7ZPFFIxOcvFE-xIK"
      )
      .then(
        (result) => {
          alert(result.text)
        },
        (error) => {
          alert(error.text)
        }
      );
  };

  return (
    <div className="div-contacto">
      <form ref={form} onSubmit={sendEmail}>
        <label htmlFor="to_name">Nombre</label>
        <input type="text" name="to_name" id="to_name" className="contacto-input" />
        <label htmlFor="from_name">Correo Electronico</label>
        <input type="email" name="from_name" id="from_name" className="contacto-input" />
        <label htmlFor="message">Mensaje</label>
        <textarea name="message" id="message" className="contacto-input" />
        <input type="submit" value="Enviar" className="contacto-btn enviar"/>
      </form>
    </div>
  );
};

export default Contactame;
