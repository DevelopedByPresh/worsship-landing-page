import React from 'react'

import Header from "./header"
import Trusted from './Trusted'
import JoinMovement from './JoinMovement'
import Features from './Features'
import Benefits from './Benefits'
import Testimonials from './Testimonial'
import FAQ from './FAQ'
import Footer from './footer'


const ChurchLandingPage = ({ mode, setMode })=>{
    return(
        <>

     <Header   mode={mode} setMode={setMode}/>
     <Trusted/>
     <JoinMovement/>
     <Features/>
     <Benefits/>
     <Testimonials/>
     <FAQ/>
     <Footer/>
        
        </>
    )
}


export default ChurchLandingPage