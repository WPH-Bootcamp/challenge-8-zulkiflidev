import { faq } from "../../data/faq";
import faqMeetingImage from "../../assets/FAQ/faqMeeting.png"
import Button from "../ui/Button"
import Accordion from '../ui/Accordion';

function FAQSection() {

  return (
    <div className="px-4 py-8 md:px-12 md:py-16 overflow-x-hidden">
        <div className="flex flex-col md:flex-row md:justify-center md:gap-8">
            
            <div className="w-full md:w-1/2 mb-2 md:mb-0">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-neutral-25">Need Help? Start Here.</h2>                  
            </div>
            
            <div className="w-full md:w-1/3">
                <p className="dark:text-gray-400">Everything you need to know — all in one place.</p>
            </div>

        </div>        

        <div className="flex flex-col md:flex-row mt-8 md:mt-16 justify-center md:items-start gap-8">
            
            <div className="w-full md:w-1/2">
                
                <Accordion items={faq} />
            </div>
            
            <div className="w-full md:w-1/3">
                <div className="flex flex-col bg-primary-300 gap-4 p-6 rounded-2xl">
                    
                    <h3 className="text-2xl font-bold">Let’s talk it through</h3>
                    <p>book a free consultation with our team.</p>
                    <img src={faqMeetingImage} className="w-full h-32 object-cover rounded-2xl" />
                    <Button>Free Consultation</Button>

                </div>
            </div>
        </div>
    </div>
  )
}

export default FAQSection