import {React,useEffect} from 'react'
import Header from '../../Components/Explore/Citylight/Header'
import Overseaterminal from '../../Components/Explore/Terminal/Overseaterminal';
import Hero from '../../Components/Explore/Citylight/Hero';
import Pakistanterminal from '../../Components/Explore/Terminal/Pakistanterminal';


export default function Citylightstour() {

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, []);
  return (
    <div>
      <Header/>
      <Hero/>
      <Overseaterminal/>
      <Pakistanterminal/>
     
    </div>
  )
}
