import React, { useEffect, useState } from "react";
import { Alert, Button, TextInput, View, Text } from "react-native";
import { Dropdown as DropdownComponent } from "react-native-element-dropdown";

import { LabelContainer, Loader } from "../../Components";
import { difficultiesData, questionTypeData } from "../../Constants";
import { DropDown } from "../../Models/Dropdown";
import { navigate } from "../../Navigators/utils";
import { useQuiz } from "../../Provider/questionProvider";
import styles from "./styles";

const LandingScreen = () => {
  const {
    getCategoryData,
    getQuestionData,
    categories,
    quizQuestions,
    overallScore,
    overallAnswerGiven,
    isLoading,
  } = useQuiz();
  //   const [categories, setCategories] = useState<DropDown[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<DropDown>();
  const [selectedQuestionType, setSelectedQuestionType] = useState<DropDown>(
    questionTypeData[1]
  );
  const [selectedDifficulty, setSelectedDifficulty] = useState<DropDown>(
    difficultiesData[0]
  );
  const [numberOfQuestions, setNumberOfQuestions] = useState<string>("10");

  useEffect(() => {
    getCategoryData();
  }, []);

  useEffect(() => {
    if (categories.length >= 0) {
      setSelectedCategory(categories[0]);
    }
  }, [categories]);

  useEffect(() => {
    if (quizQuestions) {
      if (quizQuestions.length > 0) {
        navigate("Quiz");
      } else {
        Alert.alert(
          "No data",
          "No data for the selected values please try to change it"
        );
      }
    }
  }, [quizQuestions]);

  function validateInput() {
    if (numberOfQuestions.length === 0) {
      Alert.alert("Error", "Number of question can not be blank");
      return;
    }
    if (parseInt(numberOfQuestions) <= 0 || parseInt(numberOfQuestions) > 50) {
      Alert.alert("Error", "Number of question can should be from 1 to 50");
      return;
    }
    if (!selectedCategory) {
      Alert.alert("Error", "Invalid category");
      return;
    }

    getQuestionData(
      parseInt(numberOfQuestions),
      selectedCategory?.id,
      selectedDifficulty.value,
      selectedQuestionType.value
    );
  }

  return (
    <View style={styles.container}>
      <Loader isLoading={isLoading}></Loader>
      {overallAnswerGiven > 0 && (
        <View style={styles.overallScoreBox}>
          <Text
            style={styles.scoreText}
          >{`Overall score: ${overallScore}/${overallAnswerGiven}`}</Text>
        </View>
      )}
      <LabelContainer title="Number of Questions:">
        <TextInput
          keyboardType="number-pad"
          maxLength={2}
          returnKeyLabel="Done"
          returnKeyType="done"
          value={numberOfQuestions}
          onChangeText={setNumberOfQuestions}
        />
      </LabelContainer>

      <LabelContainer title="Select Category:">
        <DropdownComponent
          labelField="label"
          valueField="value"
          placeholder="Select Categories"
          value={selectedCategory}
          onChange={setSelectedCategory}
          data={categories}
        />
      </LabelContainer>
      <LabelContainer title="Select Difficulty:">
        <DropdownComponent
          labelField="label"
          valueField="value"
          value={selectedDifficulty}
          onChange={setSelectedDifficulty}
          data={difficultiesData}
        ></DropdownComponent>
      </LabelContainer>

      <LabelContainer title="Select Type:">
        <DropdownComponent
          labelField="label"
          valueField="value"
          value={selectedQuestionType}
          onChange={setSelectedQuestionType}
          data={questionTypeData}
        />
      </LabelContainer>

      <Button title="Jump to quiz" onPress={validateInput}></Button>
    </View>
  );
};

export default LandingScreen;
