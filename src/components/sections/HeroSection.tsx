import React from 'react'
import heroImage from '../../assets/HeroImage.png'

function HeroSection() {
  return (
    <div>
        <div className='flex flex-col md:flex-row justify-center items-center h-screen px-6 gap-8'>
            <div className='text-center md:text-left'>
                <h1 className='text-4xl font-bold text-neutral-25 mb-4'>
                    Your Tech Partner for Smarter Growth
                </h1>
            </div>
            <div className='text-center'>                
                <img src={heroImage} alt="Hero Section" 
                     className="w-full max-w-sm md:max-w-md 
                     lg:max-w-lg h-auto scale-x-[-1] opacity-75" />
            </div>
        </div>
    </div>
  )
}

export default HeroSection