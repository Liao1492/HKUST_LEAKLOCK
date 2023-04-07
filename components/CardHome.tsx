import { VStack, Text } from "native-base";
import { Image } from "react-native";
import React from "react";
import {
  ResponsiveValue,
  ColorType,
} from "native-base/lib/typescript/components/types";
import { ILinearGradientProps } from "native-base/lib/typescript/components/primitives/Box/types";
import { TouchableOpacity, ImageSourcePropType } from "react-native";
import normalize from "react-native-normalize";

export type CardType = "Listen" | "Game" | "Travel" | "Watch" | "Health";

interface IProps {
  // type: CardType;
  imgSrc: ImageSourcePropType;
  title: string;
  subTitle: string;
  onPress: () => void;
  bgColor: ResponsiveValue<ColorType | ILinearGradientProps>;
}
const CardHome = ({ imgSrc, title, subTitle, onPress, bgColor }: IProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <VStack
        marginX={2}
        marginY={2}
        alignItems={"center"}
        backgroundColor={bgColor}
        width={normalize(160)}
        height={normalize(220)}
        rounded={20}
        paddingY={3}
      >
        <Text fontSize={28} fontWeight={700}>
          {title}
        </Text>
        <Text top={-10}> {subTitle}</Text>
        <Image source={imgSrc} alt="card img" />
      </VStack>
    </TouchableOpacity>
  );
};

export default CardHome;
