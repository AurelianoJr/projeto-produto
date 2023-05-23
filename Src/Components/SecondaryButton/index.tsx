import styles from "./styles";
import React from "react";
import { TouchableOpacity, StyleSheet, View, Text } from "react-native";

const AlternativeButton = ({ onPress, title }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};
export default AlternativeButton;
