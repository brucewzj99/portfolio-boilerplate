'use client';
import profileData from '../../data/profile.json';
import { ProfileData } from '../types';

export default function Profile() {
  const { name, role, bio, profilePicture, profileCTA } = profileData as ProfileData;

  return (
    <div
      className="flex flex-col md:flex-row items-center justify-between p-6"
    >
      {/* Image appears first on mobile */}
      <div className="flex-1 p-4 flex justify-center mb-4 md:mb-0 order-1 md:order-2">
        <img
          src={profilePicture}
          alt="Profile Picture"
          className="w-48 h-48 md:w-72 md:h-72 rounded-full object-cover object-center"
        />
      </div>
      {/* Text appears below on mobile */}
      <div className="flex-1 p-4 text-center md:text-left order-2 md:order-1">
        <h1 className="text-4xl font-bold">{name}</h1>
        <p className="text-lg mt-2">{role}</p>
        <p className="mt-4 text-m">{bio}</p>
        {profileCTA && (
          <div className="mt-6">
            <a
              href={profileCTA.link}
              style={{ backgroundColor: profileCTA.backgroundColor, color: profileCTA.textColor }}
              className="px-6 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors inline-block"
            >
              {profileCTA.text}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}