import React from 'react';
import { Heart, Gift, Calendar, MapPin, Users, Building2, Trophy, Sparkles } from 'lucide-react';

const Jotekonysag = () => {
  const prizes = [
    {
      id: 1,
      name: 'Laptop',
      description: 'Modern laptop teljes konfigurációval',
      image: '/images/sale-business-laptop.jpg',
      type: 'main'
    },
    {
      id: 2,
      name: 'Gaming Monitor',
      description: '144Hz gaming monitor',
      image: '/images/sale-gaming-monitor.jpg',
      type: 'secondary'
    },
    {
      id: 3,
      name: 'Gaming PC',
      description: 'Teljes gaming számítógép konfiguráció',
      image: '/images/sale-gaming-pc.jpg',
      type: 'secondary'
    },
    {
      id: 4,
      name: 'Tech Kiegészítők',
      description: 'Billentyűzetek, egerek, headset-ek és egyéb perifériák',
      image: '/images/php-2.jpg',
      type: 'secondary'
    },
    {
      id: 5,
      name: 'Számítógép Alkatrészek',
      description: 'Különféle számítógép alkatrészek és kiegészítők',
      image: '/images/php-3.jpg',
      type: 'secondary'
    },
    {
      id: 6,
      name: 'Irodai Kellékek',
      description: 'Nyomtatók, szkennerek és irodai eszközök',
      image: '/images/php-4.jpg',
      type: 'secondary'
    }
  ];

  const donors = [
    { name: 'Kovács István', type: 'Pénzadomány - 50,000 Ft' },
    { name: 'Nagy Éva', type: 'Gaming egér és billentyűzet' },
    { name: 'Szabó Péter', type: 'Pénzadomány - 30,000 Ft' },
    { name: 'Horváth Katalin', type: 'USB eszközök és kábelek' },
    { name: 'Tóth András', type: 'Pénzadomány - 25,000 Ft' },
    { name: 'Kiss Mária', type: 'Gaming headset' },
    { name: 'Molnár Gábor', type: 'Webkamera és mikrofon' },
    { name: 'Varga Judit', type: 'Pénzadomány - 40,000 Ft' },
    { name: 'Balogh Ferenc', type: 'Számítógép alkatrészek' },
    { name: 'Lakatos Emma', type: 'Pénzadomány - 20,000 Ft' }
  ];

  const eventDetails = {
    date: '2025. december 13.',
    location: 'Tamási Áron Művelődési Központ',
    time: '14:00 óra'
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="relative bg-gradient-to-r from-red-600 via-rose-600 to-pink-600 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full">
                <Heart className="w-16 h-16" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Jótékonysági Tombola
            </h1>
            <p className="text-xl md:text-2xl mb-4 max-w-3xl mx-auto">
              Támogassa a rászoruló gyerekeket!
            </p>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              Csatlakozzon hozzánk egy különleges eseményre, ahol közösen segíthetünk a rászoruló családok gyermekeinek
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-red-100 hover:border-red-300 transition-all">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-red-100 p-4 rounded-full">
                <Calendar className="w-8 h-8 text-red-600" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-2 text-gray-900">Időpont</h3>
            <p className="text-center text-gray-700 font-semibold">{eventDetails.date}</p>
            <p className="text-center text-gray-600">{eventDetails.time}</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-red-100 hover:border-red-300 transition-all">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-red-100 p-4 rounded-full">
                <MapPin className="w-8 h-8 text-red-600" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-2 text-gray-900">Helyszín</h3>
            <p className="text-center text-gray-700 font-semibold">{eventDetails.location}</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-red-100 hover:border-red-300 transition-all">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-red-100 p-4 rounded-full">
                <Users className="w-8 h-8 text-red-600" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-2 text-gray-900">Célcsoport</h3>
            <p className="text-center text-gray-700 font-semibold">Rászoruló gyerekek</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-red-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-red-100 p-3 rounded-full">
                <Heart className="w-6 h-6 text-red-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">A Projekt Célja</h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Jótékonysági tombolánk célja, hogy olyan családok gyermekeinek segítsünk, akik nehéz körülmények között élnek.
              Szeretnénk biztosítani számukra az alapvető tanulmányi eszközöket, technológiai lehetőségeket, valamint
              támogatni őket abban, hogy egyenlő esélyekkel indulhassanak az életben.
            </p>
            <div className="bg-red-50 p-6 rounded-xl">
              <h3 className="font-bold text-xl mb-4 text-red-900">Mire fordítjuk az adományokat?</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="bg-red-200 p-1 rounded-full mt-1">
                    <Heart className="w-4 h-4 text-red-700" />
                  </div>
                  <span className="text-gray-700">Iskolai eszközök és tanszerek beszerzése</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-red-200 p-1 rounded-full mt-1">
                    <Heart className="w-4 h-4 text-red-700" />
                  </div>
                  <span className="text-gray-700">Számítógépek és oktatást segítő technológia</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-red-200 p-1 rounded-full mt-1">
                    <Heart className="w-4 h-4 text-red-700" />
                  </div>
                  <span className="text-gray-700">Online tanulási platformok hozzáférése</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-red-200 p-1 rounded-full mt-1">
                    <Heart className="w-4 h-4 text-red-700" />
                  </div>
                  <span className="text-gray-700">Ruházat és alapvető szükségletek támogatása</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-red-200 p-1 rounded-full mt-1">
                    <Heart className="w-4 h-4 text-red-700" />
                  </div>
                  <span className="text-gray-700">Étkezési támogatás biztosítása</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-red-600 to-rose-600 rounded-2xl shadow-xl p-8 text-white">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full">
                <Sparkles className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold">A Projekt Menete</h2>
            </div>
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5">
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-white/20 w-8 h-8 rounded-full flex items-center justify-center font-bold">1</div>
                  <h3 className="font-bold text-lg">Tombola Jegyek Értékesítése</h3>
                </div>
                <p className="text-white/90 pl-11">
                  A tombola jegyek értékesítése folyamatosan zajlik az eseményig. Minden egyes jegy vásárlásával
                  hozzájárulsz a rászoruló gyerekek támogatásához.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5">
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-white/20 w-8 h-8 rounded-full flex items-center justify-center font-bold">2</div>
                  <h3 className="font-bold text-lg">Jótékonysági Esemény</h3>
                </div>
                <p className="text-white/90 pl-11">
                  <strong>{eventDetails.date}</strong> - Tombola sorsolás a Tamási Áron Művelődési Központban.
                  Családias hangulatban, közös programokkal várjuk a résztvevőket.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5">
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-white/20 w-8 h-8 rounded-full flex items-center justify-center font-bold">3</div>
                  <h3 className="font-bold text-lg">Adomány Átadás</h3>
                </div>
                <p className="text-white/90 pl-11">
                  Az eseményt követően a teljes bevétel és az összegyűjtött adományok átadásra kerülnek a
                  rászoruló családoknak és gyerekeknek.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5">
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-white/20 w-8 h-8 rounded-full flex items-center justify-center font-bold">4</div>
                  <h3 className="font-bold text-lg">Folyamatos Támogatás</h3>
                </div>
                <p className="text-white/90 pl-11">
                  Követjük a projekt eredményeit és rendszeresen beszámolunk arról, hogyan segítettek az adományok
                  a gyerekek életében.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="bg-gradient-to-r from-red-600 to-rose-600 p-4 rounded-full">
                <Trophy className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nyeremények</h2>
            <p className="text-xl text-gray-600">Értékes technológiai eszközök és kiegészítők</p>
          </div>

          <div className="mb-12">
            <div className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-500 rounded-2xl shadow-2xl p-8 text-center border-4 border-yellow-300">
              <div className="flex justify-center mb-4">
                <Trophy className="w-16 h-16 text-yellow-900" />
              </div>
              <h3 className="text-3xl font-bold text-yellow-900 mb-4">FŐDÍJ</h3>
              <div className="max-w-md mx-auto">
                <img
                  src={prizes[0].image}
                  alt={prizes[0].name}
                  className="w-full h-64 object-cover rounded-xl mb-4 shadow-xl"
                />
                <h4 className="text-2xl font-bold text-yellow-900 mb-2">{prizes[0].name}</h4>
                <p className="text-lg text-yellow-800">{prizes[0].description}</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {prizes.slice(1).map((prize) => (
              <div key={prize.id} className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-gray-100 hover:border-red-200 transition-all hover:shadow-xl">
                <img
                  src={prize.image}
                  alt={prize.name}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Gift className="w-4 h-4 text-red-600 flex-shrink-0" />
                    <h4 className="font-bold text-gray-900 text-sm">{prize.name}</h4>
                  </div>
                  <p className="text-gray-600 text-xs">{prize.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 text-lg">
              ...és még sok más értékes technológiai eszköz és kiegészítő!
            </p>
          </div>
        </div>

        <div className="mb-16">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl shadow-xl p-8 text-white text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full">
                <Building2 className="w-12 h-12" />
              </div>
            </div>
            <h2 className="text-3xl font-bold mb-4">Fő Támogató</h2>
            <div className="max-w-2xl mx-auto">
              <h3 className="text-4xl font-bold mb-4">EU-Tech Informatika Kft.</h3>
              <p className="text-lg text-white/90 leading-relaxed">
                Büszkén támogatjuk ezt a jótékonysági kezdeményezést. Cégünk elkötelezett amellett, hogy segítse
                a helyi közösséget és lehetőséget biztosítson azoknak a gyerekeknek, akiknek a legnagyobb szükségük van rá.
                A technológia nemcsak üzletünk, hanem hivatásunk is - hiszünk abban, hogy minden gyerek megérdemli a
                lehetőséget, hogy megismerje és használja a modern technológiát.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-4 rounded-full">
                <Heart className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Támogatóink és Adományozók</h2>
            <p className="text-xl text-gray-600">Köszönjük minden támogatónknak, aki hozzájárult a projekt sikeréhez!</p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-green-100">
            <div className="grid md:grid-cols-2 gap-6">
              {donors.map((donor, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border-l-4 border-green-500 hover:shadow-md transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-green-100 p-2 rounded-full mt-1">
                      <Heart className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900 mb-1">{donor.name}</h3>
                      <p className="text-gray-600">{donor.type}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center p-6 bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl">
              <p className="text-lg text-gray-700 font-semibold">
                Köszönjük minden támogatónk nagylelkűségét! Az Önök segítségével valóra válthatjuk ezt a nemes célt.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl shadow-xl p-8 text-white">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Csatlakozz Te is!</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Ha Te is szeretnél részt venni ebben a jótékonysági projektben, akár tombolajegy vásárlással,
              akár adománnyal, vagy szeretnél többet megtudni a kezdeményezésről, kérjük vedd fel velünk a kapcsolatot!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <h3 className="font-bold text-xl mb-4">Elérhetőségek</h3>
              <div className="space-y-3 text-gray-300">
                <p><strong className="text-white">Telefon:</strong> +36 30 123 4567</p>
                <p><strong className="text-white">Email:</strong> info@eu-tech.hu</p>
                <p><strong className="text-white">Cím:</strong> EU-Tech Informatika Kft.</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <h3 className="font-bold text-xl mb-4">Támogatási Lehetőségek</h3>
              <ul className="space-y-2 text-gray-300 text-left">
                <li>• Tombola jegy vásárlás</li>
                <li>• Pénzbeli adomány</li>
                <li>• Tárgyi adomány (játékok, eszközök)</li>
                <li>• Önkéntes munka az eseményen</li>
                <li>• Megosztás és terjesztés</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-xl font-semibold text-white">
              Együtt többet tehetünk! Minden kis segítség számít! ❤️
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jotekonysag;