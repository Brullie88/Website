import { motion } from "motion/react";
import { Menu, X, Calendar } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/70 backdrop-blur-xl border-b border-white/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center gap-3">
            <div className="w-10 h-10 bg-levanto-magenta rounded-full shadow-lg flex items-center justify-center">
              <span className="text-white font-bold">H</span>
            </div>
            <div className="leading-none text-levanto-dark">
              <span className="block text-lg font-bold tracking-tight uppercase">Hof van</span>
              <span className="block text-sm font-bold text-levanto-magenta">Terwinselen</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#over-ons" className="text-sm font-semibold text-levanto-dark hover:text-levanto-gold transition-colors">Over ons</a>
            <a href="#zorg" className="text-sm font-semibold text-levanto-dark hover:text-levanto-gold transition-colors">Onze Zorg</a>
            <a href="#familie" className="text-sm font-semibold text-levanto-dark hover:text-levanto-gold transition-colors">Voor Familie</a>
            <a href="#werken-bij" className="text-sm font-semibold text-levanto-dark hover:text-levanto-gold transition-colors">Werken bij</a>
            <button className="bg-levanto-magenta text-white px-6 py-2.5 rounded-full hover:bg-levanto-gold transition-all text-sm font-bold shadow-md flex items-center gap-2">
              <Calendar size={16} />
              Plan een rondleiding
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-levanto-dark p-2">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 p-4 space-y-4 shadow-2xl"
        >
          <a href="#over-ons" className="block text-levanto-dark font-medium py-2 px-4 hover:bg-levanto-beige rounded-xl transition-colors">Over ons</a>
          <a href="#zorg" className="block text-levanto-dark font-medium py-2 px-4 hover:bg-levanto-beige rounded-xl transition-colors">Onze Zorg</a>
          <a href="#familie" className="block text-levanto-dark font-medium py-2 px-4 hover:bg-levanto-beige rounded-xl transition-colors">Voor Familie</a>
          <a href="#werken-bij" className="block text-levanto-dark font-medium py-2 px-4 hover:bg-levanto-beige rounded-xl transition-colors">Werken bij</a>
          <button className="w-full bg-levanto-magenta text-white px-5 py-3 rounded-full hover:bg-levanto-gold transition-all font-bold flex items-center justify-center gap-2">
            <Calendar size={18} />
            Plan een rondleiding
          </button>
        </motion.div>
      )}
    </nav>
  );
}
