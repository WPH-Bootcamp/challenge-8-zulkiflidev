import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import BuildForYourIndustry from "../components/sections/BuildForYourIndustry";
import EndtoEndSection from "../components/sections/EndtoEndSection";
import FAQSection from "../components/sections/faqSection";
import FormSection from "../components/sections/FormSection";
import FromVisionToLaunch from "../components/sections/FromVisionToLaunch";
import HeroSection from "../components/sections/HeroSection";
import OurProcessSection from "../components/sections/OurProcessSection";
import SmartItSolutions from "../components/sections/SmartItSolutions";
import UserReview from "../components/sections/UserReview";

//import React from 'react'


function Home() {
  return (
    <div>
        <div className="min-h-screen md:px-12 transition-colors duration-300">
            <Navbar />      
            <HeroSection />
            <EndtoEndSection />
            <OurProcessSection />
            <SmartItSolutions />
            <BuildForYourIndustry />
            <FromVisionToLaunch />
            <UserReview />
            <FAQSection />
            <FormSection />
            <Footer />
        </div>
    </div>
  )
}

export default Home