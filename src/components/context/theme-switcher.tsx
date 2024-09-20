import React from 'react';
import { useTheme } from './theme-context';

const ThemeSwitcher: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      <img src={theme === 'light' ? '/sun.svg' : '/moon.svg'} alt={theme === 'light' ? 'Sun' : 'Moon'} className="w-5 h-5" />
    </button>
  );
};

export default ThemeSwitcher;
