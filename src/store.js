import { create } from "zustand";

export const useQuestionStore = create((set) => ({
  userChoices: {},

  setUserChoice: (number, selectedOption, correctAnswer, topic) =>
    set((state) => ({
      userChoices: {
        ...state.userChoices,
        [topic]: {
          ...(state.userChoices[topic] || {}),
          [number]: { selectedOption, correctAnswer },
        },
      },
    })),

  resetChoices: () => set(() => ({ userChoices: {} })), // 新增 resetChoices
}));
