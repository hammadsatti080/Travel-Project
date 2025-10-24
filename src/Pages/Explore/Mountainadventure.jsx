import {React,useEffect} from 'react'
import Header from '../../Components/Explore/Mountain/Header'
import Futureplan from '../../Components/Explore/Mountain/Futureplan';

export default function Mountainadventure() {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, []);
  return (
    <div>
  <Header/>
<Futureplan/>

    </div>
  )
}
