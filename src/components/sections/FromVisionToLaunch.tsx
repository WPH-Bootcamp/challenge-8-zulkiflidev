import React from 'react'

import Portfolio1  from "../../assets/FromVisionToLaunch/Portfolio1.png"
import Portfolio2  from "../../assets/FromVisionToLaunch/Portfolio2.png"
import Portfolio3  from "../../assets/FromVisionToLaunch/Portfolio3.png"



function FromVisionToLaunch() {
  return (
    <div className="md:px-12">
        <div className="flex flex-col my-2 justify-center items-center text-center w-full">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-neutral-25">From Vision to Launch! Projects We’re Proud Of</h2>
          </div>
          <div>
            <h3 className="text-neutral-400 dark:text-neutral-400 font-medium transition-colors duration-300">Take a closer look at our recent work powering startups, enterprises, and everything in between.</h3>
          </div>
        </div>


        <div className="flex flex-col md:flex-row gap-6 mt-16 max-w-6xl mx-auto px-4 justify-center items-center">
            <div className="w-full md:w-1/3 rounded-2xl shadow-sm">
              <img src={Portfolio1} alt="Portfolio 1"  />
              <h4 className="text-primary-200">Landing Page</h4>
              <p className="text-bold">Portfolio1</p>
            </div>
            <div className="w-full md:w-1/3 rounded-2xl shadow-sm">
              <img src={Portfolio2} alt="Portfolio 2"  />
              <h4 className="text-primary-200">Landing Page</h4>
              <h4>Portfolio1</h4>
            </div>
            <div className="w-full md:w-1/3 rounded-2xl shadow-sm">
              <img src={Portfolio3} alt="Portfolio 3"  />
              <h4 className="text-primary-200">Landing Page</h4>
              <h4>Portfolio1</h4>
            </div>  
        </div>

    </div>
  )
}

export default FromVisionToLaunch