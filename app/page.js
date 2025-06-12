"use client"; // This directive marks the component as a client component for Next.js App Router

import React, { useState, useEffect } from 'react';

// Main App component for the school landing page
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

  // Smooth scrolling for navigation links
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveNav(id);
      setIsMobileMenuOpen(false); // Close mobile menu after clicking a link
    }
  };

  // Effect to handle intersection observer for active navigation highlighting
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3 // Adjust threshold as needed
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

      {/* Header Section */}
      <header className="header">
        <div className="container">
          <div className="logo">
            <i className="fas fa-graduation-cap logo-icon"></i> Ifeoluwa Group Of Schools
          </div>
          <nav>
            <ul className={`nav-menu ${isMobileMenuOpen ? 'open' : ''}`}>
              <li><a href="#hero" onClick={() => scrollToSection('hero')} className={activeNav === 'hero' ? 'active' : ''}>Home</a></li>
              <li><a href="#about" onClick={() => scrollToSection('about')} className={activeNav === 'about' ? 'active' : ''}>About Us</a></li>
              <li><a href="#programs" onClick={() => scrollToSection('programs')} className={activeNav === 'programs' ? 'active' : ''}>Programs</a></li>
              {/*<li><a href="#activities" onClick={() => scrollToSection('activities')} className={activeNav === 'activities' ? 'active' : ''}>Activities</a></li>*/}
              <li><a href="#leadership" onClick={() => scrollToSection('leadership')} className={activeNav === 'leadership' ? 'active' : ''}>Leadership</a></li>
              <li><a href="#admissions" onClick={() => scrollToSection('admissions')} className={activeNav === 'admissions' ? 'active' : ''}>Admissions</a></li>
              <li><a href="#contact" onClick={() => scrollToSection('contact')} className={activeNav === 'contact' ? 'active' : ''}>Contact</a></li>
              <li><a href="#faq" onClick={() => scrollToSection('faq')} className={activeNav === 'faq' ? 'active' : ''}>FAQ</a></li>
              <li><a href="#blog" onClick={() => scrollToSection('blog')} className={activeNav === 'blog' ? 'active' : ''}>News/Blog</a></li>
            </ul>
            <div className="menu-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <span className={isMobileMenuOpen ? 'open' : ''}></span>
              <span className={isMobileMenuOpen ? 'open' : ''}></span>
              <span className={isMobileMenuOpen ? 'open' : ''}></span>
            </div>
          </nav>
        </div>
      </header>

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


              {/*<p>
                Founded on principles of integrity and innovation, we offer a comprehensive curriculum
                designed to prepare students not just for examinations, but for life's challenges.
                We emphasize a balanced approach, integrating rigorous academics with character development,
                arts, and sports.
              </p>*/}


              {/* Mission Statements Added Here */}
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

      {/* Extracurricular Activities Section 
      <section id="activities" className="activities">
        <div className="container">
          <h2 className="section-title">Enriching Extracurricular Activities</h2>
          <div className="grid-container">
            <div className="grid-item">
              <div className="icon"><i className="fas fa-futbol"></i></div>
              <h3>Sports & Athletics</h3>
              <p>Develop teamwork, discipline, and physical fitness through various sports.</p>
            </div>
            <div className="grid-item">
              <div className="icon"><i className="fas fa-palette"></i></div>
              <h3>Arts & Creativity</h3>
              <p>Explore passions in music, drama, visual arts, and design.</p>
            </div>
            <div className="grid-item">
              <div className="icon"><i className="fas fa-robot"></i></div>
              <h3>STEM & Robotics</h3>
              <p>Engage in hands-on science, technology, engineering, and mathematics projects.</p>
            </div>
            <div className="grid-item">
              <div className="icon"><i className="fas fa-leaf"></i></div>
              <h3>Community Service</h3>
              <p>Foster social responsibility and make a positive impact on the world.</p>
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

      {/* Admissions Section 
      <section id="admissions" className="admissions">
        <div className="container">
          <h2 className="section-title">Admissions Process</h2>
          <div className="grid-container">
            <div className="grid-item">
              <div className="icon"><i className="fas fa-file-alt"></i></div>
              <h3>Step 1: Inquiry & Application</h3>
              <p>Submit your online application form and required documents.</p>
            </div>
            <div className="grid-item">
              <div className="icon"><i className="fas fa-calendar-alt"></i></div>
              <h3>Step 2: Assessment & Interview</h3>
              <p>Schedule an assessment for your child and a parent interview.</p>
            </div>
            <div className="grid-item">
              <div className="icon"><i className="fas fa-check-circle"></i></div>
              <h3>Step 3: Offer & Enrollment</h3>
              <p>Receive our offer of admission and complete the enrollment process.</p>
            </div>
            <div className="grid-item">
              <div className="icon"><i className="fas fa-school"></i></div>
              <h3>Step 4: Welcome to School</h3>
              <p>Join our school community and begin your exciting academic journey!</p>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <p>Ready to join our family? Contact our admissions team for more details.</p>
            <a href="#contact" onClick={() => scrollToSection('contact')} className="btn">Contact Admissions</a>
          </div>
        </div>
      </section>

      {/* Testimonials Section 
      <section id="testimonials" className="testimonials">
        <div className="container">
          <h2 className="section-title">What Our Community Says</h2>
          <div className="testimonial-carousel">
            <div className="testimonial-card">
              <p>"Future Scholars Academy has transformed my child's perspective on learning. The teachers are incredible and truly care about each student's success."</p>
              <div className="author">- Jane Doe, Parent</div>
            </div>
            <div className="testimonial-card">
              <p>"The extracurricular activities here are fantastic! I've been able to pursue my passion for robotics and still excel in my studies."</p>
              <div className="author">- Alex Smith, Student</div>
            </div>
            <div className="testimonial-card">
              <p>"As an alumni, I can confidently say that the foundation I received at Future Scholars Academy prepared me exceptionally well for university and my career."</p>
              <div className="author">- Dr. Emily White, Alumni</div>
            </div>
            <div className="testimonial-card">
              <p>"The supportive environment and innovative teaching methods make Future Scholars Academy truly stand out. Highly recommend!"</p>
              <div className="author">- Michael Brown, Parent</div>
            </div>
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
              <p><i className="fas fa-phone icon"></i> +1 (123) 456-7890</p>
              <p><i className="fas fa-envelope icon"></i> info@futurescholars.edu</p>
              <p><i className="fas fa-clock icon"></i> Mon - Fri: 8:00 AM - 4:00 PM</p>

              <h3 style={{ marginTop: '30px' }}>Visit Us</h3>
              <p>We welcome you to visit our school and experience the vibrant atmosphere of Ifeoluwa Group Of Schools. Please schedule an appointment in advance.</p>
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
      <footer className="footer">
        <div className="container">
          <div className="logo">
            <i className="fas fa-graduation-cap logo-icon"></i> Ifeoluwa Group Of Schools
          </div>
          <ul className="footer-nav">
            <li><a href="#about" onClick={() => scrollToSection('about')}>About</a></li>
            <li><a href="#programs" onClick={() => scrollToSection('programs')}>Programs</a></li>
            <li><a href="#leadership" onClick={() => scrollToSection('leadership')}>Leadership</a></li>
            <li><a href="#admissions" onClick={() => scrollToSection('admissions')}>Admissions</a></li>
            <li><a href="#testimonials" onClick={() => scrollToSection('testimonials')}>Testimonials</a></li>
            <li><a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a></li>
            <li><a href="#faq" onClick={() => scrollToSection('faq')}>FAQ</a></li>
            <li><a href="#blog" onClick={() => scrollToSection('blog')}>Blog/News</a></li>

            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
          <div className="social-links">
            <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
            <a href="#" aria-label="instagram"><i className="fab fa-instagram"></i></a>
            <a href="#" aria-label="Tik-Tok"><i className="fab fa-tiktok"></i></a>
          </div>
          <p>&copy; 2024 Ifeoluwa Group Of Schools. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;