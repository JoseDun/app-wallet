import React, { useState } from 'react';
import { Modal, StyleSheet, Text, Pressable, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Help = ({
	pressableX,
	pressableY,
	modalViewX,
	modalViewY,
	color,
	type,
	symbol,
	symbolColor,
	insideSymbolColor = 'times',
	insideSymbol,
}) => {
	const [modalVisible, setModalVisible] = useState(false);
	return (
		<View className="justify-center items-center mt-5 flex-1">
			<Modal
				statusBarTranslucent={true}
				animationType="slide"
				transparent={true}
				visible={modalVisible}
				onRequestClose={() => {
					setModalVisible(!modalVisible);
				}}
			>
				<View
					style={styles.modalView}
					className="w-full h-full bg-primary opacity-90 rounded-t-3xl p-9 justify-end items-end  self-end content-end"
				>
					{!!type ? (
						<View className=" bottom-72 ">
							<Text className="mb-4 text-center font-bold text-xl text-white">
								Recuperar Contraseña
							</Text>
							<Text className="mb-4 text-right font-bold text-xl text-white">
								Soporte
							</Text>
						</View>
					) : (
						<Text className="mb-4 text-center font-bold text-xl text-white">
							Dinero
						</Text>
					)}

					<View className={`absolute bottom-[187px] right-[11px]`}>
						<Pressable
							className="w-16 h-16 shadow-outline items-center p-3 m-3 rounded-3xl justify-center text-center self-center bg-light"
							onPress={() => setModalVisible(!modalVisible)}
						>
							<Text className="text-white text-center font-bold">
								<Icon
									name={`${insideSymbol}`}
									size={30}
									color={`${insideSymbolColor}`}
								/>
							</Text>
						</Pressable>
					</View>
				</View>
			</Modal>

			<Pressable
				className={`w-16 h-16 shadow-outline items-center p-3 m-3 rounded-3xl justify-center text-center self-center  absolute ${pressableX} ${pressableY} ${color}`}
				onPress={() => setModalVisible(true)}
			>
				<Text className="text-white text-center font-bold">
					<Icon name={`${symbol}`} size={30} color={`${symbolColor}`} />
				</Text>
			</Pressable>
		</View>
	);
};

export default Help;

const styles = StyleSheet.create({
	modalView: {
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
	},
});
