import { create } from "zustand";

interface StoreState {
  userId: string | null;
  shoppingBag: any;
  setUserId: (userId: string | null) => void;
  initCart: (cart: any) => void;
  addToCart: (item: any, callback: () => void, toast: () => void) => void;
  removeFromCart: (item: any) => void;
  removeAll: () => void;
}

export const useStoreShoppingCart = create<StoreState>((set) => ({
  userId: null,
  setUserId: (userId) => {
    set(() => ({
      userId,
    }));
  },
  shoppingBag: [],
  initCart: (cart) => {
    set(() => ({
      shoppingBag: cart,
    }));
  },
  addToCart: (item, callback, toast) => {
    set((state) => {
      const newItem = { catalogItem: item, quantity: 1 };
      const itemExists = state.shoppingBag.items.some(
        (cartItem: any) => cartItem.catalogItem.id === item.id
      );
      if (!itemExists) {
        callback();
        return {
          shoppingBag: {
            ...state.shoppingBag,
            items: [...state.shoppingBag.items, newItem],
          },
        };
      }
      toast();
      return state;
    });
  },
  removeFromCart: (item) => {
    set((state) => ({
      shoppingBag: {
        ...state.shoppingBag,
        items: state.shoppingBag.items.filter(
          (cartItem: any) => cartItem.catalogItem.id !== item.catalogItem.id
        ),
      },
    }));
  },
  removeAll: () => {
    set((state) => ({
      shoppingBag: {
        ...state.shoppingBag,
        items: [],
      },
    }));
  },
}));
