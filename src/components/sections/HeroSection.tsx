//import React from 'react'
import companyLogo from '../../assets/CompanyLogo.svg'
import Button from '../ui/Button'
import { motion } from 'framer-motion'
import imageHeroLight from '../../assets/ImageHero-light2.png'
import imageHeroDark from '../../assets/ImageHero-dark2.png'

function HeroSection() {
  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 md:-mt-12 lg:-mt-16">
        <div className='flex flex-col md:flex-row justify-center items-center pt-6 md:pt-12 pb-16 md:pb-4 gap-8 lg:gap-16'>
            <div className='flex flex-col justify-center text-start md:text-left md:w-1/2 lg:max-w-lg gap-8 mt-8 md:mt-12'>
                <h1 className='text-3xl md:text-5xl font-bold text-gray-900 dark:text-neutral-25 transition-colors duration-300 mb-4 leading-tight'>
                    Your Tech Partner for <span className="text-primary-200">Smarter Growth</span>
                </h1>

                <h3 className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
                    We deliver tailored IT solutions to help you scale with speed and confidence.
                </h3>
                <div>
                    <Button>Let's Talk</Button>
                </div>
            </div>

            <div className='flex justify-center md:w-1/2'>                
                <img 
                    src={imageHeroLight} 
                    alt="Hero Illustration Light" 
                    className="w-full max-w-sm md:max-w-md lg:max-w-lg h-auto object-cover block dark:hidden transition-opacity duration-300 opacity-90"
                />
                <img 
                    src={imageHeroDark} 
                    alt="Hero Illustration Dark" 
                        className="w-full max-w-sm md:max-w-md lg:max-w-lg h-auto object-cover hidden dark:block transition-opacity duration-300 -scale-x-100"
                />
            </div>            
        </div>

        <div className="flex flex-col justify-center items-center text-center w-full">
            <div className="text-gray-600 dark:text-gray-400 font-medium transition-colors duration-300">
                <h3>Trusted by Global Innovators & Leading Brands</h3>
            </div>
            <div className="w-full mt-2 md:mt-2 flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                <motion.div 
                    className="flex shrink-0"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ ease: "linear", duration: 50, repeat: Infinity }}
                >
                    <img src={companyLogo} alt="Company Logo" className="min-w-[1000px] grayscale sm:min-w-[1000px] md:min-w-[1200px] lg:min-w-[1400px] w-full max-w-none object-contain dark:invert transition-all duration-300 pr-8" />            
                    <img src={companyLogo} alt="Company Logo" className="min-w-[1000px] grayscale sm:min-w-[1000px] md:min-w-[1200px] lg:min-w-[1400px] w-full max-w-none object-contain  dark:invert transition-all duration-300 pr-8" />            
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default HeroSection