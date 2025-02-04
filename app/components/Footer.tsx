import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faLinkedin,
  faXTwitter,
  faYoutube,
  faInstagram,
  faFacebook,
  faFlickr
} from '@fortawesome/free-brands-svg-icons';
import profileData from '../../data/profile.json';
import { SocialLinks } from '../types';
import { JSX } from 'react';

export default function Footer() {
  const { socialLinks, name } = profileData;
  const currentYear = new Date().getFullYear();

  const { backgroundColor, text: footerText, textColor: footerTextColor } = profileData.footer;
  const socialIcons: Record<keyof SocialLinks, JSX.Element> = {
    email: <FontAwesomeIcon icon={faEnvelope} className="fa-icon" />,
    github: <FontAwesomeIcon icon={faGithub} className="fa-icon" />,
    linkedin: <FontAwesomeIcon icon={faLinkedin} className="fa-icon" />,
    x: <FontAwesomeIcon icon={faXTwitter} className="fa-icon" />,
    youtube: <FontAwesomeIcon icon={faYoutube} className="fa-icon" />,
    facebook: <FontAwesomeIcon icon={faFacebook} className="fa-icon" />,
    instagram: <FontAwesomeIcon icon={faInstagram} className="fa-icon" />,
    flickr: <FontAwesomeIcon icon={faFlickr} className="fa-icon" />
  };

  return (
    <footer
      className="p-4 mt-8"
      style={{
        backgroundColor: backgroundColor || '#FFFFFF',
        color: footerTextColor || '#000000'
      }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <p className="text-left">
          © {currentYear} {name}. {footerText}
        </p>
        <div className="flex space-x-6 justify-end">
          {Object.entries(socialLinks).map(([platform, link]) => (
            link && (
              <a
                key={platform}
                href={platform === 'email' ? `mailto:${link}` : link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                style={{ color: footerTextColor || '#000000' }}
              >
                {socialIcons[platform as keyof SocialLinks]}
              </a>
            )
          ))}
        </div>
      </div>
    </footer>
  );
}