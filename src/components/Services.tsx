import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Server, 
  Network, 
  Code, 
  Wrench, 
  Printer, 
  Monitor, 
  Shield, 
  Cpu
} from 'lucide-react';

const serviceItems = [
  {
    id: 1,
    icon: <Server className="w-12 h-12 text-blue-500" />,
    title: 'Rendszerüzemeltetés',
    description: 'Komplex karbantartási szolgáltatások, hogy rendszereid zökkenőmentesen és hatékonyan működjenek.',
    link: '/services/system-admin'
  },
  {
    id: 2,
    icon: <Network className="w-12 h-12 text-blue-500" />,
    title: 'Hálózatépítés',
    description: 'Robusztus hálózati megoldások, hogy rendszereid mindig csatlakozva legyenek.',
    link: '/services/networking'
  },
  {
    id: 3,
    icon: <Code className="w-12 h-12 text-blue-500" />,
    title: 'Konzultációs Szolgáltatások',
    description: 'Segítünk megtalálni az Informatikai megoldásokat, amelyekkel egyszerűbbé és hatékonyabbá teheted a munkádat.',
    link: '/contact'
  },
  {
    id: 4,
    icon: <Wrench className="w-12 h-12 text-blue-500" />,
    title: 'Szervíz Szolgáltatás',
    description: 'Bármilyen technikai problémával szembesülsz, számíthatsz ránk. Mi mindig készen állunk a segítségnyújtásra.',
    link: '/services/repair'
  },
  {
    id: 5,
    icon: <Printer className="w-12 h-12 text-blue-500" />,
    title: 'Nyomtatókellékek és Szerviz',
    description: 'Professzionális megoldások nyomtatóid karbantartására és kellékeinek biztosítására.',
    link: '/services/printer-service'
  },
  {
    id: 6,
    icon: <Monitor className="w-12 h-12 text-blue-500" />,
    title: 'Számítógép Építés és Szervizelés',
    description: 'Testreszabott számítógépek építése és megbízható szervizelés a zavartalan működésért.',
    link: '/services/repair'
  },
  {
    id: 7,
    icon: <Shield className="w-12 h-12 text-blue-500" />,
    title: 'Vírusirtás és Adatmentés',
    description: 'Hatékony víruseltávolítás és biztonságos adatmentés, hogy fontos fájljaid mindig biztonságban legyenek.',
    link: '/services/repair'
  },
  {
    id: 8,
    icon: <Cpu className="w-12 h-12 text-blue-500" />,
    title: 'Alkatrészek és Szoftverek Árusítása',
    description: 'Minőségi számítógép-alkatrészek és megbízható szoftverek széles választéka az igényeidhez igazítva.',
    link: '/services/pricing'
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title centered" data-aos="fade-up">Szolgáltatásaink</h2>
          <p className="text-gray-400 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Teljes körű informatikai megoldásokat kínálunk, amelyek segítenek vállalkozása hatékonyabb működtetésében.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceItems.map((service, index) => (
            <Link
              key={service.id}
              to={service.link}
              className="card group hover:bg-blue-500/10 hover:border-blue-500/50 border border-gray-800 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl cursor-pointer" 
              data-aos="fade-up"
              data-aos-delay={100 + (index * 50)}
            >
              <div className="flex flex-col items-center text-center h-full">
                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 flex-grow">
                  {service.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;