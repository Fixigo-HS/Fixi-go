import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Rajesh Sharma',
      review: 'Fixigo transformed our kitchen with exceptional craftsmanship. The team was professional from start to finish, completing the project on time and within budget.'
    },
    {
      name: 'Priya Patel',
      review: 'We hired Fixigo for our office plumbing renovation and couldn\'t be happier with the results. Their attention to detail and problem-solving abilities were impressive.'
    },
    {
      name: 'Ananya Singh',
      review: 'The electricians from Fixigo diagnosed and fixed a complex wiring issue that other companies couldn\'t solve. Professional, knowledgeable, and reasonably priced.'
    },
    {
      name: 'Vikram Malhotra',
      review: 'Managing multiple properties means I need reliable contractors. Fixigo has become my go-to service for all maintenance needs across my properties.'
    },
    {
      name: 'Meera Iyer',
      review: 'As a new homeowner, I was overwhelmed with repairs needed, but Fixigo made the process stress-free with their comprehensive home inspection and repair services.'
    },
    {
      name: 'Arjun Kapoor',
      review: 'When our commercial kitchen needed emergency repairs, Fixigo responded within hours. Their quick action prevented us from losing business days.'
    },
    {
      name: 'Sonia Reddy',
      review: 'I\'ve recommended Fixigo to numerous clients for their renovation projects. They consistently deliver quality work that brings my designs to life.'
    },
    {
      name: 'Deepak Verma',
      review: 'The HVAC team at Fixigo installed our new system efficiently and took the time to explain proper maintenance. Our home has never been more comfortable.'
    },
    {
      name: 'Kavita Nair',
      review: 'We contracted Fixigo for multiple maintenance projects at our school. Their team worked safely around students and completed work during off-hours to minimize disruption.'
    },
    {
      name: 'Suresh Kumar',
      review: 'Fixigo renovated our storefront with minimal impact on our business operations. The final result has definitely increased foot traffic and customer satisfaction.'
    },
    {
      name: 'Divya Agarwal',
      review: 'From small repairs to major renovations, Fixigo has helped us transform our fixer-upper into a dream home over the past year. Consistently reliable service.'
    },
    {
      name: 'Amit Desai',
      review: 'Our building has used Fixigo for maintenance contracts for three years now. Their preventative maintenance program has saved our association thousands in potential repairs.'
    }
  ];

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <h2 className="testimonials-heading">What Our Clients Say</h2>
        <div className="testimonials-divider"></div>
        <p className="testimonials-subheading">Real experiences from satisfied customers</p>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-content">
                <div className="quote-icon">❝</div>
                <p className="testimonial-text">{testimonial.review}</p>
                <div className="testimonial-author">
                  <h3 className="author-name">{testimonial.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;