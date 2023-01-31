import { SafeAreaView, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import SimpleForm from '../../../common/SimpleForm';

import { SIGN_UP_FORM_SCHEMA } from '../../../../constants/forms/schemas/sign-up';

import GlobalsStyles from '../../../../styles/GlobalsStyles';

export function SignUpFormBasic({ onNext, onCancel }) {
	const handleSave = (data) => {
		onNext(data);
	};

	const handleCancel = () => {
		onCancel();
	};

	return (
		<KeyboardAwareScrollView>
			<SafeAreaView style={GlobalsStyles.AndroidSafeArea}>
				<View className="p-5">
					<SimpleForm
						title="Información básica"
						description="Por favor provéenos los siguientes datos para poder crear tu nueva cuenta."
						onSave={handleSave}
						onCancel={handleCancel}
						schema={SIGN_UP_FORM_SCHEMA}
					/>
				</View>
			</SafeAreaView>
		</KeyboardAwareScrollView>
	);
}
