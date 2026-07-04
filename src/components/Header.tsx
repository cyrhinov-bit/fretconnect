import { useSidebarStore } from '../store/useSidebarStore';
import Breadcrumb from './Breadcrumb';
import ThemeToggle from './ThemeToggle';
import LucideIcon from './LucideIcon';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

export default function Header() {
  const { toggleOpen, toggleMobileOpen } = useSidebarStore();
  const [showUserMenu, setShowUserMenu] = useState(false);

  return (
    <header className="sticky top-0 z-30 flex h-14 md:h-16 w-full items-center justify-between border-b border-slate-200/50 dark:border-slate-850 bg-white/70 dark:bg-[#090A0C]/70 px-4 md:px-6 backdrop-blur-md">
      <div className="flex items-center gap-3">
        {/* Toggle mobile menu */}
        <button
          id="mobile-sidebar-toggle"
          onClick={toggleMobileOpen}
          className="flex p-1.5 rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 md:hidden cursor-pointer"
          aria-label="Toggle mobile sidebar"
        >
          <LucideIcon name="Menu" size={20} />
        </button>

        {/* Toggle desktop menu */}
        <button
          id="desktop-sidebar-toggle"
          onClick={toggleOpen}
          className="hidden md:flex p-1.5 rounded-lg text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/50 cursor-pointer transition-colors"
          aria-label="Toggle desktop sidebar"
        >
          <LucideIcon name="SlidersHorizontal" size={15} />
        </button>

        <Breadcrumb />
      </div>

      <div className="flex items-center gap-2 md:gap-4">
        {/* Search Bar - Stripe/Linear style */}
        <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 w-48 lg:w-64 rounded-lg bg-slate-100/50 hover:bg-slate-100 dark:bg-slate-900/40 dark:hover:bg-slate-900/80 border border-slate-200/10 text-slate-400 text-xs transition-colors cursor-pointer group">
          <LucideIcon name="Search" size={13} className="group-hover:text-slate-600 dark:group-hover:text-slate-300" />
          <span className="flex-1 text-left select-none text-slate-400 font-medium">Rechercher...</span>
          <kbd className="hidden lg:inline-flex items-center gap-0.5 px-1.5 py-0.5 text-[10px] font-mono rounded-sm bg-white dark:bg-slate-800 shadow-xs border border-slate-200/30 dark:border-slate-700/50 text-slate-400">
            ⌘K
          </kbd>
        </div>

        {/* Theme Toggle */}
        <ThemeToggle />

        {/* Notifications */}
        <button className="relative p-1.5 md:p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-colors cursor-pointer">
          <LucideIcon name="Bell" size={17} />
          <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-emerald-500 ring-2 ring-white dark:ring-[#090A0C]"></span>
        </button>

        {/* User Account Dropdown */}
        <div className="relative">
          <button
            id="user-menu-toggle"
            onClick={() => setShowUserMenu(!showUserMenu)}
            className="flex items-center gap-2 p-1 rounded-full md:rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-colors cursor-pointer"
          >
            <div className="flex h-7 w-7 md:h-8 md:w-8 items-center justify-center rounded-full bg-emerald-500 text-slate-950 font-bold text-xs border border-emerald-400/20 shadow-xs">
              CR
            </div>
            <div className="hidden md:flex flex-col text-left mr-1">
              <span className="text-xs font-semibold leading-none text-slate-800 dark:text-slate-200">Cyril Rhinov</span>
              <span className="text-[10px] text-slate-400 mt-0.5 font-medium">Super Admin</span>
            </div>
            <LucideIcon name="ChevronDown" size={11} className="hidden md:inline text-slate-400" />
          </button>

          {/* User dropdown content */}
          <AnimatePresence>
            {showUserMenu && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setShowUserMenu(false)} />
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.1 }}
                  className="absolute right-0 mt-2 w-52 z-50 rounded-xl border border-slate-250/50 dark:border-slate-800/75 bg-white dark:bg-[#0F1115] shadow-lg py-1 text-sm"
                >
                  <div className="px-3 py-2 border-b border-slate-100 dark:border-slate-800/60">
                    <p className="font-semibold text-slate-800 dark:text-slate-200">Cyril Rhinov</p>
                    <p className="text-xs text-slate-400 truncate">cyrhinov@gmail.com</p>
                  </div>
                  <button className="flex w-full items-center gap-2 px-3 py-2 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/40 text-left transition-colors cursor-pointer">
                    <LucideIcon name="User" size={14} />
                    <span>Mon profil</span>
                  </button>
                  <button className="flex w-full items-center gap-2 px-3 py-2 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/40 text-left transition-colors cursor-pointer">
                    <LucideIcon name="Settings" size={14} />
                    <span>Paramètres</span>
                  </button>
                  <div className="border-t border-slate-100 dark:border-slate-800/60 my-1"></div>
                  <button className="flex w-full items-center gap-2 px-3 py-2 text-rose-500 hover:bg-slate-50 dark:hover:bg-slate-800/40 text-left transition-colors cursor-pointer font-medium">
                    <LucideIcon name="LogOut" size={14} />
                    <span>Se déconnecter</span>
                  </button>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}
