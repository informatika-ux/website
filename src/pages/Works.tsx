import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, ArrowRight, Calendar, Users, Award, CheckCircle } from 'lucide-react';

const Works = () => {
  const works = [
    {
      id: 1,
      title: 'Vállalati Hálózat Kiépítése',
      client: 'PHP Architect Kft.',
      category: 'Hálózatépítés',
      duration: '1 hónap',
      teamSize: '2 fő',
      description: 'Teljes körű irodai hálózat tervezése és kivitelezése három munkaállomással, minimalizált kábelezéssel és home office támogatással. A rendszer iOS és Windows környezetet egyaránt kiszolgál, beleértve A3-as és A4-es nyomtatók, valamint egy NAS egység integrációját is.',
      technologies: ['Cisco', 'Windows Server', 'VMware', 'Fortinet'],
      achievements: [
        '99.9% uptime elérése',
        'iOS–Windows kompatibilitás',
        'Home office támogatás'
      ],
      images: [
        '/images/php-1.jpg',
        '/images/php-2.jpg',
        '/images/php-3.jpg',
        '/images/php-4.jpg'
      ]
    },
    {
      id: 2,
      title: 'Egyedi Számítógép Építése',
      client: 'Tapolcai Média Kft.',
      category: 'PC Összeszerelés',
      duration: '2 hét',
      teamSize: '1 fő',
      description: 'Teljesítményre optimalizált, csendes működésű munkaállomás építése grafikai és videószerkesztési feladatokra. A konfiguráció kiemelten figyelembe veszi a hűtést, energiahatékonyságot és a bővíthetőséget.',
      technologies: ['Intel i5', 'Be quiet', 'Samsung NVMe', 'CoolerMaster PSU', 'Corsair RAM'],
      achievements: [
        'Stabil videószerkesztési teljesítmény',
        'Optimalizált hőmérséklet és zajszint',
        'Gyors rendszerindítás és fájlhozzáférés',
        'Esztétikus, rendezett kábelmenedzsment'
      ],
      images: [
        '/images/work-pcbuild-1.jpg',
        '/images/work-pcbuild-2.jpg'
      ]
    },
  {
    id: 3,
    title: 'Csúcskategóriás Gamer PC Építése',
    client: 'Magánmegrendelő',
    category: 'Gépépítés',
    duration: '1 hét',
    teamSize: '1 fő',
    description: 'Nagy teljesítményű, jövőálló gamer számítógép összeállítása 4K játékhoz és streameléshez. A rendszer célja a maximális FPS elérése kompromisszumok nélkül, esztétikus RGB házban, kiváló hűtéssel és hangtalan működéssel.',
    technologies: ['AMD Ryzen', 'NVIDIA RTX', 'DDR5 RAM', 'NVMe SSD', 'Corsair PSU',],
    achievements: [
      'Stabil 4K 120FPS teljesítmény',
      'Ultra beállítások minden modern játékban',
      'Hatékony hűtés és halk működés',
      'RGB világítás testreszabva'
    ],
    images: [
      '/images/work-gamingpc-1.jpg',
      '/images/work-gamingpc-2.jpg',
      '/images/work-gamingpc-3.jpg'
    ]
  }
  ];

  const [currentImageIndexes, setCurrentImageIndexes] = useState(works.map(() => 0));

  const nextImage = (workIndex) => {
    setCurrentImageIndexes(prev => prev.map((index, i) => 
      i === workIndex ? (index === works[workIndex].images.length - 1 ? 0 : index + 1) : index
    ));
  };

  const prevImage = (workIndex) => {
    setCurrentImageIndexes(prev => prev.map((index, i) => 
      i === workIndex ? (index === 0 ? works[workIndex].images.length - 1 : index - 1) : index
    ));
  };

  const stats = [
    { number: '150+', label: 'Befejezett Projekt', icon: <Award className="w-8 h-8 text-blue-500" /> },
    { number: '98%', label: 'Ügyfél Elégedettség', icon: <Users className="w-8 h-8 text-green-500" /> },
    { number: '20+', label: 'Év Tapasztalat', icon: <Calendar className="w-8 h-8 text-purple-500" /> },
    { number: '24/7', label: 'Támogatás', icon: <CheckCircle className="w-8 h-8 text-orange-500" /> }
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white" data-aos="fade-up">
            Referencia <span className="text-blue-500">Munkáink</span>
          </h1>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed" data-aos="fade-up" data-aos-delay="100">
            Büszkék vagyunk arra, hogy számos sikeres projektet valósítottunk meg ügyfeleink számára. 
            Minden projekt egyedi kihívásokat jelentett, amelyeket innovatív megoldásokkal oldottunk meg.
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

        {/* Projects Section */}
        <div className="space-y-20">
          {works.map((work, workIndex) => (
            <div
              key={work.id}
              className="bg-gray-800/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/30 hover:border-blue-500/30 transition-all duration-500"
              data-aos="fade-up"
              data-aos-delay={work.id * 100}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Image Gallery */}
                <div className="relative aspect-video lg:aspect-square">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
                  <img
                    src={work.images[currentImageIndexes[workIndex]]}
                    alt={`${work.title} - Kép ${currentImageIndexes[workIndex] + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  
                  {/* Navigation Buttons */}
                  <button
                    onClick={() => prevImage(workIndex)}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-blue-500 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
                    aria-label="Előző kép"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={() => nextImage(workIndex)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-blue-500 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
                    aria-label="Következő kép"
                  >
                    <ChevronRight size={20} />
                  </button>
                  
                  {/* Image Counter */}
                  <div className="absolute bottom-4 left-4 z-20 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-white text-sm">
                      {currentImageIndexes[workIndex] + 1} / {work.images.length}
                    </span>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      {work.category}
                    </span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="mb-6">
                    <h2 className="text-3xl font-bold text-white mb-3">{work.title}</h2>
                    <div className="flex items-center text-blue-500 mb-4">
                      <ExternalLink size={16} className="mr-2" />
                      <span className="font-medium">{work.client}</span>
                    </div>
                    
                    {/* Project Meta */}
                    <div className="flex flex-wrap gap-4 mb-6">
                      <div className="flex items-center text-gray-400">
                        <Calendar size={16} className="mr-2" />
                        <span className="text-sm">{work.duration}</span>
                      </div>
                      <div className="flex items-center text-gray-400">
                        <Users size={16} className="mr-2" />
                        <span className="text-sm">{work.teamSize}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">{work.description}</p>
                  
                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Használt Technológiák:</h4>
                    <div className="flex flex-wrap gap-2">
                      {work.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="bg-gray-700/50 text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-600/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Achievements */}
                  <div className="mb-8">
                    <h4 className="text-white font-semibold mb-3">Elért Eredmények:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {work.achievements.map((achievement, index) => (
                        <div key={index} className="flex items-center text-gray-300">
                          <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-sm">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <a href="/contact">
                  <button className="inline-flex items-center text-blue-500 hover:text-blue-400 transition-colors duration-300 font-medium">
                    Kérjen Ajánlatot!
                    <ArrowRight size={16} className="ml-2" />
                  </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-12 border border-blue-500/20" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-6 text-white">Következő Projektje Lehet az Övé!</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
            Keressen minket bizalommal egyedi igényeivel. Szakértő csapatunk készen áll, hogy az Ön projektjét is sikerre vigye, 
            ugyanazzal a szakértelemmel és elkötelezettséggel.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center justify-center transform hover:scale-105"
            >
              Projekt Indítása
              <ArrowRight size={16} className="ml-2" />
            </a>
            <a
              href="/services/pricing"
              className="bg-transparent border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-medium py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center justify-center"
            >
              Árajánlat Kérése
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;