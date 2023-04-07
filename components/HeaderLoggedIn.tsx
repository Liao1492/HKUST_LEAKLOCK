import { View, Text, VStack, HStack, Icon } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import React from "react";

const HeaderLoggedIn = () => {
  return (
    <HStack justifyContent={"space-between"} alignItems="center">
      <Icon as={<Entypo name="chevron-thin-left" />} size={7} color="white" />
      <Text fontSize={20} fontWeight="bold">
        LeakLock
      </Text>
      <Icon
        as={<Ionicons name="person-circle-outline" />}
        size={9}
        color={"white"}
      />
    </HStack>
  );
};

export default HeaderLoggedIn;
