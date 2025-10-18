import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const closeMenu = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };
  
  const navItems = [
    { name: 'Főoldal', path: '/' },
    { name: 'Munkáink', path: '/works' },
    {
      name: 'Szolgáltatások',
      children: [
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
      ]
    },
    { name: 'Rólunk', path: '/about' },
    { name: 'Partnerek', path: '/partners' },
    { name: 'Hírek', path: '/news' },
    { name: 'Értékelések', path: '/reviews' },
    { name: 'Kapcsolat', path: '/contact' }
  ];
  
  return (
    <>
      <nav 
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' 
            : 'bg-transparent'
        }`}
      >
        <div className="container-custom">
          <div className="flex justify-between items-center py-4">
            {/* Logo with increased spacing */}
            <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
              <span className="text-2xl font-bold text-blue-500 whitespace-nowrap mr-8">Eu-Tech</span>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
              {navItems.map((item) => (
                item.children ? (
                  <div key={item.name} className="relative group">
                    <button className="flex items-center space-x-1 text-sm xl:text-base font-medium px-2 py-1 text-gray-300 hover:text-white transition-colors duration-300 whitespace-nowrap">
                      <span>{item.name}</span>
                      <ChevronDown size={16} className="transform group-hover:rotate-180 transition-transform duration-300" />
                    </button>
                    <div className="absolute top-full left-0 mt-2 w-56 bg-gray-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top scale-95 group-hover:scale-100">
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700 rounded-lg transition-colors duration-300"
                          onClick={closeMenu}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`relative text-sm xl:text-base font-medium px-2 py-1 transition-colors duration-300 group whitespace-nowrap ${
                      location.pathname === item.path
                        ? 'text-blue-500'
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {item.name}
                    <span 
                      className={`absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full ${
                        location.pathname === item.path ? 'w-full' : ''
                      }`}
                    ></span>
                  </Link>
                )
              ))}
              
              <Link 
                to="/contact" 
                className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 xl:px-6 rounded-lg transition-all duration-300 transform hover:scale-105 whitespace-nowrap ml-4 text-sm xl:text-base"
              >
                Kérjen árajánlatot
              </Link>
            </div>
            
            {/* Mobile menu button */}
            <button
              className="lg:hidden text-white focus:outline-none p-2 z-50 relative"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Menü bezárása' : 'Menü megnyitása'}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>
      
      {/* Mobile menu overlay */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 z-40" 
          onClick={closeMenu}
          style={{ top: 0 }}
        />
      )}
      
      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-gray-900 z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ height: '100vh', position: 'fixed' }}
      >
        <div className="flex flex-col h-full">
          {/* Mobile menu header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-700">
            <Link to="/" className="text-xl font-bold text-blue-500" onClick={closeMenu}>
              Eu-Tech
            </Link>
            <button
              onClick={closeMenu}
              className="text-white p-2"
              aria-label="Menü bezárása"
            >
              <X size={24} />
            </button>
          </div>
          
          {/* Mobile menu items */}
          <div className="flex-1 overflow-y-auto py-4">
            {navItems.map((item) => (
              item.children ? (
                <div key={item.name} className="border-b border-gray-700/50">
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className="w-full flex items-center justify-between px-6 py-4 text-white font-medium"
                  >
                    <span>{item.name}</span>
                    <ChevronDown 
                      size={20} 
                      className={`transform transition-transform duration-200 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${
                    activeDropdown === item.name ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="bg-gray-800/50">
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className="block px-8 py-3 text-gray-300 hover:text-white hover:bg-gray-700/50 transition-colors duration-200"
                          onClick={closeMenu}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-6 py-4 border-b border-gray-700/50 font-medium transition-colors duration-200 ${
                    location.pathname === item.path
                      ? 'text-blue-500 bg-blue-500/10'
                      : 'text-white hover:text-blue-400 hover:bg-gray-800/50'
                  }`}
                  onClick={closeMenu}
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>
          
          {/* Mobile CTA button */}
          <div className="p-6 border-t border-gray-700">
            <Link
              to="/contact"
              className="block w-full bg-blue-500 hover:bg-blue-600 text-white text-center font-medium py-3 px-6 rounded-lg transition-colors duration-300"
              onClick={closeMenu}
            >
              Kérjen árajánlatot
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;