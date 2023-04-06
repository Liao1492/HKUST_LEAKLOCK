import { View, Text, HStack, Icon, VStack } from "native-base";

import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

interface IProps {
  icon: JSX.Element;
  text: string;
  selected?: boolean;
  onPress: () => void;
}
const CardChooseName = ({ icon, text, selected = false, onPress }: IProps) => {
  return (
    <HStack alignItems={"center"} space={5} marginBottom={4}>
      <Icon as={icon} size={10} color={"white"} />
      <TouchableOpacity onPress={onPress}>
        <VStack
          padding={3}
          backgroundColor={selected ? "white" : "primary.200"}
          rounded={30}
          minWidth={210}
          borderWidth={2}
          borderColor={"primary.200"}
        >
          <Text fontSize={20} color={"black"}>
            {text}
          </Text>
        </VStack>
      </TouchableOpacity>
    </HStack>
  );
};

export default CardChooseName;
