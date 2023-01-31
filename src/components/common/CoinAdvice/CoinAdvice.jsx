import { Text } from 'react-native';

import { cleanNumber } from '../../../helpers/clean-number';

import { COLORS } from '../../../constants/theme/colors';

export function CoinAdvice({ amount, color = COLORS.black }) {
	return <Text style={{ color }}>{`${cleanNumber(amount) ?? '******'}  $`}</Text>;
}
