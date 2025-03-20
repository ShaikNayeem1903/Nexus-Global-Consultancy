import React from 'react'
import NavBarSection from '../NavBarSection'
import HeroSection from '../HeroSection'
import CountriesSection from '../CountriesSection'
import ContactUs from '../ContactUs'
import AboutUs from '../AboutUs'
import Fotter from '../Fotter'
import { motion } from 'framer-motion'
import NursesSection from '../NursesSection'

function Landing() {
  return (
    <div>

    
<motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.8 }}

    >
      <NavBarSection/>
      <HeroSection/>
      <CountriesSection/>
      <NursesSection/>
      <AboutUs/>
      <ContactUs/>
      <Fotter/>

      </motion.div>
    </div>
  )
}

export default Landing
