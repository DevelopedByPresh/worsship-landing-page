import React from "react"

import Header from './header'
import Discover from './Discover'
import Testimonials from './testimonials'
import SeeWhatGodIsDoing from './SeeWhatGodIsDoing'
import FAQ from './FAQ'
import Footer from './Footer'




const ChurchLandingPage = ({ mode, setMode })=>{
   return (
     <>
 
 
 
 
     <Header  mode={mode} setMode={setMode}/>
     <Discover/>
     <Testimonials/>
     <SeeWhatGodIsDoing/>
     <FAQ/>
     <Footer/>
 
 
 
  
    
 
      
     </>
   )
}

export default ChurchLandingPage