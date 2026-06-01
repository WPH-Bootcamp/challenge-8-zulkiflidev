import { navItems } from "../../data/navigation";
import { useState, useEffect } from "react"
import Button from "../ui/Button"
import logo from "../../assets/Logo.svg"
import { Moon, Sun, Menu, X } from "lucide-react"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark' || savedTheme === null;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

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
    <div className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-black/70 
                    transition-colors duration-300 py-2 border-b border-gray-200/50 dark:border-neutral-800/50">
      <nav className="w-full">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">                                                 
                <div className="flex items-center justify-center">
                  <img src={logo} alt="Company Logo" className="w-12 h-12" />
                </div>                
                <div className="text-black dark:text-white">
                  <span className="font-outfit text-2xl font-bold">Your Logo</span></div>
            </div>

            <div className="hidden md:flex space-x-8">
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

            <div className="hidden md:flex space-x-8 md:justify-center md:items-center">
              <div className="hidden md:flex space-x-8">
                  <Button onClick={() => {
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}>
                      Let's Talk
                  </Button>
              </div>
              <div>
                <button 
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  className="p-2 text-gray-700 
                  dark:text-neutral-25 hover:text-blue-600 transition-colors"
                >
                  {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>
              </div>   
            </div>

            <div className="md:hidden flex items-center space-x-2">
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
          <div className="md:hidden bg-white 
                          dark:bg-black text-gray-700 dark:text-neutral-25 
                          border-t border-gray-200 
                          dark:border-neutral-800 mt-2 h-[calc(100vh-88px)] 
                          overflow-y-auto pb-6 transition-colors duration-300"> 
              <div>
                <ul className="px-3 py-4 space-y-4 text-left">
                  {navItems.map((item, index) => (
                    <li key={index}>
                      <a href={item.href} className="block hover:text-blue-600">{item.label}</a>
                    </li> 
                  ))}
                  <li>
                    <Button onClick={() => {
                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                        setIsOpen(false);
                    }}>
                        Let's Talk
                    </Button>
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