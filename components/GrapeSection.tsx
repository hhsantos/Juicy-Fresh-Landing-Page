import React from 'react';
import { motion } from 'framer-motion';

const GrapeSection: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen bg-brand-white overflow-hidden py-20 flex flex-col items-center justify-center">
      
      {/* Giant Background Typography */}
      <div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none z-0 overflow-hidden">
        <h2 className="font-display text-[25vw] leading-none text-brand-purple/5 whitespace-nowrap">
          DRINK FRESH
        </h2>
        <h2 className="font-display text-[25vw] leading-none text-transparent whitespace-nowrap text-stroke-purple opacity-10">
          DRINK FRESH
        </h2>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        <div className="mb-16 text-center lg:text-left lg:ml-20">
          <motion.h2 
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: -50, opacity: 0 }}
            viewport={{ once: true }}
            className="font-display text-6xl md:text-8xl uppercase text-brand-purple mb-4"
          >
            Wholesome <br />
            For The Body
          </motion.h2>
        </div>

        <div className="flex flex-col items-center relative">
            {/* Central Product */}
            <motion.div 
              whileInView={{ y: 0, opacity: 1 }}
              initial={{ y: 100, opacity: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-20"
            >
               <div className="w-72 md:w-96 h-[500px] md:h-[600px] bg-gradient-to-tr from-purple-900 to-brand-purple rounded-[50px] shadow-2xl flex items-center justify-center relative overflow-hidden group transform transition-transform hover:scale-105">
                  
                  {/* Can Texture */}
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30"></div>
                  
                  {/* Can Label */}
                  <div className="text-center z-10 text-white transform -rotate-12">
                      <h3 className="font-display text-6xl tracking-tight">Juicy</h3>
                      <span className="block font-sans text-3xl font-light tracking-widest uppercase mt-2 border-t border-b border-white/50 py-2">fresh</span>
                  </div>

                  {/* Liquid Splash Bottom */}
                  <div className="absolute bottom-0 w-full h-1/3 bg-purple-400/30 blur-xl"></div>
               </div>
            </motion.div>

            {/* Floating Grapes */}
            {[1, 2, 3, 4].map((item, index) => (
                <motion.img 
                  key={index}
                  src={`https://picsum.photos/seed/grape${item}/150/150`}
                  className={`absolute w-24 h-24 rounded-full object-cover shadow-lg z-30`}
                  style={{
                    top: `${Math.random() * 80}%`,
                    left: `${index % 2 === 0 ? Math.random() * 30 : 70 + Math.random() * 20}%`
                  }}
                  animate={{ 
                      y: [0, -30, 0],
                      rotate: [0, 10, -10, 0]
                  }}
                  transition={{ 
                      duration: 4 + index, 
                      repeat: Infinity,
                      delay: index * 0.5 
                  }}
                  alt="grape"
                />
            ))}
            
            <div className="text-center mt-12 max-w-2xl">
                <p className="text-gray-600 text-lg font-medium">
                    Wholesome Refreshment That Goes Beyond Taste, Giving Your Body The Balance And Vitality It Needs To Thrive Every Day.
                </p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default GrapeSection;