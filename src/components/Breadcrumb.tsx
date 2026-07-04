import { useLocation, Link } from 'react-router-dom';
import LucideIcon from './LucideIcon';

const routeNames: Record<string, string> = {
  '': 'Dashboard',
  'utilisateurs': 'Utilisateurs',
  'transporteurs': 'Transporteurs',
  'vehicules': 'Véhicules',
  'missions': 'Missions',
  'paiements': 'Paiements',
  'litiges': 'Litiges',
  'rapports': 'Rapports',
  'parametres': 'Paramètres',
};

export default function Breadcrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <nav className="flex items-center space-x-1.5 md:space-x-2 text-xs md:text-sm text-slate-500 dark:text-slate-400 font-medium" aria-label="Fil d'Ariane">
      <Link
        id="breadcrumb-home"
        to="/"
        className="flex items-center hover:text-slate-800 dark:hover:text-slate-100 transition-colors gap-1 md:gap-1.5"
      >
        <LucideIcon name="Building" size={14} className="opacity-80" />
        <span className="hidden sm:inline font-semibold text-slate-700 dark:text-slate-300">FretConnect</span>
      </Link>

      {pathnames.length === 0 ? (
        <div className="flex items-center space-x-1.5 md:space-x-2">
          <LucideIcon name="ChevronRight" size={14} className="text-slate-400 dark:text-slate-600 shrink-0" />
          <span className="text-slate-800 dark:text-slate-100 font-semibold">
            Dashboard
          </span>
        </div>
      ) : (
        pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          const displayName = routeNames[name] || name.charAt(0).toUpperCase() + name.slice(1);

          return (
            <div key={name} className="flex items-center space-x-1.5 md:space-x-2">
              <LucideIcon name="ChevronRight" size={14} className="text-slate-400 dark:text-slate-600 shrink-0" />
              {isLast ? (
                <span className="text-slate-800 dark:text-slate-100 font-semibold truncate max-w-[120px] md:max-w-[200px]">
                  {displayName}
                </span>
              ) : (
                <Link
                  to={routeTo}
                  className="hover:text-slate-800 dark:hover:text-slate-100 transition-colors"
                >
                  {displayName}
                </Link>
              )}
            </div>
          );
        })
      )}
    </nav>
  );
}
