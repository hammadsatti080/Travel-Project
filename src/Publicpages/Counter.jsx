import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const places = [
  { id: 1, name: "Paris", count: 120 },
  { id: 2, name: "New York", count: 95 },
  { id: 3, name: "Tokyo", count: 150 },
  { id: 4, name: "Sydney", count: 80 },
];

export default function Counter() {
  const [counters, setCounters] = useState(places.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setCounters((prev) =>
        prev.map((val, i) => {
          const increment = Math.ceil(places[i].count / 100);
          if (val < places[i].count)
            return Math.min(val + increment, places[i].count);
          return val;
        })
      );
    }, 25);
    return () => clearInterval(interval);
  }, []);

  const floatingStyle = {
    display: "inline-block",
    animation: "float 2s ease-in-out infinite, rotate 4s linear infinite",
    fontSize: "70px",
    transition: "transform 0.3s ease",
    color: "#00d4ff",
  };

  return (
    <>
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0); }
            50% { transform: translateY(-15px); }
            100% { transform: translateY(0); }
          }
          @keyframes rotate {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }

          .counter-card {
            backdrop-filter: blur(6px);
            background: rgba(10, 10, 10, 0.85);
            border: 1px solid rgba(255, 255, 255, 0.05);
            border-radius: 20px;
            box-shadow: 0 8px 30px rgba(0,0,0,0.4);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .counter-card:hover {
            box-shadow: 0 20px 50px rgba(0,212,255,0.6);
            transform: translateY(-10px) scale(1.05);
          }

          .counter-number {
            color: #00d4ff;
            font-size: 3rem;
            font-weight: 800;
            margin-bottom: 15px;
            transition: transform 0.3s ease, color 0.3s ease;
          }

          .counter-name {
            color: #ccc;
            font-size: 1.5rem;
            font-weight: 600;
          }

          @media (max-width: 768px) {
            .counter-number { font-size: 2rem !important; }
            .counter-name { font-size: 1.2rem !important; }
            .counter-icon { font-size: 50px !important; }
          }
          @media (max-width: 480px) {
            .counter-number { font-size: 1.5rem !important; }
            .counter-name { font-size: 1rem !important; }
            .counter-icon { font-size: 40px !important; }
          }
        `}
      </style>

      {/* === Bootstrap Responsive Layout === */}
      <section className="container py-5">
        <div className="row g-4 justify-content-center">
          {places.map((place, index) => (
            <div
              key={place.id}
              className="col-12 col-sm-6 col-lg-3 text-center"
            >
              <div className="counter-card p-4">
                <div className="mb-3">
                  <i
                    className="bi bi-airplane counter-icon"
                    style={floatingStyle}
                  ></i>
                </div>

                <h2 className="counter-number">{counters[index]}+</h2>
                <p className="counter-name mb-0">{place.name}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
