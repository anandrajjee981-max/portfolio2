import React, { useEffect, useRef } from 'react'
import '../skill.scss' 
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Skill = () => {
  const skills = [
    "HTML5", "CSS3", "JavaScript", "PostgreSql", 
    "Tailwind", "SCSS", "Langchain", "GSAP", "MERN","Typescript"
  ];
  
  const containerRef = useRef(null);

useEffect(() => {
  if (!containerRef.current) return;

  let ctx = gsap.context(() => {
    const card = containerRef.current.querySelector(".card");
    const badges = containerRef.current.querySelectorAll(".skill-badge");

    if (!card) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",      // Jab container top screen ko touch kare tab pin ho
        end: "+=100%",         // 100% viewport scroll hone tak transition lock rahegi
        scrub: 1.5,            // Thoda smooth scrub rakhne se stuttering rukti hai
        pin: true,             // Isse container scroll par lock ho jayega
        pinSpacing: true,      // ⚠️ Yeh line layout ko collapse hone se bachaegi!
        anticipatePin: 1,      // Browser jumps ko minimize karne ke liye
      }
    });

    // Step 1: Background container thoda settle hoga
    tl.from(containerRef.current, {
      opacity: 0.8,
      duration: 0.5,
    });

    // Step 2: Card bottom-center se center position par fade-in hoga
    // (x coordinates bypass kiye hain taaki side mein jump na kare)
    tl.from(card, {
      y: 50,                  // Sirf niche se upar aayega, right-left alignment nahi bigdegi
      opacity: 0,
      scale: 0.95,
      duration: 1.2,
      ease: "power2.out"
    }, "-=0.3");

    // Step 3: Badges popup honge
    if (badges.length > 0) {
      tl.from(badges, {
        y: 30,
        opacity: 0,
        stagger: 0.08,
        duration: 0.8,
        ease: "power2.out"
      }, "-=0.6");
    }

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