import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "./Src/Screen/Login";
import { Home } from "./Src/Screen/Home";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
