import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Box } from "@gluestack-ui/themed";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { BottomRootParams } from "../../navigations/config";

type Props = {} & NativeStackScreenProps<BottomRootParams, "Puzzle">;

const Puzzle = ({ navigation }: Props) => {
  return <Box flex={1} bg="$white">
    
  </Box>;
};

export default Puzzle;

const styles = StyleSheet.create({});
