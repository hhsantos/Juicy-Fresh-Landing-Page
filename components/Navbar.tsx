import React, { useState, useEffect } from 'react';
import { ShoppingCart, Menu, X, Globe } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Products', href: '#products' },
    { name: 'Shop', href: '#shop' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Blog', href: '#blog' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-green/90 backdrop-blur-md py-2 shadow-md' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between text-white">
        
        {/* Logo Area */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <span className="text-brand-green font-black text-xl">DF</span>
          </div>
          <div className="hidden md:flex items-center gap-1 text-xs font-semibold bg-white/10 px-3 py-1 rounded-full border border-white/20">
            <Globe size={12} />
            <span>ENG</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1 bg-white rounded-full px-2 py-1 shadow-lg">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="px-4 py-2 text-brand-green text-sm font-bold hover:bg-brand-green hover:text-white rounded-full transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a href="#contact" className="px-5 py-2 bg-brand-orange text-white text-sm font-bold rounded-full hover:bg-orange-600 transition-colors">
              Contact Us ↗
            </a>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <button className="hidden md:block text-sm font-bold hover:underline">Sign in ➝</button>
          <button className="flex items-center gap-2 bg-brand-yellowGreen text-brand-black px-4 py-2 rounded-full font-bold text-sm hover:bg-lime-300 transition-colors">
            Cart <ShoppingCart size={16} />
          </button>
          <button className="lg:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-brand-green p-6 shadow-xl flex flex-col gap-4 border-t border-white/10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-white font-bold text-lg py-2 border-b border-white/10"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;