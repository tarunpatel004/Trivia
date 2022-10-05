import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { LandingScreen, QuizScreen } from "../Screens";
import { navigationRef } from "./utils";
import { QuizProvider } from "../Provider/questionProvider";

const ApplicationNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer ref={navigationRef}>
        <QuizProvider>
          <Stack.Navigator>
            <Stack.Screen name="Landing" component={LandingScreen} />
            <Stack.Screen name="Quiz" component={QuizScreen} />
          </Stack.Navigator>
        </QuizProvider>
      </NavigationContainer>
    </SafeAreaView>
  );
};
export default ApplicationNavigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
