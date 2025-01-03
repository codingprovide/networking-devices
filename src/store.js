import { create } from "zustand";

const useQuestionStore = create((set) => ({
  userChoices: {}, // 記錄用戶選擇 { number: { selectedOption, correctAnswer } }

  // 用戶選擇答案，直接存入題目號碼、選擇的答案和當前的解答
  setUserChoice: (number, selectedOption, correctAnswer, topic) =>
    set((state) => ({
      userChoices: {
        ...state.userChoices,
        [number]: { selectedOption, correctAnswer, topic },
      },
    })),
}));

export default useQuestionStore;
