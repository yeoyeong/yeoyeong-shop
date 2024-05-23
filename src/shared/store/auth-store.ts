import { create } from "zustand";
import { userInfoType } from "./auth-store-type";

interface ID {
  userInfo: userInfoType;
  setUserInfo: (action: (prev: userInfoType) => userInfoType) => void;
}

const authStore = create<ID>((set) => ({
  userInfo: {
    accessToken: null,
    uid: null,
    email: null,
    photoURL: null,
  },
  setUserInfo: (action) => {
    set((prev) => ({ userInfo: action(prev.userInfo) }));
  },
}));

export default authStore;
