import { motion } from 'framer-motion';


const ContactUs = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="contact-us"
    >
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1>Contact Fixigo Home Services</h1>
          <p>We're here to help with all your home service needs. Get in touch today!</p>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="contact-form-section">
        <h2>Get in Touch</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" placeholder="How can we help you?" required></textarea>
          </div>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>

      {/* Call-to-Action Section */}
      <div className="cta-section">
        <h2>Need Immediate Assistance?</h2>
        <p>Call us now at <strong>+91 8688939382</strong> or email us at <strong>Consult.fixigo@gmail.com</strong>.</p>
        <a href="tel:8688939382" className="cta-button">Call Now</a>
      </div>
    </motion.section>
  );
};

export default ContactUs;