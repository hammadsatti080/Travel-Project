import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#000",
        color: "#fff",
        padding: "50px 0 20px 0",
        width: "100%",
        textAlign: "center",
      }}
    >
      {/* Main Content */}
      <div
        style={{
          width: "90%",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "20px",
          borderBottom: "1px solid rgba(255,255,255,0.2)",
          paddingBottom: "20px",
        }}
      >
        {/* Left Side: Contact Info */}
        <div
          style={{
            flex: "1 1 300px",
            textAlign: "left",
          }}
        >
          <h5
            style={{
              fontWeight: "700",
              marginBottom: "15px",
              fontSize: "1.2rem",
            }}
          >
            Contact Us
          </h5>

          <p
            style={{
              color: "#ccc",
              fontSize: "0.95rem",
              marginBottom: "10px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <i
              className="bi bi-telephone-fill"
              style={{ color: "#0d6efd", fontSize: "1.1rem" }}
            ></i>
            +1 (800) 456-7890
          </p>

          <p
            style={{
              color: "#ccc",
              fontSize: "0.95rem",
              marginBottom: "10px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <i
              className="bi bi-envelope-fill"
              style={{ color: "#0d6efd", fontSize: "1.1rem" }}
            ></i>
            support@travelworld.com
          </p>
        </div>

        {/* Middle Section: Brand or Tagline */}
        <div
          style={{
            flex: "1 1 300px",
            textAlign: "center",
          }}
        >
          <h4
            style={{
              fontWeight: "700",
              color: "#fff",
              marginBottom: "10px",
              letterSpacing: "1px",
            }}
          >
            Travel World
          </h4>
          <p
            style={{
              color: "#aaa",
              fontSize: "0.9rem",
              maxWidth: "300px",
              margin: "0 auto",
              lineHeight: "1.5",
            }}
          >
            Explore. Dream. Discover.  
            Your adventure starts here!
          </p>
        </div>

        {/* Right Side: Social Icons */}
        <div
          style={{
            flex: "1 1 300px",
            textAlign: "right",
          }}
        >
          <h5
            style={{
              fontWeight: "700",
              marginBottom: "15px",
              fontSize: "1.2rem",
            }}
          >
            Follow Us
          </h5>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: "15px",
            }}
          >
            {[
              { icon: "facebook", link: "#" },
              { icon: "instagram", link: "#" },
              { icon: "twitter", link: "#" },
              { icon: "linkedin", link: "#" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#fff",
                  fontSize: "1.2rem",
                  transition: "color 0.3s ease, transform 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#0d6efd";
                  e.currentTarget.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#fff";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <i className={`bi bi-${social.icon}`}></i>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Bottom Text */}
      <div style={{ marginTop: "20px" }}>
        <p style={{ color: "#777", fontSize: "0.9rem" }}>
          © {new Date().getFullYear()} Travel World. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
