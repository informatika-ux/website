import React from 'react';
import { Award, Users, Target, Heart, Shield, Lightbulb, CheckCircle, Star, Calendar, MapPin, Phone, Mail } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '20+', label: 'Év Tapasztalat', icon: <Calendar className="w-8 h-8 text-blue-500" /> },
    { number: '500+', label: 'Elégedett Ügyfél', icon: <Users className="w-8 h-8 text-green-500" /> },
    { number: '1000+', label: 'Befejezett Projekt', icon: <Award className="w-8 h-8 text-purple-500" /> },
    { number: '24/7', label: 'Támogatás', icon: <Shield className="w-8 h-8 text-orange-500" /> }
  ];

  const values = [
    {
      icon: <Shield className="w-8 h-8 text-blue-500" />,
      title: 'Megbízhatóság',
      description: 'Amit ígérünk, azt teljesítjük. Minden projektünket határidőre és a legmagasabb minőségben szállítjuk.'
    },
    {
      icon: <Star className="w-8 h-8 text-yellow-500" />,
      title: 'Szakértelem',
      description: 'Folyamatosan képezzük magunkat a legújabb technológiákban, hogy mindig a legjobb megoldásokat kínálhassuk.'
    },
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: 'Ügyfélközpontúság',
      description: 'Az ügyfél igényei mindig az első helyen állnak. Személyre szabott megoldásokat dolgozunk ki minden esetben.'
    }
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white" data-aos="fade-up">
            Rólunk - <span className="text-blue-500">Eu-Tech Informatika</span>
          </h1>
          <p className="text-gray-400 max-w-4xl mx-auto text-lg leading-relaxed" data-aos="fade-up" data-aos-delay="100">
            Több mint 20 éves tapasztalattal rendelkező informatikai vállalkozás vagyunk, amely elkötelezett 
            a legmagasabb színvonalú szolgáltatások nyújtása mellett.
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

        {/* Team Section - Main Focus */}
        <div className="mb-24" data-aos="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white">
              Csapat<span className="text-blue-500">unk</span>
            </h2>
            <p className="text-gray-400 max-w-4xl mx-auto text-xl leading-relaxed">
              Tapasztalt szakemberekből álló csapatunk minden tagja elkötelezett a kiváló minőségű 
              szolgáltatások nyújtása mellett. Több generációs tapasztalatunkat ötvözzük a modern 
              technológiai megoldásokkal.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl border border-gray-700/30 hover:border-blue-500/50 transition-all duration-500 transform hover:-translate-y-4 hover:shadow-blue-500/20">
              <div className="relative">
                <img 
                  src="/images/team-alexander.jpg" 
                  alt="Laksz Alexander" 
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold mb-2 text-white">Laksz Alexander</h3>
                  <p className="text-blue-400 mb-3 font-semibold text-lg">Üzletvezető</p>
                </div>
              </div>
              <div className="p-6">
              <p className="text-gray-300 text-sm leading-relaxed">
                Aszófő környékéről indulva gyorsan és megbízhatóan áll rendelkezésre a Balaton-parti településeken, valamint Veszprém térségében is. Legyen szó helyszíni segítségnyújtásról vagy technikai támogatásról.
              </p>
                <div className="mt-4 flex items-center text-blue-400">
                  <MapPin size={16} className="mr-2" />
                  <span className="text-sm">Aszófő</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl border border-gray-700/30 hover:border-blue-500/50 transition-all duration-500 transform hover:-translate-y-4 hover:shadow-blue-500/20">
              <div className="relative">
                <img 
                  src="/images/team-csaba.jpg" 
                  alt="Horváth Csaba" 
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold mb-2 text-white">Horváth Csaba</h3>
                  <p className="text-blue-400 mb-3 font-semibold text-lg">Ügyvezető(alapító)</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-300 text-sm leading-relaxed">
                  Tapolcáról dolgozom, elsősorban a szerverekkel, hálózatokkal és biztonsági megoldásokkal foglalkozom. 
                  A háttérben biztosítom, hogy minden rendszereink stabilan és megbízhatóan működjenek.
                </p>
                <div className="mt-4 flex items-center text-blue-400">
                  <MapPin size={16} className="mr-2" />
                  <span className="text-sm">Tapolca</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl border border-gray-700/30 hover:border-blue-500/50 transition-all duration-500 transform hover:-translate-y-4 hover:shadow-blue-500/20">
              <div className="relative">
                <img 
                  src="/images/team-szabolcs.jpg" 
                  alt="Gulyás Szabolcs" 
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold mb-2 text-white">Gulyás Szabolcs</h3>
                  <p className="text-blue-400 mb-3 font-semibold text-lg">Informatikai Rendszertechnikus</p>
                </div>
              </div>
              <div className="p-6">
              <p className="text-gray-300 text-sm leading-relaxed">
                Keszthely és környékén gyorsan elérhető vagyok. Legyen szó otthoni vagy céges problémáról, 
                mindig igyekszem személyre szabott és hatékony megoldással segíteni.
              </p>
                <div className="mt-4 flex items-center text-blue-400">
                  <MapPin size={16} className="mr-2" />
                  <span className="text-sm">Keszthely</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl border border-gray-700/30 hover:border-blue-500/50 transition-all duration-500 transform hover:-translate-y-4 hover:shadow-blue-500/20">
              <div className="relative">
                <img 
                  src="/images/team-daniel.jpg" 
                  alt="Gergely Dániel" 
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold mb-2 text-white">Gergely Dániel</h3>
                  <p className="text-blue-400 mb-3 font-semibold text-lg">Informatikai Rendszertechnikus</p>
                </div>
              </div>
              <div className="p-6">
              <p className="text-gray-300 text-sm leading-relaxed">
                Tapolcai székhellyel főként helyszíni szervizelést és technikai támogatást végzek. 
                Gyorsan reagálok, ha sürgős problémád van – legyen az hálózat, gép vagy bármi más.
              </p>
                <div className="mt-4 flex items-center text-blue-400">
                  <MapPin size={16} className="mr-2" />
                  <span className="text-sm">Tapolca</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Story Section - Simplified */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative" data-aos="fade-right">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl transform rotate-3"></div>
            <img 
              src="/images/about-team-photo.jpg" 
              alt="Eu-Tech Informatika csapata" 
              className="relative rounded-2xl shadow-2xl w-full h-auto transform -rotate-1 hover:rotate-0 transition-transform duration-500"
            />
          </div>
          
          <div data-aos="fade-left">
            <h2 className="text-4xl font-bold mb-8 text-white">Történetünk</h2>
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p className="text-lg">
                Az Eu-Tech Informatika Kft 2003-ben kezdte meg működését Tapolcán, azzal a céllal, 
                hogy magas színvonalú informatikai szolgáltatásokat nyújtson a régió 
                vállalkozásai és magánszemélyek számára.
              </p>
              <p>
                Büszkék vagyunk arra, hogy ügyfeleinket nemcsak termékekkel, hanem szaktudással és 
                hosszú távú partnerséggel is támogatjuk. Csapatunk folyamatosan képzi magát, 
                hogy mindig a legújabb technológiai trendekkel lépést tudjunk tartani.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                <div className="text-2xl font-bold text-blue-500">2003</div>
                <div className="text-gray-400 text-sm">Alapítás éve</div>
              </div>
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                <div className="text-2xl font-bold text-green-500">500+</div>
                <div className="text-gray-400 text-sm">Elégedett ügyfél</div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section - Simplified */}
        <div className="mb-24" data-aos="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-white">Értékeink</h2>
            <p className="text-gray-400 max-w-3xl mx-auto text-lg">
              Ezek az alapelvek vezérelnek minket minden nap, és ezek alapján építjük fel kapcsolatainkat ügyfeleinkkel.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700/30 hover:border-blue-500/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-12 border border-blue-500/20" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-6 text-white">Készen áll az együttműködésre?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
            Lépjen kapcsolatba velünk még ma, és fedezze fel, hogyan segíthetünk 
            vállalkozása informatikai kihívásainak megoldásában!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center justify-center transform hover:scale-105"
            >
              <Phone size={20} className="mr-2" />
              Kapcsolatfelvétel
            </a>
            <a
              href="/services/pricing"
              className="bg-transparent border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-medium py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center justify-center"
            >
              <Mail size={20} className="mr-2" />
              Árajánlat Kérése
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;