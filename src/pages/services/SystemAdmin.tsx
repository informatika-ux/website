import React from 'react';
import { Server, Shield, Settings, Clock } from 'lucide-react';

const SystemAdmin = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white" data-aos="fade-up">
            Rendszergazdai Szolgáltatások
          </h1>
          <p className="text-gray-400 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Professzionális rendszerfelügyelet és karbantartás az Ön vállalkozása számára
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="relative" data-aos="fade-right">
            <img
              src="/images/service-system-admin.jpg"
              alt="Rendszergazdai szolgáltatások"
              className="rounded-lg shadow-xl w-full h-[400px] object-cover"
            />
          </div>
          <div className="flex flex-col justify-center" data-aos="fade-left">
            <h2 className="text-3xl font-bold mb-6 text-blue-500">Miért fontos a rendszergazdai szolgáltatás?</h2>
            <p className="text-gray-300 mb-6">
              A megfelelő rendszergazdai felügyelet biztosítja vállalkozása informatikai rendszereinek folyamatos és biztonságos működését. Szakértő csapatunk 24/7 rendelkezésre áll, hogy megelőzze és elhárítsa a problémákat.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-300">
                <Clock className="text-blue-500 mr-3" size={24} />
                24/7 rendszerfelügyelet és támogatás
              </li>
              <li className="flex items-center text-gray-300">
                <Shield className="text-blue-500 mr-3" size={24} />
                Proaktív biztonsági menedzsment
              </li>
              <li className="flex items-center text-gray-300">
                <Settings className="text-blue-500 mr-3" size={24} />
                Rendszeres karbantartás és optimalizálás
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg" data-aos="fade-up">
            <Server className="text-blue-500 mb-4" size={40} />
            <h3 className="text-xl font-bold mb-4 text-white">Szerverüzemeltetés</h3>
            <p className="text-gray-300">
              Teljes körű szerverüzemeltetés, beleértve a karbantartást, frissítéseket és monitorozást.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="100">
            <Shield className="text-blue-500 mb-4" size={40} />
            <h3 className="text-xl font-bold mb-4 text-white">Biztonsági Felügyelet</h3>
            <p className="text-gray-300">
              Vírusvédelem, tűzfalak konfigurálása és rendszeres biztonsági auditok végrehajtása.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="200">
            <Settings className="text-blue-500 mb-4" size={40} />
            <h3 className="text-xl font-bold mb-4 text-white">Rendszeroptimalizálás</h3>
            <p className="text-gray-300">
              Teljesítmény optimalizálás és rendszeres karbantartás a maximális hatékonyság érdekében.
            </p>
          </div>
        </div>

        <div className="text-center" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-6 text-white">Bízza ránk rendszerei felügyeletét!</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Kérjen személyre szabott ajánlatot rendszergazdai szolgáltatásainkról, és mi gondoskodunk informatikai rendszerei biztonságos működéséről.
          </p>
          <a
            href="/contact"
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 inline-flex items-center"
          >
            Ajánlatkérés
          </a>
        </div>
      </div>
    </div>
  );
};

export default SystemAdmin;