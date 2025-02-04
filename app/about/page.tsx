'use client';
import { useState } from 'react';
import profileData from '../../data/profile.json';
import { ProfileData, AboutItem, AboutSection } from '../types';

export default function About() {
  const { about, theme } = profileData as ProfileData;
  const { longbio } = about;
  const { primaryColor, secondaryColor, textColor } = theme;

  // Exclude 'longbio' from tab navigation if present
  const tabKeys = Object.keys(about).filter(key => key !== 'longbio').sort();
  const [activeTab, setActiveTab] = useState(tabKeys.length ? tabKeys[0] : '');

  const activeContent = about[activeTab];

  return (
    <div className="relative max-w-7xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">About Me</h1>
      <p className="text-lg mb-6" style={{ color: textColor }}>
        {longbio ||
          'Welcome to my about page. Here you can learn more about me.'}
      </p>

      {tabKeys.length > 0 && (
        <>
          <div className="border-b mb-4">
            <nav className="flex space-x-4">
              {tabKeys.map(key => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  style={{
                    borderColor: activeTab === key ? secondaryColor : 'transparent'
                  }}
                  className="py-2 px-4 border-b-2 focus:outline-none"
                >
                  {(about[key] as AboutSection).title || key.toUpperCase()}
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div>
            {activeContent && typeof activeContent !== 'string' &&
            activeContent.content ? (
              <>
                {activeContent.content.map((item: AboutItem, index: number) => (
                  <div key={index} className="mb-4">
                    <h3
                      className="text-xl font-medium"
                      style={{ color: primaryColor }}
                    >
                      {item.maintext}
                    </h3>
                    <p className="text-md" style={{ color: textColor }}>
                      {item.subtext}
                    </p>
                  </div>
                ))}
              </>
            ) : (
              <p style={{ color: textColor }}>{activeContent as string}</p>
            )}
          </div>
        </>
      )}
    </div>
  );
}