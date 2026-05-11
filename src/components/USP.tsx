import { motion } from "motion/react";
import { Heart, Home, UserCheck } from "lucide-react";

const usps = [
  {
    icon: <Heart size={24} className="text-levanto-turquoise" />,
    title: "24-uurs zorg",
    description: "Altijd professionele ondersteuning dichtbij, dag en nacht in een veilige omgeving."
  },
  {
    icon: <Home size={24} className="text-levanto-turquoise" />,
    title: "Huiselijke sfeer",
    description: "Een fijne plek die voelt als thuis, waar warmte en onderling contact voorop staan."
  },
  {
    icon: <UserCheck size={24} className="text-levanto-turquoise" />,
    title: "Eigen regie",
    description: "U bepaalt hoe u uw dag invult. Wij luisteren naar uw wensen en ondersteunen u daarbij."
  }
];

export default function USP() {
  return (
    <section id="zorg" className="py-24 bg-white border-y border-levanto-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          {usps.map((usp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex gap-6 items-start group"
            >
              <div className="w-14 h-14 rounded-[20px] bg-levanto-beige flex items-center justify-center shrink-0 group-hover:bg-levanto-turquoise transition-colors duration-300">
                <div className="group-hover:text-white transition-colors duration-300">
                  {usp.icon}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-levanto-dark">{usp.title}</h3>
                <p className="text-levanto-gray leading-relaxed text-sm lg:text-base">
                  {usp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
