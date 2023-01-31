import React from 'react';
import { useNavigation } from '@react-navigation/native';

import SmallButton from '../SmallButton';

import { COLORS } from '../../../../constants/theme/colors';
import { SCREENS } from '../../../../constants/screens';

export function BackButton({ defaultRoute, ...props }) {
	const navigation = useNavigation();

	const handleTouch = () => {
		if (navigation.canGoBack()) {
			return navigation.goBack();
		}
		navigation.navigate(defaultRoute || SCREENS.HOME.name);
	};

	return (
		<SmallButton
			iconLibrary="AntDesign"
			icon="arrowleft"
			onTouch={handleTouch}
			iconColor={COLORS.dark}
			{...props}
		/>
	);
}
