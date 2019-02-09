# common

Главный общий файл, содержащий в себе всю настройку сайта: цвета, размеры, отступы, шрифты и т. д.

Все компоненты ссылаются на этот главный файл и напрямую зависят от него.

На мобильных устройствах устанавливает тегу `body` класс `.mobile`.

[Настройка](https://github.com/getsedona/sedona-components/tree/master/src/common/veriables.less) • [Пример](https://getsedona.github.io/sedona-components/common.html) • [Разметка](https://github.com/getsedona/sedona-components/tree/master/src/common/examples.html)

## Подключение

```js
// main.js
import "sedona-components/src/common";
```

```less
// main.less
@import "~sedona-components/src/common/index";
```
