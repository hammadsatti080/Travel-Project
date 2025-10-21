import React, { useState, useEffect } from 'react';

export default function Heroportion() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  // Beach background image
  const beachImage = "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=800&fit=crop";

  // Feature Packages
  const featurePackages = [
    {
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop",
      title: "Romance Package",
      description: "Enjoy romance in paradise with a private butler service if you book 4 nights or more. Our Romance Package includes daily breakfast, flower petals and turndown service with a bottle of champagne on arrival night, one hour couples' massage, use of non-motorized water sports, Wi-Fi, and taxes & service change."
    },
    {
      image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=400&h=300&fit=crop",
      title: "Family Package",
      description: "Perfect for family getaways with complimentary kids' activities, family-sized accommodations, and special dining options. Includes breakfast, water sports, and family-friendly entertainment."
    },
    {
      image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=400&h=300&fit=crop",
      title: "Wellness Package",
      description: "Rejuvenate your mind and body with our wellness package featuring daily yoga sessions, spa treatments, healthy dining options, and mindfulness activities in our serene environment."
    }
  ];

  // Testimonials
  const testimonials = [
    {
      text: "We truly enjoyed our 5-night stay. Our room was spacious and clean. My husband could not stay out of our personal plunge pool. The food was great! We looked forward to breakfast every morning. The resort staff was kind and professional. We would stay again.",
      author: "Gwendolyn",
      source: "TripAdvisor",
      rating: "★★★★★"
    },
    {
      text: "It is by far the best place we've stayed. The beach was beautiful and quiet. We didn't feel we were in an overcrowded resort. Highly recommend this resort, especially if you like the convenience of a hotel and the space offered by a villa.",
      author: "SamInRuisLip",
      source: "TripAdvisor",
      rating: "★★★★★"
    },
    {
      text: "This is the most beautiful resort we've ever stayed at and we were thrilled to be back for our 2nd time! We went as a family of 8 adults and stayed in the beachfront 2 and 3 br villas. The resort is just gorgeous.",
      author: "Tracey S",
      source: "TripAdvisor",
      rating: "★★★★★"
    },
    {
      text: "Situated on its own marina with a private beach, this place is to die for. A huge suite/apartment, comfortable beds, a massive balcony, full kitchen, and that's just the room…",
      author: "Mark T.",
      source: "TripAdvisor",
      rating: "★★★★★"
    }
  ];

  // Gallery Images
  const galleryImages = [
    "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400&h=300&fit=crop"
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Auto-rotate gallery images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % (galleryImages.length - 2));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % (galleryImages.length - 2));
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + (galleryImages.length - 2)) % (galleryImages.length - 2));
  };

  const styles = {
    // Main container
    heroContainer: {
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    },

    // Section 1: Beach Background with Feature Packages
    beachSection: {
      position: 'relative',
      background: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${beachImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: isMobile ? 'scroll' : 'fixed',
      padding: isMobile ? '40px 0' : '80px 0',
      color: 'white'
    },
    beachOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0,0,0,0.3)'
    },
    beachContent: {
      position: 'relative',
      zIndex: 2,
      maxWidth: '1200px',
      margin: '0 auto',
      padding: isMobile ? '0 15px' : '0 20px',
      textAlign: 'center'
    },
    beachTitle: {
      fontSize: isMobile ? '2.5rem' : '3.5rem',
      fontWeight: 300,
      marginBottom: isMobile ? '1rem' : '2rem',
      textShadow: '2px 2px 8px rgba(0,0,0,0.5)',
      animation: 'fadeInDown 1s ease-out'
    },
    packagesGrid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
      gap: isMobile ? '20px' : '30px',
      marginTop: isMobile ? '30px' : '50px'
    },
    packageCard: {
      background: 'rgba(255,255,255,0.1)',
      backdropFilter: 'blur(10px)',
      borderRadius: '15px',
      overflow: 'hidden',
      border: '1px solid rgba(255,255,255,0.2)',
      transition: 'transform 0.3s ease',
      animation: 'slideUp 1s ease-out'
    },
    packageImage: {
      width: '100%',
      height: isMobile ? '150px' : '200px',
      overflow: 'hidden'
    },
    packageImageImg: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    },
    packageContent: {
      padding: isMobile ? '20px' : '25px',
      textAlign: 'left'
    },
    packageTitle: {
      fontSize: isMobile ? '1.3rem' : '1.5rem',
      fontWeight: 600,
      marginBottom: isMobile ? '10px' : '15px',
      color: 'white'
    },
    packageDescription: {
      fontSize: isMobile ? '0.9rem' : '1rem',
      lineHeight: 1.5,
      opacity: 0.9,
      color: '#f0f0f0'
    },

    // Section 2: Video Testimonials
    videoTestimonials: {
      padding: isMobile ? '50px 0' : '80px 0',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
      color: 'white'
    },
    testimonialsContainer: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: isMobile ? '0 15px' : '0 20px'
    },
    testimonialsTitle: {
      fontSize: isMobile ? '2rem' : '2.5rem',
      fontWeight: 300,
      textAlign: 'center',
      marginBottom: isMobile ? '30px' : '50px',
      animation: 'fadeIn 1s ease-out'
    },
    testimonialContent: {
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      gap: isMobile ? '25px' : '40px',
      alignItems: 'center'
    },
    videoSection: {
      flex: 1,
      borderRadius: '15px',
      overflow: 'hidden',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255,255,255,0.2)'
    },
    videoPlaceholder: {
      width: '100%',
      height: isMobile ? '250px' : '350px',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: isMobile ? '1.2rem' : '1.5rem',
      fontWeight: 600
    },
    testimonialsSection: {
      flex: 1,
      position: 'relative'
    },
    testimonialCard: {
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
      backdropFilter: 'blur(10px)',
      borderRadius: '15px',
      padding: isMobile ? '25px' : '35px',
      border: '1px solid rgba(255,255,255,0.2)',
      animation: 'fadeIn 0.5s ease-out',
      minHeight: isMobile ? 'auto' : '300px'
    },
    testimonialRating: {
      color: '#FFD700',
      fontSize: isMobile ? '1.2rem' : '1.5rem',
      marginBottom: '15px'
    },
    testimonialText: {
      fontSize: isMobile ? '1rem' : '1.1rem',
      lineHeight: 1.6,
      marginBottom: '20px',
      fontStyle: 'italic'
    },
    testimonialAuthor: {
      fontSize: isMobile ? '0.9rem' : '1rem',
      fontWeight: 600,
      color: '#f0f0f0'
    },
    testimonialSource: {
      fontSize: isMobile ? '0.8rem' : '0.9rem',
      opacity: 0.8,
      marginTop: '5px'
    },
    navigationButtons: {
      display: 'flex',
      justifyContent: 'center',
      gap: '15px',
      marginTop: '25px'
    },
    navButton: {
      background: 'rgba(255,255,255,0.2)',
      border: '1px solid rgba(255,255,255,0.3)',
      color: 'white',
      padding: isMobile ? '8px 16px' : '10px 20px',
      borderRadius: '25px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      fontSize: isMobile ? '0.9rem' : '1rem'
    },

    // Section 3: Image Gallery
    gallerySection: {
      padding: isMobile ? '50px 0' : '80px 0',
      background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)'
    },
    galleryContainer: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: isMobile ? '0 15px' : '0 20px'
    },
    galleryTitle: {
      fontSize: isMobile ? '2rem' : '2.5rem',
      fontWeight: 300,
      textAlign: 'center',
      marginBottom: isMobile ? '30px' : '50px',
      color: '#2c5530',
      animation: 'fadeIn 1s ease-out'
    },
    galleryContent: {
      position: 'relative',
      overflow: 'hidden'
    },
    galleryImages: {
      display: 'flex',
      transition: 'transform 0.5s ease',
      transform: `translateX(-${currentImage * (100 / 3)}%)`,
      gap: isMobile ? '10px' : '20px'
    },
    galleryImage: {
      flex: `0 0 ${isMobile ? '100%' : '33.333%'}`,
      height: isMobile ? '250px' : '300px',
      borderRadius: '10px',
      overflow: 'hidden',
      boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
    },
    galleryImageImg: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform 0.3s ease'
    },
    galleryNavButtons: {
      display: 'flex',
      justifyContent: 'center',
      gap: '15px',
      marginTop: '25px'
    },
    galleryNavButton: {
      background: '#2c5530',
      border: 'none',
      color: 'white',
      padding: isMobile ? '8px 16px' : '10px 20px',
      borderRadius: '25px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      fontSize: isMobile ? '0.9rem' : '1rem'
    }
  };

  // Animation styles
  const animationStyles = `
    @keyframes fadeInDown {
      0% {
        opacity: 0;
        transform: translateY(-30px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes slideUp {
      0% {
        opacity: 0;
        transform: translateY(30px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    .package-card:hover {
      transform: ${isMobile ? 'none' : 'translateY(-10px)'};
    }

    .gallery-image:hover img {
      transform: scale(1.05);
    }

    .nav-button:hover {
      background: rgba(255,255,255,0.3);
      transform: ${isMobile ? 'none' : 'translateY(-2px)'};
    }

    .gallery-nav-button:hover {
      background: #1e3a24;
      transform: ${isMobile ? 'none' : 'translateY(-2px)'};
    }

    /* Mobile adjustments */
    @media (max-width: 768px) {
      .gallery-images {
        transform: translateX(-${currentImage * 100}%);
      }
    }
  `;

  return (
    <div style={styles.heroContainer}>
      <style>{animationStyles}</style>
      
      {/* Section 1: Beach Background with Feature Packages */}
      <section style={styles.beachSection}>
        <div style={styles.beachOverlay}></div>
        <div style={styles.beachContent}>
          <h1 style={styles.beachTitle}>Feature Packages</h1>
          <div style={styles.packagesGrid}>
            {featurePackages.map((pkg, index) => (
              <div key={index} style={styles.packageCard} className="package-card">
                <div style={styles.packageImage}>
                  <img 
                    src={pkg.image} 
                    alt={pkg.title}
                    style={styles.packageImageImg}
                  />
                </div>
                <div style={styles.packageContent}>
                  <h3 style={styles.packageTitle}>{pkg.title}</h3>
                  <p style={styles.packageDescription}>{pkg.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Video Testimonials */}
      <section style={styles.videoTestimonials}>
        <div style={styles.testimonialsContainer}>
          <h2 style={styles.testimonialsTitle}>Letters From Paradise</h2>
          <div style={styles.testimonialContent}>
            <div style={styles.videoSection}>
              <div style={styles.videoPlaceholder}>
              <video autoPlay muted loop style={styles.backgroundVideo}>
            <source src="./Homescreen/Countries/Beach.mp4" type="video/mp4" />
          </video>
              </div>
            </div>
            <div style={styles.testimonialsSection}>
              <div style={styles.testimonialCard}>
                <div style={styles.testimonialRating}>
                  {testimonials[currentTestimonial].rating}
                </div>
                <p style={styles.testimonialText}>
                  "{testimonials[currentTestimonial].text}"
                </p>
                <div style={styles.testimonialAuthor}>
                  - {testimonials[currentTestimonial].author}
                </div>
                <div style={styles.testimonialSource}>
                  {testimonials[currentTestimonial].source}
                </div>
              </div>
              <div style={styles.navigationButtons}>
                <button 
                  style={styles.navButton}
                  onClick={prevTestimonial}
                  className="nav-button"
                >
                  ← Previous
                </button>
                <button 
                  style={styles.navButton}
                  onClick={nextTestimonial}
                  className="nav-button"
                >
                  Next →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Image Gallery */}
      <section style={styles.gallerySection}>
        <div style={styles.galleryContainer}>
          <h2 style={styles.galleryTitle}>Resort Gallery</h2>
          <div style={styles.galleryContent}>
            <div style={styles.galleryImages}>
              {galleryImages.map((image, index) => (
                <div key={index} style={styles.galleryImage} className="gallery-image">
                  <img 
                    src={image} 
                    alt={`Resort view ${index + 1}`}
                    style={styles.galleryImageImg}
                  />
                </div>
              ))}
            </div>
            <div style={styles.galleryNavButtons}>
              <button 
                style={styles.galleryNavButton}
                onClick={prevImage}
                className="gallery-nav-button"
              >
                ← Previous
              </button>
              <button 
                style={styles.galleryNavButton}
                onClick={nextImage}
                className="gallery-nav-button"
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}