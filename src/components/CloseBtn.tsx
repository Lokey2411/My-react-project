import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Box, Text, useTheme } from "native-base";
import { LinearGradient } from "expo-linear-gradient";
import { Xrp } from "iconsax-react-native";
import CloseIcon from "./icons/CloseIcon";

type Props = {
	handleBtn: () => void;
};

const CloseBtn = (props: Props) => {
	const { colors } = useTheme();

	return (
		<TouchableOpacity onPress={props.handleBtn}>
			<CloseIcon />
		</TouchableOpacity>
	);
};

export default CloseBtn;

const styles = StyleSheet.create({
	button: {
		borderWidth: 1,
		borderColor: "#fff",
		borderRadius: 8,
		padding: 1,
		backgroundColor: "#fff",
		width: 40,
		height: 40,
	},
	gradientColor: {
		borderRadius: 8,
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});
