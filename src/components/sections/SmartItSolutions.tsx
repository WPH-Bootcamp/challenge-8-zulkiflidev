import React from 'react'
import { smartITSolutions } from '../../data/smartItSolutions'

// Fungsi dinamis untuk resolve path gambar di Vite
function getImageUrl(iconName: string) {
  return new URL(`../../assets/SmartItSolutions/${iconName}.png`, import.meta.url).href;
}

function SmartItSolutions() {
  return (
    <div>
        <div className="flex flex-col my-16 justify-center items-center text-center w-full">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-neutral-25">Smart IT Solutions That Grow With You</h2>
          </div>
          <div>
            <h3 className="text-neutral-400 dark:text-neutral-400 font-medium transition-colors duration-300">Tailored tech to boost efficiency, security, and results.</h3>
          </div>
        </div>

        <div className="grid grid-cols-1 py-4 lg:grid-cols-3 gap-2 md:gap-8 mt-8 md:mt-12 max-w-6xl mx-auto">
          {/* 4 item di dalam grid */}
          
          {smartITSolutions.map((item, index) => (
            <div key={index} className="bg-gray-100 dark:bg-neutral-900 border border-neutral-900 p-6 md:p-8 pt-12 md:pt-14 rounded-2xl flex flex-col items-start relative h-full mt-8 md:mt-10">
              <img src={getImageUrl(item.icon)} className="absolute -top-7 md:-top-8 left-6 md:left-8 w-14 h-14 md:w-16 md:h-16 object-contain shrink-0" alt={item.title} />
              <div className="flex flex-col text-left mt-2">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-neutral-25 mb-2"> {item.title} </h3>
                  <p className="dark:text-neutral-400"> {item.description} </p>
              </div>
           </div>  
          ))}


        </div>


        <br/>
        <br/>
        <br/>


    </div>
  )
}

export default SmartItSolutions