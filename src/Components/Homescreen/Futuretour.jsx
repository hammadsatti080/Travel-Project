import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Futuretour() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 200);
  }, []);

  const featuredDestinations = [
    {
      id: 1,
      name: "Bali, Indonesia",
      discount: "20% OFF",
      price: "$899",
      reviews: 4.8,
      img: "./Homescreen/Countries/Terminal/Beach4.jpg",
    },
    {
      id: 2,
      name: "Santorini, Greece",
      discount: "30% OFF",
      price: "$1099",
      reviews: 4.9,
      img: "./Homescreen/Countries/Terminal/Beach5.jpg",
    },
    {
      id: 3,
      name: "Swiss Alps, Switzerland",
      discount: null,
      price: "$1299",
      reviews: 4.7,
      img: "./Homescreen/Countries/Terminal/Beach2.jpg",
    },
    {
      id: 4,
      name: "Maldives",
      discount: null,
      price: "$1499",
      reviews: 4.9,
      img: "./Homescreen/Countries/Terminal/Beach5.jpg",
    },
  ];

  return (
    <div
      className="d-flex flex-column align-items-center my-5"
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
          transition: "all 1s ease",
        }}
      >
        <h2 className="fw-bold mb-2">Featured Destinations</h2>
        <p
          className="text-muted mb-4"
          style={{ maxWidth: "600px", margin: "0 auto" }}
        >
          Hand-picked destinations offering the best experiences, exclusive
          offers, and top-rated guest satisfaction.
        </p>
      </div>

      {/* Cards Section */}
      <div
        className="row justify-content-center g-4"
        style={{
          width: "90%",
          opacity: animate ? 1 : 0,
          transform: animate ? "translateY(0)" : "translateY(40px)",
          transition: "all 1.2s ease",
        }}
      >
        {featuredDestinations.map((place, index) => (
          <div
            key={place.id}
            className="col-12 col-sm-6 col-lg-3"
            style={{
              transition: `all 0.8s ease ${index * 0.1}s`,
              transform: animate ? "translateY(0)" : "translateY(40px)",
              opacity: animate ? 1 : 0,
            }}
          >
            <div
              className="card border-0 shadow-sm position-relative"
              style={{
                borderRadius: "15px",
                overflow: "hidden",
                transition: "transform 0.4s ease, box-shadow 0.4s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow =
                  "0 12px 25px rgba(0,0,0,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 4px 15px rgba(0,0,0,0.08)";
              }}
            >
              {/* Discount Badge */}
              {place.discount && (
                <span
                  className="badge bg-danger position-absolute"
                  style={{
                    top: "10px",
                    right: "10px",
                    fontSize: "0.8rem",
                    padding: "6px 10px",
                  }}
                >
                  {place.discount}
                </span>
              )}

              {/* Image */}
              <img
                src={place.img}
                alt={place.name}
                className="card-img-top"
                style={{
                  height: "220px",
                  objectFit: "cover",
                  transition: "transform 0.4s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              />

              {/* Card Body */}
              <div className="card-body text-center">
                {/* Destination Name */}
                <h5
                  className="card-title fw-semibold mb-2"
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
                  {place.name}
                </h5>

                {/* Reviews */}
                <div className="mb-2">
                  {[...Array(5)].map((_, i) => (
                    <i
                      key={i}
                      className={`bi bi-star${
                        i < Math.round(place.reviews) ? "-fill text-warning" : ""
                      }`}
                      style={{
                        fontSize: "1rem",
                        marginRight: "2px",
                      }}
                    ></i>
                  ))}
                  <small className="text-muted ms-1">
                    ({place.reviews.toFixed(1)})
                  </small>
                </div>

                {/* Price */}
                <p
                  className="mb-2 fw-semibold"
                  style={{
                    color: "#0d6efd",
                    fontSize: "1.1rem",
                  }}
                >
                  {place.price}
                </p>

                {/* Description */}
                <p
                  className="text-muted mb-0"
                  style={{ fontSize: "0.9rem", lineHeight: "1.6" }}
                >
                  Enjoy luxury tours and unforgettable experiences in{" "}
                  {place.name}.
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

     
    </div>
  );
}
