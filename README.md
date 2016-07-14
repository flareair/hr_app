# HR app

Deployed: [hr.2enter.ru](http://hr.2enter.ru)

## Comments (rus)

Все требования из задания выполнены.

Проблемы с производительностью победил с помощью `track by`, ограничения фильтруемых полей и ограничения кол-ва отображаемых элементов.

Для вида с группировкой по департаментам пришлось использовать сторонний фильтр `groupBy`, который я форкнул и модифицировал, для более быстрого кеширования результатов.

Тесты безусловно можно улучшить, особенно e2e, остановило то, что объем работы с ними очень большой.

Благодаря использованию bootstrap сервис неплохо отображается на мобильных.

## Requirements

Tested on Ubuntu 14.04 LTS with nodejs 6.2.2

Browsers: Chrome, firefox, mobile Chrome

## How to run

`npm i && npm start`

Or using docker-compose (change port in Dockerfile):

`cd ./deploy && docker-compose start && docker-compose up -d`


## Regenerate mock data

Run `node ./server/generateJson.js`

## Testing

Require global karma.js and protractor installation

Run `NODE_ENV=test npm start`

When `karma start --single-run` for unit tests
`protractor` for e2e tests

## Author

[Yaroslav Aksenov](https://github.com/flareair)

## License

[MIT](LICENSE)