import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function TopDeals() {
  const [activeTab, setActiveTab] = useState('top');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popular');
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  // Check screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Categories for filtering
  const categories = [
    { id: 'all', name: 'All Deals', icon: '🔥' },
    { id: 'flash', name: 'Flash Sales', icon: '⚡' },
    { id: 'early', name: 'Early Bird', icon: '🐦' },
    { id: 'lastminute', name: 'Last Minute', icon: '⏰' },
    { id: 'group', name: 'Group Deals', icon: '👥' },
    { id: 'luxury', name: 'Luxury', icon: '⭐' }
  ];

  // Sorting options
  const sortOptions = [
    { id: 'popular', name: 'Most Popular' },
    { id: 'discount', name: 'Highest Discount' },
    { id: 'price', name: 'Lowest Price' },
    { id: 'rating', name: 'Top Rated' },
    { id: 'ending', name: 'Ending Soon' }
  ];

  // Sample deals data with real images and links
  const topDeals = [
    {
      id: 1,
      title: "Bali Tropical Escape",
      location: "Bali, Indonesia",
      originalPrice: "$1,299",
      discountedPrice: "$899",
      discount: "30% OFF",
      savings: "$400",
      image: "/Homescreen/Countries/Indonasia.jpg",
      rating: 4.8,
      reviews: "2.4K",
      duration: "7 Days",
      includes: ["Flights", "Hotel", "Tours"],
      category: "flash",
      timeLeft: "2h 30m",
      booked: "1.2K",
      exclusive: true,
      tag: "MOST POPULAR",
      link: "https://www.google.com/travel/flights/search?q=Bali+Indonesia"
    },
    {
      id: 2,
      title: "Swiss Alps Adventure",
      location: "Switzerland",
      originalPrice: "$1,899",
      discountedPrice: "$1,299",
      discount: "32% OFF",
      savings: "$600",
      image: "/Homescreen/Countries/Swizerland.jpg",
      rating: 4.9,
      reviews: "1.8K",
      duration: "6 Days",
      includes: ["Hotel", "Ski Pass", "Meals"],
      category: "early",
      timeLeft: "5d 12h",
      booked: "890",
      tag: "TRENDING",
      link: "https://www.google.com/travel/flights/search?q=Swiss+Alps"
    },
    {
      id: 3,
      title: "Tokyo City Experience",
      location: "Japan",
      originalPrice: "$1,499",
      discountedPrice: "$1,099",
      discount: "27% OFF",
      savings: "$400",
      image: "/Homescreen/Countries/Tokyo.jpg",
      rating: 4.7,
      reviews: "3.1K",
      duration: "8 Days",
      includes: ["Flights", "Hotel", "JR Pass"],
      category: "flash",
      timeLeft: "1h 45m",
      booked: "2.1K",
      exclusive: true,
      link: "https://www.google.com/travel/flights/search?q=Tokyo+Japan"
    },
    {
      id: 4,
      title: "Santorini Sunset Package",
      location: "Greece",
      originalPrice: "$1,599",
      discountedPrice: "$1,199",
      discount: "25% OFF",
      savings: "$400",
      image: "/Homescreen/Countries/Greece.jpg",
      rating: 4.8,
      reviews: "1.9K",
      duration: "5 Days",
      includes: ["Hotel", "Cruise", "Wine Tour"],
      category: "lastminute",
      timeLeft: "12h 20m",
      booked: "950",
      tag: "HOT DEAL",
      link: "https://www.google.com/travel/flights/search?q=Santorini+Greece"
    }
  ];

  const allDeals = [
    ...topDeals,
    {
      id: 5,
      title: "Machu Picchu Explorer",
      location: "Peru",
      originalPrice: "$999",
      discountedPrice: "$799",
      discount: "20% OFF",
      savings: "$200",
      image: "/Homescreen/Countries/Paris.jpg",
      rating: 4.6,
      reviews: "1.2K",
      duration: "9 Days",
      includes: ["Hotel", "Guides", "Entrance"],
      category: "group",
      timeLeft: "3d 6h",
      booked: "680",
      link: "https://www.google.com/travel/flights/search?q=Machu+Picchu+Peru"
    },
    {
      id: 6,
      title: "Maldives Overwater Villa",
      location: "Maldives",
      originalPrice: "$2,499",
      discountedPrice: "$1,799",
      discount: "28% OFF",
      savings: "$700",
      image: "/Homescreen/Countries/ANZ.jpg",
      rating: 4.9,
      reviews: "1.6K",
      duration: "6 Days",
      includes: ["Villa", "Meals", "Snorkeling"],
      category: "luxury",
      timeLeft: "7d 2h",
      booked: "450",
      tag: "LUXURY",
      link: "https://www.google.com/travel/flights/search?q=Maldives"
    },
    {
      id: 7,
      title: "Paris Romantic Getaway",
      location: "France",
      originalPrice: "$1,399",
      discountedPrice: "$999",
      discount: "29% OFF",
      savings: "$400",
      image: "/Homescreen/Countries/Paris.jpg",
      rating: 4.7,
      reviews: "2.8K",
      duration: "5 Days",
      includes: ["Hotel", "Tours", "Museum Pass"],
      category: "early",
      timeLeft: "4d 8h",
      booked: "1.5K",
      link: "https://www.google.com/travel/flights/search?q=Paris+France"
    },
    {
      id: 8,
      title: "New Zealand Adventure",
      location: "New Zealand",
      originalPrice: "$1,999",
      discountedPrice: "$1,499",
      discount: "25% OFF",
      savings: "$500",
      image: "/Homescreen/Countries/ANZ.jpg",
      rating: 4.9,
      reviews: "1.5K",
      duration: "10 Days",
      includes: ["Hotels", "Activities", "Transport"],
      category: "adventure",
      timeLeft: "6d 14h",
      booked: "720",
      link: "https://www.google.com/travel/flights/search?q=New+Zealand"
    },
    {
      id: 9,
      title: "Dubai Luxury Experience",
      location: "UAE",
      originalPrice: "$2,199",
      discountedPrice: "$1,599",
      discount: "27% OFF",
      savings: "$600",
      image: "/Homescreen/Countries/Paris.jpg",
      rating: 4.8,
      reviews: "1.7K",
      duration: "6 Days",
      includes: ["5-Star Hotel", "Desert Safari", "Burj Khalifa"],
      category: "luxury",
      timeLeft: "1d 8h",
      booked: "890",
      tag: "LUXURY",
      link: "https://www.google.com/travel/flights/search?q=Dubai"
    },
    {
      id: 10,
      title: "Thailand Island Hopping",
      location: "Thailand",
      originalPrice: "$1,199",
      discountedPrice: "$849",
      discount: "29% OFF",
      savings: "$350",
      image: "/Homescreen/Countries/Indonasia.jpg",
      rating: 4.7,
      reviews: "2.2K",
      duration: "8 Days",
      includes: ["Islands", "Beaches", "Temples"],
      category: "lastminute",
      timeLeft: "8h 45m",
      booked: "1.1K",
      tag: "LAST MINUTE",
      link: "https://www.google.com/travel/flights/search?q=Thailand"
    }
  ];

  const currentDeals = activeTab === 'top' ? topDeals : allDeals;
  
  const filteredDeals = selectedCategory === 'all' 
    ? currentDeals 
    : currentDeals.filter(deal => deal.category === selectedCategory);

  // Sort deals based on selected option
  const sortedDeals = [...filteredDeals].sort((a, b) => {
    switch(sortBy) {
      case 'discount':
        return parseInt(b.discount) - parseInt(a.discount);
      case 'price':
        return parseInt(a.discountedPrice.replace('$', '')) - parseInt(b.discountedPrice.replace('$', ''));
      case 'rating':
        return b.rating - a.rating;
      case 'ending':
        return a.timeLeft.localeCompare(b.timeLeft);
      default:
        return b.booked - a.booked;
    }
  });

  // Handle external link click
  const handleExternalLinkClick = (url) => {
    window.open(url, '_blank');
  };

  // Handle payment page navigation
  const handlePaymentNavigation = (deal) => {
    // Pass deal data to payment page
    navigate('/Payment', { 
      state: { 
        deal: {
          title: deal.title,
          location: deal.location,
          discountedPrice: deal.discountedPrice,
          duration: deal.duration,
          includes: deal.includes,
          image: deal.image
        }
      }
    });
  };

  // Image error handler
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

  // CSS Animations
  const styleTag = `
    @keyframes glow {
      0%, 100% { box-shadow: 0 0 5px rgba(255, 215, 0, 0.5); }
      50% { box-shadow: 0 0 20px rgba(255, 215, 0, 0.8); }
    }
    
    @keyframes slideIn {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    .glow-animation {
      animation: glow 2s ease-in-out infinite;
    }
    
    .deal-card {
      min-height: 520px;
    }
    
    @media (max-width: 767px) {
      .deal-card {
        min-height: 480px;
      }
      
      .mobile-hidden {
        display: none;
      }
    }
  `;

  // Responsive Styles
  const containerStyle = {
    background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
    minHeight: '50vh',
    color: 'white',
    fontFamily: "'Inter', sans-serif",
    padding: isMobile ? '1rem 0.5rem' : '2rem 1rem',
    position: 'relative'
  };
  
  const headerStyle = {
    textAlign: 'center',
    marginBottom: isMobile ? '1.5rem' : '3rem',
    padding: isMobile ? '0 0.5rem' : '0'
  };

  const titleStyle = {
    fontSize: isMobile ? '2rem' : '3rem',
    fontWeight: '800',
    background: 'linear-gradient(45deg, #ffd700, #ff6b6b, #667eea)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    color: 'transparent',
    marginBottom: '0.5rem'
  };

  const subtitleStyle = {
    fontSize: isMobile ? '0.9rem' : '1.2rem',
    color: '#cccccc',
    maxWidth: isMobile ? '100%' : '600px',
    margin: '0 auto',
    lineHeight: '1.5'
  };

  // Tabs Navigation - Mobile Responsive
  const tabsStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: isMobile ? '0.5rem' : '1rem',
    marginBottom: isMobile ? '1.5rem' : '2rem',
    flexWrap: isMobile ? 'wrap' : 'nowrap'
  };

  const tabStyle = (isActive) => ({
    padding: isMobile ? '0.8rem 1.5rem' : '1rem 2rem',
    borderRadius: '50px',
    border: 'none',
    background: isActive 
      ? 'linear-gradient(45deg, #ff6b6b, #ee5a24)' 
      : 'rgba(255, 255, 255, 0.1)',
    color: 'white',
    fontSize: isMobile ? '0.9rem' : '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    border: isActive ? 'none' : '1px solid rgba(255, 255, 255, 0.2)',
    flex: isMobile ? '1' : 'none',
    minWidth: isMobile ? '140px' : 'auto'
  });

  // Filters and Sort Bar - Mobile Responsive
  const filtersStyle = {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    justifyContent: 'space-between',
    alignItems: isMobile ? 'stretch' : 'center',
    gap: isMobile ? '1rem' : '1rem',
    marginBottom: isMobile ? '1.5rem' : '2rem',
    marginLeft: isMobile ? '' : '130px',
    width: isMobile ? '' : '85%',
    padding: isMobile ? '1rem' : '1.5rem',
    background: 'rgba(255, 255, 255, 0.05)',
    borderRadius: '15px',
    border: '1px solid rgba(255, 255, 255, 0.1)'
  };

  const categoriesStyle = {
    display: 'flex',
    gap: isMobile ? '0.5rem' : '0.8rem',
    flexWrap: 'wrap',
    flex: 1,
    justifyContent: isMobile ? 'center' : 'flex-start',
    overflowX: isMobile ? 'auto' : 'visible'
  };

  const categoryButtonStyle = (isActive) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '0.4rem',
    padding: isMobile ? '0.5rem 1rem' : '0.6rem 1.2rem',
    borderRadius: '25px',
    border: 'none',
    background: isActive 
      ? 'linear-gradient(45deg, #667eea, #764ba2)' 
      : 'rgba(255, 255, 255, 0.08)',
    color: 'white',
    fontSize: isMobile ? '0.8rem' : '0.85rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    border: isActive ? 'none' : '1px solid rgba(255, 255, 255, 0.2)',
    flexShrink: 0,
    whiteSpace: 'nowrap'
  });

  const sortStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: isMobile ? '0.5rem' : '1rem',
    justifyContent: isMobile ? 'center' : 'flex-end',
    width: isMobile ? '100%' : 'auto'
  };

  const sortSelectStyle = {
    padding: isMobile ? '0.5rem 0.8rem' : '0.6rem 1rem',
    borderRadius: '10px',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    background: 'rgba(255, 255, 255, 0.1)',
    color: 'white',
    fontSize: isMobile ? '0.8rem' : '0.9rem',
    cursor: 'pointer',
    minWidth: isMobile ? '150px' : 'auto'
  };

  // Deals Grid - Mobile Responsive with Consistent Card Size
  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: isMobile ? '1rem' : '1.5rem',
    maxWidth: '1400px',
    margin: '0 auto',
    alignItems: 'stretch'
  };

  // Deal Card with Consistent Height
  const cardStyle = (isExclusive) => ({
    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))',
    borderRadius: isMobile ? '12px' : '20px',
    padding: '0',
    border: isExclusive 
      ? '2px solid #ffd700' 
      : '1px solid rgba(255, 255, 255, 0.1)',
    position: 'relative',
    overflow: 'hidden',
    backdropFilter: 'blur(10px)',
    animation: 'slideIn 0.6s ease-out',
    minHeight: isMobile ? '480px' : '520px',
    display: 'flex',
    flexDirection: 'column',
    ...(isExclusive && { animation: 'glow 3s ease-in-out infinite' })
  });

  const cardHeaderStyle = {
    position: 'relative',
    height: isMobile ? '160px' : '200px',
    background: 'linear-gradient(135deg, #1a1a1a, #2a2a2a)',
    overflow: 'hidden',
    flexShrink: 0
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  };

  const imageOverlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.5))'
  };

  const discountBadgeStyle = {
    position: 'absolute',
    top: isMobile ? '0.6rem' : '1rem',
    right: isMobile ? '0.6rem' : '1rem',
    background: 'linear-gradient(45deg, #ff6b6b, #ee5a24)',
    color: 'white',
    padding: isMobile ? '0.4rem 0.8rem' : '0.5rem 1rem',
    borderRadius: isMobile ? '15px' : '25px',
    fontSize: isMobile ? '0.8rem' : '0.9rem',
    fontWeight: '800',
    zIndex: 2
  };

  const tagStyle = {
    position: 'absolute',
    top: isMobile ? '0.6rem' : '1rem',
    left: isMobile ? '0.6rem' : '1rem',
    background: 'linear-gradient(45deg, #ffd700, #ff9a3d)',
    color: '#000000',
    padding: isMobile ? '0.3rem 0.6rem' : '0.4rem 0.8rem',
    borderRadius: isMobile ? '10px' : '15px',
    fontSize: isMobile ? '0.7rem' : '0.75rem',
    fontWeight: '800',
    zIndex: 2
  };

  const timeLeftStyle = {
    position: 'absolute',
    bottom: isMobile ? '0.6rem' : '1rem',
    left: isMobile ? '0.6rem' : '1rem',
    background: 'rgba(0, 0, 0, 0.8)',
    color: '#ff6b6b',
    padding: isMobile ? '0.3rem 0.6rem' : '0.4rem 0.8rem',
    borderRadius: isMobile ? '10px' : '15px',
    fontSize: isMobile ? '0.7rem' : '0.8rem',
    fontWeight: '600',
    zIndex: 2
  };

  const cardContentStyle = {
    padding: isMobile ? '1rem' : '1.5rem',
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
  };

  const titleRowStyle = {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    justifyContent: 'space-between',
    alignItems: isMobile ? 'flex-start' : 'flex-start',
    marginBottom: isMobile ? '0.8rem' : '1rem',
    gap: isMobile ? '0.5rem' : '0',
    flexShrink: 0
  };

  const dealTitleStyle = {
    fontSize: isMobile ? '1.1rem' : '1.3rem',
    fontWeight: '700',
    marginBottom: '0.3rem',
    color: '#ffffff',
    lineHeight: '1.3'
  };

  const locationStyle = {
    color: '#cccccc',
    fontSize: isMobile ? '0.8rem' : '0.9rem',
    marginBottom: '0.5rem'
  };

  const priceStyle = {
    textAlign: isMobile ? 'left' : 'right',
    width: isMobile ? '100%' : 'auto',
    flexShrink: 0
  };

  const originalPriceStyle = {
    fontSize: isMobile ? '0.9rem' : '1rem',
    color: '#888888',
    textDecoration: 'line-through',
    marginBottom: '0.2rem'
  };

  const discountedPriceStyle = {
    fontSize: isMobile ? '1.3rem' : '1.5rem',
    fontWeight: '800',
    color: '#ffd700',
    marginBottom: '0.2rem'
  };

  const savingsStyle = {
    fontSize: isMobile ? '0.75rem' : '0.8rem',
    color: '#4ecdc4',
    fontWeight: '600'
  };

  const ratingStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: isMobile ? '0.4rem' : '0.5rem',
    marginBottom: isMobile ? '0.8rem' : '1rem',
    flexWrap: 'wrap',
    flexShrink: 0
  };

  const starsStyle = {
    color: '#ffd700',
    fontSize: isMobile ? '0.9rem' : '1rem'
  };

  const reviewsStyle = {
    color: '#888888',
    fontSize: isMobile ? '0.75rem' : '0.8rem'
  };

  const includesStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: isMobile ? '0.4rem' : '0.5rem',
    marginBottom: isMobile ? '0.8rem' : '1rem',
    flexShrink: 0
  };

  const includeStyle = {
    background: 'rgba(255, 255, 255, 0.1)',
    padding: isMobile ? '0.25rem 0.5rem' : '0.3rem 0.6rem',
    borderRadius: '8px',
    fontSize: isMobile ? '0.7rem' : '0.75rem',
    color: '#cccccc'
  };

  const metaStyle = {
    display: 'grid',
    gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
    gap: isMobile ? '0.8rem' : '1rem',
    marginBottom: isMobile ? '0.8rem' : '1rem',
    padding: isMobile ? '0.6rem 0' : '0.8rem 0',
    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
    flexShrink: 0
  };

  const metaItemStyle = {
    textAlign: 'center'
  };

  const metaLabelStyle = {
    fontSize: isMobile ? '0.65rem' : '0.7rem',
    color: '#888888',
    marginBottom: '0.2rem'
  };

  const metaValueStyle = {
    fontSize: isMobile ? '0.8rem' : '0.9rem',
    fontWeight: '600',
    color: '#ffffff'
  };

  const bookButtonStyle = {
    width: '100%',
    padding: isMobile ? '0.8rem' : '1rem',
    borderRadius: isMobile ? '8px' : '12px',
    border: 'none',
    background: 'linear-gradient(45deg, #ff6b6b, #ee5a24)',
    color: 'white',
    fontSize: isMobile ? '0.9rem' : '1rem',
    fontWeight: '700',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    marginTop: 'auto',
    flexShrink: 0
  };

  return (
    <div style={containerStyle}>
      <style>{styleTag}</style>
      
      {/* Header */}
      <div style={headerStyle}>
        <h1 style={titleStyle}>Exclusive Travel Deals</h1>
        <p style={subtitleStyle}>
          {isMobile 
            ? "Limited time offers with massive savings" 
            : "Limited time offers with massive savings. Book now before they're gone!"
          }
        </p>
      </div>

      {/* Tabs */}
      <div style={tabsStyle}>
        <button 
          style={tabStyle(activeTab === 'top')}
          onClick={() => setActiveTab('top')}
        >
          🔥 {isMobile ? 'Top' : 'Top Deals'}
        </button>
        <button 
          style={tabStyle(activeTab === 'all')}
          onClick={() => setActiveTab('all')}
        >
          🌟 {isMobile ? 'All' : 'All Deals'}
        </button>
      </div>

      {/* Filters and Sort */}
      <div style={filtersStyle}>
        <div style={categoriesStyle}>
          {categories.map(category => (
            <button
              key={category.id}
              style={categoryButtonStyle(selectedCategory === category.id)}
              onClick={() => setSelectedCategory(category.id)}
            >
              <span>{category.icon}</span>
              <span>{isMobile ? category.name.split(' ')[0] : category.name}</span>
            </button>
          ))}
        </div>
        
        <div style={sortStyle}>
          <span style={{color: '#cccccc', fontSize: isMobile ? '0.8rem' : '0.9rem'}}>
            {isMobile ? 'Sort:' : 'Sort by:'}
          </span>
          <select 
            style={sortSelectStyle}
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            {sortOptions.map(option => (
              <option key={option.id} value={option.id}>
                {isMobile ? option.name.split(' ')[0] : option.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Deals Grid */}
      <div style={gridStyle}>
        {sortedDeals.map(deal => (
          <div key={deal.id} style={cardStyle(deal.exclusive)} className="deal-card">
            {/* Card Header with Real Image */}
            <div style={cardHeaderStyle}>
              <img 
                src={deal.image} 
                alt={deal.title}
                style={imageStyle}
                onError={handleImageError}
              />
              <div style={imageOverlayStyle}></div>
              
              {/* Discount Badge */}
              <div style={discountBadgeStyle}>
                {isMobile ? deal.discount.split(' ')[0] : deal.discount}
              </div>

              {/* Tag */}
              {deal.tag && (
                <div style={tagStyle}>
                  {isMobile ? deal.tag.split(' ')[0] : deal.tag}
                </div>
              )}

              {/* Time Left */}
              <div style={timeLeftStyle}>
                ⏰ {deal.timeLeft}
              </div>
            </div>

            {/* Card Content */}
            <div style={cardContentStyle}>
              {/* Title and Price */}
              <div style={titleRowStyle}>
                <div style={{flex: 1}}>
                  <h3 style={dealTitleStyle}>{deal.title}</h3>
                  <p style={locationStyle}>{deal.location}</p>
                </div>
                <div style={priceStyle}>
                  <div style={originalPriceStyle}>{deal.originalPrice}</div>
                  <div style={discountedPriceStyle}>{deal.discountedPrice}</div>
                  <div style={savingsStyle}>Save {deal.savings}</div>
                </div>
              </div>

              {/* Rating */}
              <div style={ratingStyle}>
                <div style={starsStyle}>
                  {'★'.repeat(Math.floor(deal.rating))}
                  {'☆'.repeat(5 - Math.floor(deal.rating))}
                </div>
                <span style={reviewsStyle}>({deal.reviews})</span>
              </div>

              {/* Includes */}
              <div style={includesStyle}>
                {deal.includes.slice(0, isMobile ? 2 : 3).map((item, index) => (
                  <span key={index} style={includeStyle}>
                    {item}
                  </span>
                ))}
              </div>

              {/* Meta Info */}
              <div style={metaStyle}>
                <div style={metaItemStyle}>
                  <div style={metaLabelStyle}>DURATION</div>
                  <div style={metaValueStyle}>{deal.duration}</div>
                </div>
                <div style={metaItemStyle}>
                  <div style={metaLabelStyle}>BOOKED</div>
                  <div style={metaValueStyle}>{deal.booked}+</div>
                </div>
                {!isMobile && (
                  <div style={metaItemStyle}>
                    <div style={metaLabelStyle}>RATING</div>
                    <div style={metaValueStyle}>{deal.rating}/5</div>
                  </div>
                )}
              </div>

              {/* Book Button with Payment Navigation */}
              <button 
                style={bookButtonStyle}
                onClick={() => handlePaymentNavigation(deal)}
                onMouseEnter={(e) => {
                  if (!isMobile) {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 8px 25px rgba(255, 107, 107, 0.4)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isMobile) {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = 'none';
                  }
                }}
              >
                🎯 {isMobile ? 'Book Now' : 'Book Now & Save'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}