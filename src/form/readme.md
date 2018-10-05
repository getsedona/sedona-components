# Form

Инлайновый тип. [Пример](http://sedona.stage.constlab.ru/blocks/form/). [Валидация](http://sedona.stage.constlab.ru/blocks/form/form-validate.html).

## Настройка

```less
// Proportions

@form-control-border-width: 1px;
@form-control-border-radius: @radius;

@form-control-padding-top: (@indent / 2);
@form-control-padding-bottom: @form-control-padding-top;
@form-control-padding-left: @indent;
@form-control-padding-right: @form-control-padding-left;

@form-control-height: (@line-height + @form-control-padding-top + @form-control-padding-bottom);

// Breakpoints

@form-breakpoints: @grid-breakpoints-md;

// Control

@form-control-color: @base-primary;

@form-control-border-color: @base-divider;

@form-control-background-color: @light-primary;
@form-control-background-image: none;
@form-control-background-repeat: repeat;
@form-control-background-position: 0 0;
@form-control-background-size: auto auto;

@form-control-hover-border-color: darken(@form-control-border-color, 15%);
@form-control-hover-background-color: @form-control-background-color;

@form-control-focus-outline-color: @form-control-border-color;
@form-control-focus-border-color: @form-control-hover-border-color;
@form-control-focus-background-color: @form-control-hover-background-color;

@form-control-danger-border-color: lighten(@alert-danger, 25%);
@form-control-danger-background-color: @form-control-background-color;

@form-control-danger-hover-border-color: darken(@form-control-danger-border-color, 10%);
@form-control-danger-hover-background-color: @form-control-danger-background-color;

@form-control-danger-focus-outline-color: @form-control-danger-border-color;
@form-control-danger-focus-border-color: @form-control-danger-hover-border-color;
@form-control-danger-focus-background-color: @form-control-danger-hover-background-color;

// Accent

@form-accent-color: @light-primary;

@form-accent-border-color: @base-secondary;

@form-accent-background-color: @form-accent-border-color;
@form-accent-background-image: none;
@form-accent-background-repeat: repeat;
@form-accent-background-position: 0 0;
@form-accent-background-size: auto auto;

@form-accent-hover-border-color: darken(@form-accent-border-color, 10%);
@form-accent-hover-background-color: darken(@form-accent-background-color, 10%);

// Hint

@form-hint-font-size: @font-size-smaller;
@form-hint-line-height: @line-height-smaller;

@form-hint-color: @base-hint;
@form-hint-danger-color: @alert-danger;

// Placeholder

@form-placeholder-color: @form-hint-color;

// Element

@form-element-color: @form-placeholder-color;

// Darken control

@form-darken-control-color: @light-primary;

@form-darken-control-border-color: @light-divider;

@form-darken-control-background-color: @dark-primary;
@form-darken-control-background-image: none;
@form-darken-control-background-repeat: repeat;
@form-darken-control-background-position: 0 0;
@form-darken-control-background-size: auto auto;

@form-darken-control-hover-border-color: lighten(@form-darken-control-border-color, 15%);
@form-darken-control-hover-background-color: @form-darken-control-background-color;

@form-darken-control-focus-outline-color: @form-darken-control-border-color;
@form-darken-control-focus-border-color: @form-darken-control-hover-border-color;
@form-darken-control-focus-background-color: @form-darken-control-hover-background-color;

@form-darken-control-danger-border-color: lighten(@alert-danger, 5%);
@form-darken-control-danger-background-color: @form-darken-control-background-color;

@form-darken-control-danger-hover-border-color: darken(@form-darken-control-danger-border-color, 5%);
@form-darken-control-danger-hover-background-color: @form-darken-control-danger-background-color;

@form-darken-control-danger-focus-outline-color: @form-darken-control-danger-border-color;
@form-darken-control-danger-focus-border-color: @form-darken-control-danger-hover-border-color;
@form-darken-control-danger-focus-background-color: @form-darken-control-danger-hover-background-color;

// Darken accent

@form-darken-accent-color: @dark-primary;

@form-darken-accent-border-color: @light-secondary;

@form-darken-accent-background-color: @form-darken-accent-border-color;
@form-darken-accent-background-image: none;
@form-darken-accent-background-repeat: repeat;
@form-darken-accent-background-position: 0 0;
@form-darken-accent-background-size: auto auto;

@form-darken-accent-hover-border-color: lighten(@form-darken-accent-border-color, 20%);
@form-darken-accent-hover-background-color: lighten(@form-darken-accent-background-color, 20%);

// Darken hint

@form-darken-hint-color: @light-hint;
@form-darken-hint-danger-color: @alert-danger;

// Darken placeholder

@form-darken-placeholder-color: @form-darken-hint-color;

// Darken element

@form-darken-element-color: @form-darken-placeholder-color;

// Lighten control

@form-lighten-control-color: @dark-primary;

@form-lighten-control-border-color: @dark-divider;

@form-lighten-control-background-color: @light-primary;
@form-lighten-control-background-image: none;
@form-lighten-control-background-repeat: repeat;
@form-lighten-control-background-position: 0 0;
@form-lighten-control-background-size: auto auto;

@form-lighten-control-hover-border-color: darken(@form-lighten-control-border-color, 15%);
@form-lighten-control-hover-background-color: @form-lighten-control-background-color;

@form-lighten-control-focus-outline-color: @form-lighten-control-border-color;
@form-lighten-control-focus-border-color: @form-lighten-control-hover-border-color;
@form-lighten-control-focus-background-color: @form-lighten-control-hover-background-color;

@form-lighten-control-danger-border-color: lighten(@alert-danger, 25%);
@form-lighten-control-danger-background-color: @form-lighten-control-background-color;

@form-lighten-control-danger-hover-border-color: darken(@form-lighten-control-danger-border-color, 10%);
@form-lighten-control-danger-hover-background-color: @form-lighten-control-danger-background-color;

@form-lighten-control-danger-focus-outline-color: @form-lighten-control-danger-border-color;
@form-lighten-control-danger-focus-border-color: @form-lighten-control-danger-hover-border-color;
@form-lighten-control-danger-focus-background-color: @form-lighten-control-danger-hover-background-color;

// Lighten accent

@form-lighten-accent-color: @light-primary;

@form-lighten-accent-border-color: @dark-secondary;

@form-lighten-accent-background-color: @form-lighten-accent-border-color;
@form-lighten-accent-background-image: none;
@form-lighten-accent-background-repeat: repeat;
@form-lighten-accent-background-position: 0 0;
@form-lighten-accent-background-size: auto auto;

@form-lighten-accent-hover-border-color: darken(@form-lighten-accent-border-color, 10%);
@form-lighten-accent-hover-background-color: darken(@form-lighten-accent-background-color, 10%);

// Lighten hint

@form-lighten-hint-color: @dark-hint;
@form-lighten-hint-danger-color: @alert-danger;

// Lighten placeholder

@form-lighten-placeholder-color: @form-lighten-hint-color;

// Lighten element

@form-lighten-element-color: @form-lighten-placeholder-color;
```

## Дополнительно

* Маски: [Inputmask](https://github.com/RobinHerbots/Inputmask)
* Календарь: [air-datepicker](https://github.com/t1m0n/air-datepicker)
* Автоподстройка текстареи: [autosize](https://github.com/jackmoore/autosize)
