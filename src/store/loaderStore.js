import { create } from "zustand";

const useLoaderStore = create((set) => ({
  loader: false,
  //   isLogoVisible: true,
  setLoader: (loader) => set(() => ({ loader: loader })),
  //   setIsLogoVisible: (isLogoVisible) =>
  //     set(() => ({ isLogoVisible: isLogoVisible })),
}));

export default useLoaderStore;
