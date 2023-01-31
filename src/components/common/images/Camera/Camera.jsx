import { useState } from 'react';

import { Camera, CameraType, FlashMode } from 'expo-camera';

import { Text, View } from 'react-native';
import { ActivityIndicator, Button, IconButton } from 'react-native-paper';
import ImagePickerIconButton from '../ImagePickerIconButton';

export function CameraApp({ onShot, canFlip, canPick, onClose }) {
	const [flasIsActive, setFlasIsActive] = useState(false);
	const [type, setType] = useState(CameraType.back);
	const [permission, requestPermission] = Camera.useCameraPermissions();
	const [camera, setCamera] = useState(null);

	if (!permission) return <ActivityIndicator />;

	const takePicture = async () => {
		if (camera) {
			const data = await camera.takePictureAsync(null);
			onShot(data);
		}
	};

	const handleCameraFlipButtonPress = () => {
		const newType = type === CameraType.back ? CameraType.front : CameraType.back;
		setType(newType);
	};

	const handleCloseButtonPress = () => {
		onClose();
	};

	const handleCameraButtonPress = () => {
		takePicture();
	};

	const handleFlashButtonPress = () => {
		setFlasIsActive((state) => !state);
	};

	const handlePickerChange = (data) => {
		onShot(data);
	};

	return (
		<View style={{ flex: 1 }}>
			{permission.granted ? (
				<Camera
					style={{ flex: 1 }}
					type={type}
					ref={(ref) => setCamera(ref)}
					flashMode={flasIsActive ? FlashMode.torch : FlashMode.off}
				/>
			) : (
				<View
					className="w-full h-full bg-primary items-center justify-center"
					style={{ flex: 1 }}
				>
					<Text className="text-center text-light mb-5">
						Necesitamos el permiso para usar la camara
					</Text>
					<Button mode="elevated" onPress={requestPermission}>
						<Text>Conceder Permiso</Text>
					</Button>
				</View>
			)}
			<View className="w-full absolute top-[40px] px-5 flex-row justify-between items-center">
				<IconButton
					iconColor="white"
					icon="close"
					animated
					onPress={handleCloseButtonPress}
				/>
				<IconButton
					iconColor="white"
					icon={!flasIsActive ? 'flash' : 'flash-off'}
					animated
					onPress={handleFlashButtonPress}
				/>
			</View>
			<View className="w-full absolute bottom-[0px] p-5 flex-row justify-center items-center">
				{!!canPick && (
					<ImagePickerIconButton
						className=" absolute left-[20px]"
						iconColor="white"
						icon="image"
						animated
						onChange={handlePickerChange}
					/>
				)}
				<IconButton
					size={44}
					iconColor="white"
					icon="camera"
					animated
					onPress={handleCameraButtonPress}
				/>
				{!!canFlip && (
					<IconButton
						className="self-center absolute right-[20px]"
						iconColor="white"
						icon="camera-flip"
						animated
						onPress={handleCameraFlipButtonPress}
					/>
				)}
			</View>
		</View>
	);
}
