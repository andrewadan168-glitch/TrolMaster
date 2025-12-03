import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, ArrowRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#111] text-white pt-20 pb-10 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-tm-green rounded-full"></div>
                <span className="text-xl font-bold tracking-tighter">TrolMaster</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Leading the industry in agricultural technology with smart, adaptable, and reliable control systems.
            </p>
          </div>

          {/* Products Column */}
          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-gray-500">Products</h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li><a href="#hydro-x" className="hover:text-white transition-colors">Hydro-X System</a></li>
              <li><a href="#aqua-x" className="hover:text-white transition-colors">Aqua-X System</a></li>
              <li><a href="#thinkgrow" className="hover:text-white transition-colors">ThinkGrow LEDs</a></li>
              <li><a href="#aero-fan" className="hover:text-white transition-colors">Aero-Fan Series</a></li>
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-gray-500">Support</h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Product Manuals</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Warranty Info</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Distributors</a></li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-gray-500">Stay Updated</h4>
            <p className="text-gray-400 text-xs mb-4">Subscribe for the latest product news and updates.</p>
            <div className="flex border-b border-gray-700 pb-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-transparent border-none outline-none text-white w-full placeholder-gray-500 text-sm"
              />
              <button className="text-gray-400 hover:text-white">
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">© {new Date().getFullYear()} TrolMaster Agro Instruments Co., Ltd. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook size={18} /></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={18} /></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram size={18} /></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Youtube size={18} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};
