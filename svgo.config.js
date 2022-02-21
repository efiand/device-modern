const params = {
	floatPrecision: 2
};

export default {
	plugins: [
		{
			active: true,
			name: 'removeViewBox'
		},
		{
			active: true,
			name: 'removeTitle'
		},
		{
			name: 'cleanupNumericValues',
			params
		},
		{
			name: 'convertPathData',
			params
		},
		{
			name: 'convertTransform',
			params
		},
		{
			name: 'cleanupListOfValues',
			params
		}
	]
};
