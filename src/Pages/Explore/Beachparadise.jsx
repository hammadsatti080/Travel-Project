import {React,useEffect } from 'react'
import Hero from '../../Components/Explore/Mountainadventure/Hero'
import Header from '../../Components/Explore/Mountainadventure/Header'


export default function Beachparadise() {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <div>
<Header/>
     <Hero/>
    </div>
  )
}
