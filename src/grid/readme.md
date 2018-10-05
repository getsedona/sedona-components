# Сетка

Инструмент организации визуального пространства.

Содержательный тип. [Пример](http://sedona.stage.constlab.ru/blocks/grid/).

## Особенности

* Располагается только внутри `.scene`
* Может вкладываться во внутрь других блочных типов
* Может идти только на одном уровне, то есть друг за другом. Вкладывать друг в друга нельзя
* По-умолчанию имеет максимальную ширину — `@grid-max-width`
* По-умолчанию имеет 12-колоночную сетку. Изменяется в переменной `@grid-columns`
* Колонка по-умолчанию занимает 100% ширины (изменяется через [модификаторы](#Ширины-для-разных-экранов))

## Настройка

```less
@grid-max-width: @grid-breakpoints-xl;
```

## Разметка

```html
<div class="grid">
  <div class="grid__col">
    …
  
    <!-- Дополнительно -->
    <div class="grid__content">
      …
    </div>
    <!-- / -->
  </div>
  
  <div class="grid__col">
    …
  </div>
  
  …
</div>
```

## Модификаторы

### `grid`

* `grid--diff` — добавляет бóльший отступ между колонками по вертикали

### `grid__col`

* `grid__col--no-padding` — убирает отступы по краям

#### Ширины для разных экранов

* `grid__col--1`, `grid__col--2`, `grid__col--3`, …
* `grid__col--sm-1`, `grid__col--sm-2`, `grid__col--sm-3`, …
* `grid__col--md-1`, `grid__col--md-2`, `grid__col--md-3`, …
* `grid__col--lg-1`, `grid__col--lg-2`, `grid__col--lg-3`, …
* `grid__col--xl-1`, `grid__col--xl-2`, `grid__col--xl-3`, …

#### Отступ слева кратный размеру колонки

* `grid__col--offset-0`, `grid__col--offset-1`, `grid__col--offset-2`, …
* `grid__col--sm-offset-0`, `grid__col--sm-offset-1`, `grid__col--sm-offset-2`, …
* `grid__col--md-offset-0`, `grid__col--md-offset-1`, `grid__col--md-offset-2`, …
* `grid__col--lg-offset-0`, `grid__col--lg-offset-1`, `grid__col--lg-offset-2`, …
* `grid__col--xl-offset-0`, `grid__col--xl-offset-1`, `grid__col--xl-offset-2`, …
