import { navItems } from "../../data/navigation";
import { socialLinks } from "../../data/socials";
import logo from "../../assets/Logo.svg";

function Footer() {
  return (
    <footer className="w-full py-8 md:py-16">
      
        {/* Kotak Utama Footer */}
        <div className="flex flex-col rounded-[2.5rem] border border-gray-200 bg-white 
             dark:border-neutral-800 dark:bg-neutral-950 transition-colors duration-300 
             p-8 md:p-12 lg:p-16 gap-12 md:gap-20 mx-4 md:mx-0">
          
          {/* --- Bagian Atas --- */}
          <div className="flex flex-col md:flex-row justify-between 
                           items-start md:items-center gap-8">
            
            {/* Kiri Atas: Headline */}
            <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold text-gray-900 
                           dark:text-white max-w-xl leading-tight">
              LET'S DISCUSS YOUR IDEAS
            </h2>
            
            {/* Kanan Atas: Logo */}
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center">
                <img src={logo} alt="Company Logo" className="w-12 h-12" />
              </div>                
              <div className="text-black dark:text-white">
                <span className="font-outfit text-2xl font-bold">Your Logo</span>
              </div>
            </div>
          </div>

          {/* Garis Pemisah Opsional */}
          <div className="h-px w-full bg-gray-200 dark:bg-neutral-800"></div>

          {/* --- Bagian Bawah --- */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            
            {/* Kiri Bawah: Navigation Menu */}
            <div className="flex flex-wrap items-center gap-6 md:gap-8">
              {navItems.map((item, index) => (
                <a 
                  key={index}
                  href={item.href}
                  className="text-gray-700 dark:text-neutral-400 hover:text-blue-600 
                            dark:hover:text-white transition-colors font-medium"
                  target={item.external ? "_blank" : undefined}
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Kanan Bawah: Social Media Icons */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a key={social.name} href={social.href} 
                  className="group p-3 rounded-full border border-gray-200 dark:border-neutral-800 
                            hover:bg-gray-100 dark:hover:bg-neutral-900 transition-all">
                  
                    <img src={social.icon} alt={social.name} className="w-5 h-5 opacity-60 
                        group-hover:opacity-100 transition-opacity dark:invert" />
                
                </a>
              ))}
            </div>
          </div>

        </div>


    </footer>
  )
}

export default Footer