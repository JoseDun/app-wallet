import React, { useState } from 'react';
import { useMutation } from 'react-query';
import { SafeAreaView, View } from 'react-native';

import { verificationUser, smsVerification } from '../../../../api/auth/index';
import { showToast } from '../../../../helpers/toast';

import SimpleForm from '../../../common/SimpleForm';

import { REGISTER_PHONE_FORM_SCHEMA } from '../../../../constants/forms/schemas/register-phone';
import { PIN_CODE_FORM_SCHEMA } from '../../../../constants/forms/schemas/pin-code';
import { FORM_ERROR_MESSAGES } from '../../../../constants/forms/messages/errors';

import GlobalsStyles from '../../../../styles/GlobalsStyles';

export function SignUpFormPhone({ onNext, onCancel }) {
	const [phone, setPhone] = useState('');
	const [canContinue, setCanContinue] = useState(false);
	const [errors, setErrors] = useState({});

	const { mutate: verifyPhone, isLoading } = useMutation(verificationUser, {
		mutationKey: 'verifyPhone',
		onError: ({ response }) => {
			showToast(response?.data?.message);
		},
		onSuccess: () => {
			setCanContinue(true);
		},
	});

	const handleRegisterPhoneSave = (data) => {
		const value = data[REGISTER_PHONE_FORM_SCHEMA[0].name];
		verifyPhone(value);
		setPhone(value);
	};

	const { mutate: verifySMS, isLoading: loading } = useMutation(smsVerification, {
		mutationKey: 'verifySMS',
		onError: ({ response }) => {
			showToast(response?.data?.message);
			setErrors({ [PIN_CODE_FORM_SCHEMA[0].name]: FORM_ERROR_MESSAGES.match });
		},
		onSuccess: () => {
			onNext(phone);
		},
	});

	const handleConfirmPhoneSave = (data) => {
		const validationCode = data[PIN_CODE_FORM_SCHEMA[0].name];
		verifySMS({ phoneNumber: phone, validationCode });
	};

	const handleCancel = () => {
		onCancel();
	};

	const handleConfirmPhoneCancel = () => {
		setCanContinue(false);
	};

	return (
		<SafeAreaView style={GlobalsStyles.AndroidSafeArea}>
			<View className="p-5">
				{!canContinue ? (
					<SimpleForm
						title="Registrar número"
						description="Ingresa el número telefónico que vas a asociar a tu monedero."
						schema={REGISTER_PHONE_FORM_SCHEMA}
						onSave={handleRegisterPhoneSave}
						onCancel={handleCancel}
						value={{ [REGISTER_PHONE_FORM_SCHEMA[0].name]: phone }}
						isLoading={isLoading}
					/>
				) : (
					<SimpleForm
						title="Código de seguridad "
						description="Ingresa el código de seguridad que hemos enviado a tu teléfono."
						schema={PIN_CODE_FORM_SCHEMA}
						onSave={handleConfirmPhoneSave}
						onCancel={handleConfirmPhoneCancel}
						cancelText="Volver"
						defaultErrors={errors}
						isLoading={loading}
					/>
				)}
			</View>
		</SafeAreaView>
	);
}
