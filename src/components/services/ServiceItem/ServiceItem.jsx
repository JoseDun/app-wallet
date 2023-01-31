import React from 'react';
import { Text, View, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import AppIcon from '../../common/AppIcon';

import { COLORS } from '../../../constants/theme/colors';
import { ICON_SIZES } from '../../../constants/sizes';

import ShadowStyles from '../../../styles/ShadowStyles';

export function ServiceItem({ item }) {
	const {
		title,
		icon,
		color = COLORS.dark,
		iconColor = COLORS.medium,
		iconSize = ICON_SIZES.MEDIUM,
		shadow,
		subtitle,
		libraryName,
		routerLink = 'Services',
	} = item;

	const navigation = useNavigation();

	const handlePress = () => navigation.navigate(routerLink);

	return (
		<Pressable
			style={(shadow && ShadowStyles.Shadow, { backgroundColor: color })}
			className={`min-h-[64px] w-11/12 rounded-2xl mt-5 mx-4 p-3 flex-row justify-around items-center`}
			onPress={handlePress}
		>
			<View className="w-2/12">
				<AppIcon library={libraryName} name={icon} size={iconSize} color={iconColor} />
			</View>

			<View className="w-10/12">
				<Text className="text-sm font-normal pl-1 text-primaryDark">{title}</Text>
				<Text className="text-xs pl-1 font-light text-medium">{subtitle}</Text>
			</View>

			<AppIcon
				library="MaterialIcons"
				name="keyboard-arrow-right"
				size={ICON_SIZES.MEDIUM}
				color={COLORS.medium}
			/>
		</Pressable>
	);
}
