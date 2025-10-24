import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [isStatsOpen, setIsStatsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  // Check if mobile screen
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const handleExploreClick = () => {
    navigate("/special-packages");
  };

  const toggleStats = () => {
    setIsStatsOpen(!isStatsOpen);
  };

  const stats = [
    { number: "50+", label: "Beaches" },
    { number: "1000+", label: "Travelers" },
    { number: "4.9", label: "Rating" }
  ];

  return (
    <div style={{
      width: "100%",
      height: "100vh",
      minHeight: "600px",
      position: "relative",
      overflow: "hidden",
      background: "#000",
    }}>
      {/* Background Image */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: "url('https://wallpapers.com/images/hd/hiking-2500-x-1406-background-6zwq3juw4n6c07h2.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          animation: "floating 25s infinite ease-in-out",
          zIndex: 1
        }}
      />
      
      {/* Gradient Overlay */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.7) 100%)",
        zIndex: 2
      }} />

      {/* Simple Logo Only - No Navigation */}
      <div style={{
        position: "absolute",
        top: "clamp(20px, 4vw, 30px)",
        left: "clamp(20px, 5vw, 40px)",
        zIndex: 3
      }}>
        <div style={{
          fontSize: "clamp(1.5rem, 4vw, 2rem)",
          fontWeight: "800",
          color: "white",
          letterSpacing: "1px",
          background: "linear-gradient(45deg, #fff, #f0f0f0)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent"
        }}>
          MountainEscapes
        </div>
      </div>

      {/* Toggle Button for Mobile Stats */}
      {isMobile && (
        <button
          onClick={toggleStats}
          style={{
            position: "absolute",
            top: "clamp(20px, 4vw, 30px)",
            right: "clamp(20px, 5vw, 40px)",
            background: "rgba(255,255,255,0.15)",
            border: "none",
            color: "white",
            fontSize: "1.5rem",
            cursor: "pointer",
            padding: "10px 12px",
            borderRadius: "50%",
            transition: "all 0.3s ease",
            zIndex: 4,
            width: "50px",
            height: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backdropFilter: "blur(10px)"
          }}
        >
          {isStatsOpen ? "✕" : "📊"}
        </button>
      )}

      {/* Mobile Stats Overlay */}
      {isMobile && isStatsOpen && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0,0,0,0.95)",
          zIndex: 5,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          animation: "slideInUp 0.4s ease-out"
        }}>
          {/* Close Button */}
          <button
            onClick={toggleStats}
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              background: "transparent",
              border: "none",
              color: "white",
              fontSize: "2rem",
              cursor: "pointer",
              padding: "10px",
              zIndex: 6
            }}
          >
            ✕
          </button>

          {/* Stats Display */}
          <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "40px",
            alignItems: "center",
            width: "100%",
            padding: "0 20px"
          }}>
            <h2 style={{
              color: "white",
              fontSize: "2rem",
              fontWeight: "700",
              marginBottom: "20px",
              background: "linear-gradient(45deg, #667eea, #764ba2)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}>
              Our Achievements
            </h2>
            
            {stats.map((stat, index) => (
              <div 
                key={index}
                style={{
                  textAlign: "center",
                  animation: `fadeInUp 0.6s ease-out ${index * 0.2}s both`
                }}
              >
                <div style={{
                  fontSize: "3.5rem",
                  fontWeight: "800",
                  marginBottom: "10px",
                  background: "linear-gradient(45deg, #fff, #f8f9fa)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent"
                }}>
                  {stat.number}
                </div>
                <div style={{ 
                  fontSize: "1.2rem", 
                  color: "white",
                  opacity: 0.9,
                  fontWeight: "500"
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Main Content */}
      <div style={{
        position: "relative",
        zIndex: 3,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: "white",
        padding: "0 clamp(15px, 5vw, 30px)"
      }}>
        {/* Animated Badge */}
        <div style={{
          background: "linear-gradient(135deg, #667eea, #764ba2)",
          padding: "clamp(10px, 2vw, 12px) clamp(20px, 4vw, 28px)",
          borderRadius: "50px",
          fontSize: "clamp(0.8rem, 2.5vw, 1rem)",
          fontWeight: "600",
          letterSpacing: "1px",
          marginBottom: "clamp(15px, 3vw, 25px)",
          animation: "slideInDown 1s ease-out, pulse 2s infinite 1s",
          boxShadow: "0 8px 25px rgba(102, 126, 234, 0.4)"
        }}>
          🏔️ Premium Mountain Experiences
        </div>

        {/* Main Heading */}
        <h1 style={{
          fontSize: "clamp(2rem, 8vw, 4rem)",
          fontWeight: "800",
          marginBottom: "clamp(12px, 2vw, 20px)",
          background: "linear-gradient(45deg, #ffffff, #e8f4f8)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          animation: "fadeInUp 1.2s ease-out 0.2s both",
          lineHeight: "1.1",
          letterSpacing: "clamp(-0.5px, -0.3vw, -1px)"
        }}>
          Mountain Getaways
        </h1>

        {/* Subtitle */}
        <p style={{
          fontSize: "clamp(0.9rem, 3vw, 1.3rem)",
          marginBottom: "clamp(25px, 4vw, 40px)",
          maxWidth: "600px",
          animation: "fadeInUp 1.2s ease-out 0.4s both",
          lineHeight: "1.5",
          opacity: 0.9,
          fontWeight: "300"
        }}>
          Discover the world's most breathtaking mountain destinations with our exclusive packages
        </p>

        {/* CTA Buttons */}
        <div style={{
          display: "flex",
          gap: "clamp(12px, 2vw, 20px)",
          flexWrap: "wrap",
          justifyContent: "center",
          animation: "fadeInUp 1.2s ease-out 0.8s both",
          flexDirection: isMobile ? "column" : "row",
          width: isMobile ? "100%" : "auto",
          maxWidth: isMobile ? "300px" : "none"
        }}>
          <button 
            onClick={handleExploreClick}
            style={{
              padding: "clamp(14px, 3vw, 16px) clamp(25px, 4vw, 40px)",
              fontSize: "clamp(0.9rem, 2vw, 1rem)",
              fontWeight: "600",
              background: "linear-gradient(135deg, #667eea, #764ba2)",
              color: "white",
              border: "none",
              borderRadius: "50px",
              cursor: "pointer",
              transition: "all 0.3s ease",
              boxShadow: "0 8px 25px rgba(102, 126, 234, 0.4)",
              width: isMobile ? "100%" : "auto",
              minHeight: "50px"
            }}
            onMouseEnter={(e) => {
              if (!isMobile) {
                e.target.style.transform = "translateY(-3px)";
                e.target.style.boxShadow = "0 12px 30px rgba(102, 126, 234, 0.6)";
              }
            }}
            onMouseLeave={(e) => {
              if (!isMobile) {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "0 8px 25px rgba(102, 126, 234, 0.4)";
              }
            }}
          >
            Explore Packages
          </button>
          
          <button style={{
            padding: "clamp(14px, 3vw, 16px) clamp(25px, 4vw, 40px)",
            fontSize: "clamp(0.9rem, 2vw, 1rem)",
            fontWeight: "600",
            background: "transparent",
            color: "white",
            border: "2px solid rgba(255,255,255,0.4)",
            borderRadius: "50px",
            cursor: "pointer",
            transition: "all 0.3s ease",
            width: isMobile ? "100%" : "auto",
            minHeight: "50px"
          }}
          onMouseEnter={(e) => {
            if (!isMobile) {
              e.target.style.background = "rgba(255,255,255,0.1)";
              e.target.style.borderColor = "rgba(255,255,255,0.8)";
              e.target.style.transform = "translateY(-3px)";
            }
          }}
          onMouseLeave={(e) => {
            if (!isMobile) {
              e.target.style.background = "transparent";
              e.target.style.borderColor = "rgba(255,255,255,0.4)";
              e.target.style.transform = "translateY(0)";
            }
          }}>
            View Destinations
          </button>
        </div>

        {/* Desktop Stats - Always Visible on Desktop */}
        {!isMobile && (
          <div style={{
            display: "flex",
            gap: "clamp(20px, 3vw, 40px)",
            marginTop: "clamp(30px, 5vw, 50px)",
            animation: "fadeInUp 1.2s ease-out 1s both"
          }}>
            {stats.map((stat, index) => (
              <div key={index} style={{ textAlign: "center" }}>
                <div style={{
                  fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
                  fontWeight: "800",
                  marginBottom: "8px",
                  background: "linear-gradient(45deg, #fff, #f8f9fa)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent"
                }}>
                  {stat.number}
                </div>
                <div style={{ 
                  fontSize: "clamp(0.7rem, 1.5vw, 0.9rem)", 
                  color: "white",
                  opacity: 0.8,
                  fontWeight: "500"
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Scroll Indicator */}
      {!isStatsOpen && (
        <div style={{
          position: "absolute",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          animation: "bounce 2s infinite",
          zIndex: 3
        }}>
          <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "5px",
            color: "white",
            fontSize: "0.8rem",
            opacity: 0.7
          }}>
            <span>{isMobile ? "Tap 📊 for Stats" : "Scroll to Explore"}</span>
            {!isMobile && (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 5v14M5 12l7 7 7-7"/>
              </svg>
            )}
          </div>
        </div>
      )}

      {/* Animation Styles */}
      <style>{`
        @keyframes floating {
          0%, 100% { transform: scale(1) translateY(0px); }
          50% { transform: scale(1.05) translateY(-10px); }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateX(-50%) translateY(0);
          }
          40% {
            transform: translateX(-50%) translateY(-5px);
          }
          60% {
            transform: translateX(-50%) translateY(-2px);
          }
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        /* Mobile Specific Styles */
        @media (max-width: 480px) {
          .stats-overlay h2 {
            font-size: 1.8rem;
          }
          
          .stats-overlay div {
            font-size: 3rem !important;
          }
        }
      `}</style>
    </div>
  );
}