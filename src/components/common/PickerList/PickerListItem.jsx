import React from 'react';
import { Text, View } from 'react-native';
import { RadioButton } from 'react-native-paper';

import Avatar from '../Avatar';

import ShadowStyles from '../../../styles/ShadowStyles';

export default function PickerListItem({ src, title, value }) {
	return (
		<View
			style={ShadowStyles.Shadow}
			className={`h-[70px] w-full rounded-2xl flex-row justify-between items-center my-[10px] bg-light`}
		>
			<View className="flex-row items-center justify-start pl-14">
				<Avatar src={src} alt={title} />
				<View className="pl-1">
					<Text className="text-sm font-normal uppercase pl-1 text-primaryDark">
						{title}
					</Text>
				</View>
			</View>
			<RadioButton.Item value={value} />
		</View>
	);
}
