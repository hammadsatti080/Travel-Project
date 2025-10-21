import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Mountain() {
  const location = useLocation();
  const navigate = useNavigate();
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeImage, setActiveImage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const trendingDestinations = [
    {
      id: 1,
      name: "Everest Base Camp",
      location: "Nepal",
      image: "./Homescreen/Countries/nepal4.jpg",
      difficulty: "Expert",
      duration: "12 days",
      rating: 4.9,
      page: "/everest-adventure"
    },
 
    {
      id: 3,
      name: "Mont Blanc",
      location: "France/Italy",
      image: "./Homescreen/Countries/nepal3.jpg",
      difficulty: "Intermediate",
      duration: "7 days",
      rating: 4.7,
      page: "/montblanc-expedition"
    },
    {
      id: 4,
      name: "Kilimanjaro",
      location: "Tanzania",
      image: "./Homescreen/Countries/nepal5.jpg",
      difficulty: "Advanced",
      duration: "8 days",
      rating: 4.9,
      page: "/kilimanjaro-climb"
    }
  ];

  const backgroundImages = [
    "https://images.unsplash.com/photo-1464822759849-e30de63c6e48?w=1200&h=800&fit=crop",
    "https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?w=1200&h=800&fit=crop",
    "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=800&fit=crop",
    "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&h=800&fit=crop"
  ];

  // Check mobile screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => {
      if (!isMobile) {
        setMousePosition({ x: e.clientX, y: e.clientY });
      }
    };

    window.addEventListener('scroll', handleScroll);
    if (!isMobile) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    // Background image slideshow
    const interval = setInterval(() => {
      setActiveImage(prev => (prev + 1) % backgroundImages.length);
    }, 5000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', checkScreenSize);
      clearInterval(interval);
    };
  }, [isMobile]);

  // Navigation handlers
  const handleStartAdventure = () => {
    navigate('/adventure', { 
      state: { 
        fromMountain: true,
        category: 'Mountain Adventures',
        featured: true
      }
    });
  };

  const handleViewTrails = () => {
    navigate('/trails', { 
      state: { 
        fromMountain: true,
        category: 'Mountain Trails',
        difficulty: 'All Levels'
      }
    });
  };

  const handleTrendingClick = (destination) => {
    navigate(destination.page, {
      state: {
        destinationData: destination,
        fromMountain: true,
        timestamp: new Date().toISOString()
      }
    });
  };

  const styles = {
    // Hero Section
    heroSection: {
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
      minHeight: isMobile ? '90vh' : '100vh',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: isMobile ? '20px 15px' : '0'
    },
    backgroundContainer: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: isMobile ? '110%' : '120%',
      overflow: 'hidden'
    },
    backgroundLayer: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundImage: `url(${backgroundImages[activeImage]})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      transform: isMobile 
        ? `translateY(${scrollY * 0.1}px) scale(1.05)`
        : `translateY(${scrollY * 0.3}px) scale(1.1)`,
      opacity: 0,
      transition: 'opacity 1.5s ease-in-out, transform 0.1s ease-out',
      filter: 'brightness(0.4) contrast(1.1)'
    },
    backgroundLayerActive: {
      opacity: 1,
      transform: isMobile 
        ? `translateY(${scrollY * 0.1}px) scale(1.05)`
        : `translateY(${scrollY * 0.3}px) scale(${1.1 + (mousePosition.y / window.innerHeight) * 0.1})`
    },
    floatingElements: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      pointerEvents: 'none',
      display: isMobile ? 'none' : 'block'
    },
    floatingElement: {
      position: 'absolute',
      background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)',
      borderRadius: '50%',
      filter: 'blur(40px)',
      animation: 'float 6s ease-in-out infinite'
    },
    content: {
      position: 'relative',
      zIndex: 10,
      textAlign: 'center',
      color: 'white',
      padding: isMobile ? '0 10px' : '0 20px',
      transform: isMobile ? 'none' : `translateY(${scrollY * 0.1}px)`,
      width: '100%'
    },
    title: {
      fontSize: isMobile ? 'clamp(2rem, 10vw, 3.5rem)' : 'clamp(3rem, 8vw, 6rem)',
      fontWeight: '800',
      marginBottom: isMobile ? '15px' : '20px',
      background: 'linear-gradient(135deg, #ffffff 0%, #cbd5e1 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      textShadow: '0 0 30px rgba(59, 130, 246, 0.5)',
      animation: 'titleGlow 3s ease-in-out infinite alternate',
      lineHeight: '1.1'
    },
    subtitle: {
      fontSize: isMobile ? '1.1rem' : '1.5rem',
      color: '#cbd5e1',
      marginBottom: isMobile ? '30px' : '50px',
      maxWidth: isMobile ? '100%' : '600px',
      margin: '0 auto',
      lineHeight: isMobile ? '1.5' : '1.6',
      padding: isMobile ? '0 10px' : '0'
    },
    ctaContainer: {
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      gap: isMobile ? '15px' : '20px',
      justifyContent: 'center',
      alignItems: 'center',
      width: isMobile ? '100%' : 'auto'
    },
    ctaButton: {
      background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
      color: 'white',
      border: 'none',
      padding: isMobile ? '16px 30px' : '18px 45px',
      borderRadius: '50px',
      fontSize: isMobile ? '1rem' : '1.1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
      boxShadow: '0 8px 30px rgba(59, 130, 246, 0.4)',
      position: 'relative',
      overflow: 'hidden',
      width: isMobile ? '100%' : 'auto',
      maxWidth: isMobile ? '280px' : 'none',
      minHeight: isMobile ? '50px' : 'auto'
    },
    ctaButtonHover: {
      transform: isMobile ? 'translateY(-2px)' : 'translateY(-5px) scale(1.05)',
      boxShadow: isMobile 
        ? '0 12px 35px rgba(59, 130, 246, 0.5)' 
        : '0 20px 50px rgba(59, 130, 246, 0.6)'
    },
    secondaryButton: {
      background: 'transparent',
      color: 'white',
      border: '2px solid rgba(255, 255, 255, 0.3)',
      padding: isMobile ? '16px 30px' : '18px 45px',
      borderRadius: '50px',
      fontSize: isMobile ? '1rem' : '1.1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.4s ease',
      backdropFilter: 'blur(10px)',
      width: isMobile ? '100%' : 'auto',
      maxWidth: isMobile ? '280px' : 'none',
      minHeight: isMobile ? '50px' : 'auto'
    },
    secondaryButtonHover: {
      background: 'rgba(255, 255, 255, 0.1)',
      borderColor: 'rgba(255, 255, 255, 0.5)',
      transform: isMobile ? 'translateY(-1px)' : 'translateY(-3px)'
    },

    // Trending Section
    trendingSection: {
      background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
      padding: isMobile ? '60px 15px' : '100px 20px',
      position: 'relative'
    },
    sectionTitle: {
      textAlign: 'center',
      fontSize: isMobile ? '2.2rem' : '3.5rem',
      fontWeight: '800',
      marginBottom: isMobile ? '40px' : '60px',
      background: 'linear-gradient(135deg, #10b981, #3b82f6)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      lineHeight: '1.1',
      padding: isMobile ? '0 10px' : '0'
    },
    trendingGrid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(320px, 1fr))',
      gap: isMobile ? '20px' : '30px',
      maxWidth: '1200px',
      margin: '0 auto'
    },
    trendingCard: {
      background: 'rgba(255, 255, 255, 0.05)',
      borderRadius: isMobile ? '16px' : '20px',
      overflow: 'hidden',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
      cursor: 'pointer'
    },
    trendingCardHover: {
      transform: isMobile ? 'translateY(-5px)' : 'translateY(-15px) scale(1.02)',
      boxShadow: isMobile 
        ? '0 15px 30px rgba(0, 0, 0, 0.4)' 
        : '0 25px 50px rgba(0, 0, 0, 0.5)',
      borderColor: 'rgba(59, 130, 246, 0.5)'
    },
    trendingImage: {
      width: '100%',
      height: isMobile ? '180px' : '250px',
      objectFit: 'cover',
      transition: 'all 0.5s ease'
    },
    trendingImageHover: {
      transform: isMobile ? 'scale(1.05)' : 'scale(1.1)'
    },
    trendingContent: {
      padding: isMobile ? '20px' : '25px'
    },
    trendingName: {
      fontSize: isMobile ? '1.2rem' : '1.4rem',
      fontWeight: '700',
      color: 'white',
      marginBottom: isMobile ? '8px' : '10px',
      lineHeight: '1.2'
    },
    trendingLocation: {
      color: '#cbd5e1',
      fontSize: isMobile ? '0.9rem' : '1rem',
      marginBottom: isMobile ? '12px' : '15px',
      display: 'flex',
      alignItems: 'center',
      gap: '6px'
    },
    trendingMeta: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: isMobile ? '15px' : '20px',
      flexWrap: 'wrap',
      gap: isMobile ? '8px' : '0'
    },
    difficultyBadge: {
      padding: isMobile ? '5px 12px' : '6px 15px',
      borderRadius: '20px',
      fontSize: isMobile ? '0.75rem' : '0.8rem',
      fontWeight: '600',
      textTransform: 'uppercase'
    },
    rating: {
      display: 'flex',
      alignItems: 'center',
      gap: '4px',
      color: '#fbbf24',
      fontSize: isMobile ? '0.9rem' : '1rem'
    },
    trendingStats: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: isMobile ? '8px' : '10px'
    },
    stat: {
      textAlign: 'center',
      padding: isMobile ? '10px' : '12px',
      background: 'rgba(255, 255, 255, 0.05)',
      borderRadius: isMobile ? '8px' : '10px'
    },
    statValue: {
      fontSize: isMobile ? '1rem' : '1.1rem',
      fontWeight: '700',
      color: 'white'
    },
    statLabel: {
      fontSize: isMobile ? '0.75rem' : '0.8rem',
      color: '#cbd5e1',
      textTransform: 'uppercase'
    }
  };

  const [hoverStates, setHoverStates] = useState({
    primaryButton: false,
    secondaryButton: false,
    trendingCards: {}
  });

  const getDifficultyColor = (difficulty) => {
    const colors = {
      'Beginner': '#10b981',
      'Intermediate': '#f59e0b',
      'Advanced': '#f97316',
      'Expert': '#ef4444'
    };
    return colors[difficulty] || '#64748b';
  };

  // Disable hover effects on mobile
  const handleMouseEnter = (type, id = null) => {
    if (isMobile) return;
    
    setHoverStates(prev => ({
      ...prev,
      [type]: id ? { ...prev[type], [id]: true } : true
    }));
  };

  const handleMouseLeave = (type, id = null) => {
    if (isMobile) return;
    
    setHoverStates(prev => ({
      ...prev,
      [type]: id ? { ...prev[type], [id]: false } : false
    }));
  };

  return (
    <div>
      {/* Hero Section */}
      <div style={styles.heroSection}>
        <div style={styles.backgroundContainer}>
          {backgroundImages.map((image, index) => (
            <div
              key={index}
              style={{
                ...styles.backgroundLayer,
                ...(index === activeImage && styles.backgroundLayerActive),
                backgroundImage: `url(${image})`
              }}
            />
          ))}
        </div>
        
        {/* Floating Elements (Desktop only) */}
        {!isMobile && (
          <div style={styles.floatingElements}>
            <div style={{...styles.floatingElement, width: '200px', height: '200px', top: '20%', left: '10%', animationDelay: '0s'}} />
            <div style={{...styles.floatingElement, width: '150px', height: '150px', top: '60%', right: '15%', animationDelay: '2s'}} />
            <div style={{...styles.floatingElement, width: '100px', height: '100px', bottom: '20%', left: '20%', animationDelay: '4s'}} />
          </div>
        )}

        <div style={styles.content}>
          <h1 style={styles.title}>Conquer The Peaks</h1>
          <p style={styles.subtitle}>
            Experience the thrill of high-altitude adventures with expert guides, 
            breathtaking views, and memories that last a lifetime
          </p>
          <div style={styles.ctaContainer}>
            <button
              style={{
                ...styles.ctaButton,
                ...(hoverStates.primaryButton && styles.ctaButtonHover)
              }}
              onMouseEnter={() => handleMouseEnter('primaryButton')}
              onMouseLeave={() => handleMouseLeave('primaryButton')}
              onClick={handleStartAdventure}
            >
              🚀 Start Adventure
            </button>
            <button
              style={{
                ...styles.secondaryButton,
                ...(hoverStates.secondaryButton && styles.secondaryButtonHover)
              }}
              onMouseEnter={() => handleMouseEnter('secondaryButton')}
              onMouseLeave={() => handleMouseLeave('secondaryButton')}
              onClick={handleViewTrails}
            >
              📖 View Trails
            </button>
          </div>
        </div>
      </div>

      {/* Trending Destinations Section */}
      <div style={styles.trendingSection}>
        <h2 style={styles.sectionTitle}>Trending Expeditions</h2>
        <div style={styles.trendingGrid}>
          {trendingDestinations.map((destination) => (
            <div
              key={destination.id}
              style={{
                ...styles.trendingCard,
                ...(hoverStates.trendingCards[destination.id] && styles.trendingCardHover)
              }}
              onMouseEnter={() => handleMouseEnter('trendingCards', destination.id)}
              onMouseLeave={() => handleMouseLeave('trendingCards', destination.id)}
              onClick={() => handleTrendingClick(destination)}
            >
              <img
                src={destination.image}
                alt={destination.name}
                style={{
                  ...styles.trendingImage,
                  ...(hoverStates.trendingCards[destination.id] && styles.trendingImageHover)
                }}
              />
              <div style={styles.trendingContent}>
                <h3 style={styles.trendingName}>{destination.name}</h3>
                <div style={styles.trendingLocation}>
                  📍 {destination.location}
                </div>
                <div style={styles.trendingMeta}>
                  <span style={{
                    ...styles.difficultyBadge,
                    background: getDifficultyColor(destination.difficulty),
                    color: 'white'
                  }}>
                    {destination.difficulty}
                  </span>
                  <div style={styles.rating}>
                    ⭐ {destination.rating}
                  </div>
                </div>
                <div style={styles.trendingStats}>
                  <div style={styles.stat}>
                    <div style={styles.statValue}>⏱️ {destination.duration}</div>
                    <div style={styles.statLabel}>Duration</div>
                  </div>
                  <div style={styles.stat}>
                    <div style={styles.statValue}>🏔️ Peak</div>
                    <div style={styles.statLabel}>Adventure</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}