import React, { Fragment, useRef } from 'react';
import { HelperText, TextInput } from 'react-native-paper';
import { PaperSelect } from 'react-native-paper-select';

import DateInput from '../../inputs/DateInput';
import ImageInput from '../../inputs/ImageInput';
import PickerInput from '../../inputs/PickerInput';
import PinInput from '../../inputs/PinInput';

export function InputsDisplayer({ fields = [], onInputChange, values, errors }) {
	const test = useRef(null);
	return (
		<>
			{fields.map(({ name, class: className, mode, ...field }) => (
				<Fragment key={name}>
					{field.type === 'select' && (
						<PaperSelect
							{...field}
							value={values[name]?.value}
							onSelection={(change) =>
								onInputChange({
									name,
									value: {
										...field?.options.find(
											(item) => item.value === change.text
										),
										...change,
									},
								})
							}
							arrayList={field?.options}
							selectedArrayList={values[name]?.selectedList || []}
							errorText={errors[name]}
						/>
					)}
					{field.type === 'picker' && (
						<PickerInput
							{...field}
							errors={errors[name]}
							value={values[name] === undefined ? '' : values[name]}
							onChange={(value) => onInputChange({ name, value })}
						/>
					)}
					{field.type === 'pin' && (
						<PinInput
							{...field}
							key={name}
							value={values[name] === undefined ? '' : values[name]}
							error={!!errors[name]}
							onChange={(value) => onInputChange({ name, value })}
							additionalClassName={className}
						/>
					)}
					{field.type === 'date' && (
						<DateInput
							{...field}
							onChange={(value) => onInputChange({ name, value })}
						/>
					)}

					{field.type === 'image' && (
						<ImageInput
							{...field}
							key={name}
							error={!!errors[name]}
							onChange={(value) => onInputChange({ name, value })}
							additionalClassName={className}
						/>
					)}
					{(field.type === 'text' || !field.type) && (
						<TextInput
							key={name}
							className={`bg-gray-200 ${className || ''}`}
							error={!!errors[name]}
							value={values[name] === undefined ? '' : values[name]}
							onChangeText={(value) => onInputChange({ name, value })}
							mode={mode || 'outlined'}
							ref={test}
							onSubmitEditing={() => {
								test.current.focus();
							}}
							{...field}
						/>
					)}
					<HelperText type="error" visible={!!errors[name]}>
						{errors[name]}
					</HelperText>
				</Fragment>
			))}
		</>
	);
}
