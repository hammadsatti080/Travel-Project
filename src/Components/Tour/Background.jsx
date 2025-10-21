import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Background() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "./Homescreen/F8Markaz.webp",
      title: "Discover Your Next Destination ✈️",
      description: "Explore breathtaking destinations, hidden gems, and exclusive travel experiences — all waiting for you to discover."
    },
    {
      image: "./Homescreen/Faisalmosque.jpg",
      title: "Adventure Awaits 🌴",
      description: "Embark on unforgettable journeys to the world's most amazing places and create lasting memories."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="py-5">
      <div className="container">
        <div className="row align-items-center min-vh-50">
          {/* Content Column */}
          <div className="col-md-6 col-12 mb-4 mb-md-0">
            <div className="pe-lg-4">
              <h1 className="display-4 fw-bold text-dark mb-3 lh-sm">
                {slides[currentSlide].title}
              </h1>
              <p className="fs-5 text-muted mb-4">
                {slides[currentSlide].description}
              </p>
              <button 
                className="btn btn-primary btn-lg px-4 py-3 rounded-pill fw-semibold shadow"
                style={{
                  backgroundColor: "black",
                  border: "none",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#e55a2b";
                  e.target.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#ff6b35";
                  e.target.style.transform = "translateY(0)";
                }}
              >
                Explore Now →
              </button>
            </div>
          </div>

          {/* Image Slider Column */}
          <div className="col-md-6 col-12">
            <div 
              className="position-relative rounded-4 overflow-hidden shadow-lg"
              style={{
                height: "450px",
                backgroundImage: `url('${slides[currentSlide].image}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                transition: "all 0.8s ease-in-out",
              }}
            >
              {/* Dark Overlay */}
              <div className="position-absolute w-100 h-100 bg-dark opacity-25"></div>

              {/* Carousel Controls */}
              <div className="position-absolute top-50 w-100 d-flex justify-content-between px-3">
                <button
                  onClick={prevSlide}
                  className="btn btn-light  border-0 rounded-circle d-flex align-items-center justify-content-center"
                  style={{
                    width: "50px",
                    height: "50px",
                    backdropFilter: "blur(10px)",
                    backgroundColor:"red",
                  }}
                >
                  <span className="text-white fw-bold fs-4">‹</span>
                </button>
                <button
                  onClick={nextSlide}
                  className="btn btn-light border-0 rounded-circle d-flex align-items-center justify-content-center"
                  style={{
                    width: "50px",
                    height: "50px",
                    backdropFilter: "blur(10px)",
                    backgroundColor:"red",
                  }}
                >
                  <span className="text-white fw-bold fs-4">›</span>
                </button>
              </div>

              {/* Slide Indicators */}
              <div className="position-absolute bottom-0 start-50 translate-middle-x mb-4">
                <div className="d-flex gap-2">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`btn btn-sm p-0 rounded-circle border-0 ${
                        currentSlide === index ? 'bg-white' : 'bg-white bg-opacity-50'
                      }`}
                      style={{ width: "10px", height: "10px" }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}