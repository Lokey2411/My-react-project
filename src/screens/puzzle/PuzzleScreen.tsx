import { StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { Box, Button, Pressable, SafeAreaView, Text } from "@gluestack-ui/themed";
import PuzzleGame from "../../components/common/PuzzleGame";
import { PuzzlePieces } from "react-native-picture-puzzle";
import { modePuzzle, randomPuzzle } from "../../db/puzzle";
import PuzzleModal from "../../components/common/PuzzleModal";
import { useRoute } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { BottomRootParams } from "../../navigations/config";
import { getRandomArrayItem } from "../../functions/controller";
import Model from "../../components/Model";

type Props = {} & NativeStackScreenProps<BottomRootParams, "PuzzleScreen">;

const PuzzleScreen = ({ route, navigation, ...props }: Props) => {
	const { mode } = route.params;
	const [pieces, setPieces] = React.useState<PuzzlePieces>(getRandomArrayItem(randomPuzzle[mode]));
	const [show, setShow] = useState(false);
	const isCorrect = pieces.every((piece, index) => piece === index);
	const source = React.useMemo(
		() => ({
			uri: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
		}),
		[]
	);

	const handleHint = () => {
		setShow(true);
	};
	return (
		<SafeAreaView flex={1}>
			<Box
				flex={1}
				px={24}
				gap={16}
			>
				<PuzzleModal
					show={show}
					setShow={setShow}
					source={source}
				/>
				<PuzzleGame
					pieces={pieces}
					setPieces={setPieces}
					source={source}
				/>
				<Pressable
					bg="$yellow500"
					p={8}
					rounded={8}
					onPress={handleHint}
				>
					<Text
						textAlign="center"
						fontSize={"$xl"}
						fontWeight="$semibold"
						color="$white"
					>
						Hint
					</Text>
				</Pressable>
				<Model show={isCorrect}>
					<Box
						p="$4"
						rounded={"$lg"}
						alignItems="center"
						gap={12}
					>
						<Text
							fontWeight="$bold"
							fontSize="$xl"
							textAlign="center"
						>
							Chúc mừng!
						</Text>
						<Text textAlign="center">Bạn đã hoàn thành trò chơi</Text>
						<Pressable
							onPress={() => navigation.goBack()}
							bg={"$green500"}
							p={8}
							rounded={8}
						>
							<Text
								color="$white"
								fontWeight="$semibold"
							>
								Xác nhận
							</Text>
						</Pressable>
					</Box>
				</Model>
			</Box>
		</SafeAreaView>
	);
};

export default PuzzleScreen;

const styles = StyleSheet.create({});
