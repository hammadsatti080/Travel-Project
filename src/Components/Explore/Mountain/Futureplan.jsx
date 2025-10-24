import React, { useState, useEffect } from "react";

export default function Futureplan() {
  const [isMobile, setIsMobile] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [cardsVisible, setCardsVisible] = useState(false);

  const mountainImages = [
    {
      url: "https://images.unsplash.com/photo-1464822759844-e71f8e6b46d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      title: "Majestic Peaks",
      description: "Experience the grandeur of towering mountain ranges"
    },
    {
      url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      title: "Alpine Adventures",
      description: "Discover pristine alpine landscapes and crystal-clear lakes"
    },
    {
      url: "https://images.unsplash.com/photo-1464822759844-e71f8e6b46d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      title: "Mountain Wilderness",
      description: "Explore untouched wilderness and breathtaking vistas"
    }
  ];

  const upcomingTours = [
    {
      id: 1,
      title: "Himalayan Trekking Expedition",
      date: "June 10-20, 2024",
      duration: "10 Days",
      difficulty: "Advanced",
      elevation: "5,416m",
      image: "https://cdn.tourradar.com/s3/tour/1500x800/115682_82ddc53c.jpg",
      highlights: ["Base Camp Trek", "High Altitude", "Expert Guides"]
    },
    {
      id: 2,
      title: "Alpine Climbing Course",
      date: "July 5-12, 2024",
      duration: "7 Days",
      difficulty: "Intermediate",
      elevation: "3,842m",
      image: "https://www.alpine-guides.com/wp-content/uploads/2016/07/alpinemountaineering-4-2048x1146.jpg",
      highlights: ["Rock Climbing", "Glacier Travel", "Safety Training"]
    },
    {
      id: 3,
      title: "Rockies Photography Tour",
      date: "August 15-22, 2024",
      duration: "7 Days",
      difficulty: "Beginner",
      elevation: "2,800m",
      image: "https://travel-buddies.com/wp-content/uploads/2025/01/1_new-private-tour-experience-the-rockies-photography-tour.jpg",
      highlights: ["Sunrise Shoots", "Wildlife Photography", "Pro Instruction"]
    },
    {
      id: 4,
      title: "Andes Mountain Expedition",
      date: "September 1-14, 2024",
      duration: "13 Days",
      difficulty: "Expert",
      elevation: "6,962m",
      image: "https://travel-buddies.com/wp-content/uploads/2025/01/1_new-private-tour-experience-the-rockies-photography-tour.jpg",
      highlights: ["High Altitude", "Technical Climbing", "Summit Attempt"]
    }
  ];

  const planningTips = [
    {
      icon: "⛰️",
      title: "Altitude Preparation",
      description: "Proper acclimatization is crucial for high-altitude mountain adventures.",
      tips: [
        "Gradual ascent over several days",
        "Stay hydrated and avoid alcohol",
        "Recognize altitude sickness symptoms",
        "Carry emergency oxygen if needed"
      ]
    },
    {
      icon: "🎒",
      title: "Mountain Gear",
      description: "Specialized equipment ensures safety and comfort in mountain environments.",
      tips: [
        "Layered clothing system",
        "Technical hiking boots",
        "Ice axe and crampons",
        "Emergency shelter and first aid"
      ]
    },
    {
      icon: "🌦️",
      title: "Weather Awareness",
      description: "Mountain weather can change rapidly - preparation is key to safety.",
      tips: [
        "Check multiple weather sources",
        "Prepare for sudden storms",
        "Understand wind chill factors",
        "Have emergency communication"
      ]
    },
    {
      icon: "🧭",
      title: "Navigation Skills",
      description: "Proper navigation is essential in remote mountain terrain.",
      tips: [
        "Map and compass proficiency",
        "GPS device with extra batteries",
        "Understand topographic maps",
        "Leave detailed itinerary with others"
      ]
    },
    {
      icon: "🏕️",
      title: "Mountain Camping",
      description: "Camping at high altitudes requires special considerations and equipment.",
      tips: [
        "Four-season tent for wind/snow",
        "Insulated sleeping pad",
        "Stove that works at altitude",
        "Proper food storage from wildlife"
      ]
    },
    {
      icon: "🚑",
      title: "Safety & Rescue",
      description: "Emergency preparedness can save lives in mountain environments.",
      tips: [
        "Wilderness first aid training",
        "Emergency beacon or satellite phone",
        "Know evacuation routes",
        "Travel with experienced partners"
      ]
    }
  ];

  // Check if mobile screen
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Auto-scroll images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % mountainImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [mountainImages.length]);

  // Trigger card animations
  useEffect(() => {
    const timer = setTimeout(() => {
      setCardsVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return '#10B981';
      case 'Intermediate': return '#F59E0B';
      case 'Advanced': return '#EF4444';
      case 'Expert': return '#7C3AED';
      default: return '#6B7280';
    }
  };

  return (
    <div style={{ overflowX: "hidden" }}>
      {/* Hero Section - Mountain Theme */}
      <div style={{
        width: "100%",
        height: isMobile ? "70vh" : "100vh",
        minHeight: isMobile ? "500px" : "600px",
        position: "relative",
        overflow: "hidden",
        background: "#0f172a",
      }}>
        {/* Background Images with Transition */}
        {mountainImages.map((image, index) => (
          <div
            key={index}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundImage: `url('${image.url}')`,
              backgroundSize: "cover",
              backgroundPosition: isMobile ? "center center" : "center",
              backgroundRepeat: "no-repeat",
              opacity: index === currentImageIndex ? 1 : 0,
              transition: "opacity 1.5s ease-in-out",
              zIndex: 1
            }}
          />
        ))}
        
        {/* Dark Overlay for Better Text Readability */}
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, rgba(15, 23, 42, 0.7) 0%, rgba(30, 41, 59, 0.5) 100%)",
          zIndex: 2
        }} />

        {/* Snow Effect */}
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "radial-gradient(circle at 30% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)",
          zIndex: 2,
          animation: "snowFall 8s ease-in-out infinite"
        }} />

        {/* Image Navigation Dots */}
        <div style={{
          position: "absolute",
          bottom: isMobile ? "80px" : "100px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: isMobile ? "8px" : "12px",
          zIndex: 3
        }}>
          {mountainImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              style={{
                width: isMobile ? "10px" : "12px",
                height: isMobile ? "10px" : "12px",
                borderRadius: "50%",
                background: index === currentImageIndex ? "#60A5FA" : "rgba(255,255,255,0.5)",
                cursor: "pointer",
                transition: "all 0.3s ease",
                transform: index === currentImageIndex ? "scale(1.2)" : "scale(1)",
                border: "2px solid rgba(255,255,255,0.8)",
                outline: "none"
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Current Image Info */}
        <div style={{
          position: "absolute",
          bottom: isMobile ? "110px" : "140px",
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
          color: "white",
          zIndex: 3,
          background: "rgba(15, 23, 42, 0.85)",
          padding: isMobile ? "15px 20px" : "20px 30px",
          borderRadius: "20px",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(96, 165, 250, 0.3)",
          maxWidth: isMobile ? "85%" : "90%",
          animation: "slideUpInfo 0.8s ease-out",
          width: isMobile ? "90%" : "auto"
        }}>
          <h3 style={{
            margin: "0 0 8px 0",
            fontSize: isMobile ? "1.2rem" : "1.5rem",
            fontWeight: "700",
            background: "linear-gradient(45deg, #60A5FA, #3B82F6, #1D4ED8)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            lineHeight: "1.2"
          }}>
            {mountainImages[currentImageIndex].title}
          </h3>
          <p style={{
            margin: 0,
            fontSize: isMobile ? "0.85rem" : "1rem",
            opacity: 0.9,
            lineHeight: "1.4",
            color: "#E2E8F0"
          }}>
            {mountainImages[currentImageIndex].description}
          </p>
        </div>

        {/* Modern Logo */}
        <div style={{
          position: "absolute",
          top: isMobile ? "15px" : "clamp(20px, 4vw, 30px)",
          left: isMobile ? "15px" : "clamp(20px, 5vw, 40px)",
          zIndex: 3
        }}>
          <div style={{
            fontSize: isMobile ? "1.2rem" : "clamp(1.5rem, 4vw, 2rem)",
            fontWeight: "800",
            color: "white",
            letterSpacing: isMobile ? "1px" : "2px",
            textTransform: "uppercase",
            background: "linear-gradient(45deg, #60A5FA, #3B82F6, #1D4ED8)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            filter: "drop-shadow(0 0 10px rgba(96, 165, 250, 0.5))",
            lineHeight: "1.2"
          }}>
            PeakExplorers
          </div>
        </div>

        <style>{`
          @keyframes snowFall {
            0%, 100% { opacity: 0.1; transform: translateY(-10px); }
            50% { opacity: 0.3; transform: translateY(0px); }
          }
          @keyframes slideUpInfo {
            from {
              opacity: 0;
              transform: translateX(-50%) translateY(50px);
            }
            to {
              opacity: 1;
              transform: translateX(-50%) translateY(0);
            }
          }
          @keyframes cardDrop {
            0% {
              opacity: 0;
              transform: translateY(-50px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes cardFloat {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-3px); }
          }
        `}</style>
      </div>

      {/* Upcoming Tours Section */}
      <div style={{
        padding: isMobile ? "40px 15px" : "80px 20px",
        background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
        minHeight: isMobile ? "auto" : "100vh"
      }}>
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
          textAlign: "center"
        }}>
          {/* Section Header */}
          <div style={{
            marginBottom: isMobile ? "40px" : "60px",
            animation: "slideUpInfo 1s ease-out"
          }}>
            <h2 style={{
              fontSize: isMobile ? "1.8rem" : "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: "800",
              background: "linear-gradient(45deg, #60A5FA, #3B82F6, #1D4ED8)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              marginBottom: "15px",
              lineHeight: "1.2"
            }}>
              Upcoming Mountain Expeditions
            </h2>
            <p style={{
              fontSize: isMobile ? "1rem" : "1.2rem",
              color: "#E2E8F0",
              maxWidth: "600px",
              margin: "0 auto",
              lineHeight: "1.5",
              padding: isMobile ? "0 10px" : "0"
            }}>
              Conquer the world's most spectacular peaks with our expert-guided expeditions
            </p>
          </div>

          {/* Tours Grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(320px, 1fr))",
            gap: isMobile ? "20px" : "30px",
            perspective: "1000px"
          }}>
            {upcomingTours.map((tour, index) => (
              <div
                key={tour.id}
                style={{
                  background: "rgba(255,255,255,0.05)",
                  borderRadius: isMobile ? "20px" : "25px",
                  overflow: "hidden",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(96, 165, 250, 0.2)",
                  transition: "all 0.3s ease",
                  animation: cardsVisible ? `cardDrop 0.8s ease-out ${index * 0.2}s both` : "none",
                }}
                onMouseEnter={(e) => {
                  if (!isMobile) {
                    e.currentTarget.style.animation = "cardFloat 2s ease-in-out infinite";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isMobile) {
                    e.currentTarget.style.animation = "none";
                  }
                }}
                onTouchStart={(e) => {
                  if (isMobile) {
                    e.currentTarget.style.transform = "scale(0.98)";
                  }
                }}
                onTouchEnd={(e) => {
                  if (isMobile) {
                    e.currentTarget.style.transform = "scale(1)";
                  }
                }}
              >
                {/* Tour Image */}
                <div style={{
                  height: isMobile ? "180px" : "220px",
                  backgroundImage: `url(${tour.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  position: "relative",
                  borderBottom: "1px solid rgba(96, 165, 250, 0.2)"
                }}>
                  <div style={{
                    position: "absolute",
                    top: "12px",
                    right: "12px",
                    background: "rgba(15, 23, 42, 0.9)",
                    color: "white",
                    padding: isMobile ? "6px 12px" : "8px 15px",
                    borderRadius: "15px",
                    fontSize: isMobile ? "0.7rem" : "0.8rem",
                    fontWeight: "600",
                    border: "1px solid rgba(96, 165, 250, 0.3)"
                  }}>
                    {tour.difficulty}
                  </div>
                </div>

                {/* Tour Content */}
                <div style={{
                  padding: isMobile ? "20px" : "25px"
                }}>
                  <h3 style={{
                    fontSize: isMobile ? "1.2rem" : "1.4rem",
                    fontWeight: "700",
                    color: "white",
                    marginBottom: isMobile ? "12px" : "15px",
                    lineHeight: "1.3"
                  }}>
                    {tour.title}
                  </h3>

                  <div style={{
                    display: "grid",
                    gridTemplateColumns: isMobile ? "1fr 1fr" : "1fr 1fr",
                    gap: isMobile ? "12px" : "15px",
                    marginBottom: isMobile ? "15px" : "20px"
                  }}>
                    <div style={{
                      textAlign: "left"
                    }}>
                      <div style={{
                        fontSize: isMobile ? "0.7rem" : "0.8rem",
                        color: "#94A3B8",
                        marginBottom: "4px"
                      }}>
                        DATE
                      </div>
                      <div style={{
                        fontSize: isMobile ? "0.8rem" : "0.9rem",
                        color: "white",
                        fontWeight: "600"
                      }}>
                        {tour.date}
                      </div>
                    </div>
                    <div style={{
                      textAlign: "left"
                    }}>
                      <div style={{
                        fontSize: isMobile ? "0.7rem" : "0.8rem",
                        color: "#94A3B8",
                        marginBottom: "4px"
                      }}>
                        DURATION
                      </div>
                      <div style={{
                        fontSize: isMobile ? "0.8rem" : "0.9rem",
                        color: "white",
                        fontWeight: "600"
                      }}>
                        {tour.duration}
                      </div>
                    </div>
                    <div style={{
                      textAlign: "left"
                    }}>
                      <div style={{
                        fontSize: isMobile ? "0.7rem" : "0.8rem",
                        color: "#94A3B8",
                        marginBottom: "4px"
                      }}>
                        ELEVATION
                      </div>
                      <div style={{
                        fontSize: isMobile ? "0.8rem" : "0.9rem",
                        color: "white",
                        fontWeight: "600"
                      }}>
                        {tour.elevation}
                      </div>
                    </div>
                    <div style={{
                      textAlign: "left"
                    }}>
                      <div style={{
                        fontSize: isMobile ? "0.7rem" : "0.8rem",
                        color: "#94A3B8",
                        marginBottom: "4px"
                      }}>
                        LEVEL
                      </div>
                      <div style={{
                        fontSize: isMobile ? "0.8rem" : "0.9rem",
                        color: getDifficultyColor(tour.difficulty),
                        fontWeight: "600"
                      }}>
                        {tour.difficulty}
                      </div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div>
                    <h4 style={{
                      fontSize: isMobile ? "0.8rem" : "0.9rem",
                      color: "#94A3B8",
                      marginBottom: isMobile ? "10px" : "12px",
                      textTransform: "uppercase",
                      letterSpacing: "1px"
                    }}>
                      Expedition Features
                    </h4>
                    <div style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: isMobile ? "6px" : "8px"
                    }}>
                      {tour.highlights.map((highlight, index) => (
                        <span
                          key={index}
                          style={{
                            background: "rgba(96, 165, 250, 0.1)",
                            color: "#60A5FA",
                            padding: isMobile ? "4px 8px" : "6px 12px",
                            borderRadius: "12px",
                            fontSize: isMobile ? "0.7rem" : "0.8rem",
                            border: "1px solid rgba(96, 165, 250, 0.3)",
                            whiteSpace: "nowrap"
                          }}
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Planning for Next Time Section */}
      <div style={{
        padding: isMobile ? "40px 15px" : "80px 20px",
        background: "linear-gradient(135deg, #1e293b 0%, #334155 100%)",
        minHeight: isMobile ? "auto" : "100vh"
      }}>
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
          textAlign: "center"
        }}>
          {/* Section Header */}
          <div style={{
            marginBottom: isMobile ? "40px" : "60px",
            animation: "slideUpInfo 1s ease-out"
          }}>
            <h2 style={{
              fontSize: isMobile ? "1.8rem" : "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: "800",
              background: "linear-gradient(45deg, #60A5FA, #3B82F6, #1D4ED8)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              marginBottom: "15px",
              lineHeight: "1.2"
            }}>
              Mountain Expedition Planning
            </h2>
            <p style={{
              fontSize: isMobile ? "1rem" : "1.2rem",
              color: "#E2E8F0",
              maxWidth: "700px",
              margin: "0 auto",
              lineHeight: "1.5",
              padding: isMobile ? "0 10px" : "0"
            }}>
              Essential knowledge and preparation for safe and successful mountain adventures
            </p>
          </div>

          {/* Planning Tips Grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(360px, 1fr))",
            gap: isMobile ? "20px" : "30px",
            perspective: "1000px"
          }}>
            {planningTips.map((tip, index) => (
              <div
                key={index}
                style={{
                  background: "rgba(255,255,255,0.05)",
                  borderRadius: isMobile ? "20px" : "25px",
                  padding: isMobile ? "20px" : "30px",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(96, 165, 250, 0.2)",
                  transition: "all 0.3s ease",
                  textAlign: "left",
                  animation: cardsVisible ? `cardDrop 0.8s ease-out ${index * 0.1 + 0.5}s both` : "none",
                }}
                onMouseEnter={(e) => {
                  if (!isMobile) {
                    e.currentTarget.style.transform = "translateY(-5px)";
                    e.currentTarget.style.boxShadow = "0 20px 40px rgba(96, 165, 250, 0.2)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isMobile) {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }
                }}
                onTouchStart={(e) => {
                  if (isMobile) {
                    e.currentTarget.style.transform = "scale(0.98)";
                  }
                }}
                onTouchEnd={(e) => {
                  if (isMobile) {
                    e.currentTarget.style.transform = "scale(1)";
                  }
                }}
              >
                {/* Icon and Title */}
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: isMobile ? "15px" : "20px",
                  flexDirection: isMobile ? "column" : "row",
                  textAlign: isMobile ? "center" : "left"
                }}>
                  <div style={{
                    width: isMobile ? "50px" : "60px",
                    height: isMobile ? "50px" : "60px",
                    background: "rgba(96, 165, 250, 0.1)",
                    borderRadius: "15px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: isMobile ? "0" : "20px",
                    marginBottom: isMobile ? "10px" : "0",
                    border: "1px solid rgba(96, 165, 250, 0.3)"
                  }}>
                    <span style={{
                      fontSize: isMobile ? "1.5rem" : "2rem"
                    }}>
                      {tip.icon}
                    </span>
                  </div>
                  <h3 style={{
                    fontSize: isMobile ? "1.1rem" : "1.3rem",
                    fontWeight: "700",
                    color: "white",
                    margin: 0,
                    flex: 1,
                    textAlign: isMobile ? "center" : "left"
                  }}>
                    {tip.title}
                  </h3>
                </div>

                {/* Description */}
                <p style={{
                  color: "#E2E8F0",
                  lineHeight: "1.5",
                  marginBottom: isMobile ? "20px" : "25px",
                  fontSize: isMobile ? "0.85rem" : "0.95rem",
                  textAlign: isMobile ? "center" : "left"
                }}>
                  {tip.description}
                </p>

                {/* Tips List */}
                <div>
                  <h4 style={{
                    fontSize: isMobile ? "0.8rem" : "0.9rem",
                    color: "#60A5FA",
                    marginBottom: isMobile ? "12px" : "15px",
                    fontWeight: "600",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                    textAlign: isMobile ? "center" : "left"
                  }}>
                    Essential Guidelines
                  </h4>
                  <ul style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0
                  }}>
                    {tip.tips.map((item, tipIndex) => (
                      <li
                        key={tipIndex}
                        style={{
                          color: "#CBD5E1",
                          padding: isMobile ? "8px 0" : "12px 0",
                          borderBottom: "1px solid rgba(96, 165, 250, 0.1)",
                          display: "flex",
                          alignItems: "flex-start",
                          fontSize: isMobile ? "0.8rem" : "0.9rem",
                          lineHeight: "1.4"
                        }}
                      >
                        <span style={{
                          color: "#60A5FA",
                          marginRight: isMobile ? "8px" : "12px",
                          fontSize: isMobile ? "0.9rem" : "1.1rem",
                          marginTop: "2px",
                          minWidth: "10px"
                        }}>
                          ▪
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}