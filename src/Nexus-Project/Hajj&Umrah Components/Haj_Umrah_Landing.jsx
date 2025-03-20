import React from 'react'
import Gallery from './H&U_Gallery'
import Services from './Services'
import Navbar from './Navbar'
import Fotter from '../Components/Fotter'
import ContactUs from '../Components/ContactUs'
import { motion } from 'framer-motion'

function Haj_Umrah_Landing() {
  return (
    <div>

<motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.8 }}

    >
       <Navbar/>
    <Gallery/>
    <Services/>
    <ContactUs/>
    <Fotter/>
    </motion.div>
        
   
    </div>
  )
}

export default Haj_Umrah_Landing
