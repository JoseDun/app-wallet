import React from 'react';
import { FlatList } from 'react-native';

import ServiceItem from '../ServiceItem';

import { items } from '../../../mock/services-items-list-mock';

export function ServiceItemList() {
	return <FlatList data={items} renderItem={({ item }) => <ServiceItem item={item} />} />;
}
