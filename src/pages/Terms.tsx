import React from 'react';
import { FileText, Scale, AlertTriangle, CheckCircle, Clock, Euro } from 'lucide-react';

const Terms = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white" data-aos="fade-up">
              Általános Szerződési Feltételek
            </h1>
            <p className="text-gray-400 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
              Az Eu-Tech Informatika Kft általános szerződési feltételei
            </p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/30 mb-8" data-aos="fade-up">
            <div className="flex items-center mb-6">
              <FileText className="text-blue-500 mr-4" size={32} />
              <div>
                <h2 className="text-2xl font-bold text-white">Általános Szerződési Feltételek</h2>
                <p className="text-gray-400">Hatályos: 2024. március 1-től</p>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed">
              Jelen Általános Szerződési Feltételek (továbbiakban: ÁSZF) az Eu-Tech Informatika Kft 
              (továbbiakban: Szolgáltató) által nyújtott informatikai szolgáltatásokra vonatkoznak.
            </p>
          </div>

          <div className="space-y-8">
            {/* Szolgáltató adatai */}
            <section className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/30" data-aos="fade-up">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Scale className="text-blue-500 mr-3" size={24} />
                1. A Szolgáltató adatai
              </h3>
              <div className="text-gray-300 space-y-2">
                <p><strong>Cégnév:</strong> Eu-Tech Informatika Kft</p>
                <p><strong>Székhely:</strong> 8300 Tapolca, Berzsenyi Dániel Utca 21/D</p>
                <p><strong>Cégjegyzékszám:</strong> 19 09 506849</p>
                <p><strong>Adószám:</strong> 12997194-2-19</p>
                <p><strong>E-mail:</strong> informatika@eu-tech.hu</p>
                <p><strong>Telefon:</strong> +36 20 414 5561</p>
                <p><strong>Nyitvatartás:</strong> H-P: 9:00-17:00, Sz: 9:00-12:00</p>
              </div>
            </section>

            {/* Szolgáltatások */}
            <section className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/30" data-aos="fade-up">
              <h3 className="text-xl font-bold text-white mb-4">2. Szolgáltatások köre</h3>
              <div className="text-gray-300 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-700/30 p-4 rounded-lg">
                    <h4 className="text-blue-500 font-semibold mb-2">Szerviz szolgáltatások</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Számítógép és laptop javítás</li>
                      <li>• Vírusirtás és adatmentés</li>
                      <li>• Szoftver telepítés</li>
                      <li>• Hardver csere és bővítés</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-700/30 p-4 rounded-lg">
                    <h4 className="text-blue-500 font-semibold mb-2">Hálózati szolgáltatások</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Hálózatépítés és -konfigurálás</li>
                      <li>• WiFi hálózatok telepítése</li>
                      <li>• Szerverüzemeltetés</li>
                      <li>• Biztonsági megoldások</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-700/30 p-4 rounded-lg">
                    <h4 className="text-blue-500 font-semibold mb-2">Speciális szolgáltatások</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Lézer gravírozás fémre</li>
                      <li>• E-roller szerviz</li>
                      <li>• iOS eszközök javítása</li>
                      <li>• Telefon javítás</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-700/30 p-4 rounded-lg">
                    <h4 className="text-blue-500 font-semibold mb-2">Értékesítés</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Számítógép alkatrészek</li>
                      <li>• Kész számítógépek</li>
                      <li>• Nyomtató kellékek</li>
                      <li>• Szoftverek és licencek</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Szerződéskötés */}
            <section className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/30" data-aos="fade-up">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <CheckCircle className="text-blue-500 mr-3" size={24} />
                3. Szerződéskötés menete
              </h3>
              <div className="text-gray-300 space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">1</div>
                    <div>
                      <h4 className="font-semibold text-white">Megkeresés</h4>
                      <p className="text-sm">Ügyfél megkeresése telefonon, e-mailben vagy személyesen</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">2</div>
                    <div>
                      <h4 className="font-semibold text-white">Árajánlat</h4>
                      <p className="text-sm">Részletes árajánlat készítése a szolgáltatásra</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">3</div>
                    <div>
                      <h4 className="font-semibold text-white">Elfogadás</h4>
                      <p className="text-sm">Ügyfél elfogadja az árajánlatot és a szerződési feltételeket</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">4</div>
                    <div>
                      <h4 className="font-semibold text-white">Teljesítés</h4>
                      <p className="text-sm">Szolgáltatás elvégzése a megbeszélt feltételek szerint</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Árak és fizetés */}
            <section className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/30" data-aos="fade-up">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Euro className="text-blue-500 mr-3" size={24} />
                4. Árak és fizetési feltételek
              </h3>
              <div className="text-gray-300 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-blue-500 font-semibold mb-3">Árak</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Az árak bruttó árak (ÁFA-val együtt)</li>
                      <li>• Az árak a szolgáltatás elvégzéséig érvényesek</li>
                      <li>• Alkatrész árak a beszerzési ár függvényében változhatnak</li>
                      <li>• Kiszállási díj: 3.000 Ft (Tapolca), 500 Ft/km (helyközi)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-blue-500 font-semibold mb-3">Fizetési módok</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Készpénz (átvételkor)</li>
                      <li>• Bankkártya (üzletben)</li>
                      <li>• Átutalás (előre vagy utólag)</li>
                      <li>• Fizetési határidő: 8 nap</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
                  <p className="text-yellow-400 font-semibold mb-2">Fontos tudnivalók</p>
                  <ul className="text-sm space-y-1">
                    <li>• Diagnosztikai díj: 4.990 Ft (javítás esetén beszámítjuk)</li>
                    <li>• Minimális javítási egység: 30 perc</li>
                    <li>• Sürgősségi felár: +50% a munkadíjra</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Garancia */}
            <section className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/30" data-aos="fade-up">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Clock className="text-blue-500 mr-3" size={24} />
                5. Garancia és szavatosság
              </h3>
              <div className="text-gray-300 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-700/30 p-4 rounded-lg">
                    <h4 className="text-blue-500 font-semibold mb-2">Javítási garancia</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Elvégzett munkára: 30 nap</li>
                      <li>• Beépített alkatrészre: 6 hónap</li>
                      <li>• Új számítógépre: 1 év</li>
                      <li>• Csak ugyanazon hiba esetén érvényes</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-700/30 p-4 rounded-lg">
                    <h4 className="text-blue-500 font-semibold mb-2">Garancia kizárások</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Vírus okozta károk</li>
                      <li>• Helytelen használat</li>
                      <li>• Külső mechanikai sérülés</li>
                      <li>• Folyadék okozta károk</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                  <p className="text-green-400 font-semibold mb-2">Garanciális javítás feltételei</p>
                  <p className="text-sm">
                    A garanciális javításhoz szükséges a számla és a garanciajegy bemutatása. 
                    A garancia csak az eredeti vásárló részére érvényes.
                  </p>
                </div>
              </div>
            </section>

            {/* Felelősség */}
            <section className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/30" data-aos="fade-up">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <AlertTriangle className="text-blue-500 mr-3" size={24} />
                6. Felelősség és kártérítés
              </h3>
              <div className="text-gray-300 space-y-4">
                <div className="space-y-3">
                  <div>
                    <h4 className="text-blue-500 font-semibold mb-2">Szolgáltató felelőssége</h4>
                    <ul className="text-sm space-y-1 ml-4">
                      <li>• Szakszerű munkavégzés biztosítása</li>
                      <li>• Eredeti vagy minőségi alkatrészek használata</li>
                      <li>• Adatvédelmi előírások betartása</li>
                      <li>• Kártérítési felelősség: maximum a szolgáltatás értéke</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-blue-500 font-semibold mb-2">Ügyfél felelőssége</h4>
                    <ul className="text-sm space-y-1 ml-4">
                      <li>• Adatok biztonsági mentése javítás előtt</li>
                      <li>• Valós információk szolgáltatása</li>
                      <li>• Fizetési kötelezettség teljesítése</li>
                      <li>• Eszköz átvétele a megbeszélt időben</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                  <p className="text-red-400 font-semibold mb-2">Fontos figyelmeztetés</p>
                  <p className="text-sm">
                    A Szolgáltató nem vállal felelősséget az adatvesztésért, ezért javasoljuk minden esetben 
                    az adatok előzetes mentését. A javítás során adatvesztés előfordulhat!
                  </p>
                </div>
              </div>
            </section>

            {/* Elállás */}
            <section className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/30" data-aos="fade-up">
              <h3 className="text-xl font-bold text-white mb-4">7. Elállási jog</h3>
              <div className="text-gray-300 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-blue-500 font-semibold mb-2">Fogyasztói szerződések</h4>
                    <p className="text-sm mb-2">
                      Fogyasztó 14 napon belül indoklás nélkül elállhat a szerződéstől, 
                      amennyiben a szolgáltatás még nem kezdődött meg.
                    </p>
                    <p className="text-sm">
                      Megkezdett szolgáltatás esetén az elállás csak a még el nem végzett részre vonatkozik.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-blue-500 font-semibold mb-2">Vállalkozói szerződések</h4>
                    <p className="text-sm">
                      Vállalkozások esetében az elállási jog csak a szerződésben 
                      külön meghatározott esetekben és feltételekkel gyakorolható.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Vitarendezés */}
            <section className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/30" data-aos="fade-up">
              <h3 className="text-xl font-bold text-white mb-4">8. Vitarendezés</h3>
              <div className="text-gray-300 space-y-4">
                <p>
                  Esetleges vitás kérdések rendezésére elsősorban békés megegyezésre törekszünk. 
                  Ennek eredménytelensége esetén:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-700/30 p-4 rounded-lg">
                    <h4 className="text-blue-500 font-semibold mb-2">Fogyasztói jogviták</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Békéltető testület eljárása</li>
                      <li>• Fogyasztóvédelmi hatóság</li>
                      <li>• Illetékes bíróság</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-700/30 p-4 rounded-lg">
                    <h4 className="text-blue-500 font-semibold mb-2">Vállalkozói jogviták</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Tárgyalásos rendezés</li>
                      <li>• Mediáció</li>
                      <li>• Bírósági eljárás</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Záró rendelkezések */}
            <section className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/30" data-aos="fade-up">
              <h3 className="text-xl font-bold text-white mb-4">9. Záró rendelkezések</h3>
              <div className="text-gray-300 space-y-4">
                <ul className="space-y-2 text-sm">
                  <li>• Jelen ÁSZF 2024. március 1-től hatályos</li>
                  <li>• A Szolgáltató fenntartja a jogot az ÁSZF módosítására</li>
                  <li>• Módosításokról az ügyfeleket előzetesen tájékoztatjuk</li>
                  <li>• A szerződésre a magyar jog az irányadó</li>
                  <li>• Illetékes bíróság: Veszprémi Törvényszék</li>
                </ul>
                
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 mt-6">
                  <p className="text-blue-400 font-semibold mb-2">Kapcsolat</p>
                  <p className="text-sm">
                    Kérdéseivel kapcsolatban forduljon hozzánk bizalommal a 
                    informatika@eu-tech.hu e-mail címen vagy a +36 20 414 5561 telefonszámon.
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

export default Terms;