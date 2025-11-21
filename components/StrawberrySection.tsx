import React from 'react';
import Button from './Button';
import { motion } from 'framer-motion';

const StrawberrySection: React.FC = () => {
  return (
    <section className="relative w-full py-24 bg-brand-white overflow-hidden">
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0 text-center lg:text-left">
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
                <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
                    <img src="https://picsum.photos/seed/straw1/100/100" alt="Strawberry" className="w-16 h-16 rounded-full object-cover shadow-md rotate-12" />
                    <img src="https://picsum.photos/seed/straw2/100/100" alt="Strawberry" className="w-12 h-12 rounded-full object-cover shadow-md -rotate-6 mt-8" />
                </div>

                <h2 className="font-display text-6xl md:text-8xl uppercase text-brand-red leading-[0.9] mb-6">
                  Fresh Tasty <br/>
                  <span className="text-brand-black">Drinks For You</span>
                </h2>
                
                <p className="text-gray-600 text-lg md:text-xl max-w-md mx-auto lg:mx-0 mb-8 leading-relaxed">
                  Experience the perfect blend of flavor and refreshment with every sip, crafted to energize your day and keep you feeling good.
                </p>

                <Button variant="orange">Shop Now</Button>
            </motion.div>
          </div>

          {/* Product Image */}
          <div className="w-full lg:w-1/2 relative flex justify-center">
             <motion.div
               whileInView={{ scale: 1, rotate: 0 }}
               initial={{ scale: 0.8, rotate: 15 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="relative z-20"
             >
                <div className="w-64 h-[400px] bg-gradient-to-b from-red-300 to-brand-red rounded-[40px] shadow-2xl flex items-center justify-center border-2 border-white/40 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
                    <div className="text-white text-center z-10">
                        <h3 className="font-display text-4xl">Naturalist</h3>
                        <p className="font-sans text-sm opacity-90">strawberry colored</p>
                        <h2 className="font-display text-5xl mt-2">Milkshake</h2>
                    </div>
                    <img src="https://picsum.photos/seed/splashred/400/400" className="absolute -bottom-20 -right-20 w-64 h-64 opacity-50 mix-blend-soft-light" alt="splash" />
                </div>
             </motion.div>

             {/* Floating Elements */}
             <motion.img 
               src="https://picsum.photos/seed/straw3/200/200" 
               className="absolute top-0 right-10 w-32 h-32 rounded-full object-cover shadow-xl z-30"
               animate={{ y: [0, -20, 0] }}
               transition={{ repeat: Infinity, duration: 4 }}
               alt="floating fruit"
             />
             <motion.img 
               src="https://picsum.photos/seed/splash2/300/300" 
               className="absolute bottom-0 left-0 w-48 h-48 object-contain opacity-80 mix-blend-multiply z-10"
               alt="splash"
             />
          </div>
        </div>
      </div>

      {/* Wave Background SVG */}
      <div className="absolute top-1/2 left-0 w-full h-[150%] -z-0 transform -translate-y-1/4 pointer-events-none">
        <svg viewBox="0 0 1440 1000" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M0 600C240 650 480 550 720 600C960 650 1200 750 1440 700V1000H0V600Z" fill="#9F1239" fillOpacity="0.9"/>
          <path d="M0 650C240 700 480 600 720 650C960 700 1200 800 1440 750V1000H0V650Z" fill="#BE123C" fillOpacity="0.9"/>
          <path d="M0 700C240 750 480 650 720 700C960 750 1200 850 1440 800V1000H0V700Z" fill="#E11D48" fillOpacity="0.9"/>
        </svg>
      </div>
    </section>
  );
};

export default StrawberrySection;