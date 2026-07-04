import { motion } from 'motion/react';
import LucideIcon from '../components/LucideIcon';

export default function Dashboard() {
  return (
    <div className="space-y-6 md:space-y-8">
      {/* Title & Actions bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800/50 pb-5">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Tableau de Bord
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Vue d'ensemble de l'activité logistique et du réseau de transport.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-3 py-1.5 text-xs font-semibold rounded-lg bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-250/60 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-all cursor-pointer">
            <LucideIcon name="Calendar" size={14} />
            <span>Dernières 24 heures</span>
          </button>
          <button className="flex items-center gap-2 px-3 py-1.5 text-xs font-semibold rounded-lg bg-emerald-500 hover:bg-emerald-600 text-slate-950 transition-all cursor-pointer shadow-xs font-medium">
            <LucideIcon name="Plus" size={14} />
            <span>Nouvelle Mission</span>
          </button>
        </div>
      </div>

      {/* Analytics shell grids - Stripe/Linear look */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {[
          { title: "Volume d'Affaires", icon: "CreditCard", color: "text-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/10" },
          { title: "Missions Actives", icon: "Route", color: "text-blue-500 bg-blue-50/50 dark:bg-blue-950/10" },
          { title: "Transporteurs en Ligne", icon: "Truck", color: "text-amber-500 bg-amber-50/50 dark:bg-amber-950/10" },
          { title: "Litiges Ouverts", icon: "AlertOctagon", color: "text-rose-500 bg-rose-50/50 dark:bg-rose-950/10" }
        ].map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="p-5 rounded-2xl bg-white dark:bg-[#0F1115] border border-slate-200/50 dark:border-slate-800/60 hover:shadow-xs transition-all relative overflow-hidden group"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                {card.title}
              </span>
              <div className={`p-2 rounded-xl ${card.color}`}>
                <LucideIcon name={card.icon} size={16} />
              </div>
            </div>
            
            {/* Elegant Loading/Ready State instead of fake data */}
            <div className="mt-4 space-y-2">
              <div className="h-7 w-24 bg-slate-100 dark:bg-slate-800/80 rounded-md animate-pulse"></div>
              <div className="flex items-center gap-1.5 text-[10px] text-slate-400 font-mono">
                <LucideIcon name="Activity" size={10} className="text-slate-300 animate-pulse" />
                <span>Prêt à connecter le hook API</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Main workspace widgets */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left main grid segment */}
        <div className="lg:col-span-2 space-y-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-[#0F1115] border border-slate-200/50 dark:border-slate-800/60">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800/60 pb-4">
              <div>
                <h3 className="font-bold text-base text-slate-800 dark:text-slate-200">
                  Activité Logistique en Temps Réel
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Flux d'informations géolocalisées et routières.
                </p>
              </div>
              <LucideIcon name="Globe" size={16} className="text-slate-400" />
            </div>

            {/* Premium Empty State */}
            <div className="flex flex-col items-center justify-center py-16 text-center space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-50 dark:bg-slate-900 border border-slate-250/40 dark:border-slate-800/80 text-slate-400">
                <LucideIcon name="Activity" size={20} className="animate-pulse text-emerald-500" />
              </div>
              <div className="max-w-xs space-y-1.5">
                <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                  En attente des flux de données
                </p>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Connectez un fournisseur WebSocket ou un hook TanStack Query sur <code className="font-mono bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded text-[10px]">useMissions()</code> pour alimenter ce widget.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right side helper widgets */}
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-[#0F1115] border border-slate-200/50 dark:border-slate-800/60">
            <h3 className="font-bold text-base text-slate-800 dark:text-slate-200 border-b border-slate-100 dark:border-slate-800/60 pb-4">
              Alertes & Notifications
            </h3>
            
            {/* Premium Empty State */}
            <div className="flex flex-col items-center justify-center py-12 text-center space-y-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-50 dark:bg-slate-900 text-slate-400 border border-slate-250/40 dark:border-slate-800/80">
                <LucideIcon name="Check" size={18} className="text-emerald-500" />
              </div>
              <div className="space-y-1">
                <p className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                  Aucune alerte critique
                </p>
                <p className="text-[11px] text-slate-400">
                  Tout le réseau FretConnect fonctionne de manière optimale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
