import { create } from "zustand";
import { UUID } from "crypto";

//* INTERFACES *//
interface IBears {
  id: UUID;
  name: string;
}

//* STORE STATE *//
interface BearsState {
  blackBears: number;
  polarBears: number;
  pandaBears: number;

  bears: IBears[];

  increaseBlackBears(by: number): void;
  increasePolarBears(by: number): void;
  increasePandaBears(by: number): void;

  doNothing(): void;
}

export const useBearsStore = create<BearsState>((set) => ({
  blackBears: 10,
  pandaBears: 5,
  polarBears: 2,

  bears: [{ id: crypto.randomUUID(), name: "Oso #1" }],

  //! INCREASE BLACK BEARS
  increaseBlackBears(by) {
    set((state) => ({ blackBears: state.blackBears + by }));
  },

  increasePandaBears(by) {
    set((state) => ({ pandaBears: state.pandaBears + by }));
  },

  increasePolarBears(by) {
    set((state) => ({ polarBears: state.polarBears + by }));
  },

  doNothing() {
    set((state) => ({ bears: [...state.bears] }));
  },
}));
