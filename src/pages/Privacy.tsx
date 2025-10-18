import React from 'react';
import { Shield, Eye, Lock, Database, Mail, Phone } from 'lucide-react';

const Privacy = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white" data-aos="fade-up">
              Adatvédelmi Szabályzat
            </h1>
            <p className="text-gray-400 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
              Az Eu-Tech Informatika Kft adatvédelmi szabályzata
            </p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/30 mb-8" data-aos="fade-up">
            <div className="flex items-center mb-6">
              <Shield className="text-blue-500 mr-4" size={32} />
              <div>
                <h2 className="text-2xl font-bold text-white">Adatvédelmi Kötelezettségvállalásunk</h2>
                <p className="text-gray-400">Utolsó frissítés: 2024. március 1.</p>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed">
              Az Eu-Tech Informatika Kft (továbbiakban: "Társaság", "mi", "minket", "miénk") elkötelezett 
              az Ön személyes adatainak védelme iránt. Ez az adatvédelmi szabályzat leírja, hogyan gyűjtjük, 
              használjuk, tároljuk és védjük az Ön személyes adatait.
            </p>
          </div>

          <div className="space-y-8">
            {/* Adatkezelő adatai */}
            <section className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/30" data-aos="fade-up">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Database className="text-blue-500 mr-3" size={24} />
                1. Adatkezelő adatai
              </h3>
              <div className="text-gray-300 space-y-2">
                <p><strong>Cégnév:</strong> Eu-Tech Informatika Kft</p>
                <p><strong>Székhely:</strong> 8300 Tapolca, Berzsenyi Dániel Utca 21/D</p>
                <p><strong>Cégjegyzékszám:</strong> 19 09 506849</p>
                <p><strong>Adószám:</strong> 12997194-2-19</p>
                <p><strong>E-mail:</strong> informatika@eu-tech.hu</p>
                <p><strong>Telefon:</strong> +36 20 414 5561</p>
              </div>
            </section>

            {/* Gyűjtött adatok */}
            <section className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/30" data-aos="fade-up">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Eye className="text-blue-500 mr-3" size={24} />
                2. Milyen adatokat gyűjtünk
              </h3>
              <div className="text-gray-300 space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-blue-500 mb-2">Kapcsolatfelvételi adatok:</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Név</li>
                    <li>E-mail cím</li>
                    <li>Telefonszám</li>
                    <li>Üzenet tartalma</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-blue-500 mb-2">Szolgáltatás nyújtásához szükséges adatok:</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Számlázási adatok (név, cím, adószám)</li>
                    <li>Eszköz adatok (szerviz esetén)</li>
                    <li>Technikai specifikációk</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-blue-500 mb-2">Automatikusan gyűjtött adatok:</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>IP cím</li>
                    <li>Böngésző típusa és verziója</li>
                    <li>Operációs rendszer</li>
                    <li>Látogatott oldalak</li>
                    <li>Látogatás időpontja</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Adatkezelés célja */}
            <section className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/30" data-aos="fade-up">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Lock className="text-blue-500 mr-3" size={24} />
                3. Adatkezelés célja és jogalapja
              </h3>
              <div className="text-gray-300 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-700/30 p-4 rounded-lg">
                    <h4 className="text-blue-500 font-semibold mb-2">Kapcsolatfelvétel kezelése</h4>
                    <p className="text-sm">Jogalap: Hozzájárulás (GDPR 6. cikk (1) a) pont)</p>
                    <p className="text-sm mt-2">Cél: Megkeresések megválaszolása, ajánlatok készítése</p>
                  </div>
                  
                  <div className="bg-gray-700/30 p-4 rounded-lg">
                    <h4 className="text-blue-500 font-semibold mb-2">Szolgáltatás nyújtása</h4>
                    <p className="text-sm">Jogalap: Szerződés teljesítése (GDPR 6. cikk (1) b) pont)</p>
                    <p className="text-sm mt-2">Cél: Megrendelt szolgáltatások elvégzése</p>
                  </div>
                  
                  <div className="bg-gray-700/30 p-4 rounded-lg">
                    <h4 className="text-blue-500 font-semibold mb-2">Számlázás</h4>
                    <p className="text-sm">Jogalap: Jogi kötelezettség (GDPR 6. cikk (1) c) pont)</p>
                    <p className="text-sm mt-2">Cél: Számviteli kötelezettségek teljesítése</p>
                  </div>
                  
                  <div className="bg-gray-700/30 p-4 rounded-lg">
                    <h4 className="text-blue-500 font-semibold mb-2">Weboldal működtetése</h4>
                    <p className="text-sm">Jogalap: Jogos érdek (GDPR 6. cikk (1) f) pont)</p>
                    <p className="text-sm mt-2">Cél: Weboldal optimalizálása, biztonság</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Adattárolás */}
            <section className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/30" data-aos="fade-up">
              <h3 className="text-xl font-bold text-white mb-4">4. Adattárolás időtartama</h3>
              <div className="text-gray-300 space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-700/30">
                  <span>Kapcsolatfelvételi adatok</span>
                  <span className="text-blue-500">2 év vagy hozzájárulás visszavonásáig</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-700/30">
                  <span>Szerződéses adatok</span>
                  <span className="text-blue-500">Szerződés megszűnése + 5 év</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-700/30">
                  <span>Számlázási adatok</span>
                  <span className="text-blue-500">8 év (számviteli törvény)</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span>Weboldal látogatási adatok</span>
                  <span className="text-blue-500">1 év</span>
                </div>
              </div>
            </section>

            {/* Jogok */}
            <section className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/30" data-aos="fade-up">
              <h3 className="text-xl font-bold text-white mb-4">5. Az Ön jogai</h3>
              <div className="text-gray-300 space-y-4">
                <p>A GDPR alapján Önnek joga van:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-700/30 p-4 rounded-lg">
                    <h4 className="text-blue-500 font-semibold mb-2">Tájékoztatáshoz való jog</h4>
                    <p className="text-sm">Információ kérése az adatkezelésről</p>
                  </div>
                  <div className="bg-gray-700/30 p-4 rounded-lg">
                    <h4 className="text-blue-500 font-semibold mb-2">Hozzáférési jog</h4>
                    <p className="text-sm">Betekintés a kezelt adatokba</p>
                  </div>
                  <div className="bg-gray-700/30 p-4 rounded-lg">
                    <h4 className="text-blue-500 font-semibold mb-2">Helyesbítési jog</h4>
                    <p className="text-sm">Hibás adatok javíttatása</p>
                  </div>
                  <div className="bg-gray-700/30 p-4 rounded-lg">
                    <h4 className="text-blue-500 font-semibold mb-2">Törlési jog</h4>
                    <p className="text-sm">Adatok törlésének kérése</p>
                  </div>
                  <div className="bg-gray-700/30 p-4 rounded-lg">
                    <h4 className="text-blue-500 font-semibold mb-2">Korlátozási jog</h4>
                    <p className="text-sm">Adatkezelés korlátozása</p>
                  </div>
                  <div className="bg-gray-700/30 p-4 rounded-lg">
                    <h4 className="text-blue-500 font-semibold mb-2">Hordozhatóság joga</h4>
                    <p className="text-sm">Adatok átvitele másik szolgáltatóhoz</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Kapcsolat */}
            <section className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/30" data-aos="fade-up">
              <h3 className="text-xl font-bold text-white mb-4">6. Kapcsolatfelvétel</h3>
              <div className="text-gray-300 space-y-4">
                <p>Adatvédelmi kérdéseivel kapcsolatban forduljon hozzánk bizalommal:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-center">
                    <Mail className="text-blue-500 mr-3" size={20} />
                    <div>
                      <p className="font-semibold">E-mail</p>
                      <p>informatika@eu-tech.hu</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone className="text-blue-500 mr-3" size={20} />
                    <div>
                      <p className="font-semibold">Telefon</p>
                      <p>+36 20 414 5561</p>
                    </div>
                  </div>
                </div>
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 mt-6">
                  <p className="text-blue-400 font-semibold mb-2">Panasztétel joga</p>
                  <p className="text-sm">
                    Amennyiben úgy érzi, hogy adatkezelésünk sérti az Ön jogait, panaszt tehet a 
                    Nemzeti Adatvédelmi és Információszabadság Hatóságnál (NAIH).
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;