'use client';

import NavBar from './components/NavBar';
import Footer from './components/Footer';
import profileData from '../data/profile.json';
import './globals.css';
import { usePathname } from 'next/navigation';
import { ProfileData } from './types';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Cast profileData to ProfileData so that our types are available.
  const profile = profileData as ProfileData;
  const fontName = profile.theme.font;
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
        {/* Page title and basic SEO meta tags */}
        <title>{profile.title}</title>
        <meta name="description" content={profile.bio} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:title" content={profile.title} />
        <meta property="og:description" content={profile.bio} />
        <meta property="og:image" content={profile.profilePicture} />
        <meta property="og:type" content="website" />

        {/* Favicon */}
        <link rel="icon" href={profile.navBar.logo} type="image/png" />
        
        {/* Google Fonts */}
        <link rel="stylesheet" href={fontLink} />
      </head>
      <body
        style={
          {
            fontFamily: `${fontName}, sans-serif`,
            '--background': profile.theme.backgroundColor,
            '--foreground': profile.theme.textColor
          } as React.CSSProperties & { '--background': string; '--foreground': string }
        }
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
