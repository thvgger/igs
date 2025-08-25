"use client";

import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ContactForm from "../components/Form";

const images = [
  "/images/hero/1.jpg",
  "/images/hero/2.jpg",
  "/images/hero/3.jpg",
  "/images/hero/4.jpg",
  "/images/hero/5.jpg",
  "/images/hero/6.jpg",
  "/images/hero/7.jpg",
  "/images/hero/8.jpg",
  "/images/hero/9.jpg",
  "/images/hero/10.jpg",
];

const labImages = [
  "/images/lab/IMG_9170.jpg",
  "/images/lab/IMG_9172.jpg",
  "/images/lab/IMG_9173.jpg",
  "/images/lab/IMG_9193.jpg",
  "/images/lab/IMG_9212.jpg",
  "/images/lab/IMG_9215.jpg",
  "/images/lab/IMG_9223.jpg",
  "/images/lab/IMG_9230.jpg",
  "/images/lab/IMG_9422.jpg",
  "/images/lab/IMG_9424.jpg",
  "/images/lab/IMG_9435.jpg",
  "/images/lab/IMG_9453.jpg",
  "/images/lab/IMG_9461.jpg",
  "/images/lab/IMG_9469.jpg",
];

const exhibitionImages = [
  "/images/exhibition/IMG_2330.jpeg",
  "/images/exhibition/IMG_2334.jpeg",
  "/images/exhibition/IMG_2335.jpeg",
  "/images/exhibition/IMG_2336.jpeg",
  "/images/exhibition/IMG_2337.jpeg",
  "/images/exhibition/IMG_2347.jpeg",
  "/images/exhibition/IMG_2348.jpeg",
  "/images/exhibition/IMG_2349.jpeg",
  "/images/exhibition/IMG_2350.jpeg",
  "/images/exhibition/IMG_2351.jpeg",
  "/images/exhibition/IMG_2352.jpeg",
  "/images/exhibition/IMG_2353.jpeg",
  "/images/exhibition/IMG_2354.jpeg",
  "/images/exhibition/IMG_2371.jpeg",
  "/images/exhibition/IMG_2372.jpeg",
  "/images/exhibition/IMG_2373.jpeg",
  "/images/exhibition/IMG_2374.jpeg",
];

const vsImages = [
  "/images/vs/IMG_E9643.JPG",
  "/images/vs/IMG_E9646.JPG",
  "/images/vs/IMG_E9647.JPG",
  "/images/vs/IMG_E9648.JPG",
  "/images/vs/IMG_E9649.JPG",
  "/images/vs/IMG_E9650.JPG",
  "/images/vs/IMG_E9651.JPG",
  "/images/vs/IMG_E9652.JPG",
  "/images/vs/IMG_E9653.JPG",
  "/images/vs/IMG_E9654.JPG",
  "/images/vs/IMG_E9655.JPG",
  "/images/vs/IMG_E9656.JPG",
  "/images/vs/IMG_E9657.JPG",
  "/images/vs/IMG_E9658.JPG",
  "/images/vs/IMG_E9662.JPG",
  "/images/vs/IMG_E9667.JPG",
  "/images/vs/IMG_E9668.JPG",
  "/images/vs/IMG_E9669.JPG",
];

