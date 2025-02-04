'use client';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import profileData from '../../data/profile.json';
import { ProfileData } from '../types';
import Image from 'next/image';

export default function NavBar() {
  const { navBar, theme } = profileData as ProfileData;
  const { logo, logoText, links, backgroundColor, textColor: navTextColor, hoverColor } = navBar;
  const { primaryColor } = theme;
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const linkClasses = (path: string) =>
    `transition-colors hover:text-[var(--link-hover-color)] ${
      pathname === path ? 'text-[var(--link-hover-color)] font-bold' : ''
    }`;

  return (
    <nav
      className="p-4 shadow-md"
      style={{
        backgroundColor: backgroundColor || '#FFFFFF',
        color: navTextColor || '#000000',
        '--link-hover-color': hoverColor || primaryColor || '#123123'
      }  as React.CSSProperties & { '--link-hover-color': string } }
    >
      <div className="max-w-7xl mx-auto">
        {/* Desktop Navbar */}
        <div className="hidden md:flex justify-between items-center">
          <Link href="/">
            <div className="flex items-center cursor-pointer">
              {logo ? (
                <Image src={logo} alt="Logo" width={32} height={32} className="h-8" />
              ) : (
                <span className="text-xl font-bold">{logoText}</span>
              )}
            </div>
          </Link>
          <div className="flex items-center space-x-4">
            {links.map((link, index) => (
              <Link key={index} href={link.path} className={linkClasses(link.path)}>
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Navbar */}
        <div className="md:hidden">
          <div className="flex justify-between items-center">
            <Link href="/">
              <div className="flex items-center cursor-pointer">
                {logo ? (
                  <Image src={logo} alt="Logo" width={32} height={32} className="h-8" />
              ) : (
                  <span className="text-xl font-bold">{logoText}</span>
                )}
              </div>
            </Link>
            <button
              className="focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16m-7 6h7"
                  }
                />
              </svg>
            </button>
          </div>
          {isMenuOpen && (
            <div className="mt-4 flex flex-col space-y-2">
              {links.map((link, index) => (
                <Link
                  key={index}
                  href={link.path}
                  className={`block ${linkClasses(link.path)}`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}