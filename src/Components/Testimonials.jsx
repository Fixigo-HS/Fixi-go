import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    { name: 'John Doe', review: 'Fixigo did an amazing job with my home renovation!' },
    { name: 'Jane Smith', review: 'Highly recommend their plumbing services.' },
    { name: 'Alice Johnson', review: 'Professional and reliable electricians!' },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="testimonials-section"
    >
      <h2>Testimonials</h2>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
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