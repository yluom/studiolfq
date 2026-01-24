'use client';

import { useEffect, useRef, useState } from 'react';

const infoItems = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M3 6h18M3 12h18M3 18h18" />
        <circle cx="6" cy="6" r="1" fill="currentColor" />
        <circle cx="6" cy="12" r="1" fill="currentColor" />
        <circle cx="6" cy="18" r="1" fill="currentColor" />
      </svg>
    ),
    title: 'Linge de maison',
    content: 'Draps, serviettes et linge de toilette disponibles en option pour 15€. Merci de le préciser lors de la réservation.',
    highlight: '15€',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <rect x="3" y="11" width="18" height="11" rx="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    title: 'Règles de la résidence',
    content: 'Résidence calme et familiale. Respect du voisinage après 22h. Animaux non admis.',
    highlight: null,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <rect x="6" y="3" width="12" height="18" rx="2" />
        <path d="M10 8h4M10 12h4M10 16h4" />
        <circle cx="12" cy="20" r="0.5" fill="currentColor" />
      </svg>
    ),
    title: 'Accès au studio',
    content: 'Ascenseur disponible 24h/24. Le studio se situe au 2e étage. Instructions détaillées envoyées avant votre arrivée.',
    highlight: '2e étage',
  },
];

export default function Info() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="infos"
      className="section-padding bg-[#fdf6e9] relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f4a460]/20 to-transparent" />
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full border border-[#f4a460]/10" />
      <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full border border-[#1e3a5f]/5" />

      <div className="container-narrow relative">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="decorative-line" />
            <span className="text-sm uppercase tracking-[0.2em] text-[#1e3a5f]/70">
              Informations
            </span>
            <div className="decorative-line" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-[#1e3a5f]">
            Bon à <span className="italic text-[#f4a460]">savoir</span>
          </h2>
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {infoItems.map((item, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-[#1e3a5f]/5 flex items-center justify-center text-[#1e3a5f] mb-6">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="font-display text-xl text-[#1e3a5f] mb-3">
                {item.title}
              </h3>

              {/* Content */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.content}
              </p>

              {/* Highlight badge */}
              {item.highlight && (
                <div className="mt-4 inline-block bg-[#f4a460]/10 text-[#f4a460] text-sm font-medium px-3 py-1 rounded-full">
                  {item.highlight}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Additional Tips */}
        <div
          className={`mt-12 bg-white rounded-2xl p-8 border border-gray-100 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#87CEEB]/10 flex items-center justify-center">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#87CEEB" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4M12 8h.01" />
              </svg>
            </div>
            <div>
              <h4 className="font-display text-lg text-[#1e3a5f] mb-1">Conseil voyage</h4>
              <p className="text-gray-600 text-sm">
                La Franqui est réputée pour ses conditions de vent exceptionnelles. Idéal pour le kitesurf
                et la voile ! Pensez à réserver tôt en haute saison (juillet-août).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
