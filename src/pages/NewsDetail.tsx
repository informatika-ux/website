import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, ArrowLeft, Tag } from 'lucide-react';

const NewsDetail = () => {
  const { slug } = useParams();

  const newsArticles = {
    'uj-it-tamogatasi-csomagok': {
      id: 1,
      title: 'Új IT támogatási csomagok kis- és középvállalkozások számára',
      date: '2024. március 15.',
      category: 'Hírek',
      image: '/images/work-network-2.jpg',
      content: `
        <p>Örömmel jelentjük be, hogy 2024 márciusától elérhetők vadonatúj IT támogatási csomagjaink, melyeket kifejezetten kis- és középvállalkozások igényeire szabva alakítottunk ki.</p>
        
        <h3>Miért éri meg váltani?</h3>
        <p>Tapasztalataink szerint sok cég nem rendelkezik megfelelő informatikai háttértámogatással, ami a napi működés során problémákhoz, leállásokhoz és adatvesztéshez vezethet. Új csomagjaink ezek megelőzésére kínálnak hatékony megoldásokat.</p>
        
        <h3>Főbb jellemzők:</h3>
        <ul>
          <li>Proaktív rendszerfelügyelet 24/7</li>
          <li>Gyors reagálási idő akár 2 órán belül</li>
          <li>Távoli és helyszíni támogatás</li>
          <li>Biztonsági mentéskezelés és adatvédelem</li>
          <li>Licenc- és eszközmenedzsment</li>
        </ul>

        <h3>Csomagváltozatok</h3>
        <p>Három különböző szint közül választhat:</p>
        <ul>
          <li><strong>Alap:</strong> alapvető távoli segítségnyújtás és rendszerfigyelés</li>
          <li><strong>Plusz:</strong> gyors helyszíni kiszállás és biztonsági mentések kezelése</li>
          <li><strong>Prémium:</strong> teljes körű IT menedzsment, SLA-val és személyre szabott tanácsadással</li>
        </ul>

        <p>Ha szeretné stabilabbá, gyorsabbá és biztonságosabbá tenni vállalkozása működését, vegye fel velünk a kapcsolatot, és segítünk megtalálni a legmegfelelőbb csomagot!</p>
      `
    },
    'tavaszi-akciok': {
      id: 2,
      title: 'Tavaszi akciók - Ne maradjon le!',
      date: '2024. március 10.',
      category: 'Akciók',
      image: '/images/news-spring-sale.jpg',
      content: `
        <p>A tavasz beköszöntével különleges akciókat hirdetünk minden informatikai termékre és szolgáltatásra. Március 31-ig tartó kampányunkban jelentős megtakarításokat érhet el!</p>
        
        <h3>Akciós termékek</h3>
        <h4>Számítógép alkatrészek</h4>
        <ul>
          <li>Processzorok: 15-25% kedvezmény</li>
          <li>Memóriák: 20% kedvezmény</li>
          <li>SSD meghajtók: 30% kedvezmény</li>
          <li>Videokártyák: 10-20% kedvezmény</li>
          <li>Alaplapok: 15% kedvezmény</li>
        </ul>
        
        <h4>Kész számítógépek</h4>
        <ul>
          <li>Irodai gépek: 150.000 Ft-tól</li>
          <li>Gaming PC-k: 250.000 Ft-tól</li>
          <li>Workstation gépek: 300.000 Ft-tól</li>
        </ul>
        
        <h3>Szolgáltatási akciók</h3>
        <ul>
          <li>Vírusirtás: 6.000 Ft (normál ár: 8.000 Ft)</li>
          <li>Rendszer telepítés: 10.000 Ft (normál ár: 15.000 Ft)</li>
          <li>Adatmentés: 8.000 Ft-tól (normál ár: 12.000 Ft-tól)</li>
          <li>Ingyenes diagnosztika minden javításhoz</li>
        </ul>
        
        <h3>Kombinált csomagok</h3>
        <p>Különleges kombinált csomagjainkkal még többet spórolhat:</p>
        <ul>
          <li>PC építés + Windows telepítés: 18.000 Ft (normál ár: 25.000 Ft)</li>
          <li>Vírusirtás + rendszer optimalizálás: 10.000 Ft (normál ár: 15.000 Ft)</li>
          <li>Adatmentés + új HDD/SSD beépítés: 15.000 Ft-tól</li>
        </ul>
        
        <h3>Hogyan veheti igénybe?</h3>
        <p>Az akciók igénybevételéhez egyszerűen látogasson el üzletünkbe vagy hívjon minket a +36 20 414 5561 telefonszámon. Az akciók a készlet erejéig, illetve március 31-ig érvényesek.</p>
        
        <p><strong>Ne hagyja ki ezt a lehetőséget! Tavaszi akcióink csak korlátozott ideig érvényesek.</strong></p>
      `
    },
    'uj-szolgaltatasok': {
      id: 3,
      title: 'Új szolgáltatások: Felhő és távoli támogatás',
      date: '2024. március 5.',
      category: 'Szolgáltatások',
      image: '/images/news-new-services.jpg',
      content: `
        <p>Örömmel jelentjük be, hogy szolgáltatásaink körét jelentősen kibővítettük. Az új szolgáltatások célja, hogy még hatékonyabban és gyorsabban segíthessük ügyfeleinket informatikai kihívásaik megoldásában.</p>
        
        <h3>Felhő alapú megoldások</h3>
        <p>Modern vállalkozások számára elengedhetetlen a felhő technológia használata. Új szolgáltatásaink:</p>
        
        <h4>Microsoft 365 bevezetés és támogatás</h4>
        <ul>
          <li>Teljes Microsoft 365 telepítés és konfiguráció</li>
          <li>Email migráció meglévő rendszerekből</li>
          <li>SharePoint és Teams beállítás</li>
          <li>Felhasználói képzések</li>
          <li>Folyamatos támogatás és karbantartás</li>
        </ul>
        
        <h4>Google Workspace megoldások</h4>
        <ul>
          <li>Gmail for Business beállítás</li>
          <li>Google Drive vállalati konfiguráció</li>
          <li>Google Meet és Calendar integráció</li>
          <li>Biztonsági beállítások optimalizálása</li>
        </ul>
        
        <h4>Felhő alapú backup megoldások</h4>
        <ul>
          <li>Automatikus adatmentés felhőbe</li>
          <li>Disaster recovery tervezés</li>
          <li>Hibrid backup stratégiák</li>
          <li>Adathelyreállítási tesztek</li>
        </ul>
        
        <h3>Távoli támogatás szolgáltatás</h3>
        <p>Új távoli támogatás szolgáltatásunkkal gyorsan és hatékonyan segítünk, anélkül hogy el kellene hagynunk irodánkat vagy Önnek hozzánk kellene jönnie.</p>
        
        <h4>Mit tudunk távoli támogatással megoldani?</h4>
        <ul>
          <li>Szoftver telepítés és konfiguráció</li>
          <li>Vírusirtás és malware eltávolítás</li>
          <li>Rendszer optimalizálás</li>
          <li>Email beállítások</li>
          <li>Hálózati problémák diagnosztizálása</li>
          <li>Felhasználói képzések</li>
          <li>Szoftver frissítések</li>
        </ul>
        
        <h4>Előnyök</h4>
        <ul>
          <li>Azonnali segítség - nincs várakozás a kiszállásra</li>
          <li>Költséghatékony - nincs kiszállási díj</li>
          <li>Biztonságos - titkosított kapcsolat</li>
          <li>Kényelmes - otthonról vagy irodából</li>
        </ul>
        
        <h3>Árak és csomagok</h3>
        <p>Új szolgáltatásainkra bevezetési árakkal várjuk ügyfeleinket:</p>
        <ul>
          <li>Távoli támogatás: 6.000 Ft/óra (normál ár: 8.000 Ft/óra)</li>
          <li>Microsoft 365 bevezetés: 50.000 Ft-tól (cég méretétől függően)</li>
          <li>Felhő backup beállítás: 25.000 Ft-tól</li>
        </ul>
        
        <h3>Hogyan kezdjük el?</h3>
        <p>Ingyenes konzultációt kínálunk, ahol felmérjük az Ön igényeit és személyre szabott ajánlatot készítünk. Hívjon minket a +36 20 414 5561 telefonszámon vagy írjon a informatika@eu-tech.hu email címre.</p>
        
        <p><strong>Lépjen be a modern informatika világába velünk!</strong></p>
      `
    }
  };

  const article = newsArticles[slug];

  if (!article) {
    return (
      <div className="pt-24 pb-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Cikk nem található</h1>
          <p className="text-gray-400 mb-8">A keresett cikk nem létezik vagy el lett távolítva.</p>
          <Link to="/news" className="btn-primary">
            Vissza a hírekhez
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <Link 
            to="/news" 
            className="inline-flex items-center text-blue-500 hover:text-blue-400 transition-colors duration-300 mb-8"
          >
            <ArrowLeft size={20} className="mr-2" />
            Vissza a hírekhez
          </Link>
          
          <article>
            <div className="mb-8">
              <img 
                src={article.image} 
                alt={article.title}
                className="w-full h-64 md:h-96 object-cover rounded-lg shadow-xl"
              />
            </div>
            
            <div className="mb-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center text-gray-400">
                  <Calendar size={16} className="mr-2" />
                  {article.date}
                </div>
                <div className="flex items-center text-blue-500">
                  <Tag size={16} className="mr-2" />
                  {article.category}
                </div>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {article.title}
              </h1>
            </div>
            
            <div 
              className="prose prose-lg prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: article.content }}
              style={{
                color: '#e5e7eb',
                lineHeight: '1.7'
              }}
            />
            
            <div className="mt-12 pt-8 border-t border-gray-700">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                  <p className="text-gray-400">Tetszett a cikk? Ossza meg másokkal is!</p>
                </div>
                <div className="flex space-x-4">
                  <Link 
                    to="/contact" 
                    className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-lg transition-all duration-300"
                  >
                    Kapcsolatfelvétel
                  </Link>
                  <Link 
                    to="/news" 
                    className="bg-gray-700 hover:bg-gray-600 text-white font-medium py-2 px-6 rounded-lg transition-all duration-300"
                  >
                    További hírek
                  </Link>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;