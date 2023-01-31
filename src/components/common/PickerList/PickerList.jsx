import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { RadioButton, Searchbar } from 'react-native-paper';

import PickerListItem from './PickerListItem';

import { COLORS, SEARCH_BAR_COLORS } from '../../../constants/theme/colors';

export default function PickerList({ value, onValueChange, options = [] }) {
	const [searchQuery, setSearchQuery] = useState('');
	const [filteredDataSource, setFilteredDataSource] = useState([]);

	useEffect(() => {
		setFilteredDataSource(options);
	}, [options]);

	const onChangeSearch = (query) => {
		const upperCasedQuery = query?.toUpperCase();
		const allOptions = [...options];
		const filteredOptions = query
			? allOptions.filter(({ title }) => title?.toUpperCase()?.includes(upperCasedQuery))
			: allOptions;
		setFilteredDataSource(filteredOptions);
		setSearchQuery(query);
	};

	return (
		<>
			<Searchbar
				className="rounded-2xl"
				style={{ backgroundColor: SEARCH_BAR_COLORS.bar }}
				placeholder="Buscar"
				onChangeText={onChangeSearch}
				value={searchQuery}
				clearIcon
				placeholderTextColor={COLORS.medium}
			/>

			<RadioButton.Group onValueChange={onValueChange} value={value}>
				<FlatList
					data={filteredDataSource}
					keyExtractor={(item) => item.value}
					renderItem={({ item }) => <PickerListItem {...item} />}
				/>
			</RadioButton.Group>
		</>
	);
}
