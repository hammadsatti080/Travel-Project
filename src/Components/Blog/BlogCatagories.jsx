import React, { useState, useEffect, useRef } from 'react';

const BlogCatagories = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollContainerRef = useRef(null);

  const categoriesData = [
    {
      id: 'all',
      name: 'All Destinations',
      icon: '🌍',
      background: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=200&h=120&fit=crop',
      color: '#3b82f6'
    },
    {
      id: 'beaches',
      name: 'Tropical Beaches',
      icon: '🏝️',
      background: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=200&h=120&fit=crop',
      color: '#f59e0b'
    },
    {
      id: 'adventure',
      name: 'Mountain Adventure',
      icon: '🏔️',
      background: 'https://images.unsplash.com/photo-1464822759849-e30de63c6e48?w=200&h=120&fit=crop',
      color: '#10b981'
    },
    {
      id: 'food',
      name: 'Local Food Tours',
      icon: '🍜',
      background: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=200&h=120&fit=crop',
      color: '#ef4444'
    },
    {
      id: 'culture',
      name: 'Cultural Heritage',
      icon: '🎭',
      background: 'https://images.unsplash.com/photo-1580327344181-c1163234e5a7?w=200&h=120&fit=crop',
      color: '#8b5cf6'
    },
    {
      id: 'luxury',
      name: 'Luxury Escapes',
      icon: '⭐',
      background: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=200&h=120&fit=crop',
      color: '#f59e0b'
    },
    {
      id: 'wildlife',
      name: 'Wildlife Safari',
      icon: '🦁',
      background: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=200&h=120&fit=crop',
      color: '#d97706'
    },
    {
      id: 'winter',
      name: 'Winter Wonderland',
      icon: '❄️',
      background: 'https://images.unsplash.com/photo-1453306458620-5bbef13a5bca?w=200&h=120&fit=crop',
      color: '#60a5fa'
    }
  ];

  // Check mobile screen size
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

  // Handle scroll for tilt effect
  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        setScrollPosition(scrollContainerRef.current.scrollLeft);
      }
    };

    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const styles = {
    // Main container
    mainContainer: {
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
      minHeight: '40vh',
      padding: isMobile ? '20px 15px' : '40px 20px',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      color: 'white'
    },

    // Header section
    header: {
      textAlign: 'center',
      marginBottom: isMobile ? '30px' : '40px'
    },

    title: {
      fontSize: isMobile ? '1.8rem' : '2.5rem',
      fontWeight: '800',
      background: 'linear-gradient(135deg, #ffffff 0%, #cbd5e1 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      marginBottom: '10px'
    },

    subtitle: {
      fontSize: isMobile ? '1rem' : '1.2rem',
      color: '#94a3b8',
      maxWidth: '600px',
      margin: '0 auto',
      lineHeight: '1.6'
    },

    // Categories container
    categoriesContainer: {
      maxWidth: '1200px',
      margin: '0 auto',
      position: 'relative'
    },

    // Scroll container
    scrollContainer: {
      display: 'flex',
      overflowX: 'auto',
      gap: isMobile ? '12px' : '20px',
      padding: isMobile ? '10px 5px' : '20px 10px',
      scrollbarWidth: 'none',
      msOverflowStyle: 'none',
      cursor: 'grab',
      scrollSnapType: 'x mandatory'
    },

    scrollContainerWebkit: {
      '&::-webkit-scrollbar': {
        display: 'none'
      }
    },

    // Category card
    categoryCard: {
      flex: '0 0 auto',
      width: isMobile ? '140px' : '180px',
      height: isMobile ? '100px' : '120px',
      borderRadius: '16px',
      overflow: 'hidden',
      position: 'relative',
      cursor: 'pointer',
      transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
      scrollSnapAlign: 'start',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
    },

    categoryCardSelected: {
      transform: isMobile ? 'scale(1.05)' : 'scale(1.08)',
      boxShadow: '0 12px 40px rgba(255, 255, 255, 0.2), 0 0 0 3px currentColor'
    },

    categoryCardHover: {
      transform: isMobile ? 'scale(1.02)' : 'scale(1.05)'
    },

    // Card background
    cardBackground: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'all 0.4s ease',
      filter: 'brightness(0.7)'
    },

    cardBackgroundHover: {
      transform: 'scale(1.1)',
      filter: 'brightness(0.8)'
    },

    // Gradient overlay
    gradientOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'linear-gradient(135deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)',
      transition: 'all 0.3s ease'
    },

    gradientOverlayHover: {
      background: 'linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)'
    },

    // Card content
    cardContent: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      padding: isMobile ? '12px' : '16px',
      transition: 'all 0.3s ease'
    },

    cardContentHover: {
      transform: 'translateY(-4px)'
    },

    categoryIcon: {
      fontSize: isMobile ? '1.2rem' : '1.5rem',
      marginBottom: '4px',
      filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))'
    },

    categoryName: {
      fontSize: isMobile ? '0.8rem' : '0.9rem',
      fontWeight: '700',
      color: 'white',
      textShadow: '0 2px 8px rgba(0,0,0,0.7)',
      lineHeight: '1.2',
      letterSpacing: '0.5px'
    },

    // Scroll indicators
    scrollIndicator: {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      width: '40px',
      height: '40px',
      background: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(10px)',
      border: 'none',
      borderRadius: '50%',
      color: 'white',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1.2rem',
      transition: 'all 0.3s ease',
      opacity: '0.8'
    },

    scrollIndicatorHover: {
      background: 'rgba(255, 255, 255, 0.2)',
      opacity: '1'
    },

    leftIndicator: {
      left: '10px'
    },

    rightIndicator: {
      right: '10px'
    },

    // Selected category display
    selectedCategoryDisplay: {
      textAlign: 'center',
      marginTop: isMobile ? '30px' : '40px',
      padding: isMobile ? '20px' : '30px',
      background: 'rgba(255, 255, 255, 0.05)',
      borderRadius: '16px',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.1)'
    },

    selectedTitle: {
      fontSize: isMobile ? '1.3rem' : '1.8rem',
      fontWeight: '700',
      marginBottom: '10px',
      background: 'linear-gradient(135deg, #ffffff, #cbd5e1)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    },

    selectedDescription: {
      fontSize: isMobile ? '0.9rem' : '1.1rem',
      color: '#94a3b8',
      maxWidth: '500px',
      margin: '0 auto',
      lineHeight: '1.6'
    },

    // Explore more arrow
    exploreArrow: {
      position: 'absolute',
      right: isMobile ? '5px' : '10px',
      top: '50%',
      transform: 'translateY(-50%)',
      fontSize: isMobile ? '1rem' : '1.2rem',
      color: 'rgba(255, 255, 255, 0.6)',
      animation: 'bounceHorizontal 2s infinite',
      pointerEvents: 'none'
    }
  };

  const animationStyles = `
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes slideInLeft {
      from {
        opacity: 0;
        transform: translateX(-30px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    @keyframes bounceHorizontal {
      0%, 20%, 50%, 80%, 100% {
        transform: translateY(-50%) translateX(0);
      }
      40% {
        transform: translateY(-50%) translateX(-5px);
      }
      60% {
        transform: translateY(-50%) translateX(-3px);
      }
    }

    @keyframes tiltScroll {
      0% {
        transform: rotate(0deg);
      }
      50% {
        transform: rotate(1deg);
      }
      100% {
        transform: rotate(0deg);
      }
    }

    .category-card {
      animation: fadeInUp 0.6s ease-out;
    }

    .scroll-container {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }

    .scroll-container::-webkit-scrollbar {
      display: none;
    }

    /* Mobile tilt effect */
    @media (max-width: 768px) {
      .scroll-container {
        animation: tiltScroll 0.3s ease-out;
      }
    }

    /* Reduced motion support */
    @media (prefers-reduced-motion: reduce) {
      * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
      }
    }
  `;

  const [hoverStates, setHoverStates] = useState({});
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseEnter = (categoryId) => {
    setHoverStates(prev => ({ ...prev, [categoryId]: true }));
  };

  const handleMouseLeave = (categoryId) => {
    setHoverStates(prev => ({ ...prev, [categoryId]: false }));
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    console.log(`Category selected: ${category.name}`);
  };

  const scrollLeftHandler = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRightHandler = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  // Drag to scroll functionality
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseLeaveContainer = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const getCategoryDescription = (category) => {
    const descriptions = {
      'all': 'Discover all our amazing travel destinations and experiences around the world.',
      'beaches': 'Relax on pristine sandy beaches with crystal clear waters and tropical vibes.',
      'adventure': 'Challenge yourself with thrilling mountain treks and outdoor adventures.',
      'food': 'Explore local cuisines and culinary experiences from around the globe.',
      'culture': 'Immerse yourself in rich cultural heritage and historical landmarks.',
      'luxury': 'Experience premium accommodations and exclusive travel experiences.',
      'wildlife': 'Encounter amazing wildlife in their natural habitats and ecosystems.',
      'winter': 'Enjoy snowy landscapes and winter sports in breathtaking locations.'
    };
    return descriptions[category.id] || `Explore amazing ${category.name.toLowerCase()} experiences.`;
  };

  return (
    <div style={styles.mainContainer}>
      <style>{animationStyles}</style>
      
      {/* Header */}
      <div style={styles.header}>
        <h1 style={styles.title}>Discover Your Journey</h1>
        <p style={styles.subtitle}>
          Explore curated travel experiences and find your perfect adventure
        </p>
      </div>

      {/* Categories Section */}
      <div style={styles.categoriesContainer}>
        
        {/* Scroll Left Button (Desktop only) */}
        {!isMobile && (
          <button
            style={{
              ...styles.scrollIndicator,
              ...styles.leftIndicator,
              ...(hoverStates.scrollLeft && styles.scrollIndicatorHover)
            }}
            onMouseEnter={() => handleMouseEnter('scrollLeft')}
            onMouseLeave={() => handleMouseLeave('scrollLeft')}
            onClick={scrollLeftHandler}
          >
            ‹
          </button>
        )}

        {/* Categories Scroll Container */}
        <div
          ref={scrollContainerRef}
          style={styles.scrollContainer}
          className="scroll-container"
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeaveContainer}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {categoriesData.map((category, index) => (
            <div
              key={category.id}
              className="category-card"
              style={{
                ...styles.categoryCard,
                ...(hoverStates[category.id] && styles.categoryCardHover),
                ...(selectedCategory?.id === category.id && {
                  ...styles.categoryCardSelected,
                  color: category.color
                }),
                animationDelay: `${index * 0.1}s`
              }}
              onMouseEnter={() => handleMouseEnter(category.id)}
              onMouseLeave={() => handleMouseLeave(category.id)}
              onClick={() => handleCategoryClick(category)}
            >
              {/* Background Image */}
              <img
                src={category.background}
                alt={category.name}
                style={{
                  ...styles.cardBackground,
                  ...(hoverStates[category.id] && styles.cardBackgroundHover)
                }}
              />
              
              {/* Gradient Overlay */}
              <div
                style={{
                  ...styles.gradientOverlay,
                  ...(hoverStates[category.id] && styles.gradientOverlayHover)
                }}
              />
              
              {/* Content */}
              <div
                style={{
                  ...styles.cardContent,
                  ...(hoverStates[category.id] && styles.cardContentHover)
                }}
              >
                <div style={styles.categoryIcon}>{category.icon}</div>
                <div style={styles.categoryName}>{category.name}</div>
              </div>
            </div>
          ))}
          
          {/* Explore More Arrow */}
          {!isMobile && (
            <div style={styles.exploreArrow}>
              ›
            </div>
          )}
        </div>

        {/* Scroll Right Button (Desktop only) */}
        {!isMobile && (
          <button
            style={{
              ...styles.scrollIndicator,
              ...styles.rightIndicator,
              ...(hoverStates.scrollRight && styles.scrollIndicatorHover)
            }}
            onMouseEnter={() => handleMouseEnter('scrollRight')}
            onMouseLeave={() => handleMouseLeave('scrollRight')}
            onClick={scrollRightHandler}
          >
            ›
          </button>
        )}
      </div>

      {/* Selected Category Display */}
      {selectedCategory && (
        <div style={styles.selectedCategoryDisplay}>
          <h2 style={styles.selectedTitle}>
            {selectedCategory.icon} {selectedCategory.name}
          </h2>
          <p style={styles.selectedDescription}>
            {getCategoryDescription(selectedCategory)}
          </p>
        </div>
      )}
    </div>
  );
};

export default BlogCatagories;