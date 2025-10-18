import React, { useState } from 'react';
import { Cookie, Settings, Eye, BarChart, Shield, CheckCircle, X } from 'lucide-react';

const Cookies = () => {
  const [cookieSettings, setCookieSettings] = useState({
    necessary: true,
    functional: true,
    analytics: false,
    marketing: false
  });

  const handleCookieToggle = (type: string) => {
    if (type === 'necessary') return; // Necessary cookies cannot be disabled
    
    setCookieSettings(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  const saveCookieSettings = () => {
    // Here you would typically save the settings to localStorage or send to server
    localStorage.setItem('cookieSettings', JSON.stringify(cookieSettings));
    alert('Cookie beállítások mentve!');
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white" data-aos="fade-up">
              Cookie Szabályzat
            </h1>
            <p className="text-gray-400 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
              Tájékoztató a weboldalunkon használt cookie-król
            </p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/30 mb-8" data-aos="fade-up">
            <div className="flex items-center mb-6">
              <Cookie className="text-blue-500 mr-4" size={32} />
              <div>
                <h2 className="text-2xl font-bold text-white">Mi az a cookie?</h2>
                <p className="text-gray-400">Utolsó frissítés: 2024. március 1.</p>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed">
              A cookie-k kis szöveges fájlok, amelyeket a weboldal az Ön böngészőjében tárol. 
              Ezek segítenek nekünk a weboldal működésének javításában, a felhasználói élmény 
              személyre szabásában és a weboldal teljesítményének mérésében.
            </p>
          </div>

          <div className="space-y-8">
            {/* Cookie típusok */}
            <section className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/30" data-aos="fade-up">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <Settings className="text-blue-500 mr-3" size={24} />
                Cookie típusok és beállítások
              </h3>
              
              <div className="space-y-6">
                {/* Necessary Cookies */}
                <div className="bg-gray-700/30 p-6 rounded-lg">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <Shield className="text-green-500 mr-3" size={24} />
                      <div>
                        <h4 className="text-lg font-semibold text-white">Szükséges cookie-k</h4>
                        <p className="text-gray-400 text-sm">Ezek a cookie-k elengedhetetlenek a weboldal működéséhez</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">Mindig aktív</span>
                      <CheckCircle className="text-green-500" size={20} />
                    </div>
                  </div>
                  <div className="text-gray-300 text-sm">
                    <p className="mb-2"><strong>Cél:</strong> Alapvető weboldal funkciók biztosítása</p>
                    <p className="mb-2"><strong>Példák:</strong> Munkamenet azonosítás, biztonsági beállítások, nyelv preferenciák</p>
                    <p><strong>Tárolási idő:</strong> Munkamenet végéig vagy 1 év</p>
                  </div>
                </div>

                {/* Functional Cookies */}
                <div className="bg-gray-700/30 p-6 rounded-lg">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <Settings className="text-blue-500 mr-3" size={24} />
                      <div>
                        <h4 className="text-lg font-semibold text-white">Funkcionális cookie-k</h4>
                        <p className="text-gray-400 text-sm">Javítják a weboldal funkcionalitását és személyre szabást</p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleCookieToggle('functional')}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        cookieSettings.functional ? 'bg-blue-500' : 'bg-gray-600'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          cookieSettings.functional ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                  <div className="text-gray-300 text-sm">
                    <p className="mb-2"><strong>Cél:</strong> Felhasználói preferenciák megjegyzése</p>
                    <p className="mb-2"><strong>Példák:</strong> Téma beállítások, űrlap adatok mentése, chat widget</p>
                    <p><strong>Tárolási idő:</strong> 30 nap - 1 év</p>
                  </div>
                </div>

                {/* Analytics Cookies */}
                <div className="bg-gray-700/30 p-6 rounded-lg">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <BarChart className="text-yellow-500 mr-3" size={24} />
                      <div>
                        <h4 className="text-lg font-semibold text-white">Analitikai cookie-k</h4>
                        <p className="text-gray-400 text-sm">Segítenek megérteni, hogyan használják a látogatók a weboldalt</p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleCookieToggle('analytics')}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        cookieSettings.analytics ? 'bg-blue-500' : 'bg-gray-600'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          cookieSettings.analytics ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                  <div className="text-gray-300 text-sm">
                    <p className="mb-2"><strong>Cél:</strong> Weboldal teljesítmény és használat mérése</p>
                    <p className="mb-2"><strong>Példák:</strong> Google Analytics, látogatottság mérése, heatmap</p>
                    <p><strong>Tárolási idő:</strong> 2 év</p>
                  </div>
                </div>

                {/* Marketing Cookies */}
                <div className="bg-gray-700/30 p-6 rounded-lg">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <Eye className="text-purple-500 mr-3" size={24} />
                      <div>
                        <h4 className="text-lg font-semibold text-white">Marketing cookie-k</h4>
                        <p className="text-gray-400 text-sm">Személyre szabott hirdetések megjelenítésére szolgálnak</p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleCookieToggle('marketing')}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        cookieSettings.marketing ? 'bg-blue-500' : 'bg-gray-600'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          cookieSettings.marketing ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                  <div className="text-gray-300 text-sm">
                    <p className="mb-2"><strong>Cél:</strong> Releváns hirdetések megjelenítése</p>
                    <p className="mb-2"><strong>Példák:</strong> Facebook Pixel, Google Ads, retargeting</p>
                    <p><strong>Tárolási idő:</strong> 30 nap - 2 év</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <button
                  onClick={saveCookieSettings}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 mr-4"
                >
                  Beállítások mentése
                </button>
                <button
                  onClick={() => setCookieSettings({ necessary: true, functional: false, analytics: false, marketing: false })}
                  className="bg-gray-600 hover:bg-gray-700 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300"
                >
                  Csak szükséges cookie-k
                </button>
              </div>
            </section>

            {/* Használt cookie-k részletesen */}
            <section className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/30" data-aos="fade-up">
              <h3 className="text-xl font-bold text-white mb-6">Használt cookie-k részletes listája</h3>
              
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left py-3 px-4 text-blue-500 font-semibold">Cookie neve</th>
                      <th className="text-left py-3 px-4 text-blue-500 font-semibold">Típus</th>
                      <th className="text-left py-3 px-4 text-blue-500 font-semibold">Cél</th>
                      <th className="text-left py-3 px-4 text-blue-500 font-semibold">Lejárat</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-gray-700/50">
                      <td className="py-3 px-4">PHPSESSID</td>
                      <td className="py-3 px-4">Szükséges</td>
                      <td className="py-3 px-4">Munkamenet azonosítás</td>
                      <td className="py-3 px-4">Munkamenet vége</td>
                    </tr>
                    <tr className="border-b border-gray-700/50">
                      <td className="py-3 px-4">cookieConsent</td>
                      <td className="py-3 px-4">Szükséges</td>
                      <td className="py-3 px-4">Cookie hozzájárulás tárolása</td>
                      <td className="py-3 px-4">1 év</td>
                    </tr>
                    <tr className="border-b border-gray-700/50">
                      <td className="py-3 px-4">theme</td>
                      <td className="py-3 px-4">Funkcionális</td>
                      <td className="py-3 px-4">Téma beállítás megjegyzése</td>
                      <td className="py-3 px-4">30 nap</td>
                    </tr>
                    <tr className="border-b border-gray-700/50">
                      <td className="py-3 px-4">_ga</td>
                      <td className="py-3 px-4">Analitikai</td>
                      <td className="py-3 px-4">Google Analytics - látogató azonosítás</td>
                      <td className="py-3 px-4">2 év</td>
                    </tr>
                    <tr className="border-b border-gray-700/50">
                      <td className="py-3 px-4">_gid</td>
                      <td className="py-3 px-4">Analitikai</td>
                      <td className="py-3 px-4">Google Analytics - munkamenet azonosítás</td>
                      <td className="py-3 px-4">24 óra</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">_fbp</td>
                      <td className="py-3 px-4">Marketing</td>
                      <td className="py-3 px-4">Facebook Pixel - konverzió követés</td>
                      <td className="py-3 px-4">90 nap</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Cookie-k kezelése */}
            <section className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/30" data-aos="fade-up">
              <h3 className="text-xl font-bold text-white mb-6">Cookie-k kezelése és törlése</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-blue-500 font-semibold mb-3">Böngésző beállítások</h4>
                  <p className="text-gray-300 text-sm mb-4">
                    A legtöbb böngészőben beállíthatja, hogy elfogadja-e a cookie-kat, 
                    vagy értesítést kapjon azok elhelyezésekor.
                  </p>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Chrome: Beállítások → Adatvédelem és biztonság → Cookie-k</li>
                    <li>• Firefox: Beállítások → Adatvédelem és biztonság</li>
                    <li>• Safari: Beállítások → Adatvédelem</li>
                    <li>• Edge: Beállítások → Cookie-k és webhelyek engedélyei</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-blue-500 font-semibold mb-3">Cookie-k törlése</h4>
                  <p className="text-gray-300 text-sm mb-4">
                    Bármikor törölheti a már elhelyezett cookie-kat böngészője beállításaiban.
                  </p>
                  <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
                    <p className="text-yellow-400 text-sm">
                      <strong>Figyelem:</strong> A cookie-k törlése vagy letiltása befolyásolhatja 
                      a weboldal működését és felhasználói élményt.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Harmadik fél cookie-k */}
            <section className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/30" data-aos="fade-up">
              <h3 className="text-xl font-bold text-white mb-6">Harmadik fél cookie-k</h3>
              
              <div className="space-y-4">
                <p className="text-gray-300">
                  Weboldalunk harmadik fél szolgáltatásokat is használ, amelyek saját cookie-kat helyezhetnek el:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-700/30 p-4 rounded-lg">
                    <h4 className="text-blue-500 font-semibold mb-2">Google Analytics</h4>
                    <p className="text-gray-300 text-sm mb-2">
                      Weboldal látogatottság és felhasználói viselkedés elemzése.
                    </p>
                    <a 
                      href="https://policies.google.com/privacy" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-400 text-sm hover:underline"
                    >
                      Google adatvédelmi szabályzat →
                    </a>
                  </div>
                  
                  <div className="bg-gray-700/30 p-4 rounded-lg">
                    <h4 className="text-blue-500 font-semibold mb-2">Facebook Pixel</h4>
                    <p className="text-gray-300 text-sm mb-2">
                      Konverzió követés és hirdetések optimalizálása.
                    </p>
                    <a 
                      href="https://www.facebook.com/privacy/explanation" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-400 text-sm hover:underline"
                    >
                      Facebook adatvédelmi szabályzat →
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* Kapcsolat */}
            <section className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/30" data-aos="fade-up">
              <h3 className="text-xl font-bold text-white mb-6">Kapcsolat és további információk</h3>
              
              <div className="text-gray-300 space-y-4">
                <p>
                  Ha kérdése van a cookie-k használatával kapcsolatban, vagy módosítani szeretné 
                  a beállításait, vegye fel velünk a kapcsolatot:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p><strong>E-mail:</strong> informatika@eu-tech.hu</p>
                    <p><strong>Telefon:</strong> +36 20 414 5561</p>
                    <p><strong>Cím:</strong> 8300 Tapolca, Berzsenyi Dániel Utca 21/D</p>
                  </div>
                  
                  <div>
                    <p><strong>Nyitvatartás:</strong></p>
                    <p>Hétfő-Péntek: 9:00-17:00</p>
                    <p>Szombat: 9:00-12:00</p>
                    <p>Vasárnap: zárva</p>
                  </div>
                </div>
                
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 mt-6">
                  <p className="text-blue-400 font-semibold mb-2">Szabályzat frissítése</p>
                  <p className="text-sm">
                    Fenntartjuk a jogot jelen cookie szabályzat módosítására. 
                    A változásokról weboldalunkon tájékoztatjuk látogatóinkat.
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

export default Cookies;