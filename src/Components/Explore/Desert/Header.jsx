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
    navigate("/desert-tours");
  };

  const toggleStats = () => {
    setIsStatsOpen(!isStatsOpen);
  };

  const stats = [
    { number: "15+", label: "Deserts" },
    { number: "300+", label: "Tours" },
    { number: "4.9", label: "Rating" }
  ];

  return (
    <div style={{
      width: "100%",
      height: "100vh",
      minHeight: "600px",
      position: "relative",
      overflow: "hidden",
      background: "#1a1200",
    }}>
      {/* Background Image - Desert */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: "url('https://facts.net/wp-content/uploads/2021/06/Sahara-Desert.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          animation: "panImage 30s infinite linear",
          zIndex: 1
        }}
      />
      
      {/* Dark Overlay for Better Text Readability */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "linear-gradient(135deg, rgba(26, 18, 0, 0.6) 0%, rgba(44, 26, 0, 0.4) 100%)",
        zIndex: 2
      }} />

      {/* Sunlight Effect */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "radial-gradient(circle at 70% 30%, rgba(255, 140, 0, 0.2) 0%, transparent 60%)",
        zIndex: 2,
        animation: "pulseSun 8s ease-in-out infinite"
      }} />

      {/* Sand Gradient */}
      <div style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        height: "40%",
        background: "linear-gradient(transparent 0%, rgba(160, 120, 40, 0.3) 100%)",
        zIndex: 2
      }} />

      {/* Modern Logo - Centered at Top */}
      <div style={{
        position: "absolute",
        top: "clamp(20px, 4vw, 30px)",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 3,
        textAlign: "center"
      }}>
        <div style={{
          fontSize: "clamp(1.5rem, 4vw, 2rem)",
          fontWeight: "800",
          color: "white",
          letterSpacing: "3px",
          textTransform: "uppercase",
          background: "linear-gradient(45deg, #FFA500, #D2691E, #CD853F)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          filter: "drop-shadow(0 0 10px rgba(255, 165, 0, 0.5))",
          lineHeight: "1.2"
        }}>
          DesertTrails
        </div>
      </div>

      {/* Stats Toggle Button */}
      {isMobile && (
        <button
          onClick={toggleStats}
          style={{
            position: "absolute",
            top: "clamp(20px, 4vw, 30px)",
            right: "clamp(20px, 5vw, 40px)",
            background: "linear-gradient(135deg, #D2691E, #FF8C00)",
            border: "none",
            color: "white",
            fontSize: "1.2rem",
            cursor: "pointer",
            padding: "12px",
            borderRadius: "12px",
            transition: "all 0.3s ease",
            zIndex: 4,
            width: "50px",
            height: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backdropFilter: "blur(10px)",
            boxShadow: "0 4px 15px rgba(210, 105, 30, 0.4)"
          }}
        >
          {isStatsOpen ? "✕" : "📊"}
        </button>
      )}

      {/* Stats Overlay */}
      {isMobile && isStatsOpen && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, #2c1a00 0%, #5a3800 100%)",
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
              top: "25px",
              right: "25px",
              background: "linear-gradient(135deg, #D2691E, #FF8C00)",
              border: "none",
              color: "white",
              fontSize: "1.5rem",
              cursor: "pointer",
              padding: "12px",
              borderRadius: "50%",
              width: "50px",
              height: "50px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 4px 15px rgba(210, 105, 30, 0.4)"
            }}
          >
            ✕
          </button>

          {/* Stats Display */}
          <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "30px",
            alignItems: "center",
            width: "100%",
            padding: "0 20px",
            maxWidth: "400px"
          }}>
            <h2 style={{
              color: "white",
              fontSize: "2.2rem",
              fontWeight: "700",
              marginBottom: "10px",
              background: "linear-gradient(45deg, #FFA500, #D2691E)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textAlign: "center",
              lineHeight: "1.2"
            }}>
              Desert Expeditions
            </h2>
            
            <p style={{
              color: "rgba(255,255,255,0.8)",
              fontSize: "1.1rem",
              textAlign: "center",
              marginBottom: "40px",
              lineHeight: "1.6",
              fontWeight: "300",
              maxWidth: "320px"
            }}>
              Discover the breathtaking beauty of vast desert landscapes
            </p>
            
            {stats.map((stat, index) => (
              <div 
                key={index}
                style={{
                  textAlign: "center",
                  animation: `fadeInUp 0.6s ease-out ${index * 0.2}s both`,
                  background: "rgba(255,255,255,0.05)",
                  padding: "25px 20px",
                  borderRadius: "20px",
                  width: "100%",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(210, 105, 30, 0.3)",
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4)"
                }}
              >
                <div style={{
                  fontSize: "2.8rem",
                  fontWeight: "800",
                  marginBottom: "8px",
                  background: "linear-gradient(45deg, #FFA500, #D2691E)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  lineHeight: "1"
                }}>
                  {stat.number}
                </div>
                <div style={{ 
                  fontSize: "1.1rem", 
                  color: "white",
                  opacity: 0.9,
                  fontWeight: "500",
                  letterSpacing: "1px",
                  lineHeight: "1.2"
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Main Content - Perfectly Centered */}
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 3,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: "white",
        padding: "0 clamp(15px, 5vw, 30px)",
        maxWidth: "1200px"
      }}>
        {/* Modern Badge */}
        <div style={{
          background: "linear-gradient(135deg, rgba(210, 105, 30, 0.9), rgba(255, 140, 0, 0.9))",
          padding: "clamp(12px, 2vw, 14px) clamp(25px, 4vw, 35px)",
          borderRadius: "25px",
          fontSize: "clamp(0.8rem, 2.5vw, 1rem)",
          fontWeight: "600",
          letterSpacing: "1.5px",
          marginBottom: "clamp(25px, 4vw, 40px)",
          animation: "slideInDown 1s ease-out, glow 2s infinite 1s",
          boxShadow: "0 8px 32px rgba(210, 105, 30, 0.4)",
          textTransform: "uppercase",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 165, 0, 0.3)",
          lineHeight: "1.3",
          textAlign: "center"
        }}>
          🏜️ Ultimate Desert Adventures
        </div>

        {/* Main Heading */}
        <div style={{
          marginBottom: "clamp(20px, 3vw, 35px)",
          animation: "fadeInUp 1.2s ease-out 0.2s both",
          textAlign: "center"
        }}>
          <h1 style={{
            fontSize: "clamp(2.5rem, 8vw, 5rem)",
            fontWeight: "800",
            background: "linear-gradient(45deg, #ffffff, #FFA500, #D2691E)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            lineHeight: "1.1",
            letterSpacing: "clamp(-1px, -0.5vw, -2px)",
            textTransform: "uppercase",
            filter: "drop-shadow(0 0 20px rgba(255, 165, 0, 0.3))",
            margin: "0 0 10px 0",
            textAlign: "center"
          }}>
            Desert
          </h1>
          <h1 style={{
            fontSize: "clamp(2rem, 6vw, 3.5rem)",
            fontWeight: "700",
            background: "linear-gradient(45deg, #FFA500, #D2691E, #CD853F)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            lineHeight: "1.1",
            letterSpacing: "clamp(0.5px, 1vw, 2px)",
            textTransform: "uppercase",
            filter: "drop-shadow(0 0 15px rgba(255, 165, 0, 0.2))",
            margin: "0",
            textAlign: "center"
          }}>
            Expeditions
          </h1>
        </div>

        {/* Subtitle */}
        <p style={{
          fontSize: "clamp(1.1rem, 3vw, 1.5rem)",
          marginBottom: "clamp(35px, 5vw, 60px)",
          maxWidth: "650px",
          animation: "fadeInUp 1.2s ease-out 0.4s both",
          lineHeight: "1.7",
          opacity: 0.9,
          fontWeight: "300",
          letterSpacing: "0.3px",
          textShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
          padding: "0 10px",
          textAlign: "center"
        }}>
          Explore the majestic beauty of golden sands and endless horizons under the desert sun
        </p>

        {/* CTA Buttons */}
        <div style={{
          display: "flex",
          gap: "clamp(15px, 2vw, 25px)",
          flexWrap: "wrap",
          justifyContent: "center",
          animation: "fadeInUp 1.2s ease-out 0.8s both",
          flexDirection: isMobile ? "column" : "row",
          width: isMobile ? "100%" : "auto",
          maxWidth: isMobile ? "320px" : "none",
          marginBottom: "clamp(30px, 5vw, 50px)",
          textAlign: "center"
        }}>
          <button 
            onClick={handleExploreClick}
            style={{
              padding: "clamp(16px, 3vw, 18px) clamp(35px, 5vw, 60px)",
              fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
              fontWeight: "700",
              background: "linear-gradient(135deg, #D2691E, #FF8C00)",
              color: "white",
              border: "none",
              borderRadius: "15px",
              cursor: "pointer",
              transition: "all 0.3s ease",
              boxShadow: "0 8px 32px rgba(210, 105, 30, 0.4)",
              width: isMobile ? "100%" : "auto",
              minHeight: "60px",
              letterSpacing: "1px",
              textTransform: "uppercase",
              lineHeight: "1.2",
              textAlign: "center"
            }}
            onMouseEnter={(e) => {
              if (!isMobile) {
                e.target.style.transform = "translateY(-3px) scale(1.02)";
                e.target.style.boxShadow = "0 12px 40px rgba(210, 105, 30, 0.6)";
              }
            }}
            onMouseLeave={(e) => {
              if (!isMobile) {
                e.target.style.transform = "translateY(0) scale(1)";
                e.target.style.boxShadow = "0 8px 32px rgba(210, 105, 30, 0.4)";
              }
            }}
            onTouchStart={(e) => {
              if (isMobile) {
                e.target.style.transform = "scale(0.98)";
              }
            }}
            onTouchEnd={(e) => {
              if (isMobile) {
                e.target.style.transform = "scale(1)";
              }
            }}
          >
            🏜️ Explore Desert Tours
          </button>
          
          <button style={{
            padding: "clamp(16px, 3vw, 18px) clamp(35px, 5vw, 60px)",
            fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
            fontWeight: "700",
            background: "transparent",
            color: "white",
            border: "2px solid rgba(255, 165, 0, 0.6)",
            borderRadius: "15px",
            cursor: "pointer",
            transition: "all 0.3s ease",
            width: isMobile ? "100%" : "auto",
            minHeight: "60px",
            letterSpacing: "1px",
            textTransform: "uppercase",
            backdropFilter: "blur(10px)",
            lineHeight: "1.2",
            textAlign: "center"
          }}
          onMouseEnter={(e) => {
            if (!isMobile) {
              e.target.style.background = "rgba(255, 165, 0, 0.1)";
              e.target.style.borderColor = "rgba(255, 165, 0, 1)";
              e.target.style.transform = "translateY(-3px)";
            }
          }}
          onMouseLeave={(e) => {
            if (!isMobile) {
              e.target.style.background = "transparent";
              e.target.style.borderColor = "rgba(255, 165, 0, 0.6)";
              e.target.style.transform = "translateY(0)";
            }
          }}
          onTouchStart={(e) => {
            if (isMobile) {
              e.target.style.transform = "scale(0.98)";
              e.target.style.background = "rgba(255, 165, 0, 0.1)";
            }
          }}
          onTouchEnd={(e) => {
            if (isMobile) {
              e.target.style.transform = "scale(1)";
              e.target.style.background = "transparent";
            }
          }}>
            📖 View Safari Guides
          </button>
        </div>

        {/* Desktop Stats - Centered */}
        {!isMobile && (
          <div style={{
            display: "flex",
            gap: "clamp(30px, 4vw, 60px)",
            marginTop: "clamp(20px, 3vw, 40px)",
            animation: "fadeInUp 1.2s ease-out 1s both",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center"
          }}>
            {stats.map((stat, index) => (
              <div key={index} style={{ 
                textAlign: "center",
                background: "rgba(255,255,255,0.05)",
                padding: "25px 30px",
                borderRadius: "20px",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 165, 0, 0.3)",
                minWidth: "140px",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.background = "rgba(255,255,255,0.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.background = "rgba(255,255,255,0.05)";
              }}>
                <div style={{
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: "800",
                  marginBottom: "8px",
                  background: "linear-gradient(45deg, #FFA500, #D2691E)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  lineHeight: "1",
                  textAlign: "center"
                }}>
                  {stat.number}
                </div>
                <div style={{ 
                  fontSize: "clamp(0.9rem, 1.5vw, 1.1rem)", 
                  color: "white",
                  opacity: 0.9,
                  fontWeight: "500",
                  letterSpacing: "1px",
                  lineHeight: "1.2",
                  textAlign: "center"
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Scroll Indicator - Centered at Bottom */}
      {!isStatsOpen && (
        <div style={{
          position: "absolute",
          bottom: "30px",
          left: "50%",
          transform: "translateX(-50%)",
          animation: "bounce 2s infinite",
          zIndex: 3,
          textAlign: "center"
        }}>
          <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "12px",
            color: "rgba(255,255,255,0.8)",
            fontSize: "0.9rem",
            fontWeight: "400",
            letterSpacing: "1px",
            textShadow: "0 1px 2px rgba(0,0,0,0.5)",
            textAlign: "center"
          }}>
            <span style={{ 
              fontSize: isMobile ? "0.8rem" : "0.9rem",
              background: "rgba(0,0,0,0.3)",
              padding: "8px 16px",
              borderRadius: "20px",
              backdropFilter: "blur(10px)",
              textAlign: "center"
            }}>
              {isMobile ? "Tap 📊 for Stats" : "Scroll to Discover"}
            </span>
            {!isMobile && (
              <div style={{
                width: "2px",
                height: "30px",
                background: "linear-gradient(180deg, #FFA500, transparent)",
                borderRadius: "2px"
              }} />
            )}
          </div>
        </div>
      )}

      {/* Animation Styles */}
      <style>{`
        @keyframes panImage {
          0% { transform: scale(1) translateX(0px) translateY(0px); }
          25% { transform: scale(1.05) translateX(-10px) translateY(-5px); }
          50% { transform: scale(1.1) translateX(0px) translateY(-10px); }
          75% { transform: scale(1.05) translateX(10px) translateY(-5px); }
          100% { transform: scale(1) translateX(0px) translateY(0px); }
        }

        @keyframes pulseSun {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }

        @keyframes glow {
          0%, 100% { box-shadow: 0 8px 32px rgba(210, 105, 30, 0.4); }
          50% { box-shadow: 0 8px 32px rgba(210, 105, 30, 0.8); }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInDown {
          from {
            opacity: 0;
            transform: translateY(-40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(60px);
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
            transform: translateX(-50%) translateY(-8px);
          }
          60% {
            transform: translateX(-50%) translateY(-4px);
          }
        }
      `}</style>
    </div>
  );
}