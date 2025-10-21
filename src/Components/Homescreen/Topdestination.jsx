import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

export default function Topdestination() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger animation after mount
    setTimeout(() => setAnimate(true), 200);
  }, []);

  const topDestinations = [
    {
      id: 1,
      name: "Bali, Indonesia",
      discount: "25% OFF",
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
    },
    {
      id: 2,
      name: "Santorini, Greece",
      discount: "30% OFF",
      img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80",
    },
    {
      id: 3,
      name: "Kyoto, Japan",
      discount: "20% OFF",
      img: "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?auto=format&fit=crop&w=1600&q=80",
    },

  ];

  const navigate=useNavigate();
  const handlebutton=()=>{
    navigate('/Deal')
  }
  return (
    <div
      className="d-flex flex-column align-items-center my-5"
      style={{
        width: "100%",
        overflowX: "hidden",
        transition: "opacity 1s ease",
        opacity: animate ? 1 : 0,
      }}
    >
      {/* Section Header */}
      <div
        style={{
          width: "90%",
          textAlign: "center",
          transform: animate ? "translateY(0)" : "translateY(40px)",
          transition: "all 1s ease",
        }}
      >
        <h2 className="fw-bold mb-2">Top Destinations</h2>
        <p
          className="text-muted mb-4"
          style={{ maxWidth: "600px", margin: "0 auto" }}
        >
          Unlock exclusive travel discounts and explore the most trending
          destinations of the year.
        </p>
      </div>

      {/* Cards Section */}
      <div
        className="row justify-content-center g-4"
        style={{
          width: "90%",
          transition: "all 1.2s ease",
          transform: animate ? "translateY(0)" : "translateY(40px)",
          opacity: animate ? 1 : 0,
        }}
      >
        {topDestinations.map((place, index) => (
          <div
            key={place.id}
            className="col-12 col-sm-6 col-md-4"
            style={{
              transition: `all 0.6s ease ${index * 0.1}s`,
              transform: animate ? "translateY(0)" : "translateY(40px)",
              opacity: animate ? 1 : 0,
            }}
          >
            <div
              className="card position-relative shadow-sm border-0"
              style={{
                borderRadius: "15px",
                overflow: "hidden",
                transition:
                  "transform 0.4s ease, box-shadow 0.4s ease, opacity 0.5s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow =
                  "0 8px 25px rgba(0,0,0,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 4px 15px rgba(0,0,0,0.1)";
              }}
            >
              {/* Discount Badge */}
              <span
                className="badge bg-danger position-absolute"
                style={{
                  top: "10px",
                  right: "10px",
                  fontSize: "0.8rem",
                  padding: "6px 10px",
                  zIndex: 2,
                }}
              >
                {place.discount}
              </span>

              {/* Image with hover zoom */}
              <div
                style={{
                  overflow: "hidden",
                  height: "220px",
                  borderTopLeftRadius: "15px",
                  borderTopRightRadius: "15px",
                }}
              >
                <img
                  src={place.img}
                  alt={place.name}
                  className="card-img-top"
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                    transition: "transform 0.5s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.08)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                />
              </div>

              {/* Card Body */}
              <div className="card-body text-center">
                <h5
                  className="card-title mb-1 fw-semibold"
                  style={{
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#0d6efd")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "inherit")
                  }
                >
                  {place.name}
                </h5>
                <p
                  className="card-text text-muted"
                  style={{
                    fontSize: "0.9rem",
                    transition: "opacity 0.4s ease",
                  }}
                >
                  Book your trip now and enjoy{" "}
                  {place.discount.toLowerCase()} on {place.name} packages.
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* All Destination Button */}
      <div
        className="mt-5"
        style={{
          transition: "all 1s ease",
          transform: animate ? "translateY(0)" : "translateY(40px)",
          opacity: animate ? 1 : 0,
        }}
      >
        <button
          className="btn btn-dark px-4 py-2 fw-semibold"
          style={{
            borderRadius: "8px",
            letterSpacing: "0.5px",
            transition: "transform 0.3s ease, background-color 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.backgroundColor = "#000";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.backgroundColor = "";
          }}
onClick={handlebutton}
>
          View All Top Deals
        </button>
      </div>
    </div>
  );
}
