
deploy:
	ng build --prod --base-href /best/ --deploy-url /best/ --output-path docs
	cp docs/index.html docs/404.html
