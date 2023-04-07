import { View, Text, VStack, Input } from "native-base";
import React from "react";
import { StackScreenProps } from "@react-navigation/stack";
import { HomeStackParamList } from "./HomeStack";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import HeaderLoggedIn from "../components/HeaderLoggedIn";
import YTMusicPNG from "../assets/ytmusic.png";
import { appList, IApp } from "../constants/constants";
import { FlatList } from "react-native";
import CardApp from "../components/CardApp";

const Apps = ({
  navigation,
  route,
}: StackScreenProps<HomeStackParamList, "Apps">) => {
  const { top } = useSafeAreaInsets();
  const { type } = route.params;
  const renderCard = ({ item }: { item: IApp }) => {
    return (
      <CardApp imgUrl={item.imgUrl} name={item.title} bgColor={item.bgColor} />
    );
  };
  return (
    <VStack paddingTop={top} marginX={1}>
      <HeaderLoggedIn title={type} />
      <Input
        marginTop={5}
        rounded={30}
        height={12}
        backgroundColor={"white"}
        _input={{ color: "black" }}
        placeholder="Search what you need"
      />
      <VStack alignItems={"center"} marginTop={5}>
        <FlatList
          data={appList[type]}
          keyExtractor={(item) => item.title}
          renderItem={renderCard}
          numColumns={2}
        />
      </VStack>
      {/* <CardApp imgUrl={YTMusicPNG} name="Youtube music" /> */}
    </VStack>
  );
};

export default Apps;
