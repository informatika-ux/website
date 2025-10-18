import React from 'react';
import { Shield, Server, Printer, Monitor, Network, Code, Wrench, Cpu } from 'lucide-react';

const PriceList = () => {
  const services = [
    {
      icon: <Server className="w-8 h-8 text-blue-500" />,
      title: 'Rendszerüzemeltetés',
      items: [
        { name: 'Helyszíni kiszállás (Tapolca)', price: '3.000 Ft' },
        { name: 'Rendszerfelügyelet (havi)', price: '25.000 Ft-tól' },
        { name: 'Távoli támogatás (óra)', price: '8.000 Ft' }
      ]
    },
    {
      icon: <Monitor className="w-8 h-8 text-blue-500" />,
      title: 'Számítógép Szerviz',
      items: [
        { name: 'Vírusirtás', price: '8.000 Ft-tól' },
        { name: 'Szoftver telepítés', price: '5.000 Ft-tól' },
        { name: 'Adatmentés', price: '10.000 Ft-tól' }
      ]
    },
    {
      icon: <Network className="w-8 h-8 text-blue-500" />,
      title: 'Hálózati Szolgáltatások',
      items: [
        { name: 'Hálózat kiépítés', price: 'Egyedi ár' },
        { name: 'WiFi optimalizálás', price: '15.000 Ft-tól' },
        { name: 'Biztonsági audit', price: '30.000 Ft-tól' }
      ]
    },
    {
      icon: <Printer className="w-8 h-8 text-blue-500" />,
      title: 'Nyomtató Szerviz',
      items: [
        { name: 'Karbantartás', price: '6.000 Ft-tól' },
        { name: 'Javítás', price: '8.000 Ft-tól' },
        { name: 'Toner csere', price: '3.000 Ft' }
      ]
    },
    {
      icon: <Cpu className="w-8 h-8 text-blue-500" />,
      title: 'Számítógép Építés',
      items: [
        { name: 'Alap konfiguráció', price: '180.000 Ft-tól' },
        { name: 'Gamer konfiguráció', price: '350.000 Ft-tól' },
        { name: 'Összeszerelési díj', price: '15.000 Ft' }
      ]
    },
    {
      icon: <Code className="w-8 h-8 text-blue-500" />,
      title: 'Konzultáció',
      items: [
        { name: 'IT tanácsadás (óra)', price: '12.000 Ft' },
        { name: 'Projektterv készítés', price: 'Egyedi ár' },
        { name: 'Biztonsági audit', price: 'Egyedi ár' }
      ]
    }
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        <div className="text-center mb-16" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Árlista</h1>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Tekintse meg szolgáltatásaink és termékeink árlistáját
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/30 hover:border-blue-500/50 transition-all duration-300 transform hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex items-center mb-6">
                {service.icon}
                <h3 className="text-xl font-bold text-white ml-3">{service.title}</h3>
              </div>
              
              <div className="space-y-4">
                {service.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="flex justify-between items-center py-2 border-b border-gray-700/30 last:border-0"
                  >
                    <span className="text-gray-300">{item.name}</span>
                    <span className="text-blue-500 font-semibold">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/30" data-aos="fade-up">
          <div className="flex items-center justify-center mb-6">
            <Shield className="w-12 h-12 text-blue-500 mr-4" />
            <div className="text-center">
              <h2 className="text-2xl font-bold text-white mb-2">Minőségi Garancia</h2>
              <p className="text-gray-400">
                Minden szolgáltatásunkra és termékünkre garanciát vállalunk
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-gray-400 mb-8">
              Az árak tájékoztató jellegűek és nem tartalmazzák az ÁFA-t. 
              A pontos árakért és egyedi ajánlatokért keressen minket bizalommal!
            </p>
            <a 
              href="/contact" 
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 inline-flex items-center group"
            >
              <Wrench className="w-5 h-5 mr-2 transform group-hover:rotate-45 transition-transform duration-300" />
              Kérjen egyedi árajánlatot
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceList;