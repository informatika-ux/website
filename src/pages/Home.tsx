import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import CallToAction from '../components/CallToAction';

const Home = () => {
  return (
    <>
      <Hero />
      
      <section className="py-16 bg-black">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Üdvözöljük az Eu-Tech Informatika Kft weboldalán!
            </h2>
            <p className="text-gray-300 text-lg mb-6">
              Célunk, hogy ügyfeleink számára a legjobb és legmegfizethetőbb szolgáltatásokat nyújtsuk. Árajánlatokkal és rendszerüzemeltetéssel kapcsolatosan kérjük, keressenek minket a lent megadott email címen.
            </p>
            <p className="text-gray-300 text-lg">
              Versenytársainkkal ellentétben áraink megfizethetőek, anélkül, hogy ez a minőség rovására menne. Informatikai üzletünk több generációs tapasztalata lehetővé teszi, hogy ötvözzük az új technológiák frissességét a tapasztalt szakemberek értékes tudásával. Ennek köszönhetően ügyfeleink nemcsak korszerű megoldásokat kapnak, hanem megbízhatóságot és szakértelmet is. Válasszon minket, mert nálunk a minőség és a megfizethetőség kéz a kézben jár.
            </p>
          </div>
        </div>
      </section>
      
      <Services />
      <Testimonials />
      <FAQ />
      <CallToAction />
    </>
  );
};

export default Home;