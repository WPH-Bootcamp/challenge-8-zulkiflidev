/**
 * Main App Component
 *
 * TODO untuk mentee:
 * 1. Import Home page component (setelah dibuat)
 * 2. Render Home component di sini
 * 3. Atau setup routing jika membuat multiple pages
 *
 * Current: Placeholder untuk testing Tailwind setup
 */

import Navbar from "./components/layout/Navbar";
import EndtoEndSection from "./components/sections/EndtoEndSection";
import HeroSection from "./components/sections/HeroSection";
import OurProcessSection from "./components/sections/OurProcessSection";
import SmartItSolutions from "./components/sections/SmartItSolutions";

function App() {
  return (
      <div className="min-h-screen md:px-16 transition-colors duration-300">
      <Navbar />
      <HeroSection />
      <EndtoEndSection />
      <OurProcessSection />
      <SmartItSolutions />

    </div>    

    /*{
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Company Profile Assignment
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Start building your components!
        </p>
        <div className="space-y-2 text-sm text-gray-500">
          <p>TailwindCSS configured</p>
          <p>Folder structure ready</p>
          <p>Check README.md for instructions</p>
        </div>
      </div>
    </div>
    }*/
  );
}

export default App;
