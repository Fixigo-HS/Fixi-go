import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 10 }}
      transition={{ duration: 1 }}
      className="contact-section"
    >
      <h2>Contact Us</h2>
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">SUBMIT</button>
      </form>
    </motion.section>
  );
};

export default Contact;