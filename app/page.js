"use client";

import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'



function App() {
  const [activeNav, setActiveNav] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentLeaderIndex, setCurrentLeaderIndex] = useState(0); // State for the leadership slider
  const [touchStartX, setTouchStartX] = useState(0); // State for touch swipe start X coordinate
  const [touchEndX, setTouchEndX] = useState(0); // State for touch swipe end X coordinate

  // Sample data for Principal and Administration
  const leaders = [
    {
      id: 1,
      name: 'Mr. Ifeoluwa Timothy',
      title: 'Proprietor',
      image: 'https://placehold.co/400x400/FFC107/ffffff?text=Proprietor',
      bio: 'Mr. Ifeoluwa has over 25 years of experience in education leadership, dedicated to fostering a positive learning environment.'
    },
    {
      id: 2,
      name: 'Mr. Ifeoluwa Timothy',
      title: 'Proprietress',
      image: 'https://placehold.co/400x400/2196F3/ffffff?text=Proprietress', // Placeholder image
      bio: 'Mr. Ifeoluwa focuses on curriculum development and academic excellence across all programs.'
    },
    {
      id: 3,
      name: 'Mr. Ifeoluwa Timothy',
      title: 'Principal',
      image: 'https://placehold.co/400x400/4CAF50/ffffff?text=Principal', // Placeholder image
      bio: 'Mr. Ifeoluwa guides prospective families through the admissions process with care and expertise.'
    },
    {
      id: 4,
      name: 'Mr. Ifeoluwa Timothy',
      title: 'Head Mistress',
      image: 'https://placehold.co/400x400/9C27B0/ffffff?text=HM', // Placeholder image
      bio: 'Mr. Ifeoluwa is committed to student well-being, extracurricular engagement, and character development.'
    },
    {
      id: 5,
      name: 'Mr. Ifeoluwa Timothy',
      title: 'Head Of Departments',
      image: 'https://placehold.co/400x400/9C27B0/ffffff?text=HOD', // Placeholder image
      bio: 'Mr. Ifeoluwa is committed to student well-being, extracurricular engagement, and character development.'
    },
    {
      id: 6,
      name: 'Mr. Ifeoluwa Timothy',
      title: 'Head Of Student Affairs',
      image: 'https://placehold.co/400x400/9C27B0/ffffff?text=Student+affaris', // Placeholder image
      bio: 'Mr. Ifeoluwa is committed to student well-being, extracurricular engagement, and character development.'
    },
    {
      id: 7,
      name: 'Mr. Ifeoluwa Timothy',
      title: 'Tech Support',
      image: 'https://placehold.co/400x400/9C27B0/ffffff?text=Tech+Support', // Placeholder image
      bio: 'Mr. Ifeoluwa is committed to student well-being, extracurricular engagement, and character development.'
    }
  ];

  // Functions for slider navigation
  const nextLeader = () => {
    setCurrentLeaderIndex((prevIndex) => (prevIndex + 1) % leaders.length);
  };

  const prevLeader = () => {
    setCurrentLeaderIndex((prevIndex) => (prevIndex - 1 + leaders.length) % leaders.length);
  };

  // Touch event handlers for swipe functionality
  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    const minSwipeDistance = 50; // Minimum distance for a swipe to register
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > minSwipeDistance) {
      if (diff > 0) {
        // Swiped left, go to next leader
        nextLeader();
      } else {
        // Swiped right, go to previous leader
        prevLeader();
      }
    }
    // Reset touch positions after swipe attempt
    setTouchStartX(0);
    setTouchEndX(0);
  };



  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveNav(id);
      setIsMobileMenuOpen(false);
    }
  };


  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveNav(entry.target.id);
        }
      });
    }, options);

    sections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="school-landing-page">


      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" crossOrigin="anonymous" referrerPolicy="no-referrer" />


      <Navbar
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        activeNav={activeNav}
        scrollToSection={scrollToSection}
      />

      {/* Hero Section */}
      <section id="hero" className="hero">
        <div className="hero-content">
          <h1>Igniting Minds, Building Futures</h1>
          <p>
            Welcome to Ifeoluwa Group Of Schools, where academic excellence meets holistic development.
            Join us to embark on a journey of discovery, growth, and lifelong learning.
          </p>
          <a href="#admissions" onClick={() => scrollToSection('admissions')} className="btn">Apply For Admission Now</a>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">About Our Academy</h2>
          <div className="about-content">
            <div className="about-text">
              <h3>Our Vision for Excellence</h3>
              <p>
                Ifeoluwa Group Of Schools is committed to providing a nurturing and stimulating environment
                where every student can thrive. We believe in fostering critical thinking, creativity,
                and a passion for learning. Our dedicated educators go beyond textbooks to inspire
                students to reach their full potential.
              </p>
              <h3>Mission Statements</h3>
              <ul>
                <li>To raise God fearing Students</li>
                <li>To give qualitative education</li>
                <li>To develop future leaders</li>
              </ul>
              <a href="#contact" onClick={() => scrollToSection('contact')} className="btn btn-secondary">Learn More</a>
            </div>
            <div className="about-image">
              <img src="https://placehold.co/600x400/2196F3/ffffff?text=Happy+Students" alt="Happy students learning" />
            </div>
          </div>
        </div>
      </section>

      {/* Academic Programs Section */}
      <section id="programs" className="programs">
        <div className="container">
          <h2 className="section-title">Our Academic Programs</h2>
          <div className="grid-container">
            <div className="grid-item">
              <div className="icon"><i className="fas fa-child"></i></div>
              <h3>Early Years Foundation</h3>
              <p>Engaging and play-based learning for our youngest scholars, building foundational skills.</p>
            </div>
            <div className="grid-item">
              <div className="icon"><i className="fas fa-book-open"></i></div>
              <h3>Primary School Curriculum</h3>
              <p>A broad and balanced curriculum focusing on core subjects and intellectual curiosity.</p>
            </div>
            <div className="grid-item">
              <div className="icon"><i className="fas fa-flask"></i></div>
              <h3>Secondary School Excellence</h3>
              <p>Challenging academics, specialized subjects, and preparation for higher education.</p>
            </div>
            <div className="grid-item">
              <div className="icon"><i className="fas fa-globe"></i></div>
              <h3>International Baccalaureate</h3>
              <p>Rigorous global program fostering critical thinking and interdisciplinary understanding.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Slider Section */}
      <section id="leadership" className="leadership">
        <div className="container">
          <h2 className="section-title">Our Leadership Team</h2>
          <div
            className="leadership-slider"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {leaders.map((leader, index) => (
              <div
                key={leader.id}
                className={`leader-card ${index === currentLeaderIndex ? 'active' : ''}`}
                style={{
                  transform: `translateX(${(index - currentLeaderIndex) * 100}%)`, // Positions cards off-screen or in view
                  opacity: index === currentLeaderIndex ? 1 : 0,
                  pointerEvents: index === currentLeaderIndex ? 'auto' : 'none', // Allows interaction only on the active slide
                }}
              >
                <img src={leader.image} alt={leader.name} className="leader-image" />
                <div className="leader-name">{leader.name}</div>
                <div className="leader-title">{leader.title}</div>
                <p className="leader-bio">{leader.bio}</p>
              </div>
            ))}
          </div>
          <div className="slider-controls">
            <button onClick={prevLeader}>Previous</button>
            <button onClick={nextLeader}>Next</button>
          </div>
        </div>
      </section>

      
      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Get in Touch</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Our Location</h3>
              <p><i className="fas fa-map-marker-alt icon"></i> 123 Academy Lane, Schoolville, ST 12345</p>
              <p><i className="fas fa-phone icon"></i> +2348084163560</p>
              <p><i className="fas fa-envelope icon"></i> info@ifeoluwagroupofschools.edu</p>
              <p><i className="fas fa-clock icon"></i> Mon - Fri: 8:00 AM - 4:00 PM</p>

              <h3 style={{ marginTop: '30px' }}>Visit Us</h3>
              <p>We welcome you to visit our campus and experience the vibrant atmosphere of Ifeoluwa Group Of Schools. Please schedule an appointment in advance.</p>
            </div>
            <div className="contact-form">
              <h3>Send Us a Message</h3>
              <form onSubmit={(e) => e.preventDefault()}> {/* Prevent default form submission for demo */}
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="subject">Subject:</label>
                <input type="text" id="subject" name="subject" required />

                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" required></textarea>

                <button type="submit" className="btn">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default App;
