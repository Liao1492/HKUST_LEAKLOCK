import { AntDesign } from "@expo/vector-icons";
import { VStack, Text, HStack, Icon } from "native-base";
import { TouchableOpacity } from "react-native";
import React from "react";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../types";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import HeaderLogo from "../components/HeaderLogo";

const ExistingAccount = ({
  navigation,
}: StackScreenProps<RootStackParamList, "ExistingAccount">) => {
  return (
    <>
      <HeaderLogo />
      <VStack top={-50}>
        <HStack paddingLeft={5}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon as={<AntDesign name="left" />} size={7} color="white" />
          </TouchableOpacity>
        </HStack>
      </VStack>
    </>
  );
};

export default ExistingAccount;
