# Набор компонентов для [«Седоны»](http://sedona.constlab.ru)

## Быстрый старт

### Установка

```
npm i sedona-components
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

### Основы

* [common](https://github.com/getsedona/sedona-components/tree/master/src/common) ([пример](https://getsedona.github.io/sedona-components/common.html))

### Лейауты

* [scene](https://github.com/getsedona/sedona-components/tree/master/src/scene) ([пример](https://getsedona.github.io/sedona-components/scene.html))

### Модульные сетки

* [grid](https://github.com/getsedona/sedona-components/tree/master/src/grid) ([пример](https://getsedona.github.io/sedona-components/grid.html))
* [group](https://github.com/getsedona/sedona-components/tree/master/src/group) ([пример](https://getsedona.github.io/sedona-components/group.html))

### Модули

* card
* carousel
* collapse
* form
* [icon](https://github.com/getsedona/sedona-components/tree/master/src/icon) ([пример](https://getsedona.github.io/sedona-components/icon.html))
* notify
* [table](https://github.com/getsedona/sedona-components/tree/master/src/table) ([пример](https://getsedona.github.io/sedona-components/table.html))

### Утилиты

* [wysiwyg](https://github.com/getsedona/sedona-components/tree/master/src/wysiwyg) ([пример](https://getsedona.github.io/sedona-components/wysiwyg.html))

### Шаблоны

* 404 страница ([пример](https://getsedona.github.io/sedona-components/404.html))

## Принципы

### Разметка тела документа

```html
<div class="page">
  <header class="header">
    Шапка
  </header>

  <main class="main">
    Контент
  </main>

  <aside class="aside">
    Сайдбар
  </aside>

  <footer class="footer">
    Подвал
  </footer>
</div>
```
