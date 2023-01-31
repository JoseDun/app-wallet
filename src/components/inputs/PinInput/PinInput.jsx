import React, { useEffect, useRef } from 'react';
import { TextInput, View } from 'react-native';

import { useForm } from '../../../hooks/useForm';

import Styles from './styles.scss';

export function PinInput({ minLength = 4, onChange, additionalClassName, value = {}, ...props }) {
	const schema = [];

	for (let index = 0; index < minLength; index++) {
		schema.push({
			name: `field_${index}`,
			ref: useRef(null),
			required: true,
		});
	}

	const { values, onInputChange, errors } = useForm(value, null, schema);

	useEffect(() => {
		const valuesItems = Object.values(values);
		const response = valuesItems.join('');
		onChange(response);
	}, [values]);

	const getNextIput = (currentInput, goBack) => {
		const fieldIndex = schema.findIndex((state) => state.name === currentInput);
		const nextIndex = fieldIndex + (goBack ? -1 : 1);

		return schema[nextIndex];
	};

	const focusNextInput = (currentInput, goBack) => {
		const newField = getNextIput(currentInput, goBack);
		if (!newField) return;

		newField.ref.current.focus();
	};

	const handleInputChange = (name, value) => {
		onInputChange({ name, value });
		if (!value) return;

		focusNextInput(name);
	};

	const handleInputKeyPress = (name, event) => {
		const { key } = event.nativeEvent;
		if (key === 'Backspace') return focusNextInput(name, true);

		if (isNaN(Number(key))) return;
		if (!values[name]) return;

		const newField = getNextIput(name);
		focusNextInput(name);

		if (!newField?.name || values[newField.name]) return;

		handleInputChange(newField.name, key);
	};

	return (
		<View className={`flex-row justify-evenly w-full ${additionalClassName || ''}`}>
			{schema.map(({ name, ref }) => (
				<View
					key={name}
					className={`
							${
								!values[name] ? 'bg-secondary' : 'bg-lightSecondary'
							} shadow-2xl border-gray-600 rounded-3xl justify-center items-center
							${errors[name] ? 'bg-tertiary' : ''}`}
					style={Styles.inputContainer}
				>
					<TextInput
						ref={ref}
						keyboardType="number-pad"
						maxLength={1}
						className="text-5xl text-center overflow-visible"
						style={Styles.textInput}
						value={values[name]}
						onChangeText={(value) => handleInputChange(name, value)}
						onKeyPress={(event) => handleInputKeyPress(name, event)}
						{...props}
					/>
				</View>
			))}
		</View>
	);
}
