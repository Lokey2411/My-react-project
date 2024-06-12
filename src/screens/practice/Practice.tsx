import {
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Platform,
} from "react-native";
import { Image, Box, VStack, Text, HStack } from "@gluestack-ui/themed";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { BottomTabsParams, RootStackParams } from "../../navigations/config";

const PracticeCard = () => {
  return (
    <VStack alignItems="center" m="$1" gap={"$2"}>
      <Box borderWidth={1} borderColor="$coolGray100" rounded={"$2xl"}>
        <Image
          w={"$40"}
          h={"$32"}
          alt="img-practice"
          source={require("../../assets/practice1.png")}
        />
      </Box>
      <VStack gap="$1">
        <Text fontWeight="$semibold" fontSize={"$sm"} color="$coolGray800">
          Bài 1: Ô tô chạy
        </Text>
        <Text
          fontWeight="$normal"
          fontSize={"$xs"}
          color="$coolGray500"
          numberOfLines={1}
        >
          Viết chương trình mô tả chiếc ô tô chuyển động trên màn hình
        </Text>
      </VStack>
    </VStack>
  );
};

type Props = {} & NativeStackScreenProps<
  RootStackParams & BottomTabsParams,
  "Detail"
>;

const Practice = ({ navigation }: Props) => {
  const onPracticeDetail = () => {
    navigation.navigate("PracticeDetail");
  };
  return (
    <VStack
      flex={1}
      gap={"$12"}
      px={"$8"}
      py={"$4"}
      justifyContent="space-between"
      bg="$white"
    >
      {Platform.OS == "android" && <StatusBar barStyle="light-content" />}
      <HStack flexWrap="wrap">
        <Box w={"$1/2"}>
          <TouchableOpacity onPress={onPracticeDetail}>
            <PracticeCard />
          </TouchableOpacity>
        </Box>
        <Box w={"$1/2"}>
          <TouchableOpacity onPress={onPracticeDetail}>
            <PracticeCard />
          </TouchableOpacity>
        </Box>
        <Box w={"$1/2"}>
          <TouchableOpacity onPress={onPracticeDetail}>
            <PracticeCard />
          </TouchableOpacity>
        </Box>
        <Box w={"$1/2"}>
          <TouchableOpacity onPress={onPracticeDetail}>
            <PracticeCard />
          </TouchableOpacity>
        </Box>
      </HStack>
    </VStack>
  );
};
export default Practice;

const styles = StyleSheet.create({});
