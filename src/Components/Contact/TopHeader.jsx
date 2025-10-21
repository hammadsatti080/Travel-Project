import React, { useEffect, useRef, useState } from 'react';

const TopHeader = () => {
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

  return (
    <div 
      ref={sectionRef}
      style={{
        width: '100%',
        minHeight: isMobile ? '40vh' : '50vh',
        background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Geometric Background Patterns */}
      <div style={{
        position: 'absolute',
        top: '-50%',
        left: '-10%',
        width: '60%',
        height: '200%',
        background: 'rgba(255,255,255,0.03)',
        transform: 'rotate(45deg)'
      }} />
      
      <div style={{
        position: 'absolute',
        bottom: '-50%',
        right: '-10%',
        width: '50%',
        height: '200%',
        background: 'rgba(255,255,255,0.02)',
        transform: 'rotate(-45deg)'
      }} />

      {/* Main Content */}
      <div style={{
        textAlign: 'center',
        position: 'relative',
        zIndex: 2,
        padding: isMobile ? '0 20px' : '0'
      }}>
        {/* Icon Animation */}
        <div style={{
          fontSize: isMobile ? '50px' : '70px',
          marginBottom: '20px',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'scale(1) rotate(0deg)' : 'scale(0) rotate(-180deg)',
          transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s',
          display: 'inline-block',
          animation: isVisible ? 'bounce 2s ease-in-out infinite' : 'none'
        }}>
          💬
        </div>

        {/* Main Heading */}
        <h1 style={{
          fontSize: isMobile ? '36px' : '64px',
          color: '#FFFFFF',
          fontWeight: '800',
          marginBottom: isMobile ? '12px' : '20px',
          lineHeight: '1.1',
          textShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.4s',
          background: 'linear-gradient(45deg, #FFFFFF, #E2E8F0, #FFFFFF)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          backgroundSize: '200% 200%',
          animation: isVisible ? 'shimmer 3s ease-in-out infinite' : 'none'
        }}>
          Contact Us
        </h1>

        {/* Subtitle with Typing Effect */}
        <p style={{
          fontSize: isMobile ? '16px' : '20px',
          color: 'rgba(255,255,255,0.9)',
          fontWeight: '300',
          maxWidth: '500px',
          margin: '0 auto',
          lineHeight: '1.5',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.8s ease-out 0.6s',
          textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
        }}>
          Ready to begin your journey? Let's connect and create unforgettable memories together.
        </p>

        {/* Animated Dots */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '8px',
          marginTop: '30px',
          opacity: isVisible ? 1 : 0,
          transition: 'all 0.8s ease-out 0.8s'
        }}>
          {[1, 2, 3].map((dot) => (
            <div 
              key={dot}
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: '#FFFFFF',
                opacity: 0.6,
                animation: isVisible ? `pulse 1.5s ease-in-out infinite ${dot * 0.2}s` : 'none'
              }}
            />
          ))}
        </div>
      </div>

      {/* CSS Animations */}
      <style>
        {`
          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% { transform: translateY(0) scale(1); }
            40% { transform: translateY(-10px) scale(1.1); }
            60% { transform: translateY(-5px) scale(1.05); }
          }
          
          @keyframes shimmer {
            0% { background-position: -200% center; }
            100% { background-position: 200% center; }
          }
          
          @keyframes pulse {
            0%, 100% { transform: scale(1); opacity: 0.6; }
            50% { transform: scale(1.2); opacity: 1; }
          }
        `}
      </style>
    </div>
  );
};

export default TopHeader;