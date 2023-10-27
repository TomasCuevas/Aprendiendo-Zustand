import { StateStorage, createJSONStorage } from "zustand/middleware";

const FIREBASE_URL =
  "https://zustand-storage-722a8-default-rtdb.firebaseio.com/zustand";

const firebaseAPI: StateStorage = {
  getItem: async function (name: string): Promise<string | null> {
    try {
      const data = await fetch(`${FIREBASE_URL}/${name}.json`).then((res) =>
        res.json()
      );

      return JSON.stringify(data);
    } catch (error) {
      console.log(error);
      return null;
    }
  },
  setItem: async function (name: string, value: string): Promise<void> {
    await fetch(`${FIREBASE_URL}/${name}.json`, {
      method: "PUT",
      body: value,
    }).then((res) => res.json());
  },
  removeItem: function (name: string): void | Promise<void> {
    sessionStorage.removeItem(name);
  },
};

export const firebaseStorage = createJSONStorage(() => firebaseAPI);
