import { useState } from 'react';
import { motion } from 'motion/react';
import LucideIcon from '../components/LucideIcon';

export default function Settings() {
  const [activeTab, setActiveTab] = useState<'general' | 'security' | 'webhooks'>('general');

  return (
    <div className="space-y-6 md:space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800/50 pb-5">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Paramètres de la Plateforme
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Gérer la configuration globale, les clefs API, l'organisation et la sécurité du réseau.
          </p>
        </div>
      </div>

      {/* Tabs Row */}
      <div className="flex border-b border-slate-200/55 dark:border-slate-800/60 gap-4">
        {[
          { id: 'general', label: 'Général', icon: 'Sliders' },
          { id: 'security', label: 'Sécurité & Accès', icon: 'Lock' },
          { id: 'webhooks', label: 'Webhooks & API', icon: 'Globe' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex items-center gap-2 px-3 py-2 text-xs font-semibold tracking-wide border-b-2 transition-all cursor-pointer -mb-[1.5px] ${
              activeTab === tab.id
                ? 'border-emerald-500 text-emerald-600 dark:text-emerald-400'
                : 'border-transparent text-slate-400 dark:text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            <LucideIcon name={tab.icon} size={13} />
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Tab Contents */}
      <div className="bg-white dark:bg-[#0F1115] border border-slate-200/50 dark:border-slate-800/60 rounded-2xl p-6 shadow-xs">
        {activeTab === 'general' && (
          <div className="space-y-6 max-w-xl">
            <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">Identité de l'Organisation</h3>
            <div className="grid grid-cols-1 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-400 dark:text-slate-500">Nom de l'entreprise</label>
                <input
                  type="text"
                  defaultValue="FretConnect Inc."
                  className="w-full px-3 py-2 text-xs rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-250/50 dark:border-slate-800 focus:outline-hidden focus:border-emerald-500 dark:focus:border-emerald-500 text-slate-700 dark:text-slate-200"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-400 dark:text-slate-500">Email de contact support</label>
                <input
                  type="email"
                  defaultValue="support@fretconnect.com"
                  className="w-full px-3 py-2 text-xs rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-250/50 dark:border-slate-800 focus:outline-hidden focus:border-emerald-500 dark:focus:border-emerald-500 text-slate-700 dark:text-slate-200"
                />
              </div>
            </div>
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800/60">
              <button className="px-4 py-2 text-xs font-semibold text-slate-950 bg-emerald-500 hover:bg-emerald-600 rounded-lg shadow-xs transition-colors cursor-pointer">
                Sauvegarder les modifications
              </button>
            </div>
          </div>
        )}

        {activeTab === 'security' && (
          <div className="space-y-6 max-w-xl">
            <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">Sécurité d'Accès</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-slate-50/50 dark:bg-slate-900/30 border border-slate-100 dark:border-slate-800/60 rounded-xl">
                <div>
                  <p className="text-xs font-bold text-slate-700 dark:text-slate-300">Authentification Double Facteur (2FA)</p>
                  <p className="text-[10px] text-slate-400 mt-0.5">Renforcer l'accès aux comptes des administrateurs.</p>
                </div>
                <div className="relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-slate-200 dark:bg-slate-800 transition-colors duration-200">
                  <span className="pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow-xs ring-0 transition duration-200 translate-x-0" />
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'webhooks' && (
          <div className="space-y-6 max-w-xl">
            <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">Webhooks de Logistique</h3>
            <p className="text-xs text-slate-400">
              Recevez des notifications HTTP POST en temps réel lors du changement d'état d'une mission ou de l'arrivée d'un camion sur site.
            </p>
            <div className="space-y-3">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-400 dark:text-slate-500">URL du point de terminaison (Endpoint URL)</label>
                <input
                  type="url"
                  placeholder="https://api.yourdomain.com/webhooks/fretconnect"
                  className="w-full px-3 py-2 text-xs rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-250/50 dark:border-slate-800 focus:outline-hidden focus:border-emerald-500 dark:focus:border-emerald-500 text-slate-700 dark:text-slate-200"
                />
              </div>
            </div>
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800/60">
              <button className="px-4 py-2 text-xs font-semibold text-slate-950 bg-emerald-500 hover:bg-emerald-600 rounded-lg shadow-xs transition-colors cursor-pointer">
                Activer le Webhook
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
