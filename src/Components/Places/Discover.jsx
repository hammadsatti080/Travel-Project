import React, { useState } from "react";
import { FaCheck, FaPlane, FaCalendarAlt } from "react-icons/fa";

// Define tours
const tours = [
  {
    id: 1,
    name: "Bali, Indonesia",
    guidelines: ["Follow local customs", "Wear comfortable shoes", "Stay hydrated"],
    images: ["./Homescreen/Faisalmosque.jpg"],
    duration: "5 Days",
    flight: true,
  },
  {
    id: 2,
    name: "Santorini, Greece",
    guidelines: ["Sunset photography recommended", "Book cliffside hotels", "Try local cuisine"],
    images: ["./Homescreen/Islamabad.jpg"],
    duration: "4 Days",
    flight: true,
  },
  {
    id: 3,
    name: "Kyoto, Japan",
    guidelines: ["Visit temples early", "Enjoy traditional gardens", "Respect local culture"],
    images: ["./Homescreen/F8Markaz.webp"],
    duration: "6 Days",
    flight: true,
  },
];

export default function Discover() {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter tours
  const filteredTours = tours.filter((tour) =>
    tour.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section style={{ width: "90%", maxWidth: 1500, margin: "60px auto" }}>
      {/* Search Bar */}
      <div style={{ marginBottom: 40, textAlign: "center" }}>
        <input
          type="text"
          placeholder="Search tours..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: "12px 20px",
            width: "100%",
            maxWidth: 400,
            borderRadius: 12,
            border: "1px solid #ccc",
            fontSize: 16,
            outline: "none",
          }}
        />
      </div>

      {/* Tours */}
      {filteredTours.map((tour, index) => (
        <div
          key={tour.id}
          style={{
            display: "flex",
            flexDirection: "column",
            marginBottom: 60,
            borderRadius: 20,
            overflow: "hidden",
            boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
            background: "#fff",
            transition: "transform 0.6s ease",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: index % 2 === 0 ? "row" : "row-reverse",
              flexWrap: "wrap",
            }}
          >
            {/* Left: Guidelines */}
            <div
              style={{
                flex: 1,
                minWidth: 300,
                padding: "30px 20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: 16,
              }}
            >
              <h2 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: 20 }}>
                {tour.name}
              </h2>

              {tour.guidelines.map((g, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 16 }}>
                  <FaCheck color="#28a745" />
                  <span>{g}</span>
                </div>
              ))}

              {/* Bottom icons */}
              <div style={{ display: "flex", alignItems: "center", gap: 20, marginTop: 30 }}>
                {tour.flight && (
                  <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <FaPlane color="#0d6efd" />
                    <span>Flight included</span>
                  </div>
                )}
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <FaCalendarAlt color="#ffc107" />
                  <span>{tour.duration}</span>
                </div>
              </div>

              {/* Detail button */}
              <button
                style={{
                  marginTop: 20,
                  padding: "12px 20px",
                  background: "linear-gradient(90deg,#0d6efd,#6610f2)",
                  color: "#fff",
                  border: "none",
                  borderRadius: 12,
                  cursor: "pointer",
                  fontWeight: 700,
                  fontSize: 16,
                  alignSelf: "flex-start",
                  transition: "transform 0.3s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                View Details
              </button>
            </div>

            {/* Right: Image */}
            <div
              style={{
                flex: 1,
                minWidth: 300,
                overflow: "hidden",
                borderRadius: 12,
                minHeight: 300,
              }}
            >
              <div
                style={{
                  backgroundImage: `url(${tour.images[0]})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "100%",
                  height: "100%",
                  borderRadius: 12,
                  transition: "transform 0.5s ease, filter 0.5s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.filter = "brightness(1.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.filter = "brightness(1)";
                }}
              />
            </div>
          </div>
        </div>
      ))}

      {/* No results */}
      {filteredTours.length === 0 && (
        <p style={{ textAlign: "center", fontSize: 18, color: "#555" }}>
          No tours found.
        </p>
      )}
      
      <h1 className="client-heading">Our Clients</h1>

<style>
  {`
    .client-heading {
      text-align: center;
      font-size: 3rem;
      font-weight: 800;
      margin-bottom: 40px;
      background: linear-gradient(90deg, #0d6efd, #6610f2);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      position: relative;
      animation: fadeInUp 1s ease forwards;
    }

    /* Decorative underline */
    .client-heading::after {
      content: "";
      width: 80px;
      height: 4px;
      background: #0d6efd;
      display: block;
      margin: 10px auto 0;
      border-radius: 2px;
    }

    /* Fade-in & move-up animation */
    @keyframes fadeInUp {
      0% {
        opacity: 0;
        transform: translateY(20px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }

    /* Responsive adjustments */
    @media (max-width: 768px) {
      .client-heading {
        font-size: 2.2rem;
      }
    }

    @media (max-width: 480px) {
      .client-heading {
        font-size: 1.8rem;
      }
    }
  `}
</style>


    </section>
    
  );
}
