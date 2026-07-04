import { useState } from 'react';
import { motion } from 'motion/react';
import LucideIcon from '../components/LucideIcon';

export default function Settings() {
  const [activeTab, setActiveTab] = useState<'general' | 'security' | 'webhooks' | 'git'>('general');

  const branches = [
    { name: 'main', type: 'stable', desc: 'Version stable de production (PWA déployée sur Cloud Run)', author: 'Lead Architect', date: 'il y a 2h', commits: 242, status: 'Production' },
    { name: 'develop', type: 'integration', desc: "Branche d'intégration pour les phases de qualification et tests", author: 'Dev Team', date: 'il y a 20m', commits: 541, status: 'Testing' },
    { name: 'feature/admin-layout', type: 'feature', desc: 'Base de l\'interface, sidebar responsive, header fluide, thème dynamique', author: 'Cyril R.', date: 'Actif', commits: 14, status: 'Ready' },
    { name: 'feature/auth', type: 'feature', desc: 'Authentification Firebase et profils administratifs multi-rôles', author: 'Cyril R.', date: 'Planifié', commits: 0, status: 'Draft' },
    { name: 'feature/dashboard', type: 'feature', desc: 'Visualisation de l\'activité en direct, intégration D3/Recharts', author: 'Cyril R.', date: 'Actif', commits: 6, status: 'Ready' },
    { name: 'feature/users', type: 'feature', desc: 'Base de données des collaborateurs et gestionnaires de transport', author: 'Cyril R.', date: 'Actif', commits: 4, status: 'Ready' },
    { name: 'feature/transporters', type: 'feature', desc: 'Affiliation des compagnies de fret partenaires et fiches d\'enregistrement', author: 'Cyril R.', date: 'Planifié', commits: 0, status: 'Draft' },
    { name: 'feature/kyc', type: 'feature', desc: 'Validation réglementaire des documents, assurances et KBIS transporteurs', author: 'Cyril R.', date: 'Planifié', commits: 0, status: 'Draft' },
    { name: 'feature/vehicles', type: 'feature', desc: 'Registre de parc, diagnostic d\'exploitation et alertes visites techniques', author: 'Cyril R.', date: 'Planifié', commits: 0, status: 'Draft' },
    { name: 'feature/missions', type: 'feature', desc: 'Kanban d\'affectation, routage intelligent et fiches de transport numériques', author: 'Cyril R.', date: 'Actif', commits: 8, status: 'Ready' },
    { name: 'feature/payments', type: 'feature', desc: 'Facturation, Stripe Connect, commissionnement et transferts bancaires', author: 'Cyril R.', date: 'Planifié', commits: 0, status: 'Draft' },
    { name: 'feature/disputes', type: 'feature', desc: 'Déclaration d\'avaries, retards et arbitrage des réclamations clients', author: 'Cyril R.', date: 'Planifié', commits: 0, status: 'Draft' },
    { name: 'feature/settings', type: 'feature', desc: 'Paramètres globaux, configuration de l\'organisation et webhook logs', author: 'Cyril R.', date: 'Actif', commits: 11, status: 'Ready' },
  ];

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
      <div className="flex border-b border-slate-200/55 dark:border-slate-800/60 gap-4 overflow-x-auto scrollbar-none pb-px">
        {[
          { id: 'general', label: 'Général', icon: 'Sliders' },
          { id: 'security', label: 'Sécurité & Accès', icon: 'Lock' },
          { id: 'webhooks', label: 'Webhooks & API', icon: 'Globe' },
          { id: 'git', label: 'Stratégie Git & Flow', icon: 'GitBranch' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex items-center gap-2 px-3 py-2 text-xs font-semibold tracking-wide border-b-2 transition-all cursor-pointer -mb-[1.5px] whitespace-nowrap ${
              activeTab === tab.id
                ? 'border-emerald-500 text-emerald-600 dark:text-emerald-400 font-bold'
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

        {activeTab === 'git' && (
          <div className="space-y-6">
            <div className="border-b border-slate-100 dark:border-slate-800/60 pb-4">
              <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">Modèle de Branches Git Flow</h3>
              <p className="text-xs text-slate-400 mt-1">
                Cartographie des branches du dépôt FretConnect et stratégie d'intégration continue des modules métiers.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Branch visual list */}
              <div className="lg:col-span-2 space-y-4">
                <div className="space-y-3">
                  {branches.map((branch) => (
                    <div
                      key={branch.name}
                      className="p-4 rounded-xl border border-slate-200/50 dark:border-slate-800/60 bg-slate-50/20 dark:bg-slate-900/10 hover:border-slate-300 dark:hover:border-slate-700/60 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 group"
                    >
                      <div className="flex items-start gap-3">
                        <div className={`p-2 rounded-lg mt-0.5 shrink-0 ${
                          branch.type === 'stable' 
                            ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20' 
                            : branch.type === 'integration' 
                            ? 'bg-purple-500/10 text-purple-500 border border-purple-500/20' 
                            : 'bg-blue-500/10 text-blue-500 border border-blue-500/20'
                        }`}>
                          <LucideIcon name={branch.type === 'stable' ? 'Check' : branch.type === 'integration' ? 'GitMerge' : 'GitBranch'} size={15} />
                        </div>
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="font-mono text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
                              {branch.name}
                            </span>
                            <span className={`px-1.5 py-0.5 text-[9px] font-bold rounded-sm ${
                              branch.status === 'Production'
                                ? 'bg-emerald-500/10 text-emerald-500'
                                : branch.status === 'Testing'
                                ? 'bg-purple-500/10 text-purple-400'
                                : branch.status === 'Ready'
                                ? 'bg-blue-500/10 text-blue-400'
                                : 'bg-slate-100 dark:bg-slate-800 text-slate-400'
                            }`}>
                              {branch.status}
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-400 leading-relaxed max-w-md">
                            {branch.desc}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 text-[10px] text-slate-400 font-mono self-end sm:self-center shrink-0">
                        <div className="text-right">
                          <p className="text-slate-300 dark:text-slate-500 font-semibold">{branch.author}</p>
                          <p className="text-[9px] text-slate-400">{branch.date}</p>
                        </div>
                        <div className="h-8 w-px bg-slate-200 dark:bg-slate-800/80"></div>
                        <div className="text-center min-w-[50px]">
                          <p className="text-slate-300 dark:text-slate-500 font-semibold">{branch.commits}</p>
                          <p className="text-[9px] text-slate-400">commits</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sidebar flow chart explanation */}
              <div className="space-y-4">
                <div className="p-5 rounded-2xl bg-slate-50/50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-850 space-y-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                    <LucideIcon name="GitPullRequest" size={13} className="text-emerald-500" />
                    Workflow d'Intégration
                  </h4>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    Notre structure Git Flow assure une transition fluide des fonctionnalités vers la production en protégeant l'intégrité de l'application d'administration.
                  </p>

                  <div className="space-y-3.5 pt-2">
                    <div className="flex gap-2.5">
                      <div className="flex flex-col items-center">
                        <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                        <div className="w-0.5 h-10 bg-slate-200 dark:bg-slate-800"></div>
                      </div>
                      <div>
                        <h5 className="text-[11px] font-bold text-slate-700 dark:text-slate-300 leading-none">1. Branches de fonctionnalités (Feature)</h5>
                        <p className="text-[10px] text-slate-400 mt-1 leading-relaxed">
                          Chaque module de la PWA est codé sur sa branche <code className="bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded text-[9px]">feature/*</code> dédiée.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-2.5">
                      <div className="flex flex-col items-center">
                        <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                        <div className="w-0.5 h-10 bg-slate-200 dark:bg-slate-800"></div>
                      </div>
                      <div>
                        <h5 className="text-[11px] font-bold text-slate-700 dark:text-slate-300 leading-none">2. Branche de Test (Develop)</h5>
                        <p className="text-[10px] text-slate-400 mt-1 leading-relaxed">
                          Les Pull Requests sont fusionnées vers la branche <code className="bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded text-[9px]">develop</code> pour validation et tests d'intégration.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-2.5">
                      <div className="flex flex-col items-center">
                        <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
                      </div>
                      <div>
                        <h5 className="text-[11px] font-bold text-slate-700 dark:text-slate-300 leading-none">3. Version Stable (Main)</h5>
                        <p className="text-[10px] text-slate-400 mt-1 leading-relaxed">
                          La branche <code className="bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded text-[9px]">main</code> est le reflet direct du code stable et de production, automatiquement déployé sur Cloud Run.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
