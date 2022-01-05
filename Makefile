all: build compose

build:
	docker build ./node-app -t nodeapp 

compose:
	docker-compose down && docker-compose up --build 
