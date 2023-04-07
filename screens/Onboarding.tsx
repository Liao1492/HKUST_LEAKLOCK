import { View, Text, VStack, Button } from "native-base";
import { Image } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../types";
import OnBoardingPNG from "../assets/onboarding.png";
import HeaderLogo from "../components/HeaderLogo";
import { useDispatch } from "react-redux";
import { reset as logout } from "../store/slices/loginSlice";
import { reset } from "../store/slices/accountSlice";
import React, { useEffect } from "react";

const Onboarding = ({
  navigation,
}: StackScreenProps<RootStackParamList, "Onboarding">) => {
  const { top } = useSafeAreaInsets();
  const disaptch = useDispatch();
  useEffect(() => {
    disaptch(logout());
  }, []);
  return (
    <>
      <HeaderLogo />
      <VStack top={-20}>
        <VStack justifyContent={"center"} alignItems="center">
          <Image
            resizeMode="contain"
            source={OnBoardingPNG}
            alt="onboarding image"
          />
          <VStack width={"55%"} marginY={5}>
            <Text fontSize={32} fontWeight={700} textAlign="center">
              Be sure your personal data is safe
            </Text>
          </VStack>
          <VStack space={3}>
            <Button
              rounded={10}
              backgroundColor={"blue.700"}
              onPress={() => navigation.navigate("ExistingAccount")}
            >
              Access existing keys
            </Button>
            <Button
              rounded={10}
              backgroundColor={"gray.100"}
              _text={{ color: "gray.700" }}
              onPress={() => navigation.navigate("CreateNewKeys")}
            >
              Generate new keys
            </Button>
          </VStack>
        </VStack>
      </VStack>
    </>
  );
};

export default Onboarding;
