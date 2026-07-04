import { motion } from 'motion/react';
import LucideIcon from '../components/LucideIcon';

export default function Transporters() {
  return (
    <div className="space-y-6 md:space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800/50 pb-5">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Transporteurs
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Gérer les compagnies de fret partenaires, contrats d'affiliation et documents administratifs.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-3 py-1.5 text-xs font-semibold rounded-lg bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-250/60 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-all cursor-pointer">
            <LucideIcon name="Download" size={14} />
            <span>Rapports transporteurs</span>
          </button>
          <button className="flex items-center gap-2 px-3 py-1.5 text-xs font-semibold rounded-lg bg-emerald-500 hover:bg-emerald-600 text-slate-950 transition-all cursor-pointer shadow-xs font-medium">
            <LucideIcon name="Plus" size={14} />
            <span>Enregistrer un Partenaire</span>
          </button>
        </div>
      </div>

      {/* Tabs list filter shell */}
      <div className="flex border-b border-slate-200/55 dark:border-slate-800/60 gap-4">
        {['Tous', 'Agréés', 'En attente', 'Suspendus'].map((tab, idx) => (
          <button
            key={tab}
            className={`px-3 py-2 text-xs font-semibold tracking-wide border-b-2 transition-all cursor-pointer -mb-[1.5px] ${
              idx === 0
                ? 'border-emerald-500 text-emerald-600 dark:text-emerald-400'
                : 'border-transparent text-slate-400 dark:text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Grid container with beautiful ready-for-real-data outline */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-3 p-12 bg-white dark:bg-[#0F1115] border border-slate-200/50 dark:border-slate-800/60 rounded-2xl flex flex-col items-center justify-center text-center space-y-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-50 dark:bg-slate-900 border border-slate-250/40 dark:border-slate-800 text-slate-400">
            <LucideIcon name="Truck" size={20} className="text-emerald-500 animate-pulse" />
          </div>
          <div className="max-w-md space-y-1.5">
            <p className="font-bold text-sm text-slate-700 dark:text-slate-300">
              Aucune fiche de transporteur enregistrée
            </p>
            <p className="text-xs text-slate-400 leading-relaxed">
              Préparez-vous à relier votre structure de données. Cette grille de cartes interactives affichera la liste des compagnies affiliées une fois que vous y aurez injecté le hook ou le endpoint correspondant.
            </p>
          </div>
          <div className="flex gap-3">
            <button className="px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 hover:bg-emerald-500/20 cursor-not-allowed" disabled>
              Importer des fiches de transport
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
