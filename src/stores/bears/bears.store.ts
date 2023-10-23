import { create } from "zustand";

//* STORE STATE *//
interface BearsState {
  blackBears: number;
  polarBears: number;
  pandaBears: number;

  increaseBlackBears(by: number): void;
  increasePolarBears(by: number): void;
  increasePandaBears(by: number): void;
}

export const useBearsStore = create<BearsState>((set) => ({
  blackBears: 10,
  pandaBears: 5,
  polarBears: 2,

  //! INCREASE BLACK BEARS
  increaseBlackBears: (by) => {
    set((state) => ({ blackBears: state.blackBears + by }));
  },

  increasePandaBears: (by) => {
    set((state) => ({ pandaBears: state.pandaBears + by }));
  },

  increasePolarBears: (by) => {
    set((state) => ({ polarBears: state.polarBears + by }));
  },
}));
