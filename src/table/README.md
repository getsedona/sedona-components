# table

Грамотно и деликатно оформляет табличные данные.

[Разметка](https://github.com/getsedona/sedona-components/blob/master/src/table/examples.html) · [Пример](https://getsedona.github.io/sedona-components/table.html)

## Подключение

```js
// main.js
import { table } from "sedona-components/src/table";

table();
```

```less
// main.less
@import "~sedona-components/src/table/index";
```

## Модификаторы

### `table`

* `table--responsive` – перестраивает таблицу на маленьких экранах (у `tbody>td` дополнительно должен присутствовать параметр `data-title` с названием колонки)

## Дополнительно

* Сортировка: [tablesort](https://github.com/tristen/tablesort)
