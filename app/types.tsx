// types.tsx

// Profile CTA Section
export interface ProfileCTA {
  text: string;
  link: string;
  backgroundColor: string;
  textColor: string;
}

// Navigation Bar
export interface NavLink {
  name: string;
  path: string;
}

export interface NavBar {
  backgroundColor: string;
  textColor: string;
  hoverColor: string;
  logo: string;
  logoText: string;
  links: NavLink[];
}

// Footer Section
export interface Footer {
  text: string;
  backgroundColor: string;
  textColor: string;
}

// Social Links
export interface SocialLinks {
  email?: string;
  github?: string;
  linkedin?: string;
  x?: string;
  instagram?: string;
  facebook?: string;
  youtube?: string;
  flickr?: string;
}

// About Section
export interface AboutItem {
  maintext: string;
  subtext: string;
}

export interface AboutSection {
  title: string;
  content: AboutItem[];
}

// Using an index signature to allow additional keys (like "tab1", "tab2")
// The keys can be either a string (for "longbio") or an AboutSection.
export interface AboutData {
  longbio: string;
  [key: string]: string | AboutSection;
}

// Work Experience
export interface WorkExperience {
  company: string;
  role: string;
  duration: string;
  description: string;
}

// Projects
export interface ProjectItem {
  title: string;
  description: string;
  link: string;
  image: string;
}

// Gallery Items
export interface GalleryItem {
  title: string;
  image: string;
  location: string;
}

// Theme
export interface Theme {
  primaryColor: string;
  secondaryColor: string;
  backgroundColor: string;
  textColor: string;
  font: string;
}

// Root Profile Data
export interface ProfileData {
  name: string;
  role: string;
  bio: string;
  title: string;
  profilePicture: string;
  profileCTA: ProfileCTA;
  navBar: NavBar;
  footer: Footer;
  socialLinks: SocialLinks;
  projects?: ProjectItem[];
  about: AboutData;
  workExperience?: WorkExperience[];
  gallery?: GalleryItem[];
  theme: Theme;
}
