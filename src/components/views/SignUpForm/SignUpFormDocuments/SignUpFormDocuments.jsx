import React from 'react';

import { SafeAreaView, ScrollView, View } from 'react-native';

import SimpleForm from '../../../common/SimpleForm';

import { REGISTER_DOCUMENT_FORM_SCHEMA } from '../../../../constants/forms/schemas/register-document';

import GlobalsStyles from '../../../../styles/GlobalsStyles';

export function SignUpFormDocuments({ onNext, onCancel }) {
	const handleCancel = () => {
		onCancel();
	};

	const handleSave = (data) => {
		onNext(data);
	};

	return (
		<ScrollView>
			<SafeAreaView style={GlobalsStyles.AndroidSafeArea}>
				<View className="p-5">
					<SimpleForm
						title="Registrar documento"
						description="Prepara tu documento y sitúate en un lugar con buena iluminación para tomar las fotos."
						schema={REGISTER_DOCUMENT_FORM_SCHEMA}
						onSave={handleSave}
						onCancel={handleCancel}
					/>
				</View>
			</SafeAreaView>
		</ScrollView>
	);
}
