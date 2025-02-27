import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="about-us"
    >
      {/* Hero Section */}
      <div className="hero-section2">
        <div className="hero-content2">
          <h1>Welcome to Fixigo Home Services</h1>
          <p>Your trusted partner for all home maintenance and repair needs.</p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="mission-section">
        <h2>Our Mission</h2>
        <p>
          At Fixigo, we are committed to providing high-quality, reliable, and affordable home
          services. Our goal is to make your life easier by taking care of all your home maintenance
          needs with professionalism and care.
        </p>
      </div>
      
      {/* Call-to-Action Section */}
      <div className="cta-section">
        <h2>Ready to Transform Your Home?</h2>
        <p>Contact us today for a free consultation!</p>
        <a href="http://localhost:5173/contact" className="cta-button"> Get Started </a>
      </div>
    </motion.section>
  );
};

export default AboutUs;