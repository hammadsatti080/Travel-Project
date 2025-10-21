import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import { motion } from "framer-motion";
import "react-datepicker/dist/react-datepicker.css";

export default function HotelTab({
  travelers, handleTraveler,
  hotelDates, setHotelDates,
}) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth < 768;

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    hover: { scale: 1.03, boxShadow: "0 10px 25px rgba(0,0,0,0.15)" }
  };

  const buttonVariants = { hover: { scale: 1.05 }, tap: { scale: 0.95 } };

  return (
    <motion.div className="container py-3" variants={containerVariants} initial="hidden" animate="show">

      {/* Travelers */}
      <motion.div className="card shadow-sm mb-3 border-0 rounded-4 p-3" variants={cardVariants} whileHover="hover">
        <label className="form-label fw-bold mb-2">Travelers</label>
        <div className={`d-flex ${isMobile ? "flex-column gap-3" : "flex-wrap gap-3"}`}>
          {["adult","senior","child"].map(t => (
            <div
              key={t}
              className={`d-flex justify-content-between align-items-center bg-light rounded-3 shadow-sm p-3 ${isMobile ? "w-100" : "flex-fill"}`}
              style={{ minWidth: "150px" }}
            >
              <span className={`fw-bold ${isMobile ? "fs-5" : "fs-6"}`}>{t.charAt(0).toUpperCase() + t.slice(1)}</span>
              <div className="d-flex align-items-center gap-2">
                <button
                  className={`btn btn-outline-primary ${isMobile ? "btn-lg" : "btn-sm"}`}
                  onClick={() => handleTraveler(t,"-")}
                >
                  -
                </button>
                <span className={isMobile ? "fs-5" : ""}>{travelers[t]}</span>
                <button
                  className={`btn btn-outline-primary ${isMobile ? "btn-lg" : "btn-sm"}`}
                  onClick={() => handleTraveler(t,"+")}
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Destination */}
      <motion.div className="card shadow-sm mb-3 border-0 rounded-4 p-3" variants={cardVariants} whileHover="hover">
        <label className="form-label fw-bold">Destination</label>
        <input type="text" className="form-control" placeholder="Enter location"/>
      </motion.div>

      {/* Check-in / Check-out */}
      <div className="row g-3 mb-3">
        <motion.div className="col-12 col-md-6" variants={cardVariants} whileHover="hover">
          <div className="card p-3 shadow-sm border-0 rounded-4">
            <label className="form-label fw-bold">Check-in</label>
            <DatePicker
              selected={hotelDates?.start ?? null}
              onChange={date => setHotelDates({...hotelDates, start: date})}
              placeholderText="Select date"
              className="form-control"
            />
          </div>
        </motion.div>
        <motion.div className="col-12 col-md-6" variants={cardVariants} whileHover="hover">
          <div className="card p-3 shadow-sm border-0 rounded-4">
            <label className="form-label fw-bold">Check-out</label>
            <DatePicker
              selected={hotelDates?.end ?? null}
              onChange={date => setHotelDates({...hotelDates, end: date})}
              placeholderText="Select date"
              className="form-control"
            />
          </div>
        </motion.div>
      </div>

      {/* Search Button */}
      <motion.button
        className="btn btn-primary w-100 py-2 rounded-4 shadow-sm"
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
      >
        Search Hotels
      </motion.button>

    </motion.div>
  );
}
