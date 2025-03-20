import { useEffect, useState } from 'react'
import NursesImg_1 from '../pages/assets/1.png'
import NursesImg_2 from '../pages/assets/2.png'
import NursesImg_3 from '../pages/assets/3.png'
import NursesImg_4 from '../pages/assets/4.png'



function NursesSection() {  


  return (
    <section>
        
        <div className='container mx-auto px-5 w-full  rounded-md flex flex-col items-center md:flex-row bg-slate-100 border-2 mb-16 '>

            <div className=' '>
            <img className='h-full w-full object-cover px-10 ' src={NursesImg_1} alt="" />
           </div>

            <div className=' mt-6 sm:mt-10 md:mt-16'>

            <h1 className=' font-mono text-gray-500 text-2xl sm:text-4xl md:text-5xl font-semibold pb-6'>We're An</h1>
            
            <p className='text-gray-900 text-1xl sm:text-3xl md:text-4xl font-bol w-1/2 pl-28 pb-8  md:pl-0  text-center md:w-full'>International Nurse Recruitment Agency </p>

            </div>
            
         </div>
           
        
       


         </section>
    
  )
}

export default NursesSection
