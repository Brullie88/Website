import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="over-ons" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-br from-levanto-offwhite via-levanto-offwhite to-levanto-salmon/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-levanto-gold font-bold tracking-[0.2em] text-xs uppercase mb-4 block">
              Onderdeel van LEVANTOgroep
            </span>
            <h1 className="display-serif text-6xl lg:text-[5.5rem] mb-8 leading-[1.05] text-levanto-dark">
              Warm wonen met <span className="italic text-levanto-magenta">persoonlijke zorg</span> in Kerkrade.
            </h1>
            <p className="text-lg lg:text-xl text-levanto-gray mb-10 leading-relaxed max-w-xl">
              Bij Hof van Terwinselen bieden we een kleinschalige, veilige omgeving waar u uw eigen regie behoudt en uw naasten hun rol als familie weer kunnen pakken.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <button className="btn-primary group">
                Vraag rondleiding aan
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <button className="btn-outline">
                Neem contact op
              </button>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full opacity-25">
        <div className="absolute top-20 right-[-10%] w-[120%] aspect-square bg-levanto-salmon rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[80%] aspect-square bg-levanto-magenta rounded-full blur-[120px] opacity-20" />
      </div>
      
      {/* Image Placeholder area */}
      <div className="hidden lg:block absolute top-1/2 right-0 -translate-y-1/2 w-5/12 pr-8 px-12">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="aspect-[4/5] rounded-[48px] overflow-hidden shadow-2xl relative border-[12px] border-white bg-white"
        >
          <img 
            src="https://images.unsplash.com/photo-1581578731522-745d05cb9721?q=80&w=2670&auto=format&fit=crop" 
            alt="Warm interieur van Hof van Terwinselen"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-levanto-magenta/40 via-transparent to-transparent" />
          <div className="absolute bottom-10 left-10 text-white max-w-[80%]">
            <p className="display-serif text-2xl font-medium italic">"Samen maken we van zorg een warme plek om te leven."</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
