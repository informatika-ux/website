import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Tag, Clock, CheckCircle, Star } from 'lucide-react';

const SalesDetail = () => {
  const { slug } = useParams();

  const salesItems = {
    'gamer-pc-akcio': {
      id: 1,
      title: 'Gamer PC Akció - Prémium Gaming Élmény',
      image: '/images/sale-gaming-pc.jpg',
      oldPrice: 399990,
      newPrice: 319990,
      discount: 20,
      category: 'Gaming PC',
      validUntil: '2024. március 31.',
      description: 'Egyedi összeállítású gamer számítógépek most 20% kedvezménnyel! Az akció a készlet erejéig érvényes.',
      fullDescription: `
        <p>Fedezze fel a gaming világ csúcsát egyedi összeállítású gamer PC-inkkel! Minden gépet az Ön igényeire szabunk, hogy a legjobb gaming élményt nyújthassuk.</p>
        
        <h3>Miért válassza a mi gamer PC-inket?</h3>
        <ul>
          <li>Legújabb generációs processzorok (Intel i5/i7, AMD Ryzen 5/7)</li>
          <li>High-end videokártyák (RTX 4060/4070/4080)</li>
          <li>Gyors DDR5 memóriák 16-32GB kapacitással</li>
          <li>NVMe SSD meghajtók villámgyors betöltéshez</li>
          <li>Prémium hűtési megoldások</li>
          <li>RGB világítás és tempered glass oldalpanel</li>
        </ul>
      `,
      specifications: [
        { name: 'Processzor', value: 'Intel i7-13700F / AMD Ryzen 7 7700X' },
        { name: 'Videokártya', value: 'RTX 4070 / RTX 4060 Ti' },
        { name: 'Memória', value: '16GB DDR5-5600' },
        { name: 'Tárhely', value: '1TB NVMe SSD' },
        { name: 'Alaplap', value: 'B760 / B650 chipset' },
        { name: 'Tápegység', value: '750W 80+ Gold' },
        { name: 'Ház', value: 'RGB világítással, tempered glass' }
      ],
      features: [
        '4K gaming képesség',
        '144Hz+ monitor támogatás',
        'Ray tracing technológia',
        'DLSS/FSR támogatás',
        'VR ready',
        '3 év garancia',
        'Ingyenes szoftver telepítés',
        'Teljesítmény optimalizálás'
      ]
    },
    'gaming-monitor-akcio': {
      id: 2,
      title: 'Gaming Monitor Akció - 144Hz Élmény',
      image: '/images/sale-gaming-monitor.jpg',
      oldPrice: 129990,
      newPrice: 110490,
      discount: 15,
      category: 'Monitor',
      validUntil: '2024. március 25.',
      description: '144Hz-es gaming monitorok most kedvezményes áron! Válasszon a különböző márkák közül.',
      fullDescription: `
        <p>Emelje új szintre gaming élményét professzionális gaming monitorjainkkal! 144Hz frissítési frekvencia, alacsony input lag és vibráló színek várják.</p>
        
        <h3>Miért fontos a jó gaming monitor?</h3>
        <ul>
          <li>Versenyképes előny online játékokban</li>
          <li>Simább, folyamatosabb képmegjelenítés</li>
          <li>Csökkentett input lag</li>
          <li>Élénkebb színek és jobb kontrasztarány</li>
          <li>Szemkímélő technológiák</li>
        </ul>
      `,
      specifications: [
        { name: 'Képátló', value: '24" / 27" / 32"' },
        { name: 'Felbontás', value: '1920x1080 / 2560x1440' },
        { name: 'Frissítési frekvencia', value: '144Hz / 165Hz' },
        { name: 'Panel típus', value: 'IPS / VA' },
        { name: 'Válaszidő', value: '1ms MPRT' },
        { name: 'Csatlakozók', value: 'HDMI 2.1, DisplayPort 1.4' },
        { name: 'Adaptive Sync', value: 'FreeSync / G-Sync Compatible' }
      ],
      features: [
        'AMD FreeSync / NVIDIA G-Sync',
        'HDR10 támogatás',
        'Flicker-free technológia',
        'Blue light filter',
        'Ergonomikus állvány',
        'VESA mount kompatibilis',
        '3 év gyártói garancia',
        'Pixel hibára csere garancia'
      ]
    },
    'uzleti-laptop-akcio': {
      id: 3,
      title: 'Üzleti Laptop Akció - Professzionális Megoldások',
      image: '/images/sale-business-laptop.jpg',
      oldPrice: 299990,
      newPrice: 224990,
      discount: 25,
      category: 'Laptop',
      validUntil: '2024. április 5.',
      description: 'Professzionális laptopok most extra kedvezménnyel! Tökéletes választás irodai munkához.',
      fullDescription: `
        <p>Növelje produktivitását professzionális üzleti laptopjainkkal! Megbízható teljesítmény, hosszú akkumulátor-élettartam és prémium build minőség.</p>
        
        <h3>Miért válassza az üzleti laptopjainkat?</h3>
        <ul>
          <li>Professzionális megjelenés és tartósság</li>
          <li>Hosszú akkumulátor-élettartam (8-12 óra)</li>
          <li>Gyors SSD tárhely</li>
          <li>Kiváló billentyűzet és trackpad</li>
          <li>Biztonsági funkciók (TPM, ujjlenyomat-olvasó)</li>
          <li>Könnyű és hordozható design</li>
        </ul>
      `,
      specifications: [
        { name: 'Processzor', value: 'Intel i5-1335U / AMD Ryzen 5 7530U' },
        { name: 'Memória', value: '16GB DDR4/DDR5' },
        { name: 'Tárhely', value: '512GB NVMe SSD' },
        { name: 'Kijelző', value: '14" / 15.6" Full HD IPS' },
        { name: 'Grafika', value: 'Integrált Intel Iris Xe / AMD Radeon' },
        { name: 'Akkumulátor', value: '8-12 óra használat' },
        { name: 'Súly', value: '1.4-1.8 kg' }
      ],
      features: [
        'Windows 11 Pro',
        'TPM 2.0 biztonsági chip',
        'Ujjlenyomat-olvasó',
        'Backlit billentyűzet',
        'USB-C Thunderbolt',
        'WiFi 6 támogatás',
        'Webcam privacy shutter',
        '3 év on-site garancia'
      ]
    }
  };

  const item = salesItems[slug];

  if (!item) {
    return (
      <div className="pt-24 pb-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Akció nem található</h1>
          <p className="text-gray-400 mb-8">A keresett akció nem létezik vagy lejárt.</p>
          <Link to="/sales" className="btn-primary">
            Vissza az akciókhoz
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <Link 
            to="/sales" 
            className="inline-flex items-center text-blue-500 hover:text-blue-400 transition-colors duration-300 mb-8"
          >
            <ArrowLeft size={20} className="mr-2" />
            Vissza az akciókhoz
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Image and Basic Info */}
            <div>
              <div className="relative mb-6">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-96 object-cover rounded-lg shadow-xl"
                />
                <div className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full text-lg font-bold">
                  -{item.discount}%
                </div>
              </div>
              
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/30">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-blue-500">
                    <Tag size={16} className="mr-2" />
                    {item.category}
                  </div>
                  <div className="flex items-center text-orange-500">
                    <Clock size={16} className="mr-2" />
                    Érvényes: {item.validUntil}
                  </div>
                </div>
                
                <div className="text-center py-6">
                  <p className="text-gray-400 text-lg line-through mb-2">
                    {item.oldPrice.toLocaleString()} Ft
                  </p>
                  <p className="text-4xl font-bold text-blue-500 mb-4">
                    {item.newPrice.toLocaleString()} Ft
                  </p>
                  <p className="text-green-500 font-semibold text-lg">
                    Megtakarítás: {(item.oldPrice - item.newPrice).toLocaleString()} Ft
                  </p>
                </div>
                
                <div className="space-y-3">
                  <Link
                    to="/contact"
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 text-center block"
                  >
                    Megrendelés
                  </Link>
                  <Link
                    to="/contact"
                    className="w-full bg-gray-700 hover:bg-gray-600 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 text-center block"
                  >
                    Kérdés az akcióról
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Right Column - Details */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
                {item.title}
              </h1>
              
              <div 
                className="prose prose-lg prose-invert mb-8"
                dangerouslySetInnerHTML={{ __html: item.fullDescription }}
                style={{
                  color: '#e5e7eb',
                  lineHeight: '1.7'
                }}
              />
              
              {/* Specifications */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">Specifikációk</h3>
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/30">
                  <div className="space-y-3">
                    {item.specifications.map((spec, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-gray-700/30 last:border-0">
                        <span className="text-gray-400">{spec.name}</span>
                        <span className="text-white font-medium">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Features */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">Jellemzők és előnyök</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {item.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-gray-300">
                      <CheckCircle size={16} className="text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Rating */}
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/30">
                <h4 className="text-lg font-bold text-white mb-3">Ügyfél értékelések</h4>
                <div className="flex items-center mb-2">
                  <div className="flex text-yellow-500 mr-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={20} fill="currentColor" />
                    ))}
                  </div>
                  <span className="text-white font-medium">4.8/5</span>
                  <span className="text-gray-400 ml-2">(24 értékelés)</span>
                </div>
                <p className="text-gray-300 text-sm">
                  "Kiváló ár-érték arány, gyors kiszolgálás és professzionális tanácsadás!"
                </p>
              </div>
            </div>
          </div>
          
          {/* Bottom CTA */}
          <div className="mt-16 text-center bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Ne maradjon le erről az akcióról!</h2>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              Korlátozott készlet és időtartam! Vegye fel velünk a kapcsolatot még ma, és biztosítsa be kedvezményes árát.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-700 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-all duration-300 inline-flex items-center justify-center"
              >
                Megrendelés most
              </Link>
              <a
                href="tel:+36204145561"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-medium py-3 px-8 rounded-lg transition-all duration-300 inline-flex items-center justify-center"
              >
                Hívás: +36 20 414 5561
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesDetail;