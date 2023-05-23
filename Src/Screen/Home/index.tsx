import react, { useState } from "react";
import { Text, View, TouchableOpacity, TextInput } from "react-native";
//import { TextInput } from "react-native-gesture-handler";
import styles from "./styles";
import { LinearGradient } from "expo-linear-gradient";
//import PrimaryButton from "../../components/PrimaryButton";
import { Icon } from "react-native-elements";

export function Home() {
  const [newSkill, setNewSkill] = useState("");

  return (
    <View style={styles.bodyBox}>
      <LinearGradient
        colors={["#305", "#304", "#000"]}
        style={styles.container}
      >
        <View style={styles.Header}>
          <TouchableOpacity style={styles.profile}></TouchableOpacity>

          <Text style={styles.titleText}>Username</Text>

          <TouchableOpacity>
            <Icon name="cog" type="font-awesome" size={20} color="#000" />
          </TouchableOpacity>
        </View>

        <View style={styles.box}>
          <TextInput
            style={styles.input}
            placeholder="add a friend"
            onChangeText={setNewSkill}
          />
        </View>
        <View style={styles.iconBox}></View>
      </LinearGradient>
    </View>
  );
}
