import {React,useEffect} from 'react'
import Header from '../Components/Places/Header'
import Discover from '../Components/Places/Discover'
import Counter from '../Publicpages/Counter'
import Packages from '../Components/Places/Packages'
import BookingWidget from '../Components/Places/Booking/BookingWidget'
import Tripcard from '../Components/Places/Tripcard'
import FlightDeals from '../Components/Places/FlightDeals'
import Background from '../Components/Tour/Background'
import Explore from '../Components/Places/Explore'

export default function Places() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div>
   
      <Background/>
      <Discover/>
      <Counter/>
      <Tripcard/>
<FlightDeals/>
<Explore/>
   <BookingWidget/>
   
   
    </div>
  )
}
