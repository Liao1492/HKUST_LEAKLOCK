import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import * as React from "react";
import Login from "../screens/Onboarding";
import { RootStackParamList, RootTabParamList } from "../types";
import CreateNewKeys from "../screens/CreateNewKeys";
import ChoosePassword from "../screens/ChoosePassword";

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: "slide_from_right",
        contentStyle: { backgroundColor: "#000000" },
      }}
    >
      <Stack.Screen
        name="Onboarding"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CreateNewKeys"
        component={CreateNewKeys}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ChoosePassword"
        component={ChoosePassword}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator<RootTabParamList>();

// Bottom tab used when user have login
// const BottomTabNavigator = () => {
//   return (
//     <BottomTab.Navigator
//       screenOptions={{
//         headerShown: false,
//       }}
//     ></BottomTab.Navigator>
//   );
// };
