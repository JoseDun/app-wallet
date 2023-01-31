import React from 'react';

import {
	MaterialCommunityIcons,
	Ionicons,
	AntDesign,
	FontAwesome,
	MaterialIcons,
} from '@expo/vector-icons';

export function AppIcon({ library = '', ...props }) {
	const LIBRARIES = {
		MaterialCommunity: MaterialCommunityIcons,
		Ionic: Ionicons,
		AntDesign,
		FontAwesome,
		MaterialIcons,
	};
	const IconComponent = LIBRARIES[library] || MaterialCommunityIcons;

	return <IconComponent {...props} />;
}
