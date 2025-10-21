import React, { useEffect, useRef, useState } from 'react';

const TravelDreamSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      window.removeEventListener('resize', checkScreenSize);
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const colorPalette = {
    primary: '#2563EB',
    secondary: '#059669',
    accent: '#7C3AED',
    background: '#FFFFFF',
    textDark: '#1E293B',
    textLight: '#64748B'
  };

  const tourTypes = [
    { name: 'Small Day Tour', percentage: 80 },
    { name: 'Private Tour', percentage: 92 },
    { name: 'Multi Day Tour', percentage: 75 }
  ];

  return (
    <div 
      ref={sectionRef}
      style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: isMobile ? '30px 15px' : '80px 20px',
        backgroundColor: colorPalette.background,
        overflow: 'hidden'
      }}
    >
      <div style={{
        display: 'flex',
        gap: isMobile ? '25px' : '50px',
        alignItems: 'center',
        flexDirection: isMobile ? 'column' : 'row'
      }}>
        
        {/* Left Div - Image with Scale Animation */}
        <div style={{
          flex: '1',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateX(0) scale(1)' : (isMobile ? 'translateY(-50px) scale(0.9)' : 'translateX(-80px) scale(0.9)'),
          transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
          width: '100%',
          filter: isVisible ? 'blur(0)' : 'blur(10px)'
        }}>
          <div style={{
            width: '100%',
            height: isMobile ? '250px' : '500px',
            borderRadius: isMobile ? '15px' : '20px',
            overflow: 'hidden',
            boxShadow: isVisible ? '0 20px 40px rgba(0, 0, 0, 0.15)' : '0 10px 20px rgba(0, 0, 0, 0.1)',
            position: 'relative',
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.6s ease-out 0.3s'
          }}>
            <img 
              src='./Homescreen/Countries/MargallaHills.jpg' 
              alt='Margalla Hills'
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
                transform: isVisible ? 'scale(1)' : 'scale(1.1)',
                transition: 'transform 1.2s ease-out 0.5s'
              }}
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentElement.style.background = 'linear-gradient(135deg, #F1F5F9 0%, #E2E8F0 100%)';
                e.target.parentElement.style.display = 'flex';
                e.target.parentElement.style.alignItems = 'center';
                e.target.parentElement.style.justifyContent = 'center';
                e.target.parentElement.style.fontSize = isMobile ? '36px' : '48px';
                e.target.parentElement.style.color = colorPalette.primary;
                e.target.parentElement.innerHTML = '🏝️';
              }}
            />
            {/* Overlay Gradient */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(45deg, rgba(37, 99, 235, 0.1) 0%, rgba(124, 58, 237, 0.05) 100%)',
              opacity: isVisible ? 1 : 0,
              transition: 'opacity 0.8s ease-out 0.7s'
            }} />
          </div>
        </div>

        {/* Right Div - Content with Staggered Animations */}
        <div style={{
          flex: '1',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateX(0)' : (isMobile ? 'translateY(50px)' : 'translateX(80px)'),
          transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s',
          width: '100%',
          filter: isVisible ? 'blur(0)' : 'blur(10px)'
        }}>
          {/* Main Heading with Typewriter Effect */}
          <h2 style={{
            fontSize: isMobile ? '24px' : '42px',
            color: '#2A4B7C',
            fontWeight: '700',
            marginBottom: isMobile ? '12px' : '25px',
            lineHeight: '1.3',
            textAlign: isMobile ? 'center' : 'left',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.6s ease-out 0.4s'
          }}>
            Turn Your Vacation Dream Into Reality
          </h2>

          {/* Description Paragraph with Fade Up */}
          <p style={{
            fontSize: isMobile ? '14px' : '18px',
            color: colorPalette.textLight,
            lineHeight: '1.6',
            marginBottom: isMobile ? '30px' : '40px',
            textAlign: isMobile ? 'center' : 'left',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.6s ease-out 0.6s'
          }}>
            Experience unforgettable journeys crafted by our expert team. From quick getaways to extended adventures, 
            we make every trip extraordinary with personalized service and attention to detail.
          </p>

          {/* Tour Types with Staggered Animations */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: isMobile ? '20px' : '25px',
            marginBottom: isMobile ? '30px' : '40px'
          }}>
            {tourTypes.map((tour, index) => (
              <TourProgress 
                key={index}
                tour={tour}
                index={index}
                isVisible={isVisible}
                colorPalette={colorPalette}
                isMobile={isMobile}
              />
            ))}
          </div>

          {/* Stats with Bounce Animation */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
            gap: isMobile ? '15px' : '20px',
            textAlign: 'center'
          }}>
            <StatItem 
              number="50K+" 
              label="Happy Travelers" 
              icon="😊"
              isMobile={isMobile}
              isVisible={isVisible}
              delay={1.0}
            />
            <StatItem 
              number="100+" 
              label="Destinations" 
              icon="🌎"
              isMobile={isMobile}
              isVisible={isVisible}
              delay={1.1}
            />
            <StatItem 
              number="15+" 
              label="Years Experience" 
              icon="⭐"
              isMobile={isMobile}
              isVisible={isVisible}
              delay={1.2}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Tour Progress Component with Enhanced Animations
