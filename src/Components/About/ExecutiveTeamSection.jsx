import React, { useEffect, useRef, useState } from 'react';

const ExecutiveTeamSection = () => {
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

  // Color Palette - Professional & Cohesive
  const colorPalette = {
    primary: '#2563EB',     // Professional Blue
    secondary: '#059669',   // Emerald Green
    accent: '#7C3AED',      // Purple
    background: '#F8FAFC',
    textDark: '#1E293B',
    textLight: '#64748B',
    cardBg: '#FFFFFF'
  };

  // Only Top 3 Executive Team Members
  const executiveTeam = [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'Chief Executive Officer',
      department: 'Executive Leadership',
      experience: '15+ years in travel industry',
      description: 'Visionary leader with extensive experience in global travel operations and customer experience management.',
      image: '👩‍💼',
      achievements: ['Founded TravelEase in 2010', 'Expanded to 50+ countries', 'Awarded Best Travel CEO 2023'],
      color: colorPalette.primary,
      flyDirection: 'left'
    },
    {
      id: 2,
      name: 'Michael Chen',
      position: 'Chief Operations Officer',
      department: 'Operations & Strategy',
      experience: '12+ years in operations',
      description: 'Operations expert specializing in process optimization and delivering exceptional travel experiences.',
      image: '👨‍💼',
      achievements: ['Streamlined 200+ processes', '99.8% customer satisfaction', 'Reduced costs by 30%'],
      color: colorPalette.secondary,
      flyDirection: 'bottom'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      position: 'Head of Travel Experiences',
      department: 'Customer Experience',
      experience: '10+ years in hospitality',
      description: 'Passionate about creating unforgettable travel memories and ensuring every journey is extraordinary.',
      image: '👩‍💼',
      achievements: ['Designed 5000+ itineraries', 'Luxury travel specialist', 'Multilingual expert'],
      color: colorPalette.accent,
      flyDirection: 'right'
    }
  ];

  return (
    <div 
      ref={sectionRef}
      style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: isMobile ? '40px 15px' : '80px 20px',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden'
      }}
    >
      <div style={{ width: '100%' }}>
        {/* Section Header with Fly-in Animation */}
        <div style={{
          textAlign: 'center',
          marginBottom: isMobile ? '50px' : '80px',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(-100px) scale(0.8)',
          transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s',
          filter: isVisible ? 'blur(0)' : 'blur(10px)'
        }}>
          <h2 style={{
            fontSize: isMobile ? '32px' : '52px',
            color: "#2A4B7C",
            backgroundColor:"#2A4B7C",
            fontWeight: '800',
            marginBottom: isMobile ? '15px' : '25px',
            lineHeight: '1.1',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Executive Leadership
          </h2>
          <p style={{
            fontSize: isMobile ? '16px' : '20px',
            color: colorPalette.textLight,
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: '1.6',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.6s ease-out 0.4s'
          }}>
            Meet the visionary leaders who drive our commitment to exceptional travel experiences
          </p>
        </div>

        {/* Executive Team Grid with Flyover Animations */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
          gap: isMobile ? '30px' : '40px',
          alignItems: 'stretch'
        }}>
          {executiveTeam.map((executive, index) => (
            <ExecutiveCard 
              key={executive.id}
              executive={executive}
              isVisible={isVisible}
              isMobile={isMobile}
              index={index}
              colorPalette={colorPalette}
            />
          ))}
        </div>

        {/* CTA Section with Fly-up Animation */}
    
        
      </div>
    </div>
  );
};

