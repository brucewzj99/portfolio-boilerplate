'use client'

import NavBar from './components/NavBar';
import Footer from './components/Footer';
import profileData from '../data/profile.json';
import './globals.css';
import { usePathname } from 'next/navigation';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const fontName = profileData.theme.font;
  const fontLink = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(
    fontName
  )}:wght@400;700&display=swap`;
  const pathname = usePathname();

  const mainClassName =
    pathname === '/gallery'
      ? 'flex-grow w-full px-4 sm:px-6 lg:px-8'
      : 'flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8';

  return (
    <html lang="en">
      <head>
        <title>{profileData.title}</title>
        <link rel="stylesheet" href={fontLink} />
      </head>
      <body
        style={{
          fontFamily: `${fontName}, sans-serif`,
          '--background': profileData.theme.backgroundColor,
          '--foreground': profileData.theme.textColor
        }}
        className="min-h-screen flex flex-col"
      >
        <NavBar />
        <main className={mainClassName}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}