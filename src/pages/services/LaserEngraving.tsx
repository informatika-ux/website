import React from 'react';
import { Zap, Award, Clock, Palette } from 'lucide-react';

const LaserEngraving = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white" data-aos="fade-up">
            Lézer Gravírozás Fémre
          </h1>
          <p className="text-gray-400 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Precíz és tartós lézer gravírozási szolgáltatások fém felületekre
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="relative" data-aos="fade-right">
            <img
              src="/images/service-laser-engraving.jpg"
              alt="Lézer gravírozás"
              className="rounded-lg shadow-xl w-full h-[400px] object-cover"
            />
          </div>
          <div className="flex flex-col justify-center" data-aos="fade-left">
            <h2 className="text-3xl font-bold mb-6 text-blue-500">Professzionális Lézer Gravírozás</h2>
            <p className="text-gray-300 mb-6">
              Modern lézer technológiával precíz gravírozást végzünk különböző fém felületeken. Szolgáltatásunk ideális személyre szabott ajándékok, céges emblémák, sorozatszámok és egyedi minták készítéséhez.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-300">
                <Zap className="text-blue-500 mr-3" size={24} />
                Nagy pontosságú lézer technológia
              </li>
              <li className="flex items-center text-gray-300">
                <Award className="text-blue-500 mr-3" size={24} />
                Tartós és kopásálló gravírozás
              </li>
              <li className="flex items-center text-gray-300">
                <Palette className="text-blue-500 mr-3" size={24} />
                Egyedi tervezés és kivitelezés
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg" data-aos="fade-up">
            <Zap className="text-blue-500 mb-4" size={40} />
            <h3 className="text-xl font-bold mb-4 text-white">Precíz Technológia</h3>
            <p className="text-gray-300">
              Legmodernebb lézer berendezéseinkkel mikron pontosságú gravírozást végzünk különböző fémeken.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="100">
            <Award className="text-blue-500 mb-4" size={40} />
            <h3 className="text-xl font-bold mb-4 text-white">Minőségi Kivitelezés</h3>
            <p className="text-gray-300">
              Acél, alumínium, réz és egyéb fémek gravírozása tartós és esztétikus eredménnyel.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="200">
            <Clock className="text-blue-500 mb-4" size={40} />
            <h3 className="text-xl font-bold mb-4 text-white">Gyors Kiszolgálás</h3>
            <p className="text-gray-300">
              Rugalmas határidők és gyors átfutási idő még összetett projektek esetén is.
            </p>
          </div>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/30 mb-16" data-aos="fade-up">
          <h2 className="text-2xl font-bold mb-6 text-white text-center">Alkalmazási Területek</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <h4 className="text-lg font-semibold text-blue-500 mb-2">Személyes Tárgyak</h4>
              <p className="text-gray-300 text-sm">Ékszerek, órák, kulcstartók gravírozása</p>
            </div>
            <div className="text-center">
              <h4 className="text-lg font-semibold text-blue-500 mb-2">Céges Termékek</h4>
              <p className="text-gray-300 text-sm">Logók, cégnév, kapcsolati adatok</p>
            </div>
            <div className="text-center">
              <h4 className="text-lg font-semibold text-blue-500 mb-2">Ipari Jelölés</h4>
              <p className="text-gray-300 text-sm">Sorozatszámok, QR kódok, adattáblák</p>
            </div>
            <div className="text-center">
              <h4 className="text-lg font-semibold text-blue-500 mb-2">Ajándéktárgyak</h4>
              <p className="text-gray-300 text-sm">Emléklapok, díjak, személyre szabott ajándékok</p>
            </div>
          </div>
        </div>

        <div className="text-center" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-6 text-white">Kérjen árajánlatot gravírozási igényére!</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Küldje el elképzelését, és mi készítünk személyre szabott árajánlatot lézer gravírozási szolgáltatásunkra.
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

export default LaserEngraving;