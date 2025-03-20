import React from 'react'
import nexusLogo from '../pages/assets/nexus.jpg'
import { Link } from 'react-router-dom'

function NavBarSection() {
  return (
    <section className='mb-48 md:mb-14'>
        <header className="text-gray-600 body-font w-full fixed top-0 left-0 z-50 shadow-md h-25 bg-gradient-to-r from-blue-600 to-blue-400 rounded-b-md">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
     <img className=' size-20' src={nexusLogo} alt="" />
      <span className="ml-3 text-3xl">Nexus</span>
    </a>
   
    <li><Link to="/HajjUmrah"></Link></li>
    <nav className="  md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center text-gray-900">
      <a className=" relative group mr-5 font-bold cursor-pointer" href='#countries'>Countries We Offer 
      <span className="absolute left-1/2 bottom-0 top-7 w-0 h-1 bg-red-400 transition-all duration-500 group-hover:w-full group-hover:left-0"></span>
      </a>

      <a className=" relative group mr-5  font-bold cursor-pointer" href='#about'>About Us
      <span className="absolute left-1/2 bottom-0 top-7 w-0 h-1 bg-red-400 transition-all duration-500 group-hover:w-full group-hover:left-0"></span>
      </a>

      <a className="mr-5 relative group  font-bold cursor-pointer " href='#contact'>Contact Us
      <span className="absolute left-1/2 bottom-0 top-7 w-0 h-1 bg-red-400 transition-all duration-500 group-hover:w-full group-hover:left-0"></span>
      </a>

     

    </nav>
   
    <Link to="/HajjUmrah">
    <button className="active:border-4 active:border-slate-400 relative group inline-flex items-center  bg-black border-0 py-1 px-3 focus:outline-none  rounded text-base mt-4 md:mt-0" > <h4 className='relative inline m-5 text-lg sm:text-1xl md:text-2xl group font-bold bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 text-transparent bg-clip-text'  >Hajj/Umrah
    
    
    <span className="absolute left-1/2 bottom-0 top-9 w-0 h-1 bg-slate-400 transition-all duration-500 group-hover:w-full group-hover:left-0"></span></h4>
    
    <svg  fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-8 h-8 " viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
        
      </svg>
     
    </button>
    </Link>
    
  </div>
</header>

    </section>
    
  )
}

export default NavBarSection
