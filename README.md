# HR app

Deployed: [hr.2enter.ru](http://hr.2enter.ru)


## How to run

`npm i && npm start`

Or using docker-compose (change port in Dockerfile):

`cd ./deploy && docker-compose start && docker-compose up -d`

## Testing

Require global karma.js and protractor installation

Run `NODE_ENV=test npm start`

When `karma start --single-run` for unit tests
`protractor` for e2e tests

## Author

[Yaroslav Aksenov](https://github.com/flareair)

## License

[MIT](LICENSE)