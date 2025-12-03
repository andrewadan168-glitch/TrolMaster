import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { Product } from '../types';

interface ProductSectionProps {
  product: Product;
  isReversed?: boolean;
}

export const ProductSection: React.FC<ProductSectionProps> = ({ product, isReversed = false }) => {
  return (
    <section 
      id={product.id} 
      className={`py-20 md:py-32 overflow-hidden ${
        product.theme === 'dark' ? 'bg-tm-dark text-white' : 'bg-white text-tm-dark'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className={`flex flex-col md:flex-row items-center gap-12 md:gap-24 ${isReversed ? 'md:flex-row-reverse' : ''}`}>
          
          {/* Text Content */}
          <div className="flex-1 space-y-6">
            <div className={`w-12 h-1 mb-6 ${product.theme === 'dark' ? 'bg-tm-green' : 'bg-tm-dark'}`}></div>
            <h3 className={`text-sm font-bold uppercase tracking-widest ${
                product.theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
            }`}>
              {product.name} Series
            </h3>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              {product.tagline}
            </h2>
            <p className={`text-lg leading-relaxed ${
                product.theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              {product.description}
            </p>
            
            <ul className="space-y-3 pt-4">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className={`mt-1 p-0.5 rounded-full ${
                      product.theme === 'dark' ? 'bg-white/10 text-tm-green' : 'bg-gray-100 text-tm-dark'
                  }`}>
                    <Check size={14} strokeWidth={3} />
                  </span>
                  <span className={product.theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <div className="pt-8">
              <a 
                href={product.link}
                className={`inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest border-b-2 pb-1 transition-all ${
                  product.theme === 'dark' 
                    ? 'border-white text-white hover:border-tm-green hover:text-tm-green' 
                    : 'border-tm-dark text-tm-dark hover:border-tm-green hover:text-tm-green'
                }`}
              >
                Discover {product.name}
                <ArrowRight size={16} />
              </a>
            </div>
          </div>

          {/* Image Content */}
          <div className="flex-1 w-full relative group">
            <div className={`absolute inset-0 transform translate-x-4 translate-y-4 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2 ${
                product.theme === 'dark' ? 'bg-white/5' : 'bg-gray-100'
            }`}></div>
            <img 
              src={product.imageUrl} 
              alt={product.name} 
              className="relative w-full h-[400px] md:h-[600px] object-cover shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
