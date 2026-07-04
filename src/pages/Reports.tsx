import { motion } from 'motion/react';
import LucideIcon from '../components/LucideIcon';

export default function Reports() {
  return (
    <div className="space-y-6 md:space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800/50 pb-5">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Rapports & Statistiques
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Générer, planifier et exporter les analyses opérationnelles et financières de FretConnect.
          </p>
        </div>
      </div>

      {/* Grid container with beautiful empty state */}
      <div className="p-12 bg-white dark:bg-[#0F1115] border border-slate-200/50 dark:border-slate-800/60 rounded-2xl flex flex-col items-center justify-center text-center space-y-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-50 dark:bg-slate-900 border border-slate-250/40 dark:border-slate-800 text-slate-400">
          <LucideIcon name="BarChart3" size={20} className="text-emerald-500" />
        </div>
        <div className="max-w-md space-y-1.5">
          <p className="font-bold text-sm text-slate-700 dark:text-slate-300">
            Prêt pour la génération d'analyses
          </p>
          <p className="text-xs text-slate-400 leading-relaxed">
            Configurez un module d'agrégation SQL ou intégrez une bibliothèque de visualisation (D3.js / Recharts) pour générer des courbes de performance, de chiffre d'affaires et de taux de remplissage.
          </p>
        </div>
      </div>
    </div>
  );
}
