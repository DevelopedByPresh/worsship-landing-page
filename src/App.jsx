import { useState } from 'react'

import Header from './components/header'
import Discover from './components/Discover'
import Testimonials from './components/testimonials'
import SeeWhatGodIsDoing from './components/SeeWhatGodIsDoing'
import FAQ from './components/FAQ'
import Footer from './components/Footer'



function App() {


  const [user, setUser] = useState('church')


  return (
    <>




    <Header/>
    <Discover/>
    <Testimonials/>
    <SeeWhatGodIsDoing/>
    <FAQ/>
    <Footer/>



 
   

     
    </>
  )
}

export default App
