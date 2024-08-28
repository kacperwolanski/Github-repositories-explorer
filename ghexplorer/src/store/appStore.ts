import { create } from "zustand";

export interface AppStore {
  isAbleToSearch: boolean;
  userNameInput: string;
  lastSearchedValue: string;

  setIsAbleToSearch: (isAbleToSearch: boolean) => void;
  setUserNameInput: (userNameInput: string) => void;
  setLastSearchedValue: (lastSearchedValue: string) => void;
}

export const useAppStore = create<AppStore>()((set) => ({
  isAbleToSearch: true,
  userNameInput: "",
  lastSearchedValue: "",

  setIsAbleToSearch: (isAbleToSearch: boolean) =>
    set(() => ({
      isAbleToSearch,
    })),
  setUserNameInput: (userNameInput: string) =>
    set(() => ({
      userNameInput,
    })),
  setLastSearchedValue: (lastSearchedValue: string) =>
    set(() => ({
      lastSearchedValue,
    })),
}));
