import React from 'react';
import Button from './Button';

const LifestyleSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-7xl text-brand-black uppercase leading-tight">
            Always Refreshes Your <br/> <span className="text-brand-green">Thirst Instantly</span>
          </h2>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
             Experience ultimate refreshment with every sip — a drink that not only quenches but instantly revitalizes your body, keeping you energized, hydrated, and satisfied whenever thirst strikes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           
           {/* Card 1 */}
           <div className="relative h-[500px] rounded-[40px] overflow-hidden group">
              <img 
                src="https://picsum.photos/seed/drink_man/800/1000" 
                alt="Man Drinking" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur rounded-3xl p-6 flex items-center justify-between">
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-brand-green rounded-full flex items-center justify-center text-white font-bold text-xs overflow-hidden">
                        <img src="https://picsum.photos/seed/watermelon/100/100" className="w-full h-full object-cover" alt="prod" />
                    </div>
                    <div>
                        <p className="text-xs text-gray-500 uppercase font-bold">Summer Hit</p>
                        <h4 className="font-display text-xl text-brand-black">Watermelon Burst</h4>
                    </div>
                 </div>
                 <Button variant="orange" className="!py-2 !px-4 text-xs">Shop Now</Button>
              </div>
           </div>

           {/* Card 2 */}
           <div className="relative h-[500px] rounded-[40px] overflow-hidden group">
              <img 
                src="https://picsum.photos/seed/drink_woman/800/1000" 
                alt="Woman Drinking" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur rounded-3xl p-6 flex items-center justify-between">
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-brand-purple rounded-full flex items-center justify-center text-white font-bold text-xs overflow-hidden">
                        <img src="https://picsum.photos/seed/grape/100/100" className="w-full h-full object-cover" alt="prod" />
                    </div>
                    <div>
                        <p className="text-xs text-gray-500 uppercase font-bold">Beat the heat</p>
                        <h4 className="font-display text-xl text-brand-black">Grape Energy</h4>
                    </div>
                 </div>
                 <Button variant="orange" className="!py-2 !px-4 text-xs">Shop Now</Button>
              </div>
           </div>

        </div>
      </div>
    </section>
  );
};

export default LifestyleSection;