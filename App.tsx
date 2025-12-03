import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductSection } from './components/ProductSection';
import { Footer } from './components/Footer';
import { PRODUCTS } from './constants';

const App: React.FC = () => {
  return (
    <div className="font-sans text-gray-900 bg-white selection:bg-tm-green selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Intro Divider */}
        <div className="py-20 bg-white text-center px-6 border-b border-gray-100">
          <p className="max-w-4xl mx-auto text-xl md:text-2xl text-gray-500 font-light leading-relaxed">
            "Our professional, customizable modular control systems simplify every challenge, built to <span className="text-tm-dark font-medium">scale effortlessly</span> from specialized zones to massive commercial operations."
          </p>
        </div>

        {/* Product Sections */}
        {PRODUCTS.map((product, index) => (
          <ProductSection 
            key={product.id} 
            product={product} 
            isReversed={index % 2 !== 0} 
          />
        ))}

        {/* Brand Promise / Highlights */}
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4">Grow Smarter. Gain Back Your Time.</h2>
                    <div className="w-16 h-1 bg-tm-green mx-auto"></div>
                    <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
                        We are committed to delivering product innovations that help you make your operation more efficient.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { title: 'Experience Automation', desc: 'Experience automation that puts you in control, transforming complex tasks into seamless efficiency.', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
                        { title: 'Data-Driven Decisions', desc: 'Stop compromising your plants. Utilize real-time data to make informed decisions for optimal crop health.', icon: 'M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z' },
                        { title: 'Future-Proof Scaling', desc: 'From specialized zones to commercial operations, our modular systems scale with your ambition.', icon: 'M3 3v18h18M18 9l-5 5-4-4-3 3' }
                    ].map((item, i) => (
                        <div key={i} className="bg-white p-10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center group rounded-sm border border-transparent hover:border-gray-100">
                            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 text-tm-dark group-hover:bg-tm-green group-hover:text-white transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d={item.icon} />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-tm-dark">{item.title}</h3>
                            <p className="text-gray-500 leading-relaxed text-sm">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;