<h1>Сборка GULP для Веб-разработки на различных CMS от Seelentov</h1>

Данная сборка - переосмысление <a href='https://github.com/seelentov/seelentov-gulp-webdev/'>"Сборка GULP для верстки от Seelentov"</a> для работы с php компонентами.

- Отдельные модули php, scss и js
- Сжатие изображений
- Сжатие css и js кода
- Mocha, chai тесты
- Выгрузка по FTP
- ESLint


<h1>Команды для работы со сборкой</h1>

! npm i - инициация сборки на вашем ПК !

npm test - запуск тестов

npm run dev - запуск в режиме разработки
npm run build - запуск создания билда
npm run zip - выгрузка билда в архив
npm run deploy - выгрузка билда по FTP

./node_modules/.bin/eslint --init - запуск конфигурации ESLint

ИНИЦИАЛИЗАЦИЯ:
Внимание! Данная сборка предназначена для работы с веб через сервер (н-р: Open Server)

В файле /gulp/tasks/server.js указать ваш домен:

`app.plugins.browsersync.init({
    proxy: 'yoursite.com', // Замените на адрес и порт вашего сервера Open Server
    notify: false,
    port: 3000,
  });` 

Установить модули сборки - `npm i`

И запустить процесс разработки через `npm run dev`

Откроется сайт на localhost, который будет обновляться при изменениях в проекте. Он будет дублироваться на установленный вами домен.