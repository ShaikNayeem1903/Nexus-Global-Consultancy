import React from 'react'
import img from '../pages/assets/WhatsApp Image 2025-03-18 at 14.19.00_e8b599da.jpg'

function Services() {
  return (
    <div id='service'>
      <section className="text-gray-600 body-font">
        <h1 className='text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-gray-800 underline'>Our Services</h1>
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-5xl text-4xl mb-4 font-medium text-gray-900 underline">Umrah Package</h1>
      <p className="mb-8 leading-relaxed">Our Umrah package offers a comprehensive and hassle-free experience for pilgrims looking to perform the lesser pilgrimage to Makkah . The package includes the following:      </p>
      <p className="mb-8 leading-relaxed">1. Accommodation: We provide comfortable and conveniently located hotels in Makkah and Medina, ensuring a peaceful and restful stay for our pilgrims.</p>
      <p className="mb-8 leading-relaxed">2. Transportation: Our package includes round-trip transportation from the airport to the hotel and between Makkah and Medina, making it easy for pilgrims to move between the two holy cities.</p>
      <p className="mb-8 leading-relaxed">3. Visa Processing: We take care of the entire visa processing for our pilgrims, ensuring a smooth and stress-free application process.</p>
      <p className="mb-8 leading-relaxed">4. Guided Tours: Our experienced guides will accompany pilgrims on guided tours of the holy sites in Makkah and Medina, providing historical and spiritual insights along the way.</p>
      <p className="mb-8 leading-relaxed">5. Group Activities: We organize group activities and gatherings, allowing pilgrims to connect with fellow worshippers and share the experience of Umrah together.</p>
      <p className="mb-8 leading-relaxed">6. 24/7 Support: Our dedicated team is available round the clock to provide assistance and support to our pilgrims, ensuring a seamless and worry-free journey.Overall, our Umrah package is designed to provide a comfortable, convenient, and spiritually enriching experience for pilgrims, allowing them to focus on their worship and reflection during this sacred journey.</p>
      
      
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded" alt="hero" src={img}/>
    </div>
  </div>
</section>
    </div>
  )
}

export default Services
