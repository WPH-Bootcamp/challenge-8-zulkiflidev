import { useState } from 'react'
import Button from '../ui/Button'
import SectionHeader from '../ui/SectionHeader'
import messageInbox from '../../assets/message-inbox.png'
import messageInboxFailed from '../../assets/message-inbox-failed.png'
import { SERVICES_LIST } from '../../data/formService'


function FormSection() {


  // State untuk form - dibuat terpisah supaya lebih gampang di-handle satu-satu
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // State untuk checkbox services (pake array manual)
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isError, setIsError] = useState(false);

  // Fungsi buat centang service
  const toggleService = (serviceName: string) => {
    
        if (selectedServices.includes(serviceName)) {
          
          setSelectedServices(selectedServices.filter(s => s !== serviceName));
        
        }
        else 
        {
          setSelectedServices([...selectedServices, serviceName]);
        }

  };

  const handleKirim = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    
    // Ceritanya lagi kirim ke API
    setTimeout(() => {
      
          //===buat random error, asumsi koneksi internet jelek/terputus...
          const randomError = Math.random() < 0.3;
          
          if (randomError) {
            setIsError(true);
            setShowModal(true);
          } 
          
          else {
            setIsError(false);
            setShowModal(true);
            
            setName('');
            setEmail('');
            setMessage('');
            setSelectedServices([]);
          }
          
          setLoading(false);
    
    }, 1500);

  };

  return (
    <div id="contact" className="px-4 py-8 md:px-12 md:py-16 overflow-x-hidden">
        <SectionHeader
          
          title="Ready to Start? Let’s Talk."
          subtitle="Tell us what you need, and we’ll get back to you soon."
          className="my-2"
        
        />

        <div className="flex flex-col my-8 justify-center items-center text-center w-full 
                        max-w-2xl mx-auto px-4">

          <form onSubmit={handleKirim} className="w-full flex flex-col gap-6 text-left">

            {/* Input Nama */}
            <div className="flex flex-col gap-2">
              
              <label htmlFor="name" className="text-gray-900 dark:text-neutral-25 font-medium">Name</label>
              
              <input   
              
                type="text" 
                id="name"  

                required
                value={name}
                onChange={(e) => setName(e.target.value)}

                placeholder="Enter your name..." 
                className="px-4 py-3 rounded-lg border border-gray-300 dark:border-neutral-700 
                            bg-white dark:bg-neutral-900 text-gray-900 dark:text-neutral-25 
                           focus:outline-none focus:ring-2  focus:ring-primary-200 transition-colors"
              />

            </div>

            {/* Input Email */}
            <div className="flex flex-col gap-2">
                <label htmlFor="email" 
                       className="text-gray-900 dark:text-neutral-25 font-medium">Email</label>

                <input 
                  type="email" 
                  id="email"   
                  required
                  
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email..." 

                  className="px-4 py-3 rounded-lg border border-gray-300 
                             dark:border-neutral-700 bg-white dark:bg-neutral-900 
                            text-gray-900 dark:text-neutral-25 focus:outline-none focus:ring-2 
                            focus:ring-primary-200 transition-colors"
                />

            </div>

            {/* Input Message */}
            <div className="flex flex-col gap-2">

              <label htmlFor="message" 
                      className="text-gray-900 dark:text-neutral-25 font-medium">Message</label>
              
              <textarea 
                id="message"  rows={5}  required

                value={message}  onChange={(e) => setMessage(e.target.value)}
                
                placeholder="Enter your message..." 
                className="px-4 py-3 rounded-lg border border-gray-300 dark:border-neutral-700 bg-white 
                           dark:bg-neutral-900 text-gray-900 dark:text-neutral-25 focus:outline-none 
                           focus:ring-2 focus:ring-primary-200 transition-colors resize-none"

              ></textarea>

            </div>

            {/* Bagian Pilih Service - Dibuat manual per item biar gampang atur layoutnya */}
            <div className="flex flex-col gap-3">
              <label className="text-gray-900 dark:text-neutral-25 font-medium">Services</label>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {SERVICES_LIST.map((service) => (
                    
                    <label key={service} className="flex items-center gap-3 cursor-pointer">

                      <input 
                        type="checkbox" 
                        checked={selectedServices.includes(service)}
                        onChange={() => toggleService(service)}
                        className="w-5 h-5 rounded border-gray-300 accent-primary-200 cursor-pointer" 
                      />
                      
                      <span className="text-gray-700 dark:text-neutral-300">{service}</span>

                    </label>
                  ))}
                </div>
            </div>

            <div className="w-full flex flex-col pt-2">

              <Button type="submit" disabled={loading} className="!w-full">
                    {loading ? 'Please wait, being sent...' : 'Send Message'}
              </Button>
            
            </div>

          </form>
        </div>

        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">

            <div className="bg-white dark:bg-neutral-900 rounded-2xl p-8 max-w-sm w-full flex
                             flex-col items-center  text-center shadow-xl">
                
                  <img src={isError ? messageInboxFailed : messageInbox} alt="Inbox" 
                      className="w-24 h-24 mb-4" />
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-neutral-25 mb-2">
                    {isError ? "Oops! Something went wrong." : "Message Received!"}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {isError ? "We couldn’t send your message. Please try again or check your connection." : "Thanks for reaching out — we’ll get back to you as soon as possible."}
                  </p>

                  <Button onClick={() => setShowModal(false)} className="!w-full">
                    Tutup
                  </Button>
            
            </div>

          </div>
        )}

    </div>
  )
}

export default FormSection