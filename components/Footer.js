import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="logo">
          <i className="fas fa-graduation-cap logo-icon"></i> Ifeoluwa Group Of
          Schools
        </div>
        <ul className="footer-nav">
          <li>
            <Link href="#about" onClick={() => scrollToSection("about")}>
              About
            </Link>
          </li>
          <li>
            <Link href="#programs" onClick={() => scrollToSection("programs")}>
              Programs
            </Link>
          </li>
          <li>
            <Link href="#contact" onClick={() => scrollToSection("contact")}>
              Contact
            </Link>
          </li>
          <li>
            <Link href="#">Privacy Policy</Link>
          </li>
          <li>
            <Link href="#">Terms of Service</Link>
          </li>
        </ul>
        <div className="social-links">
          <Link href="https://www.facebook.com/share/1C8WANv1at/?mibextid=wwXIfr" aria-label="Facebook">
            <i className="fab fa-facebook-f"></i>
          </Link>
          <Link href="https://www.tiktok.com/@ifeoluwa_schools" aria-label="TikTok">
            <i className="fab fa-tiktok"></i>
          </Link>
          <Link
            href="https://www.instagram.com/ifeoluwa_schools?igsh=MTJwd25hem53OHNkaQ%3D%3D&utm_source=qr"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram"></i>
          </Link>
        </div>
        <p>&copy; 2024 Ifeoluwa Group Of Schools. All rights reserved.</p>
      </div>
    </footer>
  );
}
