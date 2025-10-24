import React, { useState, useEffect } from "react";

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const desertImages = [
    {
      url: "https://images3.alphacoders.com/712/thumb-1920-712128.jpg",
      title: "Sahara Desert",
      description: "The world's largest hot desert with endless golden dunes"
    },
    {
      url: "https://images.pexels.com/photos/210307/pexels-photo-210307.jpeg?cs=srgb&dl=adventure-arid-barren-210307.jpg&fm=jpg",
      title: "Desert Adventure",
      description: "Experience thrilling dune bashing and camel safaris"
    },
    {
      url: "https://cdn.britannica.com/20/189720-050-5DCC1A3B/Arabian-Desert.jpg",
      title: "Arabian Desert",
      description: "Discover the rich culture and heritage of desert civilizations"
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
      setCurrentImageIndex((prev) => (prev + 1) % desertImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [desertImages.length]);

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div style={{
      width: "100%",
      height: "60vh",
      minHeight: "400px",
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
      
      {/* Desert Color Overlay */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 2
      }} />

      {/* Sunlight Effect */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "radial-gradient(circle at 70% 30%, rgba(255, 140, 0, 0.4) 0%, transparent 60%)",
        zIndex: 2,
        animation: "pulseSun 8s ease-in-out infinite"
      }} />

      {/* Image Navigation Dots */}
      <div style={{
        position: "absolute",
        bottom: "100px",
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        gap: "12px",
        zIndex: 3
      }}>
        {desertImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToImage(index)}
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              border: "none",
              background: index === currentImageIndex ? "#FF8C00" : "rgba(255,255,255,0.5)",
              cursor: "pointer",
              transition: "all 0.3s ease",
              transform: index === currentImageIndex ? "scale(1.2)" : "scale(1)"
            }}
          />
        ))}
      </div>

      {/* Current Image Info */}
      <div style={{
        position: "absolute",
        bottom: "140px",
        left: "50%",
        transform: "translateX(-50%)",
        textAlign: "center",
        color: "white",
        zIndex: 3,
        background: "rgba(0,0,0,0.6)",
        padding: "15px 25px",
        borderRadius: "15px",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255, 165, 0, 0.3)",
        maxWidth: "90%",
        animation: "fadeInUp 0.6s ease-out"
      }}>
        <h3 style={{
          margin: "0 0 8px 0",
          fontSize: "1.3rem",
          fontWeight: "600",
          background: "linear-gradient(45deg, #FFA500, #D2691E)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent"
        }}>
          {desertImages[currentImageIndex].title}
        </h3>
        <p style={{
          margin: 0,
          fontSize: "0.9rem",
          opacity: 0.9,
          lineHeight: "1.4"
        }}>
          {desertImages[currentImageIndex].description}
        </p>
      </div>

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
          background: "linear-gradient(45deg, #FFA500, #D2691E, #CD853F)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          filter: "drop-shadow(0 0 10px rgba(255, 165, 0, 0.5))"
        }}>
          DesertTrails
        </div>
      </div>

      {/* Animation Styles */}
      <style>{`
        @keyframes pulseSun {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
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
      `}</style>
    </div>
  );
}