import React, { useEffect, useRef } from 'react'
import '../about.scss' 
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Aboutme = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // 1. Create a GSAP MatchMedia instance
    let mm = gsap.matchMedia();

    // 2. Mobile and Desktop ke liye alag rules setup karenge
    mm.add({
      // Desktop: jab screen width 768px se badi ho
      isDesktop: "(min-width: 768px)",
      // Mobile: jab screen width 767px ya usse choti ho
      isMobile: "(max-width: 767px)"
    }, (context) => {
      let { isDesktop } = context.conditions;
      
      const headings = gsap.utils.toArray('.text h2');
      if (headings.length === 0) return;

      // Mobile par 60px bohot zyada ho jata hai, isliye isse responsive banaya
      gsap.set(headings, {
        y: isDesktop ? 60 : 30, 
        opacity: 0
      });

      // Desktop: Pinned scroll animation chalegi
      if (isDesktop) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "+=150%",
            scrub: 1.5, // 2 se thoda kam kiya for better responsiveness
            pin: true,
            invalidateOnRefresh: true,
          }
        });

        tl.to(headings, {
          y: 0,
          opacity: 1,
          stagger: 0.3,
          duration: 1,
          ease: "power2.out"
        });
      } 
      // Mobile: Bina pin kiye, simple scroll transition (best user experience)
      else {
        headings.forEach((heading) => {
          gsap.to(heading, {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: heading,
              start: "top 85%", // Jab text screen ke 85% area me aaye tab animate ho
              toggleActions: "play none none reverse"
            }
          });
        });
      }
    }, containerRef); // Scope to containerRef

    // Cleanup everything
    return () => mm.revert();
  }, []);

  return (
 <div ref={containerRef} className="about">
  <div className="text">
    <h2>
      Full Stack Developer focused on building fast, scalable, and user-centric web applications that solve real world problems.
    </h2>

    <h2>
      I work with JavaScript, TypeScript, React, Node.js, Express, MongoDB, PostgreSQL, and Redis to develop modern full stack systems.
    </h2>

    <h2>
  exploring AI integrations using LLM APIs to build practical developer tools and intelligent applications.
    </h2>

  
  </div>
</div>
  )
}

export default Aboutme;