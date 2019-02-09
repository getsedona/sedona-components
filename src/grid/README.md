# grid

Служит для создания основной сеточной структуры.

Имеет динамическое количество колонок на каждой контрольной точке:

|         | Phone | Phone ↔ | Pad | Pad ↔ | Desktop |
| ------- | ----- | ------- | --- | ----- | ------- |
| Колонки | 2     | 4       | 6   | 8     | 12      |
| Точка   | 320   | 576     | 768 | 992   | 1200    |
| Метка   | —     | sm      | md  | lg    | xl      |

[Пример](https://getsedona.github.io/sedona-components/grid.html) • [Разметка](https://github.com/getsedona/sedona-components/tree/master/src/grid/examples.html)

## Подключение

```less
// main.less
@import "~sedona-components/src/grid/index";
```

## Модификаторы-шаблоны

### `grid__list`

* `grid__list--sidar` — делает колонку чуть больше половины (2/2 → 4/4 → 6/6 → 6/8 → 8/12)
* `grid__list--navahopi` — делает колонку чуть меньше всей ширины (2/2 → 4/4 → 6/6 → 8/8 → 10/12)
* `grid__list--jordan` — делает две колонки (2/2 → 4/4 → 6/6 → 4/8 → 6/12)
* `grid__list--meskit` — делает три колонки (2/2 → 4/4 → 3/6 → 4/8 → 4/12)
* `grid__list--amara` — делает четыре колонки (2/2 → 4/4 → 3/6 → 33% → 3/12)
