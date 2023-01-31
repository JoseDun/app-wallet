import React from 'react';
import { MD3LightTheme, Provider as PaperProvider } from 'react-native-paper';

import { COLORS } from '../../constants/theme/colors';

const theme = {
	...MD3LightTheme,
	roundness: 2,
	version: 3,
	colors: {
		...MD3LightTheme.colors,
		...COLORS,
	},
};

export default function ThemeProvider({ children }) {
	return <PaperProvider theme={theme}>{children}</PaperProvider>;
}
