//import React from 'react'

function EndtoEndSection() {
  return (
    <div>
        <div className="flex flex-col my-16 justify-center items-center text-center w-full">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-neutral-25">End-to-End IT Solutions That Drive Results</h2>
          </div>
          <div>
            <h3 className="text-neutral-400 dark:text-neutral-400 font-medium transition-colors duration-300">From strategy to execution, we deliver solutions that grow your business.</h3>
          </div>
        </div>

        <div className="grid grid-cols-2 py-4 lg:grid-cols-4 gap-2 md:gap-8 mt-8 md:mt-12 max-w-5xl mx-auto">
          {/* 4 item di dalam grid */}
          <div className="bg-gray-100 dark:bg-neutral-900 p-4 w-55 h-55 mx-auto rounded-full flex items-center justify-center">
             <div className="flex flex-col items-center justify-center">           
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-primary-200">50+</h3>
                <p>Projects Delivered </p>
             </div>
          </div>

          <div className="bg-gray-100 dark:bg-neutral-900 p-4 w-55 h-55 mx-auto rounded-full flex items-center justify-center">
             <div className="flex flex-col items-center justify-center">           
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-primary-200">5+</h3>
                <p>Years of Experience </p>
             </div>
          </div>

          <div className="bg-gray-100 dark:bg-neutral-900 p-4 w-55 h-55 mx-auto rounded-full flex items-center justify-center">
             <div className="flex flex-col items-center justify-center">           
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-primary-200">10+</h3>
                <p>Industry Awards Won </p>
             </div>
          </div>

          <div className="bg-gray-100 dark:bg-neutral-900 p-4 w-55 h-55 mx-auto rounded-full flex items-center justify-center">
             <div className="flex flex-col items-center justify-center">           
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-primary-200">50+</h3>
                <p>Client Satisfaction Rate </p>
             </div>
          </div>
        </div>


        <br/>
        <br/>
        <br/>
    </div>
  )
}

export default EndtoEndSection