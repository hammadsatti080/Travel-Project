import {React,useEffect} from 'react'
import Header from '../Components/Contact/Header'
import TopHeader from '../Components/Contact/TopHeader'
import Contactform from '../Components/Contact/Contactform'

export default function Contact() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <div>
    <TopHeader/>
    <Header/>
    <Contactform/>
    </div>
  )
}
