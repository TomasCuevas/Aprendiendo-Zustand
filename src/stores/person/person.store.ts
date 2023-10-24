import { create } from "zustand";
import { persist } from "zustand/middleware";

interface PersonState {
  firstName: string;
  lastName: string;
}

interface Actions {
  setFirstName(value: string): void;
  setLastName(value: string): void;
}

export const usePersonStore = create<PersonState & Actions>()(
  persist(
    (set) => ({
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
    }),
    { name: "person-storage" }
  )
);
