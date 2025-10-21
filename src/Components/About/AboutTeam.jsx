import React from "react";

export default function AboutTeam({
  // Team Data
  teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Travel Expert",
      image: "./team/sarah.jpg",
      description: "10+ years experience in Asia and Europe travel.",
      social: {
        twitter: "#",
        linkedin: "#",
        instagram: "#"
      }
    },
    {
      name: "Mike Chen", 
      role: "Adventure Specialist",
      image: "./team/mike.jpg",
      description: "Expert in adventure tourism and outdoor activities.",
      social: {
        twitter: "#",
        linkedin: "#",
        instagram: "#"
      }
    },
    {
      name: "Emma Davis",
      role: "Luxury Curator", 
      image: "./team/emma.jpg",
      description: "Specializes in luxury accommodations and exclusive experiences.",
      social: {
        twitter: "#",
        linkedin: "#",
        instagram: "#"
      }
    },
    {
      name: "Alex Rodriguez",
      role: "Cultural Director",
      image: "./team/alex.jpg", 
      description: "Passionate about authentic cultural immersion experiences.",
      social: {
        twitter: "#",
        linkedin: "#",
        instagram: "#"
      }
    }
  ],

  // Color Props
  primaryColor = "#10b981",
  secondaryColor = "#f59e0b",
  accentColor = "#8b5cf6"
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
           🌐 Compact Team Section
        ======================================= */
        .team-section {
          width: 95%;
          max-width: 1200px;
          margin: 3rem auto;
          padding: 2rem 0;
          position: relative;
          background: #ffffff;
          overflow: hidden;
        }

        .section-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .section-badge {
          display: inline-block;
          background: ${getGradient(primaryColor, accentColor)};
          color: white;
          padding: 0.4rem 1.2rem;
          border-radius: 15px;
          font-size: 0.7rem;
          font-weight: 600;

          letter-spacing: 1px;
          
          margin-bottom: 0.8rem;
          text-transform: uppercase;
        }

        .section-title {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          line-height: 1.1;
          background: linear-gradient(135deg, #0f0f0f, #1a1a1a, #262626, #000000);

          background-size: 300% 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradientShift 4s ease-in-out infinite;
        }

        .section-subtitle {
          font-size: 0.9rem;
          color: #6b7280;
          max-width: 400px;
          margin: 0 auto;
        }

        /* =======================================
           🎠 Horizontal Scrolling Team Cards
        ======================================= */
        .team-scroll-container {
          position: relative;
          overflow: hidden;
          padding: 1rem 0;
        }

        .team-scroll-track {
          display: flex;
          gap: 1.5rem;
          animation: scrollLeftToRight 30s linear infinite;
          padding: 0.5rem;
        }

        .team-scroll-track:hover {
          animation-play-state: paused;
        }

        /* Compact Team Card */
        .team-card {
          background: #ffffff;
          border-radius: 16px;
          box-shadow: 
            0 6px 20px rgba(0,0,0,0.08),
            0 0 0 1px rgba(0,0,0,0.04);
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
          border: 1px solid #f3f4f6;
          height: 320px;
          width: 260px;
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
        }

        .team-card:hover {
          transform: translateY(-5px);
          box-shadow: 
            0 12px 30px rgba(0,0,0,0.12),
            0 0 0 1px ${primaryColor + "15"};
        }

        /* Image Container */
        .image-container {
          position: relative;
          height: 140px;
          overflow: hidden;
        }

        .member-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .team-card:hover .member-image {
          transform: scale(1.05);
        }

        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: ${getGradient('rgba(0,0,0,0.1)', 'rgba(0,0,0,0.2)')};
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .team-card:hover .image-overlay {
          opacity: 1;
        }

        /* Role Badge */
        .role-badge {
          position: absolute;
          top: 0.8rem;
          left: 0.8rem;
          background: ${getGradient(primaryColor, accentColor)};
          color: white;
          padding: 0.3rem 0.6rem;
          border-radius: 10px;
          font-size: 0.65rem;
          font-weight: 600;
          letter-spacing: 0.3px;
          z-index: 2;
        }

        /* Content Section */
        .card-content {
          padding: 1.2rem;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .member-info {
          margin-bottom: 1rem;
        }

        .member-name {
          font-size: 1.1rem;
          font-weight: 700;
          color: #000000;
          margin-bottom: 0.3rem;
          line-height: 1.2;
        }

        .member-role {
          font-size: 0.8rem;
          color: ${primaryColor};
          font-weight: 600;
          margin-bottom: 0.6rem;
        }

        .member-description {
          font-size: 0.75rem;
          color: #6b7280;
          line-height: 1.4;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Social Links */
        .social-links {
          display: flex;
          gap: 0.6rem;
          justify-content: center;
        }

        .social-link {
          width: 30px;
          height: 30px;
          background: ${getLightColor(primaryColor)};
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: ${primaryColor};
          text-decoration: none;
          transition: all 0.3s ease;
          font-size: 0.9rem;
        }

        .social-link:hover {
          background: ${getGradient(primaryColor, accentColor)};
          color: white;
          transform: translateY(-1px);
        }

        /* =======================================
           🎨 Colorful Animations
        ======================================= */
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes scrollLeftToRight {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-260px * 4 - 1.5rem * 4));
          }
        }

        /* Gradient Overlays for Scroll Container */
        .scroll-overlay {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 100px;
          z-index: 2;
          pointer-events: none;
        }

        .scroll-overlay-left {
          left: 0;
          background: linear-gradient(to right, #ffffff, transparent);
        }

        .scroll-overlay-right {
          right: 0;
          background: linear-gradient(to left, #ffffff, transparent);
        }

        /* =======================================
           📱 Responsive Design
        ======================================= */
        @media (max-width: 768px) {
          .team-section {
            width: 92%;
            margin: 2rem auto;
            padding: 1.5rem 0;
          }
          
          .section-title {
            font-size: 1.7rem;
          }
          
          .team-card {
            height: 300px;
            width: 240px;
          }
          
          .image-container {
            height: 130px;
          }
          
          .card-content {
            padding: 1rem;
          }
        }

        @media (max-width: 480px) {
          .section-title {
            font-size: 1.5rem;
          }
          
          .team-card {
            height: 280px;
            width: 220px;
          }
          
          .image-container {
            height: 120px;
          }
          
          .member-name {
            font-size: 1rem;
          }
        }

        /* =======================================
           ✨ Enhanced Scrolling Effect
        ======================================= */
        .team-scroll-track::before,
        .team-scroll-track::after {
          content: "";
          display: block;
          width: 260px;
          flex-shrink: 0;
        }
      `}</style>

      <section className="team-section">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">Meet Our Team</div>
          <h1 className="section-title">Experts Behind Your Journey</h1>
          <p className="section-subtitle">
            Passionate professionals crafting your perfect travel experience
          </p>
        </div>

        {/* Horizontal Scrolling Container */}
        <div className="team-scroll-container">
          {/* Gradient Overlays */}
          <div className="scroll-overlay scroll-overlay-left"></div>
          <div className="scroll-overlay scroll-overlay-right"></div>
          
          {/* Scrolling Track */}
          <div className="team-scroll-track">
            {/* Original Cards */}
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card">
                <div className="image-container">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="member-image"
                    onError={(e) => {
                      e.target.src = `https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=200&fit=crop&crop=face&${index}`;
                    }}
                  />
                  <div className="image-overlay"></div>
                  <div className="role-badge">{member.role}</div>
                </div>

                <div className="card-content">
                  <div className="member-info">
                    <h3 className="member-name">{member.name}</h3>
                    <div className="member-role">{member.role}</div>
                    <p className="member-description">{member.description}</p>
                  </div>

                  <div className="social-links">
                    <a href={member.social.twitter} className="social-link" aria-label="Twitter">
                      🐦
                    </a>
                    <a href={member.social.linkedin} className="social-link" aria-label="LinkedIn">
                      💼
                    </a>
                    <a href={member.social.instagram} className="social-link" aria-label="Instagram">
                      📷
                    </a>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Duplicate Cards for Seamless Loop */}
            {teamMembers.map((member, index) => (
              <div key={`dup-${index}`} className="team-card">
                <div className="image-container">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="member-image"
                    onError={(e) => {
                      e.target.src = `https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=200&fit=crop&crop=face&${index}`;
                    }}
                  />
                  <div className="image-overlay"></div>
                  <div className="role-badge">{member.role}</div>
                </div>

                <div className="card-content">
                  <div className="member-info">
                    <h3 className="member-name">{member.name}</h3>
                    <div className="member-role">{member.role}</div>
                    <p className="member-description">{member.description}</p>
                  </div>

                  <div className="social-links">
                    <a href={member.social.twitter} className="social-link" aria-label="Twitter">
                      🐦
                    </a>
                    <a href={member.social.linkedin} className="social-link" aria-label="LinkedIn">
                      💼
                    </a>
                    <a href={member.social.instagram} className="social-link" aria-label="Instagram">
                      📷
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}