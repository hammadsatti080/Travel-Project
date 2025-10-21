import React, { useState, useEffect } from 'react';

export default function CountriesCulture() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const [isSearchActive, setIsSearchActive] = useState(false);

  const countries = [
    {
      id: 1,
      name: "Japan",
      flag: "🇯🇵",
      image: "https://images.unsplash.com/photo-1540959733332-abc0499434c1?w=400&h=250&fit=crop",
      summary: "Ancient traditions meet cutting-edge technology.",
      cultureLink: "https://www.japan.travel/en/culture/"
    },
    {
      id: 2,
      name: "India",
      flag: "🇮🇳",
      image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=400&h=250&fit=crop",
      summary: "Diverse festivals and rich culinary heritage.",
      cultureLink: "https://www.incredibleindia.org/content/incredibleindia/en/culture.html"
    },
    {
      id: 3,
      name: "Italy",
      flag: "🇮🇹",
      image: "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=400&h=250&fit=crop",
      summary: "Artistic legacy and world-famous cuisine.",
      cultureLink: "https://www.italia.it/en/culture"
    },
    {
      id: 4,
      name: "Brazil",
      flag: "🇧🇷",
      image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=400&h=250&fit=crop",
      summary: "Vibrant carnival and Amazonian diversity.",
      cultureLink: "https://www.visitbrasil.com/en/culture/"
    },
    {
      id: 5,
      name: "Mexico",
      flag: "🇲🇽",
      image: "https://images.unsplash.com/photo-1518639192441-8fce0a366e2e?w=400&h=250&fit=crop",
      summary: "Colorful traditions and ancient heritage.",
      cultureLink: "https://www.visitmexico.com/en/culture"
    },
    {
      id: 6,
      name: "Egypt",
      flag: "🇪🇬",
      image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=400&h=250&fit=crop",
      summary: "Pharaohs and timeless archaeological wonders.",
      cultureLink: "https://www.egypt.travel/culture"
    },
    {
      id: 7,
      name: "France",
      flag: "🇫🇷",
      image: "https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=400&h=250&fit=crop",
      summary: "Romantic art, fashion, and gourmet cuisine.",
      cultureLink: "https://www.france.fr/en/culture"
    },
    {
      id: 8,
      name: "Thailand",
      flag: "🇹🇭",
      image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=400&h=250&fit=crop",
      summary: "Golden temples and flavorful street food.",
      cultureLink: "https://www.tourismthailand.org/Culture"
    },
    {
      id: 9,
      name: "Spain",
      flag: "🇪🇸",
      image: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=400&h=250&fit=crop",
      summary: "Flamenco, fiestas, and architectural marvels.",
      cultureLink: "https://www.spain.info/en/culture/"
    },
    {
      id: 10,
      name: "Greece",
      flag: "🇬🇷",
      image: "https://images.unsplash.com/photo-1536152470836-b943b246224c?w=400&h=250&fit=crop",
      summary: "Mythological history and Mediterranean charm.",
      cultureLink: "https://www.visitgreece.gr/culture/"
    },
    {
      id: 11,
      name: "China",
      flag: "🇨🇳",
      image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=400&h=250&fit=crop",
      summary: "Ancient civilization and modern innovation.",
      cultureLink: "https://www.cultural-china.com/"
    },
    {
      id: 12,
      name: "Turkey",
      flag: "🇹🇷",
      image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=400&h=250&fit=crop",
      summary: "Where East meets West in harmony.",
      cultureLink: "https://goturkiye.com/culture"
    },
    {
      id: 13,
      name: "Morocco",
      flag: "🇲🇦",
      image: "https://images.unsplash.com/photo-1543349689-9a4d426bee8e?w=400&h=250&fit=crop",
      summary: "Magical markets and desert adventures.",
      cultureLink: "https://www.visitmorocco.com/en/culture"
    },
    {
      id: 14,
      name: "Peru",
      flag: "🇵🇪",
      image: "https://images.unsplash.com/photo-1571771019784-3ff35f4f4277?w=400&h=250&fit=crop",
      summary: "Inca heritage and Andean traditions.",
      cultureLink: "https://www.peru.travel/culture"
    },
    {
      id: 15,
      name: "South Korea",
      flag: "🇰🇷",
      image: "https://images.unsplash.com/photo-1534274867514-d5b47ef89ed1?w=400&h=250&fit=crop",
      summary: "K-pop, kimchi, and technological innovation.",
      cultureLink: "https://english.visitkorea.or.kr/enu/CU/CU_EN_8_1_1.jsp"
    }
  ];

  // Filter countries based on search
  const filteredCountries = countries.filter(country =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    country.summary.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const cardsPerPage = 6;
  const totalPages = Math.ceil(filteredCountries.length / cardsPerPage);
  const startIndex = currentPage * cardsPerPage;
  const currentCountries = filteredCountries.slice(startIndex, startIndex + cardsPerPage);

  const handleCardClick = (cultureLink) => {
    window.open(cultureLink, '_blank', 'noopener,noreferrer');
  };

  // Reset to first page when search changes
  useEffect(() => {
    setCurrentPage(0);
  }, [searchTerm]);

  // Responsive Styles
  const containerStyle = {
    padding: 'clamp(1rem, 5vw, 2rem) clamp(0.5rem, 3vw, 1rem)',
    minHeight: '100vh',
    fontFamily: "'Poppins', sans-serif",
    position: 'relative',
  
  };

  const contentStyle = {
    position: 'relative',
    zIndex: 1
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: 'clamp(1.5rem, 6vw, 3rem)'
  };

  const titleStyle = {
    fontSize: 'clamp(2rem, 8vw, 3.5rem)',
    fontWeight: '700',
    marginBottom: 'clamp(0.5rem, 3vw, 1rem)',
    color: 'white',
    textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)',
    lineHeight: '1.2',
    padding: '0 clamp(0.5rem, 3vw, 1rem)'
  };

  const subtitleStyle = {
    fontSize: 'clamp(1rem, 4vw, 1.3rem)',
    color: 'rgba(255, 255, 255, 0.9)',
    marginBottom: 'clamp(1rem, 4vw, 2rem)',
    textShadow: '1px 1px 4px rgba(0, 0, 0, 0.5)',
    lineHeight: '1.4',
    padding: '0 clamp(1rem, 5vw, 2rem)'
  };

  const searchContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 'clamp(1.5rem, 5vw, 2rem)',
    padding: '0 clamp(0.5rem, 3vw, 1rem)'
  };

  const searchStyle = {
    padding: 'clamp(12px, 3vw, 15px) clamp(20px, 4vw, 25px)',
    fontSize: 'clamp(0.9rem, 3vw, 1.1rem)',
    border: `2px solid ${isSearchActive ? '#667eea' : 'rgba(255, 255, 255, 0.3)'}`,
    borderRadius: '25px',
    width: '100%',
    maxWidth: 'min(500px, 90vw)',
    outline: 'none',
    transition: 'all 0.3s ease',
    boxShadow: isSearchActive ? '0 0 0 3px rgba(102, 126, 234, 0.3)' : '0 4px 15px rgba(0, 0, 0, 0.2)',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(10px)'
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))',
    gap: 'clamp(1rem, 4vw, 2rem)',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 clamp(0.5rem, 3vw, 1rem)'
  };

  const cardStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: 'clamp(15px, 4vw, 20px)',
    overflow: 'hidden',
    boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    textDecoration: 'none',
    color: 'inherit',
    display: 'block',
    height: '100%',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.2)'
  };

  const imageStyle = {
    width: '100%',
    height: 'clamp(180px, 40vw, 220px)',
    objectFit: 'cover',
    display: 'block'
  };

  const cardContentStyle = {
    padding: 'clamp(1rem, 4vw, 1.8rem)'
  };

  const flagStyle = {
    fontSize: 'clamp(1.8rem, 6vw, 2.2rem)',
    marginBottom: 'clamp(0.5rem, 3vw, 1rem)'
  };

  const nameStyle = {
    fontSize: 'clamp(1.2rem, 5vw, 1.5rem)',
    fontWeight: '600',
    marginBottom: 'clamp(0.5rem, 3vw, 1rem)',
    color: '#2c3e50',
    lineHeight: '1.3'
  };

  const summaryStyle = {
    fontSize: 'clamp(0.85rem, 3vw, 1rem)',
    color: '#7f8c8d',
    lineHeight: '1.5',
    margin: 0
  };

  const paginationStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 'clamp(1rem, 3vw, 1.5rem)',
    marginTop: 'clamp(2rem, 6vw, 3rem)',
    flexWrap: 'wrap',
    padding: '0 clamp(0.5rem, 3vw, 1rem)'
  };

  const buttonStyle = {
    padding: 'clamp(10px, 3vw, 14px) clamp(20px, 4vw, 28px)',
    backgroundColor: 'rgba(102, 126, 234, 0.9)',
    color: 'white',
    border: 'none',
    borderRadius: '25px',
    cursor: 'pointer',
    fontSize: 'clamp(0.9rem, 3vw, 1.1rem)',
    fontWeight: '500',
    transition: 'all 0.3s ease',
    minWidth: 'clamp(100px, 20vw, 120px)',
    backdropFilter: 'blur(10px)',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)'
  };

  const pageInfoStyle = {
    fontSize: 'clamp(1rem, 3vw, 1.2rem)',
    color: 'white',
    fontWeight: '500',
    padding: '0 clamp(0.5rem, 2vw, 1rem)',
    textShadow: '1px 1px 4px rgba(0, 0, 0, 0.5)',
    textAlign: 'center'
  };

  const noResultsStyle = {
    textAlign: 'center',
    padding: 'clamp(2rem, 8vw, 4rem) clamp(1rem, 4vw, 2rem)',
    color: 'white',
    fontSize: 'clamp(1.1rem, 4vw, 1.3rem)',
    textShadow: '1px 1px 4px rgba(0, 0, 0, 0.5)'
  };

  return (
    <div style={containerStyle}>
      {/* Content */}
      <div style={contentStyle}>
        {/* Header Section */}
        <div style={headerStyle}>
          <h1 style={titleStyle}>Explore World Cultures</h1>
          <p style={subtitleStyle}>
            Discover the rich cultural heritage of countries around the world
          </p>
        </div>

        {/* Search Bar */}
        <div style={searchContainerStyle}>
          <input
            type="text"
            placeholder="🔍 Search countries or cultures..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={() => setIsSearchActive(true)}
            onBlur={() => setIsSearchActive(false)}
            style={searchStyle}
          />
        </div>

        {/* Countries Grid */}
        {filteredCountries.length > 0 ? (
          <>
            <div style={gridStyle}>
              {currentCountries.map((country) => (
                <div
                  key={country.id}
                  style={cardStyle}
                  onClick={() => handleCardClick(country.cultureLink)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.2)';
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
                  }}
                >
                  <img 
                    src={country.image} 
                    alt={country.name}
                    style={imageStyle}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  {/* Fallback with colored background */}
                  <div style={{
                    width: '100%',
                    height: 'clamp(180px, 40vw, 220px)',
                    backgroundColor: `hsl(${country.id * 12}, 70%, 85%)`,
                    display: 'none',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 'clamp(2.5rem, 8vw, 3.5rem)',
                    fontWeight: 'bold'
                  }}>
                    {country.flag}
                  </div>
                  
                  <div style={cardContentStyle}>
                    <div style={flagStyle}>{country.flag}</div>
                    <h3 style={nameStyle}>{country.name}</h3>
                    <p style={summaryStyle}>{country.summary}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div style={paginationStyle}>
                <button
                  style={{
                    ...buttonStyle,
                    backgroundColor: currentPage === 0 ? 'rgba(204, 204, 204, 0.7)' : 'rgba(102, 126, 234, 0.9)',
                    cursor: currentPage === 0 ? 'not-allowed' : 'pointer'
                  }}
                  onClick={() => setCurrentPage(prev => Math.max(0, prev - 1))}
                  disabled={currentPage === 0}
                >
                  Previous
                </button>
                
                <span style={pageInfoStyle}>
                  Page {currentPage + 1} of {totalPages}
                </span>
                
                <button
                  style={{
                    ...buttonStyle,
                    backgroundColor: currentPage === totalPages - 1 ? 'rgba(204, 204, 204, 0.7)' : 'rgba(102, 126, 234, 0.9)',
                    cursor: currentPage === totalPages - 1 ? 'not-allowed' : 'pointer'
                  }}
                  onClick={() => setCurrentPage(prev => Math.min(totalPages - 1, prev + 1))}
                  disabled={currentPage === totalPages - 1}
                >
                  Next
                </button>
              </div>
            )}
          </>
        ) : (
          <div style={noResultsStyle}>
            <h3>No countries found matching "{searchTerm}"</h3>
            <p>Try searching with different keywords</p>
          </div>
        )}
      </div>

      {/* Mobile-specific optimizations */}
      <style>{`
        /* Touch device optimizations */
        @media (hover: none) and (pointer: coarse) {
          div[style*="cursor: pointer"]:active {
            transform: scale(0.98) !important;
            transition: transform 0.1s ease !important;
          }
        }

        /* Reduce motion for accessibility */
        @media (prefers-reduced-motion: reduce) {
          * {
            transition-duration: 0.01ms !important;
            animation-duration: 0.01ms !important;
          }
        }

        /* Very small screens */
        @media (max-width: 360px) {
          .search-input {
            font-size: 16px; /* Prevents zoom on iOS */
          }
        }

        /* Landscape mode */
        @media (max-width: 768px) and (orientation: landscape) {
          .container {
            padding: 1rem 0.5rem !important;
          }
          
          .grid {
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)) !important;
            gap: 1rem !important;
          }
        }

        /* Large screens */
        @media (min-width: 1440px) {
          .container {
            padding: 3rem 2rem !important;
          }
          
          .grid {
            max-width: 1400px !important;
          }
        }
      `}</style>
    </div>
  );
}