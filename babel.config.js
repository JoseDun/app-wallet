module.exports = function (api) {
	api.cache(true);
	return {
		presets: ['babel-preset-expo'],
		plugins: [
			[
				'module-resolver',
				{
					root: ['.'],
					extensions: ['.tsx', '.ts', '.js', '.json'],
					alias: {
						'@components': './src/components',
						'@screens': './src/screens',
						'@constants': './src/constants',
					},
				},
			],
			[
				'module:react-native-dotenv',
				{
					moduleName: '@env',
					path: '.env',
				},
			],
			'react-native-reanimated/plugin',
			'tailwindcss-react-native/babel',
			'react-native-paper/babel',
		],
	};
};
