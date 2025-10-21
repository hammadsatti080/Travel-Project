import React from "react";

export default function Header() {
  return (
    <div
      style={{
        width: "90%",
        margin: "40px auto",
        height: "50vh",
        borderRadius: "20px",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        overflow: "hidden",
        boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
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
        }}
      >
        <h1
          style={{
            fontSize: "3.5rem",
            fontWeight: "800",
            marginBottom: "10px",
            textShadow: "0 4px 15px rgba(0,0,0,0.6)",
          }}
        >
          Discover Your Next Destination ✈️
        </h1>
        <p
          style={{
            fontSize: "1.2rem",
            maxWidth: "600px",
            margin: "0 auto",
            color: "rgba(255,255,255,0.9)",
            lineHeight: "1.6",
          }}
        >
          Explore breathtaking destinations, hidden gems, and exclusive travel
          experiences — all waiting for you to discover.
        </p>
      </div>
    </div>
  );
}