// Executive Card Component with Enhanced Flyover Animations
const ExecutiveCard = ({ executive, isVisible, isMobile, index, colorPalette }) => {
  const getInitialPosition = () => {
    switch (executive.flyDirection) {
      case 'left':
        return { x: -200, y: 0, rotate: -10 };
      case 'right':
        return { x: 200, y: 0, rotate: 10 };
      case 'bottom':
        return { x: 0, y: 200, rotate: 0 };
      default:
        return { x: 0, y: 100, rotate: 0 };
    }
  };

  const initialPos = getInitialPosition();

  return (
    <div 
      style={{
        backgroundColor: colorPalette.cardBg,
        padding: isMobile ? '30px 25px' : '50px 40px',
        borderRadius: '25px',
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        border: `2px solid ${executive.color}20`,
        opacity: isVisible ? 1 : 0,
        transform: isVisible 
          ? 'translate(0, 0) scale(1) rotate(0)' 
          : `translate(${initialPos.x}px, ${initialPos.y}px) scale(0.8) rotate(${initialPos.rotate}deg)`,
        transition: `all 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.3 + 0.5}s`,
        position: 'relative',
        overflow: 'hidden',
        minHeight: isMobile ? '500px' : '650px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        filter: isVisible ? 'blur(0)' : 'blur(5px)'
      }}
      onMouseEnter={(e) => {
        if (!isMobile) {
          e.currentTarget.style.transform = 'translateY(-15px) scale(1.02)';
          e.currentTarget.style.boxShadow = '0 30px 80px rgba(0, 0, 0, 0.15)';
        }
      }}
      onMouseLeave={(e) => {
        if (!isMobile) {
          e.currentTarget.style.transform = 'translateY(0) scale(1)';
          e.currentTarget.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.1)';
        }
      }}
    >
      {/* Animated Background Gradient */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '6px',
        background: `linear-gradient(90deg, ${executive.color}, ${colorPalette.accent})`,
        opacity: isVisible ? 0.9 : 0,
        transform: isVisible ? 'scaleX(1)' : 'scaleX(0)',
        transformOrigin: 'left',
        transition: `all 0.6s ease-out ${index * 0.3 + 0.7}s`
      }} />

      {/* Floating Particles Background */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: isVisible ? 0.1 : 0,
        transition: `opacity 0.8s ease-out ${index * 0.3 + 1}s`,
        background: `radial-gradient(circle at 20% 80%, ${executive.color}20 0%, transparent 50%),
                    radial-gradient(circle at 80% 20%, ${colorPalette.accent}20 0%, transparent 50%)`
      }} />

      {/* Profile Section */}
      <div>
        {/* Profile Icon with Bounce Animation */}
        <div style={{
          fontSize: isMobile ? '80px' : '100px',
          marginBottom: isMobile ? '20px' : '30px',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'scale(1) translateY(0)' : 'scale(0.3) translateY(50px)',
          transition: `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.3 + 0.6}s`,
          filter: isVisible ? 'drop-shadow(0 10px 20px rgba(0,0,0,0.1))' : 'drop-shadow(0 0 0 rgba(0,0,0,0))'
        }}>
          {executive.image}
        </div>

        {/* Name and Position with Staggered Animation */}
        <div style={{
          marginBottom: isMobile ? '20px' : '30px'
        }}>
          <h3 style={{
            fontSize: isMobile ? '24px' : '28px',
            color: colorPalette.textDark,
            fontWeight: '700',
            marginBottom: '8px',
            lineHeight: '1.2',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: `all 0.5s ease-out ${index * 0.3 + 0.8}s`
          }}>
            {executive.name}
          </h3>
          <div style={{
            backgroundColor: executive.color,
            color: 'white',
            padding: '8px 16px',
            borderRadius: '20px',
            fontSize: isMobile ? '14px' : '16px',
            fontWeight: '600',
            display: 'inline-block',
            marginBottom: '10px',
            boxShadow: `0 4px 15px ${executive.color}40`,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'scale(1)' : 'scale(0.8)',
            transition: `all 0.5s ease-out ${index * 0.3 + 0.9}s`
          }}>
            {executive.position}
          </div>
          <p style={{
            fontSize: isMobile ? '14px' : '16px',
            color: colorPalette.textLight,
            fontWeight: '500',
            margin: '5px 0',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(15px)',
            transition: `all 0.5s ease-out ${index * 0.3 + 1.0}s`
          }}>
            {executive.department}
          </p>
          <p style={{
            fontSize: '13px',
            color: executive.color,
            fontWeight: '600',
            margin: 0,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(15px)',
            transition: `all 0.5s ease-out ${index * 0.3 + 1.1}s`
          }}>
            {executive.experience}
          </p>
        </div>

        {/* Description with Fade-in */}
        <p style={{
          fontSize: isMobile ? '15px' : '16px',
          color: colorPalette.textLight,
          lineHeight: '1.6',
          marginBottom: isMobile ? '20px' : '30px',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: `all 0.5s ease-out ${index * 0.3 + 1.2}s`
        }}>
          {executive.description}
        </p>
      </div>

      {/* Achievements with Staggered Fly-in */}
      <div>
        <h4 style={{
          fontSize: isMobile ? '16px' : '18px',
          color: colorPalette.textDark,
          fontWeight: '600',
          marginBottom: '15px',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(15px)',
          transition: `all 0.5s ease-out ${index * 0.3 + 1.3}s`
        }}>
          Key Achievements
        </h4>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px'
        }}>
          {executive.achievements.map((achievement, achievementIndex) => (
            <div 
              key={achievementIndex}
              style={{
                backgroundColor: `${executive.color}10`,
                padding: '12px 15px',
                borderRadius: '12px',
                fontSize: '14px',
                color: colorPalette.textDark,
                fontWeight: '500',
                textAlign: 'left',
                borderLeft: `4px solid ${executive.color}`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateX(0)' : 'translateX(-30px)',
                transition: `all 0.5s ease-out ${index * 0.3 + 1.4 + achievementIndex * 0.1}s`,
                border: `1px solid ${executive.color}20`
              }}
            >
              <span style={{ 
                color: executive.color, 
                marginRight: '8px',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'scale(1)' : 'scale(0)',
                transition: `all 0.3s ease-out ${index * 0.3 + 1.5 + achievementIndex * 0.1}s`,
                display: 'inline-block'
              }}>
                ✓
              </span>
              {achievement}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Button Component
const Button = ({ variant, colorPalette, isMobile, children, onClick, ...props }) => {
  const isPrimary = variant === 'primary';
  
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: isPrimary ? colorPalette.primary : 'transparent',
        color: isPrimary ? 'white' : colorPalette.primary,
        border: isPrimary ? 'none' : `2px solid ${colorPalette.primary}`,
        padding: isMobile ? '12px 24px' : '15px 32px',
        borderRadius: '50px',
        fontSize: isMobile ? '14px' : '16px',
        fontWeight: '600',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        boxShadow: isPrimary ? `0 4px 15px ${colorPalette.primary}40` : 'none',
        transform: 'translateY(0)'
      }}
      onMouseEnter={(e) => {
        if (isPrimary) {
          e.target.style.backgroundColor = '#1D4ED8';
          e.target.style.transform = 'translateY(-2px)';
          e.target.style.boxShadow = `0 6px 20px ${colorPalette.primary}60`;
        } else {
          e.target.style.backgroundColor = colorPalette.primary;
          e.target.style.color = 'white';
          e.target.style.transform = 'translateY(-2px)';
        }
      }}
      onMouseLeave={(e) => {
        if (isPrimary) {
          e.target.style.backgroundColor = colorPalette.primary;
          e.target.style.transform = 'translateY(0)';
          e.target.style.boxShadow = `0 4px 15px ${colorPalette.primary}40`;
        } else {
          e.target.style.backgroundColor = 'transparent';
          e.target.style.color = colorPalette.primary;
          e.target.style.transform = 'translateY(0)';
        }
      }}
      {...props}
    >
      {children}
    </button>
  );
};

export default ExecutiveTeamSection;