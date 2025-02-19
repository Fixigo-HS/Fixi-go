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
      <h2>Our Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="service-card"
          >
            <img src={service.image} alt={service.name} />
            <h3>{service.name}</h3>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Services;