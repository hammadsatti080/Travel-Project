import React, { useState, useEffect } from "react";

export default function Pakistanterminal() {
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredImage, setHoveredImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedTerminal, setSelectedTerminal] = useState(null);

  // 20 Cities with proper terminals data
  const terminals = [
    {
      id: 1,
      name: "KARACHI_TERMINAL_01",
      country: "🇵🇰 Pakistan",
      city: "Karachi",
      address: "Sea View, Clifton, Karachi, Pakistan",
      bgColor: "#1e40af",
      status: "ACTIVE",
      image: "https://daewoo.com.pk/Theme/images/Terminals/Terminal16.jpg",
      phone: "+92-21-111-007-008"
    },
    {
      id: 2,
      name: "LAHORE_TERMINAL_02",
      country: "🇵🇰 Pakistan",
      city: "Lahore",
      address: "Badshahi Mosque, Lahore, Punjab, Pakistan",
      bgColor: "#dc2626",
      status: "ONLINE",
      image: "https://daewoo.com.pk/Theme/images/Terminals/Terminal21.jpg",
      phone: "+92-42-111-007-008"
    },
    {
      id: 3,
      name: "ISLAMABAD_TERMINAL_03",
      country: "🇵🇰 Pakistan",
      city: "Islamabad",
      address: "Faisal Mosque, Islamabad, Pakistan",
      bgColor: "#059669",
      status: "ACTIVE",
      image: "https://daewoo.com.pk/Theme/images/Terminals/Terminal117.jpg",
      phone: "+92-51-111-007-008"
    },
    {
      id: 4,
      name: "RAWALPINDI_TERMINAL_04",
      country: "🇵🇰 Pakistan",
      city: "Rawalpindi",
      address: "Raja Bazaar, Rawalpindi, Pakistan",
      bgColor: "#7c3aed",
      status: "ONLINE",
      image: "https://daewoo.com.pk/Theme/images/Terminals/Terminal22.jpg",
      phone: "+92-51-111-007-009"
    },
    {
      id: 5,
      name: "PESHAWAR_TERMINAL_05",
      country: "🇵🇰 Pakistan",
      city: "Peshawar",
      address: "Qissa Khwani Bazaar, Peshawar, Pakistan",
      bgColor: "#ea580c",
      status: "ACTIVE",
      image: "https://daewoo.com.pk/Theme/images/Terminals/Terminal26.jpg",
      phone: "+92-91-111-007-008"
    },
    {
      id: 6,
      name: "QUETTA_TERMINAL_06",
      country: "🇵🇰 Pakistan",
      city: "Quetta",
      address: "Hanna Lake, Quetta, Balochistan, Pakistan",
      bgColor: "#0d9488",
      status: "ONLINE",
      image: "https://daewoo.com.pk/Theme/images/Terminals/Terminal25.jpg",
      phone: "+92-81-111-007-008"
    },
    {
      id: 7,
      name: "MULTAN_TERMINAL_07",
      country: "🇵🇰 Pakistan",
      city: "Multan",
      address: "Tomb of Shah Rukn-e-Alam, Multan, Pakistan",
      bgColor: "#be185d",
      status: "ACTIVE",
      image: "https://daewoo.com.pk/Theme/images/Terminals/Terminal5.jpg",
      phone: "+92-61-111-007-008"
    },
    {
      id: 8,
      name: "FAISALABAD_TERMINAL_08",
      country: "🇵🇰 Pakistan",
      city: "Faisalabad",
      address: "Clock Tower, Faisalabad, Punjab, Pakistan",
      bgColor: "#4338ca",
      status: "ONLINE",
      image: "https://daewoo.com.pk/Theme/images/Terminals/Terminal25.jpg",
      phone: "+92-41-111-007-008"
    },
    {
      id: 9,
      name: "HYDERABAD_TERMINAL_09",
      country: "🇵🇰 Pakistan",
      city: "Hyderabad",
      address: "Rani Bagh, Hyderabad, Sindh, Pakistan",
      bgColor: "#ca8a04",
      status: "ACTIVE",
      image: "https://daewoo.com.pk/Theme/images/Terminals/Terminal35.jpg",
      phone: "+92-22-111-007-008"
    },
    {
      id: 10,
      name: "SIALKOT_TERMINAL_10",
      country: "🇵🇰 Pakistan",
      city: "Sialkot",
      address: "Iqbal Stadium, Sialkot, Punjab, Pakistan",
      bgColor: "#65a30d",
      status: "ONLINE",
      image: "https://daewoo.com.pk/Theme/images/Terminals/Terminal35.jpg",
      phone: "+92-52-111-007-008"
    },
    {
      id: 11,
      name: "GUJRANWALA_TERMINAL_11",
      country: "🇵🇰 Pakistan",
      city: "Gujranwala",
      address: "Gujranwala Clock Tower, Punjab, Pakistan",
      bgColor: "#7e22ce",
      status: "ACTIVE",
      image: "https://daewoo.com.pk/Theme/images/Terminals/Terminal35.jpg",
      phone: "+92-55-111-007-008"
    },
    {
      id: 12,
      name: "SAHIWAL_TERMINAL_12",
      country: "🇵🇰 Pakistan",
      city: "Sahiwal",
      address: "Sahiwal Fort, Punjab, Pakistan",
      bgColor: "#be123c",
      status: "ONLINE",
      image: "https://daewoo.com.pk/Theme/images/Terminals/Terminal35.jpg",
      phone: "+92-40-111-007-008"
    },
    {
      id: 13,
      name: "BAHAWALPUR_TERMINAL_13",
      country: "🇵🇰 Pakistan",
      city: "Bahawalpur",
      address: "Noor Mahal, Bahawalpur, Pakistan",
      bgColor: "#0f766e",
      status: "ACTIVE",
      image: "https://daewoo.com.pk/Theme/images/Terminals/Terminal35.jpg",
      phone: "+92-62-111-007-008"
    },
    {
      id: 14,
      name: "SARGODHA_TERMINAL_14",
      country: "🇵🇰 Pakistan",
      city: "Sargodha",
      address: "Sargodha Airbase, Punjab, Pakistan",
      bgColor: "#1d4ed8",
      status: "ONLINE",
      image: "https://daewoo.com.pk/Theme/images/Terminals/Terminal5.jpg",
      phone: "+92-48-111-007-008"
    },
    {
      id: 15,
      name: "MIRPUR_TERMINAL_15",
      country: "🇵🇰 Pakistan",
      city: "Mirpur",
      address: "Mangla Dam, Mirpur, Azad Kashmir, Pakistan",
      bgColor: "#c2410c",
      status: "ACTIVE",
      image: "https://daewoo.com.pk/Theme/images/Terminals/Terminal52.jpg",
      phone: "+92-58-111-007-008"
    },
    {
      id: 16,
      name: "SUKKUR_TERMINAL_16",
      country: "🇵🇰 Pakistan",
      city: "Sukkur",
      address: "Sukkur Barrage, Sindh, Pakistan",
      bgColor: "#7c2d12",
      status: "ONLINE",
      image: "https://daewoo.com.pk/Theme/images/Terminals/Terminal52.jpg",
      phone: "+92-71-111-007-008"
    },
    {
      id: 17,
      name: "LARKANA_TERMINAL_17",
      country: "🇵🇰 Pakistan",
      city: "Larkana",
      address: "Moenjo Daro, Larkana, Sindh, Pakistan",
      bgColor: "#374151",
      status: "ACTIVE",
      image: "https://daewoo.com.pk/Theme/images/Terminals/Terminal11.jpg",
      phone: "+92-74-111-007-008"
    },
    {
      id: 18,
      name: "GWADAR_TERMINAL_18",
      country: "🇵🇰 Pakistan",
      city: "Gwadar",
      address: "Gwadar Port, Balochistan, Pakistan",
      bgColor: "#0369a1",
      status: "ONLINE",
      image: "https://daewoo.com.pk/Theme/images/Terminals/Terminal35.jpg",
      phone: "+92-86-111-007-008"
    },
    {
      id: 19,
      name: "CHITRAL_TERMINAL_19",
      country: "🇵🇰 Pakistan",
      city: "Chitral",
      address: "Tirich Mir, Chitral, KPK, Pakistan",
      bgColor: "#1e3a8a",
      status: "ACTIVE",
      image: "https://daewoo.com.pk/Theme/images/Terminals/Terminal35.jpg",
      phone: "+92-94-111-007-008"
    },
    {
      id: 20,
      name: "MUZAFFARABAD_TERMINAL_20",
      country: "🇵🇰 Pakistan",
      city: "Muzaffarabad",
      address: "Neelum Valley, Muzaffarabad, Azad Kashmir, Pakistan",
      bgColor: "#15803d",
      status: "ONLINE",
      image: "https://daewoo.com.pk/Theme/images/Terminals/Terminal11.jpg",
      phone: "+92-58-111-007-009"
    }
  ];

  useEffect(() => {
    setIsLoading(false);
    
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
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

  if (isLoading) {
    return (
      <div style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.7) 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
      }}>
        <div style={{
          color: "white",
          fontSize: "1.5rem",
          fontWeight: "600"
        }}>
          Loading Pakistan Terminals...
        </div>
      </div>
    );
  }

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.7) 100%)",
      padding: isMobile ? "15px 10px" : "40px 20px",
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
    }}>
      
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto"
      }}>
        
        {/* Header */}
        <div style={{
          textAlign: "center",
          marginBottom: "40px",
          padding: "20px"
        }}>
          <div style={{
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(10px)",
            borderRadius: "20px",
            padding: "25px",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            display: "inline-block"
          }}>
            <h1 style={{
              fontSize: isMobile ? "1.8rem" : "3rem",
              fontWeight: "800",
              background: "linear-gradient(45deg, #ffffff, #e2e8f0)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
              marginBottom: "10px"
            }}>
              Pakistan Terminal Network
            </h1>
            <p style={{
              fontSize: isMobile ? "1rem" : "1.2rem",
              color: "rgba(255, 255, 255, 0.9)",
              fontWeight: "500"
            }}>
              {terminals.length} Terminals Across Pakistan
            </p>
          </div>
        </div>

        {/* Terminals Grid - Mobile: 2 cards per row */}
        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(auto-fit, minmax(300px, 1fr))",
          gap: isMobile ? "12px" : "20px",
          padding: isMobile ? "0 5px" : "0"
        }}>
          {terminals.map((terminal, index) => (
            <div
              key={terminal.id}
              style={{
                background: "white",
                borderRadius: "15px",
                padding: "0",
                boxShadow: "0 8px 25px rgba(0, 0, 0, 0.15)",
                border: "1px solid #e2e8f0",
                cursor: "pointer",
                transition: "all 0.3s ease",
                position: "relative",
                overflow: "hidden"
              }}
              onClick={() => handleTerminalClick(terminal)}
              onMouseEnter={(e) => {
                if (!isMobile) {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = "0 15px 35px rgba(0, 0, 0, 0.2)";
                }
              }}
              onMouseLeave={(e) => {
                if (!isMobile) {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 8px 25px rgba(0, 0, 0, 0.15)";
                }
              }}
            >
              {/* Terminal Image */}
              <div 
                style={{
                  height: isMobile ? "120px" : "160px",
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
                
                {/* Hover Overlay with Address */}
                {!isMobile && hoveredImage === index && (
                  <div style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: "rgba(0, 0, 0, 0.8)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "15px",
                    transition: "all 0.3s ease"
                  }}>
                    <div style={{
                      color: "white",
                      fontSize: "0.8rem",
                      fontWeight: "600",
                      textAlign: "center",
                      lineHeight: "1.3"
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
                  background: "rgba(0, 0, 0, 0.8)",
                  padding: "4px 8px",
                  borderRadius: "12px",
                  color: "white",
                  fontSize: isMobile ? "0.6rem" : "0.7rem",
                  fontWeight: "600"
                }}>
                  {terminal.country}
                </div>

                {/* Status Badge */}
                <div style={{
                  position: "absolute",
                  top: "8px",
                  right: "8px",
                  background: terminal.status === "ACTIVE" ? "#10b981" : "#3b82f6",
                  padding: "3px 8px",
                  borderRadius: "10px",
                  color: "white",
                  fontSize: isMobile ? "0.5rem" : "0.6rem",
                  fontWeight: "600"
                }}>
                  {terminal.status}
                </div>
              </div>

              {/* Terminal Info */}
              <div style={{
                padding: isMobile ? "12px" : "15px"
              }}>
                <div style={{
                  fontSize: isMobile ? "0.7rem" : "0.8rem",
                  fontWeight: "700",
                  color: "#2d3748",
                  fontFamily: "'Courier New', monospace",
                  marginBottom: "5px",
                  lineHeight: "1.2"
                }}>
                  {terminal.name}
                </div>

                <div style={{
                  fontSize: isMobile ? "0.9rem" : "1rem",
                  fontWeight: "700",
                  color: "#4a5568",
                  marginBottom: "5px"
                }}>
                  {terminal.city}
                </div>

                <div style={{
                  fontSize: isMobile ? "0.6rem" : "0.7rem",
                  color: "#718096",
                  lineHeight: "1.2",
                  marginBottom: "10px",
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden"
                }}>
                  {terminal.address}
                </div>

                <div style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}>
                  <span style={{
                    fontSize: isMobile ? "0.5rem" : "0.6rem",
                    color: "#718096"
                  }}>
                    ID: {terminal.id.toString().padStart(2, '0')}
                  </span>
                  <div style={{
                    fontSize: isMobile ? "0.5rem" : "0.6rem",
                    color: "#667eea",
                    fontWeight: "600",
                    background: "#f7fafc",
                    padding: "4px 8px",
                    borderRadius: "8px",
                    border: "1px solid #e2e8f0"
                  }}>
                    Tap for Details
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Terminal Details */}
      {selectedTerminal && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(0, 0, 0, 0.8)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1000,
          padding: "20px"
        }}
        onClick={closeModal}
        >
          <div style={{
            background: "white",
            borderRadius: "20px",
            padding: "25px",
            maxWidth: "400px",
            width: "100%",
            boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
            position: "relative"
          }}
          onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              style={{
                position: "absolute",
                top: "15px",
                right: "15px",
                background: "none",
                border: "none",
                fontSize: "1.5rem",
                cursor: "pointer",
                color: "#718096",
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              ×
            </button>

            <div style={{
              textAlign: "center",
              marginBottom: "20px"
            }}>
              <div style={{
                fontSize: "1.5rem",
                fontWeight: "700",
                color: "#2d3748",
                marginBottom: "5px"
              }}>
                {selectedTerminal.city}
              </div>
              <div style={{
                fontSize: "0.9rem",
                color: "#667eea",
                fontWeight: "600",
                fontFamily: "'Courier New', monospace"
              }}>
                {selectedTerminal.name}
              </div>
            </div>

            <div style={{
              backgroundImage: `url(${selectedTerminal.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "150px",
              borderRadius: "12px",
              marginBottom: "20px",
              position: "relative"
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

            <div style={{
              background: "#f8fafc",
              padding: "15px",
              borderRadius: "12px",
              marginBottom: "15px"
            }}>
              <div style={{
                fontSize: "0.8rem",
                color: "#718096",
                fontWeight: "600",
                marginBottom: "5px"
              }}>
                📍 Address
              </div>
              <div style={{
                fontSize: "0.9rem",
                color: "#2d3748",
                fontWeight: "500"
              }}>
                {selectedTerminal.address}
              </div>
            </div>

            <div style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "20px"
            }}>
              <div>
                <div style={{
                  fontSize: "0.8rem",
                  color: "#718096",
                  fontWeight: "600"
                }}>
                  Status
                </div>
                <div style={{
                  fontSize: "0.9rem",
                  color: selectedTerminal.status === "ACTIVE" ? "#059669" : "#3b82f6",
                  fontWeight: "600"
                }}>
                  {selectedTerminal.status}
                </div>
              </div>
              <div>
                <div style={{
                  fontSize: "0.8rem",
                  color: "#718096",
                  fontWeight: "600"
                }}>
                  Terminal ID
                </div>
                <div style={{
                  fontSize: "0.9rem",
                  color: "#2d3748",
                  fontWeight: "600"
                }}>
                  #{selectedTerminal.id.toString().padStart(2, '0')}
                </div>
              </div>
            </div>

            {/* Phone Call Button */}
            <button
              onClick={() => handlePhoneCall(selectedTerminal.phone)}
              style={{
                width: "100%",
                background: selectedTerminal.bgColor,
                color: "white",
                border: "none",
                padding: "12px",
                borderRadius: "12px",
                fontSize: "1rem",
                fontWeight: "600",
                cursor: "pointer",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => {
                e.target.style.opacity = "0.9";
                e.target.style.transform = "scale(1.02)";
              }}
              onMouseLeave={(e) => {
                e.target.style.opacity = "1";
                e.target.style.transform = "scale(1)";
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