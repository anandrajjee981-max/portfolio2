import React, { useEffect, useRef } from 'react'
import '../about.scss' 
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Aboutme = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // 1. Create a GSAP Context matched specifically to this container
    let ctx = gsap.context(() => {
      
      const headings = gsap.utils.toArray('.text h2');
      if (headings.length === 0) return;

      // 2. Set the initial state of your headings cleanly
      gsap.set(headings, {
        y: 60,
        opacity: 0
      });

      // 3. Create the ScrollTrigger Timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=150%",
          scrub: 2,
          pin: true,
          pinSpacing: true,
          invalidateOnRefresh: true, // Recalculates heights dynamically
        }
      });

      tl.to(headings, {
        y: 0,
        opacity: 1,
        stagger: 0.3,
        duration: 1,
        ease: "power2.out"
      });

    }, containerRef); // Scopes all animations inside containerRef

    // 4. CLEANUP: This matches your Heo.jsx perfectly and kills double-renders!
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className='about'>
      <div className="text">
        <h2>I’m a front-end developer who loves building clean and interactive web experiences.</h2>
        <h2>I work with React, JavaScript, and modern tools to turn ideas into real projects.</h2>
        <h2>Currently exploring the MERN stack.</h2>
      </div>
    </div>
  )
}

export default Aboutme