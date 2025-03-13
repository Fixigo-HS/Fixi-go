import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './About.css';

const About = () => {
  // Animation controls for each section
  const heroControls = useAnimation();
  const missionControls = useAnimation();
  const teamControls = useAnimation();
  const ctaControls = useAnimation();
  
  // Intersection observers for each section
  const [heroRef, heroInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [missionRef, missionInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [teamRef, teamInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [ctaRef, ctaInView] = useInView({ threshold: 0.2, triggerOnce: true });
  
  // Trigger animations when sections come into view
  useEffect(() => {
    if (heroInView) heroControls.start('visible');
    if (missionInView) missionControls.start('visible');
    if (teamInView) teamControls.start('visible');
    if (ctaInView) ctaControls.start('visible');
  }, [heroInView, missionInView, teamInView, ctaInView, heroControls, missionControls, teamControls, ctaControls]);
  
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };
  
  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };
  
  return (
    <div className="about-us-container">
      {/* Parallax Background with animated elements */}
      <div className="parallax-bg">
        <div className="floating-particle p1"></div>
        <div className="floating-particle p2"></div>
        <div className="floating-particle p3"></div>
        <div className="floating-particle p4"></div>
        <div className="floating-particle p5"></div>
      </div>

      {/* Hero Section */}
      <motion.section 
        className="hero-section"
        ref={heroRef}
        initial="hidden"
        animate={heroControls}
        variants={staggerChildren}
      >
        <div className="hero-overlay">
          <motion.div 
            className="hero-image-container"
            initial={{ scale: 1.1, opacity: 0.8 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
          >
          </motion.div>
        </div>
        <motion.div className="hero-content" variants={fadeInUp}>
          <motion.h1 
            variants={fadeInUp}
            className="hero-title"
          >
            Welcome to <span className="highlight">Fixigo</span>
          </motion.h1>
          <motion.p 
            variants={fadeInUp}
            className="hero-subtitle"
          >
            Transforming Houses into Dream Homes
          </motion.p>
          <motion.div 
            className="scroll-indicator"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <svg width="40" height="40" viewBox="0 0 24 24">
              <path 
                fill="#ffffff" 
                d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
              />
            </svg>
          </motion.div>
        </motion.div>
      </motion.section>
      
      {/* Mission Section */}
      <motion.section 
        className="mission-section"
        ref={missionRef}
        initial="hidden"
        animate={missionControls}
        variants={staggerChildren}
      >
        <motion.h2 variants={fadeInUp} className="section-title">
          Our <span className="highlight">Vision</span>
        </motion.h2>
        <motion.div variants={fadeInUp} className="divider"></motion.div>
        <motion.p variants={fadeInUp} className="mission-text">
          At Fixigo, we believe that your home should be your sanctuary – a place that reflects your personality, 
          meets your needs, and exceeds your expectations. With over 15 years of experience in home services, 
          we've built a reputation for excellence, reliability, and stunning transformations that breathe new life 
          into every space we touch.
        </motion.p>
        
        {/* Values Cards */}
        <motion.div 
          className="values-container"
          variants={staggerChildren}
        >
          <motion.div className="value-card" variants={scaleIn}>
            <div className="value-icon">
              <svg width="40" height="40" viewBox="0 0 24 24">
                <path 
                  fill="currentColor" 
                  d="M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z"
                />
              </svg>
            </div>
            <h3>Excellence</h3>
            <p>We maintain the highest standards in every project, no matter how big or small.</p>
          </motion.div>
          
          <motion.div className="value-card" variants={scaleIn}>
            <div className="value-icon">
              <svg width="40" height="40" viewBox="0 0 24 24">
                <path 
                  fill="currentColor" 
                  d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9A3,3 0 0,1 15,12Z"
                />
              </svg>
            </div>
            <h3>Innovation</h3>
            <p>We stay ahead of trends to bring fresh, creative solutions to every home.</p>
          </motion.div>
          
          <motion.div className="value-card" variants={scaleIn}>
            <div className="value-icon">
              <svg width="40" height="40" viewBox="0 0 24 24">
                <path 
                  fill="currentColor" 
                  d="M12,5.5A3.5,3.5 0 0,1 15.5,9A3.5,3.5 0 0,1 12,12.5A3.5,3.5 0 0,1 8.5,9A3.5,3.5 0 0,1 12,5.5M5,8C5.56,8 6.08,8.15 6.53,8.42C6.38,9.85 6.8,11.27 7.66,12.38C7.16,13.34 6.16,14 5,14A3,3 0 0,1 2,11A3,3 0 0,1 5,8M19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14C17.84,14 16.84,13.34 16.34,12.38C17.2,11.27 17.62,9.85 17.47,8.42C17.92,8.15 18.44,8 19,8M5.5,18.25C5.5,16.18 8.41,14.5 12,14.5C15.59,14.5 18.5,16.18 18.5,18.25V20H5.5V18.25M0,20V18.5C0,17.11 1.89,15.94 4.45,15.6C3.86,16.28 3.5,17.22 3.5,18.25V20H0M24,20H20.5V18.25C20.5,17.22 20.14,16.28 19.55,15.6C22.11,15.94 24,17.11 24,18.5V20Z"
                />
              </svg>
            </div>
            <h3>Client-Focused</h3>
            <p>Your vision drives our process, ensuring results that exceed expectations.</p>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Team Section */}
      <motion.section 
        className="team-section"
        ref={teamRef}
        initial="hidden"
        animate={teamControls}
        variants={staggerChildren}
      >
        <motion.h2 variants={fadeInUp} className="section-title">
          Our <span className="highlight">Experts</span>
        </motion.h2>
        <motion.div variants={fadeInUp} className="divider"></motion.div>
        
        <motion.div 
          className="team-container"
          variants={staggerChildren}
        >
          <motion.div className="team-member" variants={scaleIn}>
            <div className="member-image member-1"></div>
            <h3>Sarah Johnson</h3>
            <p>Interior Designer</p>
          </motion.div>
          
          <motion.div className="team-member" variants={scaleIn}>
            <div className="member-image member-2"></div>
            <h3>Michael Chen</h3>
            <p>Renovation Specialist</p>
          </motion.div>
          
          <motion.div className="team-member" variants={scaleIn}>
            <div className="member-image member-3"></div>
            <h3>Emma Rodriguez</h3>
            <p>Project Manager</p>
          </motion.div>
        </motion.div>
      </motion.section>
      
      {/* Call-to-Action Section */}
      <motion.section 
        className="cta-section"
        ref={ctaRef}
        initial="hidden"
        animate={ctaControls}
        variants={staggerChildren}
      >
        <motion.div className="cta-content" variants={fadeInUp}>
          <motion.h2 variants={fadeInUp} className="cta-title">
            Ready to Transform Your Home?
          </motion.h2>
          <motion.p variants={fadeInUp} className="cta-subtitle">
            Let's create the living space you've always dreamed of!
          </motion.p>
          <motion.a 
            href="/Contact" 
            className="cta-button"
            variants={fadeInUp}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 8px 30px rgba(108, 99, 255, 0.7)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
            <svg width="20" height="20" viewBox="0 0 24 24" className="arrow-icon">
              <path 
                fill="currentColor" 
                d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"
              />
            </svg>
          </motion.a>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default About;