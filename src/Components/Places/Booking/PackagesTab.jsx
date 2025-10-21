import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { motion } from "framer-motion";
import "react-datepicker/dist/react-datepicker.css";

export default function PackagesTab({
  packageType, setPackageType,
  travelers, handleTraveler,
  dates, setDates,
}) {
  const [openSection, setOpenSection] = useState(""); // mobile collapsible

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    hover: { scale: 1.02, boxShadow: "0 8px 20px rgba(0,0,0,0.2)" }
  };

  const buttonVariants = { hover: { scale: 1.05 }, tap: { scale: 0.95 } };

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? "" : section);
  };

  const sections = [
    { key: "packageType", label: "Package Type" },
    { key: "travelers", label: "Travelers" },
    { key: "from", label: "From" },
    { key: "to", label: "To" },
    { key: "start", label: "Departure" },
    { key: "end", label: "Return" },
  ];

  const isMobile = window.innerWidth < 768;

  return (
    <motion.div className="container py-3" variants={containerVariants} initial="hidden" animate="show">

      {/* Package Type */}
      <motion.div className="card mb-3 shadow-sm rounded-4" variants={cardVariants} whileHover="hover">
        <div 
          className="card-header d-md-none" 
          onClick={() => toggleSection("packageType")}
          style={{ cursor: "pointer" }}
        >
          <span className="fw-bold">Package Type</span>
          <span className="float-end">{openSection === "packageType" ? "▲" : "▼"}</span>
        </div>
        {(openSection === "packageType" || !isMobile) && (
          <div className="card-body">
            {!isMobile && <label className="form-label fw-bold">Package Type</label>}
            <select className="form-select" value={packageType} onChange={e => setPackageType(e.target.value)}>
              <option value="flight+hotel">Flight + Hotel</option>
              <option value="flight+car">Flight + Car</option>
              <option value="car+hotel">Car + Hotel</option>
            </select>
          </div>
        )}
      </motion.div>

      {/* Travelers */}
      <motion.div className="card mb-3 shadow-sm rounded-4" variants={cardVariants} whileHover="hover">
        <div 
          className="card-header d-md-none" 
          onClick={() => toggleSection("travelers")}
          style={{ cursor: "pointer" }}
        >
          <span className="fw-bold">Travelers</span>
          <span className="float-end">{openSection === "travelers" ? "▲" : "▼"}</span>
        </div>
        {(openSection === "travelers" || !isMobile) && (
          <div className="card-body">
            {!isMobile && <label className="form-label fw-bold">Travelers</label>}
            <div className="d-flex flex-wrap gap-3">
              {["adult","senior","child"].map(t => (
                <div key={t} className="d-flex justify-content-between align-items-center bg-light p-2 rounded-3 shadow-sm" style={{ minWidth: "150px" }}>
                  <span>{t.charAt(0).toUpperCase() + t.slice(1)}</span>
                  <div className="d-flex gap-2 align-items-center">
                    <button className="btn btn-outline-primary btn-sm" onClick={()=>handleTraveler(t,"-")}>-</button>
                    <span>{travelers[t]}</span>
                    <button className="btn btn-outline-primary btn-sm" onClick={()=>handleTraveler(t,"+")}>+</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </motion.div>

      {/* From / To */}
      <div className="row g-3 mb-3">
        {["from","to"].map(loc => (
          <motion.div key={loc} className="col-12 col-md-6" variants={cardVariants} whileHover="hover">
            <div className="card mb-3 shadow-sm rounded-4">
              <div 
                className="card-header d-md-none"
                onClick={() => toggleSection(loc)}
                style={{ cursor: "pointer" }}
              >
                <span className="fw-bold">{loc === "from" ? "From" : "To"}</span>
                <span className="float-end">{openSection === loc ? "▲" : "▼"}</span>
              </div>
              {(openSection === loc || !isMobile) && (
                <div className="card-body">
                  {!isMobile && <label className="form-label fw-bold">{loc === "from" ? "From" : "To"}</label>}
                  <input type="text" className="form-control" placeholder={loc === "from" ? "From" : "To"} />
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Departure / Return */}
      <div className="row g-3 mb-3">
        {["start","end"].map(d => (
          <motion.div key={d} className="col-12 col-md-6" variants={cardVariants} whileHover="hover">
            <div className="card mb-3 shadow-sm rounded-4">
              <div 
                className="card-header d-md-none"
                onClick={() => toggleSection(d)}
                style={{ cursor: "pointer" }}
              >
                <span className="fw-bold">{d === "start" ? "Departure" : "Return"}</span>
                <span className="float-end">{openSection === d ? "▲" : "▼"}</span>
              </div>
              {(openSection === d || !isMobile) && (
                <div className="card-body">
                  {!isMobile && <label className="form-label fw-bold">{d === "start" ? "Departure" : "Return"}</label>}
                  <DatePicker
                    selected={dates[d]}
                    onChange={date => setDates({...dates,[d]:date})}
                    placeholderText={d === "start" ? "Departure" : "Return"}
                    className="form-control"
                  />
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Search Button */}
      <motion.button className="btn btn-primary w-100 py-2 rounded-4 shadow-sm" variants={buttonVariants} whileHover="hover" whileTap="tap">
        Search Packages
      </motion.button>
    </motion.div>
  );
}
