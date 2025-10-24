import React, { useState, useEffect } from "react";

export default function Overseasterminal() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [hoveredImage, setHoveredImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedTerminal, setSelectedTerminal] = useState(null);

  // Your terminals array remains the same...
  const terminals = [
    {
      id: 1,
      name: "DUBAI_TERMINAL_01",
      country: "🇦🇪 UAE",
      city: "Dubai",
      address: "Al Ghubaiba Bus Station, Bur Dubai, UAE",
      bgColor: "#FFD700",
      status: "ACTIVE",
      image: "https://static1.simpleflyingimages.com/wordpress/wp-content/uploads/2023/01/shutterstock_1448579084.jpg",
      phone: "+971-4-397-8888",
      timing: "24/7",
      facilities: ["VIP Lounge", "Free WiFi", "Currency Exchange"]
    },
    {
      id: 2,
      name: "LONDON_TERMINAL_02",
      country: "🇬🇧 UK",
      city: "London",
      address: "Victoria Coach Station, 164 Buckingham Palace Rd, London SW1W 9TP, UK",
      bgColor: "#C8102E",
      status: "ONLINE",
      image: "https://static1.simpleflyingimages.com/wordpress/wp-content/uploads/2023/01/shutterstock_1448579084.jpg",
      phone: "+44-20-7730-3466",
      timing: "5:00 AM - 12:00 AM",
      facilities: ["Business Center", "Cafeteria", "Luggage Storage"]
    },
    {
      id: 3,
      name: "NEWYORK_TERMINAL_03",
      country: "🇺🇸 USA",
      city: "New York",
      address: "Port Authority Bus Terminal, 625 8th Ave, New York, NY 10018, USA",
      bgColor: "#3C3B6E",
      status: "ACTIVE",
      image: "https://static1.simpleflyingimages.com/wordpress/wp-content/uploads/2023/01/shutterstock_1448579084.jpg",
      phone: "+1-212-564-8484",
      timing: "24/7",
      facilities: ["Premium Lounge", "Food Court", "ATM Services"]
    },
    {
      id: 4,
      name: "TORONTO_TERMINAL_04",
      country: "🇨🇦 Canada",
      city: "Toronto",
      address: "Union Station Bus Terminal, 81 Bay St, Toronto, ON M5J 1S7, Canada",
      bgColor: "#FF0000",
      status: "ONLINE",
      image: "https://static1.simpleflyingimages.com/wordpress/wp-content/uploads/2023/01/shutterstock_1448579084.jpg",
      phone: "+1-416-366-8411",
      timing: "5:30 AM - 1:00 AM",
      facilities: ["WiFi", "Charging Stations", "Information Desk"]
    },
    {
      id: 5,
      name: "SINGAPORE_TERMINAL_05",
      country: "🇸🇬 Singapore",
      city: "Singapore",
      address: "Queen Street Bus Terminal, 45 Queen St, Singapore 188549",
      bgColor: "#ED2939",
      status: "ACTIVE",
      image: "https://static1.simpleflyingimages.com/wordpress/wp-content/uploads/2023/01/shutterstock_1448579084.jpg",
      phone: "+65-6293-1155",
      timing: "6:00 AM - 11:30 PM",
      facilities: ["AC Lounge", "Retail Shops", "Ticket Counter"]
    },
    {
      id: 6,
      name: "DOHA_TERMINAL_06",
      country: "🇶🇦 Qatar",
      city: "Doha",
      address: "Al Ghanim Bus Station, Doha, Qatar",
      bgColor: "#8A1538",
      status: "ONLINE",
      image: "https://static1.simpleflyingimages.com/wordpress/wp-content/uploads/2023/01/shutterstock_1448579084.jpg",
      phone: "+974-4458-8888",
      timing: "24/7",
      facilities: ["Prayer Room", "Cafeteria", "Free WiFi"]
    },
    {
      id: 7,
      name: "RIYADH_TERMINAL_07",
      country: "🇸🇦 Saudi Arabia",
      city: "Riyadh",
      address: "Riyadh Bus Station, King Fahd Rd, Riyadh 11564, Saudi Arabia",
      bgColor: "#006C35",
      status: "ACTIVE",
      image: "https://static1.simpleflyingimages.com/wordpress/wp-content/uploads/2023/01/shutterstock_1448579084.jpg",
      phone: "+966-11-405-5555",
      timing: "4:00 AM - 12:00 AM",
      facilities: ["Business Class", "Food Court", "Luggage Service"]
    },
    {
      id: 8,
      name: "ISTANBUL_TERMINAL_08",
      country: "🇹🇷 Turkey",
      city: "Istanbul",
      address: "Esenler Bus Station, Bayrampaşa, Istanbul, Turkey",
      bgColor: "#E30A17",
      status: "ONLINE",
      image: "https://static1.simpleflyingimages.com/wordpress/wp-content/uploads/2023/01/shutterstock_1448579084.jpg",
      phone: "+90-212-658-2000",
      timing: "24/7",
      facilities: ["Hotel Booking", "Tourist Info", "Currency Exchange"]
    },
    {
      id: 9,
      name: "PARIS_TERMINAL_09",
      country: "🇫🇷 France",
      city: "Paris",
      address: "Gare de Bercy, 48 Bis Bd de Bercy, 75012 Paris, France",
      bgColor: "#0055A4",
      status: "ACTIVE",
      image: "https://static1.simpleflyingimages.com/wordpress/wp-content/uploads/2023/01/shutterstock_1448579084.jpg",
      phone: "+33-1-5333-5300",
      timing: "6:00 AM - 11:00 PM",
      facilities: ["First Class Lounge", "Café", "Travel Agency"]
    },
    {
      id: 10,
      name: "BERLIN_TERMINAL_10",
      country: "🇩🇪 Germany",
      city: "Berlin",
      address: "Zentraler Omnibusbahnhof Berlin, Masurenallee 4-6, 14057 Berlin, Germany",
      bgColor: "#000000",
      status: "ONLINE",
      image: "https://static1.simpleflyingimages.com/wordpress/wp-content/uploads/2023/01/shutterstock_1448579084.jpg",
      phone: "+49-30-302-0520",
      timing: "5:00 AM - 11:00 PM",
      facilities: ["Premium Waiting", "Snack Bar", "Information Center"]
    },
    {
      id: 11,
      name: "SYDNEY_TERMINAL_11",
      country: "🇦🇺 Australia",
      city: "Sydney",
      address: "Central Station, Eddy Ave, Haymarket NSW 2000, Australia",
      bgColor: "#012169",
      status: "ACTIVE",
      image: "https://static1.simpleflyingimages.com/wordpress/wp-content/uploads/2023/01/shutterstock_1448579084.jpg",
      phone: "+61-2-9379-1777",
      timing: "4:30 AM - 12:30 AM",
      facilities: ["Business Lounge", "Retail Shops", "Food Outlets"]
    },
    {
      id: 12,
      name: "TOKYO_TERMINAL_12",
      country: "🇯🇵 Japan",
      city: "Tokyo",
      address: "Shinjuku Expressway Bus Terminal, 1 Chome-12-1 Nishishinjuku, Shinjuku City, Tokyo 160-0023, Japan",
      bgColor: "#BC002D",
      status: "ONLINE",
      image: "https://static1.simpleflyingimages.com/wordpress/wp-content/uploads/2023/01/shutterstock_1448579084.jpg",
      phone: "+81-3-5339-5810",
      timing: "5:00 AM - 11:00 PM",
      facilities: ["Executive Lounge", "Convenience Store", "Ticket Counter"]
    },
    {
      id: 13,
      name: "KUALALUMPUR_TERMINAL_13",
      country: "🇲🇾 Malaysia",
      city: "Kuala Lumpur",
      address: "Pudu Sentral, Jalan Pudu, 55100 Kuala Lumpur, Malaysia",
      bgColor: "#CC0000",
      status: "ACTIVE",
      image: "https://static1.simpleflyingimages.com/wordpress/wp-content/uploads/2023/01/shutterstock_1448579084.jpg",
      phone: "+60-3-2070-5014",
      timing: "24/7",
      facilities: ["VIP Area", "Restaurant", "Shopping Arcade"]
    },
    {
      id: 14,
      name: "BEIJING_TERMINAL_14",
      country: "🇨🇳 China",
      city: "Beijing",
      address: "Beijing Zhaogongkou Long-distance Bus Station, Dongcheng District, Beijing, China",
      bgColor: "#DE2910",
      status: "ONLINE",
      image: "https://static1.simpleflyingimages.com/wordpress/wp-content/uploads/2023/01/shutterstock_1448579084.jpg",
      phone: "+86-10-6567-6092",
      timing: "5:00 AM - 10:00 PM",
      facilities: ["Business Center", "Cafeteria", "Tourist Information"]
    },
    {
      id: 15,
      name: "MOSCOW_TERMINAL_15",
      country: "🇷🇺 Russia",
      city: "Moscow",
      address: "Shchyolkovsky Bus Station, Shchyolkovskoye Shosse, 6, Moscow, Russia",
      bgColor: "#D52B1E",
      status: "ACTIVE",
      image: "https://static1.simpleflyingimages.com/wordpress/wp-content/uploads/2023/01/shutterstock_1448579084.jpg",
      phone: "+7-495-468-0400",
      timing: "24/7",
      facilities: ["Premium Lounge", "Food Court", "Luggage Service"]
    },
    {
      id: 16,
      name: "ROME_TERMINAL_16",
      country: "🇮🇹 Italy",
      city: "Rome",
      address: "Roma Tiburtina Station, Piazzale della Stazione Tiburtina, 00162 Roma RM, Italy",
      bgColor: "#009246",
      status: "ONLINE",
      image: "https://static1.simpleflyingimages.com/wordpress/wp-content/uploads/2023/01/shutterstock_1448579084.jpg",
      phone: "+39-06-4418-3101",
      timing: "5:30 AM - 11:00 PM",
      facilities: ["First Class", "Café", "Information Desk"]
    },
    {
      id: 17,
      name: "MADRID_TERMINAL_17",
      country: "🇪🇸 Spain",
      city: "Madrid",
      address: "Estación Sur de Autobuses, Calle de Méndez Álvaro, 83, 28045 Madrid, Spain",
      bgColor: "#AA151B",
      status: "ACTIVE",
      image: "https://static1.simpleflyingimages.com/wordpress/wp-content/uploads/2023/01/shutterstock_1448579084.jpg",
      phone: "+34-914-68-4200",
      timing: "6:00 AM - 12:00 AM",
      facilities: ["Executive Lounge", "Restaurant", "Shopping Area"]
    },
    {
      id: 18,
      name: "SEOUL_TERMINAL_18",
      country: "🇰🇷 South Korea",
      city: "Seoul",
      address: "Seoul Express Bus Terminal, 19 Banpo-daero, Seocho-gu, Seoul, South Korea",
      bgColor: "#003478",
      status: "ONLINE",
      image: "https://static1.simpleflyingimages.com/wordpress/wp-content/uploads/2023/01/shutterstock_1448579084.jpg",
      phone: "+82-2-536-6114",
      timing: "4:00 AM - 12:00 AM",
      facilities: ["Business Class", "Food Court", "Entertainment Zone"]
    },
    {
      id: 19,
      name: "BANGKOK_TERMINAL_19",
      country: "🇹🇭 Thailand",
      city: "Bangkok",
      address: "Mo Chit 2 Bus Terminal, 587/10 Kamphaeng Phet 2 Rd, Chatuchak, Bangkok 10900, Thailand",
      bgColor: "#ED1C24",
      status: "ACTIVE",
      image: "https://static1.simpleflyingimages.com/wordpress/wp-content/uploads/2023/01/shutterstock_1448579084.jpg",
      phone: "+66-2-936-2852",
      timing: "24/7",
      facilities: ["VIP Lounge", "Market", "Food Stalls"]
    },
    {
      id: 20,
      name: "JAKARTA_TERMINAL_20",
      country: "🇮🇩 Indonesia",
      city: "Jakarta",
      address: "Pulo Gebang Bus Terminal, Jl. Penggilingan, Cakung, East Jakarta, Indonesia",
      bgColor: "#FF0000",
      status: "ONLINE",
      image: "https://static1.simpleflyingimages.com/wordpress/wp-content/uploads/2023/01/shutterstock_1448579084.jpg",
      phone: "+62-21-4682-5888",
      timing: "24/7",
      facilities: ["Premium Waiting", "Cafeteria", "Shopping Mall"]
    }
  ];


  useEffect(() => {
    setIsLoading(false);
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 768);
      setIsTablet(width > 768 && width <= 1024);
    };
    
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const handleTerminalClick = (terminal) => {
    setSelectedTerminal(terminal);
  };

  const handlePhoneCall = (phoneNumber) => {
    window.open(`tel:${phoneNumber}`, '_self');
  };

  const closeModal = () => {
    setSelectedTerminal(null);
  };

  // Get responsive grid columns
  const getGridColumns = () => {
    if (isMobile) return "repeat(2, 1fr)";
    if (isTablet) return "repeat(3, 1fr)";
    return "repeat(auto-fit, minmax(320px, 1fr))";
  };

  // Get responsive font sizes
  const getFontSize = (mobile, tablet, desktop) => {
    if (isMobile) return mobile;
    if (isTablet) return tablet;
    return desktop;
  };

  if (isLoading) {
    return (
      <div style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #7C3AED 0%, #4F46E5 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontSize: getFontSize("1.2rem", "1.5rem", "1.5rem"),
        fontWeight: "600",
        textAlign: "center",
        padding: "20px"
      }}>
        Loading Premium Overseas Terminals...
      </div>
    );
  }

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.7) 100%)",
      padding: isMobile ? "10px 5px" : isTablet ? "25px 15px" : "40px 20px",
      fontFamily: "'Inter', sans-serif",
      WebkitTapHighlightColor: "transparent"
    }}>
      
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto"
      }}>
        
        {/* Premium Header - Improved for Mobile */}
        <div style={{
          textAlign: "center",
          marginBottom: isMobile ? "30px" : "50px",
          padding: isMobile ? "10px" : "20px"
        }}>
          <div style={{
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(20px)",
            borderRadius: isMobile ? "20px" : "25px",
            padding: isMobile ? "20px 15px" : "30px",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            display: "inline-block",
            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)",
            maxWidth: "90vw",
            width: "100%"
          }}>
            <h1 style={{
              fontSize: getFontSize("1.5rem", "2.5rem", "3.5rem"),
              fontWeight: "800",
              background: "linear-gradient(45deg, #FFFFFF, #E2E8F0)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
              marginBottom: "10px",
              textShadow: "0 4px 8px rgba(0,0,0,0.1)",
              lineHeight: 1.2
            }}>
              🌍 Premium Overseas Network
            </h1>
            <p style={{
              fontSize: getFontSize("0.85rem", "1.1rem", "1.3rem"),
              color: "rgba(255, 255, 255, 0.9)",
              fontWeight: "500",
              marginBottom: "15px",
              lineHeight: 1.4
            }}>
              {terminals.length} Premium Terminals Worldwide
            </p>
            <div style={{
              display: "flex",
              justifyContent: "center",
              gap: "10px",
              flexWrap: "wrap"
            }}>
              <span style={{
                background: "rgba(34, 197, 94, 0.3)",
                padding: "4px 12px",
                borderRadius: "15px",
                fontSize: getFontSize("0.7rem", "0.8rem", "0.8rem"),
                color: "white",
                border: "1px solid rgba(34, 197, 94, 0.5)"
              }}>
                ✈️ International
              </span>
              <span style={{
                background: "rgba(59, 130, 246, 0.3)",
                padding: "4px 12px",
                borderRadius: "15px",
                fontSize: getFontSize("0.7rem", "0.8rem", "0.8rem"),
                color: "white",
                border: "1px solid rgba(59, 130, 246, 0.5)"
              }}>
                ⭐ Premium Service
              </span>
            </div>
          </div>
        </div>

        {/* Premium Grid - Responsive */}
        <div style={{
          display: "grid",
          gridTemplateColumns: getGridColumns(),
          gap: isMobile ? "12px" : isTablet ? "20px" : "25px",
          padding: isMobile ? "0 2px" : "0"
        }}>
          {terminals.map((terminal, index) => (
            <div
              key={terminal.id}
              style={{
                background: "white",
                borderRadius: isMobile ? "16px" : "20px",
                padding: "0",
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                cursor: "pointer",
                transition: "all 0.3s ease",
                position: "relative",
                overflow: "hidden",
                minHeight: isMobile ? "280px" : "auto"
              }}
              onClick={() => handleTerminalClick(terminal)}
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
              onMouseEnter={(e) => {
                if (!isMobile) {
                  e.currentTarget.style.transform = "translateY(-8px) scale(1.02)";
                  e.currentTarget.style.boxShadow = "0 20px 40px rgba(0, 0, 0, 0.25)";
                }
              }}
              onMouseLeave={(e) => {
                if (!isMobile) {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow = "0 10px 25px rgba(0, 0, 0, 0.15)";
                }
              }}
            >
              {/* Premium Badge */}
              <div style={{
                position: "absolute",
                top: "8px",
                right: "8px",
                background: "linear-gradient(45deg, #FFD700, #FFA500)",
                padding: "3px 8px",
                borderRadius: "10px",
                fontSize: getFontSize("0.5rem", "0.6rem", "0.6rem"),
                fontWeight: "700",
                color: "#000",
                zIndex: 2,
                boxShadow: "0 2px 6px rgba(0,0,0,0.3)"
              }}>
                ⭐ PREMIUM
              </div>

              {/* Terminal Image */}
              <div 
                style={{
                  height: isMobile ? "120px" : isTablet ? "150px" : "180px",
                  backgroundImage: `url(${terminal.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  position: "relative"
                }}
                onMouseEnter={() => !isMobile && setHoveredImage(index)}
                onMouseLeave={() => !isMobile && setHoveredImage(null)}
              >
                {/* Color Accent */}
                <div style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "4px",
                  background: terminal.bgColor
                }} />
                
                {/* Hover Overlay - Only for desktop */}
                {!isMobile && hoveredImage === index && (
                  <div style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: "rgba(0, 0, 0, 0.9)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "15px",
                    transition: "all 0.3s ease"
                  }}>
                    <div style={{
                      color: "white",
                      fontSize: getFontSize("0.7rem", "0.8rem", "0.9rem"),
                      fontWeight: "600",
                      textAlign: "center",
                      lineHeight: "1.4"
                    }}>
                      📍 {terminal.address}
                    </div>
                  </div>
                )}
                
                {/* Country Flag */}
                <div style={{
                  position: "absolute",
                  top: "8px",
                  left: "8px",
                  background: "rgba(0, 0, 0, 0.9)",
                  padding: "4px 8px",
                  borderRadius: "12px",
                  color: "white",
                  fontSize: getFontSize("0.6rem", "0.7rem", "0.8rem"),
                  fontWeight: "600",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                  maxWidth: "60%",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap"
                }}>
                  {terminal.country}
                </div>
              </div>

              {/* Terminal Info */}
              <div style={{
                padding: isMobile ? "12px" : isTablet ? "15px" : "20px"
              }}>
                <div style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: "8px",
                  gap: "8px"
                }}>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{
                      fontSize: getFontSize("0.65rem", "0.8rem", "0.9rem"),
                      fontWeight: "700",
                      color: "#2d3748",
                      fontFamily: "'Courier New', monospace",
                      marginBottom: "4px",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap"
                    }}>
                      {terminal.name}
                    </div>
                    <div style={{
                      fontSize: getFontSize("0.9rem", "1.1rem", "1.2rem"),
                      fontWeight: "700",
                      color: "#4a5568",
                      marginBottom: "4px",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap"
                    }}>
                      {terminal.city}
                    </div>
                  </div>
                  <span style={{
                    fontSize: getFontSize("0.55rem", "0.65rem", "0.7rem"),
                    background: terminal.status === "ACTIVE" ? "#10b981" : "#3b82f6",
                    padding: "3px 8px",
                    borderRadius: "10px",
                    color: "white",
                    fontWeight: "600",
                    flexShrink: 0
                  }}>
                    {terminal.status}
                  </span>
                </div>

                <div style={{
                  fontSize: getFontSize("0.6rem", "0.7rem", "0.75rem"),
                  color: "#718096",
                  lineHeight: "1.3",
                  marginBottom: "10px",
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  minHeight: getFontSize("2.4rem", "2.6rem", "2.6rem")
                }}>
                  {terminal.address}
                </div>

                {/* Facilities */}
                <div style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "4px",
                  marginBottom: "12px"
                }}>
                  {terminal.facilities.slice(0, 2).map((facility, idx) => (
                    <span key={idx} style={{
                      fontSize: getFontSize("0.5rem", "0.55rem", "0.55rem"),
                      background: "#f7fafc",
                      padding: "2px 5px",
                      borderRadius: "6px",
                      color: "#4a5568",
                      border: "1px solid #e2e8f0"
                    }}>
                      {facility}
                    </span>
                  ))}
                  {terminal.facilities.length > 2 && (
                    <span style={{
                      fontSize: getFontSize("0.5rem", "0.55rem", "0.55rem"),
                      background: "#667eea",
                      padding: "2px 5px",
                      borderRadius: "6px",
                      color: "white"
                    }}>
                      +{terminal.facilities.length - 2} more
                    </span>
                  )}
                </div>

                <div style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}>
                  <span style={{
                    fontSize: getFontSize("0.55rem", "0.65rem", "0.7rem"),
                    color: "#718096"
                  }}>
                    ID: {terminal.id.toString().padStart(2, '0')}
                  </span>
                  <div style={{
                    fontSize: getFontSize("0.55rem", "0.65rem", "0.7rem"),
                    color: "#667eea",
                    fontWeight: "600",
                    background: "#f7fafc",
                    padding: "4px 8px",
                    borderRadius: "8px",
                    border: "1px solid #e2e8f0"
                  }}>
                    {isMobile ? "Tap" : "Click"} for Details
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Premium Modal for Terminal Details - Improved for Mobile */}
      {selectedTerminal && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(0, 0, 0, 0.95)",
          display: "flex",
          alignItems: isMobile ? "flex-start" : "center",
          justifyContent: "center",
          zIndex: 1000,
          padding: isMobile ? "10px" : "20px",
          overflowY: "auto",
          WebkitOverflowScrolling: "touch"
        }}
        onClick={closeModal}
        >
          <div style={{
            background: "white",
            borderRadius: isMobile ? "20px" : "25px",
            padding: isMobile ? "20px" : "30px",
            maxWidth: "450px",
            width: "100%",
            maxHeight: isMobile ? "90vh" : "auto",
            overflowY: "auto",
            boxShadow: "0 30px 60px rgba(0, 0, 0, 0.5)",
            position: "relative",
            border: "2px solid rgba(124, 58, 237, 0.3)",
            marginTop: isMobile ? "auto" : "0",
            marginBottom: isMobile ? "auto" : "0"
          }}
          onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              style={{
                position: "absolute",
                top: isMobile ? "15px" : "20px",
                right: isMobile ? "15px" : "20px",
                background: "rgba(124, 58, 237, 0.1)",
                border: "1px solid rgba(124, 58, 237, 0.3)",
                fontSize: isMobile ? "1.2rem" : "1.5rem",
                cursor: "pointer",
                color: "#7C3AED",
                width: isMobile ? "30px" : "35px",
                height: isMobile ? "30px" : "35px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.3s ease",
                zIndex: 2
              }}
              onMouseEnter={(e) => {
                e.target.style.background = "#7C3AED";
                e.target.style.color = "white";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "rgba(124, 58, 237, 0.1)";
                e.target.style.color = "#7C3AED";
              }}
            >
              ×
            </button>

            {/* Premium Header */}
            <div style={{
              textAlign: "center",
              marginBottom: isMobile ? "20px" : "25px",
              paddingBottom: isMobile ? "15px" : "20px",
              borderBottom: "2px solid #f1f5f9"
            }}>
              <div style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                background: "linear-gradient(45deg, #FFD700, #FFA500)",
                padding: "5px 12px",
                borderRadius: "15px",
                marginBottom: isMobile ? "12px" : "15px"
              }}>
                <span style={{ 
                  fontSize: getFontSize("0.7rem", "0.8rem", "0.8rem"), 
                  fontWeight: "700", 
                  color: "#000" 
                }}>
                  ⭐ PREMIUM TERMINAL
                </span>
              </div>
              <div style={{
                fontSize: getFontSize("1.5rem", "1.7rem", "1.8rem"),
                fontWeight: "800",
                color: "#2d3748",
                marginBottom: "5px",
                lineHeight: 1.2
              }}>
                {selectedTerminal.city}
              </div>
              <div style={{
                fontSize: getFontSize("0.85rem", "0.95rem", "1rem"),
                color: "#7C3AED",
                fontWeight: "600",
                fontFamily: "'Courier New', monospace"
              }}>
                {selectedTerminal.name}
              </div>
            </div>

            {/* Terminal Image */}
            <div style={{
              backgroundImage: `url(${selectedTerminal.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: isMobile ? "150px" : "180px",
              borderRadius: "15px",
              marginBottom: isMobile ? "15px" : "20px",
              position: "relative",
              boxShadow: "0 8px 20px rgba(0,0,0,0.2)"
            }}>
              <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "4px",
                background: selectedTerminal.bgColor
              }} />
            </div>

            {/* Contact Information */}
            <div style={{
              background: "#f8fafc",
              padding: isMobile ? "15px" : "20px",
              borderRadius: "12px",
              marginBottom: isMobile ? "15px" : "20px"
            }}>
              <div style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: isMobile ? "12px" : "15px",
                marginBottom: isMobile ? "12px" : "15px"
              }}>
                <div>
                  <div style={{
                    fontSize: getFontSize("0.7rem", "0.75rem", "0.8rem"),
                    color: "#718096",
                    fontWeight: "600",
                    marginBottom: "4px"
                  }}>
                    📞 Phone
                  </div>
                  <div style={{
                    fontSize: getFontSize("0.8rem", "0.85rem", "0.9rem"),
                    color: "#2d3748",
                    fontWeight: "600",
                    wordBreak: "break-all"
                  }}>
                    {selectedTerminal.phone}
                  </div>
                </div>
                <div>
                  <div style={{
                    fontSize: getFontSize("0.7rem", "0.75rem", "0.8rem"),
                    color: "#718096",
                    fontWeight: "600",
                    marginBottom: "4px"
                  }}>
                    🕒 Timing
                  </div>
                  <div style={{
                    fontSize: getFontSize("0.8rem", "0.85rem", "0.9rem"),
                    color: "#2d3748",
                    fontWeight: "600"
                  }}>
                    {selectedTerminal.timing}
                  </div>
                </div>
              </div>
              
              <div>
                <div style={{
                  fontSize: getFontSize("0.7rem", "0.75rem", "0.8rem"),
                  color: "#718096",
                  fontWeight: "600",
                  marginBottom: "4px"
                }}>
                  📍 Address
                </div>
                <div style={{
                  fontSize: getFontSize("0.75rem", "0.8rem", "0.85rem"),
                  color: "#2d3748",
                  fontWeight: "500",
                  lineHeight: "1.4"
                }}>
                  {selectedTerminal.address}
                </div>
              </div>
            </div>

            {/* Facilities */}
            <div style={{
              marginBottom: isMobile ? "20px" : "25px"
            }}>
              <div style={{
                fontSize: getFontSize("0.9rem", "1rem", "1rem"),
                fontWeight: "700",
                color: "#2d3748",
                marginBottom: isMobile ? "12px" : "15px"
              }}>
                🎯 Premium Facilities
              </div>
              <div style={{
                display: "flex",
                flexWrap: "wrap",
                gap: isMobile ? "6px" : "8px"
              }}>
                {selectedTerminal.facilities.map((facility, index) => (
                  <span key={index} style={{
                    background: "#7C3AED",
                    color: "white",
                    padding: isMobile ? "6px 10px" : "8px 12px",
                    borderRadius: "8px",
                    fontSize: getFontSize("0.7rem", "0.75rem", "0.75rem"),
                    fontWeight: "600"
                  }}>
                    {facility}
                  </span>
                ))}
              </div>
            </div>

            {/* Call Button */}
            <button
              onClick={() => handlePhoneCall(selectedTerminal.phone)}
              style={{
                width: "100%",
                background: "linear-gradient(45deg, #7C3AED, #4F46E5)",
                color: "white",
                border: "none",
                padding: isMobile ? "14px" : "15px",
                borderRadius: isMobile ? "12px" : "15px",
                fontSize: getFontSize("1rem", "1.1rem", "1.1rem"),
                fontWeight: "700",
                cursor: "pointer",
                transition: "all 0.3s ease",
                boxShadow: "0 8px 20px rgba(124, 58, 237, 0.4)",
                marginTop: "auto"
              }}
              onMouseEnter={(e) => {
                if (!isMobile) {
                  e.target.style.transform = "scale(1.03)";
                  e.target.style.boxShadow = "0 12px 25px rgba(124, 58, 237, 0.6)";
                }
              }}
              onMouseLeave={(e) => {
                if (!isMobile) {
                  e.target.style.transform = "scale(1)";
                  e.target.style.boxShadow = "0 8px 20px rgba(124, 58, 237, 0.4)";
                }
              }}
            >
              📞 Call {selectedTerminal.phone}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}