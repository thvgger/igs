export default function Footer() {
  return (
    <footer className="footer">
        <div className="container">
          <div className="logo">
            <i className="fas fa-graduation-cap logo-icon"></i> Ifeoluwa Group Of Schools
          </div>
          <ul className="footer-nav">
            <li><a href="#about" onClick={() => scrollToSection('about')}>About</a></li>
            <li><a href="#programs" onClick={() => scrollToSection('programs')}>Programs</a></li>
            <li><a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
          <div className="social-links">
            <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
            <a href="#" aria-label="TikTok"><i className="fab fa-tiktok"></i></a>
            <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
          </div>
          <p>&copy; 2024 Ifeoluwa Group Of Schools. All rights reserved.</p>
        </div>
      </footer>
  )
}