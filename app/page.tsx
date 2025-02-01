'use client'
import Profile from './components/Profile';
import ThemeSwitcher from './components/ThemeSwitcher';

export default function Home() {
  return (
    <main className="p-8">
      <ThemeSwitcher />
      <Profile />
    </main>
  );
}