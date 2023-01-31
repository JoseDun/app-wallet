import { useNavigation } from '@react-navigation/native';

import SignInForm from '../../components/views/SignInForm';

import { SCREENS } from '../../constants/screens';

export default function SignIn() {
	const navigation = useNavigation();

	const handleFinish = (data) => {
		const route = SCREENS[!data ? 'WELCOME' : 'HOME'].name;

		navigation.navigate(route);
	};

	return <SignInForm onFinish={handleFinish} />;
}
