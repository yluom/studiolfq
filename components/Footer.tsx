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
            href="https://www.airbnb.fr/rooms/17790371"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white hover:bg-gray-50 text-[#FF5A5F] font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <svg width="24" height="24" viewBox="0 0 32 32" fill="#FF5A5F">
              <path d="M29.524 22.279c-0.372-1.044-0.752-1.907-1.183-2.74l0.058 0.123v-0.038c-2.361-5.006-4.551-9.507-6.632-13.551l-0.139-0.204c-1.483-3.040-2.544-4.866-5.627-4.866-3.049 0-4.344 2.118-5.667 4.871l-0.101 0.2c-2.086 4.044-4.275 8.551-6.627 13.555v0.066l-0.699 1.525c-0.262 0.63-0.396 0.96-0.431 1.058-0.279 0.691-0.441 1.492-0.441 2.332 0 3.526 2.859 6.385 6.385 6.385 0.020 0 0.040-0 0.060-0l-0.003 0c0.117-0 0.232-0.012 0.342-0.036l-0.011 0.002h0.465c2.744-0.574 5.073-2.061 6.71-4.121l0.018-0.024c1.656 2.082 3.983 3.568 6.65 4.132l0.075 0.013h0.465c0.099 0.021 0.214 0.034 0.331 0.034h0c0.017 0 0.038 0 0.059 0 3.526 0 6.384-2.858 6.384-6.384 0-0.84-0.162-1.642-0.457-2.376l0.015 0.043zM27.999 25.266c-0.262 1.581-1.309 2.87-2.719 3.467l-0.030 0.011c-2.815 1.225-5.602-0.729-7.988-3.379 3.945-4.937 4.674-8.782 2.98-11.269-0.887-1.289-2.353-2.123-4.015-2.123-0.080 0-0.159 0.002-0.237 0.006l0.011-0c-0.023-0-0.049-0.001-0.076-0.001-2.816 0-5.098 2.282-5.098 5.098 0 0.583 0.098 1.142 0.278 1.664l-0.011-0.036c0.782 2.574 2.032 4.8 3.665 6.686l-0.019-0.023c-0.978 1.128-2.103 2.094-3.352 2.879l-0.062 0.036c-0.657 0.387-1.43 0.657-2.256 0.758l-0.029 0.003c-0.186 0.027-0.401 0.043-0.62 0.043-2.474 0-4.48-2.006-4.48-4.48 0-0.599 0.117-1.17 0.33-1.692l-0.011 0.030c0.165-0.431 0.494-1.225 1.056-2.451l0.031-0.066c1.829-3.971 4.051-8.485 6.604-13.49l0.066-0.165 0.725-1.395c0.348-0.857 0.932-1.559 1.672-2.043l0.017-0.010c0.425-0.248 0.935-0.395 1.48-0.395 0.027 0 0.054 0 0.081 0.001l-0.004-0c1.024 0.009 1.933 0.497 2.514 1.251l0.006 0.008c0.197 0.299 0.431 0.696 0.727 1.191l0.697 1.361 0.1 0.199c2.551 5.004 4.775 9.507 6.597 13.489l0.033 0.031 0.666 1.525 0.397 0.955c0.199 0.493 0.314 1.065 0.314 1.664 0 0.232-0.017 0.46-0.051 0.683l0.003-0.025zM16.001 23.841c-1.367-1.544-2.407-3.411-2.991-5.47l-0.024-0.099c-0.126-0.348-0.198-0.749-0.198-1.167 0-0.711 0.21-1.372 0.57-1.927l-0.008 0.014c0.543-0.803 1.45-1.325 2.479-1.325 0.060 0 0.12 0.002 0.18 0.005l-0.008-0c0.052-0.003 0.112-0.005 0.173-0.005 1.030 0 1.938 0.525 2.469 1.323l0.007 0.011c0.351 0.538 0.56 1.196 0.56 1.904 0 0.422-0.074 0.826-0.211 1.201l0.008-0.024c-0.624 2.155-1.661 4.019-3.029 5.588l0.015-0.017z"/>
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
                href="https://www.airbnb.fr/rooms/17790371"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FF5A5F] hover:opacity-80 transition-opacity"
                aria-label="Airbnb"
              >
                <svg width="22" height="22" viewBox="0 0 32 32" fill="currentColor">
                  <path d="M29.524 22.279c-0.372-1.044-0.752-1.907-1.183-2.74l0.058 0.123v-0.038c-2.361-5.006-4.551-9.507-6.632-13.551l-0.139-0.204c-1.483-3.040-2.544-4.866-5.627-4.866-3.049 0-4.344 2.118-5.667 4.871l-0.101 0.2c-2.086 4.044-4.275 8.551-6.627 13.555v0.066l-0.699 1.525c-0.262 0.63-0.396 0.96-0.431 1.058-0.279 0.691-0.441 1.492-0.441 2.332 0 3.526 2.859 6.385 6.385 6.385 0.020 0 0.040-0 0.060-0l-0.003 0c0.117-0 0.232-0.012 0.342-0.036l-0.011 0.002h0.465c2.744-0.574 5.073-2.061 6.71-4.121l0.018-0.024c1.656 2.082 3.983 3.568 6.65 4.132l0.075 0.013h0.465c0.099 0.021 0.214 0.034 0.331 0.034h0c0.017 0 0.038 0 0.059 0 3.526 0 6.384-2.858 6.384-6.384 0-0.84-0.162-1.642-0.457-2.376l0.015 0.043zM27.999 25.266c-0.262 1.581-1.309 2.87-2.719 3.467l-0.030 0.011c-2.815 1.225-5.602-0.729-7.988-3.379 3.945-4.937 4.674-8.782 2.98-11.269-0.887-1.289-2.353-2.123-4.015-2.123-0.080 0-0.159 0.002-0.237 0.006l0.011-0c-0.023-0-0.049-0.001-0.076-0.001-2.816 0-5.098 2.282-5.098 5.098 0 0.583 0.098 1.142 0.278 1.664l-0.011-0.036c0.782 2.574 2.032 4.8 3.665 6.686l-0.019-0.023c-0.978 1.128-2.103 2.094-3.352 2.879l-0.062 0.036c-0.657 0.387-1.43 0.657-2.256 0.758l-0.029 0.003c-0.186 0.027-0.401 0.043-0.62 0.043-2.474 0-4.48-2.006-4.48-4.48 0-0.599 0.117-1.17 0.33-1.692l-0.011 0.030c0.165-0.431 0.494-1.225 1.056-2.451l0.031-0.066c1.829-3.971 4.051-8.485 6.604-13.49l0.066-0.165 0.725-1.395c0.348-0.857 0.932-1.559 1.672-2.043l0.017-0.010c0.425-0.248 0.935-0.395 1.48-0.395 0.027 0 0.054 0 0.081 0.001l-0.004-0c1.024 0.009 1.933 0.497 2.514 1.251l0.006 0.008c0.197 0.299 0.431 0.696 0.727 1.191l0.697 1.361 0.1 0.199c2.551 5.004 4.775 9.507 6.597 13.489l0.033 0.031 0.666 1.525 0.397 0.955c0.199 0.493 0.314 1.065 0.314 1.664 0 0.232-0.017 0.46-0.051 0.683l0.003-0.025zM16.001 23.841c-1.367-1.544-2.407-3.411-2.991-5.47l-0.024-0.099c-0.126-0.348-0.198-0.749-0.198-1.167 0-0.711 0.21-1.372 0.57-1.927l-0.008 0.014c0.543-0.803 1.45-1.325 2.479-1.325 0.060 0 0.12 0.002 0.18 0.005l-0.008-0c0.052-0.003 0.112-0.005 0.173-0.005 1.030 0 1.938 0.525 2.469 1.323l0.007 0.011c0.351 0.538 0.56 1.196 0.56 1.904 0 0.422-0.074 0.826-0.211 1.201l0.008-0.024c-0.624 2.155-1.661 4.019-3.029 5.588l0.015-0.017z"/>
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
              <a href="#a-propos" className="text-white/70 hover:text-white transition-colors">
                À propos
              </a>
              <a href="#galerie" className="text-white/70 hover:text-white transition-colors">
                Galerie
              </a>
              <a href="#equipements" className="text-white/70 hover:text-white transition-colors">
                Équipements
              </a>
              <a href="#localisation" className="text-white/70 hover:text-white transition-colors">
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
