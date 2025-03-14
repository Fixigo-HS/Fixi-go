import React, { useEffect, useState, useRef } from 'react';
import './Preloader.css';

const Preloader = ({ onLoadComplete }) => {
  const [loading, setLoading] = useState(true);
  const particlesRef = useRef(null);
  const preloaderRef = useRef(null);
  
  // Create particles effect
  useEffect(() => {
    if (!particlesRef.current) return;
    
    const particlesContainer = particlesRef.current;
    const particleCount = 20;
    
    for (let i = 0; i < particleCount; i++) {
      createParticle(particlesContainer);
    }
    
    return () => {
      // Cleanup particles on unmount
      while (particlesContainer.firstChild) {
        particlesContainer.removeChild(particlesContainer.firstChild);
      }
    };
  }, []);
  
  // Create a single particle
  const createParticle = (container) => {
    const particle = document.createElement('div');
    particle.classList.add('fixigo-particle');
    
    // Random particle properties
    const size = Math.random() * 8 + 2;
    const posX = Math.random() * 100;
    const posY = Math.random() * 100;
    const duration = Math.random() * 20 + 10;
    const delay = Math.random() * 5;
    
    // Set particle styles
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${posX}%`;
    particle.style.top = `${posY}%`;
    particle.style.opacity = Math.random() * 0.6 + 0.1;
    
    // Set animation
    particle.style.animation = `pulse ${duration}s ${delay}s infinite alternate`;
    
    container.appendChild(particle);
  };
  
  // Handle loading completion
  useEffect(() => {
    const timer = setTimeout(() => {
      if (preloaderRef.current) {
        preloaderRef.current.classList.add('fixigo-fade-out');
      }
      
      setTimeout(() => {
        setLoading(false);
        if (onLoadComplete) {
          onLoadComplete();
        }
      }, 500);
    }, 3500); // Total loading time
    
    return () => clearTimeout(timer);
  }, [onLoadComplete]);
  
  if (!loading) return null;
  
  return (
    <div className="fixigo-preloader-container" ref={preloaderRef}>
      <div className="fixigo-particles" ref={particlesRef}></div>
      <div className="fixigo-preloader-content">
        <div className="fixigo-logo">
          <div className="fixigo-logo-circle"></div>
          <div className="fixigo-logo-circle"></div>
          <div className="fixigo-logo-circle"></div>
        </div>
        <div className="fixigo-text">FIXIGO</div>
        <div className="fixigo-tagline">Professional Home Services</div>
        <div className="fixigo-progress">
          <div className="fixigo-progress-bar"></div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;

// Usage example:
/*
import FixigoPreloader from './FixigoPreloader';


*/