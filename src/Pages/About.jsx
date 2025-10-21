import React, { useEffect } from 'react';
import Header from '../Components/About/Header';
import Aboutsection from '../Components/About/Aboutsection';
import AboutMission from '../Components/About/AboutMission';
import AboutStats from '../Components/About/AboutStats';
import AboutTeam from '../Components/About/AboutTeam';
import AboutJourney from '../Components/About/AboutJourney';
import AboutExplore from '../Components/About/AboutExplore';
import Abouticon from '../Components/About/Abouticon';
import ExecutiveTeamSection from '../Components/About/ExecutiveTeamSection';
import DreamChoice from '../Components/About/DreamChoice';
import FAQSection from '../Components/About/FAQSection';
import ExplorePlaces from '../Components/About/ExplorePlaces';


export default function About() {
  // ✅ Scroll to top when About page mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div>
      <Header />
      <Aboutsection />
      <AboutMission />
      <AboutStats />
      <AboutTeam />
      <AboutJourney />
      <AboutExplore/>
    <Abouticon/>
    <ExecutiveTeamSection/>
    <DreamChoice/>
    <FAQSection/>
    <ExplorePlaces/>
    </div>
  );
}
