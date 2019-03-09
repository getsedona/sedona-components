[![NPM](https://img.shields.io/npm/v/sedona-components.svg?style=flat)](https://www.npmjs.com/package/sedona-components) [![Downloads](https://img.shields.io/npm/dt/sedona-components.svg?style=flat)](https://www.npmjs.com/package/sedona-components) [![License](https://img.shields.io/github/license/getsedona/sedona-components.svg?style=flat)](https://github.com/getsedona/sedona-components/blob/master/LICENSE.md)

# Набор компонентов для [«Седоны»](http://sedona.constlab.ru)

## Быстрый старт

### Установка

```
npm install sedona-components --save-dev
```

### Подключение

```js
// main.js
import "sedona-components/src";
```

```less
// main.less
@import "~sedona-components/src/index";
```

## Компоненты

[Примеры работы и внешнего вида](https://getsedona.github.io/sedona-components/)

### Основы

* [common](https://github.com/getsedona/sedona-components/tree/master/src/common)
* [base](https://github.com/getsedona/sedona-components/tree/master/src/base) ([пример](https://getsedona.github.io/sedona-components/base.html))

### Лейауты

* header
* [scene](https://github.com/getsedona/sedona-components/tree/master/src/scene) ([пример](https://getsedona.github.io/sedona-components/scene.html))

### Модульные сетки

* [grid](https://github.com/getsedona/sedona-components/tree/master/src/grid) ([пример](https://getsedona.github.io/sedona-components/grid.html))
* [group](https://github.com/getsedona/sedona-components/tree/master/src/group) ([пример](https://getsedona.github.io/sedona-components/group.html))

### Модули

* [card](https://github.com/getsedona/sedona-components/tree/master/src/card) ([пример](https://getsedona.github.io/sedona-components/card.html))
* carousel
* collapse
* [feature](https://github.com/getsedona/sedona-components/tree/master/src/feature) ([пример](https://getsedona.github.io/sedona-components/feature.html))
* [form](https://github.com/getsedona/sedona-components/tree/master/src/form) ([пример](https://getsedona.github.io/sedona-components/form.html))
* [icon](https://github.com/getsedona/sedona-components/tree/master/src/icon) ([пример](https://getsedona.github.io/sedona-components/icon.html))
* modal
* notify
* [table](https://github.com/getsedona/sedona-components/tree/master/src/table) ([пример](https://getsedona.github.io/sedona-components/table.html))

### Утилиты

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

      <aside class="aside">
        <!-- Боковая панель -->
      </aside>

      <footer class="footer">
        <!-- Подвал -->
      </footer>
    </div>
  </body>
</html>
```

### Пример преобразования дефолтных настроек

```less
// mixins.less
#common() {
  .root() {
    @media (min-width: @breakpoint-md) {
      --font-size-h1: 2.25rem; // 36px
      --font-size-h2: 2.25rem; // 36px

      --line-height-h1: 2.75rem; // 44px
      --line-height-h2: 2.75rem; // 44px

      --gap-element-base: 3rem; // 48px
      --gap-element-half: 1.5rem; // 24px

      --gap-block-base: 5rem; // 80px
      --gap-block-half: 2.5rem; // 40px
    }
  }
}
```

### Логика

* Все компоненты должны ссылаться на общий компонент common и быть независимы друг от друга.
* Все модули могут вкладываться друг в друга и каждый должен лежать в ячейке модульной сетки. В свою очередь модульная сетка должна вкладываться в лейаут.
* Стили CSS описываются в миксинах, а те в свою очередь подключаются к аналогичным классам.
