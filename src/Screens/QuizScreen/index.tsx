import React, { useMemo, useState, useEffect } from "react";
import {
  Button,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import RenderHtml from "react-native-render-html";

import { useQuiz } from "../../Provider/questionProvider";
import styles from "./styles";
import { navigate } from "../../Navigators/utils";

const QuizScreen = () => {
  const {
    currentQuestionIndex,
    quizQuestions = [],
    setCurrentQuestionIndex,
    setCurrentScore,
    setOverallScore,
    currentScore,
    setOverallAnswerGiven,
  } = useQuiz();
  const [givenAnswer, setGivenAnswer] = useState<string | undefined>();
  const { width } = useWindowDimensions();

  useEffect(() => {
    if (givenAnswer) {
      setOverallAnswerGiven((answerGiven) => answerGiven + 1);

      if (givenAnswer === currentQuestion.correct_answer) {
        setCurrentScore((currentScore) => currentScore + 1);
        setOverallScore((score) => score + 1);
      }
    }
  }, [givenAnswer]);

  const currentQuestion = useMemo(() => {
    return quizQuestions[currentQuestionIndex];
  }, [currentQuestionIndex]);

  const answerOptions = useMemo(() => {
    const incorrectAnswers = currentQuestion.incorrect_answers;
    incorrectAnswers.unshift(currentQuestion.correct_answer);
    return incorrectAnswers;
  }, [currentQuestion]);

  const finalAnswerOptionToDisplay = useMemo(() => {
    return answerOptions.sort(() => Math.random() - 0.5);
  }, [answerOptions]);

  const jumpNext = () => {
    if (currentQuestionIndex === quizQuestions.length - 1) {
      navigate("Landing");
      return;
    }
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setGivenAnswer(undefined);
  };

  const getHTMLText = (text: string) => {
    return { html: text };
  };

  const renderAnswer = (item: string, index: number) => {
    const answerStyle = givenAnswer
      ? givenAnswer === currentQuestion.correct_answer
        ? styles.correctAnswerInputBox
        : styles.inCorrectAnswerInputBox
      : {};
    const inCorrectAnswerStyle =
      givenAnswer &&
      givenAnswer !== currentQuestion.correct_answer &&
      styles.correctAnswerInputBox;

    return (
      <TouchableOpacity
        disabled={givenAnswer !== undefined}
        onPress={() => setGivenAnswer(item)}
        key={"view" + index}
        style={[
          styles.answerInputBox,
          item === givenAnswer && answerStyle,
          item === currentQuestion.correct_answer && inCorrectAnswerStyle,
        ]}
      >
        <RenderHtml
          contentWidth={width}
          key={"text" + index}
          source={getHTMLText(item)}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.overallScoreBox}>
        <Text
          style={styles.scoreText}
        >{`Score: ${currentScore}/${quizQuestions.length}`}</Text>
      </View>

      <Text style={styles.questionText}>{`Question: ${
        currentQuestionIndex + 1
      }`}</Text>

      <RenderHtml
        contentWidth={width}
        source={getHTMLText(quizQuestions[currentQuestionIndex].question)}
      />

      <View style={styles.answerParentView}>
        {finalAnswerOptionToDisplay.map(renderAnswer)}
      </View>

      <Button
        disabled={givenAnswer === undefined}
        onPress={jumpNext}
        title={
          currentQuestionIndex === quizQuestions.length - 1 ? "Finish" : "Next"
        }
      />
    </View>
  );
};

export default QuizScreen;
