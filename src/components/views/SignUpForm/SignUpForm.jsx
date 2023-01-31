import React, { Fragment, useState } from 'react';

import SignUpFormBasic from './SignUpFormBasic';
import SignUpFormDocuments from './SignUpFormDocuments';
import SignUpFormPhone from './SignUpFormPhone';
import SignUpFormPinCode from './SignUpFormPinCode';

export function SignUpForm({ onFinish }) {
	const formStates = [
		{
			name: 'phone',
			Component: SignUpFormPhone,
		},
		{
			name: 'basic',
			Component: SignUpFormBasic,
		},
		{
			name: 'documents',
			Component: SignUpFormDocuments,
		},
		{
			name: 'password',
			Component: SignUpFormPinCode,
		},
	];

	const [formState, setFormState] = useState(formStates[0].name);
	const [data, setData] = useState({});

	const handleNext = (name, newData) => {
		const body = { ...data, [name]: newData };
		setData(body);

		const stateIndex = formStates.findIndex((state) => state.name === name);
		const nextIndex = stateIndex + 1;

		if (nextIndex > formStates.length - 1) return onFinish(body);

		setFormState(formStates[nextIndex].name);
	};

	const handleCancel = (name) => {
		const stateIndex = formStates.findIndex((state) => state.name === name);
		const prevIndex = stateIndex - 1;

		if (prevIndex < 0) return onFinish();
		setFormState(formStates[prevIndex].name);
	};

	return (
		<>
			{formStates
				.filter(({ name }) => name === formState)
				.map(({ name, Component }) => (
					<Fragment key={name}>
						<Component
							onNext={(data) => handleNext(name, data)}
							onCancel={() => handleCancel(name)}
							dataToForm={data}
						/>
					</Fragment>
				))}
		</>
	);
}
