import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Contact.css'

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
  
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
            toast.success('Message sent successfully!', { autoClose: 3000 });
          })
          .catch((autoReplyError) => {
            console.error('Auto-reply failed:', autoReplyError.text);
            toast.error('Failed to send auto-reply.');
          });
  
        form.current.reset(); // Reset form after sending
      })
      .catch((error) => {
        console.error('Email to team failed:', error.text);
        toast.error('Failed to send message.');
      });
  };
  

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="contact-us"
    >
      {/* Hero Section */}
      <div className="hero-section1">
        <div className="hero-content1">
          <h1>Contact Fixigo Home Services</h1>
          <p>We're here to help with all your home service needs. Get in touch today!</p>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="contact-form-section">
        <h2>Get in Touch</h2>
        <form ref={form} onSubmit={sendEmail}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Enter your name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Mobile Number</label>
            <input type="tel" id="phone" name="phone" placeholder="Enter your mobile number" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="How can we help you?" required></textarea>
          </div>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>

      {/* Call-to-Action Section */}
      <div className="cta-section">
        <h2>Need Immediate Assistance?</h2>
        <p>Call us now at <strong>+91 8688939382</strong> or email us at <a href="mailto:Consult.fixigo@gmail.com">Consult.fixigo@gmail.com</a>.</p>
        <a href="tel:8688939382" className="cta-button">Call Now</a>
      </div>

      {/* Toast Container */}
      <ToastContainer />
    </motion.section>
  );
};

export default ContactUs;