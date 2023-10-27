import { create } from "zustand";
import { UUID } from "crypto";
import { persist } from "zustand/middleware";

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

  totalBeras(): number;

  bears: IBears[];
  addBear(): void;
  claerBears(): void;

  increaseBlackBears(by: number): void;
  increasePolarBears(by: number): void;
  increasePandaBears(by: number): void;

  doNothing(): void;
}

export const useBearsStore = create<BearsState>()(
  persist(
    (set, get) => ({
      blackBears: 10,
      pandaBears: 5,
      polarBears: 2,

      totalBeras() {
        return (
          get().blackBears +
          get().pandaBears +
          get().polarBears +
          get().bears.length
        );
      },

      bears: [{ id: crypto.randomUUID(), name: "Oso #1" }],

      //! INCREASE BLACK BEARS
      increaseBlackBears(by) {
        set((state) => ({ blackBears: state.blackBears + by }));
      },

      //! INCREASE PANDA BEARS
      increasePandaBears(by) {
        set((state) => ({ pandaBears: state.pandaBears + by }));
      },

      //! INCREASE POLAR BEARS
      increasePolarBears(by) {
        set((state) => ({ polarBears: state.polarBears + by }));
      },

      //! DO NOTHING
      doNothing() {
        set((state) => ({ bears: [...state.bears] }));
      },

      //! ADD BEARS
      addBear() {
        set((state) => ({
          bears: [
            ...state.bears,
            { id: crypto.randomUUID(), name: `Oso #${state.bears.length + 1}` },
          ],
        }));
      },

      //! CLEAR BEARS
      claerBears() {
        set({ bears: [] });
      },
    }),
    { name: "bears-store" }
  )
);
