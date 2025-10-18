import React from 'react';
import { Smartphone, Wrench, Clock, Shield } from 'lucide-react';

const PhoneRepair = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white" data-aos="fade-up">
            Telefon Javítási Szolgáltatások
          </h1>
          <p className="text-gray-400 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Professzionális mobiltelefon javítás minden márkához - gyorsan és megbízhatóan
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="relative" data-aos="fade-right">
            <img
              src="/images/service-phone-repair.jpg"
              alt="Telefon javítás"
              className="rounded-lg shadow-xl w-full h-[400px] object-cover"
            />
          </div>
          <div className="flex flex-col justify-center" data-aos="fade-left">
            <h2 className="text-3xl font-bold mb-6 text-blue-500">Szakértő Mobiltelefon Szerviz</h2>
            <p className="text-gray-300 mb-6">
              Tapasztalt technikusaink minden típusú mobiltelefon javítását vállaljuk. iPhone-tól Samsungig, Huawei-től Xiaomi-ig - minden márkával dolgozunk. Gyors, megbízható szolgáltatás eredeti vagy minőségi utángyártott alkatrészekkel.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-300">
                <Smartphone className="text-blue-500 mr-3" size={24} />
                Minden márka és modell támogatása
              </li>
              <li className="flex items-center text-gray-300">
                <Clock className="text-blue-500 mr-3" size={24} />
                Gyors javítás, akár 1 órán belül
              </li>
              <li className="flex items-center text-gray-300">
                <Shield className="text-blue-500 mr-3" size={24} />
                Garancia minden javításra
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg" data-aos="fade-up">
            <Smartphone className="text-blue-500 mb-4" size={40} />
            <h3 className="text-xl font-bold mb-4 text-white">Képernyő Javítás</h3>
            <p className="text-gray-300">
              Törött kijelző, érintőképernyő és LCD panel cseréje minden telefon típushoz eredeti minőségű alkatrészekkel.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="100">
            <Wrench className="text-blue-500 mb-4" size={40} />
            <h3 className="text-xl font-bold mb-4 text-white">Hardver Javítás</h3>
            <p className="text-gray-300">
              Akkumulátor csere, töltőcsatlakozó javítás, hangszóró és mikrofon problémák megoldása.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="200">
            <Shield className="text-blue-500 mb-4" size={40} />
            <h3 className="text-xl font-bold mb-4 text-white">Szoftver Szolgáltatások</h3>
            <p className="text-gray-300">
              Operációs rendszer telepítés, vírusirtás, adatmentés és telefonzár feloldás.
            </p>
          </div>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/30 mb-16" data-aos="fade-up">
          <h2 className="text-2xl font-bold mb-6 text-white text-center">Javítási Szolgáltatásaink</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-blue-500 mb-3">Képernyő Problémák</h4>
              <ul className="space-y-1 text-gray-300 text-sm">
                <li>• Törött kijelző csere</li>
                <li>• Érintőképernyő javítás</li>
                <li>• LCD panel csere</li>
                <li>• Digitizer javítás</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-blue-500 mb-3">Hardver Javítások</h4>
              <ul className="space-y-1 text-gray-300 text-sm">
                <li>• Akkumulátor csere</li>
                <li>• Töltőcsatlakozó javítás</li>
                <li>• Hangszóró/mikrofon csere</li>
                <li>• Kamera javítás</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-blue-500 mb-3">Szoftver Problémák</h4>
              <ul className="space-y-1 text-gray-300 text-sm">
                <li>• Rendszer telepítés</li>
                <li>• Vírusirtás</li>
                <li>• Adatmentés</li>
                <li>• Telefonzár feloldás</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16" data-aos="fade-up">
          <div className="bg-gray-800 p-4 rounded-lg text-center">
            <h4 className="text-blue-500 font-semibold mb-2">iPhone</h4>
            <p className="text-gray-400 text-sm">Minden modell</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg text-center">
            <h4 className="text-blue-500 font-semibold mb-2">Samsung</h4>
            <p className="text-gray-400 text-sm">Galaxy széria</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg text-center">
            <h4 className="text-blue-500 font-semibold mb-2">Huawei</h4>
            <p className="text-gray-400 text-sm">P és Mate széria</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg text-center">
            <h4 className="text-blue-500 font-semibold mb-2">Xiaomi</h4>
            <p className="text-gray-400 text-sm">Mi és Redmi</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg text-center">
            <h4 className="text-blue-500 font-semibold mb-2">OnePlus</h4>
            <p className="text-gray-400 text-sm">Minden modell</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg text-center">
            <h4 className="text-blue-500 font-semibold mb-2">Egyéb</h4>
            <p className="text-gray-400 text-sm">LG, Sony, stb.</p>
          </div>
        </div>

        <div className="text-center" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-6 text-white">Hozza be telefonját javításra!</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Ingyenes diagnosztika és árajánlat. Vegye fel velünk a kapcsolatot, és mi gondoskodunk róla, hogy telefonja újra tökéletesen működjön.
          </p>
          <a
            href="/contact"
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 inline-flex items-center"
          >
            Hibabejelentés
          </a>
        </div>
      </div>
    </div>
  );
};

export default PhoneRepair;