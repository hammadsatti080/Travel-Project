import React, { useState, useEffect } from 'react';

const SeasonalGuide = () => {
  const seasons = [
    {
      id: 'spring',
      name: 'Spring',
      months: 'Mar - May',
      image: './Homescreen/Countries/Spring.jpg',
      description: 'Perfect for wildflower viewing and moderate temperatures',
      highlights: ['Wildflower Blooms', 'Moderate Weather', 'Fewer Crowds']
    },
    {
      id: 'summer',
      name: 'Summer',
      months: 'Jun - Aug',
      image: './Homescreen/Countries/Summer.jpg',
      description: 'Ideal for high-altitude trekking and glacier exploration',
      highlights: ['Best Weather', 'Accessible Trails', 'Glacier Views']
    },
    {
      id: 'autumn',
      name: 'Autumn',
      months: 'Sep - Nov',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
      description: 'Stunning fall foliage and crisp mountain air',
      highlights: ['Fall Colors', 'Clear Skies', 'Photography']
    },
    {
      id: 'winter',
      name: 'Winter',
      months: 'Dec - Feb',
      image: 'https://images.unsplash.com/photo-1453306458620-5bbef13a5bca?w=400&h=300&fit=crop',
      description: 'Snow adventures and winter sports in pristine conditions',
      highlights: ['Snow Sports', 'Solitude', 'Winter Photography']
    }
  ];

  const [activeSeason, setActiveSeason] = useState(seasons[0]);
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size and update on resize
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
    container: {
      background: '#f8fafc',
      padding: '40px 20px',
      minHeight: '50vh'
    },
    title: {
      textAlign: 'center',
      fontSize: '2.5rem',
      fontWeight: '700',
      color: '#1e293b',
      marginBottom: '10px'
    },
    subtitle: {
      textAlign: 'center',
      fontSize: '1.1rem',
      color: '#64748b',
      marginBottom: '40px',
      maxWidth: '600px',
      margin: '0 auto'
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '30px',
      maxWidth: '1200px',
      margin: '0 auto'
    },
    seasonSelector: {
      display: 'flex',
      gap: '12px',
      flexWrap: 'wrap',
      justifyContent: 'center',
      marginBottom: '20px'
    },
    seasonButton: {
      padding: '12px 24px',
      border: '2px solid #e2e8f0',
      borderRadius: '20px',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      background: 'white',
      color: '#475569'
    },
    seasonButtonActive: {
      background: '#1e293b',
      color: 'white',
      borderColor: '#1e293b',
      transform: 'translateY(-2px)',
      boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)'
    },
    guideCard: {
      background: 'white',
      borderRadius: '16px',
      overflow: 'hidden',
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
      maxWidth: '1000px',
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      minHeight: '400px'
    },
    guideCardMobile: {
      flexDirection: 'column',
      minHeight: 'auto'
    },
    imageSection: {
      flex: '0 0 60%',
      position: 'relative',
      overflow: 'hidden'
    },
    imageSectionMobile: {
      flex: 'none',
      height: '250px'
    },
    cardImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    },
    imageOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, transparent 50%)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      padding: '30px',
      color: 'white'
    },
    imageOverlayMobile: {
      background: 'linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, transparent 70%)',
      padding: '20px'
    },
    seasonName: {
      fontSize: '2rem',
      fontWeight: '700',
      marginBottom: '5px',
      textShadow: '0 2px 10px rgba(0,0,0,0.5)'
    },
    seasonNameMobile: {
      fontSize: '1.8rem'
    },
    seasonMonths: {
      fontSize: '1.1rem',
      color: '#f1f5f9',
      textShadow: '0 2px 5px rgba(0,0,0,0.5)'
    },
    contentSection: {
      flex: '0 0 40%',
      padding: '30px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    },
    contentSectionMobile: {
      padding: '25px 20px'
    },
    description: {
      fontSize: '1.1rem',
      color: '#475569',
      marginBottom: '25px',
      lineHeight: '1.6'
    },
    highlightsTitle: {
      fontSize: '1.1rem',
      fontWeight: '700',
      color: '#1e293b',
      marginBottom: '15px'
    },
    highlightsList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    },
    highlightItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      padding: '8px 12px',
      background: '#f8fafc',
      borderRadius: '8px',
      color: '#475569'
    },
    highlightIcon: {
      color: '#10b981',
      fontSize: '1.1rem',
      fontWeight: 'bold'
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Best Time to Visit Mountains</h2>
      <p style={styles.subtitle}>
        Discover the perfect season for your mountain adventure based on weather, activities, and scenery
      </p>
      
      <div style={styles.content}>
        {/* Season Selector */}
        <div style={styles.seasonSelector}>
          {seasons.map(season => (
            <button
              key={season.id}
              style={{
                ...styles.seasonButton,
                ...(activeSeason.id === season.id && styles.seasonButtonActive)
              }}
              onClick={() => setActiveSeason(season)}
            >
              {season.name}
            </button>
          ))}
        </div>

        {/* Guide Card */}
        <div style={{
          ...styles.guideCard,
          ...(isMobile && styles.guideCardMobile)
        }}>
          {/* Image Section - Always on top in mobile */}
          <div style={{
            ...styles.imageSection,
            ...(isMobile && styles.imageSectionMobile)
          }}>
            <img
              src={activeSeason.image}
              alt={activeSeason.name}
              style={styles.cardImage}
            />
            <div style={{
              ...styles.imageOverlay,
              ...(isMobile && styles.imageOverlayMobile)
            }}>
              <h3 style={{
                ...styles.seasonName,
                ...(isMobile && styles.seasonNameMobile)
              }}>
                {activeSeason.name}
              </h3>
              <div style={styles.seasonMonths}>{activeSeason.months}</div>
            </div>
          </div>
          
          {/* Content Section - Always below image in mobile */}
          <div style={{
            ...styles.contentSection,
            ...(isMobile && styles.contentSectionMobile)
          }}>
            <p style={styles.description}>{activeSeason.description}</p>
            
            <div style={styles.highlightsTitle}>Season Highlights:</div>
            <div style={styles.highlightsList}>
              {activeSeason.highlights.map((highlight, index) => (
                <div key={index} style={styles.highlightItem}>
                  <span style={styles.highlightIcon}>✓</span>
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeasonalGuide;