import React, { useState, useEffect } from 'react';

const AboutJourney = () => {
  // Milestones data
  const milestones = [
    {
      year: "2015",
      title: "Company Founded",
      description: "Started with a vision to revolutionize travel experiences",
      icon: "🚀",
      stats: "1 City"
    },
    {
      year: "2017",
      title: "First 10,000 Travelers",
      description: "Reached our first major milestone of serving 10,000 happy customers",
      icon: "👥",
      stats: "10K+ Travelers"
    },
    {
      year: "2019",
      title: "Global Expansion",
      description: "Expanded our services to 50+ countries worldwide",
      icon: "🌎",
      stats: "50+ Countries"
    },
    {
      year: "2021",
      title: "Award Winning Service",
      description: "Received 'Best Travel Company' award for exceptional service",
      icon: "🏆",
      stats: "5 Awards"
    },
    {
      year: "2023",
      title: "1 Million Travelers",
      description: "Celebrated serving over 1 million travelers globally",
      icon: "🎉",
      stats: "1M+ Travelers"
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "New York, USA",
      rating: 5,
      text: "Amazing experience! The travel arrangements were flawless and the destinations were breathtaking.",
      photo: "👩‍💼",
      date: "Jan 2024",
      milestone: "Global Expansion"
    },
    {
      id: 2,
      name: "Mike Chen",
      location: "Tokyo, Japan",
      rating: 5,
      text: "Great service and excellent guides. Would definitely recommend to friends and family.",
      photo: "👨‍💼",
      date: "Dec 2023",
      milestone: "Award Winning"
    },
    {
      id: 3,
      name: "Emma Davis",
      location: "London, UK",
      rating: 5,
      text: "Best travel company I've ever used. Everything was perfectly organized from start to finish.",
      photo: "👩‍🎓",
      date: "Nov 2023",
      milestone: "1M Travelers"
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [activeMilestone, setActiveMilestone] = useState(0);
  const [email, setEmail] = useState('');
  const [destination, setDestination] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setShowConfetti(true);
      setIsSubmitting(false);
      setEmail('');
      setDestination('');
      setTimeout(() => setShowConfetti(false), 3000);
    }, 1500);
  };

  // ========== RESPONSIVE STYLES ==========

  // Main container style
  const containerStyle = {
    background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
    minHeight: 'auto',
    color: 'white',
    fontFamily: "'Inter', sans-serif",
    padding: isMobile ? '1rem 0.5rem' : '2rem 1rem',
    position: 'relative',
    overflow: 'hidden'
  };

  // Floating elements - Hide on mobile
  const floatingElements = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    pointerEvents: 'none',
    zIndex: 1,
    display: isMobile ? 'none' : 'block'
  };

  const floatingElement = (top, left, delay, emoji) => ({
    position: 'absolute',
    top: `${top}%`,
    left: `${left}%`,
    fontSize: isMobile ? '1rem' : '1.5rem',
    animation: `float 6s ease-in-out ${delay}s infinite`,
    opacity: 0.3
  });

  // Header styles
  const headerStyle = {
    textAlign: 'center',
    padding: isMobile ? '1rem 0.5rem 0.5rem' : '2rem 1rem 1rem',
    marginBottom: isMobile ? '1rem' : '2rem',
    position: 'relative',
    zIndex: 2
  };

  const titleStyle = {
    fontSize: isMobile ? '1.8rem' : '2.5rem',
    fontWeight: '300',
    background: 'linear-gradient(45deg, #667eea, #764ba2, #f093fb)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    color: 'transparent',
    marginBottom: '0.5rem',
    padding: isMobile ? '0 0.5rem' : '0'
  };

  const subtitleStyle = {
    fontSize: isMobile ? '0.9rem' : '1rem',
    color: '#ccc',
    maxWidth: '500px',
    margin: '0 auto',
    lineHeight: '1.4',
    padding: isMobile ? '0 0.5rem' : '0'
  };

  // Responsive content layout
  const contentStyle = {
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
    gap: isMobile ? '1.5rem' : '2rem',
    maxWidth: '1200px',
    margin: '0 auto',
    alignItems: 'start',
    position: 'relative',
    zIndex: 2
  };

  const rightSideContainer = {
    display: 'flex',
    flexDirection: 'column',
    gap: isMobile ? '1.5rem' : '2rem'
  };

  // Section title common style
  const sectionTitleStyle = {
    fontSize: isMobile ? '1.3rem' : '1.5rem',
    marginBottom: isMobile ? '1rem' : '1.5rem',
    textAlign: 'center',
    color: '#fff',
    fontWeight: '300'
  };

  // ========== TIMELINE STYLES ==========
  const timelineSectionStyle = {
    background: 'rgba(255, 255, 255, 0.02)',
    borderRadius: '15px',
    padding: isMobile ? '1rem' : '1.5rem',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    height: 'fit-content'
  };

  const timelineStyle = {
    position: 'relative',
    paddingLeft: isMobile ? '0.5rem' : '1rem'
  };

  const timelineLineStyle = {
    position: 'absolute',
    left: isMobile ? '20px' : '25px',
    top: '10px',
    bottom: '10px',
    width: '2px',
    background: 'linear-gradient(to bottom, #667eea, #764ba2)'
  };

  const milestoneItemStyle = (index) => ({
    display: 'flex',
    alignItems: 'center',
    marginBottom: isMobile ? '1rem' : '1.5rem',
    position: 'relative',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    transform: index === activeMilestone ? 'scale(1.02)' : 'scale(1)'
  });

  const milestoneDotStyle = (index) => ({
    width: isMobile ? '35px' : '45px',
    height: isMobile ? '35px' : '45px',
    borderRadius: '50%',
    background: index === activeMilestone 
      ? 'linear-gradient(45deg, #667eea, #764ba2)'
      : 'rgba(255, 255, 255, 0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: isMobile ? '1rem' : '1.2rem',
    marginRight: isMobile ? '0.8rem' : '1rem',
    border: index === activeMilestone ? '2px solid #fff' : '2px solid rgba(255, 255, 255, 0.3)',
    flexShrink: 0
  });

  const milestoneContentStyle = {
    flex: 1,
    background: 'rgba(255, 255, 255, 0.05)',
    padding: isMobile ? '0.8rem' : '1rem',
    borderRadius: '10px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    minHeight: isMobile ? '70px' : '80px'
  };

  const activeMilestoneContentStyle = {
    ...milestoneContentStyle,
    background: 'rgba(102, 126, 234, 0.1)'
  };

  const milestoneYearStyle = {
    fontSize: isMobile ? '0.7rem' : '0.8rem',
    color: '#667eea',
    fontWeight: 'bold',
    marginBottom: '0.3rem'
  };

  const milestoneTitleStyle = {
    fontSize: isMobile ? '0.9rem' : '1rem',
    marginBottom: '0.3rem',
    color: '#fff'
  };

  const milestoneDescStyle = {
    color: '#ccc',
    fontSize: isMobile ? '0.7rem' : '0.75rem',
    lineHeight: '1.3',
    marginBottom: '0.3rem'
  };

  const milestoneStatsStyle = {
    color: '#667eea',
    fontSize: isMobile ? '0.65rem' : '0.7rem',
    fontWeight: 'bold'
  };

  // ========== TESTIMONIALS STYLES ==========
  const testimonialsSectionStyle = {
    background: 'rgba(255, 255, 255, 0.02)',
    borderRadius: '15px',
    padding: isMobile ? '1rem' : '1.5rem',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    height: 'fit-content'
  };

  const testimonialCardStyle = {
    background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1))',
    borderRadius: '12px',
    padding: isMobile ? '1rem' : '1.5rem',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    minHeight: isMobile ? '180px' : '200px'
  };

  const testimonialHeaderStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: isMobile ? '0.8rem' : '1rem'
  };

  const testimonialPhotoStyle = {
    fontSize: isMobile ? '2rem' : '2.5rem',
    marginRight: isMobile ? '0.8rem' : '1rem'
  };

  const testimonialNameStyle = {
    fontSize: isMobile ? '1rem' : '1.1rem',
    fontWeight: 'bold',
    marginBottom: '0.2rem'
  };

  const testimonialLocationStyle = {
    color: '#ccc',
    fontSize: isMobile ? '0.75rem' : '0.8rem',
    marginBottom: '0.3rem'
  };

  const testimonialRatingStyle = {
    color: '#ffd700',
    fontSize: isMobile ? '0.9rem' : '1rem'
  };

  const testimonialTextStyle = {
    fontSize: isMobile ? '0.85rem' : '0.9rem',
    lineHeight: '1.4',
    color: '#fff',
    fontStyle: 'italic',
    marginBottom: isMobile ? '0.8rem' : '1rem'
  };

  const testimonialMetaStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: isMobile ? 'column' : 'row',
    gap: isMobile ? '0.5rem' : '0',
    alignItems: isMobile ? 'flex-start' : 'center'
  };

  const testimonialDateStyle = {
    color: '#999',
    fontSize: isMobile ? '0.7rem' : '0.75rem'
  };

  const testimonialMilestoneStyle = {
    background: 'rgba(102, 126, 234, 0.3)',
    padding: isMobile ? '0.2rem 0.5rem' : '0.2rem 0.6rem',
    borderRadius: '12px',
    fontSize: isMobile ? '0.65rem' : '0.7rem',
    color: '#fff'
  };

  const dotsContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '0.5rem',
    marginTop: '1rem'
  };

  const dotStyle = (index) => ({
    width: isMobile ? '6px' : '8px',
    height: isMobile ? '6px' : '8px',
    borderRadius: '50%',
    background: index === currentTestimonial ? '#667eea' : 'rgba(255, 255, 255, 0.3)',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  });

  // ========== CTA SECTION STYLES ==========
  const ctaSectionStyle = {
    background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1))',
    borderRadius: '15px',
    padding: isMobile ? '1.5rem' : '2rem',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    backdropFilter: 'blur(10px)',
    position: 'relative',
    overflow: 'hidden'
  };

  const ctaPattern = {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    background: `
      radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.1) 0%, transparent 50%)
    `,
    zIndex: 1
  };

  const ctaContent = {
    position: 'relative',
    zIndex: 2
  };

  const ctaTitleStyle = {
    fontSize: isMobile ? '1.3rem' : '1.5rem',
    fontWeight: 'bold',
    marginBottom: isMobile ? '0.8rem' : '1rem',
    background: 'linear-gradient(45deg, #fff, #667eea)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    color: 'transparent',
    textAlign: isMobile ? 'center' : 'left'
  };

  const ctaSubtitleStyle = {
    fontSize: isMobile ? '0.85rem' : '0.9rem',
    color: '#ccc',
    marginBottom: isMobile ? '1rem' : '1.5rem',
    lineHeight: '1.4',
    textAlign: isMobile ? 'center' : 'left'
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: isMobile ? '0.8rem' : '1rem'
  };

  const inputGroupStyle = {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    gap: isMobile ? '0.8rem' : '1rem'
  };

  const inputStyle = {
    flex: 1,
    padding: isMobile ? '0.7rem 0.8rem' : '0.8rem 1rem',
    borderRadius: '10px',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    background: 'rgba(255, 255, 255, 0.1)',
    color: 'white',
    fontSize: isMobile ? '0.85rem' : '0.9rem',
    backdropFilter: 'blur(5px)',
    transition: 'all 0.3s ease'
  };

  const buttonStyle = {
    padding: isMobile ? '0.8rem 1.5rem' : '1rem 2rem',
    borderRadius: '10px',
    border: 'none',
    background: 'linear-gradient(45deg, #667eea, #764ba2)',
    color: 'white',
    fontSize: isMobile ? '0.9rem' : '1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    position: 'relative',
    overflow: 'hidden',
    width: isMobile ? '100%' : 'auto'
  };

  const loadingSpinner = {
    display: 'inline-block',
    width: isMobile ? '16px' : '20px',
    height: isMobile ? '16px' : '20px',
    border: '3px solid rgba(255,255,255,0.3)',
    borderTop: '3px solid white',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite'
  };

  // Features grid
  const featuresGridStyle = {
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
    gap: isMobile ? '0.8rem' : '1rem',
    marginTop: isMobile ? '1rem' : '1.5rem'
  };

  const featureItemStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: isMobile ? '0.6rem' : '0.8rem',
    background: 'rgba(255, 255, 255, 0.05)',
    borderRadius: '8px',
    border: '1px solid rgba(255, 255, 255, 0.1)'
  };

  const featureIconStyle = {
    fontSize: isMobile ? '1rem' : '1.2rem',
    background: 'linear-gradient(45deg, #667eea, #764ba2)',
    borderRadius: '50%',
    width: isMobile ? '25px' : '30px',
    height: isMobile ? '25px' : '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0
  };

  const featureTextStyle = {
    fontSize: isMobile ? '0.75rem' : '0.8rem',
    color: '#ccc'
  };

  // Confetti effect
  const confettiContainer = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    pointerEvents: 'none',
    zIndex: 1000,
    display: showConfetti ? 'block' : 'none'
  };

  const confettiPiece = (left, animationDelay, color) => ({
    position: 'absolute',
    top: '-10px',
    left: `${left}%`,
    width: '8px',
    height: '8px',
    background: color,
    borderRadius: '50%',
    animation: `confettiFall 2s ease-out ${animationDelay}s forwards`
  });

  // CSS animations
  const styleTag = `
    @keyframes float {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-20px) rotate(180deg); }
    }
    
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    
    @keyframes confettiFall {
      0% { transform: translateY(0) rotate(0deg); opacity: 1; }
      100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
    }

    @media (max-width: 768px) {
      .mobile-hidden {
        display: none;
      }
    }
  `;

  return (
    <div style={containerStyle}>
      <style>{styleTag}</style>
      
      {/* Floating Elements - Hidden on mobile */}
      <div style={floatingElements}>
        <div style={floatingElement(10, 10, 0, '✈️')}>✈️</div>
        <div style={floatingElement(20, 80, 1, '🏔️')}>🏔️</div>
        <div style={floatingElement(70, 15, 2, '🌊')}>🌊</div>
        <div style={floatingElement(60, 85, 3, '🏛️')}>🏛️</div>
      </div>

      {/* Confetti Effect */}
      <div style={confettiContainer}>
        {showConfetti && Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            style={confettiPiece(
              Math.random() * 100,
              Math.random() * 2,
              `hsl(${Math.random() * 360}, 100%, 50%)`
            )}
          />
        ))}
      </div>

      {/* Header */}
      <div style={headerStyle}>
        <h1 style={titleStyle}>Our Journey</h1>
        <p style={subtitleStyle}>
          From humble beginnings to global recognition - discover our story
        </p>
      </div>

      {/* Main Content - Column layout on mobile */}
      <div style={contentStyle}>
        {/* Timeline Section */}
        <div style={timelineSectionStyle}>
          <h2 style={sectionTitleStyle}>Milestones</h2>
          <div style={timelineStyle}>
            <div style={timelineLineStyle}></div>
            {milestones.map((milestone, index) => (
              <div 
                key={index}
                style={milestoneItemStyle(index)}
                onClick={() => setActiveMilestone(index)}
                onMouseEnter={() => setActiveMilestone(index)}
              >
                <div style={milestoneDotStyle(index)}>
                  {milestone.icon}
                </div>
                <div style={index === activeMilestone ? activeMilestoneContentStyle : milestoneContentStyle}>
                  <div style={milestoneYearStyle}>{milestone.year}</div>
                  <h3 style={milestoneTitleStyle}>{milestone.title}</h3>
                  <p style={milestoneDescStyle}>{milestone.description}</p>
                  <div style={milestoneStatsStyle}>{milestone.stats}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Testimonials + CTA */}
        <div style={rightSideContainer}>
          {/* Testimonials Section */}
          <div style={testimonialsSectionStyle}>
            <h2 style={sectionTitleStyle}>Traveler Stories</h2>
            <div style={testimonialCardStyle}>
              <div style={testimonialHeaderStyle}>
                <div style={testimonialPhotoStyle}>
                  {testimonials[currentTestimonial].photo}
                </div>
                <div>
                  <div style={testimonialNameStyle}>
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div style={testimonialLocationStyle}>
                    {testimonials[currentTestimonial].location}
                  </div>
                  <div style={testimonialRatingStyle}>
                    {'★'.repeat(testimonials[currentTestimonial].rating)}
                  </div>
                </div>
              </div>
              <p style={testimonialTextStyle}>
                "{testimonials[currentTestimonial].text}"
              </p>
              <div style={testimonialMetaStyle}>
                <div style={testimonialDateStyle}>
                  {testimonials[currentTestimonial].date}
                </div>
                <div style={testimonialMilestoneStyle}>
                  {testimonials[currentTestimonial].milestone}
                </div>
              </div>
            </div>
            
            <div style={dotsContainerStyle}>
              {testimonials.map((_, index) => (
                <div
                  key={index}
                  style={dotStyle(index)}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div style={ctaSectionStyle}>
            <div style={ctaPattern}></div>
            <div style={ctaContent}>
              <h3 style={ctaTitleStyle}>Start Your Adventure</h3>
              <p style={ctaSubtitleStyle}>
                Join 1M+ travelers who discovered the world with us. 
                Get personalized travel recommendations and exclusive deals.
              </p>
              
              <form style={formStyle} onSubmit={handleSubmit}>
                <div style={inputGroupStyle}>
                  <input
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={inputStyle}
                  />
                  <input
                    type="text"
                    placeholder="Dream destination"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    style={inputStyle}
                  />
                </div>
                
                <button 
                  type="submit" 
                  style={isSubmitting ? { ...buttonStyle, opacity: 0.7 } : buttonStyle}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <div style={loadingSpinner}></div>
                  ) : (
                    '🚀 Create My Journey'
                  )}
                </button>
              </form>

              {/* Features Grid - Single column on mobile */}
              <div style={featuresGridStyle}>
                <div style={featureItemStyle}>
                  <div style={featureIconStyle}>⚡</div>
                  <span style={featureTextStyle}>Instant Quotes</span>
                </div>
                <div style={featureItemStyle}>
                  <div style={featureIconStyle}>🎯</div>
                  <span style={featureTextStyle}>AI Personalization</span>
                </div>
                <div style={featureItemStyle}>
                  <div style={featureIconStyle}>🛡️</div>
                  <span style={featureTextStyle}>Best Price Guarantee</span>
                </div>
                <div style={featureItemStyle}>
                  <div style={featureIconStyle}>🌟</div>
                  <span style={featureTextStyle}>24/7 Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutJourney;