'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/photo1.jpg"
          alt="Vue sur la mer depuis le studio"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1e3a5f]/40 via-transparent to-[#1e3a5f]/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a5f]/30 via-transparent to-transparent" />
      </div>

      {/* Navigation */}
      <nav
        className={`absolute top-0 left-0 right-0 z-20 flex justify-between items-center px-6 md:px-12 py-6 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
        style={{ textShadow: '0 1px 3px rgba(0, 0, 0, 0.8), 0 2px 10px rgba(0, 0, 0, 0.5)' }}
      >
        <span className="font-display text-white text-xl md:text-2xl tracking-wide">
          Studio La Franqui
        </span>
        <div className="hidden md:flex gap-8 text-white/90 text-sm font-light tracking-wider uppercase">
          <a href="#a-propos" className="hover:text-[#f4a460] transition-colors">À propos</a>
          <a href="#galerie" className="hover:text-[#f4a460] transition-colors">Galerie</a>
          <a href="#equipements" className="hover:text-[#f4a460] transition-colors">Équipements</a>
          <a href="#localisation" className="hover:text-[#f4a460] transition-colors">Localisation</a>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
        {/* Decorative element */}
        <div className={`mb-8 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none" className="text-[#f4a460]">
            <circle cx="30" cy="30" r="28" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
            <circle cx="30" cy="30" r="8" fill="currentColor" />
          </svg>
        </div>

        {/* Main Title */}
        <h1
          className={`font-display text-4xl md:text-6xl lg:text-7xl text-white leading-tight max-w-4xl transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ fontWeight: 300, textShadow: '0 2px 4px rgba(0, 0, 0, 0.8), 0 4px 20px rgba(0, 0, 0, 0.6), 0 8px 40px rgba(0, 0, 0, 0.4)' }}
        >
          Un paradis entre
          <span className="block italic text-[#f5deb3]" style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.9), 0 4px 20px rgba(0, 0, 0, 0.7), 0 8px 40px rgba(0, 0, 0, 0.5)' }}>plage et nature</span>
        </h1>

        {/* Subtitle */}
        <p
          className={`mt-6 text-lg md:text-xl text-white/90 font-light tracking-wide transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.8), 0 4px 20px rgba(0, 0, 0, 0.6)' }}
        >
          Studio à 50m de la mer – La Franqui
        </p>

        {/* Rating */}
        <div
          className={`mt-8 flex items-center gap-3 transition-all duration-1000 delay-900 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.8), 0 4px 20px rgba(0, 0, 0, 0.6)' }}
        >
          <div className="flex gap-1" style={{ filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.5))' }}>
            {[...Array(4)].map((_, i) => (
              <svg
                key={i}
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="#f4a460"
                stroke="#f4a460"
                strokeWidth="2"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            ))}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f4a460" strokeWidth="2">
              <defs>
                <linearGradient id="partial">
                  <stop offset="78%" stopColor="#f4a460" />
                  <stop offset="78%" stopColor="transparent" />
                </linearGradient>
              </defs>
              <polygon
                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                fill="url(#partial)"
              />
            </svg>
          </div>
          <span className="text-white font-display text-lg">4.78</span>
          <span className="text-white/70 text-sm">(100 avis)</span>
        </div>

        {/* CTA Button */}
        <a
          href="#a-propos"
          className={`mt-12 group flex items-center gap-2 text-white/80 text-sm tracking-wider uppercase hover:text-[#f4a460] transition-all duration-1000 delay-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.8), 0 4px 20px rgba(0, 0, 0, 0.6)' }}
        >
          <span>Découvrir</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="animate-bounce"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </a>
      </div>

      {/* Bottom Wave Decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-24">
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="w-full h-full">
          <path
            fill="#fafafa"
            d="M0,40 C360,100 1080,0 1440,60 L1440,100 L0,100 Z"
          />
        </svg>
      </div>
    </section>
  );
}
