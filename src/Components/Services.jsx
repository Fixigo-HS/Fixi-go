import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    { name: 'Plumbing', image: 'plumbing.jpg' },
    { name: 'Painting', image: 'painting.jpg' },
    { name: 'Electric Works', image: 'electric.jpg' },
    { name: 'Carpentry', image: 'carpentry.jpg' },
    { name: 'Home Renovations', image: 'renovation.jpg' },
    { name: 'Packers & Movers', image: 'packers & movers'}
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
            <img src={`/images/plumbing.jpg`} alt={plumbing} />
            <h3>PLUMING</h3>
            <img src={`/images/painting.jpg`} alt={painting} />
            <h3>PAINTING</h3>
            <img src={`/images/electric.jpg`} alt={electric} />
            <h3>ELECTRIC</h3>
            <img src={`/images/carpentry.jpg`} alt={carpentry} />
            <h3>CARPENTRY</h3>
            <img src={`/images/renovations.jpg`} alt={renovations} />
            <h3> HOME RENOVATIONS</h3>
            <img src={`/images/packers & movers.jpg`} alt={packers & movers} />
            <h3>PACKERS & MOVERS </h3>
          </motion.div>
        ))} 
      </div>
    </motion.section>
  );
};

export default Services;