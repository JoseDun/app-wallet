import { SafeAreaView, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import SimpleForm from '../../components/common/SimpleForm';
import { PROFILE_ACCOUNT_FORM_SCHEMA } from '../../constants/forms/schemas/profile-account';

import GlobalsStyles from '../../styles/GlobalsStyles';

export default function AccountDetails() {
	const navigation = useNavigation();

	const handleCancel = () => {
		navigation.goBack();
	};

	return (
		<KeyboardAwareScrollView>
			<SafeAreaView style={GlobalsStyles.AndroidSafeArea}>
				<View className="p-5">
					<SimpleForm
						title="Información de la cuenta"
						schema={PROFILE_ACCOUNT_FORM_SCHEMA}
						onCancel={handleCancel}
						cancelText="Volver"
					/>
				</View>
			</SafeAreaView>
		</KeyboardAwareScrollView>
	);
}
