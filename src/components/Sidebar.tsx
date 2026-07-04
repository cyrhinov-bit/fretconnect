import { Link, useLocation } from 'react-router-dom';
import { useSidebarStore } from '../store/useSidebarStore';
import { navigationItems } from '../config/navigation';
import LucideIcon from './LucideIcon';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

export default function Sidebar() {
  const { isOpen, isMobileOpen, setMobileOpen } = useSidebarStore();
  const location = useLocation();

  const sidebarContent = (
    <div className="flex flex-col h-full bg-white dark:bg-[#090A0C] border-r border-slate-200/50 dark:border-slate-800/80 transition-colors duration-200">
      {/* Brand logo & Platform name */}
      <div className={cn(
        "flex items-center h-14 md:h-16 px-4 border-b border-slate-100 dark:border-slate-800/60 transition-all",
        isOpen ? "justify-between" : "justify-center"
      )}>
        <Link 
          id="sidebar-logo"
          to="/" 
          className="flex items-center gap-2.5 font-sans focus:outline-hidden"
          onClick={() => setMobileOpen(false)}
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-950 dark:bg-slate-100 shadow-md">
            <LucideIcon name="Route" className="text-white dark:text-slate-950" size={18} />
          </div>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="flex flex-col"
            >
              <span className="font-bold text-sm tracking-tight text-slate-800 dark:text-slate-100">
                FretConnect
              </span>
              <span className="text-[10px] text-emerald-500 font-semibold flex items-center gap-1 leading-none mt-0.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                Admin PWA
              </span>
            </motion.div>
          )}
        </Link>
      </div>

      {/* Nav list */}
      <div className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
        {navigationItems.map((item) => {
          // Precise active route calculation
          const isActive = item.href === '/' 
            ? location.pathname === '/' 
            : location.pathname.startsWith(item.href);

          return (
            <Link
              id={`sidebar-link-${item.title.toLowerCase()}`}
              key={item.title}
              to={item.href}
              onClick={() => setMobileOpen(false)}
              className={cn(
                "group relative flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs md:text-[13px] font-medium transition-all duration-150 focus:outline-hidden cursor-pointer",
                isActive 
                  ? "text-emerald-600 dark:text-emerald-400 font-semibold" 
                  : "text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-900/40"
              )}
            >
              {/* Highlight background pill */}
              {isActive && (
                <motion.div
                  layoutId="activeNavIndicator"
                  className="absolute inset-0 bg-emerald-50/50 dark:bg-emerald-950/10 border-l-2 border-emerald-500 rounded-xl -z-10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}

              <div className={cn(
                "transition-transform duration-150 group-hover:scale-105",
                isActive ? "text-emerald-500" : "text-slate-400 dark:text-slate-500 group-hover:text-slate-600 dark:group-hover:text-slate-400"
              )}>
                <LucideIcon name={item.iconName} size={18} />
              </div>

              {isOpen && (
                <motion.span 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex-1 truncate"
                >
                  {item.title}
                </motion.span>
              )}

              {isOpen && item.badge && (
                <span className="px-1.5 py-0.5 text-[10px] font-semibold rounded-md bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200/20">
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}
      </div>

      {/* Footer info inside sidebar */}
      <div className="p-4 border-t border-slate-100 dark:border-slate-800/60">
        <div className={cn(
          "flex items-center text-[10px] text-slate-400 dark:text-slate-500 font-mono",
          isOpen ? "justify-between" : "justify-center"
        )}>
          {isOpen ? (
            <>
              <span className="flex items-center gap-1.5 font-medium">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                Réseau actif
              </span>
              <span>v1.0.0</span>
            </>
          ) : (
            <div className="h-2 w-2 rounded-full bg-emerald-500" title="Réseau actif" />
          )}
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile drawer backdrop */}
      <AnimatePresence>
        {isMobileOpen && (
          <div className="md:hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-40 bg-black"
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.3 }}
              className="fixed inset-y-0 left-0 w-64 z-50 shadow-2xl h-full"
            >
              {sidebarContent}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Desktop sidebar */}
      <div className={cn(
        "hidden md:block h-screen sticky top-0 shrink-0 transition-all duration-300 z-30",
        isOpen ? "w-64" : "w-16"
      )}>
        {sidebarContent}
      </div>
    </>
  );
}
