import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Services.css';

const Services = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [hoveredService, setHoveredService] = useState(null);

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

  const filteredServices = activeTab === 'all' 
    ? services 
    : services.filter(service => service.category === activeTab);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
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

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <section className="premium-services-section">
      <div className="services-background">
        <div className="bg-shape shape-1"></div>
        <div className="bg-shape shape-2"></div>
        <div className="bg-shape shape-3"></div>
      </div>
      
      <div className="premium-services-container">
        <motion.div 
          className="premium-services-header"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="premium-services-title">Premium Services</h2>
          <p className="premium-services-subtitle">Exceptional quality and reliability for all your home service needs</p>
          
          <motion.div 
            className="premium-services-tabs"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            {categories.map(category => (
              <motion.button
                key={category.id}
                className={`tab-button ${activeTab === category.id ? 'active' : ''}`}
                onClick={() => handleTabChange(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.name}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="premium-services-grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
          >
            {filteredServices.map((service) => (
              <motion.div
                key={service.id}
                className={`premium-service-card ${service.featured ? 'featured' : ''} ${hoveredService === service.id ? 'hovered' : ''}`}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.03, 
                  boxShadow: "0px 25px 50px rgba(0, 0, 0, 0.12)",
                  transition: { duration: 0.3 }
                }}
                onHoverStart={() => setHoveredService(service.id)}
                onHoverEnd={() => setHoveredService(null)}
              >
                {service.featured && (
                  <div className="feature-badge">
                    <span>Featured</span>
                  </div>
                )}
                
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
                    <path d={service.icon} />
                  </svg>
                  
                  <motion.div 
                    className="icon-backdrop"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  />
                </div>
                
                <motion.div 
                  className="service-content"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <h3 className="service-name">{service.name}</h3>
                  <p className="service-description">{service.description}</p>
                  
                  <div className="service-stats">
                    {service.stats.map((stat, index) => (
                      <div key={index} className="stat-item">
                        <span className="stat-value">{stat.value}</span>
                        <span className="stat-label">{stat.label}</span>
                      </div>
                    ))}
                  </div>
                  
                  <motion.button 
                    className="service-button"
                    whileHover={{ scale: 1.05, backgroundColor: '#4361ee' }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Request Service
                    <svg 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2"
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      width="20" 
                      height="20"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </motion.button>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
        
        <motion.div 
          className="services-cta"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <h3>Don't see what you need?</h3>
          <p>We offer many more specialized services tailored to your unique requirements</p>
          <motion.button 
            className="cta-button"
            whileHover={{ scale: 1.05, backgroundColor: '#3730a3' }}
            whileTap={{ scale: 0.95 }}
          >
            View All Services
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;