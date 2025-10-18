import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Istenes Bence',
    company: 'Műsorvezető',
    image: '/images/testimonial-bence.jpg',
    quote: 'Alexet csak ajánlani tudom! Kedves, segítőkész és profi! Keressétek bizalommal 🙏🙏🙏'
  },
  {
    id: 2,
    name: 'Gergesy Éva',
    company: 'Lélekcsokoládémühely',
    image: '/images/testimonial-eva.jpg',
    quote: 'Elmondhatatlanul hálás vagyok Alexnak! Azonnal jött! Gyorsan vág az agya, átlátja a problémát, mindenre tud megoldást márpedig a MacPro gépem ezer sebből vérzett. Megmentette az adatokat és az eltűnt fotokat. Mindenkinek ajánlom őt aki megbízható IT-st keres!'
  },
  {
    id: 3,
    name: 'Sikos Rita',
    company: 'Szociális és Egészségügyi Alapellátási Intézet',
    image: '/images/testimonial-rita.jpg',
    quote: 'Alex villámgyorsan megoldja az intézményünk informatikai problémáit, korrekt és udvarias.'
  },
  {
    id: 4,
    name: 'Töreky László',
    company: 'Tapolcai Média Kft.',
    image: '/images/media-logo.png',
    quote: 'Nagy bizalommal fordultunk a cég felé, és a várakozásainkat felülmúlva teljesítettek – köszönjük!'
  }
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  
  const nextTestimonial = () => {
    setCurrent(current === testimonials.length - 1 ? 0 : current + 1);
  };
  
  const prevTestimonial = () => {
    setCurrent(current === 0 ? testimonials.length - 1 : current - 1);
  };
  
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title centered" data-aos="fade-up">Vásárlói vélemények</h2>
          <p className="text-gray-400 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Nézd meg, mit mondanak ügyfeleink a szolgáltatásainkról.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Quote icon */}
            <div className="absolute -top-10 left-0 text-blue-500/20">
              <Quote size={80} />
            </div>
            
            {/* Testimonials slider */}
            <div className="relative overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${current * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                    <div className="bg-gray-800/50 rounded-2xl p-8 md:p-10 backdrop-blur-sm border border-gray-700/50">
                      <div className="flex flex-col md:flex-row md:items-center">
                        <div className="mb-6 md:mb-0 md:mr-8">
                          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-blue-500 mx-auto md:mx-0">
                            <img 
                              src={testimonial.image} 
                              alt={testimonial.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                        <div className="flex-1">
                          <p className="text-gray-300 text-lg mb-6 italic">
                            "{testimonial.quote}"
                          </p>
                          <div>
                            <h4 className="text-white font-bold text-xl">{testimonial.name}</h4>
                            <p className="text-blue-500">{testimonial.company}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === current ? 'bg-blue-500 w-8' : 'bg-gray-600'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            {/* Arrow buttons */}
            <button
              className="absolute top-1/2 -translate-y-1/2 left-0 md:-left-12 bg-gray-800 hover:bg-blue-500 text-white p-2 rounded-full transition-colors duration-300"
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              className="absolute top-1/2 -translate-y-1/2 right-0 md:-right-12 bg-gray-800 hover:bg-blue-500 text-white p-2 rounded-full transition-colors duration-300"
              onClick={nextTestimonial}
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;