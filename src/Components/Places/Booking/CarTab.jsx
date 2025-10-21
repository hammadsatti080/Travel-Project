import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import { motion } from "framer-motion";
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function CarTab({
  carOption, setCarOption,
  carDates, setCarDates,
  carTimes, setCarTimes,
}) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [dropdownOpen, setDropdownOpen] = useState(false);

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

      {/* Dropoff Option */}
      <motion.div className="card shadow-sm mb-3 border-0 rounded-4 p-3" variants={cardVariants} whileHover="hover">
        <label className="form-label fw-bold">Dropoff Option</label>

        {/* Use Bootstrap Dropdown on Mobile */}
        {isMobile ? (
          <div className="dropdown">
            <button
              className="btn btn-outline-primary w-100 dropdown-toggle text-start"
              type="button"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              {carOption === "sameDropoff" ? "Same Dropoff" : "Different Dropoff"}
            </button>
            <ul className={`dropdown-menu w-100${dropdownOpen ? " show" : ""}`}>
              <li>
                <button className="dropdown-item" onClick={() => { setCarOption("sameDropoff"); setDropdownOpen(false); }}>
                  Same Dropoff
                </button>
              </li>
              <li>
                <button className="dropdown-item" onClick={() => { setCarOption("differentDropoff"); setDropdownOpen(false); }}>
                  Different Dropoff
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <select className="form-select" value={carOption} onChange={e => setCarOption(e.target.value)}>
            <option value="sameDropoff">Same Dropoff</option>
            <option value="differentDropoff">Different Dropoff</option>
          </select>
        )}
      </motion.div>

      {/* Pick-up Location */}
      <motion.div className="card shadow-sm mb-3 border-0 rounded-4 p-3" variants={cardVariants} whileHover="hover">
        <label className="form-label fw-bold">Pick-up Location</label>
        <input type="text" className="form-control" placeholder="Pick-up Location"/>
      </motion.div>

      {/* Pick-up / Drop-off Dates */}
      <div className="row g-3 mb-3">
        <motion.div className="col-12 col-md-6" variants={cardVariants} whileHover="hover">
          <div className="card p-3 shadow-sm border-0 rounded-4">
            <label className="form-label fw-bold">Pick-up Date</label>
            <DatePicker
              selected={carDates.start}
              onChange={date => setCarDates({ ...carDates, start: date })}
              placeholderText="Select date"
              className="form-control"
            />
          </div>
        </motion.div>
        <motion.div className="col-12 col-md-6" variants={cardVariants} whileHover="hover">
          <div className="card p-3 shadow-sm border-0 rounded-4">
            <label className="form-label fw-bold">Drop-off Date</label>
            <DatePicker
              selected={carDates.end}
              onChange={date => setCarDates({ ...carDates, end: date })}
              placeholderText="Select date"
              className="form-control"
            />
          </div>
        </motion.div>
      </div>

      {/* Pick-up / Drop-off Times */}
      <div className="row g-3 mb-3">
        <motion.div className="col-12 col-md-6" variants={cardVariants} whileHover="hover">
          <div className="card p-3 shadow-sm border-0 rounded-4">
            <label className="form-label fw-bold">Pick-up Time</label>
            <input
              type="time"
              value={carTimes.start}
              onChange={e => setCarTimes({ ...carTimes, start: e.target.value })}
              className="form-control"
            />
          </div>
        </motion.div>
        <motion.div className="col-12 col-md-6" variants={cardVariants} whileHover="hover">
          <div className="card p-3 shadow-sm border-0 rounded-4">
            <label className="form-label fw-bold">Drop-off Time</label>
            <input
              type="time"
              value={carTimes.end}
              onChange={e => setCarTimes({ ...carTimes, end: e.target.value })}
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
        Search Cars
      </motion.button>

    </motion.div>
  );
}
