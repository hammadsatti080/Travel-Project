import {React,useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Hero from "../Components/Hero";
import Popularplace from "../Components/Homescreen/Popularplace";
import Topdestination from "../Components/Homescreen/Topdestination";
import Tourview from "../Components/Homescreen/Tourview";
import Futuretour from "../Components/Homescreen/Futuretour";
import Testimonial from "../Components/Homescreen/Testimonial";
import Specialoffer from "../Components/Homescreen/Specialoffer";
import Blogsection from "../Components/Homescreen/Blogsection";
import About from '../Components/Tour/About'
export default function Homepage() {
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div>
        <Hero/>
        <Popularplace/>
        <Topdestination/>
        <Tourview/>
        <Futuretour/>
        <Testimonial/>
        <About/>
        <Specialoffer/>
        <Blogsection/>
    </div>
  );
}
