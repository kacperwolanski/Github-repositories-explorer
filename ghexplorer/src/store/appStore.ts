import { create } from "zustand";

export interface AppStore {
  isAbleToSearch: boolean;
  userNameInput: string;
  setIsAbleToSearch: (isAbleToSearch: boolean) => void;
  setUserNameInput: (userNameInput: string) => void;
}

export const useAppStore = create<AppStore>()((set) => ({
  isAbleToSearch: true,
  userNameInput: "",
  setIsAbleToSearch: (isAbleToSearch: boolean) =>
    set(() => ({
      isAbleToSearch,
    })),
  setUserNameInput: (userNameInput: string) =>
    set(() => ({
      userNameInput,
    })),
}));
