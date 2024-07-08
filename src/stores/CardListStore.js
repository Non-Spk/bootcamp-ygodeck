import { create } from "zustand";

const initStore = {
  card: {
    data: [],
    loading: false,
    error: null
  },
  fetchCard: {
    data: [],
    loading: false,
    error: null
  },
  cardDetail: {
    data: [],
    loading: false,
    error: null
  }
};

export const useCardListStore = create((set) => ({
  ...initStore,
  setCardList: (value) => {
    set({ card: value });
  },
  setFetchCardList: (value) => {
    set({ fetchCard: value });
  },
  setCardDetail: (value) => {
    set({ cardDetail: value });
  },
  clearCard: () => set({ ...initStore })
}));
