import { ourProcess as processSteps } from "../../data/ourprocess";
import Card from '../ui/Card';
import SectionHeader from '../ui/SectionHeader';

function OurProcessSection() {
  return (
    <div>
        <SectionHeader 
          title="Our Process"
          subtitle="Clear steps. Smart execution. Results you can count on."
          className="my-16"
        />

        <div className="relative max-w-5xl mx-auto px-4 py-12 mb-16">
          <div className="flex flex-col md:grid md:grid-cols-[1fr_auto_1fr] md:gap-x-8">


            {processSteps.map((step, index) => {
                const isEven = index % 2 === 0;
                const isLast = index === processSteps.length - 1;

                const stepCard = <Card variant="process" title={step.title} description={step.description} />;

                const sideClasses = `order-2 md:order-none flex-1 md:flex-none 
                                    md:w-auto z-10 md:py-6 ${isLast ? '' : 'pb-16 md:pb-0'}`;

                return (
                  <div key={step.id} className="flex flex-row md:contents relative ">
                    <div className={`${sideClasses} text-left md:text-right ${!isEven ? 'hidden md:block' : ''}`}>
                      {isEven && stepCard}
                    </div>

                    <div className="flex flex-col order-1 md:order-none mr-6 md:mr-0 relative 
                                    w-12 md:w-auto  items-center shrink-0">
                        <div className={`w-0.5 bg-gray-200 dark:bg-neutral-800 flex-grow ${index === 0 ? 'opacity-0' : ''}`} />
                        <div className="w-12 h-12 shrink-0 rounded-full bg-primary-200 text-white flex items-center 
                                      justify-center font-bold text-lg shadow-lg z-20 border-4
                                    border-white dark:border-neutral-950">
                              {step.id}
                        </div>
                        <div className={`w-0.5 bg-gray-200 dark:bg-neutral-800 flex-grow 
                                      ${isLast ? 'opacity-0' : 'pb-16 md:pb-0'}`} />
                    </div>

                    <div className={`${sideClasses} text-left ${isEven ? 'hidden md:block' : ''}`}>
                        {!isEven && stepCard}
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