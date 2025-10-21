import React from 'react'
import Mountain from '../Components/Adventure/Mountain'
import SeasonalGuide from '../Components/Adventure/SeasonalGuide'
import TrailCard from '../Components/Adventure/TrailCard'
import AnimatedMountain from '../Components/Adventure/AnimatedMountain'

export default function Mountains() {
  return (
    <div>
      <Mountain/>
  <SeasonalGuide/>
  <TrailCard/>
  <AnimatedMountain/>
    </div>
  )
}
