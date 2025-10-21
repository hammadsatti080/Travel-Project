import React, { useState, useEffect } from 'react';

export default function PopularPlaces() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const categories = [
    { id: 'all', name: 'All', icon: '🌍' },
    { id: 'beach', name: 'Beach', icon: '🏖️' },
    { id: 'mountain', name: 'Mountain', icon: '🏔️' },
    { id: 'city', name: 'City', icon: '🏙️' },
    { id: 'cultural', name: 'Cultural', icon: '🏛️' },
    { id: 'adventure', name: 'Adventure', icon: '🚵' }
  ];

  const destinations = [
    {
      id: 1,
      name: "Bali",
      country: "Indonesia",
      countryLink: "https://www.google.com/maps/place/Bali",
      category: "beach",
      price: "$899",
      rating: 4.8,
      reviews: "2.4K",
      image: "/Homescreen/Countries/Indonasia.jpg",
      description: "Tropical paradise with stunning beaches",
      highlights: ["Beaches", "Temples", "Rice Fields"],
      bestTime: "Apr-Oct",
      travelers: "1.2M+",
      trending: true,
      discount: "25% OFF"
    },
    {
      id: 2,
      name: "Swiss Alps",
      country: "Switzerland", 
      countryLink: "https://www.google.com/maps/place/Swiss+Alps",
      category: "mountain",
      price: "$1,299",
      rating: 4.9,
      reviews: "1.8K",
      image: "/Homescreen/Countries/Swizerland.jpg",
      description: "Majestic mountains and alpine villages",
      highlights: ["Skiing", "Hiking", "Views"],
      bestTime: "Dec-Mar",
      travelers: "890K+",
      trending: true
    },
    {
      id: 3,
      name: "Tokyo",
      country: "Japan",
      countryLink: "https://www.google.com/maps/place/Tokyo",
      category: "city",
      price: "$1,099",
      rating: 4.7,
      reviews: "3.1K",
      image: "/Homescreen/Countries/Tokyo.jpg",
      description: "Futuristic city with rich culture",
      highlights: ["Shibuya", "Temples", "Anime"],
      bestTime: "Mar-May", 
      travelers: "2.1M+",
      popular: true
    },
    {
      id: 4,
      name: "Santorini",
      country: "Greece",
      countryLink: "https://www.google.com/maps/place/Santorini",
      category: "beach", 
      price: "$1,199",
      rating: 4.8,
      reviews: "1.9K",
      image: "/Homescreen/Countries/Greece.jpg",
      description: "White buildings with sunset views",
      highlights: ["Oia", "Wine", "Beaches"],
      bestTime: "Jun-Sep",
      travelers: "950K+"
    },
    {
      id: 5,
      name: "Machu Picchu",
      country: "Peru",
      countryLink: "https://www.google.com/maps/place/Machu+Picchu",
      category: "cultural",
      price: "$799",
      rating: 4.6,
      reviews: "1.2K",
      image: "/Homescreen/Countries/Paris.jpg",
      description: "Ancient Incan citadel in mountains",
      highlights: ["Ruins", "Hiking", "History"],
      bestTime: "May-Sep",
      travelers: "680K+"
    },
    {
      id: 6,
      name: "Queenstown",
      country: "New Zealand",
      countryLink: "https://www.google.com/maps/place/Queenstown",
      category: "adventure",
      price: "$1,499", 
      rating: 4.9,
      reviews: "1.5K",
      image: "/Homescreen/Countries/ANZ.jpg",
      description: "Adventure capital with landscapes",
      highlights: ["Bungee", "Fiords", "Sports"],
      bestTime: "Dec-Feb",
      travelers: "720K+",
      discount: "15% OFF"
    }
  ];

  const filteredDestinations = activeCategory === 'all' 
    ? destinations 
    : destinations.filter(dest => dest.category === activeCategory);

  const handleCountryClick = (url) => {
    window.open(url, '_blank');
  };

  // CSS Animations
  const styleTag = `
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    .card-image {
      transition: transform 0.3s ease;
    }
    
    .card:hover .card-image {
      transform: scale(1.05);
    }
    
    @media (max-width: 767px) {
      .mobile-hidden {
        display: none;
      }
      
      .mobile-full {
        width: 100%;
      }
      
      .mobile-text-center {
        text-align: center;
      }
    }
  `;

  // Responsive Styles
  const containerStyle = {
    background: '#000000',
    minHeight: '100vh',
    color: 'white',
    fontFamily: "'Inter', sans-serif",
    padding: isMobile ? '1rem 0.5rem' : '2rem 1rem',
    position: 'relative'
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: isMobile ? '1.5rem' : '2rem',
    padding: isMobile ? '0 0.5rem' : '0'
  };

  const titleStyle = {
    fontSize: isMobile ? '1.8rem' : '2.5rem',
    fontWeight: '700',
    background: 'linear-gradient(45deg, #667eea, #764ba2)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    color: 'transparent',
    marginBottom: '0.5rem'
  };

  const subtitleStyle = {
    fontSize: isMobile ? '0.9rem' : '1.1rem',
    color: '#cccccc',
    maxWidth: isMobile ? '100%' : '500px',
    margin: '0 auto',
    lineHeight: '1.5',
    padding: isMobile ? '0 1rem' : '0'
  };

  const categoriesStyle = {
    display: 'flex',
    justifyContent: isMobile ? 'flex-start' : 'center',
    flexWrap: 'wrap',
    gap: isMobile ? '0.5rem' : '0.8rem',
    marginBottom: isMobile ? '1.5rem' : '2.5rem',
    padding: isMobile ? '0 0.5rem' : '0',
    overflowX: isMobile ? 'auto' : 'visible',
    ...(isMobile && {
      scrollbarWidth: 'none',
      msOverflowStyle: 'none'
    })
  };

  const categoryButtonStyle = (isActive) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '0.4rem',
    padding: isMobile ? '0.5rem 1rem' : '0.7rem 1.5rem',
    borderRadius: '25px',
    border: 'none',
    background: isActive ? '#667eea' : '#1a1a1a',
    color: isActive ? '#ffffff' : '#cccccc',
    fontSize: isMobile ? '0.8rem' : '0.85rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    border: isActive ? 'none' : '1px solid #333333',
    flexShrink: 0,
    whiteSpace: 'nowrap'
  });

  // Responsive Grid
  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: isMobile ? '1rem' : '1.5rem',
    maxWidth: '1400px',
    margin: '0 auto',
    padding: isMobile ? '0 0.5rem' : '0'
  };

  // Responsive Card Design
  const cardStyle = (isHovered) => ({
    background: '#0a0a0a',
    borderRadius: isMobile ? '12px' : '16px',
    padding: '0',
    border: '1px solid #222222',
    transition: isMobile ? 'none' : 'all 0.3s ease',
    transform: isMobile ? 'none' : (isHovered ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)'),
    position: 'relative',
    overflow: 'hidden',
    cursor: 'pointer',
    animation: 'fadeIn 0.6s ease-out'
  });

  // Updated Card Image Style for Real Images
  const cardImageStyle = {
    height: isMobile ? '160px' : '200px',
    background: 'linear-gradient(135deg, #1a1a1a, #2a2a2a)',
    position: 'relative',
    overflow: 'hidden'
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.3s ease'
  };

  const imageOverlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.5))'
  };

  const badgeContainerStyle = {
    position: 'absolute',
    top: isMobile ? '0.6rem' : '0.8rem',
    left: isMobile ? '0.6rem' : '0.8rem',
    display: 'flex',
    gap: isMobile ? '0.3rem' : '0.4rem',
    flexWrap: 'wrap',
    zIndex: 2
  };

  const badgeStyle = (type) => ({
    padding: isMobile ? '0.2rem 0.6rem' : '0.3rem 0.8rem',
    borderRadius: isMobile ? '8px' : '12px',
    fontSize: isMobile ? '0.6rem' : '0.7rem',
    fontWeight: '700',
    background: type === 'trending' 
      ? 'linear-gradient(45deg, #ff6b6b, #ee5a24)'
      : 'linear-gradient(45deg, #667eea, #764ba2)',
    color: 'white',
    backdropFilter: 'blur(10px)'
  });

  const discountBadgeStyle = {
    position: 'absolute',
    top: isMobile ? '0.6rem' : '0.8rem',
    right: isMobile ? '0.6rem' : '0.8rem',
    background: 'linear-gradient(45deg, #ffd93d, #ff9a3d)',
    color: '#000000',
    padding: isMobile ? '0.2rem 0.6rem' : '0.3rem 0.8rem',
    borderRadius: isMobile ? '8px' : '12px',
    fontSize: isMobile ? '0.65rem' : '0.75rem',
    fontWeight: '700',
    zIndex: 2,
    backdropFilter: 'blur(10px)'
  };

  const cardContentStyle = {
    padding: isMobile ? '1rem' : '1.5rem'
  };

  const locationHeaderStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: isMobile ? '0.8rem' : '1rem',
    gap: isMobile ? '0.5rem' : '0'
  };

  const locationInfoStyle = {
    flex: 1
  };

  const locationNameStyle = {
    fontSize: isMobile ? '1.1rem' : '1.3rem',
    fontWeight: '700',
    marginBottom: '0.3rem',
    color: '#ffffff'
  };

  const countryLinkStyle = {
    color: '#667eea',
    fontSize: isMobile ? '0.75rem' : '0.9rem',
    fontWeight: '600',
    textDecoration: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    display: 'inline-block'
  };

  const priceStyle = {
    fontSize: isMobile ? '1.2rem' : '1.4rem',
    fontWeight: '700',
    color: '#667eea',
    textAlign: 'right',
    flexShrink: 0
  };

  const ratingStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: isMobile ? '0.3rem' : '0.5rem',
    marginBottom: isMobile ? '0.8rem' : '1rem',
    flexWrap: 'wrap'
  };

  const starsStyle = {
    color: '#ffd700',
    fontSize: isMobile ? '0.9rem' : '1rem'
  };

  const reviewsStyle = {
    color: '#888888',
    fontSize: isMobile ? '0.7rem' : '0.8rem'
  };

  const descriptionStyle = {
    color: '#aaaaaa',
    fontSize: isMobile ? '0.8rem' : '0.9rem',
    lineHeight: '1.5',
    marginBottom: isMobile ? '0.8rem' : '1rem'
  };

  const highlightsStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: isMobile ? '0.3rem' : '0.5rem',
    marginBottom: isMobile ? '1rem' : '1.2rem'
  };

  const highlightStyle = {
    background: '#1a1a1a',
    padding: isMobile ? '0.3rem 0.6rem' : '0.4rem 0.8rem',
    borderRadius: isMobile ? '8px' : '12px',
    fontSize: isMobile ? '0.65rem' : '0.75rem',
    color: '#cccccc',
    border: '1px solid #333333',
    fontWeight: '500'
  };

  const metaInfoStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: isMobile ? '0.8rem 0' : '1rem 0',
    borderTop: '1px solid #222222',
    marginBottom: isMobile ? '0.8rem' : '1rem',
    gap: isMobile ? '0.5rem' : '0'
  };

  const metaItemStyle = {
    textAlign: 'center',
    flex: 1
  };

  const metaLabelStyle = {
    fontSize: isMobile ? '0.6rem' : '0.7rem',
    color: '#888888',
    marginBottom: '0.2rem',
    fontWeight: '600'
  };

  const metaValueStyle = {
    fontSize: isMobile ? '0.75rem' : '0.85rem',
    fontWeight: '700',
    color: '#ffffff'
  };

  const exploreButtonStyle = {
    width: '100%',
    padding: isMobile ? '0.7rem' : '0.8rem',
    borderRadius: isMobile ? '8px' : '12px',
    border: 'none',
    background: 'linear-gradient(45deg, #667eea, #764ba2)',
    color: 'white',
    fontSize: isMobile ? '0.85rem' : '0.9rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  };

  const statsStyle = {
    display: 'grid',
    gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
    gap: isMobile ? '1rem' : '3rem',
    marginTop: isMobile ? '2rem' : '4rem',
    padding: isMobile ? '1rem' : '2rem',
    background: 'rgba(255, 255, 255, 0.05)',
    borderRadius: isMobile ? '12px' : '20px',
    maxWidth: isMobile ? '100%' : '800px',
    margin: isMobile ? '2rem 0.5rem 0' : '4rem auto 0'
  };

  const statItemStyle = {
    textAlign: 'center'
  };

  const statNumberStyle = {
    fontSize: isMobile ? '1.5rem' : '2.2rem',
    fontWeight: '800',
    background: 'linear-gradient(45deg, #667eea, #764ba2)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    color: 'transparent',
    marginBottom: '0.3rem'
  };

  const statLabelStyle = {
    color: '#888888',
    fontSize: isMobile ? '0.7rem' : '0.9rem',
    fontWeight: '600'
  };

  // Fallback image handler
  const handleImageError = (e) => {
    e.target.style.display = 'none';
    const fallbackDiv = e.target.parentNode;
    fallbackDiv.style.background = 'linear-gradient(135deg, #667eea, #764ba2)';
    fallbackDiv.style.display = 'flex';
    fallbackDiv.style.alignItems = 'center';
    fallbackDiv.style.justifyContent = 'center';
    fallbackDiv.style.color = 'white';
    fallbackDiv.style.fontSize = isMobile ? '2rem' : '3rem';
    fallbackDiv.innerHTML = '🏝️';
  };

  return (
    <div style={containerStyle}>
      <style>{styleTag}</style>
      
      {/* Header */}
      <div style={headerStyle}>
        <h1 style={titleStyle}>Discover Amazing Places</h1>
        <p style={subtitleStyle}>
          {isMobile 
            ? "Explore handpicked destinations loved by travelers" 
            : "Explore handpicked destinations that travelers love worldwide"
          }
        </p>
      </div>

      {/* Categories - Horizontal scroll on mobile */}
      <div style={categoriesStyle}>
        {categories.map(category => (
          <button
            key={category.id}
            style={categoryButtonStyle(activeCategory === category.id)}
            onClick={() => setActiveCategory(category.id)}
          >
            <span>{category.icon}</span>
            <span>{isMobile ? category.name : category.name}</span>
          </button>
        ))}
      </div>

      {/* Destinations Grid - Single column on mobile */}
      <div style={gridStyle}>
        {filteredDestinations.map((destination) => (
          <div
            key={destination.id}
            style={cardStyle(hoveredCard === destination.id)}
            onMouseEnter={() => !isMobile && setHoveredCard(destination.id)}
            onMouseLeave={() => !isMobile && setHoveredCard(null)}
            onClick={() => handleCountryClick(destination.countryLink)}
          >
            {/* Card Image with Real Image */}
            <div style={cardImageStyle}>
              <img 
                src={destination.image} 
                alt={destination.name}
                style={imageStyle}
                onError={handleImageError}
                className="card-image"
              />
              <div style={imageOverlayStyle}></div>
              
              {/* Badges */}
              <div style={badgeContainerStyle}>
                {destination.trending && (
                  <div style={badgeStyle('trending')}>
                    {isMobile ? '🔥' : '🔥 TRENDING'}
                  </div>
                )}
                {destination.popular && (
                  <div style={badgeStyle('popular')}>
                    {isMobile ? '⭐' : '⭐ POPULAR'}
                  </div>
                )}
              </div>

              {/* Discount Badge */}
              {destination.discount && (
                <div style={discountBadgeStyle}>
                  {isMobile ? destination.discount.split(' ')[0] : destination.discount}
                </div>
              )}
            </div>

            {/* Card Content */}
            <div style={cardContentStyle}>
              {/* Location and Price */}
              <div style={locationHeaderStyle}>
                <div style={locationInfoStyle}>
                  <h3 style={locationNameStyle}>{destination.name}</h3>
                  <a
                    style={countryLinkStyle}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCountryClick(destination.countryLink);
                    }}
                  >
                    {destination.country} ↗
                  </a>
                </div>
                <div style={priceStyle}>{destination.price}</div>
              </div>

              {/* Rating */}
              <div style={ratingStyle}>
                <div style={starsStyle}>
                  {'★'.repeat(Math.floor(destination.rating))}
                  {'☆'.repeat(5 - Math.floor(destination.rating))}
                </div>
                <span style={reviewsStyle}>({destination.reviews})</span>
              </div>

              {/* Description */}
              <p style={descriptionStyle}>{destination.description}</p>

              {/* Highlights */}
              <div style={highlightsStyle}>
                {destination.highlights.slice(0, isMobile ? 2 : 3).map((highlight, index) => (
                  <span key={index} style={highlightStyle}>
                    {highlight}
                  </span>
                ))}
              </div>

              {/* Meta Information */}
              <div style={metaInfoStyle}>
                <div style={metaItemStyle}>
                  <div style={metaLabelStyle}>BEST TIME</div>
                  <div style={metaValueStyle}>{destination.bestTime}</div>
                </div>
                <div style={metaItemStyle}>
                  <div style={metaLabelStyle}>TRAVELERS</div>
                  <div style={metaValueStyle}>{destination.travelers}</div>
                </div>
                {!isMobile && (
                  <div style={metaItemStyle}>
                    <div style={metaLabelStyle}>RATING</div>
                    <div style={metaValueStyle}>{destination.rating}/5</div>
                  </div>
                )}
              </div>

              {/* Explore Button */}
              <button 
                style={exploreButtonStyle}
                onClick={(e) => {
                  e.stopPropagation();
                  handleCountryClick(destination.countryLink);
                }}
                onMouseEnter={(e) => {
                  if (!isMobile) {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 8px 25px rgba(102, 126, 234, 0.4)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isMobile) {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = 'none';
                  }
                }}
              >
                {isMobile ? '🗺️ Explore' : '🗺️ Explore Destination'}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Statistics - 2x2 grid on mobile */}
      <div style={statsStyle}>
        <div style={statItemStyle}>
          <div style={statNumberStyle}>60+</div>
          <div style={statLabelStyle}>Countries</div>
        </div>
        <div style={statItemStyle}>
          <div style={statNumberStyle}>3M+</div>
          <div style={statLabelStyle}>Travelers</div>
        </div>
        <div style={statItemStyle}>
          <div style={statNumberStyle}>4.9★</div>
          <div style={statLabelStyle}>Rating</div>
        </div>
        <div style={statItemStyle}>
          <div style={statNumberStyle}>24/7</div>
          <div style={statLabelStyle}>Support</div>
        </div>
      </div>
    </div>
  );
}