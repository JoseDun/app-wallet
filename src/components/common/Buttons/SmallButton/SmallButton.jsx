import { Pressable } from 'react-native';

import AppIcon from '../../AppIcon';

import { ICON_SIZES } from '../../../../constants/sizes';

import { COLORS } from '../../../../constants/theme/colors';

export function SmallButton({
	icon,
	className,
	color = COLORS.transparent,
	iconColor = COLORS.light,
	iconSize = ICON_SIZES.MEDIUM,
	iconLibrary,
	onTouch,
	...props
}) {
	const handlePress = () => onTouch();

	return (
		<Pressable
			onPress={handlePress}
			className={`w-14 h-14 rounded-2xl justify-center items-center ${className}`}
			style={{ backgroundColor: color }}
			{...props}
		>
			<AppIcon name={icon} size={iconSize} color={iconColor} library={iconLibrary} />
		</Pressable>
	);
}
