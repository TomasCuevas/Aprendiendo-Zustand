import { create } from "zustand";

//* STORE STATE *//
interface BearsState {
  blackBears: number;
  polarBears: number;
  pandaBears: number;

  increaseBlackBears(by?: number): void;
}

export const useBearsStore = create<BearsState>((set) => ({
  blackBears: 10,
  pandaBears: 5,
  polarBears: 2,

  //! INCREASE BLACK BEARS
  increaseBlackBears: (by = 1) => {
    set((state) => ({ blackBears: state.blackBears + by }));
  },
}));
