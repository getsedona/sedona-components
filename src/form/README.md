# form

Содержит оформление полей ввода и взаимосвязь между ними.

[Разметка](https://github.com/getsedona/sedona-components/blob/master/src/form/examples.html) · [Пример](https://getsedona.github.io/sedona-components/form.html)

## Подключение

```js
// index.js
import { form } from "sedona-components/src/form";

form();
```

```less
// index.less
@import "~sedona-components/src/form/index";
```

## Модификаторы

### `form`

* `form--slip` – преобразует элементы формы с плавающими лейблами

### `form__item`

* `form__item--slip` – фиксирает плавающий лейбл. Имеет смысл когда форма `form--slip`

### `form__input`

* `form__input--danger` – оформляет ошибочный ввод инпута

### `form__select`

* `form__select--danger` – оформляет ошибочный ввод селекта

### `form__textarea`

* `form__textarea--danger` – оформляет ошибочный ввод текстареи

### `form__hint`

* `form__hint--success` – оформляет успешную подсказку
* `form__hint--danger` – оформляет ошибочную подсказку

## Дополнительно

* Слайдер: [noUiSlider](https://github.com/leongersen/noUiSlider)
* Маски: [imaskjs](https://github.com/uNmAnNeR/imaskjs)
* Автовысота текстареи: [autosize](https://github.com/jackmoore/autosize)
