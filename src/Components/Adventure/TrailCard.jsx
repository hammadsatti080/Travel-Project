import React, { useState, useEffect } from 'react';

const TrailCard = () => {
  const trails = [
    {
      id: 1,
      name: "Everest Base Camp",
      difficulty: "Expert",
      duration: "12 days",
      elevation: "5,364m",
      image: "./Homescreen/Countries/Mountain.jpg",
      description: "The ultimate Himalayan adventure to the world's highest mountain base camp."
    },
    {
      id: 2,
      name: "Annapurna Circuit",
      difficulty: "Advanced",
      duration: "15 days",
      elevation: "5,416m",
      image: "./Homescreen/Countries/nepal1.webp",
      description: "A classic trek through diverse landscapes and traditional Nepalese villages."
    },
    {
      id: 3,
      name: "Alps Glacier Walk",
      difficulty: "Intermediate",
      duration: "6 days",
      elevation: "3,500m",
      image: "./Homescreen/Countries/Glacier.jpg",
      description: "Explore stunning glaciers and alpine meadows in the European Alps."
    },
 
  ];

  const [hoveredCard, setHoveredCard] = useState(null);
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
      background: '#0f172a',
      padding: isMobile ? '40px 15px' : '80px 20px',
      minHeight: '50vh'
    },
    title: {
      textAlign: 'center',
      fontSize: isMobile ? '2rem' : '3rem',
      fontWeight: '800',
      color: 'white',
      marginBottom: isMobile ? '30px' : '60px',
      background: 'linear-gradient(135deg, #3b82f6, #10b981)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: isMobile ? '20px' : '30px',
      maxWidth: '1200px',
      margin: '0 auto'
    },
    card: {
      background: '#1e293b',
      borderRadius: isMobile ? '15px' : '20px',
      overflow: 'hidden',
      boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)',
      transition: isMobile ? 'none' : 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
      cursor: 'pointer'
    },
    cardHover: {
      transform: isMobile ? 'none' : 'translateY(-15px) scale(1.02)',
      boxShadow: isMobile ? '0 10px 40px rgba(0, 0, 0, 0.3)' : '0 25px 60px rgba(59, 130, 246, 0.4)'
    },
    image: {
      width: '100%',
      height: isMobile ? '160px' : '200px',
      objectFit: 'cover',
      transition: isMobile ? 'none' : 'all 0.4s ease'
    },
    imageHover: {
      transform: isMobile ? 'none' : 'scale(1.1)'
    },
    content: {
      padding: isMobile ? '20px' : '25px'
    },
    trailName: {
      fontSize: isMobile ? '1.2rem' : '1.4rem',
      fontWeight: '700',
      color: 'white',
      marginBottom: '10px'
    },
    trailDescription: {
      color: '#cbd5e1',
      marginBottom: isMobile ? '15px' : '20px',
      lineHeight: '1.6',
      fontSize: isMobile ? '0.9rem' : '1rem'
    },
    metaGrid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
      gap: isMobile ? '10px' : '15px',
      marginBottom: isMobile ? '15px' : '20px'
    },
    metaItem: {
      textAlign: 'center',
      padding: isMobile ? '8px' : '12px',
      background: 'rgba(255, 255, 255, 0.05)',
      borderRadius: isMobile ? '8px' : '10px',
      border: '1px solid rgba(255, 255, 255, 0.1)'
    },
    metaLabel: {
      fontSize: isMobile ? '0.7rem' : '0.8rem',
      color: '#94a3b8',
      marginBottom: '4px'
    },
    metaValue: {
      fontSize: isMobile ? '0.9rem' : '1rem',
      fontWeight: '600',
      color: 'white'
    },
    difficultyBadge: {
      display: 'inline-block',
      padding: isMobile ? '4px 12px' : '6px 16px',
      borderRadius: '20px',
      fontSize: isMobile ? '0.7rem' : '0.8rem',
      fontWeight: '700',
      textTransform: 'uppercase'
    },
    difficultyExpert: {
      background: 'linear-gradient(135deg, #ef4444, #dc2626)',
      color: 'white'
    },
    difficultyAdvanced: {
      background: 'linear-gradient(135deg, #f59e0b, #d97706)',
      color: 'white'
    },
    difficultyIntermediate: {
      background: 'linear-gradient(135deg, #10b981, #059669)',
      color: 'white'
    },
    difficultyBeginner: {
      background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
      color: 'white'
    },
    headerRow: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: isMobile ? 'center' : 'flex-start',
      marginBottom: '15px',
      flexDirection: isMobile ? 'column' : 'row',
      gap: isMobile ? '10px' : '0'
    },
    titleContainer: {
      flex: isMobile ? 'none' : '1'
    }
  };

  const getDifficultyStyle = (difficulty) => {
    switch(difficulty.toLowerCase()) {
      case 'expert': return styles.difficultyExpert;
      case 'advanced': return styles.difficultyAdvanced;
      case 'intermediate': return styles.difficultyIntermediate;
      case 'beginner': return styles.difficultyBeginner;
      default: return styles.difficultyBeginner;
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Featured Mountain Trails</h2>
      <div style={styles.grid}>
        {trails.map((trail) => (
          <div
            key={trail.id}
            style={{
              ...styles.card,
              ...(hoveredCard === trail.id && styles.cardHover)
            }}
            onMouseEnter={() => !isMobile && setHoveredCard(trail.id)}
            onMouseLeave={() => !isMobile && setHoveredCard(null)}
          >
            <div style={{ overflow: 'hidden' }}>
              <img
                src={trail.image}
                alt={trail.name}
                style={{
                  ...styles.image,
                  ...(hoveredCard === trail.id && styles.imageHover)
                }}
              />
            </div>
            <div style={styles.content}>
              <div style={styles.headerRow}>
                <div style={styles.titleContainer}>
                  <h3 style={styles.trailName}>{trail.name}</h3>
                </div>
                <span style={{...styles.difficultyBadge, ...getDifficultyStyle(trail.difficulty)}}>
                  {trail.difficulty}
                </span>
              </div>
              <p style={styles.trailDescription}>{trail.description}</p>
              <div style={styles.metaGrid}>
                <div style={styles.metaItem}>
                  <div style={styles.metaLabel}>Duration</div>
                  <div style={styles.metaValue}>⏱️ {trail.duration}</div>
                </div>
                <div style={styles.metaItem}>
                  <div style={styles.metaLabel}>Elevation</div>
                  <div style={styles.metaValue}>🏔️ {trail.elevation}</div>
                </div>
                {!isMobile && (
                  <div style={styles.metaItem}>
                    <div style={styles.metaLabel}>Level</div>
                    <div style={styles.metaValue}>📊 {trail.difficulty}</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrailCard;