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
      <p> Welcome to Fixigo, your one-stop solution for all home service needs. We understand how challenging it can be to find reliable professionals for home maintenance, repairs, and improvements. That’s why we have built a trusted platform to connect you with skilled experts, ensuring high-quality service, convenience, and peace of mind. At Fixigo, we specialize in a wide range of home services, including:  
          ✔ Plumbing – Leak repairs, pipe installations, bathroom fittings, and more.  
          ✔ Electrical Work – Wiring, lighting installations, fan repairs, and switchboard fixing.  
          ✔ Carpentry – Furniture repairs, custom woodwork, and modular solutions.  
          ✔ Home Cleaning – Deep cleaning, kitchen cleaning, bathroom sanitization, and sofa shampooing.  
          ✔ Appliance Repair – AC servicing, refrigerator repair, washing machine troubleshooting, and other home appliances.  
          ✔ Painting & Renovation – Interior and exterior painting, waterproofing, and remodeling services.
             
        Why Choose Fixigo?*  
          ✔ Verified & Trained Professional – Every service expert is thoroughly vetted to ensure reliability and expertise.  
          ✔ Affordable & Transparent Pricing – No hidden costs; you pay only for what you get.  
          ✔ Quick & Hassle-Free Service – Book online, and we’ll handle the rest.  
          ✔ Customer Satisfaction Guarantee – Your happiness is our priority.  

          Whether you need urgent repairs, regular maintenance, or home improvement services, Fixigo is here to help! Our mission is to make home care stress-free, ensuring that your home remains in top condition while you focus on what truly matters.  
          Experience the Fixigo difference today!* Book your service now and let our professionals take care of your home with expertise and efficiency.  
          Let me know if you'd like any customizations!
      </p>
    </motion.section>
  );
};

export default About;