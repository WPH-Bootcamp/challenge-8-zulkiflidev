import { useState } from 'react'
import { buildForYourIndustry } from '../../data/buildForYourIndustry';
import SectionHeader from '../ui/SectionHeader';

// Fungsi dinamis untuk resolve path gambar di Vite
function getImageUrl(imageName: string) {
  return new URL(`../../assets/BuildForYourIndustry/${imageName}.png`, import.meta.url).href;
}


function BuildForYourIndustry() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
        <SectionHeader
          title="Built for Your Industry"
          subtitle="We’ve helped companies across industries launch smarter, faster, and more securely."
          className="my-2"
        />

        <div className="flex flex-col py-16 md:flex-row justify-center items-start w-full max-w-5xl mx-auto">
            <div className="px-4 md:w-1/3 flex flex-col gap-4">
                {buildForYourIndustry.map((item, index) => (
                    <div 
                        key={index} 
                        className="flex items-center justify-start gap-3 cursor-pointer group"
                        onClick={() => setActiveIndex(index)}
                    >
                        {/* Kotak tipis kecil (edge) vertikal di kiri teks */}
                        <div className={`w-1.5 h-6 rounded-full shrink-0 transition-colors duration-300 ${activeIndex === index ? 'bg-primary-200' : 'bg-neutral-600 group-hover:bg-neutral-400'}`}></div>
                        <span className={`text-lg font-medium transition-colors duration-300 ${activeIndex === index ? 'text-gray-900 dark:text-neutral-25' : 'text-gray-500 dark:text-neutral-500 group-hover:text-gray-700 dark:group-hover:text-neutral-300'}`}>{item.title}</span>
                    </div>
                ))}
            </div>
            <div className="px-4 md:w-2/3">
                {buildForYourIndustry.map((item, index) => (
                    <div key={index} className={activeIndex === index ? 'block' : 'hidden'}>
                        <div className="mb-6 text-gray-600 dark:text-neutral-400"> {item.description} </div>
                        <img className="w-full aspect-[21/9] rounded-xl object-cover object-center shadow-sm" src={getImageUrl(item.imageName)} alt={item.title} />                        
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default BuildForYourIndustry