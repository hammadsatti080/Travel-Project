import {React,useEffect} from 'react'
import TopDeals from '../Components/Distination/TopDeals'

export default function Deal() {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    
    <div>
      <TopDeals/>
    </div>
  )
}
