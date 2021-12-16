const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				'spanish-white': '#e8e0bd',
				'paradiso': {
					100: '#D6E4E5',
					200: '#C1D7D8',
					300: '#ACC9CB',
					400: '#98BCBF',
					500: '#83AEB2',
					600: '#6EA1A5',
					700: '#599398',
					800: '#45868B',
					900: '#30787E'													
				  },
			}
		}
	},

	plugins: []
};

module.exports = config;
