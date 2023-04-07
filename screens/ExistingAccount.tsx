import { AntDesign } from "@expo/vector-icons";
import { VStack, Text, HStack, Icon, FlatList } from "native-base";
import { TouchableOpacity } from "react-native";
import React from "react";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../types";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import HeaderLogo from "../components/HeaderLogo";
import CardChooseName from "../components/CardChooseName";
import { MaterialIcons } from "@expo/vector-icons";

import { IAccount } from "../store/slices/accountSlice";
const ExistingAccount = ({
  navigation,
}: StackScreenProps<RootStackParamList, "ExistingAccount">) => {
  const accounts = useSelector((state: RootState) => state.accounts);
  const renderCard = ({ item }: { item: IAccount }) => {
    return (
      <CardChooseName
        icon={<MaterialIcons name="account-circle" size={24} color="black" />}
        text={item.name}
        onPress={() => {
          navigation.navigate("InsertPassword", { id: item.id });
        }}
      />
    );
  };
  return (
    <>
      <HeaderLogo />
      <VStack top={-50}>
        <HStack paddingLeft={5}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon as={<AntDesign name="left" />} size={7} color="white" />
          </TouchableOpacity>
        </HStack>
        <VStack marginLeft={10} marginTop={10}>
          <Text fontSize={16} fontWeight={700}>
            Your Keys
          </Text>
        </VStack>
        <VStack justifyContent={"center"} alignItems="center" marginTop={5}>
          {accounts.length === 0 ? (
            <Text
              marginTop={5}
              textAlign={"center"}
              fontSize={16}
              fontWeight={"bold"}
            >
              No account created
            </Text>
          ) : (
            <FlatList
              data={accounts}
              keyExtractor={(item) => item.id}
              renderItem={renderCard}
            />
          )}
        </VStack>
      </VStack>
    </>
  );
};

export default ExistingAccount;
