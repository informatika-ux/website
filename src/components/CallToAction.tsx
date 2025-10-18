import React from 'react';
import { Link } from 'react-router-dom';
import { PhoneCall } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full -translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-1/3 translate-y-1/3"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0 md:mr-8 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Készen áll az együttműködésre?
            </h2>
            <p className="text-white/80 text-lg max-w-xl">
              Lépjen kapcsolatba velünk még ma, és fedezze fel, hogyan segíthetünk vállalkozása informatikai kihívásainak megoldásában!
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              to="/contact" 
              className="bg-white text-blue-700 hover:bg-gray-100 transition-colors duration-300 font-medium py-3 px-8 rounded-md flex items-center justify-center"
            >
              <PhoneCall size={20} className="mr-2" />
              Kapcsolatfelvétel
            </Link>
            <Link 
              to="/price-list" 
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 transition-all duration-300 font-medium py-3 px-8 rounded-md flex items-center justify-center"
            >
              Árajánlat kérése
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;