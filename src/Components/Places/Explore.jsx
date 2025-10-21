import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Explore() {
  const destinations = [
    {
      id: 1,
      name: "Lahore",
      properties: "2,218 properties",
      link: "https://en.wikipedia.org/wiki/Lahore",
      image: "./Homescreen/View1.webp"
    },
    {
      id: 2,
      name: "Islamabad",
      properties: "2,664 properties",
      link: "https://en.wikipedia.org/wiki/Islamabad",
      image: "./Homescreen/View2.webp"
    },
    {
      id: 3,
      name: "Karachi",
      properties: "1,003 properties",
      link: "https://en.wikipedia.org/wiki/Karachi",
      image: "./Homescreen/London.jpg"
    },
    {
      id: 4,
      name: "Rawalpindi",
      properties: "893 properties",
      link: "https://en.wikipedia.org/wiki/Rawalpindi",
      image: "./Homescreen/F8Markaz.webp"
    },
    {
      id: 5,
      name: "Bhurban",
      properties: "92 properties",
      link: "https://en.wikipedia.org/wiki/Bhurban",
      image: "./Homescreen/BKground.jpeg"
    },
    {
      id: 6,
      name: "Peshawar",
      properties: "48 properties",
      link: "https://en.wikipedia.org/wiki/Peshawar",
      image: "./Homescreen/View1.webp"
    }
  ];

  return (
    <div className="container my-5 py-4">
      {/* Header Section */}
      <div className="text-center mb-5">
        <h1 className="fw-bold display-5 mb-3">Explore Pakistan</h1>
        <p className="text-muted lead" style={{maxWidth: "600px", margin: "0 auto"}}>
          These popular destinations have a lot to offer
        </p>
      </div>

      {/* Destinations Grid */}
      <div className="row g-4">
        {destinations.map((destination) => (
          <div key={destination.id} className="col-12 col-sm-6 col-xl-4 col-lg-4">
            <a 
              href={destination.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-decoration-none"
            >
              <div 
                className="card border-0 shadow-sm h-100 destination-card"
                style={{
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  borderRadius: "15px",
                  overflow: "hidden"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow = "0 12px 25px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.08)";
                }}
              >
                {/* Destination Image */}
                <div style={{ position: "relative", overflow: "hidden" }}>
                  <img 
                    src={destination.image} 
                    alt={destination.name}
                    className="card-img-top"
                    style={{
                      height: "200px",
                      objectFit: "cover",
                      transition: "transform 0.3s ease"
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = "scale(1.1)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = "scale(1)";
                    }}
                  />
                  {/* Overlay Gradient */}
                  <div 
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.3) 100%)"
                    }}
                  />
                </div>

                {/* Card Body */}
                <div className="card-body p-4">
                  <div className="d-flex justify-content-between align-items-start">
                    <div>
                      <h5 className="card-title fw-bold mb-2 text-dark">{destination.name}</h5>
                      <p className="card-text text-muted mb-0">{destination.properties}</p>
                    </div>
                    {/* Arrow Icon */}
                    <div 
                      className="bg-dark rounded-circle d-flex align-items-center justify-content-center"
                      style={{
                        width: "40px",
                        height: "40px",
                        transition: "all 0.3s ease"
                      }}
                    >
                      <svg 
                        width="20" 
                        height="20" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="white" 
                        strokeWidth="2"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Hover Effect Line */}
                <div 
                  className="position-absolute bottom-0 start-0 w-100"
                  style={{
                    height: "3px",
                    background: "linear-gradient(90deg, #000000, #333333)",
                    transform: "scaleX(0)",
                    transition: "transform 0.3s ease",
                    transformOrigin: "left"
                  }}
                />
              </div>
            </a>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center mt-5">
        <a 
          href="https://www.tourism.gov.pk/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn btn-dark btn-lg px-5 py-3 text-decoration-none"
          style={{
            borderRadius: "50px",
            fontWeight: "600",
            transition: "all 0.3s ease",
            border: "none"
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = "translateY(-3px)";
            e.target.style.boxShadow = "0 10px 25px rgba(0, 0, 0, 0.3)";
            e.target.style.backgroundColor = "#333";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "translateY(0)";
            e.target.style.boxShadow = "none";
            e.target.style.backgroundColor = "#000";
          }}
        >
          View All Destinations
        </a>
      </div>

      {/* Same custom styles as above */}
      <style>
        {`
          .destination-card:hover .position-absolute.bottom-0 {
            transform: scaleX(1) !important;
          }
          
          /* Mobile Responsive styles remain the same */
        `}
      </style>
    </div>
  );
}