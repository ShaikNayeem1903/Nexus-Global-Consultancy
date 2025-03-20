import React from 'react'
import NexusImg from '../pages/assets/nexus.jpg'

function HeroSection() {
  return (
    <div>
        <section className="text-gray-600 body-font mt-10 text-center  bg-gray-100 w-full">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center ">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 text-center ml-12 ">NEXUS
        <br className="hidden lg:inline-block " />Global Consultency
      </h1>
      <h4 className=" sm:text-xl text-xl  mb-4 font-medium text-gray-600   ">NEXUS Global Consultancy – Your Trusted Pathway Abroad</h4>
      <p className="mb-8 leading-relaxed">
We help people secure safe and genuine jobs overseas with complete transparency.
Our team offers end-to-end support, from job placement to visa guidance.
Thousands trust us for our friendly approach and legal, secure process.
No hidden fees, no false promises – only real opportunities.
Whether it’s the Gulf, Europe, or beyond – we’ve got you covered.
Join NEXUS and step confidently into your global career.
Your dream job abroad starts here – with trust, care, and support.</p>
     
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ">
      <img className="object-cover object-center rounded" alt="hero" src={NexusImg}/>
    </div>
  </div>
</section>
    </div>
  )
}

export default HeroSection
