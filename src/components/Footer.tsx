import { MapPin, Phone, Mail, Instagram, Facebook, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-levanto-dark text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <h3 className="display-serif text-3xl font-bold text-white mb-6">Hof van Terwinselen</h3>
            <p className="text-white/60 max-w-md mb-8 leading-relaxed">
              Persoonlijke zorg en een warm thuis in het hart van Kerkrade. 
              Onderdeel van de LEVANTOgroep, specialist in welzijn en zorg.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-levanto-magenta transition-all duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-levanto-magenta transition-all duration-300">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-8 text-levanto-gold">Contact</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-3 text-white/70">
                <MapPin size={20} className="text-levanto-turquoise shrink-0" />
                <span className="text-sm">Terwinselen, Heistraat 97a,<br />6467 LP, Kerkrade, Nederland</span>
              </li>
              <li className="flex items-center gap-3 text-white/70">
                <Phone size={20} className="text-levanto-turquoise shrink-0" />
                <span className="text-sm">+31 (0)45 123 4567</span>
              </li>
              <li className="flex items-center gap-3 text-white/70">
                <Mail size={20} className="text-levanto-turquoise shrink-0" />
                <span className="text-sm">info@hofvanterwinselen.nl</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-8 text-levanto-gold">Links</h4>
            <ul className="space-y-5 text-sm text-white/70">
              <li><a href="#" className="hover:text-levanto-magenta transition-colors">Routebeschrijving</a></li>
              <li><a href="https://www.levantogroep.nl/vacatures" target="_blank" rel="noopener noreferrer" className="hover:text-levanto-magenta transition-colors">Vacatures bij Hof</a></li>
              <li><a href="#" className="hover:text-levanto-magenta transition-colors">Privacybeleid</a></li>
              <li><a href="https://levantogroep.nl" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-levanto-turquoise transition-colors">
                LEVANTOgroep website
                <ArrowRight size={14} />
              </a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-8 text-[13px] text-white/40">
          <div className="flex gap-10">
            <span>&copy; 2024 Hof van Terwinselen</span>
            <span className="opacity-60 uppercase tracking-widest hidden sm:inline">Kerkrade, Limburg</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-8 items-center">
            <span className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(74,222,128,0.5)]"></div> 
              Nu geopend voor bezoek
            </span>
            <span className="text-levanto-gold font-bold text-lg">+31 (0)45 123 4567</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
