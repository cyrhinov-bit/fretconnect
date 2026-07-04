import { useThemeStore } from '../store/useThemeStore';
import { motion } from 'motion/react';
import LucideIcon from './LucideIcon';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <button
      id="theme-toggle-btn"
      onClick={toggleTheme}
      className="p-1.5 md:p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors focus:outline-hidden cursor-pointer"
      title={theme === 'dark' ? 'Activer le mode clair' : 'Activer le mode sombre'}
    >
      <motion.div
        key={theme}
        initial={{ opacity: 0, scale: 0.8, rotate: -20 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        exit={{ opacity: 0, scale: 0.8, rotate: 20 }}
        transition={{ duration: 0.15 }}
      >
        {theme === 'dark' ? (
          <LucideIcon name="Sun" size={18} />
        ) : (
          <LucideIcon name="Moon" size={18} />
        )}
      </motion.div>
    </button>
  );
}
