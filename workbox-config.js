module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{png,php,json}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};