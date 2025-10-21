import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "Tour", path: "/tour" },
    { name: "Destination", path: "/Places" },
    { name: "Contact", path: "/Contact" },
    { name: "About Us", path: "/about" },
  ];

  return (
    <nav
      style={{
        backgroundColor: "#fff",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      {/* Outer Container */}
      <div
        style={{
          maxWidth: "90%",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "12px 0",
          flexWrap: "wrap",
          position: "relative",
        }}
      >
        {/* Left: Logo */}
        <Link
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            textDecoration: "none",
            color: "#000",
            fontWeight: "700",
            fontSize: "1.2rem",
          }}
        >
          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              backgroundColor: "#000",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ color: "white", fontSize: "1.2rem" }}>🌍</span>
          </div>
          Travel With
        </Link>

        {/* Toggle button for mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "none",
            border: "none",
            fontSize: "1.8rem",
            cursor: "pointer",
            display: "none",
            color: "#000",
          }}
          className="toggle-btn"
        >
          <i className="bi bi-list"></i>
        </button>

        {/* Center: Nav Links */}
        <div
          style={{
            display: "flex",
            gap: "25px",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
          }}
          className="center-links"
        >
          {links.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              style={{
                textDecoration: "none",
                color: "#000",
                fontWeight: "500",
                transition: "color 0.3s",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#0d6efd")}
              onMouseLeave={(e) => (e.target.style.color = "#000")}
            >
              {link.name}
            </Link>
          ))}
          <i
            className="bi bi-search"
            style={{
              fontSize: "1.1rem",
              cursor: "pointer",
              color: "#000",
            }}
          ></i>
        </div>

      
      </div>

      {/* Mobile Menu */}
      <div
        style={{
          display: menuOpen ? "flex" : "none",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#fff",
          borderTop: "1px solid #eee",
          padding: "15px 0",
          animation: menuOpen
            ? "slideDown 0.4s ease forwards"
            : "slideUp 0.4s ease forwards",
        }}
        className="mobile-menu"
      >
        {links.map((link, index) => (
          <Link
            key={index}
            to={link.path}
            onClick={() => setMenuOpen(false)}
            style={{
              textDecoration: "none",
              color: "#000",
              fontWeight: "500",
              padding: "10px 0",
              transition: "color 0.3s",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#0d6efd")}
            onMouseLeave={(e) => (e.target.style.color = "#000")}
          >
            {link.name}
          </Link>
        ))}

        {/* Buttons in mobile view */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            marginTop: "15px",
            width: "80%",
          }}
        >
          <button
            style={{
              border: "1px solid #000",
              background: "transparent",
              color: "#000",
              padding: "10px",
              borderRadius: "8px",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            Login
          </button>
          <button
            style={{
              backgroundColor: "#000",
              color: "#fff",
              border: "none",
              padding: "10px",
              borderRadius: "8px",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            Sign Up
          </button>
        </div>
      </div>

      {/* Inline Responsive CSS */}
      <style>
        {`
          @media (max-width: 992px) {
            .center-links {
              display: none !important;
            }
            .toggle-btn {
              display: block !important;
            }
          }

          @media (min-width: 993px) {
            .mobile-menu {
              display: none !important;
            }
          }

          @keyframes slideDown {
            0% { opacity: 0; transform: translateY(-20px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          @keyframes slideUp {
            0% { opacity: 1; transform: translateY(0); }
            100% { opacity: 0; transform: translateY(-20px); }
          }
        `}
      </style>
    </nav>
  );
}
