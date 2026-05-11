import { motion } from "motion/react";
import { Users, Sparkles, ArrowRight } from "lucide-react";

export default function WorkWithUs() {
  return (
    <section id="werken-bij" className="py-24 bg-levanto-magenta text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-tr from-levanto-magenta to-levanto-salmon opacity-80" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="display-serif text-4xl lg:text-5xl mb-8 text-white leading-tight">Word jij onze nieuwe collega?</h2>
              <p className="text-xl text-white/80 mb-10 leading-relaxed max-w-lg">
                Bij Hof van Terwinselen werk je in een team waar we écht naar elkaar omkijken. 
                Geen nummer, maar een gewaardeerde collega in een kleinschalige setting.
              </p>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center shrink-0">
                    <Users size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Hecht team</h4>
                    <p className="text-white/60">Korte lijnen en een fijne werksfeer.</p>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center shrink-0">
                    <Sparkles size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Persoonlijke groei</h4>
                    <p className="text-white/60">Ruimte voor eigen initiatief en scholing.</p>
                  </div>
                </div>
              </div>
              
              <a 
                href="https://www.levantogroep.nl/vacatures" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-levanto-gold text-white px-10 py-4 rounded-xl font-bold shadow-xl hover:bg-white hover:text-levanto-magenta transition-all flex items-center gap-2 group w-fit"
              >
                Bekijk vacatures
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </a>
            </motion.div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="aspect-video rounded-[32px] overflow-hidden shadow-2xl border-4 border-white/20">
              <img 
                src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=2621&auto=format&fit=crop" 
                alt="Zorgteam aan het work"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
