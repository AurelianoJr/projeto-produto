import React, { useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import styles from "./styles";
//import { UselessnumberInput, UselessTextInput } from "../../components/Input";
import { Home } from "../Home";
import { LinearGradient } from "expo-linear-gradient";
import { Icon } from "react-native-elements";
import { getClients } from "../../services/getClient";

export function Login({ ...props }) {
  const [clientList, setClientList] = useState<any>([]);
  async function updateClientList() {
    const clientDados = await getClients();
    console.log(clientDados[0].name);
    setClientList(clientDados);
  }
  return (
    <SafeAreaView style={styles.bodyBox}>
      <LinearGradient
        colors={["#305", "#304", "#000"]}
        style={styles.container}
      >
        <View>
          <Text style={styles.welcomeText}>Bem vindo!</Text>
          <Text style={styles.loginText}>Login</Text>
          <Text style={styles.welcomeText}>
            {clientList.length > 0 && clientList[1].name}
          </Text>
          <Image
            style={{ height: 40, width: 40 }}
            source={{ uri: clientList[1].avatar }}
          />
        </View>

        <View>
          <View style={styles.inputUserBox}>
            <TextInput
              style={styles.userinput}
              placeholder={"Username"}
              textContentType="username"
              keyboardType="default"
            />
          </View>
          <View style={styles.inputPasswordBox}>
            <TextInput
              style={styles.passwordInput}
              placeholder={"password"}
              keyboardType="number-pad"
            />
          </View>
          <TouchableOpacity>
            <Text style={styles.buttonText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={styles.entryButton}
            onPress={() => props.navigation?.openDrawer(Home)}
          >
            <Text style={styles.entryButtonText}>Entrar</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={updateClientList}>
            <Text>pegar Clientes</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.loginWithBar}>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="google" type="font-awesome" size={30} color="#808e9b" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Icon
              name="facebook-square"
              type="font-awesome"
              size={30}
              color="#808e9b"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="apple" type="font-awesome" size={30} color="#808e9b" />
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}
