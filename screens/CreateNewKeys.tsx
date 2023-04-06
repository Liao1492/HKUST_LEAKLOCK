import { View, Text, VStack, HStack, Icon } from "native-base";
import React, { useState } from "react";
import { FlatList } from "react-native";
import { TouchableOpacity } from "react-native";
import HeaderLogo from "../components/HeaderLogo";
import { AntDesign } from "@expo/vector-icons";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../types";
import CuriousSVG from "../assets/Curious.svg";
import CaffeineSVG from "../assets/caffeine.svg";
import AnalyticalSVG from "../assets/analytical.svg";
import WordSVG from "../assets/word.svg";
import CalculatedSVG from "../assets/calculated.svg";
import CardChooseName from "../components/CardChooseName";

const namesArray = [
  { icon: <CuriousSVG />, title: "Curious Explorer" },
  { icon: <CaffeineSVG />, title: "Caffeinated Brainiac" },
  { icon: <AnalyticalSVG />, title: "Analytical Guru" },
  { icon: <CalculatedSVG />, title: "Calculated Chaos" },
  { icon: <WordSVG />, title: "Witty Wordsmith" },
];
const CreateNewKeys = ({
  navigation,
}: StackScreenProps<RootStackParamList, "CreateNewKeys">) => {
  const [selected, setSelected] = useState(-1);
  const renderCard = ({
    item,
    index,
  }: {
    item: { icon: JSX.Element; title: string };
    index: number;
  }) => {
    return (
      <CardChooseName
        icon={item.icon}
        text={item.title}
        selected={selected === index}
        onPress={() => setSelected(index)}
      />
    );
  };
  return (
    <>
      <HeaderLogo showSub />
      <VStack top={-50}>
        <HStack paddingLeft={5}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon as={<AntDesign name="left" />} size={7} color="white" />
          </TouchableOpacity>
        </HStack>
        <VStack marginLeft={4} marginTop={5}>
          <Text fontSize={18}>Choose a name for your account</Text>
        </VStack>
        <VStack alignItems="center" margin={"auto"} space={5} marginTop={5}>
          {/* <CardChooseName icon={CuriousSVG} text="Curious Explorer" />
          <CardChooseName icon={CaffeineSVG} text="Caffeinated Brainiac" />
          <CardChooseName icon={AnalyticalSVG} text="Analytical Guru" />
          <CardChooseName icon={CalculatedSVG} text="Calculated Chaos" />
          <CardChooseName icon={WordSVG} text="Witty Wordsmith" /> */}

          <FlatList
            renderItem={renderCard}
            data={namesArray}
            keyExtractor={(item) => item.title}
          />
        </VStack>
        <HStack width={"60%"} margin={"auto"} justifyContent={"flex-end"}>
          <HStack
            marginTop={5}
            paddingX={3}
            paddingY={2}
            backgroundColor={"white"}
            rounded={50}
          >
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("ChoosePassword", {
                  name: namesArray[selected].title,
                })
              }
            >
              <Icon as={<AntDesign name="right" />} size={7} color="black" />
            </TouchableOpacity>
          </HStack>
        </HStack>
      </VStack>
    </>
  );
};

export default CreateNewKeys;
