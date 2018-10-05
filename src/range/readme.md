# Диапазон

Инлайновый тип. [Пример](http://sedona.stage.constlab.ru/blocks/range/).

## Особенности

* Работает с помощью [Ion.RangeSlider](http://ionden.com/a/plugins/ion.rangeSlider/)
* Требуется подключение [Jquery](http://jquery.com)
* Зависит от блока [form](https://github.com/constlab/sedona-blocks/tree/master/form)

## Настройка

```less
@range-height: @form-control-height;

@range-line-height: 2px;
@range-line-border-radius: (@range-line-height / 2);
@range-line-background-color: @form-control-border-color;
@range-line-background-image: none;
@range-line-background-repeat: repeat;
@range-line-background-position: 0 0;
@range-line-background-size: auto auto;

@range-bar-background-color: @form-accent-border-color;
@range-bar-background-image: none;
@range-bar-background-repeat: repeat;
@range-bar-background-position: 0 0;
@range-bar-background-size: auto auto;

@range-slider-width: @font-size;
@range-slider-height: @font-size;
@range-slider-border-width: 0;
@range-slider-border-color: transparent;
@range-slider-border-radius: 50%;
@range-slider-background-color: @range-bar-background-color;
@range-slider-background-image: none;
@range-slider-background-repeat: repeat;
@range-slider-background-position: 0 0;
@range-slider-background-size: auto auto;

@range-hint-color: @form-hint-color;
@range-hint-font-size: @form-hint-font-size;
@range-hint-line-height: @form-hint-line-height;
```
