import React from 'react';

export type CardVariant = 'default' | 'smart' | 'circle' | 'review' | 'process';

 
export interface CardProps {
  title: string;
  subtitle?: string; 
  description?: string; 
  icon?: string; 
  variant?: CardVariant; 
  className?: string; 
  children?: React.ReactNode; 
  onClick?: () => void; 
}


const baseStyles = "bg-gray-100 dark:bg-neutral-900 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg";

const Card = 
  ({ 
  title, subtitle, description, icon,  variant = 'default', className = "",   children, onClick }: CardProps) =>   
  {
   

      //variant 1,Bentuk bulat
      if (variant === 'circle') {
        return (
          <div onClick={onClick} 

              className={`${baseStyles} p-4 w-48 h-48 md:w-56 md:h-56 
                          mx-auto rounded-full flex flex-col items-center 
                          justify-center text-center ${className}`}>

              {children ? children : (
                <>
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-primary-200">
                        {title}
                    </h3>
                    
                    {description && <p className="text-gray-700 dark:text-neutral-300 mt-2">{description}</p>}

                </>

              )}
            
          </div>

        );
      }

      //variant 2, Bentuk Smart 
      if (variant === 'smart') {
        return (
          <div onClick={onClick} 

               className={`${baseStyles} flex flex-col  border border-neutral-200 
                          dark:border-neutral-800 p-6 
                          md:p-8 pt-12 md:pt-14 rounded-2xl  items-start 
                          relative h-full mt-8 md:mt-10 ${className}`}>
            {icon && (
              
              <img src={icon} alt={title} 
                  className="absolute -top-7 md:-top-8 left-6 md:left-8 w-14 h-14 
                  md:w-16 md:h-16 object-contain shrink-0" />

            )}
            <div className="flex flex-col text-left mt-2">
              
                <h3 className="text-xl font-bold text-gray-900 dark:text-neutral-25 mb-2">{title}</h3>
                
                {description && 
                    <p className="text-gray-600 dark:text-neutral-400 
                                              leading-relaxed">
                        {description}
                    </p>}
                {children}

            </div>
          </div>
        );
      }

      // variant 3, untuk review
      if (variant === 'review') {
        return (
          <div onClick={onClick} 
              className={`relative group cursor-pointer shrink-0 transition-all 
                          duration-500 ease-in-out rounded-3xl p-[1px] border border-neutral-900 
                          dark:border-none dark:bg-gradient-to-r dark:from-primary-200 dark:via-[#0A0D12] 
                          dark:to-[#181D27] ${className}`}>


            <div className="relative flex flex-col justify-center items-center 
                            bg-gray-100 dark:bg-neutral-900 rounded-3xl p-6 pb-6 h-full">


              {/* Tempat kita akan memasukkan bintang rating, gambar petik/quote, dan overlay */}
              {children}
              
              <div className="flex flex-col items-center justify-center transition-all duration-500 mt-2">
                  
                  <h3 className="text-gray-900 dark:text-neutral-25 text-lg font-medium mb-6 text-center">
                      “{description}”
                  </h3>

                  <p className="font-bold text-gray-900 dark:text-neutral-25 text-center">{title}</p>
                  {subtitle && <p className="text-gray-600 dark:text-neutral-400 text-sm text-center">{subtitle}</p>}
              
              </div>
              
              {icon && (          
                <img src={icon} 
                      alt={title} 
                      className="absolute -bottom-12 rounded-full w-16 h-16 object-cover object-bottom shadow-lg" />
              
              )}

            </div>
          </div>
        );
      }


      // variant 4, Process path
      if (variant === 'process') {
        return (
          
          <div onClick={onClick} 
               className={`p-6 bg-white dark:bg-neutral-900 rounded-2xl shadow-sm 
                          border border-gray-100 dark:border-neutral-800 
                          hover:shadow-lg transition-all duration-300 ${className}`}>
            <h4 className="text-xl font-bold text-gray-900 dark:text-neutral-50 mb-2">{title}</h4>
          
            {description && 
                <p className="text-gray-600 dark:text-neutral-400 leading-relaxed">{description}</p>
            }

            {children}
          
          </div>
        );

      }



      //varian 5, bentuk Default
      return (
        <div onClick={onClick} 
             className={`${baseStyles} border border-gray-200 dark:border-neutral-800 p-6 md:p-8 rounded-2xl
                         flex flex-col items-start relative h-full ${className}`}>
          
          {icon && (
            <img src={icon} alt={title} className="w-14 h-14 md:w-16 md:h-16 object-contain mb-4" />
          )}
          
          <div className="flex flex-col text-left mt-2">

            <h3 className="text-xl font-bold text-gray-900 dark:text-neutral-25 mb-2">{title}</h3>
            {description && <p className="text-gray-600 dark:text-neutral-400 leading-relaxed">{description}</p>}
            {children}
          
          </div>
        </div>
      );
  };

export default Card;
