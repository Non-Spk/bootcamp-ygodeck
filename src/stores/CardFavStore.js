import { create } from "zustand";

const FavoriteStore = {
  Favorite: {
    data: [],
    loading: false,
    error: null
  }
};

export const useFavoriteStore = create((set) => ({
  ...FavoriteStore,
  setFavorite: (value) => {
    set({ Favorite: value });
  },
  clearCard: () => set({ ...FavoriteStore })
}));
