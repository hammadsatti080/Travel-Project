import {React,useEffect} from 'react'
import Hero from '../Components/Tour/Hero'
import Specialpackages from '../Components/Tour/Specialpackages'
import SpecialDiscount from '../Components/Tour/SpecialDiscount'
import Counter from '../Publicpages/Counter'
import Packages from '../Components/Places/Packages'
import Feature from '../Components/Tour/Feature'
import Quality from '../Components/Tour/Quality'
export default function Tour() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div>
      <Hero/>
      <Specialpackages/>
      <Counter/>
      <SpecialDiscount/>
      <Packages/>
<Feature/>
<Quality/>
    </div>
  )
}
