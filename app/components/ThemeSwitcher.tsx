import profileData from '../../data/profile.json';

export default function ThemeSwitcher() {
  const { primaryColor, secondaryColor, backgroundColor } = profileData.theme;

  return (
    <style jsx global>{`
      :root {
        --primary-color: ${primaryColor};
        --secondary-color: ${secondaryColor};
        --background-color: ${backgroundColor};
      }
    `}</style>
  );
}