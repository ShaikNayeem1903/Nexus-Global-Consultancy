import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Haj_Umrah_Landing from '../Hajj&Umrah Components/Haj_Umrah_Landing'
import Navbar from '../Hajj&Umrah Components/Navbar'
import NavBarSection from './NavBarSection'
import Landing from './pages/Landing'
import { AnimatePresence } from 'framer-motion'

function Routing() {
  return (
    <div>
        <AnimatePresence mode='wait'>
    <BrowserRouter>
    <NavBarSection/>
    <Navbar/>
    <Routes>
        <Route path='/HajjUmrah' element={<Haj_Umrah_Landing/>}/>
        <Route path='/' element={<Landing/>}/>
    </Routes>
    
    </BrowserRouter>
    </AnimatePresence>
    </div>
  )
}

export default Routing
