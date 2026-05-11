import { motion } from "motion/react";
import { Send, PhoneCall } from "lucide-react";

export default function ContactForm() {
  return (
    <section id="contact" className="py-24 bg-levanto-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-1/2">
            <h2 className="display-serif text-4xl lg:text-5xl mb-6 text-levanto-dark leading-tight">Neem vrijblijvend contact op</h2>
            <p className="text-lg text-levanto-gray mb-10 leading-relaxed max-w-lg">
              Heeft u vragen over onze zorg of wilt u een keer langskomen voor een kop koffie om de sfeer te proeven? We staan u graag te woord.
            </p>
            
            <div className="bg-levanto-beige/50 backdrop-blur-sm p-10 rounded-[32px] border border-white">
              <h3 className="text-xl mb-4 font-bold flex items-center gap-3 text-levanto-dark">
                <PhoneCall className="text-levanto-turquoise" />
                Liever bellen?
              </h3>
              <p className="text-levanto-gray mb-6 font-medium">
                Snel antwoord op uw vragen:
              </p>
              <a href="tel:+310451234567" className="text-3xl lg:text-4xl font-display font-bold text-levanto-magenta hover:text-levanto-gold transition-colors">
                045 - 123 4567
              </a>
            </div>
          </div>
          
          <div className="lg:w-1/2 w-full">
            <form className="glass-light p-10 rounded-[40px] shadow-xl space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-levanto-dark mb-2">Voornaam</label>
                  <input 
                    type="text" 
                    className="w-full px-5 py-4 rounded-2xl bg-white border border-levanto-beige focus:ring-2 focus:ring-levanto-magenta focus:border-transparent outline-none transition-all"
                    placeholder="Uw voornaam"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-levanto-dark mb-2">Achternaam</label>
                  <input 
                    type="text" 
                    className="w-full px-5 py-4 rounded-2xl bg-white border border-levanto-beige focus:ring-2 focus:ring-levanto-magenta focus:border-transparent outline-none transition-all"
                    placeholder="Uw achternaam"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-bold text-levanto-dark mb-2">E-mailadres</label>
                <input 
                  type="email" 
                  className="w-full px-5 py-4 rounded-2xl bg-white border border-levanto-beige focus:ring-2 focus:ring-levanto-magenta focus:border-transparent outline-none transition-all"
                  placeholder="Typ hier uw emailadres"
                />
              </div>
              
              <div>
                <label className="block text-sm font-bold text-levanto-dark mb-2">Bericht</label>
                <textarea 
                  rows={4}
                  className="w-full px-5 py-4 rounded-2xl bg-white border border-levanto-beige focus:ring-2 focus:ring-levanto-magenta focus:border-transparent outline-none transition-all"
                  placeholder="Waarmee kunnen we u helpen?"
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full btn-primary gap-3 flex justify-center py-5 text-lg"
              >
                Verstuur bericht
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
