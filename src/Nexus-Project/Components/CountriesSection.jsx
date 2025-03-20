
import React, { useEffect, useState } from 'react'

function CountriesSection() {
const [countries,setCountries]= useState([]);
const [showAll,setShowAll]= useState(false)

const requriedCountries=["United Kingdom", "Germany" , "Australia" , "United States" ,"Russia",
  "korea", "Phillippines", "Italy","South Africa" ,"Brazil"
]

const ArabCountries=["UAE", "Qatar", "Saudi" , "Kuwait", "Oman"]
    useEffect(
        ()=>{
            fetch("https://restcountries.com/v3.1/all")
            .then(response=>response.json())
            .then(data=>setCountries(data))
        
        },[]
        
        
    )
  return (
    <div id='countries'>
        <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-800  tracking-wide'>Countries We Offer</h1>
        {
           
          
           <div className="container px-5 py-24 mx-auto">
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  gap-4 w-full">
             {countries.filter(country=>requriedCountries.includes(country.name.common)).map((country, index) => (
               <div key={index} className="p-2">
                 <div className="h-full">
                   <img
                     alt="country-flag"
                     className="object-cover object-center w-full h-40 block"
                     src={country.flags.png}
                   />
                   <p className="mt-2 text-center">{country.name.common}</p>
                 </div>
               </div>
             ))}
             <div
  onClick={() => setShowAll(!showAll)}
  className=" p-4 cursor-pointer animate-bounce w-full"
>
  <div className="w-full h-40 bg-black bg-opacity-50 hover:bg-opacity-70 transition duration-300 flex items-center justify-center text-white text-3xl font-bold rounded-xl shadow-lg backdrop-blur-sm">
    Arab Countries
  </div>
</div>

{showAll && 
                countries.filter(country=>ArabCountries.includes(country.name.common)).map((country, index) => (
                    <div key={index} className="p-2">
                      <div className="h-full">
                        <img
                          alt="country-flag"
                          className="object-cover object-center w-full h-40 block"
                          src={country.flags.png}
                        />
                        <p className="mt-2 text-center">{country.name.common}</p>
                      </div>
                    </div>
                  ))

}
            
           </div>
         </div>
        }
        
        
      
    </div>
  )
}

export default CountriesSection
