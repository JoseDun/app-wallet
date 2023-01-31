import { useNavigation } from '@react-navigation/native';
import { useMutation } from 'react-query';

import { showToast } from '../../helpers/toast';
import { registerUser } from '../../api';

import SignUpForm from '../../components/views/SignUpForm';

import { SCREENS } from '../../constants/screens';
import { SignUpFormLoadingContextProvider } from './LoadingContext';

export default function SignUp() {
	const navigation = useNavigation();

	const { mutate: sendData, isLoading } = useMutation(registerUser, {
		mutationKey: 'registerUser',
		onError: () => {
			showToast('Ha ocurrido un error inesperado.');
		},
		onSuccess: () => {
			navigation.navigate(SCREENS.HOME);
		},
	});

	const handleFinish = (data) => {
		if (!data) return navigation.navigate(SCREENS.WELCOME);
		sendData(data);
	};

	return (
		<SignUpFormLoadingContextProvider isLoading={isLoading}>
			<SignUpForm onFinish={handleFinish} />
		</SignUpFormLoadingContextProvider>
	);
}
