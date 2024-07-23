import React from "react";
import { Box, Button, ButtonText, Center, Image, Pressable, styled, Text } from "@gluestack-ui/themed";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { BottomRootParams } from "../../navigations/config";
import { StyleSheet, TouchableOpacity } from "react-native";

type Props = {} & NativeStackScreenProps<BottomRootParams, "Puzzle">;

const Puzzle = ({ navigation }: Props) => {
	return (
		<Box
			flex={1}
			bg="$white"
		>
			<Box mx={24}>
				<Image
					source={require("../../components/images/Puzzle/puzzle.jpg")}
					alt="puzzle"
					w={"$full"}
					h={240}
					objectFit="cover"
				/>
			</Box>
			{/* introduction of this screen */}
			<Box>
				<Center>
					<Text
						color="$primary400"
						fontWeight="$semibold"
						fontSize={30}
					>
						Trò chơi xếp hình
					</Text>
					<Text
						color="$coolGray600"
						fontStyle="italic"
					>
						Lựa chọn độ khó
					</Text>
				</Center>
			</Box>
			{/* the hard type */}
			<Box
				px={24}
				mt={32}
				gap={16}
			>
				<Pressable
					bgColor="$primary400"
					py={10}
					rounded={8}
					onPress={() => navigation.navigate("PuzzleScreen", { mode: "easy" })}
				>
					<Text
						color="$white"
						fontWeight="$semibold"
						fontSize={20}
						textAlign="center"
					>
						Dễ
					</Text>
				</Pressable>
				<Pressable
					bgColor="$yellow600"
					py={10}
					rounded={8}
					onPress={() => navigation.navigate("PuzzleScreen", { mode: "medium" })}
				>
					<Text
						color="$white"
						fontWeight="$semibold"
						fontSize={20}
						textAlign="center"
					>
						Trung bình
					</Text>
				</Pressable>
				<Pressable
					bgColor="$red400"
					py={10}
					rounded={8}
					onPress={() => navigation.navigate("PuzzleScreen", { mode: "hard" })}
				>
					<Text
						color="$white"
						fontWeight="$semibold"
						fontSize={20}
						textAlign="center"
					>
						Khó
					</Text>
				</Pressable>
			</Box>
		</Box>
	);
};

export default Puzzle;
