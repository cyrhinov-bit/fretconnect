import { motion } from 'motion/react';
import LucideIcon from '../components/LucideIcon';

export default function Missions() {
  return (
    <div className="space-y-6 md:space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800/50 pb-5">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Missions
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Planification, répartition du fret, statut de livraison et fiches de transport numériques.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-3 py-1.5 text-xs font-semibold rounded-lg bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-250/60 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-all cursor-pointer">
            <LucideIcon name="Download" size={14} />
            <span>Rapports Missions</span>
          </button>
          <button className="flex items-center gap-2 px-3 py-1.5 text-xs font-semibold rounded-lg bg-emerald-500 hover:bg-emerald-600 text-slate-950 transition-all cursor-pointer shadow-xs font-medium">
            <LucideIcon name="Plus" size={14} />
            <span>Créer une Mission</span>
          </button>
        </div>
      </div>

      {/* Dispatch Board Columns layout structure (like a Kanban board for Missions dispatching) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { name: "Planifiées", color: "bg-blue-500" },
          { name: "En cours", color: "bg-amber-500" },
          { name: "Livrées / Clôturées", color: "bg-emerald-500" }
        ].map((column) => (
          <div key={column.name} className="p-4 bg-slate-100/55 dark:bg-[#0F1115] border border-slate-200/50 dark:border-slate-800/60 rounded-xl space-y-4">
            <div className="flex items-center gap-2 border-b border-slate-200/40 dark:border-slate-800/60 pb-3">
              <span className={`h-2 w-2 rounded-full ${column.color}`}></span>
              <span className="font-semibold text-xs tracking-wider uppercase text-slate-500 dark:text-slate-400">{column.name}</span>
            </div>

            {/* Empty column placeholder ready to load real interactive cards */}
            <div className="p-8 border border-dashed border-slate-250 dark:border-slate-800 rounded-lg flex flex-col items-center justify-center text-center space-y-3">
              <LucideIcon name="Route" size={16} className="text-slate-400 animate-pulse" />
              <div className="space-y-1">
                <p className="text-[11px] font-bold text-slate-600 dark:text-slate-300">Aucune mission</p>
                <p className="text-[10px] text-slate-400">Section prête pour l'intégration de vos hooks React Query.</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
