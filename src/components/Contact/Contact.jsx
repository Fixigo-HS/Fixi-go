import React, { useRef, useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Contact.css';

const ContactUs = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeQuestion, setActiveQuestion] = useState(null);

  // Animation controls
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Send email to your team
    emailjs
      .sendForm(
        'service_2gqcdnp', // Your Service ID
        'template_ndhwwo3', // Template ID for team email
        form.current,
        'ZiaUSpqHF2yO_AfPu' // Your Public Key
      )
      .then((result) => {
        console.log('Email to team sent:', result.text);

        // Extract customer's email from the form
        const customerEmail = form.current.email.value;

        // Send auto-reply to the customer
        emailjs
          .send(
            'service_2gqcdnp', // Your Service ID
            'template_h083it5', // Template ID for auto-reply
            {
              to_email: customerEmail, // Send auto-reply to this email
              name: form.current.name.value, // Use customer's name
            },
            'ZiaUSpqHF2yO_AfPu' // Your Public Key
          )
          .then((autoReplyResult) => {
            console.log('Auto-reply sent:', autoReplyResult.text);
            toast.success('Thank you! Your message has been received. We\'ll get back to you shortly.', {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              style: {
                background: "linear-gradient(to right, #6c63ff, #4834d4)",
                color: "white",
                borderRadius: "10px",
                fontFamily: "'Montserrat', sans-serif",
                boxShadow: "0 8px 32px rgba(108, 99, 255, 0.2)"
              }
            });
            setIsSubmitting(false);
          })
          .catch((autoReplyError) => {
            console.error('Auto-reply failed:', autoReplyError.text);
            toast.error('Failed to send auto-reply.');
            setIsSubmitting(false);
          });

        form.current.reset();
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
      })
      .catch((error) => {
        console.error('Email to team failed:', error.text);
        toast.error('Failed to send message. Please try again later.');
        setIsSubmitting(false);
      });
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="contact-us"
    >
      {/* Hero Section */}
      <motion.div
        className="hero-section1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="hero-content">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            Let's Connect with Fixigo
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            Expert home services at your fingertips. Your satisfaction is our top priority.
          </motion.p>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          >
            <a href="#contact-form" className="hero-button">Get Started</a>
          </motion.div>
        </div>
        <div className="hero-overlay"></div>
      </motion.div>

      {/* Contact Form Section */}
      <motion.div
        className="contact-form-section"
        id="contact-form"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        <motion.div className="form-container" variants={itemVariants}>
          <div className="form-header">
            <motion.h2 variants={itemVariants}>Reach Out to Us</motion.h2>
            <motion.p variants={itemVariants}>
              We'd love to hear from you. Fill out the form below and our team will get back to you within 24 hours.
            </motion.p>
          </div>
         
          <motion.form ref={form} onSubmit={sendEmail} variants={itemVariants}>
            <div className="form-grid">
              <motion.div className="form-group" variants={itemVariants}>
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </motion.div>
             
              <motion.div className="form-group" variants={itemVariants}>
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </motion.div>
             
              <motion.div className="form-group" variants={itemVariants}>
                <label htmlFor="phone">Mobile Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Enter your mobile number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </motion.div>
             
              <motion.div className="form-group service-selection" variants={itemVariants}>
                <label htmlFor="service">Service Required</label>
                <select id="service" name="service" required>
                  <option value="">Select a service</option>
                  <option value="plumbing">Plumbing</option>
                  <option value="electrical">Electrical</option>
                  <option value="carpentry">Carpentry</option>
                  <option value="painting">Painting</option>
                  <option value="cleaning">Cleaning</option>
                  <option value="other">Other</option>
                </select>
              </motion.div>
             
              <motion.div className="form-group full-width" variants={itemVariants}>
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your requirements"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </motion.div>
            </div>
           
            <motion.button
              type="submit"
              className="submit-button"
              disabled={isSubmitting}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={itemVariants}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
              <i className="fas fa-paper-plane"></i>
            </motion.button>
          </motion.form>
        </motion.div>
       
        <motion.div className="contact-info" variants={itemVariants}>
          <motion.div className="info-card" variants={itemVariants}>
            <div className="info-icon">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <h3>Our Location</h3>
            <p>123 Urban Square, Hyderabad, Telangana 500081</p>
          </motion.div>
         
          <motion.div className="info-card" variants={itemVariants}>
            <div className="info-icon">
              <i className="fas fa-phone-alt"></i>
            </div>
            <h3>Call Us</h3>
            <p>+91 8688939382</p>
            <p>Mon-Sat: 9am-6pm</p>
          </motion.div>
         
          <motion.div className="info-card" variants={itemVariants}>
            <div className="info-icon">
              <i className="fas fa-envelope"></i>
            </div>
            <h3>Email Us</h3>
            <p>Consult.fixigo@gmail.com</p>
            <p>support@fixigo.com</p>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Call-to-Action Section */}
      <motion.div
        className="cta-section"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div className="cta-content">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Need Immediate Assistance?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            Our emergency team is ready to help you 24/7. Call us now at <strong>+91 8688939382</strong> or email us at <a href="mailto:Consult.fixigo@gmail.com">Consult.fixigo@gmail.com</a>.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="cta-buttons"
          >
            <a href="tel:8688939382" className="cta-button">
              <i className="fas fa-phone"></i> Call Now
            </a>
            <a href="https://wa.me/918688939382" className="cta-button whatsapp">
              <i className="fab fa-whatsapp"></i> WhatsApp
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* FAQ Section */}
      <motion.div
        className="faq-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2>Frequently Asked Questions</h2>
        <div className="faq-container">
          <motion.div
            className="faq-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="faq-question" onClick={() => toggleQuestion(0)}>
              <h3>What services does Fixigo offer?</h3>
              <span className={`faq-icon ${activeQuestion === 0 ? 'active' : ''}`}>
                <i className="fas fa-chevron-down"></i>
              </span>
            </div>
            <motion.div
              className="faq-answer"
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: activeQuestion === 0 ? 'auto' : 0,
                opacity: activeQuestion === 0 ? 1 : 0
              }}
              transition={{ duration: 0.3 }}
            >
              <p>Fixigo offers a comprehensive range of home services including plumbing, electrical work, carpentry, painting, cleaning, and more. Our professional team is equipped to handle all your home maintenance and improvement needs.</p>
            </motion.div>
          </motion.div>
         
          <motion.div
            className="faq-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="faq-question" onClick={() => toggleQuestion(1)}>
              <h3>How quickly can you respond to service requests?</h3>
              <span className={`faq-icon ${activeQuestion === 1 ? 'active' : ''}`}>
                <i className="fas fa-chevron-down"></i>
              </span>
            </div>
            <motion.div
              className="faq-answer"
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: activeQuestion === 1 ? 'auto' : 0,
                opacity: activeQuestion === 1 ? 1 : 0
              }}
              transition={{ duration: 0.3 }}
            >
              <p>For standard service requests, we typically respond within 24 hours. For emergency services, our team aims to reach your location within 1-2 hours, depending on availability and your location.</p>
            </motion.div>
          </motion.div>
         
                    <motion.div
            className="faq-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="faq-question" onClick={() => toggleQuestion(2)}>
              <h3>Do you provide service guarantees?</h3>
              <span className={`faq-icon ${activeQuestion === 2 ? 'active' : ''}`}>
                <i className="fas fa-chevron-down"></i>
              </span>
            </div>
            <motion.div
              className="faq-answer"
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: activeQuestion === 2 ? 'auto' : 0,
                opacity: activeQuestion === 2 ? 1 : 0
              }}
              transition={{ duration: 0.3 }}
            >
              <p>Yes, all our services come with a 30-day workmanship guarantee. If you're not satisfied with the quality of our work, we'll return to fix the issue at no additional cost.</p>
            </motion.div>
          </motion.div>
         
          <motion.div
            className="faq-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="faq-question" onClick={() => toggleQuestion(3)}>
              <h3>How are your service professionals vetted?</h3>
              <span className={`faq-icon ${activeQuestion === 3 ? 'active' : ''}`}>
                <i className="fas fa-chevron-down"></i>
              </span>
            </div>
            <motion.div
              className="faq-answer"
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: activeQuestion === 3 ? 'auto' : 0,
                opacity: activeQuestion === 3 ? 1 : 0
              }}
              transition={{ duration: 0.3 }}
            >
              <p>All our service professionals undergo thorough background checks, skills assessments, and training before joining our team. We only work with experienced, reliable professionals who meet our high standards for quality and customer service.</p>
            </motion.div>
          </motion.div>
         
          <motion.div
            className="faq-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="faq-question" onClick={() => toggleQuestion(4)}>
              <h3>What areas do you service?</h3>
              <span className={`faq-icon ${activeQuestion === 4 ? 'active' : ''}`}>
                <i className="fas fa-chevron-down"></i>
              </span>
            </div>
            <motion.div
              className="faq-answer"
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: activeQuestion === 4 ? 'auto' : 0,
                opacity: activeQuestion === 4 ? 1 : 0
              }}
              transition={{ duration: 0.3 }}
            >
              <p>We currently provide services throughout Hyderabad, Secunderabad, and surrounding areas within a 30km radius. If you're unsure if we service your area, please contact our customer service team.</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Footer Section */}
      <motion.div
        className="contact-footer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
       
      </motion.div>

      <ToastContainer />
    </motion.section>
  );
};

export default ContactUs;
 