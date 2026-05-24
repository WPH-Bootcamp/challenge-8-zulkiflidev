import { navItems } from "../../data/navigation";
import { useState, useEffect } from "react"
import Button from "../ui/Button"
import logo from "../../assets/Logo.svg"
import { Moon, Sun, Menu, X } from "lucide-react"

function Navbar() {

  //state "isOpen"
  //defaultnya ---> false = mobile menu tertutup, jika diklik baru terbuka
  const [isOpen, setIsOpen] = useState(false);

  // State "isDarkMode" mengambil data dari Local Storage
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    // Jika disimpan 'dark' atau belum pernah disave (default ke dark)
    return savedTheme === 'dark' || savedTheme === null;
  });

  // Terapkan class 'dark' & simpan pilihan ke Local Storage
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  // Mengunci scroll saat burger menu terbuka pakai metode useEffect
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <div className="sticky top-0 z-50 bg-white dark:bg-black transition-colors duration-300 py-2 opacity-90">
      <nav className="w-full">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
                        
            <div className="flex items-center">                                                 
                
                {/* Logo Grafis */}
                <div className="flex items-center justify-center">
                  <img src={logo} alt="Company Logo" className="w-12 h-12" />
                </div>                
 
                {/* Logo Text */}
                <div className="text-black dark:text-white"><span className="font-outfit text-2xl font-bold">Your Logo</span></div>
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
                       className="text-gray-700 dark:text-neutral-25 hover:text-blue-600 transition-colors"
                       target={item.external ? "_blank" : undefined}
                    >
                      {item.label}
                    </a>
                ))}    
            </div>

            {/* Tombol "Let's Talk di desktop" */}
            <div className="hidden md:flex space-x-8 md:justify-center md:items-center">
              <div className="hidden md:flex space-x-8">
                  <Button>Let's Talk</Button>
              </div>

              <div>
                {/* toggle dark/theme button */}
                <button 
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  className="p-2 text-gray-700 dark:text-neutral-25 hover:text-blue-600 transition-colors"
                >
                  {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>
              </div>            
            </div>


            {/* Theme Toggle & Tombol burger-menu di Mobile */} 
            <div className="md:hidden flex items-center space-x-2">
                {/* toggle dark/theme button (mobile) */}
                <button 
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  className="p-2 text-gray-700 dark:text-neutral-25 hover:text-blue-600 transition-colors"
                >
                  {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>

                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="p-2 text-gray-700 dark:text-neutral-25 hover:text-blue-600 transition-colors"
                >
                  {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden bg-white dark:bg-black text-gray-700 dark:text-neutral-25 border-t border-gray-200 dark:border-neutral-800 mt-2 h-[calc(100vh-88px)] overflow-y-auto pb-6 transition-colors duration-300"> 
              <div>
                <ul className="px-3 py-4 space-y-4 text-left">
                  {navItems.map((item, index) => (
                    <li key={index}>
                      <a href={item.href} className="block hover:text-blue-600">{item.label}</a>
                    </li> 
                  ))}
                  <li>
                    <Button>Let's Talk</Button>
                  </li>
                </ul>
              </div>  
          </div>
        )}
      </nav>
    </div>
  )
}

export default Navbar