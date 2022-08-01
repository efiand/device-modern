# Device

Учебный проект Device от HTML Academy.

[Опубликованная версия](https://efiand.github.io/device)


## Используемые инструменты

* gulp - объединение задач и слежение за изменением файлов
* posthtml + nunjucks - сборка из компонентов и тестирование HTML
* postcss - сборка из компонентов и тестирование CSS
* webpack + eslint - сборка из компонентов и тестирование JS
* svgo, pngquant, mozjpeg, gulp-svg-sprite - оптимизация графики
* [pineglade-pp](https://www.npmjs.com/package/pineglade-pp) - оптимизация достижения pixel perfect
* [pineglade-w3c](https://www.npmjs.com/package/pineglade-w3c) - онлайн-валидатор W3C с резервным оффлайн-валидатором
* [pineglade-modal](https://www.npmjs.com/package/pineglade-modal) - библиотека для работы с модальными окнами


## Особенности реализации

* Компонентный подход. Для организации разметки и стилей использована методология БЭМ. Компоненты переиспользуются с разным набором данных, которые можно отдавать как в явном виде (объект, JSON) - так и внедрив API для динамического получения данных. Каждый экземпляр БЭМ-блока при необходимости оживления связан с экземплятом соотв. JS-класса.
* Адаптивная вёрстка "mobile first" - дефолтной является мобильная версия, на которую нет макета, но она представляет собой в основном просто одноколоночный поток данных с чуть меньшими расстояниями и размерами текстов. Медиазапросы строятся от меньшего к большему - таким образом сделана планшетная версия (только часть стилей добавляется для максимального десктопного разрешения).
* Поддержка webp- и retina-изображений через подключение одного универсального компонента.


## Структура

* `public` - рабочий каталог для веб-сервера. Здесь лежат неизменяемые файлы, сюда пересобирается код из исходников. Пересобираемые файлы не коммитятся.
* `source` - каталог исходников.
* `place` - сюда кидаются одиночные изображения или иконки (векторные - для спрайта, растровые - для css). Содержимое не коммитится. Сборка при старте и в режиме разработки следит за наполнением этого каталога, оптимизирует появившиеся файлы и перемещает иконки в исходники, а изображения - в `public`.


## Установка

* Выполните команду `npm i`


## Команды

* `npm run build` - сборка стилей, скриптов, спрайта. Оптимизация изображений
* `npm run dev` - сборка и запуск в режиме раработки
* `npm test` - запуск линтеров


## Pixelperfect

Доступен в режиме разработки по нажатию клавиши P. Используется плагин [pineglade-pp](https://efiand.github.io/pineglade-pp/).
