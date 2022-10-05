import React, { memo } from "react";
import { ActivityIndicator, Modal, View } from "react-native";

import styles from "./styles";

interface LoadingIndicatorProps {
  isLoading: boolean;
}

/**
 * @description This component is to display the loading indicator for the API calls
 * @param {boolean} isLoading - if true then it will display the
 * @returns
 */
const LoadingIndicator: React.FC<LoadingIndicatorProps> = ({ isLoading }) => {
  return isLoading ? (
    <Modal key={"modal"} transparent={true} animationType={"none"}>
      <View style={styles.modalBackground}>
        <ActivityIndicator />
      </View>
    </Modal>
  ) : (
    <></>
  );
};

export default memo(LoadingIndicator);
