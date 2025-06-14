import React from 'react';
import Link from 'next/link';

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
              <li><Link href="#hero" onClick={() => scrollToSection('hero')} className={activeNav === 'hero' ? 'active' : ''}>Home</Link></li>
              <li><Link href="#about" onClick={() => scrollToSection('about')} className={activeNav === 'about' ? 'active' : ''}>About Us</Link></li>
              <li><Link href="#programs" onClick={() => scrollToSection('programs')} className={activeNav === 'programs' ? 'active' : ''}>Activities</Link></li>
              <li><Link href="#leadership" onClick={() => scrollToSection('leadership')} className={activeNav === 'leadership' ? 'active' : ''}>Management</Link></li>
              <li><Link href="#contact" onClick={() => scrollToSection('contact')} className={activeNav === 'contact' ? 'active' : ''}>Contact</Link></li>
              <li><Link href="#blog" onClick={() => scrollToSection('blog')} className={activeNav === 'blog' ? 'active' : ''}>Blog/News</Link></li>
              <li><Link href="#faq" onClick={() => scrollToSection('faq')} className={activeNav === 'faq' ? 'active' : ''}>FAQ</Link></li>
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