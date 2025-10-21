import React, { useState, useEffect } from 'react';

const AnimatedMountain = () => {
  const [counters, setCounters] = useState({
    trails: 0,
    elevation: 0,
    countries: 0,
    experience: 0
  });

  const [currentCountry, setCurrentCountry] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size
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

  const countries = [
    {
      id: 1,
      name: "Nepal",
      capital: "Kathmandu",
      highestPeak: "Mount Everest",
      elevation: "8,848m",
      image: "https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?w=1200&h=800&fit=crop",
      flag: "🇳🇵",
      facts: "Home to 8 of the world's 14 highest peaks above 8,000m",
      popularTreks: ["Everest Base Camp", "Annapurna Circuit", "Langtang Valley"],
      bestSeason: "Mar-May, Sep-Nov",
      area: "147,516 km²",
      mountainRange: "Himalayas"
    },
    {
      id: 2,
      name: "Switzerland",
      capital: "Bern",
      highestPeak: "Monte Rosa",
      elevation: "4,634m",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop",
      flag: "🇨🇭",
      facts: "Known as the 'Playground of Europe' with over 48 mountain peaks above 4,000m",
      popularTreks: ["Matterhorn Trek", "Jungfrau Region", "Eiger Trail"],
      bestSeason: "Jun-Sep",
      area: "41,285 km²",
      mountainRange: "Alps"
    },
    {
      id: 3,
      name: "Japan",
      capital: "Tokyo",
      highestPeak: "Mount Fuji",
      elevation: "3,776m",
      image: "https://images.unsplash.com/photo-1578632749014-ca77efd052eb?w=1200&h=800&fit=crop",
      flag: "🇯🇵",
      facts: "Mount Fuji is an active volcano and UNESCO World Heritage site",
      popularTreks: ["Mount Fuji Climb", "Japanese Alps", "Kumano Kodo"],
      bestSeason: "Jul-Aug (Fuji), Apr-Oct (Alps)",
      area: "377,975 km²",
      mountainRange: "Japanese Alps"
    },
    {
      id: 4,
      name: "United States",
      capital: "Washington D.C.",
      highestPeak: "Denali",
      elevation: "6,190m",
      image: "https://images.unsplash.com/photo-1453306458620-5bbef13a5bca?w=1200&h=800&fit=crop",
      flag: "🇺🇸",
      facts: "Denali is the highest peak in North America with vertical rise of 5,500m",
      popularTreks: ["Denali Summit", "Rocky Mountains", "Appalachian Trail"],
      bestSeason: "May-Jul (Alaska), Jun-Sep (Rockies)",
      area: "9,833,520 km²",
      mountainRange: "Alaska Range"
    },
    {
      id: 5,
      name: "Argentina",
      capital: "Buenos Aires",
      highestPeak: "Aconcagua",
      elevation: "6,961m",
      image: "https://images.unsplash.com/photo-1464822759849-e30de63c6e48?w=1200&h=800&fit=crop",
      flag: "🇦🇷",
      facts: "Aconcagua is the highest peak in both Southern and Western hemispheres",
      popularTreks: ["Aconcagua Summit", "Patagonia Trek", "Fitz Roy"],
      bestSeason: "Nov-Feb",
      area: "2,780,400 km²",
      mountainRange: "Andes"
    }
  ];

  const stats = [
    { id: 'trails', end: 156, label: 'Mountain Trails', icon: '🥾', suffix: '+' },
    { id: 'elevation', end: 8848, label: 'Highest Peak', icon: '🏔️', suffix: 'm' },
    { id: 'countries', end: 32, label: 'Countries Covered', icon: '🌍', suffix: '+' },
    { id: 'experience', end: 15, label: 'Years Experience', icon: '⭐', suffix: '+' }
  ];

  // Auto-scroll through countries
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCountry((prev) => (prev + 1) % countries.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    stats.forEach(stat => {
      let current = 0;
      const increment = stat.end / steps;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.end) {
          current = stat.end;
          clearInterval(timer);
        }
        setCounters(prev => ({
          ...prev,
          [stat.id]: Math.floor(current)
        }));
      }, stepDuration);
    });
  }, []);

  const styles = {
    container: {
      background: `linear-gradient(rgba(15, 23, 42, 0.85), rgba(30, 41, 59, 0.90)), url(${countries[currentCountry].image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: isMobile ? 'scroll' : 'fixed',
      backgroundRepeat: 'no-repeat',
      padding: isMobile ? '20px 15px' : '40px 20px',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      overflow: 'hidden',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    },
    header: {
      textAlign: 'center',
      marginBottom: isMobile ? '25px' : '40px'
    },
    title: {
      fontSize: isMobile ? '2.2rem' : '3.5rem',
      fontWeight: '800',
      color: 'white',
      marginBottom: isMobile ? '10px' : '15px',
      background: 'linear-gradient(135deg, #10b981, #3b82f6, #8b5cf6)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      textShadow: '0 4px 12px rgba(0,0,0,0.4)',
      lineHeight: isMobile ? '1.2' : '1.3'
    },
    subtitle: {
      fontSize: isMobile ? '1rem' : '1.3rem',
      color: '#e2e8f0',
      maxWidth: isMobile ? '100%' : '700px',
      margin: '0 auto',
      textShadow: '0 2px 6px rgba(0,0,0,0.5)',
      lineHeight: '1.6',
      padding: isMobile ? '0 10px' : '0'
    },
    mainContent: {
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      gap: isMobile ? '20px' : '30px',
      maxWidth: '1400px',
      margin: '0 auto',
      width: '100%',
      flex: 1
    },
    leftPanel: {
      flex: isMobile ? 'none' : '0 0 45%',
      background: 'rgba(255, 255, 255, 0.10)',
      backdropFilter: 'blur(20px)',
      borderRadius: isMobile ? '16px' : '24px',
      padding: isMobile ? '20px' : '35px',
      border: '1px solid rgba(255, 255, 255, 0.20)',
      display: 'flex',
      flexDirection: 'column',
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
      order: isMobile ? 2 : 1
    },
    rightPanel: {
      flex: isMobile ? 'none' : '0 0 55%',
      background: 'rgba(255, 255, 255, 0.10)',
      backdropFilter: 'blur(20px)',
      borderRadius: isMobile ? '16px' : '24px',
      padding: isMobile ? '20px' : '35px',
      border: '1px solid rgba(255, 255, 255, 0.20)',
      display: 'flex',
      flexDirection: 'column',
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
      order: isMobile ? 1 : 2
    },
    countryHeader: {
      display: 'flex',
      alignItems: 'center',
      gap: isMobile ? '15px' : '20px',
      marginBottom: isMobile ? '20px' : '25px',
      paddingBottom: isMobile ? '15px' : '20px',
      borderBottom: '2px solid rgba(255, 255, 255, 0.15)',
      flexDirection: isMobile ? 'column' : 'row',
      textAlign: isMobile ? 'center' : 'left'
    },
    flag: {
      fontSize: isMobile ? '3rem' : '4rem',
      filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))'
    },
    countryInfo: {
      flex: 1,
      textAlign: isMobile ? 'center' : 'left'
    },
    countryName: {
      fontSize: isMobile ? '1.8rem' : '2.5rem',
      fontWeight: '800',
      color: 'white',
      marginBottom: isMobile ? '3px' : '5px',
      background: 'linear-gradient(135deg, #10b981, #3b82f6)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      lineHeight: isMobile ? '1.2' : '1.3'
    },
    countryCapital: {
      fontSize: isMobile ? '1rem' : '1.2rem',
      color: '#cbd5e1',
      fontWeight: '500'
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(2, 1fr)',
      gap: isMobile ? '12px' : '20px',
      marginTop: isMobile ? '15px' : '20px'
    },
    statCard: {
      background: 'rgba(255, 255, 255, 0.08)',
      borderRadius: isMobile ? '12px' : '16px',
      padding: isMobile ? '15px' : '20px',
      textAlign: 'center',
      border: '1px solid rgba(255, 255, 255, 0.15)',
      transition: isMobile ? 'none' : 'all 0.3s ease',
      cursor: isMobile ? 'default' : 'pointer'
    },
    statCardHover: {
      transform: isMobile ? 'none' : 'translateY(-8px)',
      background: isMobile ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0.12)',
      boxShadow: isMobile ? 'none' : '0 15px 30px rgba(59, 130, 246, 0.25)'
    },
    statIcon: {
      fontSize: isMobile ? '1.8rem' : '2.5rem',
      marginBottom: isMobile ? '8px' : '12px',
      display: 'block',
      filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
    },
    statNumber: {
      fontSize: isMobile ? '1.4rem' : '2rem',
      fontWeight: '800',
      color: 'white',
      marginBottom: isMobile ? '5px' : '8px',
      textShadow: '0 2px 4px rgba(0,0,0,0.3)'
    },
    statLabel: {
      fontSize: isMobile ? '0.7rem' : '0.9rem',
      color: '#94a3b8',
      fontWeight: '600',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
      lineHeight: '1.2'
    },
    section: {
      marginBottom: isMobile ? '20px' : '30px'
    },
    sectionTitle: {
      fontSize: isMobile ? '1.1rem' : '1.4rem',
      fontWeight: '700',
      color: 'white',
      marginBottom: isMobile ? '12px' : '15px',
      background: 'linear-gradient(135deg, #10b981, #3b82f6)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      justifyContent: isMobile ? 'center' : 'flex-start'
    },
    detailGrid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
      gap: isMobile ? '10px' : '15px'
    },
    detailCard: {
      background: 'rgba(255, 255, 255, 0.06)',
      padding: isMobile ? '14px' : '18px',
      borderRadius: isMobile ? '10px' : '12px',
      border: '1px solid rgba(255, 255, 255, 0.1)'
    },
    detailLabel: {
      color: '#94a3b8',
      fontSize: isMobile ? '0.75rem' : '0.85rem',
      fontWeight: '600',
      marginBottom: isMobile ? '6px' : '8px',
      textTransform: 'uppercase',
      letterSpacing: '0.5px'
    },
    detailValue: {
      color: 'white',
      fontSize: isMobile ? '0.95rem' : '1.1rem',
      fontWeight: '600'
    },
    treksList: {
      display: 'flex',
      flexDirection: 'column',
      gap: isMobile ? '8px' : '10px'
    },
    trekItem: {
      background: 'rgba(255, 255, 255, 0.06)',
      padding: isMobile ? '10px 12px' : '12px 16px',
      borderRadius: isMobile ? '8px' : '10px',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      color: '#e2e8f0',
      fontSize: isMobile ? '0.85rem' : '0.95rem',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      transition: isMobile ? 'none' : 'all 0.3s ease'
    },
    trekItemHover: {
      background: isMobile ? 'rgba(255, 255, 255, 0.06)' : 'rgba(255, 255, 255, 0.1)',
      transform: isMobile ? 'none' : 'translateX(5px)'
    },
    factBox: {
      background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(59, 130, 246, 0.15))',
      padding: isMobile ? '16px' : '20px',
      borderRadius: isMobile ? '10px' : '12px',
      border: '1px solid rgba(16, 185, 129, 0.3)',
      color: '#e2e8f0',
      fontSize: isMobile ? '0.9rem' : '1rem',
      lineHeight: '1.6',
      fontStyle: 'italic',
      textAlign: isMobile ? 'center' : 'left'
    },
    navigationDots: {
      display: 'flex',
      justifyContent: 'center',
      gap: isMobile ? '10px' : '15px',
      marginTop: isMobile ? '25px' : '40px',
      flexWrap: 'wrap'
    },
    dot: {
      width: isMobile ? '10px' : '14px',
      height: isMobile ? '10px' : '14px',
      borderRadius: '50%',
      background: 'rgba(255, 255, 255, 0.3)',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      border: '2px solid transparent'
    },
    activeDot: {
      background: '#3b82f6',
      transform: isMobile ? 'scale(1.2)' : 'scale(1.4)',
      borderColor: 'rgba(255, 255, 255, 0.5)'
    }
  };

  const [hoveredStat, setHoveredStat] = useState(null);
  const [hoveredTrek, setHoveredTrek] = useState(null);

  const animationStyles = `
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
    }

    @keyframes countUp {
      from { transform: translateY(20px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }

    .stat-number {
      animation: countUp 0.5s ease-out;
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .country-content {
      animation: fadeIn 0.8s ease-out;
    }

    @media (max-width: 767px) {
      .mobile-stack {
        flex-direction: column !important;
      }
    }
  `;

  return (
    <div style={styles.container}>
      <style>{animationStyles}</style>
      
      <div style={styles.header}>
        <h1 style={styles.title}>Mountain Countries Explorer</h1>
        <p style={styles.subtitle}>
          Discover the world's most spectacular mountain destinations and their unique characteristics
        </p>
      </div>
      
      <div style={styles.mainContent} className="country-content mobile-stack">
        {/* Left Panel - Country Overview & Stats */}
        <div style={styles.leftPanel}>
          <div style={styles.countryHeader}>
            <span style={styles.flag}>{countries[currentCountry].flag}</span>
            <div style={styles.countryInfo}>
              <h2 style={styles.countryName}>{countries[currentCountry].name}</h2>
              <p style={styles.countryCapital}>Capital: {countries[currentCountry].capital}</p>
            </div>
          </div>

          <div style={styles.section}>
            <h3 style={styles.sectionTitle}>📊 Country Statistics</h3>
            <div style={styles.detailGrid}>
              <div style={styles.detailCard}>
                <div style={styles.detailLabel}>Highest Peak</div>
                <div style={styles.detailValue}>{countries[currentCountry].highestPeak}</div>
              </div>
              <div style={styles.detailCard}>
                <div style={styles.detailLabel}>Elevation</div>
                <div style={styles.detailValue}>{countries[currentCountry].elevation}</div>
              </div>
              <div style={styles.detailCard}>
                <div style={styles.detailLabel}>Mountain Range</div>
                <div style={styles.detailValue}>{countries[currentCountry].mountainRange}</div>
              </div>
              <div style={styles.detailCard}>
                <div style={styles.detailLabel}>Total Area</div>
                <div style={styles.detailValue}>{countries[currentCountry].area}</div>
              </div>
            </div>
          </div>

          <div style={styles.section}>
            <h3 style={styles.sectionTitle}>🌤️ Best Season</h3>
            <div style={styles.detailCard}>
              <div style={styles.detailValue}>{countries[currentCountry].bestSeason}</div>
            </div>
          </div>

          <div style={styles.section}>
            <h3 style={styles.sectionTitle}>🚀 Global Stats</h3>
            <div style={styles.statsGrid}>
              {stats.map((stat, index) => (
                <div
                  key={stat.id}
                  style={{
                    ...styles.statCard,
                    ...(hoveredStat === stat.id && styles.statCardHover)
                  }}
                  onMouseEnter={() => !isMobile && setHoveredStat(stat.id)}
                  onMouseLeave={() => !isMobile && setHoveredStat(null)}
                >
                  <span style={styles.statIcon}>{stat.icon}</span>
                  <div className="stat-number" style={styles.statNumber}>
                    {counters[stat.id]}{stat.suffix}
                  </div>
                  <div style={styles.statLabel}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Panel - Detailed Information */}
        <div style={styles.rightPanel}>
          <div style={styles.section}>
            <h3 style={styles.sectionTitle}>🎯 Key Facts</h3>
            <div style={styles.factBox}>
              {countries[currentCountry].facts}
            </div>
          </div>

          <div style={styles.section}>
            <h3 style={styles.sectionTitle}>🥾 Popular Treks</h3>
            <div style={styles.treksList}>
              {countries[currentCountry].popularTreks.map((trek, index) => (
                <div
                  key={index}
                  style={{
                    ...styles.trekItem,
                    ...(hoveredTrek === index && styles.trekItemHover)
                  }}
                  onMouseEnter={() => !isMobile && setHoveredTrek(index)}
                  onMouseLeave={() => !isMobile && setHoveredTrek(null)}
                >
                  <span style={{color: '#10b981'}}>✓</span>
                  {trek}
                </div>
              ))}
            </div>
          </div>

          <div style={styles.section}>
            <h3 style={styles.sectionTitle}>🗺️ Mountain Range Info</h3>
            <div style={styles.detailGrid}>
              <div style={styles.detailCard}>
                <div style={styles.detailLabel}>Range Name</div>
                <div style={styles.detailValue}>{countries[currentCountry].mountainRange}</div>
              </div>
              <div style={styles.detailCard}>
                <div style={styles.detailLabel}>Highest Point</div>
                <div style={styles.detailValue}>{countries[currentCountry].highestPeak}</div>
              </div>
              <div style={styles.detailCard}>
                <div style={styles.detailLabel}>Location</div>
                <div style={styles.detailValue}>{countries[currentCountry].name}</div>
              </div>
              <div style={styles.detailCard}>
                <div style={styles.detailLabel}>Continent</div>
                <div style={styles.detailValue}>
                  {countries[currentCountry].name === 'Nepal' || countries[currentCountry].name === 'Japan' ? 'Asia' :
                   countries[currentCountry].name === 'Switzerland' ? 'Europe' :
                   countries[currentCountry].name === 'United States' ? 'North America' : 'South America'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Dots */}
      <div style={styles.navigationDots}>
        {countries.map((country, index) => (
          <div
            key={country.id}
            style={{
              ...styles.dot,
              ...(index === currentCountry && styles.activeDot)
            }}
            onClick={() => setCurrentCountry(index)}
            title={country.name}
          />
        ))}
      </div>
    </div>
  );
};

export default AnimatedMountain;