import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const News = () => {
  const newsItems = [
    {
      id: 1,
      title: 'Új IT támogatási csomagok elérhetők',
      date: '2024. március 15.',
      image: '/images/work-network-2.jpg',
      content: 'Örömmel mutatjuk be új, testreszabható IT támogatási csomagjainkat kis- és középvállalkozások számára. Gyors reakcióidő, állandó monitorozás és rugalmas megoldások — mindezt egy helyen.',
      category: 'Hírek',
      slug: 'uj-it-tamogatasi-csomagok'
    },
    {
      id: 2,
      title: 'Tavaszi akciók',
      date: '2024. március 10.',
      image: '/images/news-spring-sale.jpg',
      content: 'Március végéig tartó tavaszi akcióinkkal jelentős kedvezményeket kínálunk számítógép-alkatrészekre és szolgáltatásainkra.',
      category: 'Akciók',
      slug: 'tavaszi-akciok'
    },
    {
      id: 3,
      title: 'Új szolgáltatások',
      date: '2024. március 5.',
      image: '/images/news-new-services.jpg',
      content: 'Szolgáltatásaink körét kibővítettük felhő alapú megoldásokkal és távoli támogatással, hogy még hatékonyabban segíthessük ügyfeleinket.',
      category: 'Szolgáltatások',
      slug: 'uj-szolgaltatasok'
    }
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white" data-aos="fade-up">
            Hírek és Újdonságok
          </h1>
          <p className="text-gray-400 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Kövesse nyomon legfrissebb híreinket és fejlesztéseinket
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <div
              key={item.id}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl border border-gray-700/30"
              data-aos="fade-up"
              data-aos-delay={item.id * 100}
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4 bg-blue-500 text-white text-sm px-3 py-1 rounded-full">
                  {item.category}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-gray-400 text-sm mb-3">
                  <Calendar size={16} className="mr-2" />
                  {item.date}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-gray-400 mb-4 line-clamp-3">
                  {item.content}
                </p>
                <Link 
                  to={`/news/${item.slug}`}
                  className="inline-flex items-center text-blue-500 hover:text-blue-400 transition-colors duration-300"
                >
                  Tovább olvasom
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center" data-aos="fade-up">
          <h2 className="text-2xl font-bold mb-6 text-white">Maradjon kapcsolatban velünk</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Kövesse nyomon legfrissebb híreinket és fejlesztéseinket közösségi média oldalaink követésével.
          </p>
          <div className="flex justify-center space-x-4">
            <a 
              href="https://www.facebook.com/profile.php?id=61569875752129" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 inline-flex items-center"
            >
              Facebook követése
            </a>
            <a 
              href="https://www.instagram.com/eutechinformatika" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 inline-flex items-center"
            >
              Instagram követése
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;