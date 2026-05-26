/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import USP from "./components/USP";
import Testimonial from "./components/Testimonial";
import WorkWithUs from "./components/WorkWithUs";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import { useEffect } from "react";
import { SpeedInsights } from "@vercel/speed-insights/react";

export default function App() {
  // Add Schema.org JSON-LD
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "NursingHome",
      "name": "Hof van Terwinselen",
      "parentOrganization": {
        "@type": "Organization",
        "name": "LEVANTOgroep"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Heistraat 97a",
        "postalCode": "6467 LP",
        "addressLocality": "Kerkrade",
        "addressRegion": "Limburg",
        "addressCountry": "NL"
      },
      "description": "Warm wonen met persoonlijke zorg in Kerkrade. Kleinschalige zorglocatie gericht op welzijn en zelfstandigheid."
    });
    document.head.appendChild(script);
    
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen selection:bg-hof-green selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <USP />
        <Testimonial />
        <WorkWithUs />
        <ContactForm />
      </main>
      <Footer />
      
      {/* Mobile Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-50 md:hidden">
        <a 
          href="tel:+310451234567"
          className="bg-hof-gold text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform active:scale-95"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone-call"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/><path d="M14.05 2a9 9 0 0 1 8 8"/><path d="M14.05 6A5 5 0 0 1 18 10"/></svg>
        </a>
      </div>
      <SpeedInsights />
    </div>
  );
}
