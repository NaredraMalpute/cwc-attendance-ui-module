import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCommonStore = create(
  persist(
    (set, get) => ({
      data: {},
      setData: (data) => set(() => ({ data: data })),
    }),
    {
      name: "data-storage",
    }
  )
);

export default useCommonStore;
