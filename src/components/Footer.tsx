import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Instagram, 
  MessageSquare,
  ExternalLink 
} from 'lucide-react';

const Footer = () => {
  const navigationLinks = {
    main: [
      { name: 'Főoldal', path: '/' },
      { name: 'Munkáink', path: '/works' },
      { name: 'Partnerek', path: '/partners' },
      { name: 'Rólunk', path: '/about' }
    ],
    services: [
      { name: 'Hálózatépítés', path: '/services/networking' },
      { name: 'Rendszergazda', path: '/services/system-admin' },
      { name: 'Grafikai Tervezés', path: '/services/graphic-design' },
      { name: 'Szervizelés', path: '/services/repair' },
      { name: 'Lézer Gravírozás', path: '/services/laser-engraving' },
      { name: 'E-roller Szerviz', path: '/services/e-scooter' },
      { name: 'iOS Rendszerek', path: '/services/ios-systems' },
      { name: 'Telefon Javítás', path: '/services/phone-repair' },
      { name: 'Nyomtató Szerviz', path: '/services/printer-service' },
      { name: 'Árlista', path: '/services/pricing' }
    ],
    other: [
      { name: 'Hírek', path: '/news' },
      { name: 'Értékelések', path: '/reviews' },
      { name: 'Kapcsolat', path: '/contact' }
    ]
  };

  return (
    <footer className="bg-gray-900 pt-16 border-t border-gray-800">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Contact Information */}
          <div className="space-y-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-xl font-bold text-blue-500 mb-4">Kapcsolat</h3>
            
            <div className="flex items-start space-x-3">
              <MapPin className="text-blue-500 flex-shrink-0 mt-1" size={20} />
              <a 
                href="https://www.google.com/maps/dir/?api=1&destination=8300+Tapolca,+Berzsenyi+Dániel+Utca+21/D" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center"
              >
                8300 Tapolca, Berzsenyi Dániel Utca 21/D
                <ExternalLink size={14} className="ml-1" />
              </a>
            </div>
            
            <div className="flex items-center space-x-3">
              <Phone className="text-blue-500 flex-shrink-0" size={20} />
              <a 
                href="tel:+36204145561" 
                className="text-gray-300 hover:text-white transition-colors duration-300"
              >
                +36 20 414 5561
              </a>
            </div>
            
            <div className="flex items-center space-x-3">
              <Mail className="text-blue-500 flex-shrink-0" size={20} />
              <a 
                href="mailto:informatika@eu-tech.hu" 
                className="text-gray-300 hover:text-white transition-colors duration-300"
              >
                informatika@eu-tech.hu
              </a>
            </div>
            
            <div className="flex items-center space-x-3">
              <Clock className="text-blue-500 flex-shrink-0" size={20} />
              <div>
                <p className="text-gray-300">H-P: 9:00-17:00</p>
                <p className="text-gray-300">Sz: 9:00-12:00</p>
              </div>
            </div>
          </div>
          
          {/* Main Navigation */}
          <div className="space-y-6" data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-xl font-bold text-blue-500 mb-4">Főmenü</h3>
            <div className="grid gap-2">
              {navigationLinks.main.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Services Navigation */}
          <div className="space-y-6" data-aos="fade-up" data-aos-delay="300">
            <h3 className="text-xl font-bold text-blue-500 mb-4">Szolgáltatások</h3>
            <div className="grid gap-2">
              {navigationLinks.services.slice(0, 6).map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Other Links & Social */}
          <div className="space-y-6" data-aos="fade-up" data-aos-delay="400">
            <h3 className="text-xl font-bold text-blue-500 mb-4">Egyéb</h3>
            <div className="grid gap-2">
              {navigationLinks.other.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            
            <div className="pt-6">
              <h3 className="text-xl font-bold text-blue-500 mb-4">Kövessen minket</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://www.facebook.com/profile.php?id=61569875752129" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-blue-500 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                >
                  <Facebook size={20} />
                </a>
                <a 
                  href="https://www.instagram.com/eutechinformatika" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-blue-500 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                >
                  <Instagram size={20} />
                </a>
                <a 
                  href="https://tiktok.com/@eutechinfo" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-blue-500 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                >
                  <MessageSquare size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 pb-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-center md:text-left mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Eu-Tech Informatika Kft | Minden jog fenntartva.
            </p>
            <div className="flex space-x-4">
              <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors duration-300">
                Adatvédelem
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white transition-colors duration-300">
                ÁSZF
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-white transition-colors duration-300">
                Cookie szabályzat
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;