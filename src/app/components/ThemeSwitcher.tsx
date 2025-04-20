'use client';

import { useTheme } from '../context/ThemeContext';
import { useState, useEffect } from 'react';

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);

  // Safe access to theme context
  let darkMode = false;
  let toggleDarkMode = () => {};

  try {
    const theme = useTheme();
    darkMode = theme.darkMode;
    toggleDarkMode = theme.toggleDarkMode;
  } catch (e) {
    // Theme context not available yet
  }

  // Only show the theme switcher after mounting to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render anything until mounted to avoid hydration mismatch
  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={toggleDarkMode}
      className="fixed bottom-6 right-6 p-3 rounded-full glass shadow-lg transition-all duration-500 ease-in-out z-50
                 text-gray-800 dark:text-white
                 hover:shadow-xl transform hover:scale-110"
      aria-label={darkMode ? '라이트 모드로 전환' : '다크 모드로 전환'}
    >
      <div className="relative w-6 h-6 overflow-hidden">
        {/* Sun icon with animation */}
        <div 
          className={`absolute inset-0 transition-transform duration-500 ${
            darkMode ? 'translate-y-0' : 'translate-y-full'
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-yellow-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        </div>

        {/* Moon icon with animation */}
        <div 
          className={`absolute inset-0 transition-transform duration-500 ${
            darkMode ? 'translate-y-full' : 'translate-y-0'
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-blue-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        </div>
      </div>
    </button>
  );
} 
