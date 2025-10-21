import React, { useEffect, useRef, useState } from 'react';

const Header = () => {
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
    textDark: '#000000', // Black text
    textLight: '#374151',
    white: '#FFFFFF'
  };

  const contactData = [
    {
      icon: '📞',
      title: 'Phone',
      details: ['+1 (555) 123-4567', '+1 (555) 987-6543'],
      description: 'Call us for instant support'
    },
    {
      icon: '📍',
      title: 'Address',
      details: ['123 Travel Street', 'Adventure City, AC 12345', 'United States'],
      description: 'Visit our office'
    },
    {
      icon: '✉️',
      title: 'Email',
      details: ['info@travelease.com', 'support@travelease.com'],
      description: 'Send us an email'
    }
  ];

  return (
    <div 
      ref={sectionRef}
      style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: isMobile ? '40px 20px' : '60px 40px',
        backgroundColor: colorPalette.background
      }}
    >
      {/* Section Header */}
      <div style={{
        textAlign: 'center',
        marginBottom: isMobile ? '40px' : '60px',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(-40px) scale(0.9)',
        transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
      }}>
        <h2 style={{
          fontSize: isMobile ? '28px' : '42px',
          color: colorPalette.textDark,
          fontWeight: '700',
          marginBottom: '15px',
          lineHeight: '1.2'
        }}>
          Get In Touch
        </h2>
        <p style={{
          fontSize: isMobile ? '16px' : '18px',
          color: colorPalette.textLight,
          maxWidth: '600px',
          margin: '0 auto',
          lineHeight: '1.6'
        }}>
          We're here to help you plan your next adventure
        </p>
      </div>

      {/* Contact Info Grid - 3 Sub-divs */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
        gap: isMobile ? '25px' : '30px',
        alignItems: 'stretch'
      }}>
        {contactData.map((contact, index) => (
          <ContactCard 
            key={index}
            contact={contact}
            index={index}
            isVisible={isVisible}
            colorPalette={colorPalette}
            isMobile={isMobile}
          />
        ))}
      </div>

      {/* Additional Info */}
      <div style={{
        marginTop: isMobile ? '40px' : '60px',
        padding: isMobile ? '25px 20px' : '40px 30px',
        backgroundColor: '#F8FAFC',
        borderRadius: '15px',
        textAlign: 'center',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transition: 'all 0.8s ease-out 1.0s',
        border: '1px solid #E5E7EB'
      }}>
        <h3 style={{
          fontSize: isMobile ? '20px' : '24px',
          color: colorPalette.textDark,
          fontWeight: '600',
          marginBottom: '15px'
        }}>
          Business Hours
        </h3>
        <p style={{
          fontSize: isMobile ? '14px' : '16px',
          color: colorPalette.textLight,
          marginBottom: '8px',
          lineHeight: '1.5'
        }}>
          <strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM
        </p>
        <p style={{
          fontSize: isMobile ? '14px' : '16px',
          color: colorPalette.textLight,
          marginBottom: '0',
          lineHeight: '1.5'
        }}>
          <strong>Saturday - Sunday:</strong> 10:00 AM - 4:00 PM
        </p>
      </div>
    </div>
  );
};

// Contact Card Component
const ContactCard = ({ contact, index, isVisible, colorPalette, isMobile }) => {
  return (
    <div style={{
      backgroundColor: colorPalette.white,
      padding: isMobile ? '25px 20px' : '35px 30px',
      borderRadius: '15px',
      boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
      textAlign: 'center',
      border: '1px solid #F3F4F6',
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(50px) scale(0.9)',
      transition: `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.2 + 0.3}s`,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: isMobile ? '200px' : '250px',
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    }}
    onMouseEnter={(e) => {
      if (!isMobile) {
        e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
        e.currentTarget.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.12)';
        e.currentTarget.style.borderColor = colorPalette.primary;
      }
    }}
    onMouseLeave={(e) => {
      if (!isMobile) {
        e.currentTarget.style.transform = 'translateY(0) scale(1)';
        e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.08)';
        e.currentTarget.style.borderColor = '#F3F4F6';
      }
    }}
    >
      {/* Icon */}
      <div style={{
        fontSize: isMobile ? '40px' : '48px',
        marginBottom: isMobile ? '15px' : '20px',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'scale(1)' : 'scale(0.5)',
        transition: `all 0.6s ease-out ${index * 0.2 + 0.5}s`
      }}>
        {contact.icon}
      </div>

      {/* Title */}
      <h3 style={{
        fontSize: isMobile ? '20px' : '22px',
        color: colorPalette.textDark,
        fontWeight: '600',
        marginBottom: isMobile ? '12px' : '15px',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(15px)',
        transition: `all 0.5s ease-out ${index * 0.2 + 0.6}s`
      }}>
        {contact.title}
      </h3>

      {/* Details */}
      <div style={{
        marginBottom: isMobile ? '10px' : '12px',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(15px)',
        transition: `all 0.5s ease-out ${index * 0.2 + 0.7}s`
      }}>
        {contact.details.map((detail, detailIndex) => (
          <p key={detailIndex} style={{
            fontSize: isMobile ? '14px' : '16px',
            color: colorPalette.textDark,
            fontWeight: '500',
            margin: '4px 0',
            lineHeight: '1.4'
          }}>
            {detail}
          </p>
        ))}
      </div>

      {/* Description */}
      <p style={{
        fontSize: isMobile ? '13px' : '14px',
        color: colorPalette.textLight,
        margin: '0',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(15px)',
        transition: `all 0.5s ease-out ${index * 0.2 + 0.8}s`,
        fontStyle: 'italic'
      }}>
        {contact.description}
      </p>
    </div>
  );
};

export default Header;