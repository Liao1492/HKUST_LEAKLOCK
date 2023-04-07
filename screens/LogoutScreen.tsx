import { View, Text, VStack } from "native-base";
import { StackScreenProps } from "@react-navigation/stack";
import { RootTabParamList } from "../types";
import React from "react";

const LogoutScreen = ({}: StackScreenProps<RootTabParamList, "Logout">) => {
  return (
    <VStack>
      <Text>LogoutScreen</Text>
    </VStack>
  );
};

export default LogoutScreen;
