import { create } from "zustand";

export type ModalKeys =
  | "categories"
  | "originalsCategories"
  | `originalsVideo_${number}`
  | "promos"
  | "promosHero"
  | "shoppingBag";
interface StoreState {
  count: number;
  inc: () => void;
  modals: {
    [key in ModalKeys]?: boolean;
  };
  setModalOpen: (modalName: ModalKeys) => void;
}

export const useStoreZustand = create<StoreState>((set) => ({
  count: 4,
  inc: () => set((state) => ({ count: state.count + 1 })),
  modals: {},
  setModalOpen: (modalName: ModalKeys) => {
    set((state) => ({
      modals: {
        ...state.modals,
        [modalName]: !state.modals[modalName],
      },
    }));
  },
}));
