install:
	@echo "Установка..."
	@npm ci
	@echo "Завершено!"
brain-games:
	node bin/brain-games.js
publish:
	@npm publish --dry-run