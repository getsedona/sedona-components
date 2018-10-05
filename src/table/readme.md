# Таблица

Инлайновый тип. [Пример](http://sedona.stage.constlab.ru/blocks/table/).

## Особенности

* Располагается только внутри блочного типа
* Растягивается на всю ширину блока
* Если содержимое не помещается — появляется горизонтальная прокрутка
* По-умолчанию имеет тон всего сайта. Может принудительно иметь светлый и темный тон

## Настройка

```less
// Base

@table-head-font-size: @font-size-smaller;
@table-head-line-height: @line-height-smaller;
@table-head-font-weight: normal;
@table-head-font-family: @font-family-primary;
@table-head-color: @base-secondary;

@table-divider: @base-divider;

@table-tr-hover-background-color: @table-divider;

// Darken

@table-darken-head-color: @light-secondary;

@table-darken-divider: @light-divider;

@table-darken-tr-hover-background-color: @table-darken-divider;

// Lighten

@table-lighten-head-color: @dark-secondary;

@table-lighten-divider: @dark-divider;

@table-lighten-tr-hover-background-color: @table-lighten-divider;
```

## Разметка

```html
<div class="table">
  <div class="table__wrap">
    <table>
      <thead>
        <tr>
          <th>…</th>
          …
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>…</td>
          …
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td>…</td>
          …
        </tr>
      </tfoot>
    </table>
  </div>
</div>
```

## Модификаторы

### `table`

* `table--darken` — делает таблицу в темных тонах
* `table--lighten` — делает таблицу в светлых тонах
* `table--responsive` — перестраивает таблицу на маленьких экранах

## Дополнительно

* Сортировка: [tablesort](https://github.com/tristen/tablesort)
