import React from 'react';
import { Network, Wifi, Server, Shield } from 'lucide-react';

const Networking = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white" data-aos="fade-up">
            Hálózatépítési Szolgáltatások
          </h1>
          <p className="text-gray-400 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Professzionális hálózati megoldások vállalkozása számára
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="relative" data-aos="fade-right">
            <img
              src="/images/service-networking.jpg"
              alt="Hálózatépítés"
              className="rounded-lg shadow-xl w-full h-[400px] object-cover"
            />
          </div>
          <div className="flex flex-col justify-center" data-aos="fade-left">
            <h2 className="text-3xl font-bold mb-6 text-blue-500">Miért válasszon minket?</h2>
            <p className="text-gray-300 mb-6">
              Több mint 20 éves tapasztalattal rendelkezünk a hálózatépítés területén. Szakértő csapatunk a legmodernebb technológiákat és megoldásokat alkalmazza, hogy az Ön vállalkozása számára optimális hálózati infrastruktúrát alakítson ki.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-300">
                <Shield className="text-blue-500 mr-3" size={24} />
                Biztonságos és megbízható hálózati megoldások
              </li>
              <li className="flex items-center text-gray-300">
                <Server className="text-blue-500 mr-3" size={24} />
                Skálázható infrastruktúra
              </li>
              <li className="flex items-center text-gray-300">
                <Wifi className="text-blue-500 mr-3" size={24} />
                Vezeték nélküli hálózatok optimalizálása
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg" data-aos="fade-up">
            <Network className="text-blue-500 mb-4" size={40} />
            <h3 className="text-xl font-bold mb-4 text-white">Strukturált Kábelezés</h3>
            <p className="text-gray-300">
              Professzionális kábelezési megoldások, amelyek megfelelnek a legmagasabb ipari szabványoknak és az Ön egyedi igényeinek.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="100">
            <Wifi className="text-blue-500 mb-4" size={40} />
            <h3 className="text-xl font-bold mb-4 text-white">WiFi Hálózatok</h3>
            <p className="text-gray-300">
              Nagy teljesítményű vezeték nélküli hálózatok tervezése és telepítése, optimális lefedettséggel és sebességgel.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="200">
            <Shield className="text-blue-500 mb-4" size={40} />
            <h3 className="text-xl font-bold mb-4 text-white">Hálózati Biztonság</h3>
            <p className="text-gray-300">
              Komplex biztonsági megoldások a hálózat védelmére, beleértve a tűzfalakat és a behatolás-észlelő rendszereket.
            </p>
          </div>
        </div>

        <div className="text-center" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-6 text-white">Kezdjük el a közös munkát!</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Vegye fel velünk a kapcsolatot egy ingyenes konzultációért, ahol felmérjük az Ön egyedi igényeit és személyre szabott megoldást kínálunk.
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

export default Networking;