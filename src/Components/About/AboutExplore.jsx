import React, { useEffect, useRef, useState } from 'react';

const AboutExplore = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const sectionRef = useRef(null);

  useEffect(() => {
    // ✅ Check screen size and update state
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', checkScreenSize);

    // ✅ Create Intersection Observer
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );

    const section = sectionRef.current; // ✅ Save ref snapshot
    if (section) observer.observe(section);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
      if (section) observer.unobserve(section); // ✅ Use saved ref
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: isMobile ? '30px 15px' : '40px 20px',
        backgroundColor: '#f8f9fa',
        minHeight: isMobile ? 'auto' : '300px',
        display: 'flex',
        alignItems: 'center',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
        transition: 'all 0.8s ease-out',
      }}
    >
      {/* Main Container */}
      <div
        style={{
          display: 'flex',
          gap: isMobile ? '30px' : '40px',
          alignItems: 'center',
          width: '100%',
          flexDirection: isMobile ? 'column' : 'row',
        }}
      >
        {/* Heading Section */}
        <div
          style={{
            flex: '1',
            padding: isMobile ? '15px' : '20px',
            opacity: isVisible ? 1 : 0,
            transform: isVisible
              ? 'translateX(0)'
              : isMobile
              ? 'translateY(-30px)'
              : 'translateX(-50px)',
            transition: 'all 0.6s ease-out 0.2s',
            textAlign: isMobile ? 'center' : 'left',
          }}
        >
          <h2
            style={{
              fontSize: isMobile ? '24px' : '28px',
              color: '#000000',
              fontWeight: '700',
              lineHeight: '1.3',
              marginBottom: isMobile ? '12px' : '15px',
              background: 'linear-gradient(45deg, #000000, #333333)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Your Dream Vacation Awaits
          </h2>
          <h3
            style={{
              fontSize: isMobile ? '18px' : '20px',
              color: '#FF6B6B',
              fontWeight: '600',
              lineHeight: '1.4',
              opacity: isVisible ? 1 : 0,
              transform: isVisible
                ? 'translateX(0)'
                : isMobile
                ? 'translateY(-20px)'
                : 'translateX(-30px)',
              transition: 'all 0.6s ease-out 0.4s',
            }}
          >
            Explore The World With Confidence
          </h3>
        </div>

        {/* Description Section */}
        <div
          style={{
            flex: '1',
            backgroundColor: 'white',
            padding: isMobile ? '20px' : '25px',
            borderRadius: '10px',
            boxShadow: '0 5px 20px rgba(0, 0, 0, 0.1)',
            minHeight: isMobile ? '150px' : '180px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            opacity: isVisible ? 1 : 0,
            transform: isVisible
              ? 'translateX(0)'
              : isMobile
              ? 'translateY(30px)'
              : 'translateX(50px)',
            transition: 'all 0.6s ease-out 0.3s',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Animated background shimmer */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: isVisible ? '100%' : '-100%',
              width: '100%',
              height: '100%',
              background:
                'linear-gradient(90deg, transparent, rgba(74, 144, 226, 0.1), transparent)',
              transition: 'left 0.8s ease-out 0.8s',
            }}
          />

          <p
            style={{
              fontSize: isMobile ? '15px' : '16px',
              color: '#6C757D',
              lineHeight: '1.6',
              marginBottom: isMobile ? '12px' : '15px',
              opacity: isVisible ? 1 : 0,
              transition: 'opacity 0.6s ease-out 0.6s',
            }}
          >
            At TravelEase, we believe that every journey should be extraordinary.
            Our team of travel experts curates personalized experiences to make
            your adventures unforgettable.
          </p>
          <p
            style={{
              fontSize: isMobile ? '15px' : '16px',
              color: '#6C757D',
              lineHeight: '1.6',
              opacity: isVisible ? 1 : 0,
              transition: 'opacity 0.6s ease-out 0.8s',
            }}
          >
            With over 15 years of experience in the travel industry, we ensure
            your trip is seamless, safe, and stress-free from start to finish.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutExplore;
