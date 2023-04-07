import { View, Text, VStack, HStack, Icon, Input } from "native-base";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../types";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import HeaderLogo from "../components/HeaderLogo";
import CardChooseName from "../components/CardChooseName";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setLoggedIn } from "../store/slices/loginSlice";
import { MaterialIcons } from "@expo/vector-icons";

const InsertPassword = ({
  navigation,
  route,
}: StackScreenProps<RootStackParamList, "InsertPassword">) => {
  const dispatch = useDispatch();
  const { id } = route.params;
  const [pass, setPass] = useState("");
  const [wrong, setWrong] = useState(false);
  const account = useSelector((state: RootState) =>
    state.accounts.find((item) => item.id === id)
  );

  return (
    <>
      <HeaderLogo />

      <VStack top={-50}>
        <HStack paddingLeft={5}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon as={<AntDesign name="left" />} size={7} color="white" />
          </TouchableOpacity>
        </HStack>
        <VStack alignItems={"center"} marginTop={20}>
          <CardChooseName
            icon={
              <MaterialIcons name="account-circle" size={24} color="black" />
            }
            text={account.name}
            onPress={() => {}}
          />
          <Input
            w={250}
            borderColor={"primary.200"}
            value={pass}
            onChangeText={(text) => setPass(text)}
            rounded={20}
            height={12}
            backgroundColor={"white"}
            _input={{ color: "black" }}
            placeholder="Password"
            type="password"
          />
          <Text color={wrong ? "red.500" : "black"}>Password not correct</Text>
        </VStack>
        <HStack
          width={"65%"}
          justifyContent="flex-end"
          m={"auto"}
          paddingTop={10}
        >
          <HStack
            marginTop={5}
            paddingX={3}
            paddingY={2}
            backgroundColor={"white"}
            rounded={50}
          >
            <TouchableOpacity
              onPress={() => {
                if (pass !== account.password) {
                  setWrong(true);
                } else {
                  dispatch(setLoggedIn());
                  navigation.reset({
                    index: 0,
                    routes: [{ name: "LoggedInView" }],
                  });
                }
              }}
            >
              <Icon as={<AntDesign name="right" />} size={7} color="black" />
            </TouchableOpacity>
          </HStack>
        </HStack>
      </VStack>
    </>
  );
};

export default InsertPassword;
