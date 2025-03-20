import React from 'react'

function AboutUs() {
    const headingStyle='text-xl sm:text-1xl md:text-1.5xl md:2xl lg:2.5xl font-medium underline decoration-zinc-950 text-zinc-800 text-center mb-5'

    const paragraphStyle='font-semibold'

    const divStyle='w-full  mt-10 border p-6 max-w-xl rounded-lg shadow-md'
  return (
   

    <div id='about'>
      <div>
        <h1 className=' relative inline-block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 text-center mb-6 drop-shadow-md group'>About Us
        <span className="absolute left-0 bottom-0 w-0 h-1 bg-blue-500 transition-all duration-500 group-hover:w-full"></span>

        </h1>
      </div>

      <div className='mt-10 md-10 p-10 border w-full mx-auto bg-black '>
        <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl  text-gray-600 text-center mb-6 drop-shadow-md  font-bold bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 text-transparent bg-clip-text'>Nexus Global Consultancy </h1>
         <h2 className='text-1xl sm:text-1.5xl md:text-2xl lg:text-2.45xl font-bold text-gray-600 text-center mb-6 drop-shadow-md   bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 text-transparent bg-clip-text'>Your Gateway to Global Opportunities – Secure, Trusted, and Friendly</h2>
      </div>

      <div>
        <h1 className='text-1xl sm:text-2xl md:text-3xl md:4xl lg:5xl font-semibold text-left mt-16 text-stone-600 underline'>Why Choose Us?</h1>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-col-4 gap-4 shadow-md'>

        <div className='w-full  mt-10 border p-6 max-w-xl rounded-lg shadow-md'>
            <h3 className='text-xl sm:text-1xl md:text-1.5xl md:2xl lg:2.5xl font-medium underline decoration-zinc-950 text-zinc-800 text-center mb-5'>Trusted by Thousands Worldwide</h3>
            <p className='font-semibold'>Nexus Global Consultancy has helped over 10,000 individuals land jobs across 40+ countries. We are a globally recognized, licensed, and secure consultancy firm committed to helping you achieve your dreams.</p>
        </div>

        <div className={divStyle}>
            <h3 className={headingStyle}>Secure and Transparent Process</h3>
            <p className={paragraphStyle}>Your journey with us is 100% safe and transparent. From documentation to visa processing, every step is handled with professional care, ensuring zero risk and full trust.
            </p>
        </div>

        <div className={divStyle}>
            <h3 className={headingStyle}>Opportunities in 40+ Countries</h3>
            <p className={paragraphStyle}>Unlock global job opportunities in top countries like Canada, UAE, UK, Australia, Germany, Singapore, and many more. We partner with reputed international companies to offer high-paying, legit job roles.
            </p>
        </div>

        <div className={divStyle}>
            <h3 className={headingStyle}> Friendly, Personalized Support  </h3>
            <p className={paragraphStyle}>Our team is friendly, approachable, and always ready to assist you. Whether it’s choosing the right job, preparing for interviews, or guiding you through visa processing – we’re with you at every step.</p>
        </div>

        <div className={divStyle}>
            <h3 className={headingStyle}>Fast-Track Visa and Job Assistance
            </h3>
            <p className={paragraphStyle}>Get your dream job abroad quickly with our fast-track processing. We simplify complex processes, ensuring you save time and avoid stress.
            </p>
        </div>

        <div className={divStyle}>
            <h3 className={headingStyle}>No Hidden Charges – Fair Pricing
            </h3>
            <p className={paragraphStyle}>Get your dream job abroad quickly with our fast-track processing. We simplify complex processes, ensuring you save time and avoid stress.
            </p>
        </div>

        <div className={divStyle}>
            <h3 className={headingStyle}>Success Stories That Inspire  </h3>
            <p className={paragraphStyle}>Join a growing community of successful candidates who have transformed their lives by working abroad through Surface Nexus. Be the next success story!</p>

        </div>
    </div>
     
    </div>
  
  )
}

export default AboutUs
