import { motion } from 'motion/react';
import LucideIcon from '../components/LucideIcon';

export default function Users() {
  return (
    <div className="space-y-6 md:space-y-8">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800/50 pb-5">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Utilisateurs
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Gérer les comptes utilisateurs, rôles administratifs et permissions de la plateforme.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-3.py-1.5 text-xs font-semibold rounded-lg bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-250/60 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-all cursor-pointer">
            <LucideIcon name="Download" size={14} />
            <span>Exporter</span>
          </button>
          <button className="flex items-center gap-2 px-3 py-1.5 text-xs font-semibold rounded-lg bg-emerald-500 hover:bg-emerald-600 text-slate-950 transition-all cursor-pointer shadow-xs font-medium">
            <LucideIcon name="Plus" size={14} />
            <span>Créer un Utilisateur</span>
          </button>
        </div>
      </div>

      {/* Filter and search bar shell */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-white dark:bg-[#0F1115] border border-slate-200/50 dark:border-slate-800/60 rounded-xl">
        <div className="relative flex-1 max-w-md">
          <LucideIcon name="Search" className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
          <input
            type="text"
            placeholder="Rechercher par nom, email ou rôle..."
            className="w-full pl-9 pr-4 py-1.5 text-xs rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 focus:outline-hidden focus:border-emerald-500 dark:focus:border-emerald-500 text-slate-700 dark:text-slate-200"
            disabled
          />
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border border-slate-200/40 dark:border-slate-800 text-slate-500 dark:text-slate-400 bg-slate-50/50 dark:bg-slate-900/55 cursor-not-allowed" disabled>
            <LucideIcon name="Filter" size={13} />
            <span>Filtres</span>
          </button>
          <button className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border border-slate-200/40 dark:border-slate-800 text-slate-500 dark:text-slate-400 bg-slate-50/50 dark:bg-slate-900/55 cursor-not-allowed" disabled>
            <LucideIcon name="SlidersHorizontal" size={13} />
            <span>Trier</span>
          </button>
        </div>
      </div>

      {/* Interactive table outline with pristine empty state */}
      <div className="bg-white dark:bg-[#0F1115] border border-slate-200/50 dark:border-slate-800/60 rounded-2xl overflow-hidden shadow-xs">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-slate-100 dark:border-slate-800/60 bg-slate-50/40 dark:bg-slate-900/30">
                <th className="p-4 text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">Utilisateur</th>
                <th className="p-4 text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">Rôle / Service</th>
                <th className="p-4 text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">Statut</th>
                <th className="p-4 text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">Dernière Connexion</th>
                <th className="p-4 text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* No mock rows, just pristine empty state with clear documentation */}
              <tr>
                <td colSpan={5} className="p-16 text-center">
                  <div className="flex flex-col items-center justify-center space-y-4 max-w-sm mx-auto">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-50 dark:bg-slate-900 border border-slate-250/50 dark:border-slate-800 text-slate-400">
                      <LucideIcon name="Users" size={20} className="text-emerald-500" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-bold text-sm text-slate-700 dark:text-slate-300">
                        Aucun utilisateur connecté
                      </h3>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        Cette section est prête à recevoir les requêtes SQL, la configuration Firebase Auth ou les requêtes Prisma de votre backend.
                      </p>
                    </div>
                    <button className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-100 dark:bg-slate-850 hover:bg-slate-200/60 dark:hover:bg-slate-800 transition-colors border border-slate-200/10 cursor-not-allowed" disabled>
                      Configurer la source de données
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
