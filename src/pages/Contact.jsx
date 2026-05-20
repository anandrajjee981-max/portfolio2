import React, { useEffect, useRef } from 'react';
import "./contact.scss";
import { FaLinkedinIn, FaInstagramSquare } from "react-icons/fa";
import { DiGithubBadge } from "react-icons/di";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Resume from './Resume';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const cardRef = useRef(null);

  useEffect(() => {
    // 1. Scroll-triggered physical hanging swing animation
    gsap.fromTo(cardRef.current, 
      {
        rotateX: -80,    // Tilted way backward horizontally
        opacity: 0,
        scale: 0.85
      },
      {
        rotateX: 0,
        opacity: 1,
        scale: 1,
        ease: "back.out(1.7)", // Gives it that natural physical bounce at the end of the swing
        scrollTrigger: {
          trigger: ".contact",
          start: "top 75%",
          end: "top 25%",
          scrub: 1.2, // Adds smooth weight damping to the scroll action
        }
      }
    );
  }, []);

  // 2. Micro-interaction: Interactive 3D Card Hover effect
  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // Mouse position inside card (X)
    const y = e.clientY - rect.top;  // Mouse position inside card (Y)
    
    // Calculate tilt angles based on center point (max 15 degrees tilt)
    const rotateY = ((x / rect.width) - 0.5) * 30; 
    const rotateX = ((y / rect.height) - 0.5) * -30;

    gsap.to(card, {
      rotateY: rotateY,
      rotateX: rotateX,
      duration: 0.4,
      ease: "power3.out",
      overwrite: "auto"
    });
  };

  // Reset card rotation smoothly when mouse leaves
  const handleMouseLeave = () => {
    gsap.to(cardRef.current, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.6,
      ease: "power3.out"
    });
  };

  return (
    <div className='contact'>
      <div 
        className="box" 
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <h2>contact me</h2>
        <div className="social-icons">
          <FaLinkedinIn />
          <FaInstagramSquare />
          <DiGithubBadge />
        </div>
      </div>
      <div className="resume">
        <Resume/>
      </div>
    </div>
  );
};

export default Contact;