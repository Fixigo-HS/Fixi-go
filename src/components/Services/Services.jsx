import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Services.css';

const Services = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [hoveredService, setHoveredService] = useState(null);
  const controlsHeader = useAnimation();
  const controlsTabs = useAnimation();
  const controlsGrid = useAnimation();
  const controlsCta = useAnimation();
  
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  
  const [gridRef, gridInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [ctaRef, ctaInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  useEffect(() => {
    if (headerInView) {
      controlsHeader.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" }
      });
      
      controlsTabs.start({
        opacity: 1,
        y: 0,
        transition: { delay: 0.5, duration: 0.5 }
      });
    }
  }, [headerInView, controlsHeader, controlsTabs]);

  useEffect(() => {
    if (gridInView) {
      controlsGrid.start("visible");
    }
  }, [gridInView, controlsGrid]);

  useEffect(() => {
    if (ctaInView) {
      controlsCta.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
      });
    }
  }, [ctaInView, controlsCta]);

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'home', name: 'Home Improvement' },
    { id: 'outdoor', name: 'Outdoor' },
    { id: 'emergency', name: 'Emergency' },
  ];

  const services = [
    { 
      id: 1,
      name: 'Plumbing Solutions', 
      description: 'Professional plumbing services for repairs, installations, and maintenance. Our certified plumbers handle everything from leaky faucets to complete pipe system installations.',
      icon: 'M7 21h10M10 21l1-9M13 21l-1-9M14 13h-4M19.14 6.48A4.25 4.25 0 0 0 20.31 3a4.18 4.18 0 0 0-3.25-1.57c-.36 0-.72.04-1.07.13A7.16 7.16 0 0 0 5 8c0 1.81.71 3.56 2 4.89 1.23 1.29 1.23 3.4 1 4.11m11.14-10.52A7.167 7.167 0 0 1 19 11c0 1.81-.71 3.56-2 4.89-1.23 1.29-1.23 3.4-1 4.11',
      category: 'home',
      featured: true,
      stats: [
        { value: '24/7', label: 'Availability' },
        { value: '15min', label: 'Response Time' },
        { value: '100%', label: 'Satisfaction' }
      ]
    },
    { 
      id: 2,
      name: 'Expert Painting', 
      description: 'Transform your home with our professional painting services. We use premium paints and techniques to deliver flawless finishes for interiors and exteriors.',
      icon: 'M19 4h-4V3a1 1 0 0 0-1-1H10a1 1 0 0 0-1 1v1H5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zM3 11h18v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-8zM12 16v-2',
      category: 'home',
      featured: false,
      stats: [
        { value: '5yr', label: 'Warranty' },
        { value: '3d', label: 'Avg. Completion' },
        { value: '4.9★', label: 'Rating' }
      ]
    },
    { 
      id: 3,
      name: 'Electrical Services', 
      description: 'Comprehensive electrical services from certified professionals. We handle everything from repairs and installations to complete home rewiring with safety as our top priority.',
      icon: 'M5 12.55a11 11 0 0 1 14.08 0M1.42 9a16 16 0 0 1 21.16 0M8.53 16.11a6 6 0 0 1 6.95 0M12 20v-6M20 2L4 22',
      category: 'home',
      featured: true,
      stats: [
        { value: '100%', label: 'Licensed' },
        { value: '24hr', label: 'Service' },
        { value: '1,200+', label: 'Projects' }
      ]
    },
    { 
      id: 4,
      name: 'Custom Carpentry', 
      description: 'Skilled craftsmen creating beautiful custom woodwork for your home. From bespoke furniture to custom cabinets and architectural details that elevate your space.',
      icon: 'M17 3L7 13M17 11V3h-8M8 21l8-8M3 21h18M9 17h6',
      category: 'home',
      featured: false,
      stats: [
        { value: '25yr', label: 'Experience' },
        { value: 'Custom', label: 'Designs' },
        { value: 'Premium', label: 'Materials' }
      ]
    },
    { 
      id: 5,
      name: 'Complete Renovations', 
      description: 'End-to-end renovation services to transform your home. Our team handles design, demolition, construction, finishing, and cleanup for a stress-free experience.',
      icon: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z M9 22V12h6v10M12 2v7',
      category: 'home',
      featured: true,
      stats: [
        { value: '500+', label: 'Renovations' },
        { value: '10yr', label: 'Warranty' },
        { value: '1-Stop', label: 'Solution' }
      ]
    },
    { 
      id: 6,
      name: 'Landscape Design', 
      description: 'Create a stunning outdoor space with our professional landscape design services. We combine artistry and horticulture to transform your yard into a beautiful oasis.',
      icon: 'M12 22a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9z M10 2v7M14 2v7M12 8v14M2 8h20',
      category: 'outdoor',
      featured: true,
      stats: [
        { value: 'Custom', label: 'Designs' },
        { value: 'Native', label: 'Plants' },
        { value: '4.9★', label: 'Rating' }
      ]
    },
    { 
      id: 7,
      name: 'Deck & Patio Building', 
      description: 'Custom deck and patio construction to expand your living space outdoors. We use quality materials and expert craftsmanship for beautiful, durable results.',
      icon: 'M8 18L5 21L2 18M2 22L22 22M16 6L19 3L22 6M22 2L2 2M20 22L20 19M20 16L20 13M20 10L20 7M20 4L20 2M6 2L6 4L18 4L18 2',
      category: 'outdoor',
      featured: false,
      stats: [
        { value: '20yr', label: 'Durability' },
        { value: '100%', label: 'Custom' },
        { value: '4.8★', label: 'Rating' }
      ]
    },
    { 
      id: 8,
      name: 'Emergency Repairs', 
      description: 'Fast and reliable emergency repair services available 24/7. Our team responds quickly to minimize damage and restore safety to your home when urgent issues arise.',
      icon: 'M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0z',
      category: 'emergency',
      featured: true,
      stats: [
        { value: '24/7', label: 'Availability' },
        { value: '30min', label: 'Response' },
        { value: '100%', label: 'Reliable' }
      ]
    },
    { 
      id: 9,
      name: 'HVAC Services', 
      description: 'Complete heating, ventilation, and air conditioning services. From installation and maintenance to emergency repairs, we keep your home comfortable year-round.',
      icon: 'M9.5 21V9M3 15h6.5M14.5 21V9M21 15h-6.5M12 3v6',
      category: 'home',
      featured: false,
      stats: [
        { value: 'All', label: 'Brands' },
        { value: 'Energy', label: 'Efficient' },
        { value: '5yr', label: 'Warranty' }
      ]
    }
  ];

  // This is the key logic that was broken - filtering the services based on activeTab
  const filteredServices = activeTab === 'all' 
    ? services 
    : services.filter(service => service.category === activeTab);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const buttonVariants = {
    rest: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    tap: { 
      scale: 0.95,
      transition: {
        duration: 0.1,
        ease: "easeIn"
      }
    }
  };

  // Enhanced tab change function with animation reset
  const handleTabChange = (tabId) => {
    // Reset grid animation to prepare for new category
    controlsGrid.set("hidden");
    setActiveTab(tabId);
    // Start animation again after a short delay
    setTimeout(() => {
      controlsGrid.start("visible");
    }, 100);
  };

  const BackgroundShapes = () => (
    <div className="services-background">
      <motion.div 
        className="bg-shape shape-1"
        animate={{
          x: [0, 20, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      <motion.div 
        className="bg-shape shape-2"
        animate={{
          x: [0, -30, 0],
          y: [0, -20, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      <motion.div 
        className="bg-shape shape-3"
        animate={{
          x: [0, 25, 0],
          y: [0, -15, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
    </div>
  );

  const ServiceIcon = ({ path }) => {
    return (
      <div className="service-icon-container">
        <svg 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="service-icon"
        >
          <motion.path 
            d={path} 
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ 
              duration: 1.5, 
              ease: "easeInOut",
              delay: 0.2
            }}
          />
        </svg>
        
        <motion.div 
          className="icon-backdrop"
          initial={{ scale: 0, rotate: -10 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ 
            duration: 0.5, 
            delay: 0.2,
            type: "spring",
            stiffness: 150
          }}
        />
      </div>
    );
  };

  const ServiceCard = ({ service, index }) => {
    const [isHovered, setIsHovered] = useState(false);
    
    return (
      <motion.div
        key={service.id}
        className={`premium-service-card ${service.featured ? 'featured' : ''}`}
        variants={itemVariants}
        whileHover={{ 
          scale: 1.03, 
          boxShadow: "0px 25px 50px rgba(0, 0, 0, 0.12)",
          y: -5,
        }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        initial="hidden"
        animate="visible"
        transition={{
          delay: index * 0.1
        }}
      >
        {service.featured && (
          <motion.div 
            className="feature-badge"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + (index * 0.1) }}
          >
            <span>Featured</span>
          </motion.div>
        )}
        
        <div className="service-card-content">
          <ServiceIcon path={service.icon} />
          
          <h3 className="service-title">{service.name}</h3>
          
          <motion.p 
            className="service-description"
            initial={{ opacity: 0.7 }}
            animate={{ opacity: isHovered ? 1 : 0.7 }}
          >
            {service.description}
          </motion.p>
          
          <div className="service-stats">
            {service.stats.map((stat, i) => (
              <motion.div 
                key={i} 
                className="stat-item"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + (i * 0.1) }}
              >
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </motion.div>
            ))}
          </div>
          
          <motion.button 
            className="service-action-btn"
            variants={buttonVariants}
            initial="rest"
            whileHover="hover"
            whileTap="tap"
          >
            Learn More
          </motion.button>
        </div>
      </motion.div>
    );
  };

  return (
    <section className="services-section">
      <BackgroundShapes />
      
      <div className="container services-container">
        <motion.div 
          className="services-header"
          ref={headerRef}
          initial={{ opacity: 0, y: 50 }}
          animate={controlsHeader}
        >
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Professional home services with guaranteed quality and competitive pricing
          </p>
        </motion.div>
        
        <motion.div 
          className="services-tabs"
          initial={{ opacity: 0, y: 30 }}
          animate={controlsTabs}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              className={`tab-button ${activeTab === category.id ? 'active' : ''}`}
              onClick={() => handleTabChange(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
              {activeTab === category.id && (
                <motion.div 
                  className="active-indicator" 
                  layoutId="activeTab"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>
        
        <motion.div 
          className="services-grid"
          ref={gridRef}
          variants={containerVariants}
          initial="hidden"
          animate={controlsGrid}
        >
          <AnimatePresence>
            {filteredServices.map((service, index) => (
              <ServiceCard 
                key={service.id} 
                service={service} 
                index={index}
              />
            ))}
          </AnimatePresence>
        </motion.div>
        
        <motion.div 
          className="services-cta"
          ref={ctaRef}
          initial={{ opacity: 0, y: 40 }}
          animate={controlsCta}
        >
          <h3>Need a service not listed here?</h3>
          <p>Contact us for custom solutions tailored to your specific needs</p>
          <motion.button
            className="cta-button"
            variants={buttonVariants}
            initial="rest"
            whileHover="hover"
            whileTap="tap"
            onClick={() => window.location.href = 'http://localhost:5173/contact'}
          >
            Request Custom Service
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;