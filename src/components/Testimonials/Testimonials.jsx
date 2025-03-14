// TestimonialsSection.jsx
import React, { useState, useEffect, useRef } from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Homeowner",
      image: "/api/placeholder/64/64",
      rating: 5,
      content: "Fixigo transformed my home maintenance experience! Their technicians arrived promptly, diagnosed the issue quickly, and fixed my plumbing problem for a reasonable price. I'm definitely a loyal customer now."
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Property Manager",
      image: "/api/placeholder/64/64",
      rating: 5,
      content: "Managing multiple properties comes with countless maintenance challenges. Fixigo has been my reliable partner for over 2 years now. Their online booking system and professional staff make my job so much easier."
    },
    {
      id: 3,
      name: "David Williams",
      role: "Restaurant Owner",
      image: "/api/placeholder/64/64",
      rating: 4,
      content: "When our kitchen equipment broke down right before a busy weekend, Fixigo came to our rescue. Their emergency service was worth every penny - they had us up and running within hours."
    },
    {
      id: 4,
      name: "Emily Rodriguez",
      role: "Apartment Tenant",
      image: "/api/placeholder/64/64",
      rating: 5,
      content: "As someone who knows nothing about fixing things, Fixigo has been a lifesaver. Their technicians explain everything clearly without making me feel clueless. Great service with a personal touch!"
    },
    {
      id: 5,
      name: "James Thompson",
      role: "Office Manager",
      image: "/api/placeholder/64/64",
      rating: 5,
      content: "We've contracted Fixigo for all our office maintenance needs and couldn't be happier. Their team is professional, their work is exceptional, and their response time is unmatched in the industry."
    }
  ]);

  const [newReview, setNewReview] = useState({
    name: '',
    role: '',
    content: '',
    rating: 5
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);
  const delay = 5000;

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, delay);

    return () => {
      resetTimeout();
    };
  }, [currentIndex, testimonials.length]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview({
      ...newReview,
      [name]: value
    });
  };

  const handleRatingChange = (rating) => {
    setNewReview({
      ...newReview,
      rating
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!newReview.name || !newReview.content) {
      alert("Please fill in your name and testimonial");
      return;
    }
    
    const newTestimonial = {
      id: testimonials.length + 1,
      image: "/api/placeholder/64/64",
      ...newReview
    };
    
    setTestimonials([...testimonials, newTestimonial]);
    setNewReview({
      name: '',
      role: '',
      content: '',
      rating: 5
    });
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <h2 className="testimonials-header">What Our Clients Say</h2>
        
        <div className="testimonials-slider">
          <div 
            className="testimonials-slider-inner" 
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div className="testimonial-card" key={testimonial.id}>
                <div className="testimonial-header">
                  <img 
                    className="testimonial-image" 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                  />
                  <div className="testimonial-user">
                    <h3 className="testimonial-name">{testimonial.name}</h3>
                    <p className="testimonial-role">{testimonial.role}</p>
                    <div className="testimonial-rating">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={i < testimonial.rating ? "star filled" : "star"}>★</span>
                      ))}
                    </div>
                  </div>
                </div>
                <blockquote className="testimonial-content">
                  "{testimonial.content}"
                </blockquote>
              </div>
            ))}
          </div>
        </div>
        
        <div className="testimonials-dots">
          {testimonials.map((_, idx) => (
            <button 
              key={idx} 
              className={`testimonial-dot ${idx === currentIndex ? "active" : ""}`}
              onClick={() => goToSlide(idx)}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
      
      <div className="add-testimonial-section">
        <h3 className="add-testimonial-header">Share Your Experience</h3>
        <form className="testimonial-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Your Name*</label>
              <input
                type="text"
                id="name"
                name="name"
                value={newReview.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="role">Your Role</label>
              <input
                type="text"
                id="role"
                name="role"
                value={newReview.role}
                onChange={handleInputChange}
                placeholder="e.g., Homeowner, Business Owner"
              />
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="content">Your Testimonial*</label>
            <textarea
              id="content"
              name="content"
              value={newReview.content}
              onChange={handleInputChange}
              rows="4"
              required
            />
          </div>
          
          <div className="form-group">
            <label>Your Rating</label>
            <div className="rating-input">
              {[...Array(5)].map((_, i) => (
                <button
                  type="button"
                  key={i}
                  className={`rating-star ${i < newReview.rating ? "filled" : ""}`}
                  onClick={() => handleRatingChange(i + 1)}
                >
                  ★
                </button>
              ))}
            </div>
          </div>
          
          <button type="submit" className="submit-button">Submit Your Review</button>
        </form>
      </div>
    </section>
  );
};

export default Testimonials;