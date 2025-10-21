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
import SeasonalGuide from "./Components/Adventure/SeasonalGuide";
import TrailCard from "./Components/Adventure/TrailCard";
import AnimatedMountain from "./Components/Adventure/AnimatedMountain";
import TrailPage from "./Components/Adventure/TrailPage";
import MountainAdventure from "./Components/Adventure/MountainAdventure";
import Culture from "./Pages/Culture";
import Contact from "./Pages/Contact";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
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
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
