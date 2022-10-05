import { useState } from "react";

import { DropDown } from "../Models/Dropdown";
import { Quiz } from "../Models/Quiz";
import { getCategories, getQuestions } from "../Network";

export const useQuiz = () => {
  const [categories, setCategories] = useState<DropDown[]>([]);
  const [quizQuestions, setQuizQuestions] = useState<Quiz[] | undefined>();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [overallScore, setOverallScore] = useState(0);
  const [overallAnswerGiven, setOverallAnswerGiven] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const getCategoryData = async () => {
    try {
      const categoriesResponse: DropDown[] = await getCategories();
      setCategories(categoriesResponse);
    } catch (error) {
      console.log("Error in feting category: ", error);
    }
  };

  const getQuestionData = async (
    numberOfQuestions: number,
    selectedCategoryId: number,
    selectedDifficulty: string,
    selectedQuestionType: string
  ) => {
    try {
      setIsLoading(true);
      const quizResponse: Quiz[] = await getQuestions(
        numberOfQuestions,
        selectedCategoryId,
        selectedDifficulty,
        selectedQuestionType
      );
      setIsLoading(false);
      setQuizQuestions(quizResponse);
      reset();
    } catch (error) {
      console.log("Error in feting questions: ", error);
    } finally {
      setIsLoading(false);
    }
  };

  const reset = () => {
    setCurrentQuestionIndex(0);
    setCurrentScore(0);
  };

  return {
    isLoading,
    categories,
    quizQuestions,
    currentQuestionIndex,
    currentScore,
    overallScore,
    overallAnswerGiven,
    setCurrentQuestionIndex,
    getCategoryData,
    getQuestionData,
    setCurrentScore,
    setOverallScore,
    setOverallAnswerGiven,
  };
};

export type UseQuizReturnType = ReturnType<typeof useQuiz>;
