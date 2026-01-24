'use client';

import { useEffect, useRef, useState } from 'react';

const highlights = [
  {
    distance: '50m',
    label: 'Plage',
    description: 'Accès direct à la magnifique plage de La Franqui',
  },
  {
    distance: '2 min',
    label: 'Commerces',
    description: 'Boulangerie, épicerie et restaurants à pied',
  },
  {
    distance: 'Été',
    label: 'Marché',
    description: 'Marché provençal tous les matins en saison',
  },
];

export default function Location() {
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
      id="location"
      className="section-padding bg-[#1e3a5f] relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="waves" x="0" y="0" width="50" height="20" patternUnits="userSpaceOnUse">
            <path
              d="M0 10 Q12.5 0 25 10 T50 10"
              fill="none"
              stroke="white"
              strokeWidth="0.5"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#waves)" />
        </svg>
      </div>

      <div className="container-narrow relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-[#f4a460]" />
              <span className="text-sm uppercase tracking-[0.2em] text-white/60">
                Localisation
              </span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl text-white leading-tight mb-6">
              Au cœur de
              <span className="block italic text-[#f5deb3]">La Franqui</span>
            </h2>

            <p className="text-white/80 text-lg leading-relaxed mb-10">
              Situé dans la charmante station balnéaire de La Franqui, à quelques pas de
              la célèbre plage prisée des kitesurfeurs et des amoureux de nature préservée.
              Un emplacement idéal pour profiter de la côte méditerranéenne.
            </p>

            {/* Highlights */}
            <div className="space-y-6">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-6 transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                  }`}
                  style={{ transitionDelay: `${400 + index * 150}ms` }}
                >
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                    <span className="font-display text-xl text-[#f4a460]">{item.distance}</span>
                  </div>
                  <div>
                    <h3 className="text-white font-medium text-lg mb-1">{item.label}</h3>
                    <p className="text-white/60 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Map placeholder / Visual */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-[#2a4a73] to-[#1e3a5f] border border-white/10 p-8 flex flex-col items-center justify-center relative">
              {/* Decorative map illustration */}
              <div className="absolute inset-8 rounded-2xl border border-white/10" />
              <div className="absolute inset-12 rounded-xl border border-dashed border-white/5" />

              {/* Pin */}
              <div className="relative z-10 animate-float">
                <svg width="60" height="80" viewBox="0 0 60 80" fill="none">
                  <path
                    d="M30 0C13.4 0 0 13.4 0 30c0 22.5 30 50 30 50s30-27.5 30-50C60 13.4 46.6 0 30 0z"
                    fill="#f4a460"
                  />
                  <circle cx="30" cy="28" r="12" fill="#1e3a5f" />
                </svg>
              </div>

              <div className="mt-8 text-center">
                <p className="font-display text-2xl text-white mb-2">La Franqui</p>
                <p className="text-white/50 text-sm">Leucate, Aude (11)</p>
              </div>

              {/* Compass */}
              <div className="absolute top-8 right-8">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-white/20">
                  <circle cx="20" cy="20" r="19" stroke="currentColor" strokeWidth="1" />
                  <path d="M20 4L22 12H18L20 4Z" fill="#f4a460" />
                  <text x="20" y="10" textAnchor="middle" fontSize="6" fill="currentColor">N</text>
                </svg>
              </div>
            </div>

            {/* Address card */}
            <a
              href="https://google.fr/maps/place/6+Av.+de+la+M%C3%A9diterran%C3%A9e,+11370+Leucate/@42.93228,3.0352323,19z/data=!4m6!3m5!1s0x12b05972c0a9d6c9:0x4ae51af525f54cbc!8m2!3d42.932155!4d3.036421!16s%2Fg%2F11c2724pt9?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute -bottom-6 left-6 right-6 bg-white rounded-xl p-4 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 block"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#f4a460]/10 flex items-center justify-center flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f4a460" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-[#1e3a5f] font-medium text-sm">6 Avenue de la Méditerranée</p>
                  <p className="text-gray-500 text-xs">La Franqui, 11370 Leucate</p>
                </div>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f4a460" strokeWidth="2" className="flex-shrink-0">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
