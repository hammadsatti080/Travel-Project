import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Publicpages/Navbar";
import Homepage from "./Pages/Homepage";
import Tour from "./Pages/Tour";
import Places from "./Pages/Places";
import Footer from "./Publicpages/Footer";
import ContactPage from "./Publicpages/ContactPage";
import About from "./Pages/About";
import Distination from "./Pages/Distination";
import Deal from "./Pages/Deal";
import Blogs from "./Pages/Blogs";
import Mountains from "./Pages/Mountains";
import AdventureTravel from "./Components/Distination/AdventureTravel";
import Luxary from "./Pages/Luxary";
import TrailPage from "./Components/Adventure/TrailPage";
import MountainAdventure from "./Components/Adventure/MountainAdventure";
import Culture from "./Pages/Culture";
import Beachparadise from "./Pages/Explore/Beachparadise";
import Citylightstour from "./Pages/Explore/Citylightstour";
import Desertescape from "./Pages/Explore/Desertescape";
import Mountainadventure from "./Pages/Explore/Mountainadventure";
import Aboutsec from "./Components/Explore/Citylight/Aboutsec";
import Overseaterminal from "./Components/Explore/Terminal/Overseaterminal";
import Pakistanterminal from "./Components/Explore/Terminal/Pakistanterminal";
import Terminals from "./Pages/Terminals";
import Contact from "./Pages/Contact";

// Import Travel Booking Components
import TravelHome from "./Pages/Payments/TravelHome";
import PopularTours from "./Pages/Payments/PopularTours";
import PassengerDetails from "./Pages/Payments/PassengerDetails";
import Payment from "./Pages/Payments/Payment";
import Confirmation from "./Pages/Payments/Confirmation";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Existing Routes */}
        <Route path="/" element={<Homepage />} />
        <Route path="tour" element={<Tour />} />
        <Route path="Places" element={<Places />} />
        <Route path="about" element={<About />} />
        <Route path="ContactPage" element={<ContactPage />} />
        <Route path="Distination" element={<Distination />} />
        <Route path="Deal" element={<Deal />} />
        <Route path="Blogs" element={<Blogs />} />
        <Route path="Mountain" element={<Mountains />} />
        <Route path="AdventureTravel" element={<AdventureTravel />} />
        <Route path="Luxury" element={<Luxary />} />
        <Route path="trails" element={<TrailPage />} />
        <Route path="adventure" element={<MountainAdventure />} />
        <Route path="Culture" element={<Culture />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="/explore/beachparadise" element={<Beachparadise />} />
        <Route path="/explore/city-lights-tour" element={<Citylightstour />} />
        <Route path="/explore/desertescape" element={<Desertescape />} />
        <Route path="/explore/mountainadventure" element={<Mountainadventure />} />
        <Route path="/Hero" element={<Aboutsec />} />
        <Route path="/terminal" element={<Overseaterminal />} />
        <Route path="/terminals" element={<Pakistanterminal />} />
        <Route path="/Terminals" element={<Terminals />} />
        
        {/* New Travel Booking System Routes */}
        <Route path="/travel-home" element={<TravelHome />} />
        <Route path="/travel-tours" element={<PopularTours />} />
        <Route path="/travel-passenger-details" element={<PassengerDetails />} />
        <Route path="/travel-payment" element={<Payment />} />
        <Route path="/travel-confirmation" element={<Confirmation />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;