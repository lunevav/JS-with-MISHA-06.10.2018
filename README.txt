Для установки:
1. Скачайте установите node.js
2. В командной строке - npm install
3. В командной строке - npm start

!!!! ЕСли появляется такая ошибка


$ npm start

> masa@1.0.0 start C:\Users\Alexander\reps\gulp-test
> gulp

assert.js:42
  throw new errors.AssertionError({
  ^

AssertionError [ERR_ASSERTION]: Task function must be specified
    at Gulp.set [as _setTask] (C:\Users\Alexander\reps\gulp-test\node_modules\undertaker\lib\set-task.js:10:3)
    at Gulp.task (C:\Users\Alexander\reps\gulp-test\node_modules\undertaker\lib\task.js:13:8)
    at Object.<anonymous> (C:\Users\Alexander\reps\gulp-test\gulpfile.js:28:8)
    at Module._compile (module.js:653:30)
    at Object.Module._extensions..js (module.js:664:10)
    at Module.load (module.js:566:32)
    at tryModuleLoad (module.js:506:12)
    at Function.Module._load (module.js:498:3)
    at Module.require (module.js:597:17)
    at require (internal/module.js:11:18)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! masa@1.0.0 start: `gulp`
npm ERR! Exit status 1
npm ERR!
npm ERR! Failed at the masa@1.0.0 start script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     C:\Users\Alexander\AppData\Roaming\npm-cache\_logs\2018-09-28T14_08_42_372Z-debug.log


то скорее всего у вас отличается докальная версия gulp.
Проверить можно командой gulp -v.
Если локальная верси 4.0.0, то делаем следующее:

npm uninstall gulp
npm install gulp@3.9.1

Должно помочь.

