import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";
import { Icon } from "native-base";
import * as React from "react";
import Login from "../screens/Onboarding";
import { RootStackParamList, RootTabParamList } from "../types";
import CreateNewKeys from "../screens/CreateNewKeys";
import Home from "../screens/Home";
import ChoosePassword from "../screens/ChoosePassword";
import Account from "../screens/Account";
import HomeStack from "../screens/HomeStack";
import ExistingAccount from "../screens/ExistingAccount";
import LogoutScreen from "../screens/LogoutScreen";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useNavigation } from "@react-navigation/native";
import InsertPassword from "../screens/InsertPassword";

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
  const navigation = useNavigation();
  const loginStatus = useSelector((state: RootState) => state.login.loggedIn);
  React.useEffect(() => {
    if (loginStatus) {
      navigation.reset({
        index: 0,
        routes: [{ name: "LoggedInView" }],
      });
    }
  }, []);
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
      <Stack.Screen
        name="Account"
        component={Account}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ExistingAccount"
        component={ExistingAccount}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="InsertPassword"
        component={InsertPassword}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LoggedInView"
        component={BottomTabLoginNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator<RootTabParamList>();

const BottomTabLoginNavigator = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: "#1C1C1C" },
        tabBarActiveTintColor: "#FFFFFF",
        tabBarShowLabel: false,
      }}
    >
      <BottomTab.Screen
        name="Exchange"
        component={HomeStack}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="exchange" color={color} />
          ),
          headerShown: false,
        }}
      />
      <BottomTab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          headerShown: false,
        }}
      />
      <BottomTab.Screen
        name="Logout"
        component={LogoutScreen}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            e.preventDefault();
            navigation.reset({
              index: 0,
              routes: [{ name: "Onboarding" }],
            });
          },
        })}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="toggle-right" color={color} />
          ),
          headerShown: false,
        }}
      />
    </BottomTab.Navigator>
  );
};
const TabBarIcon = (props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) => {
  return (
    <Icon
      as={<FontAwesome />}
      size={6}
      style={{ marginBottom: -3 }}
      {...props}
    />
  );
};
