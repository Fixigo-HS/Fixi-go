import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="about-section"
    >
      <h2>About Us</h2>
      <p>
        Fixigo is your trusted partner for all home maintenance and renovation needs. With years of experience, we provide top-notch services to make your home a better place.
      </p>
    </motion.section>
  );
};

export default About;