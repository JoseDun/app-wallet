import * as ImagePicker from 'expo-image-picker';

import { IconButton } from 'react-native-paper';

export function ImagePickerIconButton({ onChange, ...props }) {
	const pickImage = async () => {
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.All,
			allowsEditing: true,
			aspect: [4, 3],
			quality: 1,
		});

		const response = !result.cancelled ? result : null;
		onChange(response);
	};

	const handlePress = () => {
		pickImage();
	};

	return <IconButton onPress={handlePress} {...props} />;
}
