import { useState } from 'react';

import { Image, View } from 'react-native';
import { Button } from 'react-native-paper';

import Camera from '../Camera';

export function CameraForm({ onCancel, onSubmit, ...props }) {
	const [image, setImage] = useState(null);

	const handleShot = (image) => {
		setImage(image);
	};

	const handleCloseButtonPress = () => {
		onCancel();
	};

	const handleResetButtonPress = () => {
		setImage(null);
	};

	const handleContinueButtonPress = () => {
		onSubmit(image);
	};

	return (
		<View style={{ flex: 1 }}>
			{!image ? (
				<View className="w-full h-full">
					<Camera {...props} onShot={handleShot} onClose={handleCloseButtonPress} />
				</View>
			) : (
				<View className=" w-full h-full">
					<Image
						source={image}
						style={{
							flex: 1,
							width: null,
							height: null,
							resizeMode: 'contain',
						}}
					/>
					<View className="flex-row justify-center absolute bottom-[40px] right-[0px] w-full">
						<Button mode="elevated" onPress={handleResetButtonPress}>
							Cambiar
						</Button>
						<Button
							className="ml-3"
							mode="contained"
							onPress={handleContinueButtonPress}
						>
							Continuar
						</Button>
					</View>
				</View>
			)}
		</View>
	);
}
