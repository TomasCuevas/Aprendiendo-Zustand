import { type StateCreator, create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { firebaseStorage } from "../storages/firabase.storage";

interface PersonState {
  firstName: string;
  lastName: string;
}

interface Actions {
  setFirstName(value: string): void;
  setLastName(value: string): void;
}

const storeAPI: StateCreator<
  PersonState & Actions,
  [["zustand/devtools", never]]
> = (set) => ({
  firstName: "",
  lastName: "",

  //! SET FIST NAME
  setFirstName(value) {
    set({ firstName: value }, false, "setFirstName");
  },

  //! SET LAST NAME
  setLastName(value) {
    set({ lastName: value }, false, "setLastName");
  },
});

export const usePersonStore = create<PersonState & Actions>()(
  devtools(
    persist(storeAPI, {
      name: "person-storage",
      storage: firebaseStorage,
    })
  )
);
