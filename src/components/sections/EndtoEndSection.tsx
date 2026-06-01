import Card from '../ui/Card';
import SectionHeader from '../ui/SectionHeader';

import { statsData } from '../../data/endToEnd';



function EndtoEndSection() {
  return (
    <div>
        <SectionHeader
          title="End-to-End IT Solutions That Drive Results"
          subtitle="From strategy to execution, we deliver solutions that grow your business."
          className="my-16"
        />

        <div className="grid grid-cols-2 py-4 lg:grid-cols-4 gap-2 md:gap-8 mt-8 md:mt-12 
                      max-w-5xl mx-auto">
          
            {/* 4 item di dalam grid*/}
            {statsData.map((stat) => (
              
              <Card 
                key={stat.id}
                variant="circle"

                title={stat.title}
                description={stat.description}
              />

            ))}
        </div>

         
    </div>
  )
}

export default EndtoEndSection