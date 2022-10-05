import React, { useContext, createContext } from "react";
import { noop } from "lodash";

import {
  UseQuizReturnType,
  useQuiz as useQuizInternal,
} from "../Hooks/useQuiz";

const initialContext: UseQuizReturnType = {
  isLoading: false,
  quizQuestions: undefined,
  categories: [],
  overallScore: 0,
  currentScore: 0,
  overallAnswerGiven: 0,
  currentQuestionIndex: -1,
  getCategoryData: noop,
  getQuestionData: noop,
  setCurrentQuestionIndex: noop,
  setCurrentScore: noop,
  setOverallScore: noop,
  setOverallAnswerGiven: noop,
};

export const QuizContext = createContext<UseQuizReturnType>(initialContext);

export const useQuiz = () => useContext(QuizContext);

interface Props {
  children: React.ReactNode;
}

export const QuizProvider: React.FC<Props> = ({ children }) => {
  const value = useQuizInternal();

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
