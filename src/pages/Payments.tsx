import { motion } from 'motion/react';
import LucideIcon from '../components/LucideIcon';

export default function Payments() {
  return (
    <div className="space-y-6 md:space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800/50 pb-5">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Paiements
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Suivi de la facturation, virements transporteurs, encaissements clients et commissionnement.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-3 py-1.5 text-xs font-semibold rounded-lg bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-250/60 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-all cursor-pointer">
            <LucideIcon name="Download" size={14} />
            <span>Télécharger Journal Comptable</span>
          </button>
        </div>
      </div>

      {/* Stats row ready for connection */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: "Total Transigé", icon: "CreditCard" },
          { label: "Paiements en Attente", icon: "Activity" },
          { label: "Factures Échues", icon: "AlertTriangle" }
        ].map((item) => (
          <div key={item.label} className="p-5 bg-white dark:bg-[#0F1115] border border-slate-200/50 dark:border-slate-800/60 rounded-xl relative overflow-hidden">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">{item.label}</span>
              <LucideIcon name={item.icon} size={15} className="text-slate-400" />
            </div>
            <div className="mt-4 h-6 w-20 bg-slate-100 dark:bg-slate-800/80 rounded-md animate-pulse"></div>
            <div className="mt-2 text-[10px] text-slate-400 flex items-center gap-1 font-mono">
              <span>Connecter le système de facturation</span>
            </div>
          </div>
        ))}
      </div>

      {/* Grid container with beautiful empty state */}
      <div className="p-12 bg-white dark:bg-[#0F1115] border border-slate-200/50 dark:border-slate-800/60 rounded-2xl flex flex-col items-center justify-center text-center space-y-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-50 dark:bg-slate-900 border border-slate-250/40 dark:border-slate-800 text-slate-400">
          <LucideIcon name="CreditCard" size={20} className="text-emerald-500" />
        </div>
        <div className="max-w-md space-y-1.5">
          <p className="font-bold text-sm text-slate-700 dark:text-slate-300">
            Aucun historique de paiement
          </p>
          <p className="text-xs text-slate-400 leading-relaxed">
            Reliez cette page aux API Stripe Connect ou à votre banque partenaire pour automatiser les flux financiers et lister les règlements en cours.
          </p>
        </div>
      </div>
    </div>
  );
}
