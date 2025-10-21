import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

export default function FlightDeals() {
  const allDeals = [
    {
      id: 1,
      city: "Dubai",
      airport: "ISB - DXB",
      date: "Dec 18 - Jan 20",
      price: "$364.90",
      type: "Round Trip",
      img: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=800&q=80",
      mapLink: "https://www.google.com/maps/place/Dubai/",
    },
    {
      id: 2,
      city: "Jeddah",
      airport: "ISB - JED",
      date: "Nov 09 - Nov 23",
      price: "$472.16",
      type: "Round Trip",
      img: "./Homescreen/Islamabad.jpg",
      mapLink: "https://www.google.com/maps/place/Jeddah/",
    },
    {
      id: 3,
      city: "London",
      airport: "ISB - LON",
      date: "Jan 22 - Feb 04",
      price: "$715.03",
      type: "Round Trip",
      img: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=800&q=80",
      mapLink: "https://www.google.com/maps/place/London/",
    },
    {
      id: 4,
      city: "Singapore",
      airport: "ISB - SIN",
      date: "Nov 11 - Nov 13",
      price: "$907.84",
      type: "Round Trip",
      img: "./Homescreen/London.jpg",
      mapLink: "https://www.google.com/maps/place/Singapore/",
    },
    {
      id: 5,
      city: "New York City",
      airport: "ISB - NYC",
      date: "Dec 21 - May 11",
      price: "$1,005.27",
      type: "Round Trip",
      img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
      mapLink: "https://www.google.com/maps/place/New+York+City/",
    },
    {
      id: 6,
      city: "San Francisco",
      airport: "PEW - SFO",
      date: "Mar 16 - May 09",
      price: "$1,383.53",
      type: "Round Trip",
      img: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=800&q=80",
      mapLink: "https://www.google.com/maps/place/San+Francisco/",
    },
  ];

  const [selectedCity, setSelectedCity] = useState("All");

  const filteredDeals =
    selectedCity === "All"
      ? allDeals
      : allDeals.filter((deal) => deal.city === selectedCity);

  // Group cards into sets of 3 for carousel slides
  const chunkedDeals = [];
  for (let i = 0; i < filteredDeals.length; i += 3) {
    chunkedDeals.push(filteredDeals.slice(i, i + 3));
  }

  // === Open city on Google Maps ===
  const handleCardClick = (mapLink) => {
    window.open(mapLink, "_blank"); // opens Google Maps in new tab
  };

  return (
    <div className="container py-5">
      {/* === Section Heading === */}
      <div className="text-start mb-4">
        <h2 className="fw-bold" style={{ fontSize: "2rem", color: "#222" }}>
          ✈️ Flight Deals Departing Near You
        </h2>
        <p className="text-muted">
          * All fares last found on: Oct 15, 2025 at 06:38 AM UTC
        </p>
      </div>

      {/* === Filter Buttons === */}
      <div className="mb-4 d-flex flex-wrap gap-3">
        {["All", "Dubai", "Jeddah", "London", "Singapore", "New York City", "San Francisco"].map(
          (city) => (
            <button
              key={city}
              onClick={() => setSelectedCity(city)}
              className={`btn ${
                selectedCity === city ? "btn-primary" : "btn-outline-primary"
              } btn-sm rounded-pill px-3`}
            >
              {city}
            </button>
          )
        )}
      </div>

      {/* === Bootstrap Carousel === */}
      <div id="flightCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {chunkedDeals.map((group, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <div className="row g-4">
                {group.map((deal) => (
                  <div
                    key={deal.id}
                    className="col-12 col-sm-6 col-lg-4 d-flex justify-content-center"
                  >
                    {/* === Clickable Card === */}
                    <div
                      className="deal-card"
                      onClick={() => handleCardClick(deal.mapLink)}
                      style={{ cursor: "pointer" }}
                    >
                      <div className="image-wrapper">
                        <img
                          src={deal.img}
                          alt={deal.city}
                          className="img-fluid deal-img"
                        />
                        <div className="price-tag">{deal.price}</div>
                      </div>
                      <div className="deal-content">
                        <h5 className="fw-bold mb-1">{deal.city}</h5>
                        <p className="text-muted small mb-1">{deal.airport}</p>
                        <p className="mb-2">{deal.date}</p>
                        <span className="badge bg-light text-dark">
                          {deal.type}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* === Carousel Controls === */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#flightCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#flightCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div>

      {/* === Custom Styles === */}
      <style>{`
        .deal-card {
          background: #fff;
          border-radius: 1rem;
          overflow: hidden;
          box-shadow: 0 6px 20px rgba(0,0,0,0.08);
          transition: all 0.3s ease;
          width: 100%;
          max-width: 340px;
        }

        .deal-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 25px rgba(0,0,0,0.15);
        }

        .image-wrapper {
          position: relative;
          overflow: hidden;
        }

        .deal-img {
          width: 100%;
          height: 200px;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .deal-card:hover .deal-img {
          transform: scale(1.07);
        }

        .price-tag {
          position: absolute;
          bottom: 10px;
          right: 10px;
          background: rgba(255,255,255,0.9);
          color: #007bff;
          font-weight: 700;
          padding: 0.4rem 0.8rem;
          border-radius: 50px;
          font-size: 0.9rem;
          box-shadow: 0 2px 6px rgba(0,0,0,0.15);
        }

        .deal-content {
          padding: 1rem 1.25rem;
          text-align: center;
        }

        .deal-card:hover .deal-content h5 {
          color: #007bff;
        }

        @media (max-width: 992px) {
          .deal-img { height: 180px; }
        }

        @media (max-width: 768px) {
          .deal-img { height: 160px; }
          .deal-content h5 { font-size: 1.1rem; }
        }

        @media (max-width: 576px) {
          .deal-img { height: 150px; }
          .deal-card { max-width: 100%; }
        }
      `}</style>
    </div>
  );
}
