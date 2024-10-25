import { StyleSheet, StyleSheetProperties, TouchableOpacity, ViewStyle } from "react-native";
import React from "react";
import { Box, IBoxProps, Text } from "native-base";
import { EFont, IGradientColor } from "../types/utils";
import { LinearGradient } from "expo-linear-gradient";

const borderRadius = 16;

const responsiveSize = {
	MD: { width: 195, height: 40, fontSize: 16 },
	XS: { width: 160, height: 32, fontSize: 14 },
	SM: { width: 110, height: 40, fontSize: 16 },
};

type Props = {
	size?: "MD" | "XS" | "SM";
	btnColor: IGradientColor;
	text: string;
	handleBtn: () => void;
	disabled?: boolean;
	boxStyle?: ViewStyle;
} & IBoxProps;

const CustomBtn = (props: Props) => {
	const { text, size, btnColor, handleBtn, disabled = false, boxStyle, ...boxProps } = props;
	const { width, height, fontSize } = responsiveSize[size || "MD"];
	return (
		<TouchableOpacity
			onPress={handleBtn}
			disabled={disabled}
			style={{
				margin: 3,
				flex: 1,
				...styles.button,
				backgroundColor: "red",
			}}
		>
			<LinearGradient
				// Button Linear Gradient
				colors={disabled ? ["#fff", "#cecece"] : [btnColor.color1, btnColor.color2]}
				style={{ ...styles.gradientColor, flex: 1, ...boxStyle }}
			>
				<Box
					shadow={2}
					{...boxProps}
					style={[{ flex: 1, justifyContent: "center", alignItems: "center" }]}
				>
					<Text
						fontSize={fontSize}
						color="black"
						fontFamily={EFont.Quicksand_700Bold}
						fontWeight={"700"}
					>
						{text}
					</Text>
				</Box>
			</LinearGradient>
		</TouchableOpacity>
	);
};

export default CustomBtn;

const styles = StyleSheet.create({
	button: {
		borderWidth: 1,
		borderColor: "#000",
		borderRadius,
	},
	gradientColor: {
		borderRadius,
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});
