import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Packages() {
  // State Management
  const [activeTab, setActiveTab] = useState("flight");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [travelerOpen, setTravelerOpen] = useState(false);

  const [travelers, setTravelers] = useState({ adult: 1, senior: 0, child: 0 });
  const [flightTripType, setFlightTripType] = useState("roundtrip");
  const [packageType, setPackageType] = useState("flight+hotel");
  const [locations, setLocations] = useState({ from: "", to: "" });
  const [dates, setDates] = useState({ start: null, end: null });
  const [hotelDates, setHotelDates] = useState({ start: null, end: null });
  const [carOption, setCarOption] = useState("sameDropoff");
  const [carDates, setCarDates] = useState({ start: null, end: null });
  const [carTimes, setCarTimes] = useState({ start: "10:00", end: "10:00" });

  const travelerRef = useRef(null);

  // Background Images for different tabs
  const backgroundImages = {
    flight: "./Homescreen/Countries/Mountain/Aeroplane.jpg",
    packages: "./Homescreen/Countries/Mountain/car.jpg",
    hotel: "./Homescreen/Countries/Mountain/Aeroplane.jpg",
    car: "./Homescreen/Countries/Mountain/car.jpg"
  };

  // Window Resize for Responsiveness
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close traveler dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (travelerRef.current && !travelerRef.current.contains(event.target)) {
        setTravelerOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isMobile = windowWidth < 768;

  // Traveler Counter Logic
  const handleTraveler = (type, op) => {
    setTravelers((prev) => ({
      ...prev,
      [type]: op === "+" ? prev[type] + 1 : Math.max(0, prev[type] - 1),
    }));
  };

  // Traveler Dropdown Box
  const travelerBox = (
    <div
      ref={travelerRef}
      className={`glass-card p-3 mt-2 ${isMobile ? "w-100" : "position-absolute"}`}
      style={{
        top: isMobile ? "auto" : "100%",
        left: 0,
        zIndex: 20,
      }}
    >
      {["adult", "senior", "child"].map((t) => (
        <div key={t} className="d-flex justify-content-between align-items-center mb-2">
          <span className="fw-semibold text-capitalize">
            {t} {t === "adult" && "(18+)"}
          </span>
          <div className="d-flex align-items-center gap-2">
            <button
              className="btn btn-outline-secondary btn-sm"
              onClick={() => handleTraveler(t, "-")}
            >
              -
            </button>
            <span>{travelers[t]}</span>
            <button
              className="btn btn-outline-secondary btn-sm"
              onClick={() => handleTraveler(t, "+")}
            >
              +
            </button>
          </div>
        </div>
      ))}
      <div className="text-end">
        <button
          className="btn btn-dark btn-sm mt-2"
          onClick={() => setTravelerOpen(false)}
        >
          Done
        </button>
      </div>
    </div>
  );

  const renderSearchButton = (text) => (
    <div className="col-12">
      <button className="btn w-100 py-3 fw-semibold rounded-4" style={{ backgroundColor: "black", color: "white" }}>
        <i className="bi bi-search me-2"></i> {text}
      </button>
    </div>
  );

  // Main container style with background image
  const containerStyle = {
    background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImages[activeTab]})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    margin: isMobile ? '1rem auto' : '2rem auto',
    padding: isMobile ? '1.5rem' : '2rem',
    borderRadius: '2rem',
    boxShadow: '0 25px 50px rgba(0,0,0,0.3)',
    position: 'relative',
    overflow: 'hidden',
    minHeight: '80vh',

  };
  const containerStyles = {
    background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("http://getwallpapers.com/wallpaper/full/3/5/4/819206-new-cool-car-wallpapers-for-desktop-2560x1600-for-samsung.jpg")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    margin: isMobile ? '1rem auto' : '2rem auto',
    padding: isMobile ? '1.5rem' : '2rem',
    boxShadow: '0 25px 50px rgba(0,0,0,0.3)',
    position: 'relative',
    overflow: 'hidden',
    minHeight: '80vh',
    animation: 'bgZoom 20s ease-in-out infinite alternate',

  };

  const styles = `
@keyframes bgZoom {
  0% { background-size: 110%; }
  100% { background-size: 130%; }
}
`;
  return (
    <div style={containerStyles}>
    <div className="container my-5 p-4 rounded-4 shadow-lg" style={containerStyle}>
      {/* Navigation Tabs */}
      <div className="d-flex flex-wrap justify-content-center gap-3 mb-4">
        {["flight", "packages", "hotel", "car"].map((tab) => (
          <button
            key={tab}
            onClick={() => {
              setActiveTab(tab);
              setTravelerOpen(false);
            }}
            className={`btn fw-semibold px-4 py-2 text-capitalize tab-btn ${
              activeTab === tab ? "active-tab" : "inactive-tab"
            }`}
          >
            <i
              className={`bi ${
                tab === "flight"
                  ? "bi-airplane"
                  : tab === "packages"
                  ? "bi-box-seam"
                  : tab === "hotel"
                  ? "bi-building"
                  : "bi-car-front"
              } me-2`}
            ></i>
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="row g-4">
        {/* --------- FLIGHT --------- */}
        {activeTab === "flight" && (
          <>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="glass-card p-3">
                <label className="form-label fw-bold" style={{color: 'white'}}>Trip Type</label>
                <select
                  className="form-select modern-input"
                  value={flightTripType}
                  onChange={(e) => setFlightTripType(e.target.value)}
                  style={{ width: isMobile ? "50%" : "100%" }}
                >
                  <option value="roundtrip">Round Trip</option>
                  <option value="oneway">One Way</option>
                  <option value="multiway">Multi Way</option>
                </select>
              </div>
            </div>

            {/* Travelers */}
            <div className="col-12 col-md-6 col-lg-3 position-relative">
              <div
                className="glass-card p-3"
                onClick={() => setTravelerOpen(!travelerOpen)}
                style={{cursor: 'pointer'}}
              >
                <label className="form-label fw-bold" style={{color: 'white'}}>Travelers</label>
                <div className="d-flex justify-content-between align-items-center">
                  <span style={{color: 'white'}}>
                    {travelers.adult + travelers.senior + travelers.child} Travelers
                  </span>
                  <i className="bi bi-chevron-down" style={{color: 'white'}}></i>
                </div>
              </div>
              {travelerOpen && travelerBox}
            </div>

            {/* From / To */}
            {["From", "To"].map((label, idx) => (
              <div key={label} className="col-12 col-md-6 col-lg-3">
                <div className="glass-card p-3">
                  <label className="form-label fw-bold" style={{color: 'white'}}>{label}</label>
                  <input
                    type="text"
                    className="form-control modern-input"
                    placeholder={label}
                    value={idx === 0 ? locations.from : locations.to}
                    onChange={(e) =>
                      setLocations({
                        ...locations,
                        [idx === 0 ? "from" : "to"]: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
            ))}

            {/* Dates */}
            {["Departure", "Return"].map((label, idx) => (
              <div key={label} className="col-12 col-md-6">
                <div className="glass-card p-3">
                  <label className="form-label fw-bold" style={{color: 'white'}}>{label}</label>
                  <DatePicker
                    selected={idx === 0 ? dates.start : dates.end}
                    onChange={(date) =>
                      setDates({
                        ...dates,
                        [idx === 0 ? "start" : "end"]: date,
                      })
                    }
                    className="form-control modern-input"
                    placeholderText={`Select ${label} Date`}
                  />
                </div>
              </div>
            ))}
            {renderSearchButton("Search Flights")}
          </>
        )}

        {/* --------- PACKAGES --------- */}
        {activeTab === "packages" && (
          <>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="glass-card p-3">
                <label className="form-label fw-bold" style={{color: 'white'}}>Package Type</label>
                <select
                  className="form-select modern-input"
                  value={packageType}
                  onChange={(e) => setPackageType(e.target.value)}
                  style={{ width: isMobile ? "50%" : "100%" }}
                >
                  <option value="flight+hotel">Flight + Hotel</option>
                  <option value="flight+car">Flight + Car</option>
                  <option value="car+hotel">Car + Hotel</option>
                </select>
              </div>
            </div>

            {/* Travelers */}
            <div className="col-12 col-md-6 col-lg-3 position-relative">
              <div
                className="glass-card p-3"
                onClick={() => setTravelerOpen(!travelerOpen)}
                style={{cursor: 'pointer'}}
              >
                <label className="form-label fw-bold" style={{color: 'white'}}>Travelers</label>
                <div className="d-flex justify-content-between align-items-center">
                  <span style={{color: 'white'}}>
                    {travelers.adult + travelers.senior + travelers.child} Travelers
                  </span>
                  <i className="bi bi-chevron-down" style={{color: 'white'}}></i>
                </div>
              </div>
              {travelerOpen && travelerBox}
            </div>

            {["From", "To"].map((label) => (
              <div key={label} className="col-12 col-md-6 col-lg-3">
                <div className="glass-card p-3">
                  <label className="form-label fw-bold" style={{color: 'white'}}>{label}</label>
                  <input
                    type="text"
                    className="form-control modern-input"
                    placeholder={label}
                  />
                </div>
              </div>
            ))}

            {["Departure", "Return"].map((label, idx) => (
              <div key={label} className="col-12 col-md-6">
                <div className="glass-card p-3">
                  <label className="form-label fw-bold" style={{color: 'white'}}>{label}</label>
                  <DatePicker
                    selected={idx === 0 ? dates.start : dates.end}
                    onChange={(date) =>
                      setDates({
                        ...dates,
                        [idx === 0 ? "start" : "end"]: date,
                      })
                    }
                    className="form-control modern-input"
                    placeholderText={`Select ${label} Date`}
                  />
                </div>
              </div>
            ))}
            {renderSearchButton("Search Packages")}
          </>
        )}

        {/* --------- HOTEL --------- */}
        {activeTab === "hotel" && (
          <>
            <div className="col-12 col-md-6 position-relative">
              <div
                className="glass-card p-3"
                onClick={() => setTravelerOpen(!travelerOpen)}
                style={{cursor: 'pointer'}}
              >
                <label className="form-label fw-bold" style={{color: 'white'}}>Travelers</label>
                <div className="d-flex justify-content-between align-items-center">
                  <span style={{color: 'white'}}>
                    {travelers.adult + travelers.senior + travelers.child} Travelers
                  </span>
                  <i className="bi bi-chevron-down" style={{color: 'white'}}></i>
                </div>
              </div>
              {travelerOpen && travelerBox}
            </div>

            <div className="col-12 col-md-6">
              <div className="glass-card p-3">
                <label className="form-label fw-bold" style={{color: 'white'}}>Destination</label>
                <input
                  type="text"
                  className="form-control modern-input"
                  placeholder="Enter location"
                />
              </div>
            </div>

            {["Check-in", "Check-out"].map((label, idx) => (
              <div key={label} className="col-12 col-md-6">
                <div className="glass-card p-3">
                  <label className="form-label fw-bold" style={{color: 'white'}}>{label}</label>
                  <DatePicker
                    selected={idx === 0 ? hotelDates.start : hotelDates.end}
                    onChange={(date) =>
                      setHotelDates({
                        ...hotelDates,
                        [idx === 0 ? "start" : "end"]: date,
                      })
                    }
                    className="form-control modern-input"
                    placeholderText={`Select ${label} Date`}
                  />
                </div>
              </div>
            ))}
            {renderSearchButton("Search Hotels")}
          </>
        )}

        {/* --------- CAR --------- */}
        {activeTab === "car" && (
          <>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="glass-card p-3 d-flex justify-content-center">
                <label className="form-label fw-bold me-2" style={{color: 'white'}}>Dropoff Option</label>
                <select
                  className="form-select modern-input car-option-select"
                  value={carOption}
                  onChange={(e) => setCarOption(e.target.value)}
                  style={{ width: isMobile ? "40%" : "100%" }}
                >
                  <option value="sameDropoff">Same Dropoff</option>
                  <option value="differentDropoff">Different Dropoff</option>
                </select>
              </div>
            </div>

            {/* Travelers */}
            <div className="col-12 col-md-6 col-lg-3 position-relative">
              <div
                className="glass-card p-3"
                onClick={() => setTravelerOpen(!travelerOpen)}
                style={{cursor: 'pointer'}}
              >
                <label className="form-label fw-bold" style={{color: 'white'}}>Travelers</label>
                <div className="d-flex justify-content-between align-items-center">
                  <span style={{color: 'white'}}>
                    {travelers.adult + travelers.senior + travelers.child} Travelers
                  </span>
                  <i className="bi bi-chevron-down" style={{color: 'white'}}></i>
                </div>
              </div>
              {travelerOpen && travelerBox}
            </div>

            {["Pick-up Location", "Drop-off Location"].map((label) => (
              <div key={label} className="col-12 col-md-6 col-lg-3">
                <div className="glass-card p-3">
                  <label className="form-label fw-bold" style={{color: 'white'}}>{label}</label>
                  <input
                    type="text"
                    className="form-control modern-input"
                    placeholder={label}
                  />
                </div>
              </div>
            ))}

            {["Pick-up Date", "Drop-off Date"].map((label, idx) => (
              <div key={label} className="col-12 col-md-6">
                <div className="glass-card p-3">
                  <label className="form-label fw-bold" style={{color: 'white'}}>{label}</label>
                  <DatePicker
                    selected={idx === 0 ? carDates.start : carDates.end}
                    onChange={(date) =>
                      setCarDates({
                        ...carDates,
                        [idx === 0 ? "start" : "end"]: date,
                      })
                    }
                    className="form-control modern-input"
                    placeholderText={`Select ${label}`}
                  />
                </div>
              </div>
            ))}

            {["Pick-up Time", "Drop-off Time"].map((label, idx) => (
              <div key={label} className="col-12 col-md-6">
                <div className="glass-card p-3">
                  <label className="form-label fw-bold" style={{color: 'white'}}>{label}</label>
                  <input
                    type="time"
                    className="form-control modern-input"
                    value={idx === 0 ? carTimes.start : carTimes.end}
                    onChange={(e) =>
                      setCarTimes({
                        ...carTimes,
                        [idx === 0 ? "start" : "end"]: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
            ))}
            {renderSearchButton("Search Cars")}
          </>
        )}
      </div>
    </div>
    </div>
  );
}

/* === Modern Styling === */
const styles = document.createElement("style");
styles.innerHTML = `
  .glass-card {
    background: rgba(255,255,255,0.15) !important;
    backdrop-filter: blur(20px);
    border-radius: 1rem;
    box-shadow: 0 8px 32px rgba(0,0,0,0.1);
    transition: all 0.3s ease;
    border: 1px solid rgba(255,255,255,0.2);
  }
  .glass-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 40px rgba(0,0,0,0.2);
    background: rgba(255,255,255,0.25) !important;
  }
  .tab-btn {
    border-radius: 2rem;
    transition: all 0.3s;
    backdrop-filter: blur(10px);
  }
  .active-tab {
    background: rgba(255,255,255,0.9) !important;
    color: #000 !important;
    box-shadow: 0 8px 25px rgba(0,0,0,0.3);
    border: 2px solid white;
  }
  .inactive-tab {
    background: rgba(255,255,255,0.2) !important;
    color: white !important;
    border: 2px solid rgba(255,255,255,0.3);
  }
  .inactive-tab:hover {
    background: rgba(255,255,255,0.3) !important;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0,0,0,0.2);
  }
  .modern-input {
    border-radius: 0.6rem;
    border: 2px solid rgba(255,255,255,0.3);
    transition: all 0.3s ease;
    background: rgba(255,255,255,0.9) !important;
    color: #000 !important;
  }
  .modern-input:focus {
    border-color: white;
    box-shadow: 0 0 0 3px rgba(255,255,255,0.3);
    background: white !important;
  }
  .modern-input::placeholder {
    color: #666;
  }
  .btn-gradient {
    background: linear-gradient(135deg, #6610f2, #007bff);
    border: none;
    color: white;
    font-size: 1.1rem;
    transition: all 0.3s ease;
  }
  .btn-gradient:hover {
    transform: translateY(-2px);
    background: linear-gradient(135deg, #007bff, #6610f2);
  }

  /* Form select styling */
  .form-select {
    background: rgba(255,255,255,0.9) !important;
    color: #000 !important;
    border: 2px solid rgba(255,255,255,0.3) !important;
  }
  .form-select:focus {
    background: white !important;
    border-color: white !important;
    box-shadow: 0 0 0 3px rgba(255,255,255,0.3) !important;
  }
`;
document.head.appendChild(styles);