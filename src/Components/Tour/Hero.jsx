import React, { useEffect, useState } from "react";

export default function Hero() {
  const images = [
    "./Homescreen/futuretour.avif",
    "./Homescreen/Homescreen.avif",
    "./Homescreen/futuretour.avif",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      style={{
        width: "90%",
        margin: "30px auto",
        borderRadius: "20px",
        overflow: "hidden",
        position: "relative",
        boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
      }}
    >
      {/* Image Wrapper */}
      <div
        style={{
          display: "flex",
          transition: "transform 1.2s ease-in-out",
          transform: `translateX(-${current * 100}%)`,
          width: `${images.length * 100}%`,
        }}
      >
        {images.map((img, index) => (
          <div key={index} style={{ flex: "0 0 100%", height: "80vh" }}>
            <img
              src={img}
              alt={`slide-${index}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        ))}
      </div>

      {/* 🔹 Overlay for better text visibility */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.35)",
          zIndex: 2,
        }}
      ></div>

      {/* 🔹 Centered Hero Text */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          color: "#fff",
          zIndex: 3,
          padding: "0 10px",
        }}
      >
        <h1
          style={{
            fontSize: "3.2rem",
            fontWeight: 800,
            marginBottom: "12px",
            letterSpacing: "1px",
            textShadow: "0 4px 12px rgba(0,0,0,0.6)",
          }}
        >
          Discover the World with Us 🌍
        </h1>
        <p
          style={{
            fontSize: "1.3rem",
            fontWeight: 400,
            maxWidth: "600px",
            margin: "0 auto",
            lineHeight: 1.5,
            textShadow: "0 2px 8px rgba(0,0,0,0.5)",
          }}
        >
          Explore breathtaking destinations, exclusive deals, and unforgettable
          adventures — all in one place.
        </p>
      </div>

      {/* Left Button */}
      <button
        onClick={() =>
          setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1))
        }
        style={navBtn("left")}
      >
        ‹
      </button>

      {/* Right Button */}
      <button
        onClick={() =>
          setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1))
        }
        style={navBtn("right")}
      >
        ›
      </button>

      {/* Dots */}
      <div
        style={{
          position: "absolute",
          bottom: "15px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          gap: "8px",
          zIndex: 3,
        }}
      >
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            style={{
              width: current === index ? "14px" : "10px",
              height: current === index ? "14px" : "10px",
              borderRadius: "50%",
              backgroundColor:
                current === index ? "#fff" : "rgba(255,255,255,0.5)",
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

// 🔹 Reusable nav button styling
function navBtn(position) {
  return {
    position: "absolute",
    top: "50%",
    [position]: "20px",
    transform: "translateY(-50%)",
    background: "rgba(0, 0, 0, 0.5)",
    color: "#fff",
    border: "none",
    borderRadius: "50%",
    width: "44px",
    height: "44px",
    cursor: "pointer",
    fontSize: "1.6rem",
    zIndex: 4,
  };
}
