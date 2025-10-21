import React, { useState, useEffect } from 'react';

export default function Header() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentFeature, setCurrentFeature] = useState(0);
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

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&h=800&fit=crop",
      title: "Oceanfront Luxury Villas",
      description: "Private beachfront accommodations with stunning ocean views"
    },
    {
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=800&fit=crop",
      title: "Infinity Pool Experience",
      description: "Unlimited access to our spectacular infinity pools"
    },
    {
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&h=800&fit=crop",
      title: "Gourmet Dining",
      description: "World-class cuisine with panoramic ocean views"
    }
  ];

  const features = [
    {
      image: "./Homescreen/Countries/Room1.jpg",
      title: "Private Beach Access",
      description: "Exclusive access to pristine white sand beaches with crystal clear waters and personalized beach service."
    },
    {
      image: "./Homescreen/Countries/Room2.jpg",
      title: "Luxury Spa Treatments",
      description: "Indulge in rejuvenating spa experiences with traditional techniques and modern wellness practices."
    },
    {
      image: "./Homescreen/Countries/Room3.jpg",
      title: "Fine Dining Restaurants",
      description: "Multiple award-winning restaurants offering international cuisine and local Caribbean flavors."
    },
    {
      image: "./Homescreen/Countries/Room4.jpg",
      title: "Water Sports Center",
      description: "Complimentary non-motorized water sports including kayaking, paddle boarding, and snorkeling."
    }
  ];

  const includedFeatures = [
    {
      image: "./Homescreen/Countries/Beach1.jpg",
      title: "Luxury Accommodations",
      description: "Spacious beachfront villas with private balconies, premium amenities, and stunning ocean views. Each villa features modern comforts blended with Caribbean elegance.",
      features: ["Private Balcony", "Ocean View", "Premium Amenities", "Daily Housekeeping"]
    },
    {
      image: "./Homescreen/Countries/Beach2.jpg",
      title: "Gourmet Dining Experience",
      description: "Multiple award-winning restaurants offering world-class cuisine. Enjoy fresh seafood, international dishes, and local Caribbean flavors in breathtaking settings.",
      features: ["Beachfront Dining", "Fresh Seafood", "International Cuisine", "Wine Selection"]
    },
    {
      image: "./Homescreen/Countries/Beach3.jpeg",
      title: "Wellness & Recreation",
      description: "Comprehensive wellness facilities including spa treatments, fitness center, and daily activities. Rejuvenate your mind, body, and spirit in paradise.",
      features: ["Spa Treatments", "Fitness Center", "Yoga Classes", "Pool Access"]
    },
    {
      image: "./Homescreen/Countries/Beach4.jpeg",
      title: "Water Activities",
      description: "Unlimited access to non-motorized water sports and beach equipment. Explore the crystal-clear waters and vibrant marine life of the Caribbean.",
      features: ["Snorkeling Gear", "Kayaks", "Paddle Boards", "Beach Service"]
    }
  ];

  const includedIcons = [
    { icon: "☀️", title: "Daily Breakfast", description: "Start your day with our lavish breakfast buffet" },
    { icon: "🚤", title: "Non-Motorized Water Sports", description: "Kayaks, paddle boards, and snorkeling gear" },
    { icon: "🎯", title: "Daily Activities", description: "Yoga, fitness classes, and cultural workshops" },
    { icon: "👶", title: "Kids Club", description: "Supervised activities for children 4-12 years" },
    { icon: "🏊", title: "Beach and Pool Ambassador Service", description: "Personalized service at all pool and beach areas" },
    { icon: "💪", title: "Access to the Health Club", description: "State-of-the-art fitness equipment and facilities" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextFeature = () => {
    setCurrentFeature((prev) => (prev + 1) % includedFeatures.length);
  };

  const prevFeature = () => {
    setCurrentFeature((prev) => (prev - 1 + includedFeatures.length) % includedFeatures.length);
  };

  // Responsive styles
  const styles = {
    // Main container
    luxuryResort: {
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    },

    // Section 1: Video Hero
    videoHero: {
      position: 'relative',
      height: isMobile ? '70vh' : '100vh',
      overflow: 'hidden'
    },
    videoContainer: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%'
    },
    backgroundVideo: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    },
    videoOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5))'
    },
    heroContent: {
      position: 'relative',
      zIndex: 2,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      textAlign: 'center',
      color: 'white',
      padding: isMobile ? '0 20px' : '0'
    },
    flyingText: {
      fontSize: isMobile ? '2.5rem' : '4rem',
      fontWeight: 300,
      marginBottom: isMobile ? '0.5rem' : '1rem',
      animation: 'flyIn 1.5s ease-out',
      textShadow: '2px 2px 10px rgba(0,0,0,0.5)',
      lineHeight: isMobile ? '1.2' : '1.3'
    },
    heroSubtitle: {
      fontSize: isMobile ? '1.1rem' : '1.5rem',
      fontWeight: 300,
      animation: 'fadeInUp 2s ease-out',
      maxWidth: isMobile ? '100%' : '600px',
      padding: isMobile ? '0 10px' : '0'
    },

    // Section 2: Island Splendor
    islandSplendor: {
      padding: isMobile ? '50px 0' : '80px 0',
      background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)'
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: isMobile ? '0 15px' : '0 20px'
    },
    splendorContent: {
      textAlign: 'center',
      maxWidth: '800px',
      margin: '0 auto'
    },
    sectionTitle: {
      fontSize: isMobile ? '2rem' : '3rem',
      fontWeight: 300,
      marginBottom: isMobile ? '1.5rem' : '2rem',
      color: '#2c5530',
      animation: 'slideDown 1s ease-out',
      lineHeight: isMobile ? '1.2' : '1.3'
    },
    splendorText: {
      fontSize: isMobile ? '1rem' : '1.2rem',
      lineHeight: isMobile ? 1.6 : 1.8,
      color: '#555',
      animation: 'fadeIn 2s ease-out'
    },

    // Section 3: Beach Experience
    beachExperience: {
      position: 'relative',
      height: isMobile ? '40vh' : '60vh',
      overflow: 'hidden'
    },
    beachBg: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('./Homescreen/Countries/Beach3.jpeg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      animation: 'zoomOut 20s infinite alternate'
    },
    experienceContent: {
      position: 'relative',
      zIndex: 2,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      padding: isMobile ? '0 20px' : '0'
    },
    experienceTitle: {
      fontSize: isMobile ? '2.2rem' : '4rem',
      color: 'white',
      textShadow: '2px 2px 10px rgba(0,0,0,0.5)',
      animation: 'float 3s ease-in-out infinite',
      textAlign: 'center'
    },

    // Section 4: Resort Features
    resortFeatures: {
      padding: isMobile ? '50px 0' : '80px 0',
      background: 'white'
    },
    featuresGrid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: isMobile ? '20px' : '30px',
      marginTop: isMobile ? '30px' : '50px'
    },
    featureCard: {
      background: 'white',
      borderRadius: isMobile ? '12px' : '15px',
      overflow: 'hidden',
      boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
      transition: isMobile ? 'none' : 'transform 0.3s ease',
      animation: 'slideInRight 1s ease-out'
    },
    featureImage: {
      width: '100%',
      height: isMobile ? '200px' : '250px',
      overflow: 'hidden'
    },
    featureImageImg: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: isMobile ? 'none' : 'transform 0.3s ease'
    },
    featureContent: {
      padding: isMobile ? '20px' : '25px'
    },
    featureContentH3: {
      fontSize: isMobile ? '1.3rem' : '1.5rem',
      marginBottom: isMobile ? '8px' : '10px',
      color: '#2c5530'
    },
    featureContentP: {
      color: '#666',
      lineHeight: isMobile ? 1.5 : 1.6,
      fontSize: isMobile ? '0.9rem' : '1rem'
    },

    // Section 5: Included Features with 4 Sub-sections
    includedFeatures: {
      padding: isMobile ? '50px 0' : '80px 0',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
      color: 'white'
    },
    includedContainer: {
      maxWidth: '1600px',
      margin: '0 auto',
      padding: isMobile ? '0 15px' : '0 20px'
    },
    includedSection: {
      width: isMobile ? '100%' : '90%',
      margin: '0 auto 40px auto',
      background: 'rgba(255,255,255,0.1)',
      borderRadius: isMobile ? '15px' : '20px',
      overflow: 'hidden',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255,255,255,0.2)',
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      minHeight: isMobile ? 'auto' : '500px',
      animation: 'slideInFromLeft 1s ease-out'
    },
    includedImage: {
      flex: isMobile ? 'none' : '1',
      minWidth: isMobile ? '100%' : '50%',
      height: isMobile ? '250px' : 'auto',
      overflow: 'hidden'
    },
    includedImageImg: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    },
    includedContent: {
      flex: '1',
      padding: isMobile ? '25px' : '40px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    },
    includedTitle: {
      fontSize: isMobile ? '1.8rem' : '2.5rem',
      fontWeight: 300,
      marginBottom: isMobile ? '15px' : '20px',
      color: 'white',
      textAlign: isMobile ? 'center' : 'left'
    },
    includedDescription: {
      fontSize: isMobile ? '1rem' : '1.1rem',
      lineHeight: isMobile ? 1.5 : 1.7,
      marginBottom: isMobile ? '20px' : '25px',
      opacity: 0.9,
      textAlign: isMobile ? 'center' : 'left'
    },
    featuresList: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
      gap: isMobile ? '8px' : '10px',
      marginBottom: isMobile ? '20px' : '30px'
    },
    featureItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      fontSize: isMobile ? '0.85rem' : '0.9rem',
      justifyContent: isMobile ? 'center' : 'flex-start'
    },
    featureDot: {
      color: '#10b981',
      fontSize: isMobile ? '1rem' : '1.2rem'
    },
    navigationButtons: {
      display: 'flex',
      gap: isMobile ? '10px' : '15px',
      justifyContent: 'center',
      marginTop: isMobile ? '20px' : '30px',
      flexWrap: 'wrap'
    },
    navButton: {
      padding: isMobile ? '10px 20px' : '12px 25px',
      background: 'rgba(255,255,255,0.2)',
      border: '1px solid rgba(255,255,255,0.3)',
      color: 'white',
      borderRadius: '25px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      fontSize: isMobile ? '0.9rem' : '1rem',
      fontWeight: '500',
      minWidth: isMobile ? '120px' : 'auto'
    },

    // Section 6: Included Icons Grid
    includedIconsSection: {
      padding: isMobile ? '40px 0' : '60px 0',
     
    },
    includedIconsGrid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: isMobile ? '15px' : '20px',
      marginTop: isMobile ? '30px' : '40px'
    },
    includedIconItem: {
      display: 'flex',
      alignItems: 'center',
      gap: isMobile ? '15px' : '20px',
      padding: isMobile ? '15px' : '20px',
      background: 'rgba(255,255,255,0.1)',
      borderRadius: '10px',
      backdropFilter: 'blur(10px)',
      transition: isMobile ? 'none' : 'all 0.3s ease',
      flexDirection: isMobile ? 'column' : 'row',
      textAlign: isMobile ? 'center' : 'left'
    },
    featureIcon: {
      fontSize: isMobile ? '2rem' : '2.5rem',
      flexShrink: 0
    },
    featureInfo: {
      flex: 1
    },
    featureInfoH4: {
      fontSize: isMobile ? '1.1rem' : '1.2rem',
      marginBottom: isMobile ? '3px' : '5px'
    },
    featureInfoP: {
      fontSize: isMobile ? '0.8rem' : '0.9rem',
      opacity: 0.9,
      lineHeight: 1.4
    },

    // Section 7: Pool Section with Zoom Animation
    poolSection: {
      padding: 0,
      position: 'relative',
      overflow: 'hidden'
    },
    poolImage: {
      width: isMobile ? '95%' : '80%',
      marginLeft: isMobile ? 'auto' : "200px",
      marginRight: isMobile ? 'auto' : 'auto',
      marginTop: isMobile ? '15px' : "20px",
      marginBottom: isMobile ? '15px' : "20px",
      height: isMobile ? '50vh' : '70vh',
      overflow: 'hidden',
      borderRadius: '15px',
      animation: isMobile ? 'mobileZoom 15s ease-in-out infinite' : 'zoomInOut 20s ease-in-out infinite'
    },
    poolImageImg: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform 0.3s ease'
    }
  };

  // Animation styles
  const animationStyles = `
    @keyframes flyIn {
      0% {
        transform: translateY(-100px);
        opacity: 0;
      }
      100% {
        transform: translateY(0);
        opacity: 1;
      }
    }

    @keyframes fadeInUp {
      0% {
        transform: translateY(50px);
        opacity: 0;
      }
      100% {
        transform: translateY(0);
        opacity: 1;
      }
    }

    @keyframes slideDown {
      0% {
        transform: translateY(-50px);
        opacity: 0;
      }
      100% {
        transform: translateY(0);
        opacity: 1;
      }
    }

    @keyframes fadeIn {
      0% { opacity: 0; }
      100% { opacity: 1; }
    }

    @keyframes zoomOut {
      0% {
        transform: scale(1.1);
      }
      100% {
        transform: scale(1);
      }
    }

    @keyframes float {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-20px);
      }
    }

    @keyframes slideInRight {
      0% {
        transform: translateX(100px);
        opacity: 0;
      }
      100% {
        transform: translateX(0);
        opacity: 1;
      }
    }

    @keyframes slideInFromLeft {
      0% {
        transform: translateX(-100px);
        opacity: 0;
      }
      100% {
        transform: translateX(0);
        opacity: 1;
      }
    }

    /* Zoom Animation for Pool Section */
    @keyframes zoomInOut {
      0%, 100% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.05);
      }
    }

    /* Mobile-specific zoom animation */
    @keyframes mobileZoom {
      0%, 100% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.03);
      }
    }

    /* Alternative Zoom Animation */
    @keyframes continuousZoom {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.08);
      }
      100% {
        transform: scale(1);
      }
    }

    /* Smooth Zoom Hover Effect */
    .pool-image:hover {
      animation-play-state: paused;
    }

    .pool-image:hover .pool-image-img {
      transform: scale(1.1);
    }

    .feature-card:hover {
      transform: ${isMobile ? 'none' : 'translateY(-10px)'};
    }

    .feature-card:hover .feature-image img {
      transform: ${isMobile ? 'none' : 'scale(1.1)'};
    }

    .included-item:hover {
      transform: ${isMobile ? 'none' : 'translateY(-5px)'};
      background: rgba(255,255,255,0.2);
    }

    .nav-button:hover {
      background: rgba(255,255,255,0.3);
      transform: ${isMobile ? 'none' : 'translateY(-2px)'};
    }

    /* Slide animations for feature cards */
    .slide-in:nth-child(1) { animation-delay: 0.1s; }
    .slide-in:nth-child(2) { animation-delay: 0.2s; }
    .slide-in:nth-child(3) { animation-delay: 0.3s; }
    .slide-in:nth-child(4) { animation-delay: 0.4s; }

    /* Mobile Responsive */
    @media (max-width: 768px) {
      .flying-text { font-size: 2.5rem; }
      .hero-subtitle { font-size: 1.2rem; }
      .section-title { font-size: 2rem; }
      .experience-title { font-size: 2.5rem; }
      .features-grid { grid-template-columns: 1fr; }
      .included-features-grid { grid-template-columns: 1fr; }
      .included-item { flex-direction: column; text-align: center; }
      .included-section { flex-direction: column; }
      .included-image { min-height: 300px; }
      .features-list { grid-template-columns: 1fr; }
    }
  `;

  return (
    <div style={styles.luxuryResort}>
      <style>{animationStyles}</style>
      
      {/* Section 1: Video Background with Heading */}
      <section style={styles.videoHero}>
        <div style={styles.videoContainer}>
          <video autoPlay muted loop style={styles.backgroundVideo}>
            <source src="./Homescreen/Countries/Beach.mp4" type="video/mp4" />
          </video>
          <div style={styles.videoOverlay}></div>
        </div>
        <div style={styles.heroContent}>
          <h1 style={styles.flyingText}>Experience True Luxury by the Sea</h1>
          <p style={styles.heroSubtitle}>Where paradise meets perfection</p>
        </div>
      </section>

      {/* Section 2: Island Splendor with Flying Animation */}
      <section style={styles.islandSplendor}>
        <div style={styles.container}>
          <div style={styles.splendorContent}>
            <h2 style={styles.sectionTitle}>Island Splendor</h2>
            <p style={styles.splendorText}>
              Tucked on the shores of Saint Lucia's iconic Rodney Bay along one of the island's most celebrated beaches, 
              The Landings Resort and Spa exudes a sense of luxury and timeless elegance. Set beachfront on pristine 
              white sands and azure waters, sophistication meets island authenticity at our exquisite all-villa suite 
              resort. Indulge in gourmet dining inspired by local flavors, bask in the warmth of personalized, five-star 
              service, and relax as each leisurely day unfolds anew. Effortless and elegant, discover the Caribbean's 
              most extraordinary escape.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Beach Background with Moving Down Animation */}
      <section style={styles.beachExperience}>
        <div style={styles.beachBg}></div>
        <div style={styles.experienceContent}>
          <h2 style={styles.experienceTitle}>The Landings Experience</h2>
        </div>
      </section>

      {/* Section 4: Sliding Feature Cards */}
      <section style={styles.resortFeatures}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Resort Amenities</h2>
          <div style={styles.featuresGrid}>
            {features.map((feature, index) => (
              <div 
                key={index} 
                style={styles.featureCard}
                className="slide-in feature-card"
              >
                <div style={styles.featureImage}>
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    style={styles.featureImageImg}
                  />
                </div>
                <div style={styles.featureContent}>
                  <h3 style={styles.featureContentH3}>{feature.title}</h3>
                  <p style={styles.featureContentP}>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Included Features with 4 Sub-sections */}
      <section style={styles.includedFeatures}>
        <div style={styles.includedContainer}>
          <h2 style={{...styles.sectionTitle, color: 'white', textAlign: 'center'}}>Included In Your Stay</h2>
          
          {/* Current Feature Display */}
          <div style={styles.includedSection} className="included-section">
            <div style={styles.includedImage}>
              <img 
                src={includedFeatures[currentFeature].image} 
                alt={includedFeatures[currentFeature].title}
                style={styles.includedImageImg}
              />
            </div>
            <div style={styles.includedContent}>
              <h3 style={styles.includedTitle}>{includedFeatures[currentFeature].title}</h3>
              <p style={styles.includedDescription}>
                {includedFeatures[currentFeature].description}
              </p>
              <div style={styles.featuresList}>
                {includedFeatures[currentFeature].features.map((feature, index) => (
                  <div key={index} style={styles.featureItem}>
                    <span style={styles.featureDot}>✓</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div style={styles.navigationButtons}>
            <button 
              style={styles.navButton}
              onClick={prevFeature}
              className="nav-button"
            >
              ← Previous
            </button>
            <button 
              style={styles.navButton}
              onClick={nextFeature}
              className="nav-button"
            >
              Next →
            </button>
          </div>

          {/* Icons Grid */}
          <div style={styles.includedIconsSection}>
            <div style={styles.includedIconsGrid}>
              {includedIcons.map((feature, index) => (
                <div 
                  key={index} 
                  style={styles.includedIconItem}
                  className="included-item"
                >
                  <div style={styles.featureIcon}>{feature.icon}</div>
                  <div style={styles.featureInfo}>
                    <h4 style={styles.featureInfoH4}>{feature.title}</h4>
                    <p style={styles.featureInfoP}>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Water Pool Image with Zoom Animation */}
      <section style={styles.poolSection}>
        <div style={styles.poolImage} className="pool-image">
          <img 
            src="./Homescreen/Countries/Room5.jpg" 
            alt="Luxury Infinity Pool" 
            style={styles.poolImageImg}
            className="pool-image-img"
          />
        </div>
      </section>
    </div>
  );
}