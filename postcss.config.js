const purgecss = require('@fullhuman/postcss-purgecss'),
	autoprefixer = require('autoprefixer'),
	cssnano = require('cssnano');

module.exports = {
	plugins: [
		purgecss({
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
		}),
		autoprefixer({}),
		cssnano({ preset: 'default' }),
	],
};
