'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function About() {
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
      id="a-propos"
      className="section-padding bg-[#fafafa] relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-20 right-0 w-64 h-64 rounded-full bg-[#87CEEB]/10 blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 rounded-full bg-[#f5deb3]/20 blur-3xl" />

      <div className="container-narrow relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div
            className={`relative transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/photo2.jpg"
                alt="Intérieur du studio"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 md:bottom-8 md:-right-8 bg-white rounded-xl p-6 shadow-xl">
              <div className="text-center">
                <span className="block font-display text-4xl text-[#1e3a5f]">30</span>
                <span className="text-sm text-gray-500 uppercase tracking-wider">m²</span>
              </div>
            </div>
            {/* Decorative frame */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-[#f4a460] rounded-tl-2xl" />
          </div>

          {/* Content Side */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            {/* Section Label */}
            <div className="flex items-center gap-4 mb-6">
              <div className="decorative-line" />
              <span className="text-sm uppercase tracking-[0.2em] text-[#1e3a5f]/70">
                Le Studio
              </span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl text-[#1e3a5f] leading-tight mb-8">
              Votre refuge
              <span className="block italic text-[#f4a460]">méditerranéen</span>
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Niché au cœur d&apos;une résidence paisible, ce studio de <strong>30m²</strong> vous offre
              une vue imprenable sur la mer et un accès direct à l&apos;une des plus belles
              plages de la côte Audoise. Profitez du <strong>balcon ombragé par les pins</strong> pour
              des moments de détente uniques, bercé par le chant des cigales.
            </p>

            {/* Features List */}
            <div className="space-y-4 mb-10">
              {[
                { icon: '🌊', text: 'Vue mer panoramique' },
                { icon: '🌲', text: 'Balcon dans les pins, parc arboré' },
                { icon: '☀️', text: 'Exposition plein sud' },
              ].map((feature, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-4 transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                  }`}
                  style={{ transitionDelay: `${500 + index * 150}ms` }}
                >
                  <span className="text-2xl">{feature.icon}</span>
                  <span className="text-gray-700">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* 2025 Badge */}
            <div
              className={`bg-gradient-to-r from-[#1e3a5f] to-[#2a4a73] rounded-xl p-6 text-white transition-all duration-1000 delay-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-[#f4a460] text-[#1e3a5f] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Nouveau 2025
                </span>
              </div>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" />
                  </svg>
                  <span className="text-sm">Climatisation réversible</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="M2 8h20" />
                  </svg>
                  <span className="text-sm">Lit 160cm tout confort</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
