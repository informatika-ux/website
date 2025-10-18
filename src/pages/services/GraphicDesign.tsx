import React from 'react';
import { Palette, Image, Layout, Monitor } from 'lucide-react';

const GraphicDesign = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white" data-aos="fade-up">
            Grafikai Tervezés
          </h1>
          <p className="text-gray-400 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Kreatív grafikai megoldások az Ön vállalkozásának egyedi arculatához
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="relative" data-aos="fade-right">
            <img
              src="/images/service-graphic-design.jpg"
              alt="Grafikai tervezés"
              className="rounded-lg shadow-xl w-full h-[400px] object-cover"
            />
          </div>
          <div className="flex flex-col justify-center" data-aos="fade-left">
            <h2 className="text-3xl font-bold mb-6 text-blue-500">Professzionális Grafikai Megoldások</h2>
            <p className="text-gray-300 mb-6">
              Kreatív csapatunk egyedi és modern grafikai megoldásokat kínál, amelyek segítenek kiemelni vállalkozását a versenytársak közül. A legújabb trendeket és technológiákat alkalmazzuk a tökéletes végeredmény érdekében.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-300">
                <Palette className="text-blue-500 mr-3" size={24} />
                Egyedi arculattervezés
              </li>
              <li className="flex items-center text-gray-300">
                <Layout className="text-blue-500 mr-3" size={24} />
                Webdesign és UI/UX tervezés
              </li>
              <li className="flex items-center text-gray-300">
                <Image className="text-blue-500 mr-3" size={24} />
                Marketing anyagok készítése
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg" data-aos="fade-up">
            <Palette className="text-blue-500 mb-4" size={40} />
            <h3 className="text-xl font-bold mb-4 text-white">Arculattervezés</h3>
            <p className="text-gray-300">
              Logótervezés, színpaletta kialakítás, tipográfia és teljes vállalati arculat tervezése.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="100">
            <Monitor className="text-blue-500 mb-4" size={40} />
            <h3 className="text-xl font-bold mb-4 text-white">Digitális Design</h3>
            <p className="text-gray-300">
              Weboldalak, alkalmazások és digitális felületek tervezése modern megközelítéssel.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="200">
            <Layout className="text-blue-500 mb-4" size={40} />
            <h3 className="text-xl font-bold mb-4 text-white">Marketing Anyagok</h3>
            <p className="text-gray-300">
              Szórólapok, brosúrák, plakátok és social media tartalmak professzionális tervezése.
            </p>
          </div>
        </div>

        <div className="text-center" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-6 text-white">Valósítsuk meg együtt az elképzeléseit!</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Keressen minket egyedi grafikai igényeivel, és mi segítünk megvalósítani elképzeléseit a legmagasabb minőségben.
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

export default GraphicDesign;