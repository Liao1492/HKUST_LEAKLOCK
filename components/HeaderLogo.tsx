import { VStack, Text } from "native-base";
import { StyleSheet, Image } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import LogoImage from "../assets/Logo.png";

interface IProps {
  showSub?: boolean;
}

const HeaderLogo = ({ showSub = false }: IProps) => {
  const { top } = useSafeAreaInsets();

  return (
    <>
      <VStack top={-top}>
        <Image
          source={LogoImage}
          alt="Logo image"
          style={{ width: 200, height: 250 }}
          resizeMode={"contain"}
        />
      </VStack>
      {showSub && (
        <VStack
          paddingTop={140}
          paddingLeft={10}
          position="absolute"
          style={styles.title}
        >
          <Text>Generate new key</Text>
        </VStack>
      )}
    </>
  );
};
const styles = StyleSheet.create({
  title: {
    transform: [{ rotate: "10deg" }],
  },
});

export default HeaderLogo;
