"use client"
import React from 'react';
import { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import './contactanos.css'

gsap.registerPlugin(ScrollTrigger);

export const FormularioContacto = () => {

  const cardRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 480, duration: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 80%", // Cambia esto para ajustar el punto de activación de la animación
          end: "bottom 80%", // Cambia esto para ajustar el punto de finalización de la animación
          toggleActions: "play none none reverse",
        },
      }
    );
  }
  );


  return (
    <div className="contact-form" ref={cardRef}>
      <h2>Contactanos</h2>
      <form>
        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="form-group">
          <label htmlFor="mensaje">Mensaje:</label>
          <textarea id="mensaje" name="mensaje"></textarea>
        </div>
        <button type="submit" className='button'>Enviar</button>
      </form>
    </div>
  );
};


