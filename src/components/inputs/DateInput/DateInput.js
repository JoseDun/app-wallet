import { useState, useEffect } from 'react';

import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { TextInput } from 'react-native-paper';
import { COLORS } from '../../../constants/theme/colors';

export function DateInput({ onChange, placeholder }) {
	const [date, setDate] = useState('');
	const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

	const showDatePicker = () => {
		setDatePickerVisibility(true);
	};

	const hideDatePicker = () => {
		setDatePickerVisibility(false);
	};

	const handleConfirm = (date) => {
		setDate(date);
		hideDatePicker();
	};

	const getDate = () => {
		let tempDate = date.toString().split(' ');
		const day = tempDate[2];
		const month = tempDate[1];
		const year = tempDate[3];
		return date !== '' ? `${day}-${month}-${year}` : '';
	};

	useEffect(() => {
		onChange(date);
	}, [date]);

	return (
		<>
			<TextInput
				value={getDate()}
				placeholder={placeholder}
				className="w-full bg-light mb-1 border border-double"
				onPressIn={showDatePicker}
				showSoftInputOnFocus={false}
			/>

			<DateTimePickerModal
				isVisible={isDatePickerVisible}
				mode="date"
				onConfirm={handleConfirm}
				onCancel={hideDatePicker}
				style={{
					height: 500,
				}}
				pickerContainerStyleIOS={{
					backgroundColor: COLORS.medium,
				}}
			/>
		</>
	);
}
