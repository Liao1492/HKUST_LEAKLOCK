import { View, Text, VStack } from "native-base";
import { Image, ImageSourcePropType } from "react-native";
import normalize from "react-native-normalize";
import React from "react";
import {
  ResponsiveValue,
  ColorType,
} from "native-base/lib/typescript/components/types";
import { ILinearGradientProps } from "native-base/lib/typescript/components/primitives/Box/types";
import { TouchableOpacity } from "react-native";

interface IProps {
  imgUrl: ImageSourcePropType;
  name: string;
  bgColor?: ResponsiveValue<ColorType | ILinearGradientProps>;
}
const CardApp = ({ imgUrl, name, bgColor }: IProps) => {
  return (
    <VStack w={normalize(156)} margin={2}>
      <TouchableOpacity>
        <VStack
          rounded={15}
          w={normalize(155)}
          h={normalize(155)}
          backgroundColor={bgColor === undefined ? "white" : bgColor}
          justifyContent="center"
          alignItems={"center"}
        >
          <Image source={imgUrl} alt="app image" resizeMode="contain" />
        </VStack>
      </TouchableOpacity>
      <Text textAlign={"left"} paddingLeft={2}>
        {name}
      </Text>
    </VStack>
  );
};

export default CardApp;
