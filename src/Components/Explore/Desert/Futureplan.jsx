import React, { useState, useEffect } from "react";

export default function Futureplan() {
  const [isMobile, setIsMobile] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const desertImages = [
    {
      url: "https://images2.alphacoders.com/692/thumb-1920-692907.jpg",
      title: "Sahara Desert",
      description: "The world's largest hot desert with endless golden dunes"
    },
    {
      url: "https://i.pinimg.com/originals/2b/89/0e/2b890e986b2208273898a039d74738a1.jpg",
      title: "Desert Adventure",
      description: "Experience thrilling dune bashing and camel safaris"
    },
    {
      url: "https://cdn.pixabay.com/photo/2016/11/29/01/28/arid-1866541_1280.jpg",
      title: "Arabian Desert",
      description: "Discover the rich culture and heritage of desert civilizations"
    }
  ];

  const upcomingTours = [
    {
      id: 1,
      title: "Sahara Desert Expedition",
      date: "March 15-22, 2024",
      duration: "7 Days",
      price: "$1,299",
      spots: "12 spots left",
      image: "https://cdn.pixabay.com/photo/2016/11/29/01/28/arid-1866541_1280.jpg",
      highlights: ["Camel Trekking", "Desert Camping", "Star Gazing"]
    },
    {
      id: 2,
      title: "Arabian Nights Adventure",
      date: "April 5-10, 2024",
      duration: "5 Days",
      price: "$899",
      spots: "8 spots left",
      image: "https://images2.alphacoders.com/692/thumb-1920-692907.jpg",
      highlights: ["Dune Bashing", "Traditional Dinner", "Cultural Show"]
    },
    {
      id: 3,
      title: "Mojave Desert Photography Tour",
      date: "May 12-15, 2024",
      duration: "3 Days",
      price: "$599",
      spots: "15 spots left",
      image: "https://i.pinimg.com/originals/2b/89/0e/2b890e986b2208273898a039d74738a1.jpg",
      highlights: ["Sunrise Photography", "Wildlife Spotting", "Professional Guide"]
    }
  ];

  const planningTips = [
    {
      icon: "🌡️",
      title: "Best Time to Visit",
      description: "Visit during cooler months (October to March) for comfortable temperatures and optimal desert experiences.",
      tips: [
        "Avoid summer months (June-August)",
        "Spring offers blooming desert flowers",
        "Winter provides clear night skies"
      ]
    },
    {
      icon: "🎒",
      title: "Essential Gear",
      description: "Proper preparation ensures a safe and enjoyable desert adventure.",
      tips: [
        "Lightweight, breathable clothing",
        "Sturdy hiking boots",
        "Sun protection (hat, sunscreen)",
        "Ample water supply",
        "Navigation tools"
      ]
    },
    {
      icon: "📸",
      title: "Photography Tips",
      description: "Capture the stunning beauty of desert landscapes with these professional tips.",
      tips: [
        "Golden hour for best lighting",
        "Use polarizing filters",
        "Capture star trails at night",
        "Include scale with human elements"
      ]
    }
  ];

  // Check if mobile screen
  useEffect(() => {
    const checkScreenSize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Auto-scroll images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % desertImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [desertImages.length]);

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div style={{ overflowX: "hidden" }}>
      {/* Hero Section */}
      <div style={{
        width: "100%",
        height: isMobile ? "70vh" : "100vh",
        minHeight: isMobile ? "500px" : "600px",
        position: "relative",
        overflow: "hidden",
        background: "#1a1200",
      }}>
        {/* Background Images with Transition */}
        {desertImages.map((image, index) => (
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
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              opacity: index === currentImageIndex ? 1 : 0,
              transition: "opacity 1.5s ease-in-out",
              zIndex: 1
            }}
          />
        ))}
        
        {/* Overlay for better text readability */}
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.5) 100%)",
          zIndex: 2
        }} />

        {/* Sunlight Effect */}
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "radial-gradient(circle at 70% 30%, rgba(255, 140, 0, 0.3) 0%, transparent 60%)",
          zIndex: 2,
          animation: "pulseSun 8s ease-in-out infinite"
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
          {desertImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              style={{
                width: isMobile ? "10px" : "12px",
                height: isMobile ? "10px" : "12px",
                borderRadius: "50%",
                background: index === currentImageIndex ? "#FF8C00" : "rgba(255,255,255,0.5)",
                cursor: "pointer",
                transition: "all 0.3s ease",
                transform: index === currentImageIndex ? "scale(1.2)" : "scale(1)",
                border: "none",
                outline: "none"
              }}
              aria-label={`Go to image ${index + 1}`}
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
          background: "rgba(0,0,0,0.6)",
          padding: isMobile ? "12px 20px" : "15px 25px",
          borderRadius: "15px",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 165, 0, 0.3)",
          maxWidth: isMobile ? "85%" : "90%",
          animation: "fadeInUp 0.6s ease-out",
          width: isMobile ? "90%" : "auto"
        }}>
          <h3 style={{
            margin: "0 0 8px 0",
            fontSize: isMobile ? "1.1rem" : "1.3rem",
            fontWeight: "600",
            background: "linear-gradient(45deg, #FFA500, #D2691E)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}>
            {desertImages[currentImageIndex].title}
          </h3>
          <p style={{
            margin: 0,
            fontSize: isMobile ? "0.8rem" : "0.9rem",
            opacity: 0.9,
            lineHeight: "1.4"
          }}>
            {desertImages[currentImageIndex].description}
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
            letterSpacing: "2px",
            textTransform: "uppercase",
            background: "linear-gradient(45deg, #FFA500, #D2691E, #CD853F)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            filter: "drop-shadow(0 0 10px rgba(255, 165, 0, 0.5))"
          }}>
            DesertTrails
          </div>
        </div>

        <style>{`
          @keyframes pulseSun {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 0.6; }
          }
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateX(-50%) translateY(40px);
            }
            to {
              opacity: 1;
              transform: translateX(-50%) translateY(0);
            }
          }
        `}</style>
      </div>

      {/* Upcoming Tours Section */}
      <div style={{
        padding: isMobile ? "40px 15px" : "80px 20px",
        background: "linear-gradient(135deg, #2c1a00 0%, #5a3800 100%)",
        minHeight: isMobile ? "auto" : "100vh"
      }}>
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
          textAlign: "center"
        }}>
          {/* Section Header */}
          <div style={{
            marginBottom: isMobile ? "40px" : "60px"
          }}>
            <h2 style={{
              fontSize: isMobile ? "1.8rem" : "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: "800",
              background: "linear-gradient(45deg, #FFA500, #D2691E)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              marginBottom: "20px",
              lineHeight: "1.2"
            }}>
              Upcoming Desert Tours
            </h2>
            <p style={{
              fontSize: isMobile ? "1rem" : "1.2rem",
              color: "rgba(255,255,255,0.8)",
              maxWidth: "600px",
              margin: "0 auto",
              lineHeight: "1.6",
              padding: isMobile ? "0 10px" : "0"
            }}>
              Discover our carefully curated desert expeditions for the coming months
            </p>
          </div>

          {/* Tours Grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(300px, 1fr))",
            gap: isMobile ? "20px" : "30px",
            padding: isMobile ? "0 5px" : "0"
          }}>
            {upcomingTours.map((tour) => (
              <div
                key={tour.id}
                style={{
                  background: "rgba(255,255,255,0.05)",
                  borderRadius: "20px",
                  overflow: "hidden",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 165, 0, 0.2)",
                  transition: "all 0.3s ease",
                  transform: "translateY(0)"
                }}
                onMouseEnter={(e) => {
                  if (!isMobile) {
                    e.currentTarget.style.transform = "translateY(-10px)";
                    e.currentTarget.style.boxShadow = "0 20px 40px rgba(210, 105, 30, 0.3)";
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
                {/* Tour Image */}
                <div style={{
                  height: isMobile ? "160px" : "200px",
                  backgroundImage: `url(${tour.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  position: "relative"
                }}>
                  <div style={{
                    position: "absolute",
                    top: "12px",
                    right: "12px",
                    background: "rgba(0,0,0,0.7)",
                    color: "white",
                    padding: "4px 10px",
                    borderRadius: "15px",
                    fontSize: isMobile ? "0.7rem" : "0.8rem",
                    fontWeight: "600"
                  }}>
                    {tour.spots}
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
                    marginBottom: "10px",
                    lineHeight: "1.3"
                  }}>
                    {tour.title}
                  </h3>

                  <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "15px",
                    color: "rgba(255,255,255,0.8)",
                    flexDirection: isMobile ? "column" : "row",
                    gap: isMobile ? "8px" : "0",
                    alignItems: isMobile ? "flex-start" : "center"
                  }}>
                    <span style={{ 
                      fontSize: isMobile ? "0.8rem" : "0.9rem",
                      textAlign: isMobile ? "left" : "center"
                    }}>
                      {tour.date}
                    </span>
                    <span style={{ 
                      fontSize: isMobile ? "0.9rem" : "1rem", 
                      fontWeight: "600",
                      background: "linear-gradient(45deg, #FFA500, #D2691E)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent"
                    }}>
                      {tour.price}
                    </span>
                  </div>

                  <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "20px",
                    padding: "10px 0",
                    borderBottom: "1px solid rgba(255,255,255,0.1)"
                  }}>
                    <span style={{ 
                      fontSize: isMobile ? "0.8rem" : "0.9rem",
                      color: "rgba(255,255,255,0.7)"
                    }}>
                      Duration: {tour.duration}
                    </span>
                  </div>

                  {/* Highlights */}
                  <div>
                    <h4 style={{
                      fontSize: isMobile ? "0.8rem" : "0.9rem",
                      color: "rgba(255,255,255,0.6)",
                      marginBottom: "10px",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                      textAlign: "left"
                    }}>
                      Tour Highlights
                    </h4>
                    <div style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "6px",
                      justifyContent: isMobile ? "center" : "flex-start"
                    }}>
                      {tour.highlights.map((highlight, index) => (
                        <span
                          key={index}
                          style={{
                            background: "rgba(255, 165, 0, 0.1)",
                            color: "#FFA500",
                            padding: isMobile ? "4px 8px" : "6px 12px",
                            borderRadius: "12px",
                            fontSize: isMobile ? "0.7rem" : "0.8rem",
                            border: "1px solid rgba(255, 165, 0, 0.3)",
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
        background: "linear-gradient(135deg, #1a1200 0%, #3a2a00 100%)",
        minHeight: isMobile ? "auto" : "100vh"
      }}>
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
          textAlign: "center"
        }}>
          {/* Section Header */}
          <div style={{
            marginBottom: isMobile ? "40px" : "60px"
          }}>
            <h2 style={{
              fontSize: isMobile ? "1.8rem" : "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: "800",
              background: "linear-gradient(45deg, #FFA500, #D2691E)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              marginBottom: "20px",
              lineHeight: "1.2"
            }}>
              Planning Your Next Desert Adventure
            </h2>
            <p style={{
              fontSize: isMobile ? "1rem" : "1.2rem",
              color: "rgba(255,255,255,0.8)",
              maxWidth: "700px",
              margin: "0 auto",
              lineHeight: "1.6",
              padding: isMobile ? "0 10px" : "0"
            }}>
              Get ready for your unforgettable desert journey with our comprehensive planning guide
            </p>
          </div>

          {/* Planning Tips Grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(350px, 1fr))",
            gap: isMobile ? "20px" : "30px",
            padding: isMobile ? "0 5px" : "0"
          }}>
            {planningTips.map((tip, index) => (
              <div
                key={index}
                style={{
                  background: "rgba(255,255,255,0.05)",
                  borderRadius: "20px",
                  padding: isMobile ? "20px" : "30px",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 165, 0, 0.2)",
                  transition: "all 0.3s ease",
                  textAlign: "left"
                }}
                onMouseEnter={(e) => {
                  if (!isMobile) {
                    e.currentTarget.style.transform = "translateY(-5px)";
                    e.currentTarget.style.boxShadow = "0 15px 30px rgba(210, 105, 30, 0.2)";
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
                  <span style={{
                    fontSize: isMobile ? "2rem" : "2.5rem",
                    marginRight: isMobile ? "0" : "15px",
                    marginBottom: isMobile ? "10px" : "0"
                  }}>
                    {tip.icon}
                  </span>
                  <h3 style={{
                    fontSize: isMobile ? "1.2rem" : "1.4rem",
                    fontWeight: "700",
                    color: "white",
                    margin: 0
                  }}>
                    {tip.title}
                  </h3>
                </div>

                {/* Description */}
                <p style={{
                  color: "rgba(255,255,255,0.8)",
                  lineHeight: "1.6",
                  marginBottom: isMobile ? "15px" : "20px",
                  fontSize: isMobile ? "0.9rem" : "1rem",
                  textAlign: isMobile ? "center" : "left"
                }}>
                  {tip.description}
                </p>

                {/* Tips List */}
                <div>
                  <h4 style={{
                    fontSize: isMobile ? "0.9rem" : "1rem",
                    color: "#FFA500",
                    marginBottom: "12px",
                    fontWeight: "600",
                    textAlign: isMobile ? "center" : "left"
                  }}>
                    Key Tips:
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
                          color: "rgba(255,255,255,0.7)",
                          padding: isMobile ? "6px 0" : "8px 0",
                          borderBottom: "1px solid rgba(255,255,255,0.1)",
                          display: "flex",
                          alignItems: "center",
                          fontSize: isMobile ? "0.8rem" : "0.9rem"
                        }}
                      >
                        <span style={{
                          color: "#FFA500",
                          marginRight: "10px",
                          fontSize: isMobile ? "1rem" : "1.2rem",
                          minWidth: "10px"
                        }}>
                          •
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