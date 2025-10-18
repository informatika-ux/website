import React from 'react';
import { Wrench, Cpu, HardDrive } from 'lucide-react';

const Repair = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white" data-aos="fade-up">
            Számítógép Szervizelés
          </h1>
          <p className="text-gray-400 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Professzionális számítógép és laptop javítási szolgáltatások
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="relative" data-aos="fade-right">
            <img
              src="/images/service-repair.jpg"
              alt="Számítógép szervizelés"
              className="rounded-lg shadow-xl w-full h-[400px] object-cover"
            />
          </div>
          <div className="flex flex-col justify-center" data-aos="fade-left">
            <h2 className="text-3xl font-bold mb-6 text-blue-500">Szakértő Szerviz Szolgáltatások</h2>
            <p className="text-gray-300 mb-6">
              Szakképzett technikusaink gyors és megbízható javítási szolgáltatást nyújtanak minden típusú számítógéphez és laptophoz. Garanciális és garancián túli javításokat egyaránt vállalunk.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-300">
                <Wrench className="text-blue-500 mr-3" size={24} />
                Hardver és szoftver problémák javítása
              </li>
              <li className="flex items-center text-gray-300">
                <Cpu className="text-blue-500 mr-3" size={24} />
                Alkatrész csere és bővítés
              </li>
              <li className="flex items-center text-gray-300">
                <HardDrive className="text-blue-500 mr-3" size={24} />
                Adatmentés és adathelyreállítás
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg" data-aos="fade-up">
            <Wrench className="text-blue-500 mb-4" size={40} />
            <h3 className="text-xl font-bold mb-4 text-white">Hardver Javítás</h3>
            <p className="text-gray-300">
              Alaplap javítás, processzor csere, memória bővítés és egyéb hardveres problémák megoldása.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="100">
            <Wrench className="text-blue-500 mb-4" size={40} />
            <h3 className="text-xl font-bold mb-4 text-white">Szoftver Problémák</h3>
            <p className="text-gray-300">
              Operációs rendszer telepítés, vírusirtás, szoftver frissítések és optimalizálás.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="200">
            <HardDrive className="text-blue-500 mb-4" size={40} />
            <h3 className="text-xl font-bold mb-4 text-white">Adatmentés</h3>
            <p className="text-gray-300">
              Professzionális adatmentés sérült merevlemezekről, SSD-kről és egyéb adathordozókról.
            </p>
          </div>
        </div>

        <div className="text-center" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-6 text-white">Bízza ránk számítógépe javítását!</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Vegye fel velünk a kapcsolatot, és mi gondoskodunk róla, hogy számítógépe újra tökéletesen működjön.
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

export default Repair;