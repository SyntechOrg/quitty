import { create } from "zustand";

type MobileHeaderStore = {
  open: boolean;
  toggleOpen: () => void;
};

export const useMobileHeaderStore = create<MobileHeaderStore>((set) => ({
  open: false,
  toggleOpen: () => set((state) => ({ open: !state.open })),
}));
