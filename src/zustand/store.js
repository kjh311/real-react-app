import { create } from "zustand";

export const useCounter = create((set) => {
  return {
    counter: 0,
    incrementCounter: () => set((state) => ({ counter: state.counter + 1 })),
    decrementCount: () => set((state) => ({ counter: state.counter - 1 })),
    resetCounter: () => set((state) => ({ counter: 0 })),
  };
});

export const useUserInfo = create((set) => {
  return {
    userName: "Kevin",
    password: "123",
    whatsMyNameBitch: () => set((state) => ({ userName: "Bitch" })),
  };
});


