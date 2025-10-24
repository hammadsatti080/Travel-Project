import {React,useEffect} from 'react'
import Mountain from '../Components/Adventure/Mountain'
import SeasonalGuide from '../Components/Adventure/SeasonalGuide'
import TrailCard from '../Components/Adventure/TrailCard'
import AnimatedMountain from '../Components/Adventure/AnimatedMountain'

export default function Mountains() {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <div>
      <Mountain/>
  <SeasonalGuide/>
  <TrailCard/>
  <AnimatedMountain/>
    </div>
  )
}
