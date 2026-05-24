//import React from 'react'
import { ourProcess as processSteps } from "../../data/ourprocess";




function OurProcessSection() {
  return (
    <div>
        <div className="flex flex-col my-16 justify-center items-center text-center w-full">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold 
                text-gray-900 dark:text-neutral-25">Our Process</h2>
          </div>
          <div>
            <h3 className="text-neutral-400 dark:text-neutral-400 
                font-medium transition-colors duration-300">Clear steps. Smart execution. Results you can count on.</h3>
          </div>
        </div>

        <div className="relative max-w-5xl mx-auto px-4 py-12 mb-16">
          <div className="flex flex-col md:grid md:grid-cols-[1fr_auto_1fr] md:gap-x-8">
            {processSteps.map((step, index) => {
              const isEven = index % 2 === 0;

              return (
                <div key={step.id} className="md:contents relative flex flex-row">
                  
                  {/* Bagian Kiri (Konten untuk genap) */}
                  <div className={`order-2 md:order-none flex-1 md:flex-none md:w-auto z-10 md:py-6 text-left md:text-right 
                       ${!isEven ? 'hidden md:block' : ''} ${index === processSteps.length - 1 ? '' : 'pb-16 md:pb-0'}`}>
                    {isEven && (
                      <div className="p-6 bg-white dark:bg-neutral-900 rounded-2xl shadow-sm border border-gray-100 
                           dark:border-neutral-800 hover:shadow-lg transition-all duration-300">
                        <h4 className="text-xl font-bold text-gray-900 dark:text-neutral-50 mb-2">
                          {step.title}
                        </h4>
                        <p className="text-gray-600 dark:text-neutral-400 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Bagian Tengah (Garis & Nomor) */}
                  <div className="order-1 
                                  md:order-none mr-6 md:mr-0 relative w-12 
                                  md:w-auto flex flex-col 
                                  items-center flex-shrink-0">

                      {/* Garis Atas (Sembunyi di index 0) */}
                      <div className={`w-0.5 bg-gray-200 
                          dark:bg-neutral-800 flex-grow ${index === 0 ? 'opacity-0' :
                           ''}`}></div>
                      
                      {/* Point Nomor */}
                      <div className="w-12 h-12 flex-shrink-0 rounded-full bg-primary-200 
                          text-white flex items-center justify-center font-bold text-lg 
                          shadow-lg z-20 border-4 border-white dark:border-neutral-950">
                        {step.id}
                      </div>

                    {/* Garis Bawah (Sembunyi di index terakhir) */}
                    <div className={`w-0.5 bg-gray-200 dark:bg-neutral-800 
                      flex-grow ${index === processSteps.length - 1 ? 'opacity-0' : 
                      'pb-16 md:pb-0'}`}></div>
                  </div>

                  {/* Bagian Kanan (Konten untuk ganjil) */}
                  <div className={`order-2 md:order-none flex-1 md:flex-none md:w-auto z-10 md:py-6 text-left ${isEven ? 'hidden md:block' : ''} ${index === processSteps.length - 1 ? '' : 'pb-16 md:pb-0'}`}>
                    {!isEven && (
                      <div className="p-6 bg-white dark:bg-neutral-900 rounded-2xl shadow-sm border border-gray-100 dark:border-neutral-800 hover:shadow-lg transition-all duration-300">
                        <h4 className="text-xl font-bold text-gray-900 dark:text-neutral-50 mb-2">
                          {step.title}
                        </h4>
                        <p className="text-gray-600 dark:text-neutral-400 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    )}
                  </div>

                </div>
              );
            })}
          </div>
        </div>

    </div>
  )
}

export default OurProcessSection