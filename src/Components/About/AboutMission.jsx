import React from "react";

export default function AboutMission({
  // Content Props
  missionTitle = "Our Mission",
  missionDescription = "To inspire and enable people to explore the world through authentic, sustainable, and unforgettable travel experiences that create lasting memories and meaningful connections.",
  
  visionTitle = "Our Vision", 
  visionDescription = "To become the world's most trusted travel companion, making extraordinary journeys accessible to everyone while preserving the beauty and culture of every destination we touch.",
  
  valuesTitle = "Our Values",
  values = [
    {
      icon: "🌱",
      title: "Sustainability",
      description: "Eco-friendly travel that protects our planet"
    },
    {
      icon: "🤝",
      title: "Authenticity", 
      description: "Genuine local experiences and cultural immersion"
    },
    {
      icon: "⭐",
      title: "Excellence",
      description: "Uncompromising quality in every journey"
    },
    {
      icon: "💖",
      title: "Passion",
      description: "Driven by our love for travel and exploration"
    }
  ],
  
  // Color Props
  primaryColor = "#10b981",
  secondaryColor = "#f59e0b", 
  accentColor = "#8b5cf6",
  backgroundColor = "#ffffff",
  textColor = "#1f2937",
  subtitleColor = "#6b7280"
}) {

  // Color calculation functions
  const getLightColor = (color) => {
    return color + "20";
  };

  const getGradient = (color1, color2) => {
    return `linear-gradient(135deg, ${color1}, ${color2})`;
  };

  return (
    <>
      <style>{`
        /* =======================================
           🌐 Compact Mission & Vision Section
        ======================================= */
        .mission-section {
          width: 95%;
          max-width: 1400px;
          margin: 4rem auto;
          padding: 3rem 0;
          position: relative;
          background: ${backgroundColor};
          overflow: hidden;
        }

        .mission-section::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: ${getGradient(primaryColor, accentColor)};
          animation: borderGlow 3s ease-in-out infinite;
        }

        .section-header {
          text-align: center;
          margin-bottom: 3rem;
          position: relative;
        }

        .section-badge {
          display: inline-block;
          background: black;
          color: white;
          padding: 0.5rem 1.5rem;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 1.5px;
          margin-bottom: 1rem;
          text-transform: uppercase;
          animation: badgeSlideIn 1s ease-out, badgePulse 2s ease-in-out infinite 1s;
        }

        .section-title {
          font-size: 2.8rem;
          font-weight: 800;
          background: linear-gradient(135deg, #000000, #2d3748);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 1rem;
          line-height: 1.1;
          animation: titleReveal 1s ease-out 0.3s both;
        }

        .section-subtitle {
          font-size: 1.1rem;
          color: ${subtitleColor};
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.5;
          animation: subtitleFadeIn 0.8s ease-out 0.5s both;
        }

        /* =======================================
           🎯 Compact Mission & Vision Cards
        ======================================= */
        .mission-vision-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2.5rem;
          margin-bottom: 3rem;
        }

        /* Compact Mission Card */
        .mission-card {
          background: linear-gradient(145deg, #ffffff, #f8fafc);
          padding: 2rem 2.5rem;
          border-radius: 20px;
          box-shadow: 
            0 10px 30px rgba(0,0,0,0.08),
            0 0 0 1px rgba(255,255,255,0.8);
          position: relative;
          overflow: hidden;
          animation: slideInFromLeft 0.8s ease-out 0.3s both;
          transform: translateX(-80px);
          opacity: 0;
          transition: all 0.3s ease;
          min-height: 280px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .mission-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 5px;
          height: 100%;
          background: ${getGradient(primaryColor, accentColor)};
          animation: stripeGlow 2s ease-in-out infinite;
        }

        .mission-card::after {
          content: "";
          position: absolute;
          top: -30%;
          right: -30%;
          width: 120px;
          height: 120px;
          background: ${getLightColor(primaryColor)};
          border-radius: 50%;
          animation: blobFloat 6s ease-in-out infinite;
          opacity: 0.4;
        }

        /* Compact Vision Card */
        .vision-card {
          background: linear-gradient(145deg, #ffffff, #f8fafc);
          padding: 2rem 2.5rem;
          border-radius: 20px;
          box-shadow: 
            0 10px 30px rgba(0,0,0,0.08),
            0 0 0 1px rgba(255,255,255,0.8);
          position: relative;
          overflow: hidden;
          animation: slideInFromRight 0.8s ease-out 0.5s both;
          transform: translateX(80px);
          opacity: 0;
          transition: all 0.3s ease;
          min-height: 280px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .vision-card::before {
          content: "";
          position: absolute;
          top: 0;
          right: 0;
          width: 5px;
          height: 100%;
          background: ${getGradient(secondaryColor, accentColor)};
          animation: stripeGlow 2s ease-in-out infinite 1s;
        }

        .vision-card::after {
          content: "";
          position: absolute;
          bottom: -30%;
          left: -30%;
          width: 120px;
          height: 120px;
          background: ${getLightColor(secondaryColor)};
          border-radius: 50%;
          animation: blobFloat 6s ease-in-out infinite reverse;
          opacity: 0.4;
        }

        .card-icon {
          width: 60px;
          height: 60px;
          background: ${getGradient(primaryColor, accentColor)};
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.8rem;
          margin-bottom: 1.5rem;
          animation: iconEntrance 0.6s ease-out 0.7s both;
          box-shadow: 0 8px 20px ${getLightColor(primaryColor)};
          position: relative;
          z-index: 2;
        }

        .vision-card .card-icon {
          background: ${getGradient(secondaryColor, accentColor)};
          box-shadow: 0 8px 20px ${getLightColor(secondaryColor)};
        }

        .card-title {
          font-size: 1.8rem;
          font-weight: 700;
          color: ${textColor};
          margin-bottom: 1rem;
          animation: titleSlideIn 0.6s ease-out 0.8s both;
          position: relative;
          z-index: 2;
          background: linear-gradient(135deg, #1a202c, #2d3748);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          line-height: 1.2;
        }

        .card-description {
          font-size: 1rem;
          color: ${subtitleColor};
          line-height: 1.6;
          animation: textReveal 0.6s ease-out 0.9s both;
          position: relative;
          z-index: 2;
        }

        /* =======================================
           💎 Compact Values Cards
        ======================================= */
        .values-section {
          margin-top: 4rem;
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
          margin-top: 2.5rem;
        }

        .value-card {
          background: linear-gradient(145deg, #ffffff, #f8fafc);
          padding: 2rem 1.5rem;
          border-radius: 15px;
          box-shadow: 
            0 8px 25px rgba(0,0,0,0.06),
            0 0 0 1px rgba(255,255,255,0.8);
          text-align: center;
          position: relative;
          overflow: hidden;
          animation: valueCardSlideIn 0.6s ease-out both;
          transform: translateY(30px);
          opacity: 0;
          transition: all 0.3s ease;
          min-height: 200px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .value-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: ${getGradient(primaryColor, accentColor)};
        }

        .value-card::after {
          content: "";
          position: absolute;
          bottom: -15px;
          right: -15px;
          width: 60px;
          height: 60px;
          background: ${getLightColor(primaryColor)};
          border-radius: 50%;
          opacity: 0.2;
          transition: all 0.3s ease;
        }

        .value-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(0,0,0,0.1);
        }

        .value-card:hover::after {
          transform: scale(1.3);
          opacity: 0.3;
        }

        .value-icon {
          width: 70px;
          height: 70px;
          background: ${getLightColor(primaryColor)};
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          margin: 0 auto 1rem;
          animation: valueIconFloat 3s ease-in-out infinite;
          transition: all 0.3s ease;
        }

        .value-card:hover .value-icon {
          transform: scale(1.1);
          background: ${getGradient(primaryColor, accentColor)};
          color: white;
        }

        .value-title {
          font-size: 1.2rem;
          font-weight: 600;
          color: ${textColor};
          margin-bottom: 0.5rem;
          background: linear-gradient(135deg, #1a202c, #2d3748);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .value-description {
          font-size: 0.9rem;
          color: ${subtitleColor};
          line-height: 1.5;
        }

        /* =======================================
           🎞️ Compact Animation Keyframes
        ======================================= */
        @keyframes borderGlow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }

        @keyframes badgePulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.03); }
        }

        @keyframes titleReveal {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes subtitleFadeIn {
          0% {
            opacity: 0;
            transform: translateY(15px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInFromLeft {
          0% {
            opacity: 0;
            transform: translateX(-80px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInFromRight {
          0% {
            opacity: 0;
            transform: translateX(80px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes stripeGlow {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }

        @keyframes blobFloat {
          0%, 100% { 
            transform: translate(0, 0) scale(1);
          }
          50% { 
            transform: translate(20px, -20px) scale(1.1);
          }
        }

        @keyframes iconEntrance {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes titleSlideIn {
          0% {
            opacity: 0;
            transform: translateX(-20px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes textReveal {
          0% {
            opacity: 0;
            transform: translateY(15px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes valueCardSlideIn {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes valueIconFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }

        @keyframes badgeSlideIn {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* =======================================
           📱 Responsive Design
        ======================================= */
        @media (max-width: 1024px) {
          .mission-vision-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          .mission-card,
          .vision-card {
            padding: 2rem;
            min-height: 250px;
          }
          
          .section-title {
            font-size: 2.4rem;
          }
        }

        @media (max-width: 768px) {
          .mission-section {
            width: 92%;
            margin: 3rem auto;
            padding: 2rem 0;
          }
          
          .section-title {
            font-size: 2rem;
          }
          
          .values-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          
          .mission-card,
          .vision-card {
            padding: 1.5rem;
            min-height: 220px;
          }
          
          .card-title {
            font-size: 1.5rem;
          }
        }

        @media (max-width: 480px) {
          .section-title {
            font-size: 1.8rem;
          }
          
          .card-title {
            font-size: 1.3rem;
          }
          
          .value-card {
            padding: 1.5rem 1rem;
            min-height: 180px;
          }
          
          .mission-card,
          .vision-card {
            padding: 1.5rem 1rem;
            min-height: 200px;
          }
        }
      `}</style>

      <section className="mission-section">
        {/* Compact Section Header */}
        <div className="section-header">
          <div className="section-badge">Mission & Vision</div>
          <h1 className="section-title">Our Guiding Principles</h1>
          <p className="section-subtitle">
            Discover the core values that drive our passion for creating extraordinary travel experiences
          </p>
        </div>

        {/* Compact Mission & Vision Cards */}
        <div className="mission-vision-grid">
          {/* Compact Mission Card */}
          <div className="mission-card">
            <div className="card-icon">🎯</div>
            <h2 className="card-title">{missionTitle}</h2>
            <p className="card-description">{missionDescription}</p>
          </div>

          {/* Compact Vision Card */}
          <div className="vision-card">
            <div className="card-icon">🔭</div>
            <h2 className="card-title">{visionTitle}</h2>
            <p className="card-description">{visionDescription}</p>
          </div>
        </div>

        {/* Compact Values Section */}
        <div className="values-section">
          <div className="section-header">
            <h2 className="section-title" style={{fontSize: '2.2rem'}}>{valuesTitle}</h2>
          </div>
          
          <div className="values-grid">
            {values.map((value, index) => (
              <div 
                key={index}
                className="value-card"
                style={{ animationDelay: `${0.8 + index * 0.1}s` }}
              >
                <div className="value-icon">{value.icon}</div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}