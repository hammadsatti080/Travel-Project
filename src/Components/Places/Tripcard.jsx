import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Tripcard() {
  const navigate = useNavigate();

  const recommendations = [
    {
      id: 1,
      name: "London",
      country: "United Kingdom",
      img: "./Homescreen/Countries/Mountain/London.avif",
      price: "$899",
      duration: "5 Nights / 6 Days",
      color: "#007bff",
    },
    {
      id: 2,
      name: "Paris",
      country: "France",
      img: "./Homescreen/Countries/Mountain/UK.jpeg",
      price: "$1099",
      duration: "6 Nights / 7 Days",
      color: "#ff4b5c",
    },
    {
      id: 3,
      name: "Jeddah",
      country: "Saudi Arabia",
      img: "./Homescreen/Countries/Mountain/Jaddah.jpg",
      price: "$1299",
      duration: "7 Nights / 8 Days",
      color: "#00b894",
    },
  ];

  const handleExplore = (city) => {
    navigate(`/Tour?destination=${city}`);
  };

  return (
    <>
      <style>{`
        /* === Responsive Fixed Layout === */
        .trip-row {
          display: flex;
          flex-wrap: wrap;
          gap: 1.5rem;
        }

        @media (max-width: 768px) {
          .trip-row {
            flex-wrap: nowrap;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            -webkit-overflow-scrolling: touch;
            padding-bottom: 1rem;
          }
          .trip-card {
            flex: 0 0 80%;
            scroll-snap-align: start;
            margin-right: 1rem;
          }
        }

        /* === Smooth Scrollbar === */
        .trip-row::-webkit-scrollbar {
          height: 6px;
        }
        .trip-row::-webkit-scrollbar-thumb {
          background-color: #007bff;
          border-radius: 10px;
        }

        /* === Card Styles === */
        .trip-card {
          border-radius: 1rem;
          overflow: hidden;
          background: #fff;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .trip-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        }

        .trip-img {
          width: 100%;
          height: 220px;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .trip-card:hover .trip-img {
          transform: scale(1.05);
        }

        .trip-price {
          position: absolute;
          top: 10px;
          right: 10px;
          background: rgba(255, 255, 255, 0.9);
          padding: 0.4rem 0.8rem;
          border-radius: 50px;
          font-weight: 600;
          font-size: 0.9rem;
          border: 2px solid #007bff;
          color: #007bff;
        }

        @media (max-width: 576px) {
          .trip-img {
            height: 180px;
          }
        }
      `}</style>

      <div className="container py-5">
        {/* === Heading === */}
        <div className="text-start mb-4">
          <h2 className="fw-bold fs-2 text-dark">Recommended for your next trip</h2>
          <p className="text-muted fs-6">
            Based on your most recent searches or your location
          </p>
        </div>

        {/* === Responsive Row === */}
        <div className="trip-row">
          {recommendations.map((trip) => (
            <div key={trip.id} className="trip-card position-relative col-12 col-sm-6 col-lg-4">
              <img src={trip.img} alt={trip.name} className="trip-img" />
              <div className="trip-price" style={{ borderColor: trip.color, color: trip.color }}>
                {trip.price}
              </div>

              <div className="p-3 d-flex flex-column justify-content-between">
                <div>
                  <h5 className="fw-bold">{trip.name}</h5>
                  <p className="text-muted">{trip.country}</p>
                  <hr
                    className="mt-2 mb-3"
                    style={{
                      borderTop: `3px solid ${trip.color}`,
                      width: "50px",
                      borderRadius: "5px",
                    }}
                  />
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <small className="text-secondary">{trip.duration}</small>
                  <span className="fw-semibold text-primary">{trip.price}</span>
                </div>
                <div className="text-center mt-3">
                  <button
                    className="btn btn-outline-primary rounded-pill px-4 fw-semibold"
                    onClick={() => handleExplore(trip.name)}
                  >
                    Explore Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
