import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi'; // Sleek line icon
import "./button.scss";

const Resume = () => {
  return (
    <motion.a 
      href="/Anand_Raj_Resume.pdf" 
      download="Anand_Raj_Resume.pdf"
      className="modern-download-btn"
      
      // Hover and Tap animations for the main button
      whileHover="hover"
      whileTap="tap"
    >
      {/* Background Animated Glow */}
      <motion.div 
        className="glow-effect"
        variants={{
          hover: { scale: 1.5, opacity: 1 }
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />

      {/* Content Wrapper */}
      <div className="btn-content">
        <motion.span
          variants={{
            hover: { x: 4 }
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          Download Resume
        </motion.span>

        {/* Icon Container with Arrow-Drop Animation */}
        <div className="icon-overflow">
          <motion.div
            variants={{
              hover: { y: [0, 25, -25, 0] }, // Down, vanish, reappear from top, settle
              tap: { scale: 0.8 }
            }}
            transition={{ 
              hover: { times: [0, 0.4, 0.41, 0.8], duration: 0.5, ease: "easeInOut" }
            }}
          >
            <FiDownload />
          </motion.div>
        </div>
      </div>
    </motion.a>
  );
};

export default Resume;