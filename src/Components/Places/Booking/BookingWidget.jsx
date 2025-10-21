import React, { useState } from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import FlightTab from "./FlightTab";
import PackagesTab from "./PackagesTab";
import HotelTab from "./HotelTab";
import CarTab from "./CarTab";

export default function BookingWidget() {
  const [activeTab, setActiveTab] = useState("flight");

  const [travelers, setTravelers] = useState({ adult: 1, senior: 0, child: 0 });
  const [flightTripType, setFlightTripType] = useState("roundtrip");
  const [packageType, setPackageType] = useState("flight+hotel");
  const [flightClass, setFlightClass] = useState("Economy");
  const [locations, setLocations] = useState({ from: "", to: "" });
 
  const [carOption, setCarOption] = useState("sameDropoff");
  const [carDates, setCarDates] = useState({ start: null, end: null });
  const [carTimes, setCarTimes] = useState({ start: "10:00", end: "10:00" });
  const [dates, setDates] = useState({ start: null, end: null }); // FlightTab
  const [packageDates, setPackageDates] = useState({ start: null, end: null }); // PackagesTab
  const [hotelDates, setHotelDates] = useState({ start: null, end: null }); // HotelTab

  const handleTraveler = (type, op) => {
    setTravelers(prev => ({
      ...prev,
      [type]: op === "+" ? prev[type] + 1 : Math.max(0, prev[type] - 1),
    }));
  };

  const commonInputStyle = {
    padding: "10px 15px",
    borderRadius: 8,
    border: "1px solid #ccc",
    width: "100%",
    boxSizing: "border-box",
  };

  const labelStyle = { fontWeight: 600, marginBottom: 5, display: "block" };
  const cardStyle = { padding: 20, borderRadius: 12, background: "#f9f9f9" };
  const searchButtonStyle = {
    padding: "12px 25px",
    borderRadius: 12,
    border: "none",
    background: "#000", // black button
    color: "#fff",
    fontWeight: 600,
    cursor: "pointer",
    alignSelf: "stretch",
    marginTop: 10,
    width:"200px"
  };

  return (
    <div 
      style={{
        width: "95%",
        maxWidth: 1100,
        margin: "20px auto",
        background: "#fff",
        borderRadius: 20,
        padding: 20,
      //  boxShadow: "0 10px 40px rgba(0,0,0,0.15)",
        boxSizing: "border-box",
        position: "sticky", // sticky container
        top: 10,
        zIndex: 1000
      }}
    >
      {/* Tabs */}
      <div style={{
        display: "flex",
        gap: 20,
        flexWrap: "wrap",
        marginBottom: 20,
      }}>
        {["flight", "packages", "hotel", "car"].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              flex: "1 1 20%", // wraps nicely on small screens
              minWidth: 100,
              padding: "12px 15px",
              borderRadius: 12,
              border: "none",
              fontWeight: 600,
              cursor: "pointer",
              background: activeTab === tab ? "black" : "#e0e0e0",
              color: activeTab === tab ? "#fff" : "#333",
              transition: "0.3s",
            }}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Active Tab */}
      <div style={{ display: "flex", flexDirection: "column", gap: 15 }}>
     {activeTab === "flight" && (
          <FlightTab
            flightTripType={flightTripType} setFlightTripType={setFlightTripType}
            flightClass={flightClass} setFlightClass={setFlightClass}
            locations={locations} setLocations={setLocations}
            dates={dates} setDates={setDates}
            travelers={travelers} handleTraveler={handleTraveler}
            commonInputStyle={commonInputStyle} labelStyle={labelStyle}
            cardStyle={cardStyle} searchButtonStyle={searchButtonStyle}
          />
        )}

        {activeTab === "packages" && (
          <PackagesTab
            packageType={packageType} setPackageType={setPackageType}
            travelers={travelers} handleTraveler={handleTraveler}
            dates={packageDates} setDates={setPackageDates}
            commonInputStyle={commonInputStyle} labelStyle={labelStyle}
            cardStyle={cardStyle} searchButtonStyle={searchButtonStyle}
          />
        )}

        {activeTab === "hotel" && (
          <HotelTab
            travelers={travelers} handleTraveler={handleTraveler}
            hotelDates={hotelDates} setHotelDates={setHotelDates}
            commonInputStyle={commonInputStyle} labelStyle={labelStyle}
            cardStyle={cardStyle} searchButtonStyle={searchButtonStyle}
          />
        )}
       

        {activeTab === "car" && (
          <CarTab
            carOption={carOption} setCarOption={setCarOption}
            carDates={carDates} setCarDates={setCarDates}
            carTimes={carTimes} setCarTimes={setCarTimes}
            commonInputStyle={commonInputStyle} labelStyle={labelStyle}
            cardStyle={cardStyle} searchButtonStyle={searchButtonStyle}
          />
        )}
  
      </div>
    </div>
  );
}
