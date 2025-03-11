import React, { useRef, useState, useEffect } from 'react';

const Testimonials = () => {
  const carouselRef = useRef(null);
  const secondaryCarouselRef = useRef(null);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    review: '',
    rating: 5
  });
  
  // Initial testimonials data
  const initialTestimonials = [
    {
      name: 'Rajesh Sharma',
      review: 'Fixigo transformed our kitchen with exceptional craftsmanship. The team was professional from start to finish, completing the project on time and within budget.',
      rating: 5
    },
    {
      name: 'Priya Patel',
      review: 'We hired Fixigo for our office plumbing renovation and couldn\'t be happier with the results. Their attention to detail and problem-solving abilities were impressive.',
      rating: 5
    },
    {
      name: 'Ananya Singh',
      review: 'The electricians from Fixigo diagnosed and fixed a complex wiring issue that other companies couldn\'t solve. Professional, knowledgeable, and reasonably priced.',
      rating: 4
    },
    {
      name: 'Vikram Malhotra',
      review: 'Managing multiple properties means I need reliable contractors. Fixigo has become my go-to service for all maintenance needs across my properties.',
      rating: 5
    },
    {
      name: 'Meera Iyer',
      review: 'As a new homeowner, I was overwhelmed with repairs needed, but Fixigo made the process stress-free with their comprehensive home inspection and repair services.',
      rating: 4
    },
    {
      name: 'Arjun Kapoor',
      review: 'When our commercial kitchen needed emergency repairs, Fixigo responded within hours. Their quick action prevented us from losing business days.',
      rating: 5
    },
    {
      name: 'Sonia Reddy',
      review: 'I\'ve recommended Fixigo to numerous clients for their renovation projects. They consistently deliver quality work that brings my designs to life.',
      rating: 4
    },
    {
      name: 'Deepak Verma',
      review: 'The HVAC team at Fixigo installed our new system efficiently and took the time to explain proper maintenance. Our home has never been more comfortable.',
      rating: 5
    },
    {
      name: 'Kavita Nair',
      review: 'We contracted Fixigo for multiple maintenance projects at our school. Their team worked safely around students and completed work during off-hours to minimize disruption.',
      rating: 4
    },
    {
      name: 'Suresh Kumar',
      review: 'Fixigo renovated our storefront with minimal impact on our business operations. The final result has definitely increased foot traffic and customer satisfaction.',
      rating: 5
    },
    {
      name: 'Divya Agarwal',
      review: 'From small repairs to major renovations, Fixigo has helped us transform our fixer-upper into a dream home over the past year. Consistently reliable service.',
      rating: 5
    },
    {
      name: 'Amit Desai',
      review: 'Our building has used Fixigo for maintenance contracts for three years now. Their preventative maintenance program has saved our association thousands in potential repairs.',
      rating: 4
    }
  ];

  // Use localStorage to persist testimonials
  const [testimonials, setTestimonials] = useState(() => {
    // Try to get testimonials from localStorage
    const savedTestimonials = localStorage.getItem('fixigoTestimonials');
    // If we have saved testimonials, parse and use them, otherwise use initial data
    return savedTestimonials ? JSON.parse(savedTestimonials) : initialTestimonials;
  });

  // Save testimonials to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('fixigoTestimonials', JSON.stringify(testimonials));
  }, [testimonials]);

  // Calculate average rating
  const averageRating = (testimonials.reduce((acc, item) => acc + item.rating, 0) / testimonials.length).toFixed(1);

  // Create extended testimonials array for continuous scrolling
  // Double the array to ensure smooth infinite scroll
  const extendedTestimonials = [...testimonials, ...testimonials];

  // Create star rating component
  const StarRating = ({ rating, interactive = false, onRatingChange = null }) => {
    return (
      <div className="star-rating">
        {[...Array(5)].map((_, index) => (
          <span 
            key={index} 
            className={`star ${index < rating ? 'filled' : 'empty'} ${interactive ? 'interactive' : ''}`}
            onClick={() => interactive && onRatingChange && onRatingChange(index + 1)}
          >
            {index < rating ? '★' : '☆'}
          </span>
        ))}
      </div>
    );
  };

  // Pause animation on hover
  const handleMouseEnter = () => {
    if (carouselRef.current) {
      carouselRef.current.style.animationPlayState = 'paused';
    }
    if (secondaryCarouselRef.current) {
      secondaryCarouselRef.current.style.animationPlayState = 'paused';
    }
  };

  const handleMouseLeave = () => {
    if (carouselRef.current) {
      carouselRef.current.style.animationPlayState = 'running';
    }
    if (secondaryCarouselRef.current) {
      secondaryCarouselRef.current.style.animationPlayState = 'running';
    }
  };

  // Toggle form visibility
  const toggleForm = () => {
    setIsFormVisible(!isFormVisible);
    if (!isFormVisible) {
      // Reset form when showing
      setFormData({
        name: '',
        review: '',
        rating: 5
      });
    }
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle rating change in the form
  const handleRatingChange = (newRating) => {
    setFormData({
      ...formData,
      rating: newRating
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name.trim() && formData.review.trim()) {
      // Add new testimonial to the beginning of the array
      const newTestimonial = {
        name: formData.name,
        review: formData.review,
        rating: formData.rating
      };
      
      // Update testimonials state (this will trigger the useEffect to save to localStorage)
      setTestimonials([newTestimonial, ...testimonials]);
      
      // Reset form and hide it
      setFormData({
        name: '',
        review: '',
        rating: 5
      });
      setIsFormVisible(false);
      
      // Show a success message
      alert("Thank you for your review! It has been added to our testimonials.");
    }
  };

  // Reset to default testimonials (for admin purposes)
  const resetToDefaultTestimonials = () => {
    if (window.confirm("Are you sure you want to reset all testimonials to default? This will remove all user-submitted testimonials.")) {
      setTestimonials(initialTestimonials);
      alert("Testimonials have been reset to default.");
    }
  };

  // Animate background blobs
  useEffect(() => {
    const blobs = document.querySelectorAll('.blob');
    
    // Add random movement to blobs for more dynamic background
    blobs.forEach((blob, index) => {
      const randomDelay = Math.random() * 5;
      blob.style.animationDelay = `-${randomDelay}s`;
    });
    
    // Ensure smooth continuous scrolling
    const restartAnimation = () => {
      if (carouselRef.current) {
        carouselRef.current.style.animation = 'none';
        carouselRef.current.offsetHeight; // Trigger reflow
        carouselRef.current.style.animation = 'scroll 40s linear infinite';
      }
      
      if (secondaryCarouselRef.current) {
        secondaryCarouselRef.current.style.animation = 'none';
        secondaryCarouselRef.current.offsetHeight; // Trigger reflow
        secondaryCarouselRef.current.style.animation = 'scroll-reverse 45s linear infinite';
      }
    };
    
    // Restart animation when window is resized
    window.addEventListener('resize', restartAnimation);
    
    return () => {
      window.removeEventListener('resize', restartAnimation);
    };
  }, []);

  return (
    <section className="testimonials-section">
      {/* Background Animation */}
      <div className="bg-animation">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>
      
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">What Our Customers Say</h2>
          <div className="underline"><div className="dots"></div></div>
          <p className="section-subtitle">Hear from our satisfied customers about their experience with Fixigo</p>
          
          <div className="overall-rating">
            <div className="star-rating">
              <StarRating rating={Math.round(averageRating)} />
            </div>
            <span className="rating-number">{averageRating}</span>
            <span className="rating-count">({testimonials.length} reviews)</span>
          </div>
          
          <button className="add-review-button" onClick={toggleForm}>
            Share Your Experience
          </button>
          
          {/* Optional: Admin button to reset testimonials - can be hidden in production */}
          {/* <button className="reset-button" onClick={resetToDefaultTestimonials} style={{marginLeft: '10px'}}>
            Reset Testimonials (Admin)
          </button> */}
        </div>
        
        {/* Review Form */}
        <div className={`review-form-container ${isFormVisible ? 'visible' : ''}`}>
          <form className="review-form" onSubmit={handleSubmit}>
            <h3 className="form-title">Share Your Experience</h3>
            
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleInputChange} 
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="review">Your Review</label>
              <textarea 
                id="review" 
                name="review" 
                rows="4" 
                value={formData.review} 
                onChange={handleInputChange} 
                required 
              ></textarea>
            </div>
            
            <div className="form-group">
              <label>Your Rating</label>
              <div className="rating-selector">
                <StarRating 
                  rating={formData.rating} 
                  interactive={true} 
                  onRatingChange={handleRatingChange} 
                />
              </div>
            </div>
            
            <div className="form-actions">
              <button type="submit" className="submit-button">Submit Review</button>
            </div>
          </form>
        </div>
        
        {/* Scrolling Testimonials */}
        <div className="scrolling-testimonials-container">
          <div 
            className="scrolling-testimonials" 
            ref={carouselRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {extendedTestimonials.slice(0, testimonials.length).map((testimonial, index) => (
              <div key={`row1-${index}`} className="testimonial-card">
                <div className="card-inner">
                  <div className="card-header">
                    <div className="quote-icon">"</div>
                    <StarRating rating={testimonial.rating} />
                  </div>
                  <p className="testimonial-text">{testimonial.review}</p>
                  <div className="testimonial-author">
                    <h4 className="author-name">{testimonial.name}</h4>
                    {index % 3 === 0 && <span className="verified-badge">Verified</span>}
                  </div>
                </div>
              </div>
            ))}
            {extendedTestimonials.slice(0, testimonials.length).map((testimonial, index) => (
              <div key={`row1-dup-${index}`} className="testimonial-card">
                <div className="card-inner">
                  <div className="card-header">
                    <div className="quote-icon">"</div>
                    <StarRating rating={testimonial.rating} />
                  </div>
                  <p className="testimonial-text">{testimonial.review}</p>
                  <div className="testimonial-author">
                    <h4 className="author-name">{testimonial.name}</h4>
                    {index % 3 === 0 && <span className="verified-badge">Verified</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Second Row - Reverse Direction */}
        <div className="scrolling-testimonials-container secondary">
          <div 
            className="scrolling-testimonials reverse" 
            ref={secondaryCarouselRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {extendedTestimonials.slice(testimonials.length / 2).map((testimonial, index) => (
              <div key={`row2-${index}`} className="testimonial-card">
                <div className="card-inner">
                  <div className="card-header">
                    <div className="quote-icon">"</div>
                    <StarRating rating={testimonial.rating} />
                  </div>
                  <p className="testimonial-text">{testimonial.review}</p>
                  <div className="testimonial-author">
                    <h4 className="author-name">{testimonial.name}</h4>
                    {index % 4 === 0 && <span className="verified-badge">Verified</span>}
                  </div>
                </div>
              </div>
            ))}
            {extendedTestimonials.slice(testimonials.length / 2).map((testimonial, index) => (
              <div key={`row2-dup-${index}`} className="testimonial-card">
                <div className="card-inner">
                  <div className="card-header">
                    <div className="quote-icon">"</div>
                    <StarRating rating={testimonial.rating} />
                  </div>
                  <p className="testimonial-text">{testimonial.review}</p>
                  <div className="testimonial-author">
                    <h4 className="author-name">{testimonial.name}</h4>
                    {index % 4 === 0 && <span className="verified-badge">Verified</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;