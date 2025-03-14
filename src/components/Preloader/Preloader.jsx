import React, { useState, useEffect } from 'react';
import './Preloader.css';

const Preloader = ({ onLoadComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Simulate loading process
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setProgress(prevProgress => {
          const nextProgress = prevProgress + Math.floor(Math.random() * 10);
          if (nextProgress >= 100) {
            clearInterval(interval);
            setTimeout(() => {
              setIsComplete(true);
              if (onLoadComplete) onLoadComplete();
            }, 500);
            return 100;
          }
          return nextProgress;
        });
      }, 150);
      
      return () => clearInterval(interval);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [onLoadComplete]);

  return (
    <div className={`preloader-container ${isComplete ? 'fade-out' : ''}`}>
      <div className="preloader-content">
        <div className="preloader-logo">
          <div className="logo-icon">
            <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M25 2C12.3 2 2 12.3 2 25s10.3 23 23 23 23-10.3 23-23S37.7 2 25 2z" stroke="#ffffff" strokeWidth="2"/>
              <path d="M33 20l-8 8-8-8" stroke="#ffffff" strokeWidth="2" strokeLinecap="round"/>
              <path d="M25 28V15" stroke="#ffffff" strokeWidth="2" strokeLinecap="round"/>
              <path d="M15 30h20" stroke="#ffffff" strokeWidth="2" strokeLinecap="round"/>
              <path d="M15 35h20" stroke="#ffffff" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <h1 className="logo-text">Fixigo</h1>
        </div>

        <div className="loading-bar-container">
          <div className="loading-bar" style={{ width: `${progress}%` }}></div>
        </div>
        
        <div className="loading-percentage">{progress}%</div>
        
        <div className="loading-message">
          {progress < 30 && "Preparing your experience..."}
          {progress >= 30 && progress < 60 && "Loading service experts..."}
          {progress >= 60 && progress < 90 && "Finalizing home solutions..."}
          {progress >= 90 && "Ready to transform your home!"}
        </div>
        
        <div className="floating-tools">
          <div className="tool tool-wrench"></div>
          <div className="tool tool-hammer"></div>
          <div className="tool tool-brush"></div>
          <div className="tool tool-pipe"></div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;