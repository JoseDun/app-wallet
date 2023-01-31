import React, { useEffect, useState } from 'react';

import { Image, Pressable, View } from 'react-native';
import { IconButton } from 'react-native-paper';
import CameraFormModal from '../../common/images/CameraFormModal';

export function ImageInput({
	width = '100%',
	height = 200,
	onChange,
	additionalClassName,
	...props
}) {
	const [modalVisible, setModalVisible] = useState(false);
	const [value, setValue] = useState(false);

	useEffect(() => {
		onChange(value);
	}, [value]);

	const handlePress = () => {
		setModalVisible(true);
	};

	const handleClose = (data) => {
		setModalVisible(false);
		if (!data) return;
		setValue(data);
	};

	return (
		<>
			<Pressable onPress={handlePress}>
				<View
					style={{ width, height }}
					className={`bg-light rounded-2xl justify-center items-center overflow-hidden ${
						additionalClassName || ''
					}`}
				>
					{!value ? (
						<IconButton size={45} iconColor="gray" icon="image-plus" />
					) : (
						<Image source={value} className="w-full h-full" />
					)}
				</View>
			</Pressable>
			<CameraFormModal opened={modalVisible} onClose={handleClose} {...props} />
		</>
	);
}
