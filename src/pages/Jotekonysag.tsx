import React from 'react';
import { Heart, Gift, Calendar, MapPin, Users, Building2, Trophy, Sparkles, Gamepad2 } from 'lucide-react';

const Jotekonysag = () => {
  const prizes = [
    {
      id: 1,
      name: 'Laptop',
      description: 'Modern laptop teljes konfigurációval',
      image: '/images/dell.png',
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
    time: '10:00 óra'
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        {/* Hero Section */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="flex justify-center mb-6">
            <div className="bg-blue-500/20 backdrop-blur-sm p-6 rounded-full border border-blue-500/30">
              <Heart className="w-16 h-16 text-blue-500" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Jótékonysági <span className="text-blue-500">Tombola</span>
          </h1>
          <p className="text-xl md:text-2xl mb-4 max-w-3xl mx-auto text-gray-300">
            Támogassa a rászoruló gyerekeket!
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Csatlakozzon hozzánk egy különleges eseményre, ahol közösen segíthetünk a rászoruló családok gyermekeinek
          </p>
        </div>

        {/* Gamer Zona Highlight */}
        <div className="mb-16" data-aos="fade-up" data-aos-delay="50">
          <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 backdrop-blur-sm rounded-2xl p-8 border-2 border-green-500/40">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="bg-green-500/30 p-4 rounded-full">
                <Gamepad2 className="w-12 h-12 text-green-400" />
              </div>
              <h2 className="text-4xl font-bold text-green-400">GAMER ZÓNA</h2>
            </div>
            <div className="text-center max-w-4xl mx-auto">
              <p className="text-2xl text-white font-bold mb-6">
                Különleges játékélmény vár minden látogatót!
              </p>
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-green-500/30">
                  <div className="text-4xl font-bold text-green-400 mb-2">3x</div>
                  <div className="text-xl text-white font-semibold">Xbox Konzol</div>
                  <p className="text-gray-300 mt-2">Legújabb játékokkal</p>
                </div>
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-green-500/30">
                  <div className="text-4xl font-bold text-green-400 mb-2">1x</div>
                  <div className="text-xl text-white font-semibold">PlayStation 4</div>
                  <p className="text-gray-300 mt-2">Klasszikus játékok</p>
                </div>
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-green-500/30">
                  <div className="text-4xl font-bold text-green-400 mb-2">1x</div>
                  <div className="text-xl text-white font-semibold">Gaming PC</div>
                  <p className="text-gray-300 mt-2">Teljes élmény</p>
                </div>
              </div>
              <div className="bg-green-500/10 backdrop-blur-sm rounded-xl p-6 border border-green-500/20">
                <p className="text-xl text-gray-200 leading-relaxed">
                  <span className="text-green-400 font-bold">INGYENES JÁTÉK</span> az esemény teljes időtartama alatt!
                  Gyerekek és felnőttek egyaránt kipróbálhatják a konzolokat és a gaming PC-t.
                  Várunk mindenkit szeretettel a Gamer Zónába!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Event Details */}
        <div className="grid md:grid-cols-3 gap-8 mb-16" data-aos="fade-up" data-aos-delay="100">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/30 hover:border-blue-500/50 transition-all">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-blue-500/20 p-4 rounded-full">
                <Calendar className="w-8 h-8 text-blue-500" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-2 text-white">Időpont</h3>
            <p className="text-center text-gray-300 font-semibold">{eventDetails.date}</p>
            <p className="text-center text-gray-400">{eventDetails.time}</p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/30 hover:border-blue-500/50 transition-all">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-blue-500/20 p-4 rounded-full">
                <MapPin className="w-8 h-8 text-blue-500" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-2 text-white">Helyszín</h3>
            <p className="text-center text-gray-300 font-semibold">{eventDetails.location}</p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/30 hover:border-blue-500/50 transition-all">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-blue-500/20 p-4 rounded-full">
                <Users className="w-8 h-8 text-blue-500" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-2 text-white">Célcsoport</h3>
            <p className="text-center text-gray-300 font-semibold">Rászoruló gyerekek</p>
          </div>
        </div>

        {/* Mission and Timeline */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/30 flex flex-col" data-aos="fade-right">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-500/20 p-3 rounded-full flex-shrink-0">
                <Heart className="w-6 h-6 text-blue-500" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">A Projekt Célja</h2>
            </div>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-6">
              Jótékonysági tombolánk célja, hogy olyan családok gyermekeinek segítsünk, akik nehéz körülmények között élnek.
              Szeretnénk biztosítani számukra az alapvető tanulmányi eszközöket, technológiai lehetőségeket, valamint
              támogatni őket abban, hogy egyenlő esélyekkel indulhassanak az életben.
            </p>
            <div className="bg-gray-900/50 p-6 rounded-xl border border-blue-500/20 flex-grow">
              <h3 className="font-bold text-lg md:text-xl mb-4 text-blue-400">Mire fordítjuk az adományokat?</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="bg-blue-500/20 p-1 rounded-full mt-1 flex-shrink-0">
                    <Heart className="w-4 h-4 text-blue-500" />
                  </div>
                  <span className="text-gray-300 text-sm md:text-base">Iskolai eszközök és tanszerek beszerzése</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-blue-500/20 p-1 rounded-full mt-1 flex-shrink-0">
                    <Heart className="w-4 h-4 text-blue-500" />
                  </div>
                  <span className="text-gray-300 text-sm md:text-base">Számítógépek és oktatást segítő technológia</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-blue-500/20 p-1 rounded-full mt-1 flex-shrink-0">
                    <Heart className="w-4 h-4 text-blue-500" />
                  </div>
                  <span className="text-gray-300 text-sm md:text-base">Online tanulási platformok hozzáférése</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-blue-500/20 p-1 rounded-full mt-1 flex-shrink-0">
                    <Heart className="w-4 h-4 text-blue-500" />
                  </div>
                  <span className="text-gray-300 text-sm md:text-base">Ruházat és alapvető szükségletek támogatása</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-blue-500/20 p-1 rounded-full mt-1 flex-shrink-0">
                    <Heart className="w-4 h-4 text-blue-500" />
                  </div>
                  <span className="text-gray-300 text-sm md:text-base">Étkezési támogatás biztosítása</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/30 flex flex-col" data-aos="fade-left">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-500/30 p-3 rounded-full flex-shrink-0">
                <Sparkles className="w-6 h-6 text-blue-400" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">A Projekt Menete</h2>
            </div>
            <div className="space-y-5 flex-grow">
              <div className="bg-gray-900/30 backdrop-blur-sm rounded-xl p-5 border border-gray-700/30">
                <div className="flex items-start gap-3 mb-3">
                  <div className="bg-blue-500/30 w-8 h-8 rounded-full flex items-center justify-center font-bold text-blue-400 flex-shrink-0">1</div>
                  <h3 className="font-bold text-base md:text-lg text-white">Tombola Jegyek Értékesítése</h3>
                </div>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  A tombola jegyek értékesítése folyamatosan zajlik az eseményig. Minden egyes jegy vásárlásával
                  hozzájárulsz a rászoruló gyerekek támogatásához.
                </p>
              </div>

              <div className="bg-gray-900/30 backdrop-blur-sm rounded-xl p-5 border border-gray-700/30">
                <div className="flex items-start gap-3 mb-3">
                  <div className="bg-blue-500/30 w-8 h-8 rounded-full flex items-center justify-center font-bold text-blue-400 flex-shrink-0">2</div>
                  <h3 className="font-bold text-base md:text-lg text-white">Jótékonysági Esemény</h3>
                </div>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  <strong className="text-blue-400">{eventDetails.date}</strong> - Tombola sorsolás a Tamási Áron Művelődési Központban.
                  Családias hangulatban, közös programokkal várjuk a résztvevőket.
                </p>
              </div>

              <div className="bg-gray-900/30 backdrop-blur-sm rounded-xl p-5 border border-gray-700/30">
                <div className="flex items-start gap-3 mb-3">
                  <div className="bg-blue-500/30 w-8 h-8 rounded-full flex items-center justify-center font-bold text-blue-400 flex-shrink-0">3</div>
                  <h3 className="font-bold text-base md:text-lg text-white">Adomány Átadás</h3>
                </div>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  Az eseményt követően a teljes bevétel és az összegyűjtött adományok átadásra kerülnek a
                  rászoruló családoknak és gyerekeknek.
                </p>
              </div>

              <div className="bg-gray-900/30 backdrop-blur-sm rounded-xl p-5 border border-gray-700/30">
                <div className="flex items-start gap-3 mb-3">
                  <div className="bg-blue-500/30 w-8 h-8 rounded-full flex items-center justify-center font-bold text-blue-400 flex-shrink-0">4</div>
                  <h3 className="font-bold text-base md:text-lg text-white">Folyamatos Támogatás</h3>
                </div>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  Követjük a projekt eredményeit és rendszeresen beszámolunk arról, hogyan segítettek az adományok
                  a gyerekek életében.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Prizes Section */}
        <div className="mb-16" data-aos="fade-up">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="bg-blue-500/20 p-4 rounded-full border border-blue-500/30">
                <Trophy className="w-8 h-8 text-blue-500" />
              </div>
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">Nyeremények</h2>
            <p className="text-xl text-gray-400">Értékes technológiai eszközök és kiegészítők</p>
          </div>

          {/* Main Prize */}
          <div className="mb-12" data-aos="fade-up" data-aos-delay="100">
            <div className="bg-gradient-to-br from-yellow-600/20 to-orange-600/20 backdrop-blur-sm rounded-2xl p-8 text-center border-2 border-yellow-500/40">
              <div className="flex justify-center mb-4">
                <Trophy className="w-16 h-16 text-yellow-500" />
              </div>
              <h3 className="text-3xl font-bold text-yellow-500 mb-4">FŐDÍJ</h3>
              <div className="max-w-md mx-auto">
                <img
                  src={prizes[0].image}
                  alt={prizes[0].name}
                  className="w-full h-64 object-cover rounded-xl mb-4 shadow-xl"
                />
                <h4 className="text-2xl font-bold text-white mb-2">{prizes[0].name}</h4>
                <p className="text-lg text-gray-300">{prizes[0].description}</p>
              </div>
            </div>
          </div>

          {/* Secondary Prizes */}
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {prizes.slice(1).map((prize) => (
              <div key={prize.id} className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/30 hover:border-blue-500/50 transition-all hover:shadow-xl" data-aos="fade-up" data-aos-delay={prize.id * 50}>
                <img
                  src={prize.image}
                  alt={prize.name}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Gift className="w-4 h-4 text-blue-500 flex-shrink-0" />
                    <h4 className="font-bold text-white text-sm">{prize.name}</h4>
                  </div>
                  <p className="text-gray-400 text-xs">{prize.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-400 text-lg">
              ...és még sok más értékes technológiai eszköz és kiegészítő!
            </p>
          </div>
        </div>

        {/* Main Sponsor */}
        <div className="mb-16" data-aos="fade-up">
          <div className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 backdrop-blur-sm rounded-2xl p-8 text-center border border-blue-500/30">
            <div className="flex justify-center mb-4">
              <div className="bg-blue-500/30 p-4 rounded-full">
                <Building2 className="w-12 h-12 text-blue-400" />
              </div>
            </div>
            <h2 className="text-3xl font-bold mb-4 text-white">Szervező</h2>
            <div className="max-w-2xl mx-auto">
              <h3 className="text-4xl font-bold mb-4 text-blue-400">EU-Tech Informatika Kft.</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                Büszkén mutatjuk be ezt a jótékonysági kezdeményezést. Cégünk elkötelezett amellett, hogy segítse
                a helyi közösséget és lehetőséget biztosítson azoknak a gyerekeknek, akiknek a legnagyobb szükségük van rá.
                A technológia nemcsak üzletünk, hanem hivatásunk is - hiszünk abban, hogy minden gyermek megérdemli a
                lehetőséget, hogy megismerje és használja a modern technológiát.
              </p>
            </div>
          </div>
        </div>

        {/* Donors */}
        <div className="mb-16" data-aos="fade-up">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="bg-blue-500/20 p-4 rounded-full border border-blue-500/30">
                <Heart className="w-8 h-8 text-blue-500" />
              </div>
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">Támogatóink és Adományozók</h2>
            <p className="text-xl text-gray-400">Köszönjük minden támogatónknak, aki hozzájárult a projekt sikeréhez!</p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/30">
            <div className="grid md:grid-cols-2 gap-6">
              {donors.map((donor, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-blue-500/10 to-blue-600/10 rounded-xl p-6 border-l-4 border-blue-500 hover:shadow-md transition-all"
                  data-aos="fade-up"
                  data-aos-delay={index * 50}
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-500/20 p-2 rounded-full mt-1">
                      <Heart className="w-5 h-5 text-blue-500" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-white mb-1">{donor.name}</h3>
                      <p className="text-gray-400">{donor.type}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center p-6 bg-gradient-to-r from-blue-500/10 to-blue-600/10 rounded-xl border border-blue-500/20">
              <p className="text-lg text-gray-300 font-semibold">
                Köszönjük minden támogatónk nagylelkűségét! Az Önök segítségével valóra válthatjuk ezt a nemes célt.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/30" data-aos="fade-up">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4 text-white">Csatlakozz Te is!</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Ha Te is szeretnél részt venni ebben a jótékonysági projektben, akár tombolajegy vásárlással,
              akár adománnyal, vagy szeretnél többet megtudni a kezdeményezésről, kérjük vedd fel velünk a kapcsolatot!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 text-center border border-gray-700/30">
              <h3 className="font-bold text-xl mb-4 text-white">Elérhetőségek</h3>
              <div className="space-y-3 text-gray-300">
                <p><strong className="text-blue-400">Telefon:</strong> +36 20 414 5561</p>
                <p><strong className="text-blue-400">Email:</strong> informatika@eu-tech.hu</p>
                <p><strong className="text-blue-400">Cím:</strong> Eu-Tech Informatika Kft.</p>
              </div>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 text-center border border-gray-700/30">
              <h3 className="font-bold text-xl mb-4 text-white">Támogatási Lehetőségek</h3>
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
            <p className="text-xl font-semibold text-blue-400">
              Együtt többet tehetünk! Minden kis segítség számít!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jotekonysag;