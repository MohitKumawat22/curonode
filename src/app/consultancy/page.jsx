import React from 'react';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
const SupportSection = () => {
  return (
    <div className="h-screen w-screen bg-pink-50 flex items-center justify-center p-6 overflow-hidden">
      
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-8 md:gap-12">
        

        <div className="w-full md:w-1/2 relative group">
          <div className="relative overflow-hidden rounded-[2rem] shadow-xl bg-pink-200 aspect-square md:aspect-auto md:h-[500px]">
    
             <Image 
              src="/doodo.png" 
              alt="Female Doctor Counselor" 
                       
                       height={200}
                       width={300}
              className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
 />
     
            <div className="absolute inset-0 bg-pink-500/10 mix-blend-overlay"></div>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <div className="bg-pink-100 p-8 md:p-12 rounded-[2rem] shadow-sm">
            <h2 className="text-3xl md:text-4xl font-bold text-pink-900 mb-4">
              Need to talk to someone?
            </h2>
            
            <p className="text-lg text-pink-700/80 mb-8 leading-relaxed">
              Our certified counselors are here to help you whenever 
              you need. Book a session or chat anonymously.
            </p>
            
            <button className="group bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 flex items-center gap-2 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
              Get Support
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SupportSection;