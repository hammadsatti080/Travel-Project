import React, { useEffect, useRef, useState } from 'react';

const ExplorePlaces = () => {
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
      { threshold: 0.3 }
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
    textLight: '#64748B',
    white: '#FFFFFF'
  };

  return (
    <div 
      ref={sectionRef}
      style={{
        width: '100%',
        minHeight: isMobile ? '45vh' : '55vh', // Further reduced height
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('./Homescreen/Countries/MargallaHills.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center 30%', // Adjusted background position
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Main Content Container */}
      <div style={{
        maxWidth: '1200px',
        width: '100%',
        margin: '0 auto',
        padding: isMobile ? '25px 20px' : '35px 30px', // Further reduced padding
        textAlign: 'center',
        position: 'relative',
        zIndex: 2,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between', // Better space distribution
        alignItems: 'center',
        minHeight: '100%',
        gap: isMobile ? '15px' : '20px' // Added gap for better spacing
      }}>
        
        {/* Top Section - Main Content */}
        <div style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.9)',
          transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1
        }}>
          {/* Icon and Heading Group */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: isMobile ? '12px' : '18px'
          }}>
            <div style={{
              fontSize: isMobile ? '28px' : '36px', // Smaller icon
              marginBottom: isMobile ? '8px' : '12px',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'scale(1)' : 'scale(0.5)',
              transition: 'all 0.6s ease-out 0.3s',
              display: 'inline-block'
            }}>
              ✈️
            </div>
            
            <h1 style={{
              fontSize: isMobile ? '20px' : '32px', // Compact heading
              color: colorPalette.white,
              fontWeight: '800',
              marginBottom: isMobile ? '8px' : '12px',
              lineHeight: '1.1', // Tighter line height
              textShadow: '0 3px 6px rgba(0, 0, 0, 0.4)',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(15px)',
              transition: 'all 0.8s ease-out 0.4s',
              maxWidth: '90%'
            }}>
              Dare to Explore with Travel
            </h1>
          </div>
          
          {/* Subtitle - Single Line */}
          <p style={{
            fontSize: isMobile ? '13px' : '16px', // Smaller subtitle
            color: colorPalette.white,
            fontWeight: '400',
            maxWidth: '400px', // Much narrower
            margin: '0 auto',
            lineHeight: '1.3',
            textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(15px)',
            transition: 'all 0.8s ease-out 0.6s'
          }}>
            Discover hidden gems worldwide
          </p>
        </div>

        {/* Stats Section - Compact and Integrated */}
        <div style={{
          backgroundColor: colorPalette.white,
          borderRadius: '10px',
          padding: isMobile ? '12px 10px' : '15px 20px',
          boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
          maxWidth: '800px',
          width: '95%',
          margin: '0 auto',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.8s ease-out 0.8s',
          position: 'relative'
        }}>
          {/* Stats Row - Ultra Compact */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
            gap: isMobile ? '8px' : '10px', // Very tight gap
            textAlign: 'center',
            alignItems: 'center'
          }}>
            <StatItem 
              number="50K+" 
              label="Travelers" // Shorter label
              icon="😊"
              isMobile={isMobile}
              isVisible={isVisible}
              delay={1.0}
              compact={true}
            />
            <StatItem 
              number="100+" 
              label="Destinations" 
              icon="🌎"
              isMobile={isMobile}
              isVisible={isVisible}
              delay={1.1}
              compact={true}
            />
            <StatItem 
              number="15+" 
              label="Experience" // Shorter label
              icon="⭐"
              isMobile={isMobile}
              isVisible={isVisible}
              delay={1.2}
              compact={true}
            />
          </div>
        </div>
      </div>

      {/* Subtle Background Overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(45deg, rgba(37, 99, 235, 0.08) 0%, rgba(124, 58, 237, 0.06) 100%)',
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 1.2s ease-out 0.5s'
      }} />
    </div>
  );
};

// Ultra Compact Stat Item Component
const StatItem = ({ number, label, icon, isMobile, isVisible, delay, compact }) => {
  return (
    <div style={{
      padding: isMobile ? '8px 4px' : '10px 6px',
      backgroundColor: '#F8FAFC',
      borderRadius: '8px',
      border: '1px solid #E2E8F0',
      transition: 'all 0.3s ease',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: isMobile ? '50px' : '60px', // Very compact
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(12px) scale(0.9)',
      transition: `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s`
    }}
    onMouseEnter={(e) => {
      if (!isMobile) {
        e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)';
        e.currentTarget.style.boxShadow = '0 6px 15px rgba(0, 0, 0, 0.08)';
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
      {/* Icon and Number in Row for Mobile */}
      {isMobile ? (
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '6px',
          marginBottom: '2px'
        }}>
          <div style={{
            fontSize: '16px',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'scale(1)' : 'scale(0)',
            transition: `all 0.6s ease-out ${delay + 0.1}s`
          }}>
            {icon}
          </div>
          <div style={{
            fontSize: '16px',
            fontWeight: '800',
            color: '#2563EB',
            lineHeight: '1',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(4px)',
            transition: `all 0.4s ease-out ${delay + 0.2}s`
          }}>
            {number}
          </div>
        </div>
      ) : (
        <>
          <div style={{
            fontSize: '18px',
            marginBottom: '2px',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'scale(1)' : 'scale(0)',
            transition: `all 0.6s ease-out ${delay + 0.1}s`
          }}>
            {icon}
          </div>
          <div style={{
            fontSize: '16px',
            fontWeight: '800',
            color: '#2563EB',
            marginBottom: '1px',
            lineHeight: '1',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(4px)',
            transition: `all 0.4s ease-out ${delay + 0.2}s`
          }}>
            {number}
          </div>
        </>
      )}
      
      <div style={{
        fontSize: isMobile ? '9px' : '10px',
        color: '#64748B',
        fontWeight: '500',
        textAlign: 'center',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(4px)',
        transition: `all 0.4s ease-out ${delay + 0.3}s`
      }}>
        {label}
      </div>
    </div>
  );
};

export default ExplorePlaces;