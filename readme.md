# Sedona components

Общие компоненты для проектов компании «Конст Лаб».

## Быстрый старт

### Установка

```
npm i sedona-components
```

### Подключение

```
// main.js
import "sedona-components/src";

// main.less
@import "~sedona-components/src/index";
```

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

## Компоненты

### Общие

* [common](https://github.com/constlab/sedona-components/tree/master/src/common) ([пример](http://components.constlab.ru/common.html))
* [wysiwyg](https://github.com/constlab/sedona-components/tree/master/src/wysiwyg) ([пример](http://components.constlab.ru/wysiwyg.html))

### Лейаут и сетка

* [grid](https://github.com/constlab/sedona-components/tree/master/src/grid) ([пример](http://components.constlab.ru/grid.html))
* [scene](https://github.com/constlab/sedona-components/tree/master/src/scene) ([пример](http://components.constlab.ru/scene.html))

### Модули

* card
* [feature](https://github.com/constlab/sedona-components/tree/master/src/feature) ([пример](http://components.constlab.ru/feature.html))
* form
  * file
* icon
* [table](https://github.com/constlab/sedona-components/tree/master/src/table) ([пример](http://components.constlab.ru/table.html))

### Шаблоны

* 404 страница ([пример](http://components.constlab.ru/404.html))
