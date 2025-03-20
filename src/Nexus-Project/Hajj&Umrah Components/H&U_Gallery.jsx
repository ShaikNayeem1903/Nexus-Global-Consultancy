import React from 'react'
import MeccaFullImg from '../pages/assets/medium-umrah-hajj-paper-art-wall-poster-without-frame-12x18-inch-original-imafghgzqtdgsr2y.webp'
import MeccaWithHands from '../pages/assets/Hajj-umrah-package.webp'
import AllInOne from '../pages/assets/know-some-essential-difference-between-hajj-and-umrah-20230124053431.jpg'
import Makka_Hajj from '../pages/assets/Makkah-Hajj-1.jpg'
import MadinaImg from '../pages/assets/prophet_muhammad.jpg'
import MadinaSmallImg from '../pages/assets/MeccaSmallImg.webp'

function Gallery() {
  return (
    <div>
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap ">
    <div className="flex w-full mb-20 flex-wrap border-b-2 border-gray-600 ">
      <h1 className="sm:text-4xl text-3xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">HaJJ & Umrah</h1>
      <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">Embark on a spiritual journey of a lifetime with Hajj and Umrah. Cleanse your soul, seek forgiveness, and feel the peace of standing in the sacred lands of Makkah and Madinah. Every step you take brings blessings, mercy, and divine reward. Let your heart connect with Allah in the holiest places on earth. Join us to fulfill your spiritual dream with comfort, care, and guidance.
      .</p>
    </div>
    <div className="flex flex-wrap md:-m-2 -m-1">
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src={MeccaWithHands}/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src={AllInOne}/>
        </div>
        <div className="md:p-2 p-1 w-full">
          <img alt="gallery" className="w-full h-full object-cover object-center block" src={MadinaImg}/>
        </div>
      </div>
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-full">
          <img alt="gallery" className="w-full h-full object-cover object-center block" src={MeccaFullImg}/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src={Makka_Hajj}/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src={MadinaSmallImg}/>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Gallery
