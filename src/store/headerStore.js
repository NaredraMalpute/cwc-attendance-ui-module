import { create } from 'zustand'

const useHeaderStore = create((set) => ({
  header: "",
  subHeader: "",
  isLogoVisible: true,
  setHeader: (header) => set(() => ({ header: header })),
  setSubHeader: (subHeader) => set(() => ({ subHeader: subHeader })),
  setIsLogoVisible: (isLogoVisible) =>
    set(() => ({ isLogoVisible: isLogoVisible })),
}));

export default useHeaderStore