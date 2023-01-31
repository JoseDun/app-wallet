import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, View } from 'react-native';

import { useProfileContext } from '../../../context/ProfileContext';

import SimpleForm from '../../../components/common/SimpleForm';
import Balance from '../../../components/transactions/Balance';

import { RECHARGE_FORM_SCHEMA } from '../../../constants/forms/schemas/recharge';
import { SCREENS } from '../../../constants/screens';
import { RECHARGE_FORM_SCHEMA_PROVIDER_FIELD_NAME } from '../../../constants/schemas-names';

import GlobalsStyles from '../../../styles/GlobalsStyles';
import { services } from '../../../mock/services-items-list-mock';

export default function ServiceRecharges() {
	const [profile] = useProfileContext();

	const { quota } = profile || {};

	const navigation = useNavigation();

	const handleCancel = () => {
		navigation.goBack();
	};
	const handleContinue = () => {
		navigation.navigate(SCREENS.HOME);
	};
	const indexToChangeValue = RECHARGE_FORM_SCHEMA.findIndex(
		(item) => item.name === RECHARGE_FORM_SCHEMA_PROVIDER_FIELD_NAME
	);

	RECHARGE_FORM_SCHEMA[indexToChangeValue].options = services;

	return (
		<SafeAreaView style={GlobalsStyles.AndroidSafeArea}>
			<View className="mx-4">
				<Balance balance={quota} />
			</View>
			<View className="p-4">
				<SimpleForm
					title="Recarga"
					description="Recarga saldo a tu operador personalizado."
					schema={RECHARGE_FORM_SCHEMA}
					onCancel={handleCancel}
					onSave={handleContinue}
					footerAlign="end"
				/>
			</View>
		</SafeAreaView>
	);
}
