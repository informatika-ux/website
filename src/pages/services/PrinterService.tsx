import React from 'react';
import { Printer, Wrench, ShoppingCart, Settings } from 'lucide-react';

const PrinterService = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white" data-aos="fade-up">
            Nyomtató Szerviz és Beszerzés
          </h1>
          <p className="text-gray-400 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Teljes körű nyomtató szolgáltatások: javítás, karbantartás, kellékek és új eszközök beszerzése
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="relative" data-aos="fade-right">
            <img
              src="/images/service-printer.jpg"
              alt="Nyomtató szerviz"
              className="rounded-lg shadow-xl w-full h-[400px] object-cover"
            />
          </div>
          <div className="flex flex-col justify-center" data-aos="fade-left">
            <h2 className="text-3xl font-bold mb-6 text-blue-500">Professzionális Nyomtató Szolgáltatások</h2>
            <p className="text-gray-300 mb-6">
              Több mint 20 éves tapasztalattal rendelkezünk nyomtatók javítása és karbantartása területén. Minden típusú nyomtatóval dolgozunk - tintasugarastól lézeresig, irodai multifunkciós eszközöktől nagy teljesítményű ipari nyomtatókig.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-300">
                <Wrench className="text-blue-500 mr-3" size={24} />
                Szakszerű javítás és karbantartás
              </li>
              <li className="flex items-center text-gray-300">
                <ShoppingCart className="text-blue-500 mr-3" size={24} />
                Eredeti kellékek és új eszközök
              </li>
              <li className="flex items-center text-gray-300">
                <Settings className="text-blue-500 mr-3" size={24} />
                Telepítés és beállítás
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg" data-aos="fade-up">
            <Printer className="text-blue-500 mb-4" size={40} />
            <h3 className="text-xl font-bold mb-4 text-white">Nyomtató Javítás</h3>
            <p className="text-gray-300">
              Tintasugaras, lézer és multifunkciós nyomtatók javítása. Papírelakadás, nyomtatási hibák és mechanikai problémák megoldása.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="100">
            <ShoppingCart className="text-blue-500 mb-4" size={40} />
            <h3 className="text-xl font-bold mb-4 text-white">Kellékek és Eszközök</h3>
            <p className="text-gray-300">
              Eredeti és kompatibilis tintapatronok, tonerek, papírok és új nyomtatók beszerzése kedvező áron.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="200">
            <Settings className="text-blue-500 mb-4" size={40} />
            <h3 className="text-xl font-bold mb-4 text-white">Telepítés és Beállítás</h3>
            <p className="text-gray-300">
              Új nyomtatók telepítése, hálózati beállítás, driver telepítés és optimalizálás minden operációs rendszeren.
            </p>
          </div>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/30 mb-16" data-aos="fade-up">
          <h2 className="text-2xl font-bold mb-6 text-white text-center">Támogatott Márkák és Szolgáltatások</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-blue-500 mb-4">Javítási Szolgáltatások</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• Papírelakadás elhárítása</li>
                <li>• Nyomtatófej tisztítás és csere</li>
                <li>• Toner és patron problémák</li>
                <li>• Mechanikai hibák javítása</li>
                <li>• Szoftver és driver problémák</li>
                <li>• Hálózati kapcsolat beállítása</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-blue-500 mb-4">Támogatott Márkák</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• HP (LaserJet, DeskJet, OfficeJet)</li>
                <li>• Canon (PIXMA, imageCLASS)</li>
                <li>• Epson (EcoTank, WorkForce)</li>
                <li>• Brother (DCP, MFC sorozat)</li>
                <li>• Samsung és Xerox</li>
                <li>• Egyéb márkák</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16" data-aos="fade-up">
          <div className="bg-gray-800 p-6 rounded-lg text-center">
            <h4 className="text-blue-500 font-semibold mb-2">Tintasugaras</h4>
            <p className="text-gray-400 text-sm">Otthoni és irodai használatra</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg text-center">
            <h4 className="text-blue-500 font-semibold mb-2">Lézer</h4>
            <p className="text-gray-400 text-sm">Nagy volumenű nyomtatáshoz</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg text-center">
            <h4 className="text-blue-500 font-semibold mb-2">Multifunkciós</h4>
            <p className="text-gray-400 text-sm">Nyomtatás, másolás, szkennelés</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg text-center">
            <h4 className="text-blue-500 font-semibold mb-2">Ipari</h4>
            <p className="text-gray-400 text-sm">Nagy teljesítményű eszközök</p>
          </div>
        </div>

        <div className="text-center" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-6 text-white">Nyomtató problémája van?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Vegye fel velünk a kapcsolatot nyomtató javítási igényével vagy új eszköz beszerzési szándékával. Ingyenes diagnosztika és árajánlat!
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

export default PrinterService;