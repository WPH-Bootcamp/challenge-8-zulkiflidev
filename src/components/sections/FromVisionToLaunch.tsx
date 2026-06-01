import SectionHeader from '../ui/SectionHeader'
import { portfolioProjects } from '../../data/portfolio'

import { getImageUrl } from '../../utils/helpers';

function FromVisionToLaunch() {
  return (
    <div className="md:px-12">
    
        <SectionHeader
          title="From Vision to Launch! Projects We’re Proud Of"
          subtitle="Take a closer look at our recent work powering startups, enterprises, and everything in between."
          className="my-2"
        />

        <div className="flex flex-col md:flex-row gap-6 mt-16 max-w-6xl mx-auto px-4 justify-center items-stretch">


            {portfolioProjects.map((item) => (
                  <div key={item.id} 
                       className="w-full md:w-1/3 rounded-2xl shadow-sm flex flex-col
                                items-start overflow-hidden border  border-gray-200 dark:border-neutral-800 
                                bg-white dark:bg-neutral-900 transition-all 
                                  hover:-translate-y-1 hover:shadow-md">
                
                  <img src={getImageUrl('FromVisionToLaunch', item.imageName)} alt={item.title} 
                       className="w-full aspect-video object-cover" />

                  <div className="p-6 w-full text-left">
                      <h4 className="text-primary-200 font-medium mb-1">{item.category}</h4>
                      <p className="font-bold text-lg text-gray-900 dark:text-neutral-25">{item.title}</p>
                      
                  </div>

              </div>
            ))}
        </div>
    </div>
  )
}

export default FromVisionToLaunch