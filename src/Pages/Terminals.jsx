import {React,useEffect} from 'react'
import Pakistanterminal from '../Components/Explore/Terminal/Pakistanterminal'
import Overseaterminal from '../Components/Explore/Terminal/Overseaterminal'

export default function Terminals() {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, []);
    
  return (
    <div>
    <Overseaterminal/>
      <Pakistanterminal/>
      
    </div>
  )
}
