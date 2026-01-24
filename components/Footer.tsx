'use client';

import { useEffect, useRef, useState } from 'react';

export default function Footer() {
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
    <footer ref={sectionRef} className="relative overflow-hidden">
      {/* CTA Section */}
      <div className="bg-gradient-to-br from-[#f5deb3] via-[#fdf6e9] to-[#f5deb3] py-20 px-6">
        <div
          className={`max-w-3xl mx-auto text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Decorative sun */}
          <div className="mb-8 flex justify-center">
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" className="text-[#f4a460]">
              <circle cx="40" cy="40" r="16" fill="currentColor" />
              {[...Array(12)].map((_, i) => (
                <line
                  key={i}
                  x1="40"
                  y1="8"
                  x2="40"
                  y2="18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  transform={`rotate(${i * 30} 40 40)`}
                />
              ))}
            </svg>
          </div>

          <h2 className="font-display text-4xl md:text-5xl text-[#1e3a5f] mb-4">
            Prêt pour les vacances ?
          </h2>
          <p className="text-gray-600 text-lg mb-10 max-w-xl mx-auto">
            Réservez dès maintenant votre séjour à La Franqui et profitez de la Méditerranée.
          </p>

          <a
            href="https://www.airbnb.fr/rooms/17790371?source_impression_id=p3_1769273301_P34sI3axPQakvsaV"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-3"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.001 18.575c-1.135 0-2.162-.362-2.978-1.043-.823-.687-1.345-1.654-1.345-2.724 0-1.033.51-2.048 1.178-2.973.668-.924 1.513-1.749 2.245-2.42l.9-.826.9.826c.732.671 1.577 1.496 2.245 2.42.668.925 1.178 1.94 1.178 2.973 0 1.07-.522 2.037-1.345 2.724-.816.681-1.843 1.043-2.978 1.043zm0-8.11c-.62.58-1.307 1.269-1.866 2.046-.56.777-.912 1.564-.912 2.297 0 .722.328 1.37.892 1.84.564.471 1.234.727 1.886.727s1.322-.256 1.886-.727c.564-.47.892-1.118.892-1.84 0-.733-.353-1.52-.912-2.297-.559-.777-1.246-1.467-1.866-2.046z" />
            </svg>
            Réserver sur Airbnb
          </a>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-[#1e3a5f] py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Logo / Name */}
            <div className="text-center md:text-left">
              <span className="font-display text-2xl text-white">Studio La Franqui</span>
              <p className="text-white/50 text-sm mt-1">Un paradis entre plage et nature</p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-5">
              <a
                href="https://www.airbnb.fr/rooms/17790371?source_impression_id=p3_1769273301_P34sI3axPQakvsaV"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-[#f4a460] transition-colors"
                aria-label="Airbnb"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.001 18.575c-1.135 0-2.162-.362-2.978-1.043-.823-.687-1.345-1.654-1.345-2.724 0-1.033.51-2.048 1.178-2.973.668-.924 1.513-1.749 2.245-2.42l.9-.826.9.826c.732.671 1.577 1.496 2.245 2.42.668.925 1.178 1.94 1.178 2.973 0 1.07-.522 2.037-1.345 2.724-.816.681-1.843 1.043-2.978 1.043z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/joli_studio_la_franqui_/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-[#f4a460] transition-colors"
                aria-label="Instagram"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/studiolafranqui/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-[#f4a460] transition-colors"
                aria-label="Facebook"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>

            {/* Navigation */}
            <nav className="flex gap-6 text-sm">
              <a href="#about" className="text-white/70 hover:text-white transition-colors">
                À propos
              </a>
              <a href="#gallery" className="text-white/70 hover:text-white transition-colors">
                Galerie
              </a>
              <a href="#amenities" className="text-white/70 hover:text-white transition-colors">
                Équipements
              </a>
              <a href="#location" className="text-white/70 hover:text-white transition-colors">
                Localisation
              </a>
            </nav>
          </div>

          {/* Divider */}
          <div className="h-px bg-white/10 my-8" />

          {/* Copyright */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-white/40 text-sm">
            <p>&copy; {new Date().getFullYear()} Studio La Franqui. Tous droits réservés.</p>
            <p className="flex items-center gap-2">
              <span>Fait avec</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#f4a460">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
              <span>sur la côte méditerranéenne</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
