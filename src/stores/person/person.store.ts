import { type StateCreator, create } from "zustand";
import { StateStorage, createJSONStorage, persist } from "zustand/middleware";

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

const sessionStorage: StateStorage = {
  getItem: function (name: string): string | Promise<string | null> | null {
    console.log("GET ITEM.");
    return null;
  },
  setItem: function (name: string, value: string): void | Promise<void> {
    console.log("SET ITEM.", { name, value });
  },
  removeItem: function (name: string): void | Promise<void> {
    console.log("REMOVE", { name });
  },
};

export const usePersonStore = create<PersonState & Actions>()(
  persist(storeAPI, {
    name: "person-storage",
    storage: createJSONStorage(() => sessionStorage),
  })
);
