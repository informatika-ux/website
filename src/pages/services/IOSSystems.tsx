import React from 'react';
import { Smartphone, ShoppingCart, Wrench, Shield } from 'lucide-react';

const IOSSystems = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white" data-aos="fade-up">
            iOS Rendszerek Beszerzése és Javítása
          </h1>
          <p className="text-gray-400 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Teljes körű Apple iOS eszköz szolgáltatások: iPhone, iPad, Mac beszerzés és szakszerű javítás
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="relative" data-aos="fade-right">
            <img
              src="/images/service-ios.jpg"
              alt="iOS eszközök"
              className="rounded-lg shadow-xl w-full h-[400px] object-cover"
            />
          </div>
          <div className="flex flex-col justify-center" data-aos="fade-left">
            <h2 className="text-3xl font-bold mb-6 text-blue-500">Apple Szakértő Szolgáltatások</h2>
            <p className="text-gray-300 mb-6">
              Hivatalos Apple partner szolgáltatóként teljes körű támogatást nyújtunk iOS eszközök területén. Új eszközök beszerzésétől a komplex javításokig minden Apple termékkel kapcsolatos igényt kielégítünk.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-300">
                <ShoppingCart className="text-blue-500 mr-3" size={24} />
                Új Apple eszközök beszerzése
              </li>
              <li className="flex items-center text-gray-300">
                <Wrench className="text-blue-500 mr-3" size={24} />
                Szakszerű javítás és karbantartás
              </li>
              <li className="flex items-center text-gray-300">
                <Shield className="text-blue-500 mr-3" size={24} />
                Adatvédelem és biztonsági megoldások
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg" data-aos="fade-up">
            <Smartphone className="text-blue-500 mb-4" size={40} />
            <h3 className="text-xl font-bold mb-4 text-white">iPhone és iPad Szerviz</h3>
            <p className="text-gray-300">
              Képernyő csere, akkumulátor javítás, szoftver problémák megoldása eredeti Apple alkatrészekkel.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="100">
            <ShoppingCart className="text-blue-500 mb-4" size={40} />
            <h3 className="text-xl font-bold mb-4 text-white">Eszköz Beszerzés</h3>
            <p className="text-gray-300">
              Legújabb iPhone, iPad, Mac és Apple Watch modellek beszerzése kedvező áron, garanciával.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="200">
            <Shield className="text-blue-500 mb-4" size={40} />
            <h3 className="text-xl font-bold mb-4 text-white">Adatvédelem</h3>
            <p className="text-gray-300">
              iCloud beállítás, adatmentés, adathelyreállítás és biztonsági tanácsadás iOS eszközökhöz.
            </p>
          </div>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/30 mb-16" data-aos="fade-up">
          <h2 className="text-2xl font-bold mb-6 text-white text-center">Támogatott Eszközök és Szolgáltatások</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-blue-500 mb-4">Javítási Szolgáltatások</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• iPhone képernyő és üveg csere</li>
                <li>• iPad digitizer és LCD javítás</li>
                <li>• MacBook billentyűzet és trackpad csere</li>
                <li>• Akkumulátor csere minden modellhez</li>
                <li>• Szoftver telepítés és helyreállítás</li>
                <li>• Vírusirtás és optimalizálás</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-blue-500 mb-4">Beszerzési Szolgáltatások</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• Legújabb iPhone modellek</li>
                <li>• iPad és iPad Pro eszközök</li>
                <li>• MacBook Air és MacBook Pro</li>
                <li>• iMac és Mac Studio</li>
                <li>• Apple Watch és AirPods</li>
                <li>• Eredeti Apple kiegészítők</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-6 text-white">Apple eszköz igényeivel forduljon hozzánk!</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Legyen szó új eszköz beszerzéséről vagy meglévő Apple termék javításáról, szakértő csapatunk készen áll a segítségnyújtásra.
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

export default IOSSystems;