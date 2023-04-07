import { View, Text, VStack } from "native-base";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import normalize from "react-native-normalize";

interface IProps {
  outline?: boolean;
  title: string;
  subTitle: string;
  isSwitch?: boolean;
}
const CardAccount = ({
  outline = false,
  title,
  subTitle,
  isSwitch = false,
}: IProps) => {
  const [off, setOff] = useState(true);
  return (
    <TouchableOpacity>
      <VStack
        margin={2}
        backgroundColor={outline ? "gray.700" : "red.400"}
        w={normalize(160)}
        h={normalize(150)}
        rounded={20}
        alignItems={"center"}
        justifyContent="center"
      >
        <Text fontSize={24} fontWeight="bold">
          {title}
        </Text>
        <Text top={-6}>{subTitle}</Text>
        {isSwitch && (
          <TouchableOpacity
            onPress={() => {
              setOff((prev) => !prev);
            }}
          >
            <VStack
              w={35}
              backgroundColor={!off ? "gray.500" : "white"}
              alignItems="center"
              rounded={20}
              paddingX={2}
              paddingY={0.5}
            >
              <Text color={off ? "black" : "white"}>{off ? "off" : "on"}</Text>
            </VStack>
          </TouchableOpacity>
        )}
      </VStack>
    </TouchableOpacity>
  );
};

export default CardAccount;
