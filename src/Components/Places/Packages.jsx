import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function TravelBooking() {
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

  // Window Resize for Responsiveness
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
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
      <button className="btn  w-100 py-3 fw-semibold rounded-4" style={{  backgroundColor:"black", color:"white"}}>
        <i className="bi bi-search me-2"></i> {text}
      </button>
    </div>
  );

  return (
    <div className="container my-5 p-4 rounded-4 shadow-lg bg-gradient-light">
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
                <label className="form-label fw-bold">Trip Type</label>
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
              >
                <label className="form-label fw-bold">Travelers</label>
                <div className="d-flex justify-content-between align-items-center">
                  <span>
                    {travelers.adult + travelers.senior + travelers.child} Travelers
                  </span>
                  <i className="bi bi-chevron-down"></i>
                </div>
              </div>
              {travelerOpen && travelerBox}
            </div>

            {/* From / To */}
            {["From", "To"].map((label, idx) => (
              <div key={label} className="col-12 col-md-6 col-lg-3">
                <div className="glass-card p-3">
                  <label className="form-label fw-bold">{label}</label>
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
                  <label className="form-label fw-bold">{label}</label>
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
                <label className="form-label fw-bold">Package Type</label>
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
              >
                <label className="form-label fw-bold">Travelers</label>
                <div className="d-flex justify-content-between align-items-center">
                  <span>
                    {travelers.adult + travelers.senior + travelers.child} Travelers
                  </span>
                  <i className="bi bi-chevron-down"></i>
                </div>
              </div>
              {travelerOpen && travelerBox}
            </div>

            {["From", "To"].map((label) => (
              <div key={label} className="col-12 col-md-6 col-lg-3">
                <div className="glass-card p-3">
                  <label className="form-label fw-bold">{label}</label>
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
                  <label className="form-label fw-bold">{label}</label>
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
              >
                <label className="form-label fw-bold">Travelers</label>
                <div className="d-flex justify-content-between align-items-center">
                  <span>
                    {travelers.adult + travelers.senior + travelers.child} Travelers
                  </span>
                  <i className="bi bi-chevron-down"></i>
                </div>
              </div>
              {travelerOpen && travelerBox}
            </div>

            <div className="col-12 col-md-6">
              <div className="glass-card p-3">
                <label className="form-label fw-bold">Destination</label>
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
                  <label className="form-label fw-bold">{label}</label>
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
  <label className="form-label fw-bold me-2">Dropoff Option</label>
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
              >
                <label className="form-label fw-bold">Travelers</label>
                <div className="d-flex justify-content-between align-items-center">
                  <span>
                    {travelers.adult + travelers.senior + travelers.child} Travelers
                  </span>
                  <i className="bi bi-chevron-down"></i>
                </div>
              </div>
              {travelerOpen && travelerBox}
            </div>

            {["Pick-up Location", "Drop-off Location"].map((label) => (
              <div key={label} className="col-12 col-md-6 col-lg-3">
                <div className="glass-card p-3">
                  <label className="form-label fw-bold">{label}</label>
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
                  <label className="form-label fw-bold">{label}</label>
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
                  <label className="form-label fw-bold">{label}</label>
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
  );
}

/* === Modern Styling === */
const styles = document.createElement("style");
styles.innerHTML = `
  .bg-gradient-light {
    background: linear-gradient(145deg, #f9fafc, #ffffff);
  }
  .glass-card {
    background: rgba(255,255,255,0.85);
    backdrop-filter: blur(12px);
    border-radius: 1rem;
    box-shadow: 0 4px 20px rgba(0,0,0,0.08);
    transition: all 0.3s ease;
  }
  .glass-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 25px rgba(0,0,0,0.12);
  }
  .tab-btn {
    border-radius: 2rem;
    transition: all 0.3s;
  }
  .active-tab {
    background: linear-gradient(135deg, #007bff, #6610f2);
    color: #fff !important;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  }
  .inactive-tab {
    background: #fff;
    border: 1px solid #dee2e6;
    color: #333;
  }
  .inactive-tab:hover {
    background: #f8f9fa;
  }
  .modern-input {
    border-radius: 0.6rem;
    border: 1px solid #ced4da;
    transition: all 0.3s ease;
  }
  .modern-input:focus {
    border-color: #6610f2;
    box-shadow: 0 0 0 0.2rem rgba(102,16,242,0.2);
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
`;
document.head.appendChild(styles);
