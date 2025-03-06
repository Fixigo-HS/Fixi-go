import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

const Testimonials = () => {
  const testimonials = [
    { name: 'Babu Khan', review: 'Fixigo did an amazing job with my home renovation!' },
    { name: 'Charan Gowd', review: 'Highly recommend their plumbing services.' },
    { name: 'Ramesh Reddy', review: 'Professional and reliable electricians!' },
    { name: 'Rahul Sharma', review: 'Excellent service and very professional team.' },
    { name: 'Priya Patel', review: 'Fixigo provided top-notch service for my kitchen remodeling.' },
    { name: 'Amit Singh', review: 'Great experience with their electrical work. Highly recommended!' },
    { name: 'Neha Gupta', review: 'Very satisfied with their timely and efficient service.' },
    { name: 'Vikram Joshi', review: 'Fixigo helped me with my bathroom renovation. Great job!' },
    { name: 'Anjali Reddy', review: 'Their team is very skilled and professional. Loved their work!' },
    { name: 'Suresh Kumar', review: 'Fixigo did an excellent job with my home repairs. Very reliable.' },
    { name: 'Deepak Verma', review: 'Highly recommend Fixigo for any home improvement needs.' },
    { name: 'Kavita Mishra', review: 'Very professional and courteous team. Great experience!' },
    { name: 'Rajesh Iyer', review: 'Fixigo provided excellent service for my plumbing issues.' },
    { name: 'Meera Nair', review: 'Their team is very efficient and reliable. Highly satisfied!' },
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