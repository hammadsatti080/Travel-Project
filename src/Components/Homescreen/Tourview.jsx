import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Tourview() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 200);
  }, []);

  const tours = [
    {
      id: 1,
      icon: "bi-airplane-engines",
      title: "Luxury Air Tours",
      text: "Experience first-class comfort as you explore stunning destinations with exclusive in-flight amenities and breathtaking aerial views.",
    },
    {
      id: 2,
      icon: "bi-bus-front",
      title: "Premium Bus Tours",
      text: "Travel with style and convenience through scenic landscapes in our luxury buses equipped with top-tier comfort and service.",
    },
    {
      id: 3,
      icon: "bi-car-front",
      title: "Private Car Travels",
      text: "Enjoy freedom and privacy with personalized car tours, designed for comfort, flexibility, and unforgettable journeys.",
    },
  ];

  return (
    <div
      className="d-flex flex-column align-items-center my-5 py-4"
      style={{
        width: "100%",
        backgroundColor: "#f8f9fa",
        overflow: "hidden",
      }}
    >
      {/* Section Header */}
      <div
        style={{
          width: "90%",
          textAlign: "center",
          opacity: animate ? 1 : 0,
          transform: animate ? "translateY(0)" : "translateY(40px)",
          transition: "all 0.8s ease",
        }}
      >
        <h2 className="fw-bold mb-2">Luxury Tour & Travel</h2>
        <p
          className="text-muted mb-5"
          style={{
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          Discover the world in style — from the skies, on the road, or across
          scenic routes, we make every journey a luxurious experience.
        </p>
      </div>

      {/* Cards Section */}
      <div
        className="row justify-content-center g-4"
        style={{
          width: "90%",
          opacity: animate ? 1 : 0,
          transform: animate ? "translateY(0)" : "translateY(40px)",
          transition: "all 1s ease",
        }}
      >
        {tours.map((tour, index) => (
          <div
            key={tour.id}
            className="col-12 col-md-4"
            style={{
              transition: `all 0.6s ease ${index * 0.1}s`,
              transform: animate ? "translateY(0)" : "translateY(40px)",
              opacity: animate ? 1 : 0,
            }}
          >
            <div
              className="card border-0 shadow-sm text-center"
              style={{
                backgroundColor: "#fff",
                borderRadius: "15px",
                padding: "40px 20px",
                height: "100%",
                transition: "transform 0.4s ease, box-shadow 0.4s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow =
                  "0 10px 25px rgba(0,0,0,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 4px 15px rgba(0,0,0,0.08)";
              }}
            >
              {/* Icon */}
              <div
                style={{
                  fontSize: "2.5rem",
                  color: "#0d6efd",
                  marginBottom: "20px",
                  transition: "transform 0.4s ease, color 0.3s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                <i className={`bi ${tour.icon}`}></i>
              </div>

              {/* Title */}
              <h5
                className="fw-bold mb-3"
                style={{
                  color: "#212529",
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "#0d6efd")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "#212529")
                }
              >
                {tour.title}
              </h5>

              {/* Text */}
              <p
                className="text-muted"
                style={{
                  fontSize: "0.95rem",
                  lineHeight: "1.6",
                  marginBottom: "0",
                }}
              >
                {tour.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
