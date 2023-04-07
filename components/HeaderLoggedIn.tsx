import { View, Text, VStack, HStack, Icon } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

interface IProps {
  title?: string;
}
const HeaderLoggedIn = ({ title = "LeakLock" }: IProps) => {
  const navigation = useNavigation();
  return (
    <HStack justifyContent={"space-between"} alignItems="center">
      <TouchableOpacity
        onPress={() => {
          if (navigation.canGoBack()) {
            navigation.goBack();
          }
        }}
      >
        <Icon as={<Entypo name="chevron-thin-left" />} size={7} color="white" />
      </TouchableOpacity>
      <Text fontSize={20} fontWeight="bold">
        {title}
      </Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Account");
        }}
      >
        <Icon
          as={<Ionicons name="person-circle-outline" />}
          size={9}
          color={"white"}
        />
      </TouchableOpacity>
    </HStack>
  );
};

export default HeaderLoggedIn;
