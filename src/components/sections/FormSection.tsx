import React from 'react'
import Button from '../ui/Button'

function FormSection() {
  return (
    <div className="px-4 py-8 md:px-12 md:py-16 overflow-x-hidden">
       <div className="flex flex-col my-2 justify-center items-center text-center w-full">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-neutral-25">Ready to Start? Let’s Talk.</h2>
          </div>
          <div>
            <h3 className="text-neutral-400 dark:text-neutral-400 font-medium transition-colors duration-300">
                Tell us what you need, and we’ll get back to you soon.</h3>
          </div>
        </div>

        <div className="flex flex-col my-8 justify-center items-center text-center w-full 
                        max-w-2xl mx-auto px-4">
          <form className="w-full flex flex-col gap-6 text-left">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-gray-900 dark:text-neutral-25 font-medium">Name</label>
              <input 
                type="text" 
                id="name" 
                placeholder="Enter your name..." 
                className="px-4 py-3 rounded-lg border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-gray-900 dark:text-neutral-25 focus:outline-none focus:ring-2 focus:ring-primary-200 transition-colors"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-gray-900 dark:text-neutral-25 font-medium">Email</label>
              <input 
                type="email" 
                id="email" 
                placeholder="Enter your email..." 
                className="px-4 py-3 rounded-lg border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-gray-900 dark:text-neutral-25 focus:outline-none focus:ring-2 focus:ring-primary-200 transition-colors"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-gray-900 dark:text-neutral-25 font-medium">Message</label>
              <textarea 
                id="message" 
                rows={5} 
                placeholder="Enter your message..." 
                className="px-4 py-3 rounded-lg border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-gray-900 dark:text-neutral-25 focus:outline-none focus:ring-2 focus:ring-primary-200 transition-colors resize-none"
              ></textarea>
            </div>
            
            {/* Checkbox Group Dummy */}
            <div className="flex flex-col gap-3">
              <label className="text-gray-900 dark:text-neutral-25 font-medium">Services</label>
                
                <div className="flex flex-row gap-3">
                    <div className="flex flex-col gap-3">
                        <label className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" className="w-5 h-5 rounded border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 accent-primary-200 cursor-pointer" />
                        <span className="text-gray-700 dark:text-neutral-300">Web Development</span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" className="w-5 h-5 rounded border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 accent-primary-200 cursor-pointer" />
                        <span className="text-gray-700 dark:text-neutral-300">Mobile App Development</span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" className="w-5 h-5 rounded border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 accent-primary-200 cursor-pointer" />
                        <span className="text-gray-700 dark:text-neutral-300">UI/UX Design</span>
                        </label>
                    </div>
                    <div className="flex flex-col gap-3">
                        <label className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" className="w-5 h-5 rounded border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 accent-primary-200 cursor-pointer" />
                        <span className="text-gray-700 dark:text-neutral-300">Cloud Solutions</span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" className="w-5 h-5 rounded border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 accent-primary-200 cursor-pointer" />
                        <span className="text-gray-700 dark:text-neutral-300">Software Development</span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" className="w-5 h-5 rounded border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 accent-primary-200 cursor-pointer" />
                        <span className="text-gray-700 dark:text-neutral-300">Other</span>
                        </label>
                    </div>

                </div>
            </div>
            <div className="w-full flex flex-col pt-2">
              <Button className="!w-full">Send Message</Button>
            </div>
          </form>
        </div>

    </div>
  )
}

export default FormSection