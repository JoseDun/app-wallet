import React, { useMemo, useState } from 'react';
import { Pressable, Text, View } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

import { useModalState } from '../../../hooks/useModalState';

import Avatar from '../../common/Avatar';
import PickerListModal from '../../modals/PickerListModal/PickerListModal';

import { ICON_SIZES } from '../../../constants/sizes';
import { COLORS } from '../../../constants/theme/colors';

import ShadowStyles from '../../../styles/ShadowStyles';

export function PickerInput({ options }) {
	const { isOpened, setIsOpened } = useModalState(false);
	const [valueData, setValueData] = useState(null);

	const handlePress = () => {
		setIsOpened(true);
	};

	const onClose = (value) => {
		setValueData(value);
		setIsOpened(false);
	};

	const selectedService = useMemo(() => {
		return options?.find(({ value }) => value === valueData);
	}, [valueData, options]);

	const { src, title = 'item', text = 'Selecciona un item.' } = selectedService || {};

	return (
		<>
			<Pressable
				style={ShadowStyles.Shadow}
				className={`h-[70px] w-full rounded-2xl flex-row justify-between items-center px-2 bg-light`}
				onPress={handlePress}
			>
				<View className="flex-row items-center justify-start pl-14">
					<Avatar src={src} />
					<View className="pl-1">
						<Text className="text-sm font-normal pl-1 text-primaryDark">{title}</Text>
						<Text className="text-xs pl-1 font-light text-medium">{text}</Text>
					</View>
				</View>
				<MaterialIcons
					name="keyboard-arrow-right"
					size={ICON_SIZES.MEDIUM}
					color={COLORS.medium}
				/>
			</Pressable>
			<PickerListModal onClose={onClose} isOpened={isOpened} options={options} />
		</>
	);
}
