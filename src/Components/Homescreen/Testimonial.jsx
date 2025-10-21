import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Testimonial() {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const reviews = [
    {
      id: 1,
      name: "Emily Johnson",
      role: "Adventure Traveler",
      review:
        "Our trip was absolutely incredible! Everything was organized perfectly and the experience exceeded expectations.",
      rating: 5,
      img: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
      id: 2,
      name: "Michael Brown",
      role: "Business Executive",
      review:
        "A seamless booking experience and top-notch customer service. Highly recommend for luxury tours.",
      rating: 4,
      img: "https://randomuser.me/api/portraits/men/51.jpg",
    },
    {
      id: 3,
      name: "Sophia Williams",
      role: "Travel Blogger",
      review:
        "Loved every part of the trip! Beautiful destinations, amazing guides, and great attention to detail.",
      rating: 5,
      img: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      id: 4,
      name: "David Lee",
      role: "Photographer",
      review:
        "The whole journey was breathtaking. I captured some of my best photos ever. Can't wait for the next one!",
      rating: 4,
      img: "https://randomuser.me/api/portraits/men/74.jpg",
    },
    {
      id: 5,
      name: "Ava Miller",
      role: "Solo Explorer",
      review:
        "Everything went smoothly from start to finish! The staff was super helpful and friendly.",
      rating: 5,
      img: "https://randomuser.me/api/portraits/women/72.jpg",
    },
  ];

  // Check screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  const getCardWidth = () => {
    if (isMobile) return '100%'; // Single card on mobile
    return '33.33%'; // Three cards on desktop
  };

  const getTransformValue = () => {
    if (isMobile) {
      return `translateX(-${index * 100}%)`; // Move by 100% for mobile
    }
    return `translateX(-${index * 33.33}%)`; // Move by 33.33% for desktop
  };

  return (
    <div
      className="d-flex flex-column align-items-center my-5 py-4"
      style={{
        width: "100%",
        backgroundColor: "#f8f9fa",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Header */}
      <div style={{ textAlign: "center", width: "90%" }}>
        <h2 className="fw-bold mb-2">What Our Clients Say About Us</h2>
        <p
          className="text-muted mb-5"
          style={{ maxWidth: "600px", margin: "0 auto" }}
        >
          Hear from our happy travelers who experienced unforgettable moments
          with us.
        </p>
      </div>

      {/* Carousel Wrapper */}
      <div
        style={{
          width: "90%",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "flex",
            transition: "transform 1s ease-in-out",
            transform: getTransformValue(),
          }}
        >
          {reviews.concat(reviews).map((client, i) => (
            <div
              key={i}
              className="p-3"
              style={{
                flex: `0 0 ${getCardWidth()}`,
                minWidth: getCardWidth(),
              }}
            >
              <div
                className="card border-0 shadow-sm text-center p-3"
                style={{
                  borderRadius: "15px",
                  backgroundColor: "#fff",
                  transition: "transform 0.4s ease, box-shadow 0.4s ease",
                  height: "100%",
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
                {/* Image */}
                <div
                  className="d-flex justify-content-center mb-3"
                  style={{ position: "relative" }}
                >
                  <img
                    src={client.img}
                    alt={client.name}
                    className="rounded-circle shadow"
                    style={{
                      width: "80px",
                      height: "80px",
                      objectFit: "cover",
                      border: "3px solid #0d6efd",
                    }}
                  />
                </div>

                {/* Name & Role */}
                <h5 className="fw-semibold mb-1">{client.name}</h5>
                <p
                  className="text-muted mb-2"
                  style={{ fontSize: "0.9rem", marginBottom: "8px" }}
                >
                  {client.role}
                </p>

                {/* Review Text */}
                <p
                  className="text-secondary mb-3"
                  style={{
                    fontSize: "0.9rem",
                    lineHeight: "1.6",
                    fontStyle: "italic",
                  }}
                >
                  "{client.review}"
                </p>

                {/* Rating */}
                <div>
                  {[...Array(5)].map((_, i) => (
                    <i
                      key={i}
                      className={`bi bi-star${
                        i < client.rating ? "-fill text-warning" : ""
                      }`}
                      style={{ fontSize: "1rem", marginRight: "2px" }}
                    ></i>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="mt-4">
        {reviews.map((_, i) => (
          <span
            key={i}
            style={{
              display: "inline-block",
              height: "10px",
              width: "10px",
              margin: "5px",
              borderRadius: "50%",
              backgroundColor: i === index % reviews.length ? "#0d6efd" : "#ccc",
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
            onClick={() => setIndex(i)}
          ></span>
        ))}
      </div>
    </div>
  );
}