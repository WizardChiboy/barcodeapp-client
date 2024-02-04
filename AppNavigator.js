import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Toast from "react-native-toast-message";
import Ionicons from "@expo/vector-icons/Ionicons";

import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/Signup";
import Home from "./pages/home/Home";
import { MaterialIcons } from "@expo/vector-icons";
import ScanMail from "./pages/scan/Scan";
import ScanPhone from "./pages/scan/ScanPhone";
import ScanName from "./pages/scan/ScanName";
import Logout from "./pages/auth/Logout";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="ScanMail"
        component={ScanMail}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

function AppNavigator() {
  return (
    <NavigationContainer>
      <Toast ref={(ref) => Toast.setRef(ref)} />

      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: "#8d1863", // Set your desired background color,
            paddingVertical: 10,
          },

          tabBarActiveTintColor: "#fff",
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="home" color={"white"} size={size} />
            ),
          }}
        />

        <Tab.Screen
          name="Mail"
          component={ScanMail}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="email" color={"white"} size={size} />
            ),
          }}
        />

        <Tab.Screen
          name="ScanPhone"
          component={ScanPhone}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="phone" color={"white"} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="ScanName"
          component={ScanName}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="person" color={"white"} size={size} />
            ),
          }}
        />

        <Tab.Screen
          name="Logout"
          component={Logout}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="logout" color={"white"} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
