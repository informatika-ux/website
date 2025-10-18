import React from 'react';
import { Zap, Wrench, ShoppingCart, Battery } from 'lucide-react';

const EScooter = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white" data-aos="fade-up">
            E-roller Szerviz és Beszerzés
          </h1>
          <p className="text-gray-400 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Komplett e-roller szolgáltatások: javítás, karbantartás és új eszközök beszerzése
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="relative" data-aos="fade-right">
            <img
              src="/images/service-escooter.jpg"
              alt="E-roller szerviz"
              className="rounded-lg shadow-xl w-full h-[400px] object-cover"
            />
          </div>
          <div className="flex flex-col justify-center" data-aos="fade-left">
            <h2 className="text-3xl font-bold mb-6 text-blue-500">Szakértő E-roller Szolgáltatások</h2>
            <p className="text-gray-300 mb-6">
              Tapasztalt technikusaink teljes körű szolgáltatást nyújtanak elektromos rollerek területén. Javítástól a beszerzésig minden igényt kielégítünk, hogy Ön biztonságosan és megbízhatóan közlekedhessen.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-300">
                <Wrench className="text-blue-500 mr-3" size={24} />
                Professzionális javítás és karbantartás
              </li>
              <li className="flex items-center text-gray-300">
                <Battery className="text-blue-500 mr-3" size={24} />
                Akkumulátor csere és felújítás
              </li>
              <li className="flex items-center text-gray-300">
                <ShoppingCart className="text-blue-500 mr-3" size={24} />
                Új e-rollerek beszerzése és tanácsadás
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg" data-aos="fade-up">
            <Wrench className="text-blue-500 mb-4" size={40} />
            <h3 className="text-xl font-bold mb-4 text-white">Javítás és Szerviz</h3>
            <p className="text-gray-300">
              Motor, fék, kormány és elektronikai problémák gyors és megbízható javítása eredeti alkatrészekkel.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="100">
            <Battery className="text-blue-500 mb-4" size={40} />
            <h3 className="text-xl font-bold mb-4 text-white">Akkumulátor Szolgáltatások</h3>
            <p className="text-gray-300">
              Akkumulátor diagnosztika, csere, felújítás és teljesítmény optimalizálás minden típusú e-rollerhez.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="200">
            <ShoppingCart className="text-blue-500 mb-4" size={40} />
            <h3 className="text-xl font-bold mb-4 text-white">Beszerzés és Tanácsadás</h3>
            <p className="text-gray-300">
              Új e-rollerek beszerzése kedvező áron, személyre szabott tanácsadással az igényeinek megfelelően.
            </p>
          </div>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/30 mb-16" data-aos="fade-up">
          <h2 className="text-2xl font-bold mb-6 text-white text-center">Szolgáltatásaink</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-blue-500 mb-4">Javítási Szolgáltatások</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• Motor és hajtáslánc javítás</li>
                <li>• Fékrendszer karbantartás</li>
                <li>• Elektronikai hibák elhárítása</li>
                <li>• Gumiabroncs csere</li>
                <li>• Kormány és váz javítás</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-blue-500 mb-4">Beszerzési Szolgáltatások</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• Új e-rollerek széles választéka</li>
                <li>• Eredeti alkatrészek beszerzése</li>
                <li>• Kiegészítők és védőfelszerelések</li>
                <li>• Garancia és szerviz támogatás</li>
                <li>• Finanszírozási lehetőségek</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-6 text-white">Bízza ránk e-rollerét!</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Vegye fel velünk a kapcsolatot e-roller javítási igényével vagy új eszköz beszerzési szándékával. Szakértő csapatunk készen áll a segítségnyújtásra.
          </p>
          <a
            href="/contact"
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 inline-flex items-center"
          >
            Kapcsolatfelvétel
          </a>
        </div>
      </div>
    </div>
  );
};

export default EScooter;