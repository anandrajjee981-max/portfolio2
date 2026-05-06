import React, { useEffect, useRef } from 'react'
import '../skill.scss' 
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Skill = () => {
  const skills = [
    "HTML5", "CSS3", "JavaScript", "React", 
    "Tailwind", "SCSS", "MongoDB", "GSAP", "MERN"
  ];
    const containerRef = useRef(null);
useEffect(() => {
  let ctx = gsap.context(() => {

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=150%",
        scrub: 2,
        pin: true,
      }
    });

    // container effect
    tl.from(containerRef.current, {
      scale: 1.1,
      opacity: 0.5,
      duration: 1,
    });

    // ✅ CARD animation (yahi missing tha)
    const card = containerRef.current.querySelector(".card");

    gsap.from(card, {
      x: 150,
      opacity: 0,
      scale: 0.9,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
      }
    });

  }, containerRef);

  return () => ctx.revert();

}, []);

  return (
    <div ref={containerRef} className='container'>
      <div className="card">
        <h2 className="title">My Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <span key={index} className="skill-badge">{skill}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skill