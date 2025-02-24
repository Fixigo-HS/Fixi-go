import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    { name: 'Plumbing', image: '/images/plumbing.jpg' },
    { name: 'Painting', image: '/images/painting.jpg' },
    { name: 'Electric Works', image: '/images/electrica.jpg' },
    { name: 'Carpentry', image: '/images/carpentry.jpg' },
    { name: 'Home Renovations', image: '/images/renovations.jpg' },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="services-section"
    >
      <div className="services-section">
        <h2>Our Services</h2>
        <div className="service-cards">
          <div className="service-card">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Home Repair"
            />
            <h3>Home Repairs</h3>
            <p>From plumbing to electrical, we handle it all.</p>
          </div>
          <div className="service-card">
            <img
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Cleaning"
            />
            <h3>Cleaning Services</h3>
            <p>Professional cleaning for a spotless home.</p>
          </div>
          <div className="service-card">
            <img
              src="https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Landscaping"
            />
            <h3>Landscaping</h3>
            <p>Transform your outdoor space with our experts.</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Services;