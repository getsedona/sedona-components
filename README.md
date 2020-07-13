# Набор компонентов для [«Седоны»](http://sedona.constlab.ru)

[![NPM](https://img.shields.io/npm/v/sedona-components.svg?style=flat)](https://www.npmjs.com/package/sedona-components) [![Downloads](https://img.shields.io/npm/dt/sedona-components.svg?style=flat)](https://www.npmjs.com/package/sedona-components) [![License](https://img.shields.io/github/license/getsedona/sedona-components.svg?style=flat)](https://github.com/getsedona/sedona-components/blob/master/LICENSE.md)

## Быстрый старт

### Установка

```
npm install sedona-components --save-dev
```

### Подключение

```js
// index.js
import "sedona-components/src";
```

```less
// index.less
@import "~sedona-components/src/index";
```

## Компоненты

[Примеры работы и внешнего вида](https://getsedona.github.io/sedona-components/)

### Основа

* [common](https://github.com/getsedona/sedona-components/tree/master/src/common)
* [base](https://github.com/getsedona/sedona-components/tree/master/src/base) ([пример](https://getsedona.github.io/sedona-components/base.html))

### Лейаут

* [header](https://github.com/getsedona/sedona-components/tree/master/src/header) ([пример](https://getsedona.github.io/sedona-components/header.html))
* [scene](https://github.com/getsedona/sedona-components/tree/master/src/scene) ([пример](https://getsedona.github.io/sedona-components/scene.html))

### Модульная сетка

* [grid](https://github.com/getsedona/sedona-components/tree/master/src/grid) ([пример](https://getsedona.github.io/sedona-components/grid.html))

### Сущности

* [card](https://github.com/getsedona/sedona-components/tree/master/src/card) ([пример](https://getsedona.github.io/sedona-components/card.html))
* [feature](https://github.com/getsedona/sedona-components/tree/master/src/feature) ([пример](https://getsedona.github.io/sedona-components/feature.html))
* [group](https://github.com/getsedona/sedona-components/tree/master/src/group) ([пример](https://getsedona.github.io/sedona-components/group.html))
* [icon](https://github.com/getsedona/sedona-components/tree/master/src/icon) ([пример](https://getsedona.github.io/sedona-components/icon.html))

### Модули

* [form](https://github.com/getsedona/sedona-components/tree/master/src/form) ([пример](https://getsedona.github.io/sedona-components/form.html))
* [notify](https://github.com/getsedona/sedona-components/tree/master/src/notify) ([пример](https://getsedona.github.io/sedona-components/notify.html))
* [table](https://github.com/getsedona/sedona-components/tree/master/src/table) ([пример](https://getsedona.github.io/sedona-components/table.html))

### Утилиты

* [collapse](https://github.com/getsedona/sedona-components/tree/master/src/collapse) ([пример](https://getsedona.github.io/sedona-components/collapse.html))
* [marginalia](https://github.com/getsedona/sedona-components/tree/master/src/marginalia) ([пример](https://getsedona.github.io/sedona-components/marginalia.html))
* [wysiwyg](https://github.com/getsedona/sedona-components/tree/master/src/wysiwyg) ([пример](https://getsedona.github.io/sedona-components/wysiwyg.html))

### Шаблоны

* 404 страница ([пример](https://getsedona.github.io/sedona-components/404.html))

## Принципы

### Разметка тела документа

```html
<!doctype html>

<html lang="ru">
  <head>
    <meta charset="utf-8">
    <title>Заголовок страницы</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, shrink-to-fit=no, viewport-fit=cover">
    <meta name="format-detection" content="telephone=no">
    <meta name="format-detection" content="address=no">
  </head>

  <body>
    <div class="page">
      <header class="header">
        <!-- Шапка -->
      </header>

      <main class="main">
        <!-- Контент -->
      </main>

      <footer class="footer">
        <!-- Подвал -->
      </footer>
    </div>
  </body>
</html>
```

### Логика

* Каждый компонент должен ссылаться на общий компонент `common` и быть независимым от других.
* Все модули могут вкладываться друг в друга и каждый должен лежать в ячейке модульной сетки. В свою очередь модульная сетка должна вкладываться в лейаут.