function App() {
  // Hero image logic
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000);
    return () => clearInterval(intervalId);
  }, []);
  const nextImageIndex = (currentImageIndex + 1) % images.length;

  // Lab image logic
  const [currentLabIndex, setCurrentLabIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentLabIndex((prevIndex) => (prevIndex + 1) % labImages.length);
    }, 10000);
    return () => clearInterval(intervalId);
  }, []);
  const nextLabIndex = (currentLabIndex + 1) % labImages.length;

  // Exhibition image logic
  const [currentExhibitionIndex, setCurrentExhibitionIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentExhibitionIndex(
        (prevIndex) => (prevIndex + 1) % exhibitionImages.length
      );
    }, 10000);
    return () => clearInterval(intervalId);
  }, []);
  const nextExhibitionIndex =
    (currentExhibitionIndex + 1) % exhibitionImages.length;

  // Valedictory Service image logic
  const [currentVSIndex, setCurrentVSIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentVSIndex((prevIndex) => (prevIndex + 1) % vsImages.length);
    }, 10000);
    return () => clearInterval(intervalId);
  }, []);
  const nextVSIndex = (currentVSIndex + 1) % vsImages.length;

  const [activeNav, setActiveNav] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentLeaderIndex, setCurrentLeaderIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  const leaders = [
    {
      id: 1,
      name: "Akinpelu Adeyinka Adedayo",
      title: "Proprietor",
      image: "/images/leaders/pr.jpg",
      email: "akinpelua08@gmail.com",
      phone: "08064424083",
      bio: "Proprietor of Ifeoluwa Group Of Schools.",
    },
    {
      id: 2,
      name: "Akinpelu Ruth Iyabo",
      title: "Proprietress",
      image: "/images/leaders/prop.jpg", // Keep current image link
      email: "",
      phone: "07065032296",
      bio: "Proprietress of Ifeoluwa Group Of Schools.",
    },
    {
      id: 3,
      name: "Adekunle Lamidi Semiu",
      title: "Principal",
      image: "/images/leaders/prin.jpg", // Keep current image link
      email: "lamidisemiuadekunle@yahoo.com",
      phone: "0915725019",
      bio: "Principal of Ifeoluwa Group Of Schools.",
    },
    {
      id: 4,
      name: "Odewale Omotoyosi Abiodun",
      title: "Headmistress",
      image: "/images/leaders/hm.jpg", // Keep current image link
      email: "ayubahafusatabiodun@gmail.com",
      phone: "08033633096",
      bio: "Headmistress of Ifeoluwa Group Of Schools.",
    },
    {
      id: 5,
      name: "Salako Ronke Christanah",
      title: "HOD",
      image: "/images/leaders/hod.jpg", // Keep current image link
      email: "christiesalk2022@gmail.com",
      phone: "09065259364",
      bio: "Head of Departments at Ifeoluwa Group Of Schools.",
    },
    {
      id: 6,
      name: "Akinpelu Timothy Ifeoluwa",
      title: "IT specialist",
      image: "/images/leaders/it.jpg", // Keep current image link
      email: "management.ifeoluwa@gmail.com",
      phone: "07035703798",
      bio: "IT specialist at Ifeoluwa Group Of Schools.",
    },
    {
      id: 7,
      name: "Akinpelu Grace Anuoluwa",
      title: "Students affairs",
      image: "/images/leaders/sa.jpg", // Keep current image link
      email: "",
      phone: "09048377106",
      bio: "Head of Students Affairs at Ifeoluwa Group Of Schools.",
    },
  ];

  const nextLeader = () => {
    setCurrentLeaderIndex((prevIndex) => (prevIndex + 1) % leaders.length);
  };

  const prevLeader = () => {
    setCurrentLeaderIndex(
      (prevIndex) => (prevIndex - 1 + leaders.length) % leaders.length
    );
  };
  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    const minSwipeDistance = 50;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > minSwipeDistance) {
      if (diff > 0) {
        nextLeader();
      } else {
        prevLeader();
      }
    }
    setTouchStartX(0);
    setTouchEndX(0);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveNav(id);
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveNav(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="school-landing-page">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />

      <Navbar
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        activeNav={activeNav}
        scrollToSection={scrollToSection}
      />

      {/* Hero Section */}
      <section id="hero" className="hero">
        {/* Background Images */}
        <div
          className="hero-bg hero-bg-active"
          style={{ backgroundImage: `url('${images[currentImageIndex]}')` }}
        />
        <div
          className="hero-bg"
          style={{ backgroundImage: `url('${images[nextImageIndex]}')` }}
        />

        {/* Hero Content */}
        <div className="hero-content">
          <h1>Igniting Minds, Building Futures</h1>
          <p>
            Welcome to Ifeoluwa Group Of Schools, where academic excellence
            meets holistic development. Join us to embark on a journey of
            discovery, growth, and lifelong learning.
          </p>
          <a href="#admissions" className="btn">
            Apply For Admission Now
          </a>
        </div>
      </section>

      {/* About Us Section */}
      <section
        id="about"
        className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-gray-100"
      >
        <div className="container mx-auto px-6 md:px-12">
          {/* Section Heading */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-blue-900 tracking-tight">
            About Our Academy
          </h2>

          {/* About Content - Text and Image */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-gray-700 mb-5">
            {/* Text Section */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-blue-600 hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-6 text-blue-700">
                Our Mission Statements
              </h3>
              <ul className="list-disc list-inside space-y-3 text-lg">
                <li>To raise God-fearing Students</li>
                <li>To give qualitative education</li>
                <li>To develop future leaders</li>
                <li>To develop future leaders</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-blue-600 hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-6 text-blue-700">
                Our Promises Statements
              </h3>
              <ul className="list-disc list-inside space-y-3 text-lg">
                <li>Strong moral and spiritual foundation</li>
                <li>Regular parent–teacher engagement</li>
                <li>Student-focused mentorship and leadership training</li>
                <li>
                  Inclusive extracurricular activities (sports, music, drama)
                </li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-gray-700">
            {/* Facilities */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-blue-600 hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-6 text-blue-700">
                Our Facilities
              </h3>
              <ul className="list-disc list-inside space-y-3 text-lg">
                <li>Neat and serene environment</li>
                <li>Conducive learning environment</li>
                <li>Seasoned and qualified teachers</li>
                <li>Instructional & Teaching aid</li>
                <li>Computer Training</li>
              </ul>
            </div>

            {/* Uniqueness */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-blue-600 hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-6 text-blue-700">
                Our Uniqueness
              </h3>
              <ul className="list-disc list-inside space-y-3 text-lg">
                <li>Guidance and counseling unit</li>
                <li>Periodic Excursions</li>
                <li>French education</li>
                <li>Commitment to excellence</li>
                <li>Affordable school fees</li>
              </ul>
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
              <div className="icon">
                <i className="fas fa-child"></i>
              </div>
              <h3>Early Years Foundation</h3>
              <p>
                Engaging and play-based learning for our youngest scholars,
                building foundational skills.
              </p>
            </div>
            <div className="grid-item">
              <div className="icon">
                <i className="fas fa-book-open"></i>
              </div>
              <h3>Primary School Curriculum</h3>
              <p>
                A broad and balanced curriculum focusing on core subjects and
                intellectual curiosity.
              </p>
            </div>
            <div className="grid-item">
              <div className="icon">
                <i className="fas fa-flask"></i>
              </div>
              <h3>Secondary School Excellence</h3>
              <p>
                Challenging academics, specialized subjects, and preparation for
                higher education.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-12 px-4">
        {/* Labs Section */}
        <div className="relative h-[70vh] max-w-5xl mx-auto overflow-hidden rounded-2xl shadow-lg">
          <div
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-700"
            style={{ backgroundImage: `url('${labImages[currentLabIndex]}')` }}
          />
          <div
            className="absolute inset-0 bg-cover bg-center opacity-0 transition-opacity duration-700"
            style={{ backgroundImage: `url('${labImages[nextLabIndex]}')` }}
          />
          <div className="absolute inset-0 " />
          <div className="relative z-10 flex items-start justify-start h-full">
            <h2 className="mt-8 ml-8 text-4xl md:text-5xl font-extrabold text-white tracking-tight drop-shadow-lg">
              Labs
            </h2>
          </div>
        </div>

        {/* Exhibitions Section */}
        <div className="relative h-[70vh] max-w-5xl mx-auto overflow-hidden rounded-2xl shadow-lg">
          <div
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-700"
            style={{
              backgroundImage: `url('${exhibitionImages[currentExhibitionIndex]}')`,
            }}
          />
          <div
            className="absolute inset-0 bg-cover bg-center opacity-0 transition-opacity duration-700"
            style={{
              backgroundImage: `url('${exhibitionImages[nextExhibitionIndex]}')`,
            }}
          />
          <div className="absolute inset-0 " />
          <div className="relative z-10 flex items-start justify-start h-full">
            <h2 className="mt-8 ml-8 text-4xl md:text-5xl font-extrabold text-white tracking-tight drop-shadow-lg">
              Exhibitions
            </h2>
          </div>
        </div>

        {/* Valedictory Service Section */}
        <div className="relative h-[70vh] max-w-5xl mx-auto overflow-hidden rounded-2xl shadow-lg">
          <div
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-700"
            style={{ backgroundImage: `url('${vsImages[currentVSIndex]}')` }}
          />
          <div
            className="absolute inset-0 bg-cover bg-center opacity-0 transition-opacity duration-700"
            style={{ backgroundImage: `url('${vsImages[nextVSIndex]}')` }}
          />
          <div className="absolute inset-0 " />
          <div className="relative z-10 flex items-start justify-start h-full">
            <h2 className="mt-8 ml-8 text-4xl md:text-5xl font-extrabold text-white tracking-tight drop-shadow-lg">
              Valedictory Service
            </h2>
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
                className={`leader-card ${
                  index === currentLeaderIndex ? "active" : ""
                }`}
                style={{
                  transform: `translateX(${
                    (index - currentLeaderIndex) * 100
                  }%)`,
                  opacity: index === currentLeaderIndex ? 1 : 0,
                  pointerEvents: index === currentLeaderIndex ? "auto" : "none",
                }}
              >
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="leader-image"
                />
                <div className="leader-name">{leader.name}</div>
                <div className="leader-title">{leader.title}</div>
                <p className="leader-bio">{leader.bio}</p>
                <p className="leader-bio">{leader.phone}</p>
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
              <p>
                <i className="fas fa-map-marker-alt icon"></i> 123 Academy Lane,
                Schoolville, ST 12345
              </p>
              <p>
                <i className="fas fa-phone icon"></i> +2348084163560
              </p>
              <p>
                <i className="fas fa-envelope icon"></i>{" "}
                info@ifeoluwagroupofschools.edu
              </p>
              <p>
                <i className="fas fa-clock icon"></i> Mon - Fri: 8:00 AM - 4:00
                PM
              </p>

              <h3 style={{ marginTop: "30px" }}>Visit Us</h3>
              <p>
                We welcome you to visit our campus and experience the vibrant
                atmosphere of Ifeoluwa Group Of Schools. Please schedule an
                appointment in advance.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default App;
