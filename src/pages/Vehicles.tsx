import { motion } from 'motion/react';
import LucideIcon from '../components/LucideIcon';

export default function Vehicles() {
  return (
    <div className="space-y-6 md:space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800/50 pb-5">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Véhicules
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Suivi de la flotte, cartes vertes, visites techniques, et statut d'exploitation des camions.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-3 py-1.5 text-xs font-semibold rounded-lg bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-250/60 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-all cursor-pointer">
            <LucideIcon name="Download" size={14} />
            <span>Rapports d'activité</span>
          </button>
          <button className="flex items-center gap-2 px-3 py-1.5 text-xs font-semibold rounded-lg bg-emerald-500 hover:bg-emerald-600 text-slate-950 transition-all cursor-pointer shadow-xs font-medium">
            <LucideIcon name="Plus" size={14} />
            <span>Ajouter un Véhicule</span>
          </button>
        </div>
      </div>

      {/* Grid container with beautiful empty state */}
      <div className="p-12 bg-white dark:bg-[#0F1115] border border-slate-200/50 dark:border-slate-800/60 rounded-2xl flex flex-col items-center justify-center text-center space-y-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-50 dark:bg-slate-900 border border-slate-250/40 dark:border-slate-800 text-slate-400">
          <LucideIcon name="Car" size={20} className="text-emerald-500" />
        </div>
        <div className="max-w-md space-y-1.5">
          <p className="font-bold text-sm text-slate-700 dark:text-slate-300">
            Aucun véhicule enregistré
          </p>
          <p className="text-xs text-slate-400 leading-relaxed">
            Votre parc automobile n'a pas encore été importé. Reliez cette interface à votre base de données SQL / NoSQL pour activer le tracking GPS et le diagnostic technique en temps réel des véhicules.
          </p>
        </div>
        <button className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-100 dark:bg-slate-850 hover:bg-slate-200/60 dark:hover:bg-slate-800 transition-colors border border-slate-200/10 cursor-not-allowed" disabled>
          Importer la flotte
        </button>
      </div>
    </div>
  );
}
