import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import PriceList from './pages/PriceList';
import Contact from './pages/Contact';
import Partners from './pages/Partners';
import Sales from './pages/Sales';
import News from './pages/News';
import Works from './pages/Works';
import Reviews from './pages/Reviews';
import NewsDetail from './pages/NewsDetail';
import SalesDetail from './pages/SalesDetail';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Cookies from './pages/Cookies';

// Service Pages
import Networking from './pages/services/Networking';
import SystemAdmin from './pages/services/SystemAdmin';
import GraphicDesign from './pages/services/GraphicDesign';
import Repair from './pages/services/Repair';
import LaserEngraving from './pages/services/LaserEngraving';
import EScooter from './pages/services/EScooter';
import IOSSystems from './pages/services/IOSSystems';
import PhoneRepair from './pages/services/PhoneRepair';
import PrinterService from './pages/services/PrinterService';
import Pricing from './pages/services/Pricing';


function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true
    });
  }, []);

  return (
      <Router>
        <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/price-list" element={<PriceList />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/partners" element={<Partners />} />
              <Route path="/sales" element={<Sales />} />
              <Route path="/sales/:slug" element={<SalesDetail />} />
              <Route path="/news" element={<News />} />
              <Route path="/news/:slug" element={<NewsDetail />} />
              <Route path="/works" element={<Works />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/cookies" element={<Cookies />} />
              
              {/* Service Routes */}
              <Route path="/services/networking" element={<Networking />} />
              <Route path="/services/system-admin" element={<SystemAdmin />} />
              <Route path="/services/graphic-design" element={<GraphicDesign />} />
              <Route path="/services/repair" element={<Repair />} />
              <Route path="/services/laser-engraving" element={<LaserEngraving />} />
              <Route path="/services/e-scooter" element={<EScooter />} />
              <Route path="/services/ios-systems" element={<IOSSystems />} />
              <Route path="/services/phone-repair" element={<PhoneRepair />} />
              <Route path="/services/printer-service" element={<PrinterService />} />
              <Route path="/services/pricing" element={<Pricing />} />

            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
  );
}

export default App;