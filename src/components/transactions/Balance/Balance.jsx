import { useState } from 'react';
import { View, Text } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import SmallButton from '../../common/Buttons/SmallButton';
import CoinAdvice from '../../common/CoinAdvice';

import { COLORS } from '../../../constants/theme/colors';

export function Balance({ size = 'small', balance }) {
	const [balanceIsVisible, setBalanceIsVisible] = useState(null);

	const handlePress = () => {
		setBalanceIsVisible(!balanceIsVisible);
	};

	return (
		<LinearGradient
			start={{ x: 0.25, y: 0.5 }}
			colors={[COLORS.primary, COLORS.dark]}
			className={`rounded-2xl flex-row justify-between items-center px-3 ${
				size === 'big' ? 'h-32' : 'h-[70px] py-1'
			} `}
		>
			<View>
				<Text className="text-light text-sm mb-1 font-normal">Tu Balance</Text>
				<Text className="text-light text-2xl font-bold">
					{balanceIsVisible ? (
						'******** $'
					) : (
						<CoinAdvice color={COLORS.light} amount={balance} />
					)}
				</Text>
			</View>
			<SmallButton
				onTouch={handlePress}
				icon={`eye${!balanceIsVisible ? '-slash' : ''}`}
				color={COLORS.dark}
				iconColor={COLORS.light}
				iconLibrary="FontAwesome"
			/>
		</LinearGradient>
	);
}
