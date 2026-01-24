'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import Image from 'next/image';

const images = [
  { src: '/images/photo1.jpg', alt: 'Vue mer depuis le balcon' },
  { src: '/images/photo2.jpg', alt: 'Intérieur du studio' },
  { src: '/images/photo3.jpg', alt: 'Espace séjour' },
  { src: '/images/photo4.jpg', alt: 'Coin cuisine' },
  { src: '/images/photo5.jpg', alt: 'Salle de bain' },
  { src: '/images/photo6.jpg', alt: 'Détails' },
  { src: '/images/photo7.jpg', alt: 'Extérieur' },
  { src: '/images/photo8.jpg', alt: 'Environnement' },
];

export default function Gallery() {
  const [isVisible, setIsVisible] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
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

  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    document.body.style.overflow = '';
  }, []);

  const nextImage = useCallback(() => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  }, []);

  const prevImage = useCallback(() => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, closeLightbox, nextImage, prevImage]);

  return (
    <>
      <section
        ref={sectionRef}
        id="gallery"
        className="section-padding bg-[#fdf6e9] relative overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f4a460]/30 to-transparent" />

        <div className="container-narrow">
          {/* Section Header */}
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="decorative-line" />
              <span className="text-sm uppercase tracking-[0.2em] text-[#1e3a5f]/70">
                Galerie
              </span>
              <div className="decorative-line" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-[#1e3a5f]">
              Découvrez votre <span className="italic text-[#f4a460]">futur séjour</span>
            </h2>
          </div>

          {/* Masonry Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {images.map((image, index) => {
              const isLarge = index === 0 || index === 5;
              return (
                <div
                  key={index}
                  className={`relative image-hover cursor-pointer rounded-xl overflow-hidden shadow-lg ${
                    isLarge ? 'col-span-2 row-span-2' : ''
                  } transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                  style={{
                    transitionDelay: `${index * 100}ms`,
                    aspectRatio: isLarge ? '1' : '1',
                  }}
                  onClick={() => openLightbox(index)}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes={isLarge ? '(max-width: 768px) 100vw, 50vw' : '(max-width: 768px) 50vw, 25vw'}
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-[#1e3a5f]/0 hover:bg-[#1e3a5f]/20 transition-all duration-300 flex items-center justify-center">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="1.5"
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <circle cx="11" cy="11" r="8" />
                      <path d="m21 21-4.35-4.35M11 8v6M8 11h6" />
                    </svg>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-10"
            aria-label="Fermer"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>

          {/* Navigation */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 md:left-8 text-white/70 hover:text-white transition-colors p-2"
            aria-label="Image précédente"
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 md:right-8 text-white/70 hover:text-white transition-colors p-2"
            aria-label="Image suivante"
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>

          {/* Image */}
          <div
            className="relative max-w-[90vw] max-h-[85vh] animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[currentImage].src}
              alt={images[currentImage].alt}
              width={1200}
              height={800}
              className="object-contain max-h-[85vh] w-auto"
            />
          </div>

          {/* Image counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-sm tracking-wider">
            <span className="text-white font-medium">{currentImage + 1}</span>
            <span className="mx-2">/</span>
            <span>{images.length}</span>
          </div>
        </div>
      )}
    </>
  );
}
