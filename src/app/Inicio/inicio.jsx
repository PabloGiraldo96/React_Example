"use client"
import React from "react";
import '../Inicio/inicio.css'
import { gsap } from "gsap";
import { useEffect, useRef } from "react";


export const Inicio = () => {

  const cardRef = useRef(null);

  useEffect(() => {
    // Animación al montar el componente
    gsap.fromTo(cardRef.current, { opacity: 0, y: 160 }, { opacity: 1, y: -15, duration: 2 });

  }, []); 


  return (
    <div className="home-container">
      <div className='banner-home'>
      <img
          src="https://a0.muscache.com/pictures/miso/Hosting-46891731/original/11f506a4-1193-4d00-86e4-9c74cc029bb6.jpeg"
          alt="Apartamento ejemplo landing"
          width="300"
          height="200"
          className="image-container"/>
        <h1 className="text-title" ref={cardRef}>Encuentra el mejor lugar para vivir</h1>
      </div>
    </div>
  );
};
