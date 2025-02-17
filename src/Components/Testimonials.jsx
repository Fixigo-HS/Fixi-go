import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    { name: 'John Doe', review: 'Fixigo did an amazing job with my home renovation!' },
    { name: 'Jane Smith', review: 'Highly recommend their plumbing services.' },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="testimonials-section"
    >
      <h2>Testimonials</h2>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="testimonial-card"
          >
            <p>"{testimonial.review}"</p>
            <h3>- {testimonial.name}</h3>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Testimonials;