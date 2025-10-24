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
    navigate("/Hero");
  };

  const toggleStats = () => {
    setIsStatsOpen(!isStatsOpen);
  };

  const stats = [
    { number: "25+", label: "Cities" },
    { number: "500+", label: "Night Tours" },
    { number: "4.8", label: "Rating" }
  ];

  return (
    <div style={{
      width: "100%",
      height: "100vh",
      minHeight: "600px",
      position: "relative",
      overflow: "hidden",
      background: "#0a0a14", // Dark blue-black base matching city night
    }}>
      {/* Background Image - City Lights */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: "url('https://www.shoreexcursionsgroup.com/img/tour/CANYCLSSCHLCR-2.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          animation: "panImage 30s infinite linear",
          zIndex: 1
        }}
      />
      
      {/* Solid Color Overlay Matching Image Tones */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      //  background: "linear-gradient(45deg, rgba(15, 15, 35, 0.8) 0%, rgba(25, 25, 65, 0.6) 50%, rgba(15, 15, 35, 0.8) 100%)",
        zIndex: 2
      }} />

      {/* Accent Color Overlay - Deep Blue/Purple */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
       // background: "linear-gradient(135deg, rgba(70, 25, 120, 0.3) 0%, rgba(25, 50, 120, 0.2) 100%)",
        zIndex: 2
      }} />

      {/* Light Points Simulation */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "radial-gradient(circle at 20% 80%, rgba(100, 120, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(150, 80, 255, 0.1) 0%, transparent 50%)",
        zIndex: 2,
        animation: "pulseLights 6s ease-in-out infinite"
      }} />

      {/* Modern Logo */}
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
          letterSpacing: "3px",
          textTransform: "uppercase",
          background: "linear-gradient(45deg, #8A6DFF, #4A86FF, #6A5ACD)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          filter: "drop-shadow(0 0 10px rgba(138, 109, 255, 0.5))"
        }}>
          UrbanGlow
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
            background: "linear-gradient(135deg, #6A5ACD, #4A86FF)",
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
            boxShadow: "0 4px 15px rgba(106, 90, 205, 0.4)"
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
          background: "linear-gradient(135deg, #0a0a1a 0%, #1a1a3a 100%)",
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
              background: "linear-gradient(135deg, #6A5ACD, #4A86FF)",
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
              boxShadow: "0 4px 15px rgba(106, 90, 205, 0.4)"
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
              background: "linear-gradient(45deg, #8A6DFF, #4A86FF)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textAlign: "center"
            }}>
              Urban Adventures
            </h2>
            
            <p style={{
              color: "rgba(255,255,255,0.7)",
              fontSize: "1rem",
              textAlign: "center",
              marginBottom: "40px",
              lineHeight: "1.5"
            }}>
              Join thousands of travelers exploring city nights
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
                  border: "1px solid rgba(138, 109, 255, 0.2)",
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4)"
                }}
              >
                <div style={{
                  fontSize: "2.8rem",
                  fontWeight: "800",
                  marginBottom: "8px",
                  background: "linear-gradient(45deg, #8A6DFF, #4A86FF)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent"
                }}>
                  {stat.number}
                </div>
                <div style={{ 
                  fontSize: "1.1rem", 
                  color: "white",
                  opacity: 0.9,
                  fontWeight: "500",
                  letterSpacing: "1px"
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
        {/* Modern Badge */}
        <div style={{
        //  background: "linear-gradient(135deg, #6A5ACD, #4A86FF)",
          padding: "clamp(12px, 2vw, 14px) clamp(25px, 4vw, 35px)",
          borderRadius: "25px",
          fontSize: "clamp(0.8rem, 2.5vw, 1rem)",
          fontWeight: "600",
          letterSpacing: "2px",
          marginBottom: "clamp(20px, 3vw, 30px)",
          animation: "slideInDown 1s ease-out, glow 2s infinite 1s",
          boxShadow: "0 8px 32px rgba(106, 90, 205, 0.4)",
          textTransform: "uppercase",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(138, 109, 255, 0.3)"
        }}>
          🌆 Ultimate Night Experiences
        </div>

        {/* Main Heading */}
        <h1 style={{
          fontSize: "clamp(2.2rem, 8vw, 4.5rem)",
          fontWeight: "800",
          marginBottom: "clamp(15px, 2vw, 25px)",
         // background: "linear-gradient(45deg, #ffffff, #8A6DFF, #4A86FF)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "white",
          animation: "fadeInUp 1.2s ease-out 0.2s both",
          lineHeight: "1.1",
          letterSpacing: "clamp(-0.5px, -0.3vw, -1px)",
          textTransform: "uppercase",
          filter: "drop-shadow(0 0 20px rgba(138, 109, 255, 0.3))"
        }}>
          City Lights
          <br />
          <span style={{ fontSize: "0.7em" }}>Tour</span>
        </h1>

        {/* Subtitle */}
        <p style={{
          fontSize: "clamp(1rem, 3vw, 1.4rem)",
          marginBottom: "clamp(30px, 4vw, 50px)",
          maxWidth: "600px",
          animation: "fadeInUp 1.2s ease-out 0.4s both",
          lineHeight: "1.6",
          opacity: 0.9,
          fontWeight: "300",
          letterSpacing: "0.5px"
        }}>
          Experience the magic of urban landscapes illuminated against the night sky
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
          maxWidth: isMobile ? "320px" : "none"
        }}>
          <button 
            onClick={handleExploreClick}
            style={{
              padding: "clamp(16px, 3vw, 18px) clamp(30px, 4vw, 50px)",
              fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
              fontWeight: "700",
              background: "black",
              color: "white",
              border: "none",
              borderRadius: "15px",
              cursor: "pointer",
              transition: "all 0.3s ease",
              boxShadow: "0 8px 32px rgba(106, 90, 205, 0.4)",
              width: isMobile ? "100%" : "auto",
              minHeight: "55px",
              letterSpacing: "1px",
              textTransform: "uppercase"
            }}
            onMouseEnter={(e) => {
              if (!isMobile) {
                e.target.style.transform = "translateY(-3px) scale(1.02)";
                e.target.style.boxShadow = "0 12px 40px rgba(106, 90, 205, 0.6)";
              }
            }}
            onMouseLeave={(e) => {
              if (!isMobile) {
                e.target.style.transform = "translateY(0) scale(1)";
                e.target.style.boxShadow = "0 8px 32px rgba(106, 90, 205, 0.4)";
              }
            }}
            
          >
            Explore Night Tours
          </button>
          
          <button style={{
            padding: "clamp(16px, 3vw, 18px) clamp(30px, 4vw, 50px)",
            fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
            fontWeight: "700",
            background: "white",
            color: "black",
            border: "2px solid rgba(138, 109, 255, 0.6)",
            borderRadius: "15px",
            cursor: "pointer",
            transition: "all 0.3s ease",
            width: isMobile ? "100%" : "auto",
            minHeight: "55px",
            letterSpacing: "1px",
            textTransform: "uppercase",
            backdropFilter: "blur(10px)"
          }}
          onMouseEnter={(e) => {
            if (!isMobile) {
              e.target.style.background = "rgba(138, 109, 255, 0.1)";
              e.target.style.borderColor = "rgba(138, 109, 255, 1)";
              e.target.style.transform = "translateY(-3px)";
            }
          }}
          onMouseLeave={(e) => {
            if (!isMobile) {
              e.target.style.background = "transparent";
              e.target.style.borderColor = "rgba(138, 109, 255, 0.6)";
              e.target.style.transform = "translateY(0)";
            }
          }}>
            View City Guides
          </button>
        </div>

        {/* Desktop Stats */}
        {!isMobile && (
          <div style={{
            display: "flex",
            gap: "clamp(25px, 3vw, 50px)",
            marginTop: "clamp(40px, 5vw, 60px)",
            animation: "fadeInUp 1.2s ease-out 1s both"
          }}>
            {stats.map((stat, index) => (
              <div key={index} style={{ 
                textAlign: "center",
                background: "rgba(255,255,255,0.05)",
                padding: "20px 25px",
                borderRadius: "15px",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(138, 109, 255, 0.2)",
                minWidth: "120px"
              }}>
                <div style={{
                  fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                  fontWeight: "800",
                  marginBottom: "8px",
                  background: "linear-gradient(45deg, #8A6DFF, #4A86FF)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "white"
                }}>
                  {stat.number}
                </div>
                <div style={{ 
                  fontSize: "clamp(0.8rem, 1.5vw, 1rem)", 
                  fontWeight:"bold",
                  color: "black",
                  opacity: 0.8,
                  fontWeight: "500",
                  letterSpacing: "1px"
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
          bottom: "30px",
          left: "50%",
          transform: "translateX(-50%)",
          animation: "bounce 2s infinite",
          zIndex: 3
        }}>
          <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
            color: "rgba(255,255,255,0.7)",
            fontSize: "0.9rem",
            fontWeight: "300",
            letterSpacing: "1px"
          }}>
            <span>{isMobile ? "Tap 📊 for Stats" : "Scroll to Discover"}</span>
            {!isMobile && (
              <div style={{
                width: "2px",
                height: "30px",
                background: "linear-gradient(180deg, #8A6DFF, transparent)",
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

        @keyframes pulseLights {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }

        @keyframes glow {
          0%, 100% { box-shadow: 0 8px 32px rgba(106, 90, 205, 0.4); }
          50% { box-shadow: 0 8px 32px rgba(106, 90, 205, 0.8); }
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