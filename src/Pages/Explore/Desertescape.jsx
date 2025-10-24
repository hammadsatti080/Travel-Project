import {React,useEffect} from 'react'

import Hero from '../../Components/Explore/Desert/Hero'
import Futureplan from '../../Components/Explore/Desert/Futureplan'


export default function Desertescape() {

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, []);
  return (
    <div>
   
     <Hero/>
    <Futureplan/>
    </div>
  )
}
