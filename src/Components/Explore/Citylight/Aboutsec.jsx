import React, { useState, useEffect } from "react";

export default function Aboutsec() {
  const [isMobile, setIsMobile] = useState(false);
  const [activeFestival, setActiveFestival] = useState(0);

  const festivals = [
    {
      id: 1,
      country: "🇯🇵 Japan",
      city: "Tokyo",
      title: "Tokyo Summer Fireworks Festival",
      date: "July 28, 2024",
      time: "7:00 PM - 9:00 PM",
      venue: "Sumida River, Tokyo",
      description: "Witness spectacular fireworks displays illuminating Tokyo's night sky with vibrant colors and synchronized music performances.",
      image: "https://i.pinimg.com/originals/60/85/9b/60859b4d7fc81d7c283fc05dcdf12904.jpg",
      highlights: ["10,000+ Fireworks", "Live Music", "Food Stalls", "River Views"],
      price: "Free",
      attendees: "950K+",
      rating: "4.8"
    },
    {
      id: 2,
      country: "🇹🇭 Thailand",
      city: "Chiang Mai",
      title: "Yi Peng Lantern Festival",
      date: "November 22, 2024",
      time: "6:30 PM - 11:00 PM",
      venue: "Mae Jo University, Chiang Mai",
      description: "Experience the magical sight of thousands of lanterns floating into the night sky, creating a breathtaking celestial display.",
      image: "https://onceuponajrny.com/wp-content/uploads/2018/11/Chiang-Mai-Lantern-festival-Thailand-Buddhist-ceremony.jpg",
      highlights: ["Sky Lanterns", "Traditional Dance", "Buddhist Ceremony", "Cultural Shows"],
      price: "$50-150",
      attendees: "45K+",
      rating: "4.9"
    },
    {
      id: 3,
      country: "🇮🇳 India",
      city: "Varanasi",
      title: "Ganga Aarti Ceremony",
      date: "Every Evening",
      time: "6:45 PM - 7:30 PM",
      venue: "Dashashwamedh Ghat, Varanasi",
      description: "Attend the spiritual fire ceremony on the banks of River Ganges with priests performing rituals with lamps and chanting.",
      image: "https://img.freepik.com/premium-photo/photo-yi-peng-festival-lantern-festival-chiang-mai-thailand_46383-4743.jpg",
      highlights: ["Fire Rituals", "Spiritual Chants", "River Ceremony", "Cultural Heritage"],
      price: "Free",
      attendees: "5K+ Daily",
      rating: "4.7"
    }
  ];

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const nextFestival = () => {
    setActiveFestival((prev) => (prev + 1) % festivals.length);
  };

  const prevFestival = () => {
    setActiveFestival((prev) => (prev - 1 + festivals.length) % festivals.length);
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)",
      padding: isMobile ? "40px 15px" : "80px 20px",
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      position: "relative",
      overflow: "hidden"
    }}>
      {/* Animated Background Elements */}
      <div style={{
        position: "absolute",
        top: "10%",
        left: "5%",
        width: "300px",
        height: "300px",
        background: "radial-gradient(circle, rgba(255,215,0,0.1) 0%, transparent 70%)",
        borderRadius: "50%",
        animation: "float 6s ease-in-out infinite"
      }} />
      <div style={{
        position: "absolute",
        bottom: "15%",
        right: "8%",
        width: "200px",
        height: "200px",
        background: "radial-gradient(circle, rgba(255,69,0,0.08) 0%, transparent 70%)",
        borderRadius: "50%",
        animation: "float 8s ease-in-out infinite reverse"
      }} />
      
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(180deg); }
          }
          @keyframes glow {
            0%, 100% { box-shadow: 0 0 20px rgba(255,215,0,0.3); }
            50% { box-shadow: 0 0 40px rgba(255,215,0,0.6); }
          }
          @keyframes slideIn {
            from { transform: translateX(-100px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
          }
          @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(400%); }
          }
          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
            40% { transform: translateY(-10px); }
            60% { transform: translateY(-5px); }
          }
        `}
      </style>

      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        position: "relative",
        zIndex: 2
      }}>
        {/* Innovative Header Section - WEB OPTIMIZED */}
        <div style={{
          textAlign: "center",
          marginBottom: isMobile ? "50px" : "60px",
          position: "relative"
        }}>
          {/* Animated Badge */}
          <div style={{
            background: "linear-gradient(135deg, #ffd700 0%, #ff8c00 100%)",
            padding: "14px 28px",
            borderRadius: "50px",
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "25px",
            animation: "glow 3s ease-in-out infinite",
            border: "2px solid rgba(255,255,255,0.2)",
            backdropFilter: "blur(10px)",
            position: "relative",
            overflow: "hidden"
          }}>
            <div style={{
              position: "absolute",
              top: 0,
              left: "-100%",
              width: "100%",
              height: "100%",
              background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
              animation: "shimmer 3s infinite"
            }} />
            <span style={{
              fontSize: "1.3rem",
              animation: "bounce 2s infinite"
            }}>✨</span>
            <span style={{
              color: "#1a1a2e",
              fontSize: "0.9rem",
              fontWeight: "700",
              letterSpacing: "1.5px",
              textTransform: "uppercase"
            }}>
              Global Night Festivals
            </span>
            <span style={{
              fontSize: "1.3rem",
              animation: "bounce 2s infinite 0.5s"
            }}>✨</span>
          </div>

          {/* Main Heading with Typography Hierarchy */}
          <div style={{
            marginBottom: "20px"
          }}>
            <div style={{
              fontSize: isMobile ? "0.9rem" : "1.1rem",
              color: "#ffd700",
              fontWeight: "600",
              letterSpacing: "2px",
              textTransform: "uppercase",
              marginBottom: "12px",
              textShadow: "0 0 10px rgba(255,215,0,0.5)"
            }}>
              Experience the Magic
            </div>
            
            <h1 style={{
              fontSize: isMobile ? "2.2rem" : "3.2rem",
              fontWeight: "900",
              background: "linear-gradient(135deg, #ffffff 0%, #ffd700 50%, #ff8c00 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              marginBottom: "12px",
              lineHeight: "1.1",
              letterSpacing: "-0.01em"
            }}>
              World's Most
              <br />
              <span style={{
                background: "linear-gradient(135deg, #ff8c00 0%, #ff416c 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                display: "inline-block",
                transform: "skew(-3deg)",
                textShadow: "0 0 30px rgba(255,65,108,0.3)"
              }}>
                Spectacular Nights
              </span>
            </h1>
          </div>

          {/* Subtitle with Enhanced Design */}
          <div style={{
            maxWidth: "550px",
            margin: "0 auto",
            position: "relative"
          }}>
            <p style={{
              fontSize: isMobile ? "1rem" : "1.1rem",
              color: "#e2e8f0",
              lineHeight: "1.6",
              fontWeight: "300",
              background: "rgba(255,255,255,0.05)",
              padding: "20px 25px",
              borderRadius: "18px",
              border: "1px solid rgba(255,255,255,0.1)",
              backdropFilter: "blur(10px)",
              marginBottom: "30px"
            }}>
              <span style={{
                fontSize: "1.3rem",
                marginRight: "8px",
                background: "linear-gradient(135deg, #ffd700, #ff8c00)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}>🎆</span>
              Discover breathtaking night festivals around the globe with stunning visual displays and unforgettable cultural experiences
            </p>
          </div>

          {/* Horizontal Statistics Row - WEB OPTIMIZED */}
          <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: isMobile ? "30px" : "50px",
            marginTop: "30px",
            flexWrap: "wrap"
          }}>
            {/* Countries Stat */}
            <div style={{
              textAlign: "center",
              animation: "slideIn 0.6s ease-out 0s both",
              minWidth: "100px"
            }}>
              <div style={{
                fontSize: isMobile ? "2.2rem" : "2.8rem",
                fontWeight: "800",
                background: "linear-gradient(135deg, #ffd700, #ff8c00)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                marginBottom: "6px",
                lineHeight: "1"
              }}>
                6
              </div>
              <div style={{
                fontSize: "0.85rem",
                color: "#94a3b8",
                fontWeight: "600",
                letterSpacing: "1px",
                textTransform: "uppercase"
              }}>
                Countries
              </div>
            </div>

            {/* Festivals Stat */}
            <div style={{
              textAlign: "center",
              animation: "slideIn 0.6s ease-out 0.2s both",
              minWidth: "100px"
            }}>
              <div style={{
                fontSize: isMobile ? "2.2rem" : "2.8rem",
                fontWeight: "800",
                background: "linear-gradient(135deg, #ffd700, #ff8c00)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                marginBottom: "6px",
                lineHeight: "1"
              }}>
                50+
              </div>
              <div style={{
                fontSize: "0.85rem",
                color: "#94a3b8",
                fontWeight: "600",
                letterSpacing: "1px",
                textTransform: "uppercase"
              }}>
                Festivals
              </div>
            </div>

            {/* Attendees Stat */}
            <div style={{
              textAlign: "center",
              animation: "slideIn 0.6s ease-out 0.4s both",
              minWidth: "100px"
            }}>
              <div style={{
                fontSize: isMobile ? "2.2rem" : "2.8rem",
                fontWeight: "800",
                background: "linear-gradient(135deg, #ffd700, #ff8c00)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                marginBottom: "6px",
                lineHeight: "1"
              }}>
                5M+
              </div>
              <div style={{
                fontSize: "0.85rem",
                color: "#94a3b8",
                fontWeight: "600",
                letterSpacing: "1px",
                textTransform: "uppercase"
              }}>
                Attendees
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Navigation Controls - WEB OPTIMIZED */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "40px",
          position: "relative",
          padding: "0 20px"
        }}>
          {/* Left Navigation */}
          <button
            onClick={prevFestival}
            style={{
              background: "rgba(255,255,255,0.1)",
              border: "2px solid rgba(255,215,0,0.3)",
              borderRadius: "50%",
              width: "50px",
              height: "50px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "all 0.3s ease",
              fontSize: "1.3rem",
              color: "#ffd700",
              backdropFilter: "blur(10px)"
            }}
            onMouseEnter={(e) => {
              e.target.style.background = "rgba(255,215,0,0.2)";
              e.target.style.borderColor = "#ffd700";
              e.target.style.transform = "scale(1.1)";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "rgba(255,255,255,0.1)";
              e.target.style.borderColor = "rgba(255,215,0,0.3)";
              e.target.style.transform = "scale(1)";
            }}
          >
            ←
          </button>

          {/* Progress Dots */}
          <div style={{
            display: "flex",
            gap: "10px",
            alignItems: "center"
          }}>
            {festivals.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveFestival(index)}
                style={{
                  width: index === activeFestival ? "20px" : "10px",
                  height: "10px",
                  borderRadius: "50px",
                  background: index === activeFestival 
                    ? "linear-gradient(135deg, #ffd700, #ff8c00)" 
                    : "rgba(255,255,255,0.3)",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.3s ease"
                }}
              />
            ))}
          </div>

          {/* Right Navigation */}
          <button
            onClick={nextFestival}
            style={{
              background: "rgba(255,255,255,0.1)",
              border: "2px solid rgba(255,215,0,0.3)",
              borderRadius: "50%",
              width: "50px",
              height: "50px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "all 0.3s ease",
              fontSize: "1.3rem",
              color: "#ffd700",
              backdropFilter: "blur(10px)"
            }}
            onMouseEnter={(e) => {
              e.target.style.background = "rgba(255,215,0,0.2)";
              e.target.style.borderColor = "#ffd700";
              e.target.style.transform = "scale(1.1)";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "rgba(255,255,255,0.1)";
              e.target.style.borderColor = "rgba(255,215,0,0.3)";
              e.target.style.transform = "scale(1)";
            }}
          >
            →
          </button>
        </div>

        {/* Main Festival Card - WEB OPTIMIZED */}
        <div style={{
          background: "rgba(255,255,255,0.05)",
          borderRadius: "25px",
          overflow: "hidden",
          boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.25)",
          border: "1px solid rgba(255,255,255,0.1)",
          display: isMobile ? "block" : "flex",
          minHeight: "500px",
          transition: "all 0.3s ease",
          backdropFilter: "blur(10px)",
          margin: "0 auto",
          maxWidth: "1000px"
        }}>
          {/* Image Section */}
          <div style={{
            flex: isMobile ? "none" : "1",
            position: "relative",
            height: isMobile ? "300px" : "auto",
            backgroundImage: `url(${festivals[activeFestival].image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            minHeight: isMobile ? "300px" : "400px"
          }}>
            {/* Gradient Overlay */}
            <div style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "linear-gradient(135deg, rgba(255,215,0,0.1) 0%, rgba(255,140,0,0.2) 100%)"
            }} />
            
            {/* Country Badge */}
            <div style={{
              position: "absolute",
              top: "20px",
              left: "20px",
              background: "rgba(0,0,0,0.7)",
              padding: "8px 16px",
              borderRadius: "20px",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255,215,0,0.3)"
            }}>
              <span style={{
                fontSize: "0.9rem",
                fontWeight: "600",
                color: "#ffd700"
              }}>
                {festivals[activeFestival].country}
              </span>
            </div>

            {/* Rating Badge */}
            <div style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              background: "rgba(0,0,0,0.7)",
              padding: "8px 12px",
              borderRadius: "20px",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255,215,0,0.3)",
              display: "flex",
              alignItems: "center",
              gap: "4px"
            }}>
              <span style={{ color: "#ffd700" }}>⭐</span>
              <span style={{
                fontSize: "0.9rem",
                fontWeight: "600",
                color: "#ffffff"
              }}>
                {festivals[activeFestival].rating}
              </span>
            </div>
          </div>

          {/* Content Section */}
          <div style={{
            flex: isMobile ? "none" : "1",
            padding: isMobile ? "25px" : "35px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
          }}>
            {/* Header Info */}
            <div>
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "15px"
              }}>
                <div style={{
                  background: "linear-gradient(135deg, #ffd700 0%, #ff8c00 100%)",
                  padding: "6px 14px",
                  borderRadius: "18px",
                  fontSize: "0.85rem",
                  fontWeight: "700",
                  color: "#1a1a2e"
                }}>
                  {festivals[activeFestival].city}
                </div>
                <div style={{
                  fontSize: "0.9rem",
                  color: "#ffd700",
                  fontWeight: "600"
                }}>
                  {festivals[activeFestival].attendees} Attendees
                </div>
              </div>

              <h2 style={{
                fontSize: isMobile ? "1.6rem" : "2rem",
                fontWeight: "800",
                color: "#ffffff",
                marginBottom: "15px",
                lineHeight: "1.2"
              }}>
                {festivals[activeFestival].title}
              </h2>

              <p style={{
                fontSize: isMobile ? "0.95rem" : "1.05rem",
                color: "#e2e8f0",
                lineHeight: "1.6",
                marginBottom: "25px"
              }}>
                {festivals[activeFestival].description}
              </p>

              {/* Date & Time */}
              <div style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                gap: "15px",
                marginBottom: "25px"
              }}>
                <div style={{
                  background: "rgba(255,255,255,0.08)",
                  padding: "15px",
                  borderRadius: "12px",
                  border: "1px solid rgba(255,215,0,0.2)"
                }}>
                  <div style={{
                    fontSize: "0.8rem",
                    color: "#ffd700",
                    marginBottom: "6px",
                    fontWeight: "600"
                  }}>
                    📅 DATE
                  </div>
                  <div style={{
                    fontSize: "1rem",
                    fontWeight: "700",
                    color: "#ffffff"
                  }}>
                    {festivals[activeFestival].date}
                  </div>
                </div>
                <div style={{
                  background: "rgba(255,255,255,0.08)",
                  padding: "15px",
                  borderRadius: "12px",
                  border: "1px solid rgba(255,215,0,0.2)"
                }}>
                  <div style={{
                    fontSize: "0.8rem",
                    color: "#ffd700",
                    marginBottom: "6px",
                    fontWeight: "600"
                  }}>
                    ⏰ TIME
                  </div>
                  <div style={{
                    fontSize: "1rem",
                    fontWeight: "700",
                    color: "#ffffff"
                  }}>
                    {festivals[activeFestival].time}
                  </div>
                </div>
              </div>

              {/* Venue */}
              <div style={{
                background: "rgba(255,255,255,0.08)",
                padding: "15px",
                borderRadius: "12px",
                border: "1px solid rgba(255,215,0,0.2)",
                marginBottom: "25px"
              }}>
                <div style={{
                  fontSize: "0.8rem",
                  color: "#ffd700",
                  marginBottom: "6px",
                  fontWeight: "600"
                }}>
                  📍 VENUE
                </div>
                <div style={{
                  fontSize: "1rem",
                  fontWeight: "700",
                  color: "#ffffff"
                }}>
                  {festivals[activeFestival].venue}
                </div>
              </div>

              {/* Highlights */}
              <div style={{
                marginBottom: "25px"
              }}>
                <h4 style={{
                  fontSize: "0.9rem",
                  color: "#ffd700",
                  marginBottom: "12px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px"
                }}>
                  Festival Highlights
                </h4>
                <div style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px"
                }}>
                  {festivals[activeFestival].highlights.map((highlight, index) => (
                    <span
                      key={index}
                      style={{
                        background: "linear-gradient(135deg, rgba(255,215,0,0.2) 0%, rgba(255,140,0,0.3) 100%)",
                        color: "#ffd700",
                        padding: "8px 14px",
                        borderRadius: "20px",
                        fontSize: "0.8rem",
                        fontWeight: "600",
                        border: "1px solid rgba(255,215,0,0.3)",
                        backdropFilter: "blur(10px)"
                      }}
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer Actions */}
            <div style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "15px"
            }}>
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "8px"
              }}>
                <span style={{
                  fontSize: "1.5rem",
                  fontWeight: "800",
                  color: "#ffd700"
                }}>
                  {festivals[activeFestival].price === "Free" ? "FREE" : festivals[activeFestival].price}
                </span>
                {festivals[activeFestival].price !== "Free" && (
                  <span style={{
                    fontSize: "0.9rem",
                    color: "#94a3b8"
                  }}>
                    per person
                  </span>
                )}
              </div>
              
              <button style={{
                background: "linear-gradient(135deg, #ffd700 0%, #ff8c00 100%)",
                color: "#1a1a2e",
                border: "none",
                padding: "15px 28px",
                borderRadius: "12px",
                fontSize: "1rem",
                fontWeight: "700",
                cursor: "pointer",
                transition: "all 0.3s ease",
                boxShadow: "0 4px 15px rgba(255,215,0,0.4)"
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow = "0 6px 20px rgba(255,215,0,0.6)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "0 4px 15px rgba(255,215,0,0.4)";
              }}>
                Book Your Experience
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}