import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    { name: 'Plumbing', image: 'plumbing.jpg' },
    { name: 'Painting', image: 'painting.jpg' },
    { name: 'Electric Works', image: 'electric.jpg' },
    { name: 'Carpentry', image: 'carpentry.jpg' },
    { name: 'Home Renovations', image: 'renovation.jpg' },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="services-section"
    >
      <h2>Our Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            className="service-card"
          >
            <img src={`/images/${service.image}`} alt={service.name} />
            <h3>{service.name}</h3>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Services;