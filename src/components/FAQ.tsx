import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqItems = [
  {
    id: 1,
    question: 'Miért válasszam az Eu-Tech Informatikát?',
    answer: 'Mert tapasztalt szakemberekből álló csapatunk segít megvalósítani az Ön üzleti céljait megfizethető áron, anélkül, hogy a minőség rovására menne. Több generációs tapasztalatunkat ötvözzük a modern technológiai megoldásokkal.'
  },
  {
    id: 2,
    question: 'Mik az árak a szolgáltatásokra?',
    answer: 'Szolgáltatásaink árai változóak az igényektől függően. Kérjük, lépjen kapcsolatba velünk egyedi árajánlatért. Minden esetben az Ön igényeire szabott, költséghatékony megoldásokat kínálunk.'
  },
  {
    id: 3,
    question: 'Mennyi időbe telik a projekt megvalósítása?',
    answer: 'A projekt megvalósításának ideje a konkrét igényektől függ, de csapatunk minden erőfeszítést megtesz a határidők betartására. Az egyszerűbb feladatokat akár 24-48 órán belül is el tudjuk végezni.'
  },
  {
    id: 4,
    question: 'Kínálnak támogatást a szolgáltatásaikhoz?',
    answer: 'Igen, folyamatos támogatást nyújtunk ügyfeleinknek, hogy biztosítsuk a zökkenőmentes működést. Ügyféltámogatási rendszerünk és szakértő csapatunk mindig készen áll a segítségnyújtásra.'
  },
  {
    id: 5,
    question: 'Milyen típusú szolgáltatásokat kínálnak?',
    answer: 'Kínálunk rendszerüzemeltetési, hálózatépítési, szerviz szolgáltatásokat, számítógép építést, vírusirtást, adatmentést és szoftveres megoldásokat. Szolgáltatásaink teljes körűek, az egyszerű javításoktól a komplex rendszerek telepítéséig mindent vállalunk.'
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  
  return (
    <section className="py-20 bg-gray-900">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title centered" data-aos="fade-up">
            GYIK (Gyakran Ismételt Kérdések)
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Válaszok a leggyakrabban feltett kérdésekre szolgáltatásainkkal kapcsolatban.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <div 
              key={item.id}
              className="mb-4 border border-gray-800 rounded-lg overflow-hidden transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              <button
                className={`w-full text-left p-5 flex justify-between items-center ${
                  activeIndex === index ? 'bg-gray-800' : 'bg-gray-900'
                }`}
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-medium text-white">{item.question}</h3>
                {activeIndex === index ? (
                  <ChevronUp className="text-blue-500 flex-shrink-0" size={20} />
                ) : (
                  <ChevronDown className="text-blue-500 flex-shrink-0" size={20} />
                )}
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  activeIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="p-5 bg-gray-800 text-gray-300">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;