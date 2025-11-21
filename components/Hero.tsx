import React from 'react';
import Button from './Button';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-[110vh] bg-brand-green overflow-hidden pt-24 flex flex-col items-center">
      
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" 
           style={{ 
             backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`, 
             backgroundSize: '40px 40px' 
           }}>
      </div>

      {/* Radial Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-brand-white z-0"></div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
        
        {/* Main Typography Layer 1 (Back) */}
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-display text-[15vw] leading-[0.8] text-brand-yellowGreen uppercase opacity-30 absolute top-10 left-1/2 transform -translate-x-1/2 w-full pointer-events-none select-none"
        >
          Ultimate
        </motion.h1>

        {/* Main Content Wrapper */}
        <div className="relative mt-10 md:mt-20 w-full max-w-6xl mx-auto min-h-[600px] md:min-h-[800px]">
          
          {/* Left Floating Card */}
          <motion.div 
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="absolute left-0 top-20 md:top-40 z-20 hidden md:block"
          >
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl w-64 shadow-2xl">
              <img src="https://picsum.photos/seed/orangejuice/200/200" alt="Orange Juice" className="w-full h-32 object-cover rounded-xl mb-4" />
              <h3 className="text-white font-bold uppercase text-sm mb-2">A refreshing drink made from pure fruit juice</h3>
              <Button variant="orange" fullWidth className="text-xs py-2">Shop Now</Button>
            </div>
          </motion.div>

          {/* Center Hero Product */}
          <div className="absolute left-1/2 top-10 md:top-0 transform -translate-x-1/2 z-30 flex flex-col items-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
              className="relative"
            >
              {/* Splash Effect Behind */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-yellowGreen/20 rounded-full blur-3xl animate-pulse"></div>
              
              {/* Mockup Can - Using CSS to simulate 3D Can if image fails, but using a placeholder here */}
              <div className="relative w-64 md:w-80 h-[400px] md:h-[500px] rounded-[40px] overflow-hidden shadow-2xl bg-gradient-to-br from-green-400 to-brand-green border-t border-l border-white/30 group">
                 <img 
                    src="https://picsum.photos/seed/green_can/600/900" 
                    alt="Main Product" 
                    className="w-full h-full object-cover mix-blend-overlay opacity-80"
                 />
                 <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                    <span className="font-display text-6xl mb-2">Juicy</span>
                    <span className="font-sans text-4xl font-light italic">fresh</span>
                 </div>
              </div>
              
              {/* Splash overlay graphics */}
              <img 
                src="https://picsum.photos/seed/splash1/300/300" 
                className="absolute -top-10 -right-20 w-32 h-32 object-contain rounded-full mix-blend-screen opacity-70" 
                alt="splash" 
              />
              <img 
                src="https://picsum.photos/seed/fruit1/300/300" 
                className="absolute bottom-20 -left-20 w-40 h-40 object-contain rounded-full animate-bounce duration-[3000ms]" 
                alt="fruit" 
              />
            </motion.div>
          </div>

          {/* Big Foreground Text */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full z-40 pointer-events-none flex justify-between items-center px-4 md:px-0">
             <motion.h2 
               initial={{ x: -50, opacity: 0 }}
               animate={{ x: 0, opacity: 1 }}
               transition={{ delay: 0.6 }}
               className="font-display text-[12vw] md:text-[10rem] text-white leading-none drop-shadow-xl"
             >
               YOUR
             </motion.h2>
             <motion.h2 
               initial={{ x: 50, opacity: 0 }}
               animate={{ x: 0, opacity: 1 }}
               transition={{ delay: 0.6 }}
               className="font-display text-[12vw] md:text-[10rem] text-brand-yellowGreen leading-none drop-shadow-xl text-right"
             >
               DRINK
             </motion.h2>
          </div>

        </div>
      </div>
      
      {/* Wave Divider Bottom */}
      <div className="absolute bottom-0 left-0 w-full z-20">
         <svg viewBox="0 0 1440 320" className="w-full h-auto block text-brand-white">
            <path fill="currentColor" fillOpacity="1" d="M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,165.3C672,139,768,117,864,128C960,139,1056,181,1152,197.3C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
         </svg>
      </div>
    </section>
  );
};

export default Hero;