"use client"
import { useEffect,useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React from "react";
import '../Rooms/rooms.css'

gsap.registerPlugin(ScrollTrigger);

export const Room = ({imgSrc, title, description, price, rate_one, rate_two, rate_three}) => {

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
  <div className="container">
      <div className="card" ref={cardRef}>
        <img className="card img"
          src={imgSrc}
          alt="img-title"/>
        <div className="badge">
        <span className="title">{title}</span>
        </div>
        <h2 className="description">{description}</h2>
        <p className="price">{price}</p>
        <div className="rating">
          <span className="rate_one">{rate_one}</span>
          <span className="rate_two">{rate_two}</span>
          <span className="rate_three">{rate_three} </span>
        </div>
      </div>
    </div>
  );
}