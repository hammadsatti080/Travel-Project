import React, { useState, useEffect, useRef } from "react";

export default function AboutSection({
  // Content Props
  title = "Why Choose TravelWith?",
  subtitle = "Your Journey, Our Passion",
  description = "With over a decade of experience in crafting unforgettable travel experiences, we bring you closer to the world's most breathtaking destinations.",
  features = [
    "✓ 10+ Years of Experience",
    "✓ 50+ Destinations Worldwide", 
    "✓ 24/7 Customer Support",
    "✓ Best Price Guarantee"
  ],
  stats = [
    { number: "50K+", label: "Happy Travelers" },
    { number: "150+", label: "Destinations" },
    { number: "4.9/5", label: "Customer Rating" }
  ],
  ctaText = "Explore Our Story",
  
  // Color Props
  primaryColor = "#10b981",      // Emerald Green
  secondaryColor = "#f59e0b",    // Amber
  accentColor = "#8b5cf6",       // Violet
  backgroundColor = "#ffffff",   // White
  textColor = "#1f2937",         // Gray-900
  subtitleColor = "#6b7280",     // Gray-500
  
  // Image Props
  imageUrl = "./Homescreen/Travel3.png"
}) {
  
  const [isDescriptionHovered, setIsDescriptionHovered] = useState(false);
  const [animatedStats, setAnimatedStats] = useState(stats.map(stat => ({
    ...stat,
    currentNumber: 0
  })));
  
  const statsRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  // Color calculation functions
  const getLightColor = (color) => {
    return color + "20";
  };

  const getGradient = (color1, color2) => {
    return `linear-gradient(135deg, ${color1}, ${color2})`;
  };

  // Handle button click
  const handleButtonClick = () => {
    alert("Exploring our story...");
    // Yahan aap apna navigation logic add kar sakte hain
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
            const increment = target === "4.9/5" ? 0.1 : target === "150+" ? 1 : 50;
            const duration = 2000;
            const steps = duration / 16;
            const stepValue = (target === "4.9/5" ? 4.9 : parseInt(target)) / steps;

            const timer = setInterval(() => {
              current += stepValue;
              if (current >= (target === "4.9/5" ? 4.9 : parseInt(target))) {
                current = target === "4.9/5" ? 4.9 : parseInt(target);
                clearInterval(timer);
              }
              
              setAnimatedStats(prev => prev.map((s, i) => 
                i === index ? { 
                  ...s, 
                  currentNumber: target === "4.9/5" ? current.toFixed(1) + "/5" : Math.floor(current) + "+" 
                } : s
              ));
            }, 16);
          });
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <>
      <style>{`
        /* =======================================
           🌐 Modern About Section Layout
        ======================================= */
        .about-section {
          width: 95%;
          max-width: 1400px;
          margin: 6rem auto;
          padding: 4rem 0;
          position: relative;
          background: ${backgroundColor};
          overflow: hidden;
        }

        .about-container {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 4rem;
          align-items: center;
          position: relative;
        }

        /* =======================================
           🧭 Content Side with Advanced Animations
        ======================================= */
        .content-side {
          padding: 2rem 0;
        }

        .section-badge {
          display: inline-block;
          background: ${getGradient(primaryColor, secondaryColor)};
          color: white;
          padding: 0.5rem 1.5rem;
          border-radius: 25px;
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 1px;
          margin-bottom: 1.5rem;
          text-transform: uppercase;
          animation: badgeSlideIn 1s ease-out 0.2s both, badgeGlow 2s ease-in-out infinite 1.5s;
        }

        .section-title {
          font-size: 3.5rem;
          font-weight: 700;
          color: ${textColor};
          margin-bottom: 1rem;
          line-height: 1.1;
          overflow: hidden;
        }

        .title-word {
          display: inline-block;
          animation: titleReveal 0.8s ease-out both;
          transform-origin: bottom;
        }

        .section-subtitle {
          font-size: 1.4rem;
          color: ${primaryColor};
          font-weight: 600;
          margin-bottom: 2rem;
          animation: subtitleSlideIn 1s ease-out 0.8s both;
          position: relative;
        }

        .section-subtitle::after {
          content: "";
          position: absolute;
          bottom: -10px;
          left: 0;
          width: 0;
          height: 3px;
          background: ${getGradient(primaryColor, accentColor)};
          animation: underlineExpand 1s ease-out 1.5s forwards;
        }

        .section-description {
          font-size: 1.1rem;
          color: ${subtitleColor};
          line-height: 1.8;
          margin-bottom: 3rem;
          animation: paragraphReveal 1.2s ease-out 1s both;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
          padding: 1.5rem;
          border-radius: 12px;
          background: transparent;
        }

        .section-description:hover {
          transform: scale(1.02);
          background: ${getLightColor(primaryColor)};
          box-shadow: 0 10px 30px ${getLightColor(primaryColor)};
          color: ${textColor};
        }

        .description-zoom {
          animation: textZoom 0.6s ease-out forwards !important;
        }

        /* =======================================
           📊 Features List with Black Background
        ======================================= */
        .features-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-bottom: 3rem;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          color: white;
          font-weight: 500;
          padding: 1rem 1.2rem;
          border-radius: 12px;
          background: #000000;
          animation: featureSlideIn 0.6s ease-out both;
          transform: translateX(-20px);
          opacity: 0;
          transition: all 0.3s ease;
          border: 1px solid #333;
        }

        .feature-item:hover {
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 15px 35px rgba(0,0,0,0.3);
          background: #111111;
        }

        .feature-icon {
          width: 28px;
          height: 28px;
          background: ${getGradient(primaryColor, accentColor)};
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 0.9rem;
          font-weight: bold;
          animation: iconBounce 0.5s ease-out 0.2s both;
        }

        /* =======================================
           🔢 Stats Section with Counting Animation
        ======================================= */
        .stats-container {
          display: flex;
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .stat-item {
          text-align: center;
          animation: statFadeIn 1s ease-out both;
          opacity: 0;
          transform: translateY(20px);
        }

        .stat-number {
          font-size: 2.8rem;
          font-weight: 800;
          color: #000000;
          margin-bottom: 0.5rem;
          font-family: 'Arial', sans-serif;
          text-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }

        .stat-label {
          font-size: 0.9rem;
          color: ${primaryColor};
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        /* =======================================
           🔘 CTA Button - Fully Clickable
        ======================================= */
        .cta-button {
          display: inline-flex;
          align-items: center;
          gap: 0.8rem;
          background: ${getGradient(primaryColor, accentColor)};
          color: white;
          padding: 1.2rem 2.5rem;
          border-radius: 12px;
          font-weight: 600;
          font-size: 1rem;
          box-shadow: 0 8px 30px ${getLightColor(primaryColor)};
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border: none;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          animation: buttonPulse 2s ease-in-out infinite 2s, buttonSlideIn 0.8s ease-out 1.8s both;
          transform: translateY(30px);
          opacity: 0;
        }

        .cta-button:hover {
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 15px 40px ${getLightColor(primaryColor)};
          animation: none;
        }

        .cta-button:active {
          transform: translateY(-1px) scale(1.02);
        }

        .button-icon {
          transition: transform 0.3s ease;
        }

        .cta-button:hover .button-icon {
          transform: translateX(5px) scale(1.2);
        }

        /* =======================================
           🖼️ Image Side with Travel Theme
        ======================================= */
        .image-side {
          position: relative;
          height: 600px;
       
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 25px 50px rgba(0,0,0,0.1);
          animation: imageZoomIn 1.5s ease-out, imageFloat 6s ease-in-out infinite 2s;
        }

        .main-image {
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          position: relative;
          animation: imagePan 20s ease-in-out infinite;
        }

        .main-image::before {
          content: "";
          position: absolute;
          inset: 0;
          background: ${getGradient(getLightColor(primaryColor), getLightColor(accentColor))};
          z-index: 1;
          animation: overlayPulse 4s ease-in-out infinite;
        }

        .image-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(transparent, rgba(0,0,0,0.9));
          padding: 2rem;
          z-index: 2;
          animation: overlaySlideUp 1s ease-out 0.5s both;
        }

        .image-badge {
          background: rgba(255,255,255,0.95);
          backdrop-filter: blur(10px);
          padding: 1rem 1.5rem;
          border-radius: 12px;
          display: inline-flex;
          align-items: center;
          gap: 0.8rem;
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
          animation: badgeFloat 4s ease-in-out infinite, badgeScale 0.5s ease-out 1s both;
        }

        .badge-icon {
          width: 40px;
          height: 40px;
          background: ${getGradient(primaryColor, accentColor)};
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 1.2rem;
          animation: iconSpin 2s ease-in-out infinite;
        }

        .badge-text {
          font-weight: 600;
          color: ${textColor};
        }

        .badge-subtext {
          font-size: 0.8rem;
          color: ${subtitleColor};
        }

        /* =======================================
           ✨ Floating Elements with Scrolling Animation
        ======================================= */
        .floating-card {
          position: absolute;
          top: 2rem;
          right: -1rem;
          background: white;
          padding: 1.5rem;
          border-radius: 15px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
          animation: cardFloat 8s ease-in-out infinite 1s, cardSlideIn 1s ease-out 0.8s both, cardScroll 15s linear infinite;
          z-index: 10;
          border: 1px solid #e5e7eb;
          transform: translateX(50px);
          opacity: 0;
        }

        .floating-card-2 {
          position: absolute;
          bottom: 2rem;
          left: -1rem;
          background: white;
          padding: 1rem 1.5rem;
          border-radius: 15px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
          animation: cardFloat 8s ease-in-out infinite 2s reverse, cardSlideIn 1s ease-out 1s both, cardScroll 12s linear infinite reverse;
          z-index: 10;
          border: 1px solid #e5e7eb;
          transform: translateX(-50px);
          opacity: 0;
        }

        /* =======================================
           🎞️ Advanced Animation Keyframes
        ======================================= */
        @keyframes textZoom {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            transform: scale(1);
          }
        }

        @keyframes cardScroll {
          0% {
            transform: translateY(0px);
          }
          25% {
            transform: translateY(-20px);
          }
          50% {
            transform: translateY(0px);
          }
          75% {
            transform: translateY(20px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        @keyframes badgeSlideIn {
          0% {
            opacity: 0;
            transform: translateX(-50px) rotate(-10deg);
          }
          100% {
            opacity: 1;
            transform: translateX(0) rotate(0);
          }
        }

        @keyframes badgeGlow {
          0%, 100% {
            box-shadow: 0 0 20px ${getLightColor(primaryColor)};
          }
          50% {
            box-shadow: 0 0 30px ${primaryColor};
          }
        }

        @keyframes titleReveal {
          0% {
            opacity: 0;
            transform: translateY(30px) rotateX(90deg);
          }
          100% {
            opacity: 1;
            transform: translateY(0) rotateX(0);
          }
        }

        @keyframes subtitleSlideIn {
          0% {
            opacity: 0;
            transform: translateX(-30px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes underlineExpand {
          0% {
            width: 0;
          }
          100% {
            width: 100px;
          }
        }

        @keyframes paragraphReveal {
          0% {
            opacity: 0;
            transform: translateY(20px);
            filter: blur(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }

        @keyframes featureSlideIn {
          0% {
            opacity: 0;
            transform: translateX(-20px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes iconBounce {
          0%, 20%, 50%, 80%, 100% {
            transform: scale(1);
          }
          40% {
            transform: scale(1.2);
          }
          60% {
            transform: scale(1.1);
          }
        }

        @keyframes statFadeIn {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes buttonSlideIn {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes buttonPulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.02);
          }
        }

        @keyframes imageZoomIn {
          0% {
            opacity: 0;
            transform: scale(1.1);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes imageFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes imagePan {
          0%, 100% {
            background-position: center;
          }
          50% {
            background-position: center 70%;
          }
        }

        @keyframes overlayPulse {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.1;
          }
        }

        @keyframes overlaySlideUp {
          0% {
            opacity: 0;
            transform: translateY(50px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes badgeFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes badgeScale {
          0% {
            transform: scale(0.8);
          }
          100% {
            transform: scale(1);
          }
        }

        @keyframes iconSpin {
          0%, 100% {
            transform: rotate(0deg);
          }
          50% {
            transform: rotate(10deg);
          }
        }

        @keyframes cardFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-12px);
          }
        }

        @keyframes cardSlideIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        /* =======================================
           📱 Responsive Design
        ======================================= */
        @media (max-width: 1200px) {
          .about-container {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          
          .section-title {
            font-size: 3rem;
          }
          
          .image-side {
            height: 500px;
          }
        }

        @media (max-width: 768px) {
          .about-section {
            width: 92%;
            margin: 4rem auto;
            padding: 2rem 0;
          }
          
          .section-title {
            font-size: 2.5rem;
          }
          
          .features-grid {
            grid-template-columns: 1fr;
          }
          
          .stats-container {
            flex-direction: column;
            gap: 1.5rem;
          }
          
          .floating-card,
          .floating-card-2 {
            position: relative;
            top: auto;
            right: auto;
            bottom: auto;
            left: auto;
            margin: 1rem 0;
            animation: none !important;
          }
        }

        @media (max-width: 480px) {
          .section-title {
            font-size: 2rem;
          }
          
          .section-subtitle {
            font-size: 1.2rem;
          }
          
          .cta-button {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>

      <section className="about-section">
        <div className="about-container">
          {/* Content Side */}
          <div className="content-side">
            <div className="section-badge">About Us</div>
            <h1 className="section-title">
              {title.split(" ").map((word, index) => (
                <span 
                  key={index} 
                  className="title-word"
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  {word}&nbsp;
                </span>
              ))}
            </h1>
            <h2 className="section-subtitle">{subtitle}</h2>
            
            {/* Description with Hover Animation */}
            <p 
              className={`section-description ${isDescriptionHovered ? 'description-zoom' : ''}`}
              onMouseEnter={() => setIsDescriptionHovered(true)}
              onMouseLeave={() => setIsDescriptionHovered(false)}
            >
              {description}
            </p>
            
            {/* Features Grid with Black Background */}
            <div className="features-grid">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="feature-item"
                  style={{ animationDelay: `${1.2 + index * 0.1}s` }}
                >
                  <div className="feature-icon">✓</div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            
            {/* Stats with Counting Animation */}
            <div className="stats-container" ref={statsRef}>
              {animatedStats.map((stat, index) => (
                <div 
                  key={index} 
                  className="stat-item"
                  style={{ animationDelay: `${1.6 + index * 0.2}s` }}
                >
                  <div className="stat-number">
                    {stat.currentNumber || "0"}
                  </div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
            
            {/* CTA Button - Fully Clickable */}
            <button className="cta-button" onClick={handleButtonClick}>
              {ctaText}
              <svg
                className="w-4 h-4 button-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Image Side with Travel Theme */}
          <div className="image-side">
            <div 
              className="main-image"
              style={{ 
                backgroundImage: `url(${imageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="image-overlay">
                <div className="image-badge">
                  <div className="badge-icon">🌍</div>
                  <div>
                    <div className="badge-text">Explore The World</div>
                    <div className="badge-subtext">Adventure Awaits</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Cards with Scrolling Animation */}
            <div className="floating-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ 
                  width: '50px', 
                  height: '50px', 
                  background: getGradient(primaryColor, accentColor), 
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '1.5rem'
                }}>
                  ✈️
                </div>
                <div>
                  <div style={{ fontWeight: '600', color: textColor }}>Worldwide</div>
                  <div style={{ fontSize: '0.8rem', color: subtitleColor }}>150+ Destinations</div>
                </div>
              </div>
            </div>
            
            <div className="floating-card-2">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <div style={{ 
                  width: '40px', 
                  height: '40px', 
                  background: getGradient(secondaryColor, '#d97706'), 
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '1.2rem'
                }}>
                  ⭐
                </div>
                <div>
                  <div style={{ 
                    fontWeight: '600', 
                    color: textColor, 
                    fontSize: '0.9rem',
                    animation: 'cardScroll 8s linear infinite'
                  }}>
                    4.9/5 Rating
                  </div>
                  <div style={{ 
                    fontSize: '0.7rem', 
                    color: subtitleColor,
                    animation: 'cardScroll 10s linear infinite reverse'
                  }}>
                    Customer Reviews
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}