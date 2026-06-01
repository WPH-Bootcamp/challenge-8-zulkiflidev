import { useState } from 'react';

export interface AccordionItemProps {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItemProps[];
  defaultOpenIndex?: number | null; 
}

const Accordion = ({ items, defaultOpenIndex = 0 }: AccordionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

  return (
    <div className="w-full flex flex-col">

      {items.map((item, index) => {
        
        const isOpen = openIndex === index;
        
        return (
          <div key={index} className="my-4 border-b border-gray-200 
                                      dark:border-neutral-800 pb-4 pr-8">
            <div 
                className="flex justify-between items-center cursor-pointer 
                           font-bold text-gray-900 dark:text-neutral-25"                           
                onClick={() => setOpenIndex(isOpen ? null : index)}>

                <span>{item.question}</span>
                
                <span className="text-2xl font-normal text-gray-500 
                                 transition-transform duration-300">

                      {isOpen ? '-' : '+'}
                </span>

            </div>

            {isOpen && 
                <div className="mt-4 text-gray-600 dark:text-neutral-400">{item.answer}</div>
            }

          </div>
        );
      })}
    </div>
  );
};

export default Accordion;