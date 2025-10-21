import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const BlogFeatured = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

  const featuredPosts = {
    mainFeatured: {
      id: 1,
      category: "Adventure",
      title: "Discover Hidden Waterfalls in Bali's Jungles",
      description: "Explore secret waterfalls tucked away in lush jungles. From Bali's sacred cascades to Thailand's hidden gems, discover nature's most spectacular water displays that few tourists ever see.",
      image: "./Homescreen/Countries/Blog5.jpg",
      readTime: "6 min read",
      views: "12.4K",
      page: "/waterfalls-asia",
      buttonText: "Explore Adventure",
      author: "Sarah Adventure"
    },
    sideFeatures: [
      {
        id: 2,
        category: "Luxury",
        title: "Desert Luxury Camps Under Stars",
        description: "Sleep under the stars in luxurious desert camps with five-star amenities.",
        image: "./Homescreen/Countries/Blog1.jpg",
        readTime: "5 min read",
        page: "/desert-luxury"
      },
      {
        id: 3,
        category: "Culture",
        title: "Ancient Temples of Cambodia",
        description: "Discover the mystical temples and rich history of Angkor Wat.",
        image: "./Homescreen/Countries/Blog2.jpg",
        readTime: "7 min read",
        page: "/cambodia-temples"
      },
      {
        id: 4,
        category: "Beach",
        title: "Private Islands of Thailand",
        description: "Experience pristine beaches and crystal clear waters in hidden islands.",
        image: "./Homescreen/Countries/Blog3.jpg",
        readTime: "4 min read",
        page: "/thailand-islands"
      },
      {
        id: 5,
        category: "Mountain",
        title: "Himalayan Trekking Routes",
        description: "Challenge yourself with these breathtaking mountain trails.",
        image: "./Homescreen/Countries/Blog4.jpg",
        readTime: "8 min read",
        page: "/himalayan-trek"
      }
    ]
  };

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

  const styles = {
    // Main container
    mainContainer: {
      minHeight: '100vh',
      background: '#ffffff',
      padding: isMobile ? '30px 15px' : '60px 20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      overflow: 'hidden'
    },

    // Main content wrapper - 60-40 split
    contentWrapper: {
      maxWidth: '1200px',
      width: '100%',
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      gap: isMobile ? '30px' : '40px',
      alignItems: 'flex-start'
    },

    // Left side - 60% width
    leftSide: {
      flex: isMobile ? '0 0 100%' : '0 0 60%',
      display: 'flex',
      flexDirection: 'column',
      gap: isMobile ? '20px' : '30px'
    },

    // Right side - 40% width
    rightSide: {
      flex: isMobile ? '0 0 100%' : '0 0 40%',
      display: 'flex',
      flexDirection: 'column',
      gap: isMobile ? '20px' : '25px'
    },

    // Main featured card
    mainFeaturedCard: {
      background: '#ffffff',
      borderRadius: isMobile ? '16px' : '20px',
      overflow: 'hidden',
      boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
      border: '1px solid #f0f0f0',
      transition: 'all 0.4s ease',
      cursor: 'pointer',
      animation: 'slideInLeft 0.8s ease-out'
    },

    mainFeaturedCardHover: {
      transform: isMobile ? 'translateY(-4px)' : 'translateY(-8px)',
      boxShadow: '0 20px 50px rgba(0, 0, 0, 0.12)'
    },

    mainImageContainer: {
      width: '100%',
      height: isMobile ? '250px' : '400px',
      overflow: 'hidden',
      position: 'relative'
    },

    mainImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'all 0.5s ease'
    },

    mainImageHover: {
      transform: 'scale(1.05)'
    },

    mainContent: {
      padding: isMobile ? '25px 20px' : '40px'
    },

    mainCategory: {
      display: 'inline-block',
      background: '#2D3748',
      color: 'white',
      padding: isMobile ? '6px 16px' : '8px 20px',
      borderRadius: '12px',
      fontSize: isMobile ? '0.7rem' : '0.8rem',
      fontWeight: '700',
      marginBottom: isMobile ? '15px' : '20px',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
      animation: 'bounceIn 0.6s ease-out 0.2s both'
    },

    mainTitle: {
      fontSize: isMobile ? '1.6rem' : '2.5rem',
      fontWeight: '800',
      color: '#1A202C',
      marginBottom: isMobile ? '15px' : '20px',
      lineHeight: '1.2',
      animation: 'fadeInUp 0.8s ease-out 0.3s both'
    },

    mainDescription: {
      fontSize: isMobile ? '0.95rem' : '1.1rem',
      color: '#4A5568',
      lineHeight: '1.6',
      marginBottom: isMobile ? '20px' : '30px',
      animation: 'fadeInUp 0.8s ease-out 0.4s both'
    },

    mainMeta: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: isMobile ? '20px' : '30px',
      animation: 'fadeInUp 0.8s ease-out 0.5s both',
      flexWrap: 'wrap',
      gap: '10px'
    },

    metaInfo: {
      display: 'flex',
      gap: isMobile ? '12px' : '20px',
      color: '#718096',
      fontSize: isMobile ? '0.8rem' : '0.9rem',
      flexWrap: 'wrap'
    },

    mainButton: {
      background: '#2D3748',
      color: 'white',
      border: 'none',
      padding: isMobile ? '14px 30px' : '15px 40px',
      borderRadius: '10px',
      fontSize: isMobile ? '0.9rem' : '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      animation: 'fadeInUp 0.8s ease-out 0.6s both',
      minHeight: isMobile ? '50px' : 'auto',
      width: '100%',
      touchAction: 'manipulation',
      WebkitTapHighlightColor: 'transparent'
    },

    mainButtonHover: {
      background: '#4A5568',
      transform: 'translateY(-2px)',
      boxShadow: '0 8px 20px rgba(45, 55, 72, 0.3)'
    },

    mainButtonActive: {
      transform: 'translateY(0)',
      background: '#1A202C'
    },

    // Side feature cards
    sideFeatureCard: {
      background: '#ffffff',
      borderRadius: isMobile ? '12px' : '16px',
      overflow: 'hidden',
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.06)',
      border: '1px solid #f7f7f7',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      display: 'flex',
      animation: 'slideInRight 0.8s ease-out',
      minHeight: isMobile ? '100px' : '120px'
    },

    sideFeatureCardHover: {
      transform: isMobile ? 'translateY(-2px)' : 'translateX(8px)',
      boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)'
    },

    sideImageContainer: {
      flex: isMobile ? '0 0 80px' : '0 0 120px',
      height: isMobile ? '100px' : '120px',
      overflow: 'hidden'
    },

    sideImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'all 0.4s ease'
    },

    sideImageHover: {
      transform: 'scale(1.1)'
    },

    sideContent: {
      flex: 1,
      padding: isMobile ? '12px 15px' : '20px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    },

    sideCategory: {
      color: '#718096',
      fontSize: isMobile ? '0.65rem' : '0.75rem',
      fontWeight: '700',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
      marginBottom: isMobile ? '4px' : '8px'
    },

    sideTitle: {
      fontSize: isMobile ? '0.9rem' : '1.1rem',
      fontWeight: '700',
      color: '#2D3748',
      marginBottom: isMobile ? '6px' : '8px',
      lineHeight: '1.3',
      display: '-webkit-box',
      WebkitLineClamp: 2,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden'
    },

    sideDescription: {
      fontSize: isMobile ? '0.75rem' : '0.85rem',
      color: '#718096',
      lineHeight: '1.4',
      marginBottom: isMobile ? '8px' : '12px',
      display: '-webkit-box',
      WebkitLineClamp: 2,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden'
    },

    sideMeta: {
      color: '#A0AEC0',
      fontSize: isMobile ? '0.7rem' : '0.75rem',
      fontWeight: '500'
    },

    // Section header
    sectionHeader: {
      marginBottom: isMobile ? '20px' : '30px',
      animation: 'fadeInUp 0.8s ease-out'
    },

    sectionTitle: {
      fontSize: isMobile ? '1.5rem' : '2rem',
      fontWeight: '800',
      color: '#1A202C',
      marginBottom: isMobile ? '8px' : '10px'
    },

    sectionSubtitle: {
      fontSize: isMobile ? '0.9rem' : '1.1rem',
      color: '#718096',
      lineHeight: '1.5'
    }
  };

  const animationStyles = `
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
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

    @keyframes slideInRight {
      from {
        opacity: 0;
        transform: translateX(30px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    @keyframes bounceIn {
      0% {
        opacity: 0;
        transform: scale(0.8);
      }
      60% {
        opacity: 1;
        transform: scale(1.05);
      }
      100% {
        opacity: 1;
        transform: scale(1);
      }
    }

    /* Mobile optimizations */
    @media (max-width: 768px) {
      * {
        -webkit-tap-highlight-color: transparent;
      }
      
      button {
        cursor: pointer;
        min-height: 44px;
      }
    }

    /* Touch device optimizations */
    @media (hover: none) {
      .main-featured-card:hover,
      .side-feature-card:hover,
      .main-button:hover {
        transform: none !important;
      }
    }
  `;

  const [hoveredMain, setHoveredMain] = useState(false);
  const [hoveredSide, setHoveredSide] = useState(null);
  const [buttonActive, setButtonActive] = useState(false);

  const handleExploreClick = (page, title) => {
    console.log(`Navigating to: ${page}`);
    console.log(`Blog: ${title}`);
    navigate(page, {
      state: {
        blogTitle: title,
        timestamp: new Date().toISOString()
      }
    });
  };

  const handleMainCardClick = () => {
    handleExploreClick(featuredPosts.mainFeatured.page, featuredPosts.mainFeatured.title);
  };

  const handleSideCardClick = (post) => {
    handleExploreClick(post.page, post.title);
  };

  const handleButtonPress = (isPressed) => {
    if (!isMobile) return;
    setButtonActive(isPressed);
  };

  return (
    <div style={styles.mainContainer}>
      <style>{animationStyles}</style>
      
      <div style={styles.contentWrapper}>
        
        {/* Left Side - 60% - Main Featured Post */}
        <div style={styles.leftSide}>
          
          {/* Section Header */}
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>Featured Adventure</h2>
            <p style={styles.sectionSubtitle}>
              Discover the most captivating travel stories and experiences from around the world
            </p>
          </div>

          {/* Main Featured Card */}
          <div 
            className="main-featured-card"
            style={{
              ...styles.mainFeaturedCard,
              ...(hoveredMain && !isMobile && styles.mainFeaturedCardHover)
            }}
            onMouseEnter={() => !isMobile && setHoveredMain(true)}
            onMouseLeave={() => !isMobile && setHoveredMain(false)}
            onClick={handleMainCardClick}
          >
            <div style={styles.mainImageContainer}>
              <img 
                src={featuredPosts.mainFeatured.image} 
                alt={featuredPosts.mainFeatured.title}
                style={{
                  ...styles.mainImage,
                  ...(hoveredMain && !isMobile && styles.mainImageHover)
                }}
              />
            </div>
            
            <div style={styles.mainContent}>
              <div style={styles.mainCategory}>
                {featuredPosts.mainFeatured.category}
              </div>
              
              <h1 style={styles.mainTitle}>
                {featuredPosts.mainFeatured.title}
              </h1>
              
              <p style={styles.mainDescription}>
                {featuredPosts.mainFeatured.description}
              </p>
              
              <div style={styles.mainMeta}>
                <div style={styles.metaInfo}>
                  <span>⏱️ {featuredPosts.mainFeatured.readTime}</span>
                  <span>👁️ {featuredPosts.mainFeatured.views}</span>
                  <span>✍️ {featuredPosts.mainFeatured.author}</span>
                </div>
              </div>
              
              <button 
                style={{
                  ...styles.mainButton,
                  ...(hoveredMain && !isMobile && styles.mainButtonHover),
                  ...(buttonActive && styles.mainButtonActive)
                }}
                onMouseEnter={() => !isMobile && setHoveredMain(true)}
                onMouseLeave={() => !isMobile && setHoveredMain(false)}
                onTouchStart={() => handleButtonPress(true)}
                onTouchEnd={() => handleButtonPress(false)}
                onClick={(e) => {
                  e.stopPropagation();
                  handleMainCardClick();
                }}
              >
                {featuredPosts.mainFeatured.buttonText} →
              </button>
            </div>
          </div>
        </div>

        {/* Right Side - 40% - Side Features */}
        <div style={styles.rightSide}>
          
          {/* Side Section Header */}
          <div style={styles.sectionHeader}>
            <h2 style={{...styles.sectionTitle, fontSize: isMobile ? '1.2rem' : '1.5rem'}}>
              More Stories
            </h2>
            <p style={{...styles.sectionSubtitle, fontSize: isMobile ? '0.8rem' : '0.9rem'}}>
              Explore other amazing travel experiences
            </p>
          </div>

          {/* Side Feature Cards */}
          {featuredPosts.sideFeatures.map((post, index) => (
            <div
              key={post.id}
              className="side-feature-card"
              style={{
                ...styles.sideFeatureCard,
                ...(hoveredSide === index && !isMobile && styles.sideFeatureCardHover),
                animationDelay: `${index * 0.1 + 0.3}s`
              }}
              onMouseEnter={() => !isMobile && setHoveredSide(index)}
              onMouseLeave={() => !isMobile && setHoveredSide(null)}
              onClick={() => handleSideCardClick(post)}
            >
              <div style={styles.sideImageContainer}>
                <img 
                  src={post.image} 
                  alt={post.title}
                  style={{
                    ...styles.sideImage,
                    ...(hoveredSide === index && !isMobile && styles.sideImageHover)
                  }}
                />
              </div>
              
              <div style={styles.sideContent}>
                <div style={styles.sideCategory}>{post.category}</div>
                <h3 style={styles.sideTitle}>{post.title}</h3>
                <p style={styles.sideDescription}>{post.description}</p>
                <div style={styles.sideMeta}>⏱️ {post.readTime}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogFeatured;