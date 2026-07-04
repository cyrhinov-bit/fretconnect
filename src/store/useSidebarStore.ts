import { create } from 'zustand';

interface SidebarState {
  isOpen: boolean;          // For desktop collapse/expand
  isMobileOpen: boolean;    // For mobile slide-over drawer
  setOpen: (open: boolean) => void;
  setMobileOpen: (open: boolean) => void;
  toggleOpen: () => void;
  toggleMobileOpen: () => void;
}

export const useSidebarStore = create<SidebarState>((set) => ({
  isOpen: true,
  isMobileOpen: false,
  setOpen: (isOpen) => set({ isOpen }),
  setMobileOpen: (isMobileOpen) => set({ isMobileOpen }),
  toggleOpen: () => set((state) => ({ isOpen: !state.isOpen })),
  toggleMobileOpen: () => set((state) => ({ isMobileOpen: !state.isMobileOpen })),
}));
