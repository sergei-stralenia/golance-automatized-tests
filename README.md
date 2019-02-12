# goLance automated tests

> Automation testing of goLance new-ui landing and core website using Nightwatch.js and ChromeDriver

All tests are placed under `/tests` directory in separate files for each scenario

## Requirements
 - [Node.js v9.2.0+](https://nodejs.org/en/)
 - NPM v5.5.0+
 - [Google Chrome Web Browser v71+](https://www.google.com/chrome/)

## Build Setup

``` bash
# install dependencies
$ npm install

# run tests
$ npm test
```

## Scenarios

1. How It Works Pages Testing
  1. Зайти на лендинг
  2. Открыть страницу How it works
  3. Проверить, что появляются правильные блоки и текст для фрилансера и работодателя
2. Successful/Failed Login Testing
  1. Зайти на лендинг
  2. Открыть страницу логина
  3. Вводить правильные/неправильные данные, сделать соответствующие проверки
