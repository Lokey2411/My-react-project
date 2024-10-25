import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Box, Center, HStack, Modal, Text, VStack, useTheme } from "native-base";
import { EFont } from "../types/utils";
import CustomBtn from "./CustomBtn";
import BackgroundLayout from "./BackgroundLayout";
import CloseBtn from "./CloseBtn";

type Props = {
	showModal: boolean;
	setShowModal: any;
};

const PopupParent = (props: Props) => {
	const { colors } = useTheme();
	const { showModal, setShowModal } = props;
	return (
		<Modal
			isOpen={showModal}
			onClose={() => setShowModal(false)}
			size="full"
			flex={1}
			height={"100%"}
		>
			<Box
				background={"white"}
				mt={5}
				borderTopLeftRadius={16}
				borderTopRightRadius={16}
				width={"100%"}
				flex={1}
				height={"100%"}
			>
				<Modal.Body
					flex={1}
					height={"100%"}
				>
					<VStack
						flex={1}
						space={5}
						height={"100%"}
					>
						<HStack
							px={1}
							alignItems={"center"}
							justifyContent={"space-between"}
						>
							<Text
								fontFamily={EFont.Quicksand_700Bold}
								fontSize={20}
								fontWeight={"700"}
								color={"primary.600"}
							>
								Hướng dẫn sử dụng và lời khuyên cho phụ huynh
							</Text>
							<CloseBtn handleBtn={() => setShowModal(false)} />
						</HStack>
						<Box
							pl={1}
							pr={3}
						>
							<Text
								fontFamily={EFont.Quicksand_400Regular}
								fontSize={14}
							>
								Xin chào, chúng tôi rất vui khi quý vị đã lựa chọn sử dụng ứng dụng dạy toán M4K. Để sử dụng một cách hiệu quả nhất, chúng tôi có một số hướng dẫn sử dụng như sau:
								{`\n`}- Cho con học môi ngày 1 bài, không học quá
								{`\n`}- Môi ngày cho con học tối đa 45p
								{`\n`}- Giám sát con khi sử dụng Chúng tôi chuc bạn và con của bạn có một giờ học và chơi hiệu quả
							</Text>
						</Box>
					</VStack>
				</Modal.Body>
			</Box>
		</Modal>
	);
};

export default PopupParent;

const styles = StyleSheet.create({});
