import Toast from 'react-native-root-toast';
import { COLORS } from '../constants/theme/colors';

export function showToast(title, config = {}) {
	return Toast.show(title, {
		duration: Toast.durations.LONG,
		position: Toast.positions.BOTTOM,
		shadow: true,
		animation: true,
		hideOnPress: true,
		delay: 0,
		backgroundColor: COLORS.lightSecondary,
		textColor: COLORS.black,
		shadowColor: COLORS.black,
		...config,
	});
}
