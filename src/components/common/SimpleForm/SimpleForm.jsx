import React, { useEffect } from 'react';
import { Text, View } from 'react-native';

import { Button } from 'react-native-paper';

import { getInitialFormState } from '../../../helpers/forms/utils';

import { useForm } from '../../../hooks/useForm';

import InputsDisplayer from '../InputsDisplayer';

export function SimpleForm({
	footerAlign = 'center',
	isLoading,
	value,
	onSave,
	onCancel,
	saveText,
	cancelText,
	schema,
	title,
	description,
	defaultErrors,
	children,
}) {
	const INITIAL_STATE = getInitialFormState(schema);

	const { values, onInputChange, errors, onSubmit, setValue, setErrors } = useForm(
		INITIAL_STATE,
		onSave,
		schema
	);

	useEffect(() => {
		setValue(value || {});
	}, [value]);

	useEffect(() => {
		setErrors(defaultErrors || {});
	}, [defaultErrors]);

	const onCancelButtonPress = () => {
		onCancel();
	};

	const onSaveButtonPress = () => {
		onSubmit();
	};

	return (
		<View className="justify-start w-full h-full">
			<View className="mb-9">
				{title && <Text className="text-2xl font-normal mt-3">{title}</Text>}
				{description && (
					<Text className="font-normal text-sm mt-2 text-medium">{description}</Text>
				)}
			</View>
			<View className="w-full">
				<InputsDisplayer
					fields={schema}
					values={values}
					errors={errors}
					onInputChange={onInputChange}
				/>
				{children}
				<View
					className={`
						justify-${footerAlign}
					 flex-row mb-3 mt-8 w-full`}
				>
					{!!onCancel && (
						<Button
							mode="outlined"
							className="shadow-2xl px-5 py-2 mr-3"
							onPress={onCancelButtonPress}
						>
							{cancelText || 'Cancelar'}
						</Button>
					)}
					<Button
						disabled={isLoading}
						mode="contained"
						className="shadow-2xl px-5 py-2"
						onPress={onSaveButtonPress}
						loading={isLoading}
					>
						{saveText || 'Continuar'}
					</Button>
				</View>
			</View>
		</View>
	);
}
