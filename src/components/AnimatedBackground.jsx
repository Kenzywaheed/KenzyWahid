import React, { useState, useEffect } from 'react';
import './AnimatedBackground.css';

const AnimatedBackground = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Calculate normalized mouse coordinates (-1 to 1)
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="animated-bg">
      <div 
        className="parallax-wrapper" 
        style={{ transform: `translate(${mousePos.x * 120}px, ${mousePos.y * 120}px)` }}
      >
        <div className="gradient-sphere sphere-1"></div>
      </div>
      
      <div 
        className="parallax-wrapper" 
        style={{ transform: `translate(${mousePos.x * -160}px, ${mousePos.y * -90}px)` }}
      >
        <div className="gradient-sphere sphere-2"></div>
      </div>
      
      <div 
        className="parallax-wrapper" 
        style={{ transform: `translate(${mousePos.x * 80}px, ${mousePos.y * -150}px)` }}
      >
        <div className="gradient-sphere sphere-3"></div>
      </div>

      <div className="noise-overlay"></div>
    </div>
  );
};

export default AnimatedBackground;
