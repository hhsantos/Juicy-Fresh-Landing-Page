import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-brand-white overflow-hidden pt-20 pb-10 border-t border-gray-200">
      
      {/* Giant Background Text */}
      <div className="absolute bottom-0 left-0 w-full h-full flex items-end justify-center pointer-events-none opacity-10">
         <h1 className="font-display text-[25vw] leading-none text-brand-purple">DRINK IN</h1>
      </div>

      <div className="container mx-auto px-4 relative z-10">
         <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
            <div>
                <h4 className="font-bold text-brand-black mb-6">Company</h4>
                <ul className="space-y-3 text-sm text-gray-600 font-medium">
                    <li><a href="#" className="hover:text-brand-green">Careers</a></li>
                    <li><a href="#" className="hover:text-brand-green">About Us</a></li>
                    <li><a href="#" className="hover:text-brand-green">Partnerships</a></li>
                </ul>
            </div>
            <div>
                <h4 className="font-bold text-brand-black mb-6">Services</h4>
                <ul className="space-y-3 text-sm text-gray-600 font-medium">
                    <li><a href="#" className="hover:text-brand-green">Portraits</a></li>
                    <li><a href="#" className="hover:text-brand-green">Events</a></li>
                    <li><a href="#" className="hover:text-brand-green">Products</a></li>
                </ul>
            </div>
            <div>
                <h4 className="font-bold text-brand-black mb-6">Resources</h4>
                <ul className="space-y-3 text-sm text-gray-600 font-medium">
                    <li><a href="#" className="hover:text-brand-green">Blog</a></li>
                    <li><a href="#" className="hover:text-brand-green">Tips & Guides</a></li>
                    <li><a href="#" className="hover:text-brand-green">Client Gallery</a></li>
                </ul>
            </div>
            <div>
                <h4 className="font-bold text-brand-black mb-6">Legal</h4>
                <ul className="space-y-3 text-sm text-gray-600 font-medium">
                    <li><a href="#" className="hover:text-brand-green">Terms of Service</a></li>
                    <li><a href="#" className="hover:text-brand-green">Privacy</a></li>
                    <li><a href="#" className="hover:text-brand-green">Copyright</a></li>
                </ul>
            </div>
         </div>

         <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200/50">
             <div className="bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100 mb-4 md:mb-0">
                 <span className="text-xs font-bold text-gray-500">1234 Elm Street, Apt 56B, London, SW1A 1AA, United Kingdom.</span>
             </div>

             <div className="flex items-center gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-brand-green hover:text-white transition-colors">
                    <Facebook size={16} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-brand-green hover:text-white transition-colors">
                    <Twitter size={16} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-brand-green hover:text-white transition-colors">
                    <Instagram size={16} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-brand-green hover:text-white transition-colors">
                    <Linkedin size={16} />
                </a>
             </div>
         </div>
      </div>
    </footer>
  );
};

export default Footer;