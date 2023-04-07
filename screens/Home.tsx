import { View, Text, VStack, Input, HStack } from "native-base";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import React from "react";
import { FlatList, ImageSourcePropType } from "react-native";
import CardHome from "../components/CardHome";
import { CardType } from "../components/CardHome";
import {
  ResponsiveValue,
  ColorType,
} from "native-base/lib/typescript/components/types";
import { ILinearGradientProps } from "native-base/lib/typescript/components/primitives/Box/types";
import HeaderLoggedIn from "../components/HeaderLoggedIn";
import ListenPNG from "../assets/listening.png";
import GamePNG from "../assets/game.png";
import TravelPNG from "../assets/travel.png";
import { StackScreenProps } from "@react-navigation/stack";

import { RootTabParamList } from "../types";
import MoviePNG from "../assets/movie.png";
import DocPNG from "../assets/doc.png";
import { HomeStackParamList } from "./HomeStack";

const Home = ({ navigation }: StackScreenProps<HomeStackParamList, "Home">) => {
  const { top } = useSafeAreaInsets();
  const arrCards: {
    imgUrl: ImageSourcePropType;
    title: CardType;
    subTitle: string;
    bgColor: ResponsiveValue<ColorType | ILinearGradientProps>;
  }[] = [
    {
      imgUrl: ListenPNG,
      title: "Listen",
      subTitle: "Music and podcasts",
      bgColor: "purple.600",
    },
    {
      imgUrl: GamePNG,
      title: "Game",
      subTitle: "play and explore",
      bgColor: "red.600",
    },
    {
      imgUrl: TravelPNG,
      title: "Travel",
      subTitle: "Plain,train,hotel",
      bgColor: "cyan.600",
    },
    {
      imgUrl: MoviePNG,
      title: "Watch",
      subTitle: "Films and videos",
      bgColor: "orange.400",
    },
    {
      imgUrl: DocPNG,
      title: "Health",
      subTitle: "Track and measure",
      bgColor: "orange.600",
    },
  ];
  // const arrCards = [];
  const renderCard = ({
    item,
    index,
  }: {
    item: {
      imgUrl: ImageSourcePropType;
      title: CardType;
      subTitle: string;
      bgColor: ResponsiveValue<ColorType | ILinearGradientProps>;
    };
    index: number;
  }) => {
    return (
      <CardHome
        imgSrc={item.imgUrl}
        title={item.title}
        subTitle={item.subTitle}
        onPress={() => {
          navigation.navigate("Apps", { type: item.title });
        }}
        bgColor={item.bgColor}
      />
    );
  };
  return (
    <VStack paddingTop={top} bgColor={"black"} h="full" paddingX={1}>
      <HeaderLoggedIn />
      <Input
        marginTop={5}
        rounded={30}
        height={12}
        backgroundColor={"white"}
        _input={{ color: "black" }}
        placeholder="Search what you need"
      />
      <VStack marginTop={7} flex={1} alignItems="center">
        <FlatList
          data={arrCards}
          keyExtractor={(item) => item.title}
          renderItem={renderCard}
          numColumns={2}
        />
        {/* <CardHome
          imgSrc={ListenPNG}
          title={"Listen"}
          subTitle={"Music and podcasts"}
          onPress={() => {}}i
        /> */}
      </VStack>
    </VStack>
  );
};

export default Home;
