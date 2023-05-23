import styles from "./styles";
import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  GestureResponderEvent,
} from "react-native";

const PrimaryButton = (
  onPress: ((event: GestureResponderEvent) => void) | undefined,
  ...title: any[]
) => {
  return (
    <View style={styles.container} onTouchStart={() => console.log("logado")}>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PrimaryButton;
