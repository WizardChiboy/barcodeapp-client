import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/Signup";
import Toast from "react-native-toast-message";
import Home from "./pages/home/Home";
import Scan from "./pages/scan/Scan";

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Toast />

      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signup"
          component={SignUp}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Scan"
          component={Scan}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
