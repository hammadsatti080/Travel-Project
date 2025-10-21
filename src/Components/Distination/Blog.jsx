import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Blog() {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

  const blogPosts = [
    {
      id: 1,
      category: "Adventure",
      title: "Adventure Awaits in the Mountains",
      description: "Discover breathtaking trails and hidden gems on your next mountain escape. Perfect for thrill-seekers and nature lovers.",
      image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=400&h=300&fit=crop",
      readTime: "5 min read",
      likes: 124,
      page: "/Mountain",
      buttonText: "Explore Mountains 🏔️"
    },
    {
      id: 2,
      category: "Luxury Travel",
      title: "Experience True Luxury by the Sea",
      description: "Indulge in serene beaches, private villas, and world-class dining for an unforgettable vacation experience.",
      image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=400&h=300&fit=crop",
      readTime: "7 min read",
      likes: 89,
      page: "/Luxury",
      buttonText: "Discover Luxury 🏖️"
    },
    {
      id: 3,
      category: "Culture",
      title: "Cultural Wonders Around the Globe",
      description: "Explore the traditions, festivals, and heritage that make every country a unique destination worth visiting.",
      image: "https://images.unsplash.com/photo-1480796927426-f609979314bd?w=400&h=300&fit=crop",
      readTime: "6 min read",
      likes: 156,
      page: "/culture",
      buttonText: "Explore Cultures 🎭"
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

  const styles = {
    // Main container with clean white background
    mainContainer: {
      minHeight: '100vh',
      background: '#ffffff',
      padding: isMobile ? '30px 15px' : '40px 20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      overflow: 'hidden'
    },
    // Clean main container
    mainDiv: {
      position: 'relative',
      maxWidth: '1200px',
      width: '100%',
      background: '#ffffff',
      borderRadius: isMobile ? '16px' : '20px',
      padding: isMobile ? '30px 20px' : '50px 40px',
      boxShadow: '0 10px 40px rgba(255, 107, 53, 0.1)',
      border: '2px solid #fff5f0'
    },
    blogSection: {
      width: '100%',
      color: '#333333',
      position: 'relative'
    },
    blogHeader: {
      textAlign: 'center',
      marginBottom: isMobile ? '40px' : '60px'
    },
    blogTitle: {
      fontSize: isMobile ? '1.8rem' : 'clamp(2.2rem, 4vw, 3.5rem)',
      marginBottom: isMobile ? '15px' : '20px',
      fontWeight: '800',
      color: '#ff6b35',
      textShadow: '0 2px 10px rgba(255, 107, 53, 0.2)',
      letterSpacing: '-0.5px',
      lineHeight: '1.1'
    },
    blogSubtitle: {
      fontSize: isMobile ? '0.9rem' : 'clamp(1rem, 2vw, 1.2rem)',
      color: '#666666',
      maxWidth: '600px',
      margin: '0 auto',
      lineHeight: '1.6',
      fontWeight: '400'
    },
    // Clean grid layout
    blogGrid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: isMobile ? '20px' : '30px',
      alignItems: 'stretch'
    },
    blogCard: {
      background: '#ffffff',
      borderRadius: isMobile ? '16px' : '20px',
      overflow: 'hidden',
      boxShadow: '0 8px 30px rgba(255, 107, 53, 0.08)',
      transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
      border: '1px solid #ffe8dc',
      position: 'relative',
      cursor: 'pointer'
    },
    blogCardHover: {
      transform: isMobile ? 'translateY(-4px)' : 'translateY(-8px)',
      boxShadow: '0 20px 50px rgba(255, 107, 53, 0.15)',
      borderColor: '#ff6b35'
    },
    blogImage: {
      width: '100%',
      height: isMobile ? '180px' : '220px',
      overflow: 'hidden',
      position: 'relative',
      background: '#f8f8f8'
    },
    blogImageImg: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'all 0.5s ease'
    },
    blogImageHover: {
      transform: 'scale(1.05)'
    },
    blogContent: {
      padding: isMobile ? '20px' : '25px'
    },
    blogCategory: {
      display: 'inline-block',
      background: '#ff6b35',
      color: 'white',
      padding: isMobile ? '6px 16px' : '8px 20px',
      borderRadius: '12px',
      fontSize: isMobile ? '0.7rem' : '0.75rem',
      fontWeight: '700',
      marginBottom: isMobile ? '12px' : '15px',
      boxShadow: '0 4px 15px rgba(255, 107, 53, 0.3)',
      letterSpacing: '0.5px',
      textTransform: 'uppercase'
    },
    blogPostTitle: {
      fontSize: isMobile ? '1.2rem' : '1.4rem',
      color: '#333333',
      marginBottom: isMobile ? '12px' : '15px',
      fontWeight: '700',
      lineHeight: '1.3',
      transition: 'all 0.3s ease'
    },
    blogPostTitleHover: {
      color: '#ff6b35'
    },
    blogDescription: {
      color: '#666666',
      lineHeight: '1.6',
      marginBottom: isMobile ? '15px' : '20px',
      fontSize: isMobile ? '0.85rem' : '0.95rem',
      fontWeight: '400'
    },
    blogMeta: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: isMobile ? '15px' : '20px',
      fontSize: isMobile ? '0.8rem' : '0.85rem',
      color: '#888888',
      flexWrap: 'wrap',
      gap: '10px'
    },
    readMoreBtn: {
      background: 'transparent',
      color: '#ff6b35',
      border: '2px solid #ff6b35',
      padding: isMobile ? '14px 20px' : '12px 28px',
      borderRadius: isMobile ? '16px' : '20px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      fontSize: isMobile ? '0.85rem' : '0.9rem',
      letterSpacing: '0.3px',
      width: '100%',
      minHeight: isMobile ? '50px' : 'auto',
      touchAction: 'manipulation',
      WebkitTapHighlightColor: 'transparent'
    },
    readMoreBtnHover: {
      background: '#ff6b35',
      color: 'white',
      transform: 'translateY(-2px)',
      boxShadow: '0 8px 20px rgba(255, 107, 53, 0.3)'
    },
    readMoreBtnActive: {
      transform: 'translateY(0)',
      background: '#e55a2b'
    },
    likeButton: {
      background: 'none',
      border: 'none',
      color: '#cccccc',
      cursor: 'pointer',
      fontSize: isMobile ? '0.8rem' : '0.9rem',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      padding: isMobile ? '8px 12px' : '6px 10px',
      borderRadius: '15px',
      minHeight: '40px',
      touchAction: 'manipulation'
    },
    likeButtonActive: {
      color: '#ff6b35',
      background: 'rgba(255, 107, 53, 0.1)'
    },
    // Loading overlay
    loadingOverlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'rgba(255, 255, 255, 0.95)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 10000,
      color: '#ff6b35',
      fontSize: isMobile ? '1.2rem' : '1.5rem',
      fontWeight: '600',
      fontFamily: 'inherit'
    },
    loadingSpinner: {
      width: isMobile ? '40px' : '50px',
      height: isMobile ? '40px' : '50px',
      border: '3px solid rgba(255, 107, 53, 0.3)',
      borderTop: '3px solid #ff6b35',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite',
      marginBottom: isMobile ? '10px' : '15px'
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
    
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }

    /* Global styles */
    body {
      background: #ffffff !important;
      margin: 0;
      padding: 0;
      overflow-x: hidden;
    }

    html {
      background: #ffffff;
    }

    * {
      box-sizing: border-box;
    }

    /* Card animations */
    .blog-card {
      animation: fadeInUp 0.6s ease-out;
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
      .blog-card:hover,
      .read-more-btn:hover,
      .like-btn:hover {
        transform: none !important;
      }
    }
  `;

  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredButton, setHoveredButton] = useState(null);
  const [likedPosts, setLikedPosts] = useState({});
  const [isNavigating, setIsNavigating] = useState(false);
  const [buttonActive, setButtonActive] = useState(false);

  // Enhanced navigation with loading state
  const handleExploreClick = async (page, title, category) => {
    setIsNavigating(true);
    
    // Simulate API call or loading
    await new Promise(resolve => setTimeout(resolve, 1200));
    
    console.log(`🚀 Navigating to: ${page}`);
    console.log(`📝 Blog Post: ${title}`);
    
    // Navigate with state
    navigate(page, { 
      state: { 
        fromBlog: true,
        blogTitle: title,
        category: category,
        timestamp: new Date().toISOString()
      }
    });
    
    // Reset navigation state after a bit
    setTimeout(() => setIsNavigating(false), 1500);
  };

  // Handle like with enhanced animation
  const handleLike = (index, e) => {
    e.stopPropagation();
    setLikedPosts(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  // Handle card click
  const handleCardClick = (post) => {
    handleExploreClick(post.page, post.title, post.category);
  };

  // Handle button click
  const handleButtonClick = (post, e) => {
    e.stopPropagation();
    handleExploreClick(post.page, post.title, post.category);
  };

  const handleButtonPress = (isPressed) => {
    if (!isMobile) return;
    setButtonActive(isPressed);
  };

  return (
    <div style={styles.mainContainer}>
      <style>{animationStyles}</style>
      
      {/* Loading Overlay */}
      {isNavigating && (
        <div style={styles.loadingOverlay}>
          <div style={styles.loadingSpinner}></div>
          <div>Preparing your journey...</div>
        </div>
      )}
      
      {/* Clean Main Container */}
      <div style={styles.mainDiv}>
        <div style={styles.blogSection}>
          {/* Header Section */}
          <div style={styles.blogHeader}>
            <h2 style={styles.blogTitle}>Discover Your Next Adventure</h2>
            <p style={styles.blogSubtitle}>
              Explore breathtaking destinations, luxury escapes, and cultural experiences 
              that will transform your travel dreams into reality.
            </p>
          </div>
          
          {/* Blog Cards Grid */}
          <div style={styles.blogGrid}>
            {blogPosts.map((post, index) => (
              <div 
                key={post.id}
                className="blog-card"
                style={{
                  ...styles.blogCard,
                  ...(hoveredCard === index && !isMobile && styles.blogCardHover),
                  animationDelay: `${index * 0.1}s`
                }}
                onMouseEnter={() => !isMobile && setHoveredCard(index)}
                onMouseLeave={() => !isMobile && setHoveredCard(null)}
                onClick={() => handleCardClick(post)}
              >
                {/* Card Image */}
                <div style={styles.blogImage}>
                  <img 
                    src={post.image} 
                    alt={post.title}
                    style={{
                      ...styles.blogImageImg,
                      ...(hoveredCard === index && !isMobile && styles.blogImageHover)
                    }}
                  />
                </div>
                
                {/* Card Content */}
                <div style={styles.blogContent}>
                  <span style={styles.blogCategory}>{post.category}</span>
                  
                  <h3 style={{
                    ...styles.blogPostTitle,
                    ...(hoveredCard === index && !isMobile && styles.blogPostTitleHover)
                  }}>
                    {post.title}
                  </h3>
                  
                  <p style={styles.blogDescription}>{post.description}</p>
                  
                  <div style={styles.blogMeta}>
                    <span>⏱️ {post.readTime}</span>
                    <button 
                      className="like-btn"
                      style={{
                        ...styles.likeButton,
                        ...(likedPosts[index] && styles.likeButtonActive)
                      }}
                      onClick={(e) => handleLike(index, e)}
                    >
                      {likedPosts[index] ? '❤️' : '🤍'} {likedPosts[index] ? post.likes + 1 : post.likes}
                    </button>
                  </div>
                  
                  <button 
                    className="read-more-btn"
                    style={{
                      ...styles.readMoreBtn,
                      ...(hoveredButton === index && !isMobile && styles.readMoreBtnHover),
                      ...(buttonActive && styles.readMoreBtnActive)
                    }}
                    onMouseEnter={() => !isMobile && setHoveredButton(index)}
                    onMouseLeave={() => !isMobile && setHoveredButton(null)}
                    onTouchStart={() => handleButtonPress(true)}
                    onTouchEnd={() => handleButtonPress(false)}
                    onClick={(e) => handleButtonClick(post, e)}
                  >
                    {post.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}