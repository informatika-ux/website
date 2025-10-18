import React from 'react';
import { Receipt, AlertCircle } from 'lucide-react';

const Pricing = () => {
  const services = [
    { name: 'Szerviz/Szoftver szolgáltatás', price: '9.990,-Ft/óra' },
    { name: 'Vírusírtás/Adatmentés', price: '8.990,-Ft/óra' },
    { name: 'Rendszerszoftver installálás, beállítás', price: '14.990,-Ft' },
    { name: 'Helyben vásárolt alkatrész beépítése, installálása', price: '3.990,-Ft' },
    { name: 'Hibafeltárási/Bevizsgálási díj', price: '4.990,-Ft' },
    { name: 'Szakvélemény kiállítása', price: '6.990,-Ft' },
    { name: 'Nyomtatás (fekete-fehér A4)', price: '200,-Ft/oldal' },
    { name: 'Nyomtatás (színes csak szöveg A4)', price: '400,-Ft/oldal' },
    { name: 'Nyomtatás (színes kép)', price: '800,-Ft/oldal' },
    { name: 'Szkennelés, E-mailben küldés', price: '500,-Ft/oldal' },
    { name: 'Kiszállási költség, helyi(alap)', price: '3.000,-Ft' },
    { name: 'Kiszállási költség, helyközi(+alap)', price: '500,-Ft/km' }
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white" data-aos="fade-up">
            Szolgáltatások Árlista
          </h1>
          <p className="text-gray-400 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Tekintse meg aktuális árainkat
          </p>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/30 mb-8" data-aos="fade-up">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-4 px-6 text-white font-semibold">Szolgáltatás</th>
                  <th className="text-right py-4 px-6 text-white font-semibold">Ár</th>
                </tr>
              </thead>
              <tbody>
                {services.map((service, index) => (
                  <tr 
                    key={index} 
                    className="border-b border-gray-700/50 hover:bg-gray-700/30 transition-colors duration-200"
                  >
                    <td className="py-4 px-6 text-gray-300">{service.name}</td>
                    <td className="py-4 px-6 text-right text-blue-500 font-semibold">{service.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/30" data-aos="fade-up">
          <div className="flex items-start space-x-4">
            <AlertCircle className="text-blue-500 flex-shrink-0 mt-1" size={24} />
            <div>
              <p className="text-gray-300">
                Érvényes 2025. február 25-től! Az árak tartalmazzák a 27%-os ÁFA-t. 
                Óradíjas javításoknál a legkisebb egység 30 perc. Sürgősségi felár: A munkadíj 50%-a.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center" data-aos="fade-up">
          <h2 className="text-2xl font-bold mb-6 text-white">Kérjen Egyedi Árajánlatot!</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Nagyobb projektek vagy speciális igények esetén személyre szabott árajánlatot készítünk.
            Vegye fel velünk a kapcsolatot!
          </p>
          <a
            href="/contact"
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 inline-flex items-center"
          >
            <Receipt className="mr-2" size={20} />
            Árajánlat kérése
          </a>
        </div>
      </div>
    </div>
  );
};

export default Pricing;