import { type StateCreator, create } from "zustand";
import { persist } from "zustand/middleware";
import { customSessionStorage } from "../";

interface PersonState {
  firstName: string;
  lastName: string;
}

interface Actions {
  setFirstName(value: string): void;
  setLastName(value: string): void;
}

const storeAPI: StateCreator<PersonState & Actions> = (set) => ({
  firstName: "",
  lastName: "",

  //! SET FIST NAME
  setFirstName(value) {
    set((state) => ({ firstName: value }));
  },

  //! SET LAST NAME
  setLastName(value) {
    set((state) => ({ lastName: value }));
  },
});

export const usePersonStore = create<PersonState & Actions>()(
  persist(storeAPI, {
    name: "person-storage",
    storage: customSessionStorage,
  })
);
