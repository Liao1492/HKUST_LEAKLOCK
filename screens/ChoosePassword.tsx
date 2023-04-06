import { View, Text, VStack, HStack, Icon } from "native-base";
import React from "react";
import { TouchableOpacity } from "react-native";
import HeaderLogo from "../components/HeaderLogo";
import { AntDesign } from "@expo/vector-icons";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../types";
const ChoosePassword = ({
  navigation,
}: StackScreenProps<RootStackParamList, "ChoosePassword">) => {
  return (
    <>
      <HeaderLogo showSub />
      <VStack top={-50}>
        <HStack paddingLeft={5}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon as={<AntDesign name="left" />} size={7} color="white" />
          </TouchableOpacity>
        </HStack>
        <VStack marginLeft={4} marginTop={5}>
          <Text fontSize={16}>Choose a name for your account</Text>
        </VStack>
      </VStack>
    </>
  );
};

export default ChoosePassword;
