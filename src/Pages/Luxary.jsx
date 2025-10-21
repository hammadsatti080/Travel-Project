import {React,useEffect} from 'react'
import CulturalTravel from '../Components/Distination/LuxuryTravel'
import Header from '../Components/Luxery/Header'
import Heroportion from '../Components/Luxery/Heroportion'
export default function Luxary() {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (

    <div>
   
      <Header/>
      <Heroportion/>
    </div>
  )
}
