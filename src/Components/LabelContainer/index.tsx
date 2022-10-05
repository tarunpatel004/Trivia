import React from "react";
import { Text, View } from "react-native";

import styles from "./styles";

interface LabelContainerProps {
  title: string;
  children?: React.ReactNode;
}

/**
 * @description This component is to display the text with the border view
 * @param {string} title - title of the text
 * @param {React.ReactNode} children - children which we want inside the border
 * @returns
 */
const LabelContainer: React.FC<LabelContainerProps> = ({ title, children }) => {
  return (
    <View>
      <Text style={styles.text}>{title}</Text>
      <View style={styles.borderView}>{children}</View>
    </View>
  );
};

export default LabelContainer;
