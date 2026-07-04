import React from 'react';
import {
  LayoutDashboard,
  Users,
  Truck,
  Car,
  Route,
  CreditCard,
  AlertOctagon,
  BarChart3,
  Settings,
  HelpCircle,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  Sun,
  Moon,
  Search,
  Bell,
  ChevronDown,
  Plus,
  ArrowUpDown,
  Filter,
  Download,
  MoreVertical,
  SlidersHorizontal,
  ArrowUpRight,
  Check,
  Play,
  Ban,
  Activity,
  User,
  LogOut,
  MapPin,
  Calendar,
  AlertTriangle,
  FileSpreadsheet,
  Globe,
  Sliders,
  Mail,
  Lock,
  Building
} from 'lucide-react';

const iconsMap: Record<string, React.ComponentType<any>> = {
  LayoutDashboard,
  Users,
  Truck,
  Car,
  Route,
  CreditCard,
  AlertOctagon,
  BarChart3,
  Settings,
  HelpCircle,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  Sun,
  Moon,
  Search,
  Bell,
  ChevronDown,
  Plus,
  ArrowUpDown,
  Filter,
  Download,
  MoreVertical,
  SlidersHorizontal,
  ArrowUpRight,
  Check,
  Play,
  Ban,
  Activity,
  User,
  LogOut,
  MapPin,
  Calendar,
  AlertTriangle,
  FileSpreadsheet,
  Globe,
  Sliders,
  Mail,
  Lock,
  Building
};

interface LucideIconProps {
  name: string;
  className?: string;
  size?: number;
}

export default function LucideIcon({ name, className, size = 18 }: LucideIconProps) {
  const IconComponent = iconsMap[name];
  if (!IconComponent) {
    return <HelpCircle className={className} size={size} />;
  }
  return <IconComponent className={className} size={size} />;
}
