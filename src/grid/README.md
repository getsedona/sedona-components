# grid

Служит для создания основной сеточной структуры.

Содержит динамическое количество колонок на каждой контрольной точке:

|         | Phone | Phone ↔ | Tablet | Tablet ↔ | Desktop |
| ------- | ----- | ------- | ------ | -------- | ------- |
| Колонки | 2     | 4       | 6      | 8        | 12      |
| Точка   | 320   | 576     | 768    | 992      | 1200    |
| Метка   | —     | sm      | md     | lg       | xl      |

[Разметка](https://github.com/getsedona/sedona-components/blob/master/src/grid/examples.html) · [Пример](https://getsedona.github.io/sedona-components/grid.html)

## Подключение

```less
// index.less
@import "~sedona-components/src/grid/index";
```

## Модификаторы-шаблоны

### `grid`

* `grid--sidar` — делает колонку чуть больше половины (2/2 → 4/4 → 6/6 → 6/8 → 8/12)
* `grid--navahopi` — делает колонку чуть меньше всей ширины (2/2 → 4/4 → 6/6 → 8/8 → 10/12)
* `grid--jordan` — делает две колонки (2/2 → 4/4 → 6/6 → 4/8 → 6/12)
* `grid--meskit` — делает три колонки (2/2 → 4/4 → 3/6 → 4/8 → 4/12)
* `grid--amara` — делает четыре колонки (2/2 → 2/4 → 3/6 → 33% → 3/12)
