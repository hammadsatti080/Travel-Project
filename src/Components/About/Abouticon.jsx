import React, { useEffect, useRef, useState } from 'react';

const Abouticon = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Check if mobile on component mount and window resize
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

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
      window.removeEventListener('resize', checkMobile);
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // All services data
  const services = [
    {
      id: 1,
      icon: '🌊',
      title: 'Ocean Getaways',
      description: 'Experience pristine beaches and crystal-clear waters at our carefully selected coastal destinations around the world.'
    },
    {
      id: 2,
      icon: '⛰️',
      title: 'Mountain Adventures',
      description: 'Embark on thrilling expeditions to majestic mountain ranges with expert guides and top-tier equipment.'
    },
    {
      id: 3,
      icon: '✈️',
      title: 'Air Ticket Booking',
      description: 'Secure the best flight deals with our extensive network of airline partners and personalized booking service.'
    },
    {
      id: 4,
      icon: '🚗',
      title: 'Individual Transfer',
      description: 'Enjoy personalized transportation with private vehicles and dedicated drivers for maximum comfort and flexibility.'
    },
    {
      id: 5,
      icon: '👥',
      title: 'Group Transfer',
      description: 'Cost-effective shared transportation options for families and groups traveling together to the same destination.'
    }
  ];

  return (
    <div 
      ref={sectionRef}
      style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: isMobile ? '40px 15px' : '80px 20px',
        backgroundColor: '#ffffff'
      }}
    >
      {/* Section Header */}
      <div style={{
        textAlign: 'center',
        marginBottom: isMobile ? '40px' : '60px',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
        transition: 'all 0.8s ease-out'
      }}>
        <h2 style={{
          fontSize: isMobile ? '28px' : '42px',
          color: '#2A4B7C',
          fontWeight: '700',
          marginBottom: isMobile ? '15px' : '20px',
          lineHeight: '1.2'
        }}>
          Our Premium Travel Services
        </h2>
        <p style={{
          fontSize: isMobile ? '14px' : '18px',
          color: '#6C757D',
          maxWidth: '600px',
          margin: '0 auto',
          lineHeight: '1.6',
          padding: isMobile ? '0 10px' : '0'
        }}>
          Discover our comprehensive range of travel services designed to make your journey unforgettable
        </p>
      </div>

      {/* Services Grid - Mobile: 1 column, Tablet: 2 columns, Desktop: 3 columns */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : (window.innerWidth <= 1024 ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)'),
        gap: isMobile ? '20px' : '30px',
        justifyItems: 'center'
      }}>
        {services.map((service, index) => (
          <div
            key={service.id}
            style={{
              backgroundColor: 'white',
              padding: isMobile ? '25px 20px' : '35px 25px',
              borderRadius: '20px',
              boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
              textAlign: 'center',
              border: '1px solid #f8f9fa',
              transition: 'all 0.3s ease',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(60px)',
              transition: `all 0.6s ease-out ${index * 0.1}s`,
              width: isMobile ? '100%' : 'auto',
              maxWidth: isMobile ? '400px' : 'none'
            }}
            onMouseEnter={(e) => {
              if (!isMobile) {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 20px 50px rgba(0, 0, 0, 0.15)';
              }
            }}
            onMouseLeave={(e) => {
              if (!isMobile) {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.08)';
              }
            }}
          >
            {/* Icon */}
            <div style={{
              fontSize: isMobile ? '48px' : '64px',
              marginBottom: isMobile ? '20px' : '25px',
              height: isMobile ? '60px' : '80px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'transform 0.3s ease'
            }}>
              {service.icon}
            </div>

            {/* Title */}
            <h3 style={{
              fontSize: isMobile ? '18px' : '22px',
              color: '#2A4B7C',
              fontWeight: '600',
              marginBottom: isMobile ? '12px' : '15px',
              lineHeight: '1.3'
            }}>
              {service.title}
            </h3>

            {/* Description */}
            <p style={{
              fontSize: isMobile ? '13px' : '15px',
              color: '#6C757D',
              lineHeight: '1.6',
              margin: 0
            }}>
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Abouticon;