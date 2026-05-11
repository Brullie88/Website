import { motion } from "motion/react";
import { Quote } from "lucide-react";

export default function Testimonial() {
  return (
    <section id="familie" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative bg-levanto-beige rounded-[40px] p-12 md:p-20 shadow-xl overflow-hidden border border-white"
        >
          <div className="absolute top-10 right-10 opacity-10">
            <Quote size={120} className="text-levanto-magenta" />
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <span className="text-levanto-magenta font-bold uppercase tracking-[0.2em] text-xs mb-8 block">
              Ervaring van familie
            </span>
            <h2 className="display-serif text-3xl md:text-5xl italic leading-[1.3] mb-12 text-levanto-dark">
              "Toen mijn moeder hier kwam wonen, viel er een zware last van onze schouders. Ze wordt met zoveel respect en liefde behandeld dat we haar met een gerust hart bezoeken als dochter, niet meer als mantelzorger."
            </h2>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-white mb-6 overflow-hidden border-4 border-levanto-salmon p-1">
                <img 
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2576&auto=format&fit=crop" 
                  alt="Dochter van bewoner"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <p className="font-bold text-xl text-levanto-dark leading-none mb-2">Mevrouw Vroomen</p>
              <p className="text-levanto-magenta font-semibold text-sm">Dochter van bewoner</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
