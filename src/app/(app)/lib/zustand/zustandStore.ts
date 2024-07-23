import { create } from "zustand";

interface StoreState {
  count: number;
  inc: () => void;
  isShoppingBagOpen: boolean;
  setIsShoppingBagOpen: () => void;
}

export const useStoreZustand = create<StoreState>((set) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 })),
  isShoppingBagOpen: false,
  setIsShoppingBagOpen: () => {
    set((state) => ({ isShoppingBagOpen: !state.isShoppingBagOpen }));
  },
}));
