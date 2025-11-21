import React from 'react';
import Button from './Button';
import { motion } from 'framer-motion';

const flavors = [
    {
        name: 'Fresh Mango Flavor',
        price: 87.99,
        color: 'bg-yellow-100',
        textColor: 'text-yellow-800',
        imageSeed: 'mango',
        accent: 'bg-yellow-500',
        rotation: '-rotate-3'
    },
    {
        name: 'Fresh Watermelon Taste',
        price: 77.99,
        color: 'bg-red-100',
        textColor: 'text-red-800',
        imageSeed: 'watermelon',
        accent: 'bg-red-500',
        rotation: 'rotate-3'
    },
    {
        name: 'Fresh Guava Flavor',
        price: 67.99,
        color: 'bg-green-100',
        textColor: 'text-green-800',
        imageSeed: 'guava',
        accent: 'bg-green-500',
        rotation: '-rotate-2'
    }
];

const FlavorSelector: React.FC = () => {
  return (
    <section className="py-24 bg-brand-white/50 relative" id="shop">
       <div className="container mx-auto px-4">
           <div className="text-center mb-16">
                <h2 className="font-display text-5xl md:text-7xl text-brand-green uppercase mb-4">
                    Choose Your Favorite <br/> Flavor Anytime
                </h2>
                <p className="text-gray-500 max-w-xl mx-auto">
                    Discover endless choices of fresh, tasty drinks crafted to keep you energized throughout the day.
                </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {flavors.map((flavor, index) => (
                   <motion.div 
                     key={index}
                     initial={{ opacity: 0, y: 50 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: index * 0.2 }}
                     whileHover={{ y: -10 }}
                     className={`${flavor.color} rounded-[40px] p-8 relative overflow-hidden group`}
                   >
                       {/* Price Badge */}
                       <div className="absolute top-6 left-6 bg-white px-4 py-2 rounded-full font-display text-2xl shadow-md z-20 text-brand-black">
                          ${flavor.price}
                       </div>

                       {/* Can Mockup Area */}
                       <div className={`w-full h-64 mt-8 mb-8 relative flex justify-center items-center`}>
                           {/* Background Splash */}
                           <div className={`absolute inset-0 ${flavor.accent} opacity-20 rounded-full blur-2xl transform scale-75 group-hover:scale-100 transition-transform duration-500`}></div>
                           
                           {/* Can Body */}
                           <div className={`w-32 h-56 ${flavor.accent} rounded-2xl shadow-2xl relative z-10 flex items-center justify-center text-white overflow-hidden ${flavor.rotation} group-hover:rotate-0 transition-all duration-500`}>
                               <img src={`https://picsum.photos/seed/${flavor.imageSeed}/300/500`} alt={flavor.name} className="w-full h-full object-cover opacity-80 mix-blend-overlay" />
                               <div className="absolute inset-0 flex flex-col items-center justify-center">
                                    <span className="font-display text-2xl drop-shadow-md">Juicy</span>
                                    <span className="text-sm uppercase tracking-widest">Fresh</span>
                               </div>
                           </div>
                           
                           {/* Floating Fruit pieces */}
                           <img src={`https://picsum.photos/seed/${flavor.imageSeed}slice/100/100`} className="absolute top-0 right-10 w-16 h-16 rounded-full border-2 border-white shadow-sm z-20 animate-pulse" alt="fruit slice" />
                       </div>

                       <div className="text-center relative z-20">
                           <h3 className={`font-display text-2xl md:text-3xl uppercase mb-6 ${flavor.textColor}`}>
                               {flavor.name}
                           </h3>
                           <Button variant="orange" fullWidth icon={true}>Shop Now</Button>
                       </div>
                   </motion.div>
               ))}
           </div>
       </div>
    </section>
  );
};

export default FlavorSelector;