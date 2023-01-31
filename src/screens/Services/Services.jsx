import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { Text } from 'react-native-paper';

import { useProfileContext } from '../../context/ProfileContext';

import BackButton from '../../components/common/Buttons/BackButton';
import ServiceItemList from '../../components/services/ServiceItemList';
import Balance from '../../components/transactions/Balance';

import { SCREENS } from '../../constants/screens';

import GlobalsStyles from '../../styles/GlobalsStyles';

export default function Services() {
	const [profile] = useProfileContext();

	const { quota } = profile || {};

	return (
		<SafeAreaView style={GlobalsStyles.AndroidSafeArea}>
			<BackButton defaultRoute={SCREENS.HOME.name} />

			<View className="mx-4">
				<Balance balance={quota} />
			</View>

			<Text className="text-2xl text-primaryDark ml-4 mt-4 font-normal">Servicios</Text>

			<ServiceItemList />
		</SafeAreaView>
	);
}
