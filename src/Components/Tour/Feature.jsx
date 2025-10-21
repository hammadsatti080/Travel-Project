import React, { useCallback } from "react";
import { FaHotel, FaSearch, FaTags, FaMobileAlt, FaArrowRight, FaStar, FaGlobe } from "react-icons/fa";

export default function Feature() {
  const colorScheme = {
    primary: '#2c5aa0',
    secondary: '#f8f9fa',
    accent: '#ff6b35',
    text: {
      primary: '#212529',
      secondary: '#6c757d'
    }
  };

  const features = [
    {
      icon: <FaHotel />,
      title: "Choose from Over 1 Million Stays",
      description: "Book stays with Almosafer, from affordable stays to luxury accommodations! Compare rates and choose from over 1 million properties around the world with Almosafer."
    },
    {
      icon: <FaSearch />,
      title: "Quick and Easy Stay Search",
      description: "Booking stays online in any destination is easy with Almosafer. Compare prices, amenities, and star rating and pick your favourite based on location, convenience, dining options and more."
    },
    {
      icon: <FaTags />,
      title: "Exclusive Choice of Stays at Affordable Prices",
      description: "Browse affordable stays, compare rates and get the best deals with Almosafer. Book properties online and choose from affordable rates with special discounts at budget-friendly prices."
    },
    {
      icon: <FaMobileAlt />,
      title: "Book Stays at Your Own Comfort With Almosafer App",
      description: "Download the Almosafer app for free on Google Play and the App Store and get access to the best stay deals right at your fingertips. Choose and book stays on the app in a few simple steps."
    }
  ];

  // Optimized event handlers
  const handleCardMouseEnter = useCallback((e) => {
    e.currentTarget.style.transform = 'translateY(-12px)';
    e.currentTarget.style.boxShadow = '0 25px 50px rgba(0,0,0,0.15)';
  }, []);

  const handleCardMouseLeave = useCallback((e) => {
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.1)';
  }, []);

  const handleIconMouseEnter = useCallback((e) => {
    e.currentTarget.style.transform = 'scale(1.1) rotate(10deg)';
    e.currentTarget.style.background = 'linear-gradient(145deg, #e9ecef, #f8f9fa)';
  }, []);

  const handleIconMouseLeave = useCallback((e) => {
    e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
    e.currentTarget.style.background = 'linear-gradient(145deg, #f8f9fa, #e9ecef)';
  }, []);

  const handleButtonMouseEnter = useCallback((e) => {
    e.target.style.background = 'linear-gradient(145deg, #e9ecef, #f8f9fa)';
    e.target.style.transform = 'translateY(-3px)';
    e.target.style.boxShadow = '5px 5px 15px rgba(0,0,0,0.15), -5px -5px 15px rgba(255,255,255,0.8)';
  }, []);

  const handleButtonMouseLeave = useCallback((e) => {
    e.target.style.background = 'linear-gradient(145deg, #f8f9fa, #e9ecef)';
    e.target.style.transform = 'translateY(0)';
    e.target.style.boxShadow = '3px 3px 8px rgba(0,0,0,0.1), -3px -3px 8px rgba(255,255,255,0.8)';
  }, []);

  return (
    <div className="container py-5">
      <div className="row g-4">
        {features.map((feature, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-3">
            <div 
              className="card h-100 border-0 position-relative overflow-hidden"
              style={{
                background: 'linear-gradient(145deg, #ffffff, #f8f9fa)',
                borderRadius: '20px',
                cursor: 'pointer',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
                minHeight: '450px',
                willChange: 'transform, box-shadow',
                backfaceVisibility: 'hidden'
              }}
              onMouseEnter={handleCardMouseEnter}
              onMouseLeave={handleCardMouseLeave}
              role="article"
              tabIndex={0}
            >
              {/* Animated Border Effect */}
              <div 
                className="position-absolute top-0 start-0 w-100 h-100 opacity-0"
                style={{
                  background: 'linear-gradient(45deg, transparent, rgba(0,0,0,0.03), transparent)',
                  transition: 'opacity 0.3s ease',
                  borderRadius: '20px'
                }}
                onMouseEnter={(e) => e.target.style.opacity = '1'}
                onMouseLeave={(e) => e.target.style.opacity = '0'}
              />
              
              {/* Floating Background Pattern */}
              <div 
                className="position-absolute floating-element"
                style={{
                  top: '10%',
                  right: '10%',
                  opacity: 0.05,
                }}
              >
                <FaStar size={30} />
              </div>
              <div 
                className="position-absolute floating-element"
                style={{
                  bottom: '15%',
                  left: '10%',
                  opacity: 0.05,
                  animationDelay: '2s'
                }}
              >
                <FaGlobe size={25} />
              </div>

              <div className="card-body text-center p-4 position-relative d-flex flex-column" style={{zIndex: 2}}>
                {/* Animated Icon Container */}
                <div 
                  className="mx-auto mb-4 d-flex align-items-center justify-content-center position-relative"
                  style={{
                    width: '90px',
                    height: '90px',
                    background: 'linear-gradient(145deg, #f8f9fa, #e9ecef)',
                    borderRadius: '50%',
                    transition: 'all 0.4s ease',
                    boxShadow: '5px 5px 15px rgba(0,0,0,0.1), -5px -5px 15px rgba(255,255,255,0.7)'
                  }}
                  onMouseEnter={handleIconMouseEnter}
                  onMouseLeave={handleIconMouseLeave}
                >
                  <div 
                    style={{
                      color: colorScheme.text.primary,
                      fontSize: '36px',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'scale(1.2)';
                      e.target.style.color = colorScheme.accent;
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'scale(1)';
                      e.target.style.color = colorScheme.text.primary;
                    }}
                  >
                    {feature.icon}
                  </div>
                </div>

                {/* Title - Removed gradient text effect */}
                <h5 
                  className="fw-bold mb-3 position-relative"
                  style={{
                    color: colorScheme.text.primary,
                    fontSize: '1.2rem',
                    minHeight: '3.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {feature.title}
                </h5>

                {/* Description */}
                <p 
                  className="card-text mb-4 flex-grow-1"
                  style={{
                    color: colorScheme.text.secondary,
                    lineHeight: '1.6',
                    fontSize: '0.95rem',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = colorScheme.text.primary;
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = colorScheme.text.secondary;
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  {feature.description}
                </p>

                {/* Animated CTA Button */}
                <button 
                  className="btn d-flex align-items-center justify-content-center mx-auto border-0 px-4 py-2 mt-auto"
                  style={{
                    backgroundColor:"black",
                    color: "white",
                    borderRadius: '25px',
                    fontWeight: '600',
                    fontSize: '0.9rem',
                    transition: 'all 0.3s ease',
                    boxShadow: '3px 3px 8px rgba(0,0,0,0.1), -3px -3px 8px rgba(255,255,255,0.8)',
                    minWidth: '140px'
                  }}
                  onMouseEnter={handleButtonMouseEnter}
                  onMouseLeave={handleButtonMouseLeave}
                  aria-label={`Learn more about ${feature.title}`}
                >
                  Learn More 
                  <FaArrowRight 
                    className="ms-2" 
                    style={{ 
                      transition: 'transform 0.3s ease',
                      fontSize: '0.8rem'
                    }} 
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'translateX(5px)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'translateX(0)';
                    }}
                  />
                </button>
              </div>

              {/* Animated Bottom Accent */}
              <div 
                className="position-absolute bottom-0 start-50 translate-middle-x"
                style={{
                  width: '0%',
                  height: '3px',
                  background: `linear-gradient(90deg, transparent, ${colorScheme.accent}, transparent)`,
                  transition: 'width 0.4s ease',
                  borderRadius: '2px'
                }}
                onMouseEnter={(e) => {
                  e.target.style.width = '80%';
                }}
                onMouseLeave={(e) => {
                  e.target.style.width = '0%';
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Enhanced Animation Styles */}
      <style>
        {`
          @keyframes float {
            0%, 100% { 
              transform: translateY(0px) rotate(0deg); 
            }
            33% { 
              transform: translateY(-8px) rotate(3deg); 
            }
            66% { 
              transform: translateY(4px) rotate(-3deg); 
            }
          }
          
          .floating-element {
            animation: float 6s ease-in-out infinite;
          }
          
          @keyframes pulse {
            0%, 100% { opacity: 0.05; }
            50% { opacity: 0.1; }
          }
          
          .card {
            transform: translateZ(0);
          }
          
          .card:hover .floating-element {
            animation-duration: 3s;
          }
          
          /* Focus styles for accessibility */
          .card:focus {
            outline: 2px solid #2c5aa0;
            outline-offset: 2px;
          }
          
          /* Mobile responsiveness */
          @media (max-width: 768px) {
            .card {
              min-height: 400px !important;
            }
          }
        `}
      </style>
    </div>
  );
}