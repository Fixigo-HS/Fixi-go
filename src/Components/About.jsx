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
      <div className="hero-section">
        <div className="hero-content">
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

      {/* Services Section */}

      {/* Team Section */}
      <div className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-cards">
          <div className="team-card">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Team Member 1"
            />
            <h4>John Doe</h4>
            <p>CEO & Founder</p>
          </div>
          <div className="team-card">
            <img
              src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Team Member 2"
            />
            <h4>Jane Smith</h4>
            <p>Operations Manager</p>
          </div>
          <div className="team-card">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Team Member 3"
            />
            <h4>Michael Johnson</h4>
            <p>Lead Technician</p>
          </div>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="cta-section">
        <h2>Ready to Transform Your Home?</h2>
        <p>Contact us today for a free consultation!</p>
        <a href="http://localhost:5174/contact" className="cta-button"> Get Started </a>
      </div>
    </motion.section>
  );
};

export default AboutUs;