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

* header
* [scene](https://github.com/getsedona/sedona-components/tree/master/src/scene) ([пример](https://getsedona.github.io/sedona-components/scene.html))

### Модульные сетки

* [grid](https://github.com/getsedona/sedona-components/tree/master/src/grid) ([пример](https://getsedona.github.io/sedona-components/grid.html))
* [group](https://github.com/getsedona/sedona-components/tree/master/src/group) ([пример](https://getsedona.github.io/sedona-components/group.html))

### Модули

* card
* carousel
* collapse
* [feature](https://github.com/getsedona/sedona-components/tree/master/src/feature) ([пример](https://getsedona.github.io/sedona-components/feature.html))
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

```less
@media (min-width: @breakpoint-md) {
  :root {
    --font-size-h1: ~"calc(@{font-size-base} * 2.25)"; // 36px
    --font-size-h2: var(--font-size-h1); // 36px

    --line-height-h1: ~"calc(@{font-size-base} * 2.75)"; // 44px
    --line-height-h2: var(--line-height-h1); // 44px

    --gap-element-base: ~"calc(@{indent-base} * 3)"; // 48px
    --gap-element-half: ~"calc(var(--gap-element-base) / 2)"; // 24px

    --gap-block-base: ~"calc(@{indent-base} * 5)"; // 80px
    --gap-block-half: ~"calc(var(--gap-block-base) / 2)"; // 40px
  }
}
```

### Философия

* Все компоненты должны ссылаться на общий компонент common и быть независимы друг от друга.
* Все модули могут вкладываться друг в друга и каждый должен лежать в ячейке модульной сетки. В свою очередь модульная сетка должна вкладываться в лейаут.
