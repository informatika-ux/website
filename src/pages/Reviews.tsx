import React, { useState } from 'react';
import { Star, Quote, Calendar, ExternalLink } from 'lucide-react';

interface Review {
  id: number;
  author: string;
  rating: number;
  date: string;
  text: string;
  profileImage?: string;
  verified?: boolean;
}

const Reviews = () => {
  // Sample reviews - you can replace these with your actual Google Reviews
  const [reviews] = useState<Review[]>([
    {
      id: 1,
      author: 'Istenes Bence',
      rating: 5,
      date: '2024. február 15.',
      text: 'Alexet csak ajánlani tudom! Kedves, segítőkész és profi! Keressétek bizalommal 🙏🙏🙏',
      profileImage: '/images/testimonial-bence.jpg',
      verified: true
    },
    {
      id: 2,
      author: 'Gergesy Éva',
      rating: 5,
      date: '2024. február 15.',
      text: 'Elmondhatatlanul hálás vagyok Alexnak! Azonnal jött! Gyorsan vág az agya, átlátja a problémát, mindenre tud megoldást márpedig a MacPro gépem ezer sebből vérzett. Megmentette az adatokat és az eltűnt fotokat. Mindenkinek ajánlom őt aki megbízható IT-st keres!',
      profileImage: '/images/testimonial-eva.jpg',
      verified: true
    },
    {
      id: 3,
      author: 'Szociális és Egészségügyi Alapellátási Intézet',
      rating: 5,
      date: '2024. február 8.',
      text: 'Alex villámgyorsan megoldja az intézményünk informatikai problémáit, korrekt és udvarias.',
      profileImage: '/images/testimonial-rita.jpg',
      verified: true
    },
    {
      id: 4,
      author: 'Tapolcai Média Kft.',
      rating: 5,
      date: '2024. január 28.',
      text: 'Nagy bizalommal fordultunk a cég felé, és a várakozásainkat felülmúlva teljesítettek – köszönjük!',
      profileImage: '/images/media-logo.png',
      verified: true
    },
    {
      id: 5,
      author: 'Tünde Kovács-Georgi',
      rating: 5,
      date: '4 napja',
      text: 'Korrekt, gyors,ügyfélbarát szolgáltató.Csak ajánlani tudom!',
      verified: true
    },
    {
      id: 6,
      author: 'Abigél Hoffmann',
      rating: 5,
      date: '2 hete',
      text: 'Nagyon elégedett vagyok! Gyors és precíz munkát vègeznek! Kedvesek, segítőkészek és megbízhatóak, jó szívvel ajánlom őket bárkinek! 😊',
      verified: true
    },
    {
      id: 7,
      author: 'Lászlóné Molnár',
      rating: 5,
      date: '2 hete',
      text: 'Nem volt probléma, a feladatok megoldása nagyon gyorsan megtörtént. Gyors és precíz.',
      verified: true
    },
    {
      id: 8,
      author: 'Elli Márvány',
      rating: 5,
      date: '2 hete',
      text: 'Gyors, udvarias tanácsadás, kesőbbiekben kapcsolatban maradok a céggel.',
      verified: true
    },
    {
      id: 9,
      author: 'Csaba Horváth',
      rating: 5,
      date: '2 hete',
      text: 'Le a kalappal, nagyon hatékony és precíz munkát végeznek. Vendéglátó szoftvert állítottak be nekem, bátran tudom ajánlani őket!',
      verified: true
    },
    {
      id: 10,
      author: 'Kálmánné Szabó',
      rating: 5,
      date: '5 hete',
      text: 'Nagyon gyors javítás,kedves személyzet/kiszolgálás rugalmas kiszállással',
      verified: true
    },
    {
      id: 11,
      author: 'Adrián Szabó',
      rating: 5,
      date: '6 hete',
      text: 'Nagyon figyelmesek, azonnal megoldották a problémámat. Csak ajánlani tudnom az üzletet!',
      verified: true
    },
    {
      id: 12,
      author: 'Miklós Mózner',
      rating: 5,
      date: '6 hete',
      text: 'Nagyon köszönjük a gyors, kiváló javítást.',
      verified: true
    },
    {
      id: 13,
      author: 'Gabriella Rádi',
      rating: 5,
      date: '6 hete',
      text: 'Köszönjük Alexander gyors, precíz és szakszerű munkáját!Nagyon elégedettek vagyunk vele!!❣️🌻😘',
      verified: true
    },
    {
      id: 14,
      author: 'László Egyed',
      rating: 5,
      date: '6 hete',
      text: 'Mindig segítőkészek, profik és gyorsak. A legjobb informatikai üzlet.',
      verified: true
    },
    {
      id: 15,
      author: 'Ferenc Antal',
      rating: 5,
      date: '6 hete',
      text: 'Nagyon szeretek az üzletbe járni tisztességesek és nagyon értik a dolgukat, bármikor bejövök egyből tudnak segíteni.',
      verified: true
    },
    {
      id: 16,
      author: 'Olga Deák',
      rating: 5,
      date: '6 hete',
      text: 'Mindíg segítőkész, udvarias kiszolgálás. Jó szívvel ajánlom!',
      verified: true
    },
    {
      id: 17,
      author: 'Czako Andrea',
      rating: 5,
      date: '6 hete',
      text: 'Nagyon jó szolgáltatást nyújtanak, megvagyok elégedve.',
      verified: true
    },
  ]);

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;
  const ratingCounts = [5, 4, 3, 2, 1].map(rating => 
    reviews.filter(review => review.rating === rating).length
  );

  const renderStars = (rating: number, size: number = 20) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={size}
            className={i < rating ? 'text-yellow-500 fill-current' : 'text-gray-400'}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white" data-aos="fade-up">
            Google Értékelések
          </h1>
          <p className="text-gray-400 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Nézze meg, mit mondanak ügyfeleink szolgáltatásainkról
          </p>
        </div>

        {/* Overall Rating Summary */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/30 mb-12" data-aos="fade-up">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start mb-4">
                <span className="text-5xl font-bold text-white mr-4">
                  {averageRating.toFixed(1)}
                </span>
                <div>
                  {renderStars(Math.round(averageRating), 24)}
                  <p className="text-gray-400 mt-1">{reviews.length} értékelés alapján</p>
                </div>
              </div>
              <a
                href="https://www.google.com/search?q=Eu-Tech+Informatika+Kft+Tapolca"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300"
              >
                <ExternalLink size={20} className="mr-2" />
                Értékelés írása Google-on
              </a>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Értékelések megoszlása</h3>
              {[5, 4, 3, 2, 1].map((rating, index) => (
                <div key={rating} className="flex items-center mb-2">
                  <span className="text-gray-400 w-8">{rating}</span>
                  <Star size={16} className="text-yellow-500 fill-current mr-2" />
                  <div className="flex-1 bg-gray-700 rounded-full h-2 mr-4">
                    <div
                      className="bg-yellow-500 h-2 rounded-full"
                      style={{
                        width: `${reviews.length > 0 ? (ratingCounts[index] / reviews.length) * 100 : 0}%`
                      }}
                    ></div>
                  </div>
                  <span className="text-gray-400 w-8 text-right">{ratingCounts[index]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Reviews List */}
        <div className="space-y-6">
          {reviews.map((review, index) => (
            <div
              key={review.id}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/30 hover:border-blue-500/50 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  {review.profileImage ? (
                    <img
                      src={review.profileImage}
                      alt={review.author}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                      {review.author.charAt(0).toUpperCase()}
                    </div>
                  )}
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <h4 className="text-white font-semibold">{review.author}</h4>
                      {review.verified && (
                        <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                          Ellenőrzött
                        </span>
                      )}
                    </div>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Calendar size={14} className="mr-1" />
                      {review.date}
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    {renderStars(review.rating)}
                  </div>
                  
                  <div className="relative">
                    <Quote className="absolute -top-2 -left-2 text-blue-500/20" size={24} />
                    <p className="text-gray-300 leading-relaxed pl-4">
                      {review.text}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8" data-aos="fade-up">
          <h2 className="text-2xl font-bold text-white mb-4">Elégedett ügyfeleink véleménye számít!</h2>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            Ha Ön is elégedett volt szolgáltatásainkkal, ossza meg tapasztalatait másokkal is. 
            Értékelése segít másoknak a döntésben és nekünk a fejlődésben.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.google.com/search?q=Eu-Tech+Informatika+Kft+Tapolca"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-700 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-all duration-300 inline-flex items-center justify-center"
            >
              <ExternalLink size={20} className="mr-2" />
              Értékelés írása Google-on
            </a>
            <a
              href="/contact"
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-medium py-3 px-8 rounded-lg transition-all duration-300 inline-flex items-center justify-center"
            >
              Kapcsolatfelvétel
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;