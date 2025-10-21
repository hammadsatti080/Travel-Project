import React, { useEffect, useRef, useState } from 'react';

const ContactFormSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Save to localStorage
    const timestamp = new Date().toISOString();
    const formDataWithId = {
      id: timestamp,
      ...formData,
      submittedAt: timestamp
    };

    // Get existing data from localStorage
    const existingData = JSON.parse(localStorage.getItem('contactFormSubmissions') || '[]');
    
    // Add new submission
    const updatedData = [...existingData, formDataWithId];
    
    // Save back to localStorage
    localStorage.setItem('contactFormSubmissions', JSON.stringify(updatedData));
    
    // Show success message
    alert('Message sent successfully! We will get back to you soon.');
    
    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div 
      ref={sectionRef}
      style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: isMobile ? '40px 20px' : '80px 40px',
        backgroundColor: colorPalette.background
      }}
    >
      <div style={{
        display: 'flex',
        gap: isMobile ? '30px' : '50px',
        alignItems: 'stretch',
        flexDirection: isMobile ? 'column' : 'row'
      }}>
        
        {/* Left Div - Mobile Phone Image (50%) */}
        <div style={{
          flex: '1',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateX(0)' : 'translateX(-50px)',
          transition: 'all 0.8s ease-out'
        }}>
          <div style={{
            width: '100%',
            height: isMobile ? '300px' : '500px',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
            position: 'relative',
           // background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            color: "black",
            padding: '40px'
          }}>
            {/* Mobile Phone Illustration */}
            <div style={{
              fontSize: '80px',
              marginBottom: '20px',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'scale(1)' : 'scale(0.5)',
              transition: 'all 0.6s ease-out 0.3s'
            }}>
              <img src='https://tse3.mm.bing.net/th/id/OIP.NVH0ZQ8KV7Wzv90sc_USJQHaMc?pid=Api&P=0&h=220'></img>
            </div>
            
            <h3 style={{
              fontSize: isMobile ? '20px' : '24px',
              fontWeight: '600',
              marginBottom: '15px',
              textAlign: 'center',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.6s ease-out 0.5s'
            }}>
              Get in Touch Easily
            </h3>
            
            <p style={{
              fontSize: isMobile ? '14px' : '16px',
              opacity: 0.9,
              textAlign: 'center',
              lineHeight: '1.5',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.6s ease-out 0.7s'
            }}>
              Fill out the form and we'll get back to you within 24 hours. 
              Your journey to amazing experiences starts here.
            </p>
            
            {/* Decorative Elements */}
            <div style={{
              position: 'absolute',
              bottom: '20px',
              right: '20px',
              fontSize: '24px',
              opacity: 0.3
            }}>
              💬
            </div>
          </div>
        </div>

        {/* Right Div - Contact Form (50%) */}
        <div style={{
          flex: '1',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateX(0)' : 'translateX(50px)',
          transition: 'all 0.8s ease-out 0.2s'
        }}>
          <div style={{
            backgroundColor: colorPalette.white,
            padding: isMobile ? '30px 25px' : '40px 35px',
            borderRadius: '20px',
            boxShadow: '0 15px 35px rgba(0, 0, 0, 0.08)',
            border: '1px solid #F1F5F9',
            height: '100%'
          }}>
            <h2 style={{
              fontSize: isMobile ? '24px' : '28px',
              color: colorPalette.textDark,
              fontWeight: '700',
              marginBottom: '5px',
              textAlign: 'center'
            }}>
              Send us a Message
            </h2>
            
            <p style={{
              fontSize: isMobile ? '14px' : '16px',
              color: colorPalette.textLight,
              textAlign: 'center',
              marginBottom: '30px'
            }}>
              We'd love to hear from you
            </p>

            <form onSubmit={handleSubmit}>
              {/* Name Field */}
              <div style={{ marginBottom: '20px' }}>
                <label style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: '600',
                  color: colorPalette.textDark,
                  marginBottom: '8px'
                }}>
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '2px solid #E2E8F0',
                    borderRadius: '10px',
                    fontSize: '16px',
                    transition: 'all 0.3s ease',
                    backgroundColor: '#F8FAFC'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = colorPalette.primary;
                    e.target.style.backgroundColor = colorPalette.white;
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#E2E8F0';
                    e.target.style.backgroundColor = '#F8FAFC';
                  }}
                  placeholder="Enter your full name"
                />
              </div>

              {/* Phone and Email in Row on Desktop */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
                gap: '15px',
                marginBottom: '20px'
              }}>
                {/* Phone Field */}
                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '14px',
                    fontWeight: '600',
                    color: colorPalette.textDark,
                    marginBottom: '8px'
                  }}>
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      border: '2px solid #E2E8F0',
                      borderRadius: '10px',
                      fontSize: '16px',
                      transition: 'all 0.3s ease',
                      backgroundColor: '#F8FAFC'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = colorPalette.primary;
                      e.target.style.backgroundColor = colorPalette.white;
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#E2E8F0';
                      e.target.style.backgroundColor = '#F8FAFC';
                    }}
                    placeholder="Your phone number"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '14px',
                    fontWeight: '600',
                    color: colorPalette.textDark,
                    marginBottom: '8px'
                  }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      border: '2px solid #E2E8F0',
                      borderRadius: '10px',
                      fontSize: '16px',
                      transition: 'all 0.3s ease',
                      backgroundColor: '#F8FAFC'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = colorPalette.primary;
                      e.target.style.backgroundColor = colorPalette.white;
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#E2E8F0';
                      e.target.style.backgroundColor = '#F8FAFC';
                    }}
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              {/* Subject Field */}
              <div style={{ marginBottom: '20px' }}>
                <label style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: '600',
                  color: colorPalette.textDark,
                  marginBottom: '8px'
                }}>
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '2px solid #E2E8F0',
                    borderRadius: '10px',
                    fontSize: '16px',
                    transition: 'all 0.3s ease',
                    backgroundColor: '#F8FAFC'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = colorPalette.primary;
                    e.target.style.backgroundColor = colorPalette.white;
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#E2E8F0';
                    e.target.style.backgroundColor = '#F8FAFC';
                  }}
                  placeholder="What is this regarding?"
                />
              </div>

              {/* Message Field */}
              <div style={{ marginBottom: '25px' }}>
                <label style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: '600',
                  color: colorPalette.textDark,
                  marginBottom: '8px'
                }}>
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="5"
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '2px solid #E2E8F0',
                    borderRadius: '10px',
                    fontSize: '16px',
                    transition: 'all 0.3s ease',
                    backgroundColor: '#F8FAFC',
                    resize: 'vertical',
                    fontFamily: 'inherit'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = colorPalette.primary;
                    e.target.style.backgroundColor = colorPalette.white;
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#E2E8F0';
                    e.target.style.backgroundColor = '#F8FAFC';
                  }}
                  placeholder="Tell us about your travel plans or questions..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                style={{
                  width: '100%',
                 // backgroundColor: colorPalette.primary,
                 backgroundColor: "black",
                  color: colorPalette.white,
                  border: 'none',
                  padding: '15px 20px',
                  borderRadius: '12px',
                  fontSize: '16px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 15px rgba(37, 99, 235, 0.3)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#1D4ED8';
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 6px 20px rgba(37, 99, 235, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = colorPalette.primary;
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 4px 15px rgba(37, 99, 235, 0.3)';
                }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactFormSection;