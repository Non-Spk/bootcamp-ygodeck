import { create } from "zustand";

export const DeckStore = {
  MainDeck: {
    data: [],
    loading: false,
    error: null
  },
  ExtraDeck: {
    data: [],
    loading: false,
    error: null
  },
  SideDeck: {
    data: [],
    loading: false,
    error: null
  }
};

export const useDeckStore = create((set) => ({
  ...DeckStore,
  setMainDeck: (value) => {
    set({ MainDeck: value });
  },
  setExtraDeck: (value) => {
    set({ ExtraDeck: value });
  },
  setSideDeck: (value) => {
    set({ SideDeck: value });
  },
  clearCard: () => set({ ...DeckStore })
}));
