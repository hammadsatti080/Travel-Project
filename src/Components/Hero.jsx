import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Hero() {
  const [animate, setAnimate] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 150);
  }, []);

  const background = {
    backgroundImage:
      "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "70vh",
    color: "white",
    position: "relative",
    borderRadius: "20px",
    overflow: "hidden",
    transition: "transform 6s ease-out",
    transform: animate ? "scale(1.05)" : "scale(1)",
  };

  const textContainer = {
    transition: "all 1.2s ease",
    transform: animate ? "translateY(0)" : "translateY(40px)",
    opacity: animate ? 1 : 0,
  };

  return (
    <div className="d-flex justify-content-center my-4 px-3">
      {/* 90% width container */}
      <div style={{ width: "90%" }}>
        <div style={background} className="d-flex align-items-center">
          {/* Text Section */}
          <div className="container text-start ps-lg-5" style={textContainer}>
            <h1
              className="display-5 fw-bold mb-3"
              style={{
                maxWidth: "480px",
                lineHeight: "1.2",
                textShadow: "0 2px 6px rgba(0,0,0,0.3)",
              }}
            >
              Live your dream <br /> destinations.
            </h1>

            <p
              className="lead"
              style={{
                maxWidth: "480px",
                textShadow: "0 1px 3px rgba(0,0,0,0.3)",
              }}
            >
              Odio eu consectetur ornare congue non enim pellentesque eleifend ipsum.
            </p>
          </div>

          {/* Bottom Search Section */}
          <div
            className="position-absolute bottom-0 start-50 translate-middle-x bg-white shadow-lg rounded-3 p-3"
            style={{
              width: "70%",
              transform: "translate(-50%, 50%)",
            }}
          >
            {/* Desktop Search Bar */}
            <div className="d-none d-md-flex flex-wrap justify-content-between align-items-center">
              {/* Location */}
              <div className="d-flex align-items-center gap-2 p-2 flex-grow-1">
                <i className="bi bi-geo-alt fs-5 text-dark"></i>
                <input
                  type="text"
                  className="form-control border-0"
                  placeholder="Location"
                />
              </div>

              {/* Guests */}
              <div className="d-flex align-items-center gap-2 p-2 flex-grow-1">
                <i className="bi bi-people fs-5 text-dark"></i>
                <input
                  type="number"
                  className="form-control border-0"
                  placeholder="Guests"
                />
              </div>

              {/* Date */}
              <div className="d-flex align-items-center gap-2 p-2 flex-grow-1">
                <i className="bi bi-calendar-event fs-5 text-dark"></i>
                <input type="date" className="form-control border-0" />
              </div>

              {/* Search Button */}
              <button className="btn btn-dark px-4 py-2 fw-semibold">
                <i className="bi bi-search me-2"></i> Search
              </button>
            </div>

            {/* Mobile Search Toggle */}
            <div className="d-flex d-md-none flex-column align-items-center">
              <button
                className="btn btn-dark w-100 fw-semibold d-flex align-items-center justify-content-center"
                onClick={() => setShowSearch(!showSearch)}
              >
                <i className="bi bi-search me-2"></i>
                {showSearch ? "Hide Search" : "Show Search"}
              </button>

              {/* Collapsible Search Form */}
              {showSearch && (
                <div className="w-100 mt-3">
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <i className="bi bi-geo-alt fs-5 text-dark"></i>
                    <input
                      type="text"
                      className="form-control border"
                      placeholder="Location"
                    />
                  </div>

                  <div className="d-flex align-items-center gap-2 mb-2">
                    <i className="bi bi-people fs-5 text-dark"></i>
                    <input
                      type="number"
                      className="form-control border"
                      placeholder="Guests"
                    />
                  </div>

                  <div className="d-flex align-items-center gap-2 mb-3">
                    <i className="bi bi-calendar-event fs-5 text-dark"></i>
                    <input type="date" className="form-control border" />
                  </div>

                  <button className="btn btn-dark w-100 fw-semibold">
                    <i className="bi bi-search me-2"></i> Search
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
