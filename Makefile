install: 
	npm ci
lint:
	npx eslint .
publish:
	npm publish --dry-run
pageLoader:
	node bin/pageLoader.js