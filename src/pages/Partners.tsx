import React from 'react';
import { ExternalLink, Award, Handshake, Star, CheckCircle, ArrowRight } from 'lucide-react';

const Partners = () => {
  const partners = [
    {
      name: 'Microsoft',
      description: 'Hivatalos Microsoft partner - Windows és Office megoldások',
      image: '/images/partner-microsoft.jpg',
      link: 'https://www.microsoft.com',
      category: 'Szoftver',
      specialties: ['Windows Server', 'Office 365', 'Azure Cloud'],
      partnership: 'Gold Partner'
    },
    {
      name: 'HP',
      description: 'HP nyomtatók és számítógépek hivatalos viszonteladója',
      image: '/images/partner-hp.jpg',
      link: 'https://www.hp.com',
      category: 'Hardver',
      specialties: ['Nyomtatók', 'Laptopok', 'Munkaállomások'],
      partnership: 'Authorized Reseller'
    },
    {
      name: 'Dell',
      description: 'Dell Enterprise megoldások és számítógépek',
      image: '/images/partner-dell.jpg',
      link: 'https://www.dell.com',
      category: 'Hardver',
      specialties: ['Szerverek', 'Tárolók', 'Hálózati eszközök'],
      partnership: 'Partner Direct'
    },
    {
      name: 'Lenovo',
      description: 'Lenovo laptopok és számítógépek hivatalos partnere',
      image: '/images/partner-lenovo.jpg',
      link: 'https://www.lenovo.com',
      category: 'Hardver',
      specialties: ['ThinkPad', 'ThinkCentre', 'Táblagépek'],
      partnership: 'Business Partner'
    },
    {
      name: 'ESET',
      description: 'ESET vírusvédelmi megoldások hivatalos forgalmazója',
      image: '/images/partner-eset.jpg',
      link: 'https://www.eset.com',
      category: 'Biztonság',
      specialties: ['Endpoint Security', 'Server Security', 'Mail Security'],
      partnership: 'Certified Partner'
    },
    {
      name: 'Canon',
      description: 'Canon nyomtatók és multifunkciós eszközök partnere',
      image: '/images/service-printer.jpg',
      link: 'https://www.canon.com',
      category: 'Irodatechnika',
      specialties: ['Multifunkciós nyomtatók', 'Nagyformátumú nyomtatók', 'Dokumentumkezelés'],
      partnership: 'Authorized Dealer'
    }
  ];

  const stats = [
    { number: '15+', label: 'Partneri Kapcsolat', icon: <Handshake className="w-8 h-8 text-blue-500" /> },
    { number: '98%', label: 'Partner Elégedettség', icon: <Star className="w-8 h-8 text-yellow-500" /> },
    { number: '50+', label: 'Közös Projekt', icon: <Award className="w-8 h-8 text-purple-500" /> },
    { number: '24/7', label: 'Partner Támogatás', icon: <CheckCircle className="w-8 h-8 text-green-500" /> }
  ];

  const benefits = [
    {
      icon: <Award className="w-12 h-12 text-blue-500" />,
      title: 'Minőségi Termékek',
      description: 'Csak a legmegbízhatóbb márkákkal dolgozunk együtt, garantálva a kiváló minőséget.'
    },
    {
      icon: <CheckCircle className="w-12 h-12 text-green-500" />,
      title: 'Hivatalos Garancia',
      description: 'Minden termékre teljes körű gyártói garanciát és támogatást biztosítunk.'
    },
    {
      icon: <Star className="w-12 h-12 text-yellow-500" />,
      title: 'Kedvezményes Árak',
      description: 'Partneri kapcsolataink révén versenyképes árakat kínálunk ügyfeleinknek.'
    }
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white" data-aos="fade-up">
            Megbízható <span className="text-blue-500">Partnereink</span>
          </h1>
          <p className="text-gray-400 max-w-4xl mx-auto text-lg leading-relaxed" data-aos="fade-up" data-aos-delay="100">
            Világszínvonalú technológiai vállalatokkal dolgozunk együtt, hogy ügyfeleinknek 
            mindig a legjobb és legmegbízhatóbb megoldásokat kínálhassuk.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20" data-aos="fade-up" data-aos-delay="200">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/30 hover:border-blue-500/50 transition-all duration-300">
              <div className="flex justify-center mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {partners.map((partner, index) => (
            <div
              key={partner.name}
              className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl border border-gray-700/30 hover:border-blue-500/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={partner.image}
                  alt={partner.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-500/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                    {partner.category}
                  </span>
                </div>
                
                {/* Partnership Badge */}
                <div className="absolute top-4 right-4">
                  <span className="bg-green-500/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium">
                    {partner.partnership}
                  </span>
                </div>
                
                {/* Partner Name Overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold text-white mb-1">{partner.name}</h3>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-300 mb-4 leading-relaxed">{partner.description}</p>
                
                {/* Specialties */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-blue-400 mb-2">Szakterületek:</h4>
                  <div className="flex flex-wrap gap-2">
                    {partner.specialties.map((specialty, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-700/50 text-gray-300 px-2 py-1 rounded-md text-xs border border-gray-600/50"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
                
                <a
                  href={partner.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300 font-medium group"
                >
                  Weboldal megtekintése
                  <ExternalLink size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="mb-20" data-aos="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-white">Miért Választják Partnereink?</h2>
            <p className="text-gray-400 max-w-3xl mx-auto text-lg">
              Partneri kapcsolataink révén egyedülálló előnyöket kínálunk ügyfeleinknek.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700/30 hover:border-blue-500/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex justify-center mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">{benefit.title}</h3>
                <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Partnership CTA */}
        <div className="text-center bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-12 border border-blue-500/20" data-aos="fade-up">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-white">Legyen Ön is Partnerünk!</h2>
            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              Csatlakozzon partneri hálózatunkhoz és építsünk együtt egy sikeres üzleti kapcsolatot. 
              Várjuk jelentkezését, hogy megbeszélhessük az együttműködés részleteit és a kölcsönös előnyöket.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center justify-center transform hover:scale-105"
              >
                <Handshake size={20} className="mr-2" />
                Partneri Kapcsolat
              </a>
              <a
                href="/about"
                className="bg-transparent border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-medium py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center justify-center"
              >
                Tudjon meg többet rólunk
                <ArrowRight size={16} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;