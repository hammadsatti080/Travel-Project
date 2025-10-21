import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Specialoffer() {
  return (
    <div
      style={{
        width: "100%",
        margin: "60px auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
      }}
    >
      {/* Inner Container */}
      <div
        style={{
          width: "90%",
          display: "flex",
          flexWrap: "wrap",
          borderRadius: "18px",
          overflow: "hidden",
          
          backgroundColor: "#fff",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-6px)";
          e.currentTarget.style.boxShadow = "0 15px 35px rgba(0,0,0,0.15)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.1)";
        }}
      >
        {/* Left Side Image */}
        <div
          style={{
            flex: "1 1 50%",
            minHeight: "420px",
            backgroundImage:
              "url('./Homescreen/Homescreen.avif')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            transition: "transform 3s ease",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "scale(1.08)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.transform = "scale(1)")
          }
        ></div>

        {/* Right Side Content */}
        <div
          style={{
            flex: "1 1 50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          
            padding: "50px 40px",
          }}
        >
          <div
            style={{
              maxWidth: "600px",
              width: "100%",
              textAlign: "center",
              padding: "30px 25px",
            }}
          >
            {/* Heading */}
            <h2
              style={{
                fontWeight: "700",
                color: "#111",
                marginBottom: "20px",
                fontSize: "1.8rem",
                lineHeight: "1.3",
                letterSpacing: "0.5px",
              }}
            >
              Get <span style={{ color: "#0d6efd" }}>Special Offers</span> and
              More from <span style={{ color: "#0d6efd" }}>Travel</span>
            </h2>

            {/* Description */}
            <p
              style={{
                color: "#555",
                fontSize: "1rem",
                marginBottom: "30px",
                lineHeight: "1.7",
              }}
            >
              Subscribe to our newsletter and be the first to know about exclusive
              discounts, travel inspirations, and special holiday packages just for
              you.
            </p>

            {/* Email Subscribe Form */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                flexWrap: "wrap",
              }}
            >
              {/* Email Field */}
              <div
                style={{
                  position: "relative",
                  flex: "1 1 260px",
                }}
              >
                <i
                  className="bi bi-envelope-fill"
                  style={{
                    position: "absolute",
                    left: "12px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: "#0d6efd",
                    fontSize: "1rem",
                  }}
                ></i>
                <input
                  type="email"
                  placeholder="Enter your email"
                  style={{
                    width: "100%",
                    padding: "12px 42px",
                    borderRadius: "8px",
                    border: "1px solid #ccc",
                    outline: "none",
                    fontSize: "0.95rem",
                    transition: "border-color 0.3s ease, box-shadow 0.3s ease",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#0d6efd";
                    e.target.style.boxShadow = "0 0 5px rgba(13,110,253,0.3)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "#ccc";
                    e.target.style.boxShadow = "none";
                  }}
                />
              </div>

              {/* Subscribe Button */}
              <button
                style={{
                  backgroundColor: "#0d6efd",
                  color: "#fff",
                  border: "none",
                  padding: "12px 22px",
                  borderRadius: "8px",
                  fontWeight: "600",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  cursor: "pointer",
                  transition:
                    "background-color 0.3s ease, transform 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#0b5ed7";
                  e.currentTarget.style.transform = "scale(1.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#0d6efd";
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                <i className="bi bi-send-fill"></i> Subscribe
              </button>
            </div>

            {/* Small Note */}
            <p
              style={{
                color: "#777",
                fontSize: "0.85rem",
                marginTop: "18px",
              }}
            >
              We respect your privacy. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
