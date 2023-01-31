import React, { useCallback, useEffect, useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import { useMutation } from 'react-query';

import { showToast } from '../../../helpers/toast';
import { transformErrorMessage } from '../../../helpers/errors';
import { getNumber, setNumber, setToken } from '../../../helpers/token-helper';

import { loginUser } from '../../../api';

import SimpleForm from '../../common/SimpleForm';

import { REGISTER_PHONE_FORM_SCHEMA } from '../../../constants/forms/schemas/register-phone';
import { PIN_CODE_FORM_SCHEMA } from '../../../constants/forms/schemas/pin-code';
import { FORM_ERROR_MESSAGES } from '../../../constants/forms/messages/errors';

import GlobalsStyles from '../../../styles/GlobalsStyles';

export function SignInForm({ onFinish }) {
	const [phone, setPhone] = useState('');
	const [code, setCode] = useState('');
	const [canContinue, setCanContinue] = useState(false);
	const [errors, setErrors] = useState({});

	const { mutate: login, isLoading } = useMutation(loginUser, {
		mutationKey: 'loginUser',
		onError: (error) => {
			const { message } = error?.response?.data;
			const errorMessage = transformErrorMessage(message);
			showToast(errorMessage);
			setErrors({ [PIN_CODE_FORM_SCHEMA[0].name]: FORM_ERROR_MESSAGES.match });
		},
		onSuccess: ({ token }) => {
			setToken(token);
			onFinish(true);
		},
	});

	const handleRegisterPhoneSave = (data) => {
		const value = data[REGISTER_PHONE_FORM_SCHEMA[0].name];
		setNumber(value);
		setPhone(value);
		setCanContinue(true);
	};

	const handleConfirmPhoneSave = (data) => {
		const value = data[PIN_CODE_FORM_SCHEMA[0].name];
		setCode(value);

		if (code === value)
			return setErrors({ [PIN_CODE_FORM_SCHEMA[0].name]: FORM_ERROR_MESSAGES.match });

		login({
			username: phone,
			password: value,
		});
	};

	const handleCancel = () => {
		onFinish();
	};

	const handleConfirmPhoneCancel = () => {
		setCanContinue(false);
	};

	const getPhone = useCallback(async () => {
		const number = await getNumber();
		if (!number) return;
		setCanContinue(true);
		setPhone(number);
	}, [setCanContinue, setPhone]);

	useEffect(() => {
		getPhone();
	}, [getPhone]);

	return (
		<SafeAreaView style={GlobalsStyles.AndroidSafeArea}>
			<View className="p-5">
				{!canContinue ? (
					<SimpleForm
						title="Inicia Sesión"
						description="Ingresa el número telefónico asociado a tu monedero."
						schema={REGISTER_PHONE_FORM_SCHEMA}
						onSave={handleRegisterPhoneSave}
						onCancel={handleCancel}
						value={{ [REGISTER_PHONE_FORM_SCHEMA[0].name]: phone }}
					/>
				) : (
					<SimpleForm
						title="Código pin"
						description="Ingresa el código pin para iniciar sesión en tu cuenta."
						schema={PIN_CODE_FORM_SCHEMA}
						onSave={handleConfirmPhoneSave}
						onCancel={handleConfirmPhoneCancel}
						cancelText="Volver"
						defaultErrors={errors}
						isLoading={isLoading}
					/>
				)}
			</View>
		</SafeAreaView>
	);
}
