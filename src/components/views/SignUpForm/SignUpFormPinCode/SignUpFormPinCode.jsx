import React, { useState } from 'react';

import { useSignUpFormLoadingContext } from '../../../../screens/SignUp/LoadingContext';

import {
	PIN_CODE_CONFIRM_FORM_SCHEMA,
	PIN_CODE_FORM_SCHEMA,
} from '../../../../constants/forms/schemas/pin-code';

import SimpleForm from '../../../common/SimpleForm';

import { FORM_ERROR_MESSAGES } from '../../../../constants/forms/messages/errors';
import { SafeAreaView, View } from 'react-native';

import GlobalsStyles from '../../../../styles/GlobalsStyles';

export function SignUpFormPinCode({ onNext, onCancel }) {
	const isLoading = useSignUpFormLoadingContext();

	const [pinCode, setPinCode] = useState('');
	const [canContinue, setCanContinue] = useState(false);
	const [errors, setErrors] = useState({});

	const handleRegisterPinCodeSave = (data) => {
		const value = data[PIN_CODE_FORM_SCHEMA[0].name];
		setPinCode(value);
		setCanContinue(true);
	};

	const handleConfirmPinCodeSave = (data) => {
		const value = data[PIN_CODE_CONFIRM_FORM_SCHEMA[0].name];
		if (value !== pinCode)
			return setErrors({ [PIN_CODE_CONFIRM_FORM_SCHEMA[0].name]: FORM_ERROR_MESSAGES.match });
		onNext({ password: pinCode, confirmation: value });
	};

	const handleCancel = () => {
		onCancel();
	};

	const handleConfirmPinCodeCancel = () => {
		setCanContinue(false);
	};

	return (
		<SafeAreaView style={GlobalsStyles.AndroidSafeArea}>
			<View className="p-5">
				{!canContinue ? (
					<SimpleForm
						title="Ingresar Clave"
						description="Registra la clave que vas a usar para ingresar al monedero."
						schema={PIN_CODE_FORM_SCHEMA}
						onSave={handleRegisterPinCodeSave}
						onCancel={handleCancel}
						value={{ [PIN_CODE_FORM_SCHEMA[0].name]: pinCode }}
					/>
				) : (
					<SimpleForm
						title="Confirmar Clave"
						description="Ingresa la misma clave que colocaste en el formulario anterior"
						schema={PIN_CODE_CONFIRM_FORM_SCHEMA}
						onSave={handleConfirmPinCodeSave}
						onCancel={handleConfirmPinCodeCancel}
						cancelText="Volver"
						defaultErrors={errors}
						isLoading={isLoading}
					/>
				)}
			</View>
		</SafeAreaView>
	);
}
