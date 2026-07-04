import { create } from 'zustand';
import { Theme } from '../types';

interface ThemeState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

export const useThemeStore = create<ThemeState>((set) => {
  // Check local storage or system preference on load
  const savedTheme = typeof window !== 'undefined' ? localStorage.getItem('fretconnect-theme') as Theme | null : null;
  const systemPrefersDark = typeof window !== 'undefined' ? window.matchMedia('(prefers-color-scheme: dark)').matches : false;
  const initialTheme: Theme = savedTheme || (systemPrefersDark ? 'dark' : 'light');

  // Apply theme initial class
  if (typeof window !== 'undefined') {
    if (initialTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  return {
    theme: initialTheme,
    setTheme: (theme) => {
      localStorage.setItem('fretconnect-theme', theme);
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      set({ theme });
    },
    toggleTheme: () => {
      set((state) => {
        const nextTheme: Theme = state.theme === 'light' ? 'dark' : 'light';
        localStorage.setItem('fretconnect-theme', nextTheme);
        if (nextTheme === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
        return { theme: nextTheme };
      });
    },
  };
});
