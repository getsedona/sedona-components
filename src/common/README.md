# common

Главный общий файл, содержащий в себе всю настройку сайта: цвета, размеры, отступы, шрифты и т. д.

Все компоненты ссылаются на этот главный файл и напрямую зависят от него.

Создает css-переменную высоты вьюпорта `--vh`. `--vh`≈`1vh`.

[Настройка](https://github.com/getsedona/sedona-components/blob/master/src/common/variables.less)

## Подключение

```js
// index.js
import "sedona-components/src/common";
```

```less
// index.less
@import "~sedona-components/src/common/index";
```
