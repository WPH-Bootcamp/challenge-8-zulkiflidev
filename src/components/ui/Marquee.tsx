import React from 'react';
import { motion } from 'framer-motion';

interface MarqueeProps {
  children: React.ReactNode;
  speed?: number; // Kecepatan scroll (dalam detik)
  className?: string;
}

const Marquee = ({ children, speed = 50, className = "" }: MarqueeProps) => {
  return (
    <div className={`w-full flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] ${className}`}>
      <motion.div 
        className="flex shrink-0"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ ease: "linear", duration: speed, repeat: Infinity }}
      >
        {/* Render children dua kali secara otomatis untuk menciptakan efek infinite loop yang mulus! */}
        {children}
        {children}
      </motion.div>
    </div>
  );
};

export default Marquee;