export interface NavItem {
  title: string;
  href: string;
  iconName: string;
  badge?: string | number;
}

export type Theme = 'light' | 'dark';
