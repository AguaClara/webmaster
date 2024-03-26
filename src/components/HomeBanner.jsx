import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ParallaxBanner = ({ img, children }) => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative">
      <img src={img} alt="Banner" className="w-full object-cover mt-[1%]" />
      <div className="text-center absolute top-[70%] left-1/2 transform -translate-x-1/2 text-white sm:w-full">
        <motion.div
          style={{ translateY: offsetY * 0.1 }}
        >
          {/* Render the children prop here */}
          {children}
        </motion.div>
      </div>
    </div>
  );
};

export default ParallaxBanner;
