import React, { useState } from 'react'
import { userReview } from '../../data/userReview'


//==for mockup
import rating from "../../assets/UserReview/Rating.png"

//import sarahTan from "../../assets/UserReview/SarahTan.png"
import quote from "../../assets/UserReview/Quote.png"


function getImageUrl(imageName: string) {
  return new URL(`../../assets/UserReview/${imageName}.png`, import.meta.url).href;
}

function UserReview() {
  // State untuk menyimpan index item yang sedang diklik. 
  // Nilai 1 berarti secara default item kedua (tengah) akan terlihat lebar.
  const [activeIndex, setActiveIndex] = useState(1);

  // Tambahkan overflow-x-hidden agar tumpahan lebar kartu tidak membuat scrollbar horizontal di layar
  return (
    <div className="md:px-12 md:py-16 overflow-x-hidden">
        <div className="flex flex-col my-2 justify-center items-center text-center w-full">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-neutral-25">What Partners Say About Working With Us</h2>
          </div>
          <div>
            <h3 className="text-neutral-400 dark:text-neutral-400 font-medium transition-colors duration-300">Trusted voices. Real experiences. Proven results.</h3>
          </div>
        </div>

        {/* justify-center untuk menengahkan item aktif, dan membiarkan item inaktif "terdorong" keluar layar secara merata */}
        <div className="flex flex-col md:flex-row mt-16 gap-6 md:justify-center">

            {/* ============= JUST  Mockup 
            <div className="w-1/2 rounded-3xl p-[1px] border border-neutral-900 dark:border-none dark:bg-gradient-to-r 
                            dark:from-primary-200 dark:via-[#0A0D12] dark:to-[#181D27]">
                
                    <div className="relative flex flex-col justify-center items-center bg-gray-100 dark:bg-neutral-900 rounded-3xl p-6 pb-12 h-full">
                        
                        <img src={quote} alt="Sarah Tan" 
                            className="absolute -top-5 left-16 w-16 h-10 
                                        object-cover object-bottom shadow-lg" />

                        <img src={rating} alt="rating" className="w-24 mb-4" />
                        <h3 className="text-gray-900 dark:text-neutral-25 text-lg font-medium mb-6">
                            “The team delivered exactly what we needed — on time and 
                            with outstanding quality. Their attention to detail and communication were 
                            top-notch.”
                        </h3>                
                        <p className="font-bold text-gray-900 dark:text-neutral-25">Sarah Tan</p>
                        <p className="text-gray-600 dark:text-neutral-400 text-sm">Product Manager at Finovate</p>
                        <img src={sarahTan} alt="Sarah Tan" 
                            className="absolute -bottom-8 rounded-full w-16 h-16 
                                        object-cover object-bottom shadow-lg" />
                    </div>
            </div>
            */}

            {userReview.map((item, index) => {
                const isActive = activeIndex === index;
                
                // Mengubah flex order agar item yang aktif selalu pindah ke posisi tengah
                let orderClass = '';
                if (isActive) {
                    orderClass = 'md:order-2'; // Posisi di tengah
                } else if (index === (activeIndex + 1) % userReview.length) {
                    orderClass = 'md:order-3'; // Posisi di kanan
                } else {
                    orderClass = 'md:order-1'; // Posisi di kiri
                }

                return (
                <div key={index}
                     onClick={() => setActiveIndex(index)}
                     className={`relative group cursor-pointer shrink-0 transition-all duration-500 ease-in-out 
                                 md:w-1/2 
                                 ${orderClass} 
                                 ${isActive ? 'scale-100 z-10 shadow-2xl' : 'scale-90 z-0'} 
                                 w-full rounded-3xl p-[1px] border border-neutral-900 
                                           dark:border-none dark:bg-gradient-to-r 
                                           dark:from-primary-200 dark:via-[#0A0D12] dark:to-[#181D27]`}>
    
                    <div className="relative flex flex-col justify-center items-center 
                                    bg-gray-100 dark:bg-neutral-900 rounded-3xl p-6 pb-6 h-full">
                        
                        <img src={quote} alt={item.authorName} 
                            className="absolute -top-5 left-16 w-16 h-10 
                                        object-cover object-bottom shadow-lg" />

                        <img src={rating} alt="rating" className="w-24 mb-4" />
                        
                        <div className="flex flex-col items-center justify-center transition-all duration-500">
                            <h3 className="text-gray-900 dark:text-neutral-25 text-lg font-medium mb-6 text-center">
                                “{item.review}”
                            </h3>
                            <p className="font-bold text-gray-900 dark:text-neutral-25 text-center"> {item.authorName}</p>
                            <p className="text-gray-600 dark:text-neutral-400 text-sm text-center"> {item.authorRole} </p>
                        </div>
                        <img src={getImageUrl(item.imageName)} alt={item.authorName} 
                            className="absolute -bottom-12 rounded-full w-16 h-16 
                                        object-cover object-bottom shadow-lg" />
                    </div>

                    {/* Overlay Gradient untuk efek gelap dari ujung luar memudar ke dalam */}
                    <div className={`absolute -top-8 left-0 right-0 -bottom-16 z-20 rounded-3xl pointer-events-none transition-opacity duration-500 
                        ${isActive ? 'opacity-0' : 'opacity-100 group-hover:opacity-70'}
                        ${orderClass === 'md:order-1' ? 'bg-gradient-to-r from-black dark:from-black via-black/80 dark:via-black/90 to-black/50 dark:to-black/70' : ''}
                        ${orderClass === 'md:order-3' ? 'bg-gradient-to-l from-black dark:from-black via-black/80 dark:via-black/90 to-black/50 dark:to-black/70' : ''}
                    `}></div>

                </div>
            )})}

        </div>
    </div>
  )
}

export default UserReview