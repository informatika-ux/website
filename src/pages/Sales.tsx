import React from 'react';
import '../styles/sales.css';
import { Link } from 'react-router-dom';

const Sales = () => {
  const sales = [
    {
      id: 1,
      title: 'Gamer PC Akció',
      description: 'Egyedi összeállítású gamer számítógépek most 20% kedvezménnyel! Az akció a készlet erejéig érvényes.',
      image: '/images/sale-gaming-pc.jpg',
      oldPrice: 399990,
      newPrice: 319990,
      discount: 20,
      slug: 'gamer-pc-akcio'
    },
    {
      id: 2,
      title: 'Gaming Monitor',
      description: '144Hz-es gaming monitorok most kedvezményes áron! Válasszon a különböző márkák közül.',
      image: '/images/sale-gaming-monitor.jpg',
      oldPrice: 129990,
      newPrice: 110490,
      discount: 15,
      slug: 'gaming-monitor-akcio'
    },
    {
      id: 3,
      title: 'Üzleti Laptop',
      description: 'Professzionális laptopok most extra kedvezménnyel! Tökéletes választás irodai munkához.',
      image: '/images/sale-business-laptop.jpg',
      oldPrice: 299990,
      newPrice: 224990,
      discount: 25,
      slug: 'uzleti-laptop-akcio'
    }
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white" data-aos="fade-up">
            Aktuális Akcióink
          </h1>
          <p className="text-gray-400 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Ne maradjon le legfrissebb kedvezményeinkről
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sales.map((sale) => (
            <div
              key={sale.id}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
              data-aos="fade-up"
              data-aos-delay={sale.id * 100}
            >
              <img
                src={sale.image}
                alt={sale.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white">{sale.title}</h3>
                  <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    -{sale.discount}%
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{sale.description}</p>
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <span className="text-gray-400 line-through">
                      {sale.oldPrice.toLocaleString()} Ft
                    </span>
                    <p className="text-2xl font-bold text-blue-500">
                      {sale.newPrice.toLocaleString()} Ft
                    </p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Link
                    to={`/sales/${sale.slug}`}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300 flex-1 text-center"
                  >
                    Részletek
                  </Link>
                  <Link
                    to="/contact"
                    className="bg-gray-700 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300 flex-1 text-center"
                  >
                    Megrendelés
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center" data-aos="fade-up">
          <h2 className="text-2xl font-bold mb-6 text-white">Egyedi ajánlatért vegye fel velünk a kapcsolatot!</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Kérjen személyre szabott árajánlatot, és mi segítünk megtalálni az Ön igényeinek megfelelő legjobb megoldást.
          </p>
          <Link
            to="/contact"
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 inline-flex items-center"
          >
            Kapcsolatfelvétel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sales;