import React, { useState, useEffect } from 'react';

const BlogSidebar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [savedPosts, setSavedPosts] = useState({});
  const [isMobile, setIsMobile] = useState(false);

  // Sample data
  const sidebarData = {
    searchWidget: {
      placeholder: "Search destinations, tips, or countries…"
    },
    newsletterWidget: {
      title: "Get Travel Guides & Exclusive Deals",
      description: "Bi-weekly inspiration and route-tested tips for curious travelers.",
      buttonText: "Join Free ✈️",
      note: "We'll never spam — unsubscribe anytime."
    },
    categoriesWidget: {
      title: "Explore by Interest",
      items: [
        { name: "Mountain Adventures", count: 24, icon: "🏔️" },
        { name: "Beach Getaways", count: 18, icon: "🏖️" },
        { name: "Cultural Tours", count: 32, icon: "🎭" },
        { name: "Luxury Escapes", count: 15, icon: "⭐" },
        { name: "Budget Travel", count: 29, icon: "💰" },
        { name: "Family Trips", count: 21, icon: "👨‍👩‍👧‍👦" }
      ]
    },
    trendingWidget: {
      title: "Trending Destinations",
      items: [
        {
          id: 1,
          title: "Bali Waterfalls Tour",
          image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=100&h=100&fit=crop",
          readTime: "3 min",
          location: "Indonesia"
        },
        {
          id: 2,
          title: "Santorini Sunset Guide",
          image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=100&h=100&fit=crop",
          readTime: "4 min",
          location: "Greece"
        },
        {
          id: 3,
          title: "Tokyo Food Experience",
          image: "https://images.unsplash.com/photo-1549693578-d683be217e58?w=100&h=100&fit=crop",
          readTime: "5 min",
          location: "Japan"
        }
      ]
    },
    toolsWidget: {
      title: "Travel Tools",
      items: [
        { name: "Currency", icon: "💱", action: "convert" },
        { name: "Weather", icon: "🌤️", action: "weather" },
        { name: "Checklist", icon: "✅", action: "checklist" },
        { name: "Visa Guide", icon: "📋", action: "visa" }
      ]
    },
    socialWidget: {
      title: "Follow Our Journey",
      icons: ["📘", "📷", "🐦", "📺"]
    }
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

  // Sticky sidebar effect - only for desktop
  useEffect(() => {
    if (isMobile) return;

    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsSticky(scrollTop > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

  const styles = {
    // Main sidebar container with BLACK background
    sidebarContainer: {
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
      minHeight: '80vh',
      padding: isMobile ? '15px 10px' : '40px 20px',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      overflowX: 'hidden'
    },

    // Main row container - FLEX DIRECTION ROW
    mainRowContainer: {
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      gap: isMobile ? '15px' : '20px',
      maxWidth: '1200px',
      margin: '0 auto',
      alignItems: 'flex-start'
    },

    // Left column - Main content
    leftColumn: {
      flex: isMobile ? '0 0 100%' : '0 0 70%',
      display: 'flex',
      flexDirection: 'column',
      gap: isMobile ? '15px' : '20px'
    },

    // Right column - Sidebar
    rightColumn: {
      flex: isMobile ? '0 0 100%' : '0 0 30%',
      display: 'flex',
      flexDirection: 'column',
      gap: isMobile ? '15px' : '20px',
      position: isSticky && !isMobile ? 'sticky' : 'relative',
      top: isSticky && !isMobile ? '80px' : '0'
    },

    // Widget cards with WHITE background
    widgetCard: {
      background: '#ffffff',
      borderRadius: isMobile ? '12px' : '16px',
      padding: isMobile ? '18px' : '24px',
      boxShadow: '0 4px 20px rgba(255, 255, 255, 0.1)',
      border: '1px solid #333333',
      transition: 'all 0.3s ease',
      animation: 'fadeInUp 0.6s ease-out'
    },

    widgetCardHover: {
      transform: isMobile ? 'translateY(-2px)' : 'translateY(-4px)',
      boxShadow: '0 8px 30px rgba(255, 255, 255, 0.15)',
      borderColor: '#ff6b35'
    },

    // Search widget
    searchContainer: {
      position: 'relative',
      marginBottom: isMobile ? '15px' : '20px',
      width: '100%',
      display: 'flex',
      justifyContent: 'center'
    },

    searchInput: {
      width: isMobile ? '100%' : '75%',
      padding: isMobile ? '14px 42px 14px 14px' : '16px 48px 16px 16px',
      marginLeft: isMobile ? '0' : '40px',
      border: '2px solid #333333',
      borderRadius: isMobile ? '10px' : '12px',
      fontSize: isMobile ? '13px' : '14px',
      background: '#ffffff',
      color: '#000000',
      transition: 'all 0.3s ease'
    },

    searchInputFocus: {
      borderColor: '#ff6b35',
      boxShadow: '0 0 0 3px rgba(255, 107, 53, 0.1)'
    },

    searchIcon: {
      position: 'absolute',
      right: isMobile ? '12px' : '12%',
      top: '50%',
      transform: 'translateY(-50%)',
      color: '#666666',
      fontSize: isMobile ? '16px' : '18px'
    },

    // Content grid in left column
    contentGrid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
      gap: isMobile ? '15px' : '20px'
    },

    // Newsletter widget
    newsletterCard: {
      background: '#ffffff',
      borderRadius: isMobile ? '12px' : '16px',
      padding: isMobile ? '18px' : '24px',
      position: 'relative',
      overflow: 'hidden',
      border: '1px solid #333333',
      gridColumn: isMobile ? '1' : '1 / -1'
    },

    newsletterTitle: {
      fontSize: isMobile ? '1.1rem' : '1.2rem',
      fontWeight: '700',
      marginBottom: isMobile ? '6px' : '8px',
      color: '#000000',
      textAlign: isMobile ? 'center' : 'left'
    },

    newsletterText: {
      fontSize: isMobile ? '13px' : '14px',
      color: '#666666',
      marginBottom: isMobile ? '15px' : '20px',
      lineHeight: '1.5',
      textAlign: isMobile ? 'center' : 'left'
    },

    newsletterInput: {
      width: '100%',
      padding: isMobile ? '12px 14px' : '14px 16px',
      border: '2px solid #333333',
      borderRadius: isMobile ? '8px' : '10px',
      fontSize: isMobile ? '13px' : '14px',
      background: '#ffffff',
      color: '#000000',
      marginBottom: isMobile ? '10px' : '12px',
      transition: 'all 0.3s ease'
    },

    newsletterInputFocus: {
      borderColor: '#ff6b35'
    },

    newsletterButton: {
      width: isMobile ? '100%' : '30%',
      marginLeft: isMobile ? '0' : '280px',
      padding: isMobile ? '12px 16px' : '14px 20px',
      background: '#000000',
      color: '#ffffff',
      border: 'none',
      borderRadius: isMobile ? '8px' : '10px',
      fontSize: isMobile ? '13px' : '14px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      minHeight: isMobile ? '44px' : 'auto'
    },

    newsletterButtonHover: {
      background: '#ff6b35',
      transform: 'translateY(-2px)',
      boxShadow: '0 6px 20px rgba(255, 107, 53, 0.4)'
    },

    newsletterNote: {
      fontSize: isMobile ? '11px' : '12px',
      color: '#888888',
      marginTop: isMobile ? '10px' : '12px',
      textAlign: 'center'
    },

    // Section titles
    sectionTitle: {
      fontSize: isMobile ? '1rem' : '1.1rem',
      fontWeight: '700',
      marginBottom: isMobile ? '12px' : '16px',
      color: '#000000',
      borderBottom: '2px solid #ff6b35',
      paddingBottom: isMobile ? '6px' : '8px'
    },

    // Category items
    categoryItem: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: isMobile ? '10px 0' : '12px 0',
      borderBottom: '1px solid #f0f0f0',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      position: 'relative'
    },

    categoryItemHover: {
      paddingLeft: isMobile ? '8px' : '12px',
      borderLeft: '3px solid #ff6b35',
      background: '#fff5f0'
    },

    categoryLeft: {
      display: 'flex',
      alignItems: 'center',
      gap: isMobile ? '8px' : '12px'
    },

    categoryIcon: {
      fontSize: isMobile ? '14px' : '16px'
    },

    categoryName: {
      fontSize: isMobile ? '13px' : '14px',
      fontWeight: '500',
      color: '#333333'
    },

    categoryCount: {
      fontSize: isMobile ? '11px' : '12px',
      color: '#666666',
      background: '#f8f8f8',
      padding: isMobile ? '3px 6px' : '4px 8px',
      borderRadius: '6px'
    },

    // Trending destinations
    trendingItem: {
      display: 'flex',
      alignItems: 'center',
      gap: isMobile ? '10px' : '12px',
      padding: isMobile ? '10px 0' : '12px 0',
      borderBottom: '1px solid #f0f0f0',
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    },

    trendingItemHover: {
      transform: isMobile ? 'translateX(2px)' : 'translateX(4px)',
      background: '#fff5f0'
    },

    trendingImage: {
      width: isMobile ? '45px' : '50px',
      height: isMobile ? '45px' : '50px',
      borderRadius: isMobile ? '6px' : '8px',
      objectFit: 'cover',
      transition: 'all 0.3s ease'
    },

    trendingImageHover: {
      transform: 'scale(1.1)'
    },

    trendingContent: {
      flex: 1
    },

    trendingTitle: {
      fontSize: isMobile ? '13px' : '14px',
      fontWeight: '600',
      color: '#000000',
      marginBottom: isMobile ? '3px' : '4px',
      lineHeight: '1.3'
    },

    trendingMeta: {
      display: 'flex',
      alignItems: 'center',
      gap: isMobile ? '8px' : '12px',
      fontSize: isMobile ? '11px' : '12px',
      color: '#666666',
      flexWrap: 'wrap'
    },

    metaItem: {
      display: 'flex',
      alignItems: 'center',
      gap: isMobile ? '2px' : '4px'
    },

    // Tools widget
    toolsGrid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(2, 1fr)',
      gap: isMobile ? '8px' : '10px'
    },

    toolItem: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: isMobile ? '10px 6px' : '12px 8px',
      background: '#f8f8f8',
      borderRadius: isMobile ? '6px' : '8px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      textAlign: 'center',
      minHeight: isMobile ? '60px' : 'auto'
    },

    toolItemHover: {
      background: '#ff6b35',
      transform: 'translateY(-2px)',
      color: '#ffffff'
    },

    toolIcon: {
      fontSize: isMobile ? '16px' : '18px',
      marginBottom: isMobile ? '4px' : '6px',
      transition: 'all 0.3s ease'
    },

    toolName: {
      fontSize: isMobile ? '10px' : '11px',
      fontWeight: '500',
      color: 'inherit'
    },

    // Social widget
    socialWidget: {
      textAlign: 'center',
      padding: isMobile ? '12px' : '16px'
    },

    socialTitle: {
      fontSize: isMobile ? '13px' : '14px',
      fontWeight: '600',
      color: '#666666',
      marginBottom: isMobile ? '10px' : '12px'
    },

    socialIcons: {
      display: 'flex',
      justifyContent: 'center',
      gap: isMobile ? '8px' : '10px'
    },

    socialIcon: {
      width: isMobile ? '32px' : '36px',
      height: isMobile ? '32px' : '36px',
      borderRadius: isMobile ? '6px' : '8px',
      background: '#f8f8f8',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      fontSize: isMobile ? '13px' : '14px',
      minHeight: '32px'
    },

    socialIconHover: {
      background: '#ff6b35',
      color: '#ffffff',
      transform: 'translateY(-2px)'
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
        transform: translateX(-20px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    .widget-card {
      animation: fadeInUp 0.6s ease-out;
    }

    /* Mobile optimizations */
    @media (max-width: 768px) {
      * {
        -webkit-tap-highlight-color: transparent;
      }
      
      button, .category-item, .trending-item, .tool-item, .social-icon {
        cursor: pointer;
        min-height: 44px;
      }
      
      input, button {
        font-size: 16px; /* Prevents zoom on iOS */
      }
    }

    /* Touch device optimizations */
    @media (hover: none) {
      .widget-card:hover,
      .category-item:hover,
      .trending-item:hover,
      .tool-item:hover,
      .social-icon:hover {
        transform: none !important;
      }
    }
  `;

  const [hoverStates, setHoverStates] = useState({
    search: false,
    newsletterButton: false,
    newsletterInput: false,
    categories: {},
    trending: {},
    tools: {},
    socialIcons: {}
  });

  const handleMouseEnter = (type, id = null) => {
    if (isMobile) return; // Disable hover effects on mobile
    
    setHoverStates(prev => ({
      ...prev,
      [type]: id ? { ...prev[type], [id]: true } : true
    }));
  };

  const handleMouseLeave = (type, id = null) => {
    if (isMobile) return; // Disable hover effects on mobile
    
    setHoverStates(prev => ({
      ...prev,
      [type]: id ? { ...prev[type], [id]: false } : false
    }));
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for subscribing!');
  };

  const handleToolClick = (toolName) => {
    console.log(`Tool clicked: ${toolName}`);
  };

  return (
    <div style={styles.sidebarContainer}>
      <style>{animationStyles}</style>
      
      {/* SEARCH BAR - TOP ROW */}
      <div style={styles.searchContainer}>
        <input
          type="text"
          placeholder={sidebarData.searchWidget.placeholder}
          style={{
            ...styles.searchInput,
            ...(hoverStates.search && styles.searchInputFocus)
          }}
          onFocus={() => handleMouseEnter('search')}
          onBlur={() => handleMouseLeave('search')}
          onChange={handleSearch}
          value={searchQuery}
        />
        <span style={styles.searchIcon}>🔍</span>
      </div>

      {/* MAIN CONTENT ROW - FLEX DIRECTION ROW */}
      <div style={styles.mainRowContainer}>
        
        {/* LEFT COLUMN - 70% width */}
        <div style={styles.leftColumn}>
          
          {/* NEWSLETTER - Top of left column */}
          <div 
            className="widget-card"
            style={styles.newsletterCard}
          >
            <h3 style={styles.newsletterTitle}>{sidebarData.newsletterWidget.title}</h3>
            <p style={styles.newsletterText}>{sidebarData.newsletterWidget.description}</p>
            <form onSubmit={handleNewsletterSubmit}>
              <input
                type="email"
                placeholder="Enter your email"
                style={{
                  ...styles.newsletterInput,
                  ...(hoverStates.newsletterInput && styles.newsletterInputFocus)
                }}
                onFocus={() => handleMouseEnter('newsletterInput')}
                onBlur={() => handleMouseLeave('newsletterInput')}
                required
              />
              <button
                type="submit"
                style={{
                  ...styles.newsletterButton,
                  ...(hoverStates.newsletterButton && styles.newsletterButtonHover)
                }}
                onMouseEnter={() => handleMouseEnter('newsletterButton')}
                onMouseLeave={() => handleMouseLeave('newsletterButton')}
              >
                {sidebarData.newsletterWidget.buttonText}
              </button>
            </form>
            <p style={styles.newsletterNote}>{sidebarData.newsletterWidget.note}</p>
          </div>

          {/* CONTENT GRID - Categories and Trending in grid */}
          <div style={styles.contentGrid}>
            
            {/* CATEGORIES WIDGET */}
            <div 
              className="widget-card"
              style={styles.widgetCard}
            >
              <h3 style={styles.sectionTitle}>{sidebarData.categoriesWidget.title}</h3>
              {sidebarData.categoriesWidget.items.map((category, index) => (
                <div
                  key={category.name}
                  className="category-item"
                  style={{
                    ...styles.categoryItem,
                    ...(hoverStates.categories[index] && styles.categoryItemHover)
                  }}
                  onMouseEnter={() => handleMouseEnter('categories', index)}
                  onMouseLeave={() => handleMouseLeave('categories', index)}
                  onClick={() => console.log(`Category clicked: ${category.name}`)}
                >
                  <div style={styles.categoryLeft}>
                    <span style={styles.categoryIcon}>{category.icon}</span>
                    <span style={styles.categoryName}>{category.name}</span>
                  </div>
                  <span style={styles.categoryCount}>{category.count}</span>
                </div>
              ))}
            </div>

            {/* TRENDING DESTINATIONS WIDGET */}
            <div 
              className="widget-card"
              style={styles.widgetCard}
            >
              <h3 style={styles.sectionTitle}>{sidebarData.trendingWidget.title}</h3>
              {sidebarData.trendingWidget.items.map((item, index) => (
                <div
                  key={item.id}
                  className="trending-item"
                  style={{
                    ...styles.trendingItem,
                    ...(hoverStates.trending[item.id] && styles.trendingItemHover)
                  }}
                  onMouseEnter={() => handleMouseEnter('trending', item.id)}
                  onMouseLeave={() => handleMouseLeave('trending', item.id)}
                  onClick={() => console.log(`Trending clicked: ${item.title}`)}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      ...styles.trendingImage,
                      ...(hoverStates.trending[item.id] && styles.trendingImageHover)
                    }}
                  />
                  <div style={styles.trendingContent}>
                    <h4 style={styles.trendingTitle}>{item.title}</h4>
                    <div style={styles.trendingMeta}>
                      <span style={styles.metaItem}>⏱️ {item.readTime}</span>
                      <span style={styles.metaItem}>📍 {item.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* RIGHT COLUMN - 30% width - Sidebar widgets */}
        <div style={styles.rightColumn}>
          
          {/* TRAVEL TOOLS WIDGET */}
          <div 
            className="widget-card"
            style={styles.widgetCard}
          >
            <h3 style={styles.sectionTitle}>{sidebarData.toolsWidget.title}</h3>
            <div style={styles.toolsGrid}>
              {sidebarData.toolsWidget.items.map((tool, index) => (
                <div
                  key={tool.name}
                  className="tool-item"
                  style={{
                    ...styles.toolItem,
                    ...(hoverStates.tools[index] && styles.toolItemHover)
                  }}
                  onMouseEnter={() => handleMouseEnter('tools', index)}
                  onMouseLeave={() => handleMouseLeave('tools', index)}
                  onClick={() => handleToolClick(tool.name)}
                >
                  <span style={styles.toolIcon}>{tool.icon}</span>
                  <span style={styles.toolName}>{tool.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* SOCIAL WIDGET */}
          <div 
            className="widget-card"
            style={styles.widgetCard}
          >
            <div style={styles.socialWidget}>
              <h4 style={styles.socialTitle}>{sidebarData.socialWidget.title}</h4>
              <div style={styles.socialIcons}>
                {sidebarData.socialWidget.icons.map((icon, index) => (
                  <div
                    key={index}
                    className="social-icon"
                    style={{
                      ...styles.socialIcon,
                      ...(hoverStates.socialIcons[index] && styles.socialIconHover)
                    }}
                    onMouseEnter={() => handleMouseEnter('socialIcons', index)}
                    onMouseLeave={() => handleMouseLeave('socialIcons', index)}
                  >
                    {icon}
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BlogSidebar;