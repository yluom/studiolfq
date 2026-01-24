import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Studio La Franqui | Location vacances vue mer à 50m de la plage",
  description: "Magnifique studio de 30m² avec vue mer à La Franqui. Balcon dans les pins, climatisation, lit 160cm. À 50m de la plage. Note 4.78/5 sur Airbnb.",
  keywords: "location vacances, La Franqui, studio vue mer, Leucate, Méditerranée, plage, kitesurf, Airbnb",
  authors: [{ name: "Studio La Franqui" }],
  openGraph: {
    title: "Studio La Franqui | Un paradis entre plage et nature",
    description: "Studio de vacances avec vue mer à 50m de la plage de La Franqui. Climatisation, balcon ombragé, parc arboré.",
    type: "website",
    locale: "fr_FR",
    images: [
      {
        url: "/images/photo1.jpg",
        width: 1200,
        height: 630,
        alt: "Vue mer depuis le studio La Franqui",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Studio La Franqui | Location vue mer",
    description: "Magnifique studio avec vue mer à La Franqui, à 50m de la plage.",
    images: ["/images/photo1.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        {children}
        {/* Subtle grain overlay for texture */}
        <div className="grain-overlay" aria-hidden="true" />
      </body>
    </html>
  );
}
