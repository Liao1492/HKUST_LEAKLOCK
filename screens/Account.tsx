import { View, Text, VStack, Input } from "native-base";
import HeaderLoggedIn from "../components/HeaderLoggedIn";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { FlatList } from "react-native";
import CardAccount from "../components/CardAccount";
import React from "react";

const arrSettings = [
  { title: "Subscription", subTitle: "Manage your plan" },
  { title: "Password", subTitle: "Change your password" },
  { title: "Payment", subTitle: "Manage your payment wallets" },
  { title: "Notification", subTitle: "Turn on/off apps notifications" },
  { title: "Statistics", subTitle: "On trends" },
  { title: "Account", subTitle: "Settings" },
];

const Account = () => {
  const { top } = useSafeAreaInsets();
  const outline = [0, 3, 4];
  const renderCard = ({
    item,
    index,
  }: {
    item: { title: string; subTitle: string };
    index: number;
  }) => {
    return (
      <CardAccount
        title={item.title}
        subTitle={item.subTitle}
        outline={!outline.includes(index)}
        isSwitch={index === 3}
      />
    );
  };
  return (
    <VStack marginX={1} paddingTop={top}>
      <HeaderLoggedIn />
      <Input
        marginTop={5}
        rounded={30}
        height={12}
        backgroundColor={"white"}
        _input={{ color: "black" }}
        placeholder="Search what you need"
      />
      <VStack justifyContent={"center"} alignItems={"center"} marginTop={5}>
        {/* <CardAccount /> */}
        <FlatList
          data={arrSettings}
          keyExtractor={(item) => item.title}
          renderItem={renderCard}
          numColumns={2}
        />
      </VStack>
    </VStack>
  );
};

export default Account;
