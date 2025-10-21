import {React,useEffect} from 'react'
import PopularPlaces from '../Components/Distination/PopularPlaces'

export default function Distination() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div>
      <PopularPlaces/>
    </div>
  )
}
