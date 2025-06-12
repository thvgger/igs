import React from 'react';

const Navbar = ({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  activeNav,
  scrollToSection,
}) => (
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
              <li><a href="#contact" onClick={() => scrollToSection('contact')} className={activeNav === 'contact' ? 'active' : ''}>Contact</a></li>
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

export default Navbar;