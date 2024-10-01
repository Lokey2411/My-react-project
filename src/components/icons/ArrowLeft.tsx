import { StyleSheet } from "react-native";
import React from "react";
import { Path, Svg, SvgProps } from "react-native-svg";

const ArrowLeft = (props: SvgProps) => {
	return (
		<Svg
			width={21}
			height={24}
			fill="none"
			{...props}
		>
			<Path
				fill="#262626"
				d="M1.5 14.598c-2-1.155-2-4.041 0-5.196l15-8.66c2-1.155 4.5.288 4.5 2.598v17.32c0 2.31-2.5 3.753-4.5 2.598l-15-8.66Z"
			/>
		</Svg>
	);
};

export default ArrowLeft;
