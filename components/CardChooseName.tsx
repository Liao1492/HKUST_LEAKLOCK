import { View, Text, HStack, Icon, VStack } from "native-base";
import CuriousSVG from "../assets/Curious.svg";
import CaffeineSVG from "../assets/caffeine.svg";
import AnalyticalSVG from "../assets/analytical.svg";
import WordSVG from "../assets/word.svg";
import CalculatedSVG from "../assets/calculated.svg";

import React from "react";

const CardChooseName = () => {
  return (
    <HStack>
      <Icon as={} size={10} color={"white"} />
      <VStack>
        <Text>CuriousExplorer</Text>
      </VStack>
    </HStack>
  );
};

export default CardChooseName;
