import { navItems } from "../../data/navigation";
import { useState } from "react"
import Button from "../ui/Button"

function Navbar() {

  //state "isOpen"
  //defaultnya ---> false = mobile menu tertutup, jika diklik baru terbuka
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="py-2">
      <nav className="shadow-md w-full">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center md:justify-around h-16">
                        
            <div className="flex items-center">                                                 
                
                {/* Logo Grafis */}
                <div className="flex items-center justify-center">
                  <svg
                    viewBox="0 0 100 100"
                    className="w-12 h-12 text-[#FF623E]"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <mask id="gap-mask">
                        <rect width="100" height="100" fill="white" />
                        
                        <polygon
                          points="44,50 84,36 84,76 44,90"
                          fill="black"
                          stroke="black"
                          stroke-width="6"
                          stroke-linejoin="miter"
                        />
                      </mask>
                    </defs>

                    <polygon
                      points="22,28 62,14 62,54 22,68"
                      fill="currentColor"
                      mask="url(#gap-mask)"
                    />

                    <polygon
                      points="44,50 84,36 84,76 44,90"
                      fill="currentColor"
                    />
                  </svg>
                </div>                
 
                {/* Logo Text */}
                <div className="text-base-white"><span className="font-outfit text-2xl font-bold">Your Logo</span></div>
            </div>

            {/* Daftar Menu, untuk desktop&mobile */}
            <div className="hidden md:flex space-x-8">
                {/* 
                  <a href="#about" className="text-gray-600 hover:text-blue-600">About</a>
                  <a href="#service" className="text-gray-600 hover:text-blue-600">Service</a>
                  <a href="#projects" className="text-gray-600 hover:text-blue-600">Projects</a>
                  <a href="#testimonials" className="text-gray-600 hover:text-blue-600">Testimonials</a>
                  <a href="#faq" className="text-gray-600 hover:text-blue-600">FAQ</a>
                */}

                {navItems.map((item, index) => (
                    <a key={index}
                       href={item.href}
                       className="text-neutral-25 hover:text-blue-600"
                       target={item.external ? "_blank" : undefined}
                    >
                      {item.label}
                    </a>
                ))}    
            </div>

            {/* Tombol "Let's Talk di desktop" */}
            <div>
              <div className="hidden md:flex space-x-8">
                  <Button>Let's Talk</Button>
              </div>
              
            </div>


            {/* Tombol burger-menu di Mobile */} 
            <div className="md:hidden flex items-center">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-gray-600 hover:text-blue-600"
                >
                  {isOpen ? (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  ): (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  )}
                </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden"> 
              <ul className="px-3  py-2 space-y-4 text-left ">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <a href={item.href}>{item.label}</a>
                  </li> 
                ))}
                <li>
                  <Button>Let's Talk</Button>
                </li>
              </ul>  
          </div>
        )}
      </nav>
    </div>
  )
}

export default Navbar