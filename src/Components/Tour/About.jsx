import React, { useState, useEffect } from "react";

export default function About() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80",
      title: "Discover Your Next Destination ✈️",
      description: "Explore breathtaking destinations, hidden gems, and exclusive travel experiences — all waiting for you to discover."
    },
    {
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1400&q=80",
      title: "Adventure Awaits 🌴",
      description: "Embark on unforgettable journeys to the world's most amazing places and create lasting memories."
    },
    {
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1400&q=80",
      title: "Nature's Wonders 🏞️",
      description: "Experience the beauty of nature in its purest form across stunning landscapes and scenic views."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div
      style={{
        width: "90%",
        margin: "40px auto",
        height: "50vh",
        borderRadius: "20px",
        backgroundImage: `url('${slides[currentSlide].image}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        overflow: "hidden",
        boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
        transition: "background-image 0.8s ease-in-out",
      }}
    >
      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.45)",
        }}
      ></div>

      {/* Text Content */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          color: "#fff",
          width: "80%",
          maxWidth: "800px",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
            fontWeight: "800",
            marginBottom: "15px",
            textShadow: "0 4px 15px rgba(0,0,0,0.6)",
            opacity: 1,
            transform: "translateY(0)",
            transition: "all 0.6s ease",
          }}
        >
          {slides[currentSlide].title}
        </h1>
        <p
          style={{
            fontSize: "clamp(1rem, 2vw, 1.2rem)",
            maxWidth: "600px",
            margin: "0 auto",
            color: "rgba(255,255,255,0.9)",
            lineHeight: "1.6",
            opacity: 1,
            transform: "translateY(0)",
            transition: "all 0.6s ease 0.2s",
          }}
        >
          {slides[currentSlide].description}
        </p>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        style={{
          position: "absolute",
          left: "20px",
          top: "50%",
          transform: "translateY(-50%)",
          background: "rgba(255,255,255,0.2)",
          border: "none",
          borderRadius: "50%",
          width: "50px",
          height: "50px",
          color: "white",
          fontSize: "1.5rem",
          cursor: "pointer",
          backdropFilter: "blur(10px)",
          transition: "all 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.target.style.background = "rgba(255,255,255,0.3)";
          e.target.style.transform = "translateY(-50%) scale(1.1)";
        }}
        onMouseLeave={(e) => {
          e.target.style.background = "rgba(255,255,255,0.2)";
          e.target.style.transform = "translateY(-50%) scale(1)";
        }}
      >
        ‹
      </button>

      <button
        onClick={nextSlide}
        style={{
          position: "absolute",
          right: "20px",
          top: "50%",
          transform: "translateY(-50%)",
          background: "rgba(255,255,255,0.2)",
          border: "none",
          borderRadius: "50%",
          width: "50px",
          height: "50px",
          color: "white",
          fontSize: "1.5rem",
          cursor: "pointer",
          backdropFilter: "blur(10px)",
          transition: "all 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.target.style.background = "rgba(255,255,255,0.3)";
          e.target.style.transform = "translateY(-50%) scale(1.1)";
        }}
        onMouseLeave={(e) => {
          e.target.style.background = "rgba(255,255,255,0.2)";
          e.target.style.transform = "translateY(-50%) scale(1)";
        }}
      >
        ›
      </button>

      {/* Slide Indicators */}
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "10px",
        }}
      >
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              border: "none",
              background: currentSlide === index ? "#fff" : "rgba(255,255,255,0.5)",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          />
        ))}
      </div>
    </div>
  );
}