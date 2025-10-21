import React, { useState, useEffect, useRef } from "react";

export default function AboutStats({
  // Stats Data
  stats = [
    { 
      number: "50+", 
      label: "Countries Explored",
      icon: "🌍",
      description: "Across 6 continents",
      proof: "Verified by Travel Association"
    },
    { 
      number: "1M+", 
      label: "Happy Travelers",
      icon: "😊",
      description: "Satisfied customers worldwide",
      proof: "4.9/5 average rating"
    },
    { 
      number: "100%", 
      label: "Secure Payments",
      icon: "🔒",
      description: "SSL encrypted transactions",
      proof: "Bank-level security"
    },
    { 
      number: "24/7", 
      label: "Support Available",
      icon: "📞",
      description: "Round the clock assistance",
      proof: "98% response rate"
    }
  ],
  
  // Reviews Data
  reviews = [
    {
      name: "Sarah Johnson",
      rating: 5,
      comment: "Best travel experience ever! Everything was perfectly organized.",
      location: "New York, USA",
      verified: true
    },
    {
      name: "Mike Chen",
      rating: 5,
      comment: "Exceptional service and attention to detail. Highly recommended!",
      location: "Tokyo, Japan",
      verified: true
    },
    {
      name: "Emma Davis",
      rating: 4,
      comment: "Great value for money. Will definitely travel with them again.",
      location: "London, UK",
      verified: true
    }
  ],

  // Color Props
  primaryColor = "#10b981",
  secondaryColor = "#f59e0b", 
  accentColor = "#8b5cf6"
}) {

  const [animatedStats, setAnimatedStats] = useState(stats.map(stat => ({
    ...stat,
    currentNumber: "0"
  })));
  
  const [currentReview, setCurrentReview] = useState(0);
  const statsRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  // Color calculation functions
  const getLightColor = (color) => {
    return color + "20";
  };

  const getGradient = (color1, color2) => {
    return `linear-gradient(135deg, ${color1}, ${color2})`;
  };

  // Counting animation for stats
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          animatedStats.forEach((stat, index) => {
            const target = stat.number;
            let current = 0;
            const isPercentage = target.includes("%");
            const isPlus = target.includes("+");
            const numericValue = parseInt(target) || (isPercentage ? 100 : 0);
            const duration = 2000;
            const steps = duration / 16;
            const stepValue = numericValue / steps;

            const timer = setInterval(() => {
              current += stepValue;
              if (current >= numericValue) {
                current = numericValue;
                clearInterval(timer);
              }
              
              setAnimatedStats(prev => prev.map((s, i) => 
                i === index ? { 
                  ...s, 
                  currentNumber: Math.floor(current) + (isPlus ? "+" : isPercentage ? "%" : "")
                } : s
              ));
            }, 16);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  // Auto-rotate reviews
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [reviews.length]);

  // Manual review navigation
  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  // Render star rating
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} style={{ color: i < rating ? "#fbbf24" : "#d1d5db" }}>
        {i < rating ? "★" : "☆"}
      </span>
    ));
  };

  return (
    <>
      <style>{`
        /* =======================================
           🌐 Premium Stats Section - Black Theme
        ======================================= */
        .stats-section {
          width: 100%;
          margin: 6rem 0;
          padding: 5rem 0;
          position: relative;
        
          overflow: hidden;
        }

        .stats-section::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: ${getGradient(primaryColor, accentColor)};
          animation: borderGlow 3s ease-in-out infinite;
        }

        .stats-container {
          width: 95%;
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
        }

        /* =======================================
           🎯 Top Header Section
        ======================================= */
        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-badge {
          display: inline-block;
          background: ${getGradient(primaryColor, accentColor)};
          color: white;
          padding: 0.6rem 1.8rem;
          border-radius: 25px;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 2px;
          margin-bottom: 1.5rem;
          text-transform: uppercase;
          animation: badgeSlideIn 1s ease-out;
        }

        .section-title {
          font-size: 3.5rem;
          font-weight: 800;
          background: linear-gradient(135deg, #0f0f0f, #1a1a1a, #262626, #000000);

          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 1rem;
          line-height: 1.1;
        }

        .section-subtitle {
          font-size: 1.2rem;
          color: #9ca3af;
          max-width: 600px;
          margin: 0 auto;
        }

        /* =======================================
           📊 Main Content Row - Two Columns
        ======================================= */
        .main-content-row {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 3rem;
          align-items: start;
        }

        /* =======================================
           🏆 Achievements Section (Left) - 4 Cards in One Row
        ======================================= */
        .achievements-section {
          background: #111827;
          padding: 2.5rem;
          border-radius: 25px;
          border: 1px solid #374151;
          position: relative;
          overflow: hidden;
        }

        .achievements-section::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 4px;
          height: 100%;
          background: ${getGradient(primaryColor, accentColor)};
        }

        .achievements-title {
          font-size: 2rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 2rem;
          background: linear-gradient(135deg, #ffffff, #e5e7eb);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* 4 Cards in One Row */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.2rem;
        }

        .stat-card {
          background: #ffffff;
          padding: 1.8rem 1.2rem;
          border-radius: 15px;
          box-shadow: 0 8px 25px rgba(0,0,0,0.3);
          text-align: center;
          position: relative;
          overflow: hidden;
          animation: statCardSlideIn 0.8s ease-out both;
          transform: translateY(30px);
          opacity: 0;
          transition: all 0.3s ease;
          border: 1px solid #374151;
          min-height: 200px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .stat-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(0,0,0,0.4);
        }

        .stat-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: ${getGradient(primaryColor, accentColor)};
        }

        .stat-icon {
          width: 50px;
          height: 50px;
          background: ${getLightColor(primaryColor)};
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.8rem;
          margin: 0 auto 0.8rem;
          animation: iconFloat 4s ease-in-out infinite;
          transition: all 0.3s ease;
        }

        .stat-card:hover .stat-icon {
          transform: scale(1.1);
          background: ${getGradient(primaryColor, accentColor)};
          color: white;
        }

        .stat-number {
          font-size: 2rem;
          font-weight: 800;
          color: #1f2937;
          margin-bottom: 0.3rem;
          font-family: 'Arial', sans-serif;
        }

        .stat-label {
          font-size: 0.95rem;
          font-weight: 600;
          color: #374151;
          margin-bottom: 0.4rem;
          line-height: 1.2;
        }

        .stat-description {
          font-size: 0.75rem;
          color: #6b7280;
          margin-bottom: 0.8rem;
          line-height: 1.3;
        }

        .stat-proof {
          font-size: 0.7rem;
          color: ${primaryColor};
          font-weight: 600;
          padding: 0.3rem 0.6rem;
          background: ${getLightColor(primaryColor)};
          border-radius: 8px;
          display: inline-block;
        }

        /* =======================================
           💬 Reviews Section (Right)
        ======================================= */
        .reviews-section {
          background: #111827;
          padding: 2.5rem;
          border-radius: 25px;
          position: relative;
          overflow: hidden;
          border: 1px solid #374151;
          height: fit-content;
        }

        .reviews-section::before {
          content: "";
          position: absolute;
          top: 0;
          right: 0;
          width: 4px;
          height: 100%;
          background: ${getGradient(secondaryColor, accentColor)};
        }

        .reviews-title {
          font-size: 2rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 2rem;
          background: linear-gradient(135deg, #ffffff, #e5e7eb);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .review-controls {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .review-nav-buttons {
          display: flex;
          gap: 0.5rem;
        }

        .review-btn {
          width: 40px;
          height: 40px;
          background: ${getGradient(primaryColor, accentColor)};
          border: none;
          border-radius: 50%;
          color: white;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .review-btn:hover {
          transform: scale(1.1);
        }

        .review-indicators {
          display: flex;
          gap: 0.4rem;
        }

        .review-indicator {
          width: 6px;
          height: 6px;
          background: #374151;
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .review-indicator.active {
          background: ${primaryColor};
          transform: scale(1.3);
        }

        .review-container {
          position: relative;
          height: 180px;
          overflow: hidden;
        }

        .review-card {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          background: #1f2937;
          padding: 1.5rem;
          border-radius: 15px;
          border: 1px solid #374151;
          animation: reviewSlide 0.6s ease-out forwards;
        }

        .review-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1rem;
        }

        .reviewer-info h4 {
          color: #ffffff;
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 0.25rem;
        }

        .reviewer-location {
          color: #9ca3af;
          font-size: 0.8rem;
        }

        .review-rating {
          font-size: 1.3rem;
          letter-spacing: 1px;
        }

        .verified-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.2rem;
          background: ${getLightColor(primaryColor)};
          color: ${primaryColor};
          padding: 0.2rem 0.5rem;
          border-radius: 8px;
          font-size: 0.65rem;
          font-weight: 600;
          margin-left: 0.3rem;
        }

        .review-comment {
          color: #d1d5db;
          font-size: 1rem;
          line-height: 1.5;
          font-style: italic;
        }

        /* =======================================
           🎞️ Animation Keyframes
        ======================================= */
        @keyframes borderGlow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }

        @keyframes badgeSlideIn {
          0% {
            opacity: 0;
            transform: translateY(-30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes statCardSlideIn {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes iconFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-3px) rotate(2deg); }
          66% { transform: translateY(-2px) rotate(-2deg); }
        }

        @keyframes reviewSlide {
          0% {
            opacity: 0;
            transform: translateX(30px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* =======================================
           📱 Responsive Design
        ======================================= */
        @media (max-width: 1200px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
          }
        }

        @media (max-width: 1024px) {
          .main-content-row {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          .stats-grid {
            grid-template-columns: repeat(4, 1fr);
          }
          
          .section-title {
            font-size: 3rem;
          }
        }

        @media (max-width: 768px) {
          .stats-section {
            padding: 3rem 0;
            margin: 4rem 0;
          }
          
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
          }
          
          .section-title {
            font-size: 2.5rem;
          }
          
          .achievements-section,
          .reviews-section {
            padding: 2rem;
          }
          
          .achievements-title,
          .reviews-title {
            font-size: 1.8rem;
          }
          
          .stat-card {
            padding: 1.5rem 1rem;
            min-height: 180px;
          }
        }

        @media (max-width: 480px) {
          .section-title {
            font-size: 2rem;
          }
          
          .stats-grid {
            grid-template-columns: 1fr;
          }
          
          .stat-card {
            padding: 1.2rem 0.8rem;
            min-height: 160px;
          }
          
          .stat-number {
            font-size: 1.8rem;
          }
          
          .review-card {
            padding: 1rem;
          }
          
          .achievements-section,
          .reviews-section {
            padding: 1.5rem;
          }
        }
      `}</style>

      <section className="stats-section" ref={statsRef}>
        <div className="stats-container">
          {/* Top Header Section */}
          <div className="section-header">
            <div className="section-badge">Our Achievements</div>
            <h1 className="section-title">Numbers That Speak</h1>
            <p className="section-subtitle">
              Trusted by millions of travelers worldwide. Here's why we're the preferred choice.
            </p>
          </div>

          {/* Main Content Row - Two Columns */}
          <div className="main-content-row">
            {/* Left Column - Achievements */}
            <div className="achievements-section">
              <h2 className="achievements-title">Achievements</h2>
              <div className="stats-grid">
                {animatedStats.map((stat, index) => (
                  <div 
                    key={index}
                    className="stat-card"
                    style={{ animationDelay: `${index * 0.15}s` }}
                  >
                    <div className="stat-icon">{stat.icon}</div>
                    <div className="stat-number">{stat.currentNumber}</div>
                    <div className="stat-label">{stat.label}</div>
                    <div className="stat-description">{stat.description}</div>
                    <div className="stat-proof">{stat.proof}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Reviews */}
            <div className="reviews-section">
              <h2 className="reviews-title">Traveler Reviews</h2>
              
              <div className="review-controls">
                <div className="review-nav-buttons">
                  <button className="review-btn" onClick={prevReview}>←</button>
                  <button className="review-btn" onClick={nextReview}>→</button>
                </div>
                <div className="review-indicators">
                  {reviews.map((_, index) => (
                    <div
                      key={index}
                      className={`review-indicator ${index === currentReview ? 'active' : ''}`}
                      onClick={() => setCurrentReview(index)}
                    />
                  ))}
                </div>
              </div>

              <div className="review-container">
                <div className="review-card">
                  <div className="review-header">
                    <div className="reviewer-info">
                      <h4>
                        {reviews[currentReview].name}
                        {reviews[currentReview].verified && (
                          <span className="verified-badge">✓ Verified</span>
                        )}
                      </h4>
                      <div className="reviewer-location">{reviews[currentReview].location}</div>
                    </div>
                    <div className="review-rating">
                      {renderStars(reviews[currentReview].rating)}
                    </div>
                  </div>
                  <p className="review-comment">"{reviews[currentReview].comment}"</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}