import { View, Text, VStack, HStack, Icon, Input } from "native-base";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import HeaderLogo from "../components/HeaderLogo";
import { AntDesign } from "@expo/vector-icons";
import { StackScreenProps } from "@react-navigation/stack";
import { useDispatch } from "react-redux";
import { setLoggedIn } from "../store/slices/loginSlice";
import { addAccount } from "../store/slices/accountSlice";
import { RootStackParamList } from "../types";
const ChoosePassword = ({
  navigation,
  route,
}: StackScreenProps<RootStackParamList, "ChoosePassword">) => {
  const [pass, setPass] = useState({ password: "", confirmPass: "" });
  const isDisabled = pass.confirmPass !== pass.password;
  const isError =
    pass.confirmPass.length > pass.password.length ||
    (pass.confirmPass.length === pass.password.length &&
      pass.confirmPass !== pass.password);

  const dispatch = useDispatch();
  const { name } = route.params;
  return (
    <>
      <HeaderLogo showSub />
      <VStack top={-50}>
        <HStack paddingLeft={5}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon as={<AntDesign name="left" />} size={7} color="white" />
          </TouchableOpacity>
        </HStack>
        <VStack marginLeft={9} marginTop={5}>
          <Text fontSize={18}>Create a password</Text>
          <VStack
            margin={"auto"}
            width={"60%"}
            marginTop={10}
            space={5}
            alignItems="center"
          >
            <Input
              borderColor={"primary.200"}
              value={pass.password}
              onChangeText={(text) => setPass({ ...pass, password: text })}
              rounded={20}
              height={12}
              backgroundColor={"white"}
              _input={{ color: "black" }}
              placeholder="Password"
              type="password"
            />
            <Input
              type="password"
              borderColor={"primary.200"}
              value={pass.confirmPass}
              onChangeText={(text) => setPass({ ...pass, confirmPass: text })}
              rounded={20}
              height={12}
              backgroundColor={"white"}
              _input={{ color: "black" }}
              placeholder="Confirm Password"
            />
            {isError && (
              <Text color={"red.500"} top={-15}>
                The password does not match
              </Text>
            )}
          </VStack>
          <HStack
            width={"60%"}
            justifyContent="flex-end"
            margin={"auto"}
            marginTop={50}
          >
            <HStack
              marginTop={5}
              paddingX={3}
              paddingY={2}
              backgroundColor={"white"}
              rounded={50}
            >
              <TouchableOpacity
                disabled={isDisabled}
                onPress={() => {
                  dispatch(addAccount({ name: name, password: pass.password }));
                  dispatch(setLoggedIn());
                  navigation.reset({
                    index: 0,
                    routes: [{ name: "LoggedInView" }],
                  });
                }}
              >
                <Icon as={<AntDesign name="right" />} size={7} color="black" />
              </TouchableOpacity>
            </HStack>
          </HStack>
        </VStack>
      </VStack>
    </>
  );
};

export default ChoosePassword;
