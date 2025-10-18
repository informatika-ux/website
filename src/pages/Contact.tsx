import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, CheckCircle, X, Loader2 } from 'lucide-react';

// EmailJS types
interface EmailJSResponse {
  status: number;
  text: string;
}

interface EmailJSTemplateParams {
  user_name: string;
  user_email: string;
  phone: string;
  subject: string;
  message: string;
}

declare global {
  interface Window {
    emailjs: {
      init: (config: { publicKey: string }) => void;
      send: (serviceId: string, templateId: string, templateParams: EmailJSTemplateParams) => Promise<EmailJSResponse>;
    };
  }
}

const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [notification, setNotification] = useState<{
    show: boolean;
    title: string;
    message: string;
    type: 'success' | 'error';
  }>({
    show: false,
    title: '',
    message: '',
    type: 'success'
  });

  useEffect(() => {
    // Load EmailJS script
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
    script.onload = () => {
      if (window.emailjs) {
        window.emailjs.init({
          publicKey: "P6K_LECMYNkXDrSN3"
        });
      }
    };
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  const showNotification = (title: string, message: string, type: 'success' | 'error' = 'success') => {
    setNotification({ show: true, title, message, type });
    
    // Auto hide after 5 seconds
    setTimeout(() => {
      hideNotification();
    }, 5000);
  };

  const hideNotification = () => {
    setNotification(prev => ({ ...prev, show: false }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    
    if (isSubmitting) {
      return;
    }

    if (!formData.user_name || !formData.user_email || !formData.subject || !formData.message) {
      showNotification('Hiba történt!', 'Kérjük, töltse ki az összes kötelező mezőt.', 'error');
      return;
    }

    if (!window.emailjs) {
      showNotification('Hiba történt!', 'EmailJS nem érhető el. Kérjük, próbálja újra később.', 'error');
      return;
    }

    setIsSubmitting(true);

    try {
      await window.emailjs.send(
        'service_civqt8k', 
        'template_19438zj', 
        formData
      );
      
      showNotification(
        'Üzenet sikeresen elküldve!', 
        'Köszönjük, hogy felvette velünk a kapcsolatot. Hamarosan válaszolunk!',
        'success'
      );
      
      setFormData({
        user_name: '',
        user_email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      showNotification('Hiba történt!', 'Kérjük, próbálja újra később.', 'error');
      console.error('FAILED...', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Kapcsolat</h1>
            <p className="text-gray-400 max-w-3xl mx-auto">
              Vegye fel velünk a kapcsolatot, és megtaláljuk az Ön igényeire szabott legjobb megoldást
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div data-aos="fade-right">
              <div className="bg-gray-800 rounded-lg p-8 shadow-lg">
                <h2 className="text-2xl font-bold mb-6 text-white">Küldjön üzenetet</h2>
                
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                        Név *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="user_name"
                        value={formData.user_name}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                        className="w-full bg-gray-700 border border-gray-600 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="user_email"
                        value={formData.user_email}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                        className="w-full bg-gray-700 border border-gray-600 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-2">
                      Telefonszám
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      className="w-full bg-gray-700 border border-gray-600 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">
                      Tárgy *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      className="w-full bg-gray-700 border border-gray-600 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                      Üzenet *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      className="w-full bg-gray-700 border border-gray-600 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                      required
                    ></textarea>
                  </div>
                  
                  <div>
                    <button
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="bg-blue-500 hover:bg-blue-600 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-medium py-3 px-6 rounded-md transition-colors duration-300 w-full md:w-auto flex items-center justify-center"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="animate-spin mr-2\" size={18} />
                          Küldés...
                        </>
                      ) : (
                        'Üzenet küldése'
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-8" data-aos="fade-left">
              <div className="bg-gray-800 rounded-lg p-8 shadow-lg h-full">
                <h2 className="text-2xl font-bold mb-6 text-white">Elérhetőségeink</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="text-blue-500 flex-shrink-0 mt-1" size={20} />
                    <div className="ml-4">
                      <h3 className="text-white font-medium">Cím</h3>
                      <p className="text-gray-300">
                        <a 
                          href="https://www.google.com/maps/dir/?api=1&destination=8300+Tapolca,+Berzsenyi+Dániel+Utca+21/D" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:text-blue-500 transition-colors duration-300"
                        >
                          8300 Tapolca, Berzsenyi Dániel Utca 21/D
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="text-blue-500 flex-shrink-0 mt-1" size={20} />
                    <div className="ml-4">
                      <h3 className="text-white font-medium">Telefon</h3>
                      <p className="text-gray-300">
                        <a 
                          href="tel:+36204145561" 
                          className="hover:text-blue-500 transition-colors duration-300"
                        >
                          +36 20 414 5561
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="text-blue-500 flex-shrink-0 mt-1" size={20} />
                    <div className="ml-4">
                      <h3 className="text-white font-medium">Email</h3>
                      <p className="text-gray-300">
                        <a 
                          href="mailto:informatika@eu-tech.hu" 
                          className="hover:text-blue-500 transition-colors duration-300"
                        >
                          informatika@eu-tech.hu
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="text-blue-500 flex-shrink-0 mt-1" size={20} />
                    <div className="ml-4">
                      <h3 className="text-white font-medium">Nyitvatartás</h3>
                      <p className="text-gray-300">Hétfő - Péntek: 9:00 - 17:00</p>
                      <p className="text-gray-300">Szombat: 9:00 - 12:00</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-lg p-8 shadow-lg">
                <h2 className="text-2xl font-bold mb-6 text-white">Gyorsabb válaszért</h2>
                <p className="text-gray-300 mb-6">
                  Amennyiben sürgős segítségre van szüksége, hívjon bennünket telefonon vagy írjon e-mailt. Igyekszünk a lehető leghamarabb válaszolni és segíteni.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="tel:+36204145561" 
                    className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300 flex items-center justify-center"
                  >
                    <Phone size={18} className="mr-2" />
                    Hívás most
                  </a>
                  <a 
                    href="mailto:informatika@eu-tech.hu" 
                    className="bg-gray-700 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300 flex items-center justify-center"
                  >
                    <Mail size={18} className="mr-2" />
                    Email küldése
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16" data-aos="fade-up">
            <h2 className="text-2xl font-bold mb-6 text-white text-center">Térképen</h2>
            <div className="rounded-lg overflow-hidden shadow-lg" style={{ height: '400px' }}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2726.896718627317!2d17.448218554774495!3d46.88508037809465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476905e3538b34fb%3A0x2bbdf549393ee373!2sEu-Tech%20Informatika%20Kft.!5e0!3m2!1shu!2shu!4v1749209155930!5m2!1shu!2shu" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Eu-Tech Informatika térképen"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Notification Modal */}
      {notification.show && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 rounded-lg p-8 max-w-md w-full shadow-xl transform transition-all">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                {notification.type === 'success' ? (
                  <CheckCircle className="text-blue-500 mr-3\" size={24} />
                ) : (
                  <X className="text-red-500 mr-3" size={24} />
                )}
                <h3 className="text-xl font-bold text-white">{notification.title}</h3>
              </div>
              <button
                onClick={hideNotification}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            <p className="text-gray-300 mb-6">{notification.message}</p>
            <button
              onClick={hideNotification}
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300 w-full"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Contact;