const TourProgress = ({ tour, index, isVisible, colorPalette, isMobile }) => {
  const colors = [colorPalette.primary, colorPalette.secondary, colorPalette.accent];
  
  return (
    <div style={{
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateX(0) scale(1)' : 'translateX(-30px) scale(0.95)',
      transition: `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.2 + 0.8}s`,
      padding: isMobile ? '15px' : '20px',
      backgroundColor: isMobile ? '#F8FAFC' : 'transparent',
      borderRadius: isMobile ? '12px' : '15px',
      border: isMobile ? '1px solid #E2E8F0' : '1px solid transparent',
      boxShadow: isVisible ? '0 5px 15px rgba(0, 0, 0, 0.08)' : '0 2px 5px rgba(0, 0, 0, 0.05)',
      transition: `all 0.4s ease-out ${index * 0.2 + 0.8}s`
    }}
    onMouseEnter={(e) => {
      if (!isMobile) {
        e.currentTarget.style.transform = 'translateX(10px) scale(1.02)';
        e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.15)';
        e.currentTarget.style.backgroundColor = '#FFFFFF';
      }
    }}
    onMouseLeave={(e) => {
      if (!isMobile) {
        e.currentTarget.style.transform = 'translateX(0) scale(1)';
        e.currentTarget.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.08)';
        e.currentTarget.style.backgroundColor = isMobile ? '#F8FAFC' : 'transparent';
      }
    }}
    >
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '12px'
      }}>
        <span style={{
          fontSize: isMobile ? '16px' : '18px',
          fontWeight: '600',
          color: colorPalette.textDark,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
          transition: `all 0.4s ease-out ${index * 0.2 + 1.0}s`
        }}>
          {tour.name}
        </span>
        <span style={{
          fontSize: isMobile ? '14px' : '16px',
          fontWeight: '700',
          color: colors[index],
          backgroundColor: isMobile ? `${colors[index]}15` : 'transparent',
          padding: isMobile ? '6px 12px' : '8px 16px',
          borderRadius: '20px',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'scale(1)' : 'scale(0)',
          transition: `all 0.4s ease-out ${index * 0.2 + 1.1}s`,
          boxShadow: `0 2px 8px ${colors[index]}40`
        }}>
          {tour.percentage}%
        </span>
      </div>
      
      {/* Progress Bar with Fill Animation */}
      <div style={{
        width: '100%',
        height: isMobile ? '6px' : '8px',
        backgroundColor: '#E2E8F0',
        borderRadius: '10px',
        overflow: 'hidden',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'scaleX(1)' : 'scaleX(0.8)',
        transition: `all 0.6s ease-out ${index * 0.2 + 1.0}s`
      }}>
        <div style={{
          width: isVisible ? `${tour.percentage}%` : '0%',
          height: '100%',
          backgroundColor: colors[index],
          borderRadius: '10px',
          transition: `all 1.5s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.2 + 1.2}s`,
          boxShadow: `0 2px 12px ${colors[index]}60`,
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Shimmer Effect */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: '-100%',
            width: '100%',
            height: '100%',
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
            animation: isVisible ? `shimmer 2s ease-out ${index * 0.2 + 2.0}s` : 'none'
          }} />
        </div>
      </div>
      
      {/* Percentage Description */}
      <p style={{
        fontSize: isMobile ? '12px' : '14px',
        color: colorPalette.textLight,
        marginTop: '8px',
        marginBottom: '0',
        lineHeight: '1.4',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
        transition: `all 0.4s ease-out ${index * 0.2 + 1.4}s`
      }}>
        {getPercentageDescription(tour.name, tour.percentage)}
      </p>
    </div>
  );
};

// Stat Item Component with Bounce Animation
const StatItem = ({ number, label, icon, isMobile, isVisible, delay }) => {
  return (
    <div style={{
      padding: isMobile ? '20px 15px' : '25px 20px',
      backgroundColor: '#F8FAFC',
      borderRadius: '15px',
      border: '1px solid #E2E8F0',
      transition: 'all 0.3s ease',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: isMobile ? '80px' : '100px',
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.8)',
      transition: `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s`
    }}
    onMouseEnter={(e) => {
      if (!isMobile) {
        e.currentTarget.style.transform = 'translateY(-8px) scale(1.05)';
        e.currentTarget.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.15)';
        e.currentTarget.style.backgroundColor = '#FFFFFF';
      }
    }}
    onMouseLeave={(e) => {
      if (!isMobile) {
        e.currentTarget.style.transform = 'translateY(0) scale(1)';
        e.currentTarget.style.boxShadow = 'none';
        e.currentTarget.style.backgroundColor = '#F8FAFC';
      }
    }}
    >
      <div style={{
        fontSize: isMobile ? '24px' : '28px',
        marginBottom: '8px',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'scale(1) rotate(0deg)' : 'scale(0) rotate(-180deg)',
        transition: `all 0.6s ease-out ${delay + 0.1}s`
      }}>
        {icon}
      </div>
      <div style={{
        fontSize: isMobile ? '20px' : '24px',
        fontWeight: '800',
        color: '#2563EB',
        marginBottom: '4px',
        lineHeight: '1',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
        transition: `all 0.4s ease-out ${delay + 0.2}s`
      }}>
        {number}
      </div>
      <div style={{
        fontSize: isMobile ? '12px' : '14px',
        color: '#64748B',
        fontWeight: '500',
        textAlign: 'center',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
        transition: `all 0.4s ease-out ${delay + 0.3}s`
      }}>
        {label}
      </div>
    </div>
  );
};

// Helper function for percentage descriptions
const getPercentageDescription = (tourName, percentage) => {
  const descriptions = {
    'Small Day Tour': `${percentage}% choose day trips`,
    'Private Tour': `${percentage}% satisfaction rate`,
    'Multi Day Tour': `${percentage}% prefer multi-day tours`
  };
  return descriptions[tourName] || `${percentage}% satisfaction rate`;
};

// Add CSS for shimmer animation
const styles = `
@keyframes shimmer {
  0% { left: -100%; }
  100% { left: 100%; }
}
`;

// Add styles to document
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
}

export default TravelDreamSection;