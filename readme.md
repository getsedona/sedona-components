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

### Общие

* [common](https://github.com/getsedona/sedona-components/tree/master/src/common) ([пример](https://getsedona.github.io/sedona-components/common.html))
* [wysiwyg](https://github.com/getsedona/sedona-components/tree/master/src/wysiwyg) ([пример](https://getsedona.github.io/sedona-components/wysiwyg.html))

### Лейаут

* [scene](https://github.com/getsedona/sedona-components/tree/master/src/scene) ([пример](https://getsedona.github.io/sedona-components/scene.html))

### Модульная сетка

Вкладывается в лейаут.

* [grid](https://github.com/getsedona/sedona-components/tree/master/src/grid) ([пример](https://getsedona.github.io/sedona-components/grid.html))

### Модули

Вкладываются в модульную сетку или в другие модули.

* card
* [feature](https://github.com/getsedona/sedona-components/tree/master/src/feature) ([пример](https://getsedona.github.io/sedona-components/feature.html))
* form
* icon
* [table](https://github.com/getsedona/sedona-components/tree/master/src/table) ([пример](https://getsedona.github.io/sedona-components/table.html))

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
