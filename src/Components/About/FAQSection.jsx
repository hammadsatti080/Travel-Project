import React, { useEffect, useRef, useState } from 'react';

const FAQSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
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

  const faqData = [
    {
      question: "How far in advance should I book my travel package?",
      answer: "We recommend booking at least 2-3 months in advance for international trips and 1-2 months for domestic travel. This ensures better availability and pricing for flights and accommodations."
    },
    {
      question: "What is your cancellation and refund policy?",
      answer: "We offer flexible cancellation policies. Full refunds are available up to 30 days before travel, 50% refund between 15-30 days, and travel credits for cancellations within 14 days. Some premium packages may have different terms."
    },
    {
      question: "Do you provide travel insurance?",
      answer: "Yes, we offer comprehensive travel insurance through our trusted partners. It covers medical emergencies, trip cancellations, lost baggage, and other unforeseen circumstances. Insurance can be added during booking."
    },
    {
      question: "Can I customize my travel itinerary?",
      answer: "Absolutely! We specialize in creating personalized itineraries. Our travel experts will work with you to design a trip that matches your preferences, budget, and travel style perfectly."
    },
    {
      question: "What support do you provide during the trip?",
      answer: "We provide 24/7 customer support throughout your journey. You'll have access to our local guides, emergency contact numbers, and a dedicated travel coordinator to assist with any issues."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div 
      ref={sectionRef}
      style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: isMobile ? '40px 15px' : '80px 20px',
        backgroundColor: colorPalette.background,
        overflow: 'hidden'
      }}
    >
      {/* Section Header */}
      <div style={{
        textAlign: 'center',
        marginBottom: isMobile ? '40px' : '60px',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(-50px) scale(0.9)',
        transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
      }}>
        <h2 style={{
          fontSize: isMobile ? '28px' : '42px',
          color: '#2A4B7C',
          fontWeight: '700',
          marginBottom: '15px',
          lineHeight: '1.2'
        }}>
          Frequently Asked Questions
        </h2>
        <p style={{
          fontSize: isMobile ? '16px' : '18px',
          color: colorPalette.textLight,
          maxWidth: '600px',
          margin: '0 auto',
          lineHeight: '1.6'
        }}>
          Find answers to common questions about our travel services and booking process
        </p>
      </div>

      <div style={{
        display: 'flex',
        gap: isMobile ? '30px' : '60px',
        alignItems: 'flex-start',
        flexDirection: isMobile ? 'column-reverse' : 'row'
      }}>
        
        {/* Left Div - FAQ Section (50%) */}
        <div style={{
          flex: '1',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateX(0)' : 'translateX(-80px)',
          transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s',
          width: '100%'
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '15px'
          }}>
            {faqData.map((faq, index) => (
              <FAQItem 
                key={index}
                faq={faq}
                index={index}
                isOpen={openIndex === index}
                onToggle={() => toggleFAQ(index)}
                isVisible={isVisible}
                colorPalette={colorPalette}
                isMobile={isMobile}
              />
            ))}
          </div>
        </div>

        {/* Right Div - Image (50%) */}
        <div style={{
          flex: '1',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateX(0) scale(1)' : 'translateX(80px) scale(0.9)',
          transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.4s',
          width: '100%',
          filter: isVisible ? 'blur(0)' : 'blur(10px)'
        }}>
          <div style={{
            width: '100%',
            height: isMobile ? '300px' : '500px',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: isVisible ? '0 25px 50px rgba(0, 0, 0, 0.15)' : '0 10px 20px rgba(0, 0, 0, 0.1)',
            position: 'relative',
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.6s ease-out 0.6s'
          }}>
            <img 
              src='./Homescreen/Countries/margallahills2.jpg' 
              alt='Travel Destination'
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
                transform: isVisible ? 'scale(1)' : 'scale(1.1)',
                transition: 'transform 1.2s ease-out 0.8s'
              }}
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentElement.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
                e.target.parentElement.style.display = 'flex';
                e.target.parentElement.style.alignItems = 'center';
                e.target.parentElement.style.justifyContent = 'center';
                e.target.parentElement.style.fontSize = isMobile ? '36px' : '48px';
                e.target.parentElement.style.color = 'white';
                e.target.parentElement.innerHTML = '✈️';
              }}
            />
            {/* Overlay Gradient */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.1) 0%, rgba(124, 58, 237, 0.2) 100%)',
              opacity: isVisible ? 1 : 0,
              transition: 'opacity 0.8s ease-out 1.0s'
            }} />
            
            {/* Floating Text Overlay */}
            <div style={{
              position: 'absolute',
              bottom: '30px',
              left: '30px',
              right: '30px',
              color: 'white',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.6s ease-out 1.2s'
            }}>
              <h3 style={{
                fontSize: isMobile ? '18px' : '24px',
                fontWeight: '700',
                marginBottom: '8px',
                textShadow: '0 2px 4px rgba(0,0,0,0.3)'
              }}>
                Your Journey Starts Here
              </h3>
              <p style={{
                fontSize: isMobile ? '14px' : '16px',
                textShadow: '0 1px 2px rgba(0,0,0,0.3)',
                lineHeight: '1.4'
              }}>
                Let us help you create unforgettable memories around the world
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// FAQ Item Component with Smooth Animations
const FAQItem = ({ faq, index, isOpen, onToggle, isVisible, colorPalette, isMobile }) => {
  return (
    <div style={{
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateX(0)' : 'translateX(-50px)',
      transition: `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1 + 0.3}s`,
      border: `1px solid ${isOpen ? colorPalette.primary : '#E2E8F0'}`,
      borderRadius: '15px',
      overflow: 'hidden',
      backgroundColor: isOpen ? `${colorPalette.primary}08` : '#FFFFFF',
      boxShadow: isOpen ? '0 10px 30px rgba(37, 99, 235, 0.15)' : '0 2px 10px rgba(0, 0, 0, 0.05)',
      transition: 'all 0.3s ease'
    }}
    onMouseEnter={(e) => {
      if (!isMobile && !isOpen) {
        e.currentTarget.style.transform = 'translateX(10px)';
        e.currentTarget.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
      }
    }}
    onMouseLeave={(e) => {
      if (!isMobile && !isOpen) {
        e.currentTarget.style.transform = 'translateX(0)';
        e.currentTarget.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
      }
    }}
    >
      {/* Question Header */}
      <div 
        style={{
          padding: isMobile ? '20px' : '25px',
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: isOpen ? `${colorPalette.primary}05` : 'transparent',
          transition: 'all 0.3s ease'
        }}
        onClick={onToggle}
      >
        <h3 style={{
          fontSize: isMobile ? '16px' : '18px',
          fontWeight: '600',
          color: isOpen ? colorPalette.primary : colorPalette.textDark,
          margin: 0,
          flex: 1,
          lineHeight: '1.4',
          transition: 'all 0.3s ease'
        }}>
          {faq.question}
        </h3>
        
        {/* Plus/Minus Icon */}
        <div style={{
          width: '24px',
          height: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50%',
          backgroundColor: isOpen ? colorPalette.primary : '#F1F5F9',
          color: isOpen ? 'white' : colorPalette.textLight,
          fontSize: '16px',
          fontWeight: '600',
          marginLeft: '15px',
          flexShrink: 0,
          transition: 'all 0.3s ease',
          transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)'
        }}>
          {isOpen ? '−' : '+'}
        </div>
      </div>

      {/* Answer Content */}
      <div style={{
        maxHeight: isOpen ? '500px' : '0',
        opacity: isOpen ? 1 : 0,
        overflow: 'hidden',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        transform: isOpen ? 'translateY(0)' : 'translateY(-10px)'
      }}>
        <div style={{
          padding: isOpen ? '0px 25px 25px 25px' : '0px 25px',
          color: colorPalette.textLight,
          fontSize: isMobile ? '14px' : '16px',
          lineHeight: '1.6'
        }}>
          {faq.answer}
          
          {/* Additional Info for some FAQs */}
          {index === 1 && (
            <div style={{
              marginTop: '15px',
              padding: '12px',
              backgroundColor: `${colorPalette.secondary}10`,
              borderRadius: '8px',
              borderLeft: `3px solid ${colorPalette.secondary}`
            }}>
              <strong>Note:</strong> Some premium and last-minute bookings may have different cancellation terms.
            </div>
          )}
          
          {index === 2 && (
            <div style={{
              marginTop: '15px',
              padding: '12px',
              backgroundColor: `${colorPalette.accent}10`,
              borderRadius: '8px',
              borderLeft: `3px solid ${colorPalette.accent}`
            }}>
              <strong>Coverage includes:</strong> Medical, trip cancellation, baggage loss, and emergency evacuation.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;