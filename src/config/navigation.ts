import { NavItem } from '../types';

export const navigationItems: NavItem[] = [
  {
    title: 'Dashboard',
    href: '/',
    iconName: 'LayoutDashboard',
  },
  {
    title: 'Utilisateurs',
    href: '/utilisateurs',
    iconName: 'Users',
    badge: 'Beta',
  },
  {
    title: 'Transporteurs',
    href: '/transporteurs',
    iconName: 'Truck',
  },
  {
    title: 'Véhicules',
    href: '/vehicules',
    iconName: 'Car',
  },
  {
    title: 'Missions',
    href: '/missions',
    iconName: 'Route',
  },
  {
    title: 'Paiements',
    href: '/paiements',
    iconName: 'CreditCard',
  },
  {
    title: 'Litiges',
    href: '/litiges',
    iconName: 'AlertOctagon',
  },
  {
    title: 'Rapports',
    href: '/rapports',
    iconName: 'BarChart3',
  },
  {
    title: 'Paramètres',
    href: '/parametres',
    iconName: 'Settings',
  },
];
