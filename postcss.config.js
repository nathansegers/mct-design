module.exports = {
	plugins: {
		'd:\a\1\s\node_modules\@fullhuman\postcss-purgecss': {
			content: ['themes/mct/layouts/**/*.html'],
			whitelist: [
				'c-module--analysis',
				'c-module--code',
				'c-module--connect',
				'c-module--create',
				'c-module--integrate',
				'c-module--link',
				'h1',
				'h2',
				'h3',
				'h4',
				'p',
				'ul',
				'li',
			],
		},
		autoprefixer: {},
		cssnano: { preset: 'default' },
	},
};
