import { useState } from 'react'
import { userReview } from '../../data/userReview'
import Card from '../ui/Card'
import SectionHeader from '../ui/SectionHeader'

import rating from "../../assets/UserReview/Rating.png"
import quote from "../../assets/UserReview/Quote.png"
import { getImageUrl } from '../../utils/helpers'

function UserReview() {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <div className="md:px-12 md:py-16 overflow-x-hidden">
        <SectionHeader
          title="What Partners Say About Working With Us"
          subtitle="Trusted voices. Real experiences. Proven results."
          className="my-2"
        />

        <div className="flex flex-col md:flex-row mt-16 gap-6 md:justify-center">
            {userReview.map((item, index) => {
                const isActive = activeIndex === index;
                
                let orderClass = '';
                if (isActive) {
                    orderClass = 'md:order-2';
                } 
                else if (index === (activeIndex + 1) % userReview.length) {
                    orderClass = 'md:order-3';
                } 
                else {
                    orderClass = 'md:order-1';
                }

                return (
                    <Card 
                        key={index}
                        variant="review"
                        title={item.authorName}
                        subtitle={item.authorRole}
                        description={item.review}
                        icon={getImageUrl('UserReview', item.imageName)}
                        onClick={() => setActiveIndex(index)}
                        className={`w-full md:w-1/2 ${orderClass} ${isActive ? 'scale-100 z-10 shadow-2xl' : 'scale-90 z-0'}`}
                    >
                    <img src={quote} alt="Quote" 
                         className="absolute -top-5 left-16 w-16 h-10 object-cover 
                         object-bottom shadow-lg" />
                    
                    <img src={rating} alt="Rating" className="w-24 mb-4" />

                    <div className={`absolute -top-8 left-0 right-0 -bottom-16 z-20 rounded-3xl 
                                     pointer-events-none transition-opacity duration-500 
                        ${isActive ? 'opacity-0' : 'opacity-100 group-hover:opacity-70'}
                        ${orderClass === 'md:order-1' ? 'bg-gradient-to-r from-gray-200 to-transparent dark:from-black dark:to-transparent' : ''}
                        ${orderClass === 'md:order-3' ? 'bg-gradient-to-l from-gray-200 to-transparent dark:from-black dark:to-transparent' : ''}
                    `} />
                </Card>
            )})}
        </div>
    </div>
  )
}

export default UserReview