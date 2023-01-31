import { Image, Pressable, View } from 'react-native';
import { Avatar as AvatarPaper } from 'react-native-paper';
import { ICON_SIZES } from '../../../constants/sizes';
import { COLORS } from '../../../constants/theme/colors';

export function Avatar({
	showCloud = false,
	color = COLORS.lightSecondary,
	size = ICON_SIZES.EXTRA_LARGE,
	src,
	alt,
	onPress,
	...props
}) {
	const label = typeof alt === 'string' ? alt[0] : '?';

	return (
		<Pressable className="justify-center items-end" onPress={onPress}>
			{showCloud && (
				<Image source={require('../../../assets/images/cloud.png')} className="self-end" />
			)}
			<View className="absolute right-2">
				{src ? (
					<AvatarPaper.Image
						size={size}
						source={src}
						style={{ backgroundColor: color }}
						{...props}
					/>
				) : (
					<AvatarPaper.Text size={size} label={label} {...props} />
				)}
			</View>
		</Pressable>
	);
}
