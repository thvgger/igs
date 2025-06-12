"use client"; // This directive marks the component as a client component for Next.js App Router

import React from 'react';

// Navbar component responsible for header, navigation, and mobile menu
function Navbar({ activeNav, scrollToSection, isMobileMenuOpen, setIsMobileMenuOpen }) {
  return (
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
  );
}

export default Navbar;