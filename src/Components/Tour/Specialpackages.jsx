import React, { useEffect, useState } from "react";

export default function Specialpackages() {
  const packages = [
    {
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
      name: "Beach Paradise",
      days: "5 Days / 4 Nights",
      price: "$899",
    },
    {
      img: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1600&q=80",
      name: "Mountain Adventure",
      days: "7 Days / 6 Nights",
      price: "$1,099",
    },
    {
      img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80",
      name: "City Lights Tour",
      days: "3 Days / 2 Nights",
      price: "$499",
    },
    {
      img: "https://up.yimg.com/ib/th/id/OIP.c9Uw0ESxFekMY4gJz8EgVQHaEK?pid=Api&rs=1&c=1&qlt=95&w=219&h=123",
      name: "Desert Escape",
      days: "4 Days / 3 Nights",
      price: "$799",
    },
  ];

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Animate entry when component mounts
    setTimeout(() => setVisible(true), 200);
  }, []);

  const ClockIcon = (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0d6efd" strokeWidth="2">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l4 2" />
    </svg>
  );

  return (
    <div
      style={{
        width: "90%",
        margin: "80px auto",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "30px",
      }}
    >
      {packages.map((pkg, index) => (
        <div
          key={index}
          style={{
            width: "330px",
            backdropFilter: "blur(10px)",
            background: "rgba(255,255,255,0.7)",
            border: "1px solid rgba(255,255,255,0.3)",
            borderRadius: "22px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
            overflow: "hidden",
            transform: visible
              ? `translateY(0) scale(1)`
              : `translateY(40px) scale(0.95)`,
            opacity: visible ? 1 : 0,
            transition:
              "all 0.7s cubic-bezier(0.23,1,0.32,1), box-shadow 0.3s ease",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.04) rotateX(3deg)";
            e.currentTarget.style.boxShadow = "0 18px 40px rgba(0,0,0,0.2)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1) rotateX(0deg)";
            e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.1)";
          }}
        >
          {/* Floating animated price badge */}
          <div
            style={{
              position: "absolute",
              top: "15px",
              right: "15px",
              background: "linear-gradient(135deg, #ff6a00, #ee0979)",
              color: "#fff",
              padding: "8px 16px",
              borderRadius: "30px",
              fontWeight: "700",
              fontSize: "0.9rem",
              boxShadow: "0 4px 12px rgba(255,106,0,0.4)",
              transform: "rotate(3deg)",
              animation: "pulseBadge 2.2s infinite ease-in-out",
            }}
          >
            {pkg.price}
          </div>

          {/* Image Section */}
          <div
            style={{
              width: "100%",
              height: "230px",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <img
              src={pkg.img}
              alt={pkg.name}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "transform 1.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.1)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            />
            {/* Overlay gradient */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.5) 10%, rgba(0,0,0,0.1) 70%, transparent 100%)",
                opacity: "0",
                transition: "opacity 0.5s ease",
              }}
              className="overlay"
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "0")}
            ></div>
          </div>

          {/* Content Section */}
          <div style={{ padding: "22px 20px" }}>
            <h4
              style={{
                fontWeight: "700",
                color: "#111",
                marginBottom: "10px",
                fontSize: "1.25rem",
              }}
            >
              {pkg.name}
            </h4>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                color: "#666",
                marginBottom: "14px",
                fontSize: "0.95rem",
              }}
            >
              {ClockIcon}
              <span>{pkg.days}</span>
            </div>

            {/* Fancy Explore button */}
            <button
              style={{
                width: "100%",
                padding: "12px 18px",
                borderRadius: "10px",
                border: "none",
               backgroundColor:"black",
                color: "#fff",
                fontWeight: "700",
                letterSpacing: "0.3px",
                fontSize: "1rem",
                boxShadow: "0 5px 18px rgba(13,110,253,0.4)",
                cursor: "pointer",
                transition: "all 0.4s ease",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <span
                style={{
                  position: "relative",
                  zIndex: 2,
                }}
              >
                Explore Now
              </span>
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: "-100%",
                  width: "100%",
                  height: "100%",
                  background:  "linear-gradient(90deg, rgba(255,255,255,0.3), rgba(255,255,255,0))",
                  transform: "skewX(-20deg)",
                  animation: "shine 2.2s infinite",
                }}
              ></div>
            </button>
          </div>
        </div>
      ))}

      {/* Keyframe animations */}
      <style>{`
        @keyframes shine {
          0% { left: -100%; }
          50% { left: 100%; }
          100% { left: 100%; }
        }
        @keyframes pulseBadge {
          0%, 100% { transform: rotate(3deg) scale(1); }
          50% { transform: rotate(3deg) scale(1.1); }
        }
      `}</style>
    </div>
  );
}
