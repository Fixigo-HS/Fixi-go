import React, { useEffect, useState } from 'react';
import './Home.css';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    // Trigger initial animations after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    // Add scroll listener for parallax effects
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="hero-section">
      {/* Animated particles */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i} 
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`
            }}
          ></div>
        ))}
      </div>
      
      {/* Background with parallax effect */}
      <div className="background" style={{ transform: `translateY(${scrollY * 0.3}px)` }}>
        <img
          src="https://images.unsplash.com/photo-1738168246881-40f35f8aba0a?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Fixigo Home Services Background"
          className="bg-image"
        />
        <div className="gradient-overlay"></div>
      </div>
      
      {/* Main content container */}
      <div className="content-container">
        <div className={`logo-container ${isVisible ? 'visible' : ''}`}>
          <div className="logo-icon"></div>
          <h1 className="logo-text">Fixigo</h1>
        </div>
        
        <h2 className={`main-heading ${isVisible ? 'visible' : ''}`}>
          Transform Your Home
          <span className="heading-highlight"> Experience</span>
        </h2>
        
        <p className={`subheading ${isVisible ? 'visible' : ''}`}>
          Your one-stop solution for all home problems, delivering excellence with every service
        </p>
        
        <div className={`cta-container ${isVisible ? 'visible' : ''}`}>
          <button className="cta-button primary">
            Get Started
            <span className="btn-shine"></span>
          </button>
          <button className="cta-button secondary">
            Learn More
          </button>
        </div>
        
        {/* Service highlights */}
        {/* <div className={`service-highlights ${isVisible ? 'visible' : ''}`}>
          {[
            { icon: '🔧', title: 'Repairs' },
            { icon: '🧹', title: 'Cleaning' },
            { icon: '🔌', title: 'Electrical' },
            { icon: '🚿', title: 'Plumbing' }
          ].map((service, index) => (
            <div 
              key={index} 
              className="service-card"
              style={{ animationDelay: `${0.8 + index * 0.2}s` }}
            >
              <div className="service-icon">{service.icon}</div>
              <div className="service-title">{service.title}</div>
            </div>
          ))}
        </div> */}
      </div>
      
      {/* Animated scroll indicator */}
      <div className={`scroll-indicator ${isVisible ? 'visible' : ''}`}>
        <div className="scroll-dot"></div>
        <div className="scroll-dot"></div>
        <div className="scroll-dot"></div>
      </div>
    </section>
  );
};

export default Home;