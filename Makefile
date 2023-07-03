install: 
	npm ci
lint:
	npx eslint .
publish:
	npm publish --dry-run
page-loader:
	node bin/page-loader.js