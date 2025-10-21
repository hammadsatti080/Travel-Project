import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import { motion } from "framer-motion";
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function FlightTab({
  flightTripType, setFlightTripType,
  flightClass, setFlightClass,
  locations, setLocations,
  dates, setDates,
  travelers, handleTraveler,
}) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [openSection, setOpenSection] = useState(""); 
  const [dropdownOpen, setDropdownOpen] = useState({ tripType: false, flightClass: false });

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth < 768;

  const containerVariants = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
  const cardVariants = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.4 } }, hover: { scale: 1.02, boxShadow: "0 8px 20px rgba(0,0,0,0.2)" } };
  const buttonVariants = { hover: { scale: 1.05 }, tap: { scale: 0.95 } };

  const toggleSection = (section) => setOpenSection(openSection === section ? "" : section);

  return (
    <motion.div className="container py-3" variants={containerVariants} initial="hidden" animate="show">

      {/* Trip Type */}
      <motion.div className="card shadow-sm mb-3 border-0 rounded-4" variants={cardVariants} whileHover="hover">
        {isMobile ? (
          <div className="card-body">
            <label className="form-label fw-bold">Trip Type</label>
            <div className="dropdown">
              <button className="btn btn-outline-primary w-100 dropdown-toggle text-start" onClick={() => setDropdownOpen({ ...dropdownOpen, tripType: !dropdownOpen.tripType })}>
                {flightTripType === "roundtrip" ? "Round Trip" : flightTripType === "oneway" ? "One Way" : "Multi Way"}
              </button>
              <ul className={`dropdown-menu w-100${dropdownOpen.tripType ? " show" : ""}`}>
                {["roundtrip","oneway","multiway"].map(option => (
                  <li key={option}>
                    <button className="dropdown-item" onClick={() => { setFlightTripType(option); setDropdownOpen({ ...dropdownOpen, tripType: false }); }}>
                      {option === "roundtrip" ? "Round Trip" : option === "oneway" ? "One Way" : "Multi Way"}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          <div className="card-body">
            <label className="form-label fw-bold">Trip Type</label>
            <select className="form-select shadow-sm" value={flightTripType} onChange={(e)=>setFlightTripType(e.target.value)}>
              <option value="roundtrip">Round Trip</option>
              <option value="oneway">One Way</option>
              <option value="multiway">Multi Way</option>
            </select>
          </div>
        )}
      </motion.div>

      {/* Travelers */}
      <motion.div className="card shadow-sm mb-3 border-0 rounded-4" variants={cardVariants} whileHover="hover">
        {isMobile ? (
          <div className="card-body d-flex flex-column gap-3">
            {["adult","senior","child"].map(t => (
              <div key={t} className="d-flex align-items-center justify-content-between bg-light p-2 rounded-3 shadow-sm">
                <span>{t.charAt(0).toUpperCase() + t.slice(1)}</span>
                <div className="d-flex gap-2">
                  <button className="btn btn-outline-primary btn-sm" onClick={()=>handleTraveler(t,"-")}>-</button>
                  <span>{travelers[t]}</span>
                  <button className="btn btn-outline-primary btn-sm" onClick={()=>handleTraveler(t,"+")}>+</button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="card-body d-flex flex-wrap gap-3 justify-content-start">
            {["adult","senior","child"].map(t => (
              <div key={t} className="d-flex align-items-center justify-content-between bg-light p-3 rounded-3 shadow-sm" style={{ minWidth: "180px", flex: "1 1 auto" }}>
                <span className="fw-semibold">{t.charAt(0).toUpperCase() + t.slice(1)}</span>
                <div className="d-flex align-items-center gap-2">
                  <button className="btn btn-outline-primary btn-sm" onClick={()=>handleTraveler(t,"-")}>-</button>
                  <span className="px-2">{travelers[t]}</span>
                  <button className="btn btn-outline-primary btn-sm" onClick={()=>handleTraveler(t,"+")}>+</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </motion.div>

      {/* Class */}
      <motion.div className="card shadow-sm mb-3 border-0 rounded-4" variants={cardVariants} whileHover="hover">
        {isMobile ? (
          <div className="card-body">
            <label className="form-label fw-bold">Class</label>
            <div className="dropdown">
              <button className="btn btn-outline-primary w-100 dropdown-toggle text-start" onClick={() => setDropdownOpen({ ...dropdownOpen, flightClass: !dropdownOpen.flightClass })}>
                {flightClass}
              </button>
              <ul className={`dropdown-menu w-100${dropdownOpen.flightClass ? " show" : ""}`}>
                {["Economy","Premium","Business","First"].map(option => (
                  <li key={option}>
                    <button className="dropdown-item" onClick={() => { setFlightClass(option); setDropdownOpen({ ...dropdownOpen, flightClass: false }); }}>
                      {option}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          <div className="card-body">
            <label className="form-label fw-bold">Class</label>
            <select className="form-select shadow-sm" value={flightClass} onChange={(e)=>setFlightClass(e.target.value)}>
              <option value="Economy">Economy</option>
              <option value="Premium">Premium</option>
              <option value="Business">Business</option>
              <option value="First">First Class</option>
            </select>
          </div>
        )}
      </motion.div>

      {/* Locations */}
      <div className="row g-3 mb-3">
        {["from","to"].map(loc => (
          <motion.div key={loc} className="col-12 col-md-6" variants={cardVariants} whileHover="hover">
            <div className="card p-3 shadow-sm border-0 rounded-4">
              <label className="form-label fw-bold">{loc === "from" ? "From" : "To"}</label>
              <input type="text" className="form-control shadow-sm" value={locations[loc]} onChange={(e)=>setLocations({...locations,[loc]:e.target.value})}/>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Dates */}
      <div className="row g-3 mb-3">
        {["start","end"].map(d => (
          <motion.div key={d} className="col-12 col-md-6" variants={cardVariants} whileHover="hover">
            <div className="card p-3 shadow-sm border-0 rounded-4">
              <label className="form-label fw-bold">{d === "start" ? "Departure" : "Return"}</label>
              <DatePicker className="form-control shadow-sm" selected={dates[d]} onChange={date=>setDates({...dates,[d]:date})} placeholderText="Select date" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Search Button */}
      <motion.button className="btn btn-primary w-100 py-2 rounded-4 shadow-sm" variants={buttonVariants} whileHover="hover" whileTap="tap">
        Search Flights
      </motion.button>

    </motion.div>
  );
}
