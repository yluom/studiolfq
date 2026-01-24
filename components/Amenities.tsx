'use client';

import { useEffect, useRef, useState } from 'react';

const amenities = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" />
        <path d="M4 13h2M18 13h2M6.5 8h1M16.5 8h1" />
      </svg>
    ),
    title: 'Climatisation',
    description: 'Chauffage & rafraîchissement',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M5 12.55a11 11 0 0 1 14.08 0M8.53 16.11a6 6 0 0 1 6.95 0M12 20h.01" />
      </svg>
    ),
    title: 'WiFi illimité',
    description: 'Fibre haut débit',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <rect x="2" y="7" width="20" height="15" rx="2" ry="2" />
        <path d="M17 2v5M7 2v5" />
      </svg>
    ),
    title: 'TV connectée',
    description: 'Netflix, YouTube & plus',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9ZM3 9V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3" />
        <circle cx="9" cy="15" r="2" />
        <circle cx="15" cy="15" r="2" />
      </svg>
    ),
    title: 'Cuisine équipée',
    description: 'Nespresso, induction, lave-vaisselle',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M2 4v16M22 4v16M2 8h20M2 16h20" />
        <rect x="6" y="8" width="12" height="8" />
      </svg>
    ),
    title: 'Lit 160cm',
    description: 'Literie haut de gamme',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <rect x="3" y="11" width="18" height="11" rx="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    title: 'Parking sécurisé',
    description: 'Place privée incluse',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
    title: 'Lave-linge',
    description: 'Machine à laver',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M6 19v-8l6-5 6 5v8a1 1 0 0 1-1 1h-4v-5h-2v5H7a1 1 0 0 1-1-1Z" />
        <path d="M9 3v2M15 3v2M10 13h4" />
      </svg>
    ),
    title: 'Fer à repasser',
    description: 'Table & fer vapeur',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M3 10a7 7 0 0 1 14 0v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6Z" />
        <path d="M10 18v3M17 14h2a2 2 0 0 0 0-4h-2" />
        <circle cx="10" cy="10" r="2" />
      </svg>
    ),
    title: 'Sèche-cheveux',
    description: 'Salle de bain équipée',
  },
];

export default function Amenities() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="equipements"
      className="section-padding bg-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#87CEEB]/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[#f4a460]/5 blur-3xl -translate-x-1/2 translate-y-1/2" />

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
              Équipements
            </span>
            <div className="decorative-line" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-[#1e3a5f]">
            Tout pour votre <span className="italic text-[#f4a460]">confort</span>
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto">
            Un studio entièrement équipé pour des vacances sans souci
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className={`group relative p-6 rounded-2xl bg-gradient-to-br from-[#fafafa] to-[#f5f5f5] border border-gray-100 hover:border-[#f4a460]/30 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              {/* Icon */}
              <div className="mb-4 text-[#1e3a5f] group-hover:text-[#f4a460] transition-colors duration-300">
                {amenity.icon}
              </div>

              {/* Content */}
              <h3 className="font-display text-lg text-[#1e3a5f] mb-1">
                {amenity.title}
              </h3>
              <p className="text-sm text-gray-500">
                {amenity.description}
              </p>

              {/* Hover accent */}
              <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-[#f4a460] to-[#f5deb3] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full" />
            </div>
          ))}
        </div>

        {/* Additional note */}
        <div
          className={`mt-12 text-center transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-gray-500 text-sm">
            <span className="text-[#f4a460]">+</span> Aspirateur disponible pour votre confort
          </p>
        </div>
      </div>
    </section>
  );
}
