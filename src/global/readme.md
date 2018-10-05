# Глобал

Главные подключаемые файлы.

Глобальный тип.

## Настройка

```less
// General

@rhythm: 4px;
@radius: @rhythm; // 4px

// Indents

@indent: @font-size; // 16px

@indent-element-smaller: (@indent * 2); // 32px
@indent-element-larger: (@indent * 3); // 48px

@indent-block-smaller: (@indent * 3); // 48px
@indent-block-larger: (@indent * 6); // 96px

// Font family

@font-family-primary: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "NotoColorEmoji", "Segoe UI Emoji", "Segoe UI Symbol";
@font-family-secondary: @font-family-primary; // -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "NotoColorEmoji", "Segoe UI Emoji", "Segoe UI Symbol"

// Base color

@base-primary: @dark-primary; // #1f1f1f
@base-secondary: @dark-secondary; // #8a8a8a
@base-hint: @dark-hint; // #b8b8b8
@base-divider: @dark-divider; // #e0e0e0

// Dark color

@dark-primary: lighten(#000, 12%); // #1f1f1f
@dark-secondary: lighten(#000, 54%); // #8a8a8a
@dark-hint: lighten(#000, 72%); // #b8b8b8
@dark-divider: lighten(#000, 88%); // #e0e0e0

// Light color

@light-primary: #fff;
@light-secondary: darken(#fff, 30%); // #b3b3b3
@light-hint: darken(#fff, 50%); // #808080
@light-divider: darken(#fff, 72%); // #474747

// Links color

@link-primary: #007aff;

// Buttons color

@button-primary: @link-primary; // #007aff

// Alerts color

@alert-success: #4cd964;
@alert-warning: #fc0;
@alert-danger: #ff3b30;

// Normal text size

@font-size: (@rhythm * 4); // 16px
@line-height: (@rhythm * 7); // 28px

// Small text size

@font-size-smaller: (@rhythm * 3); // 12px
@line-height-smaller: (@rhythm * 5); // 20px

// Large text size

@font-size-larger: (@rhythm * 6); // 24px
@line-height-larger: (@rhythm * 8); // 32px

// Headers text size

@font-size-h1: (@rhythm * 8); // 32px
@line-height-h1: (@rhythm * 10); // 40px

@font-size-h1-larger: (@rhythm * 9); // 36px
@line-height-h1-larger: (@rhythm * 11); // 44px

@font-size-h2: @font-size-h1; // 32px
@line-height-h2: @line-height-h1; // 40px

@font-size-h2-larger: @font-size-h1-larger; // 36px
@line-height-h2-larger: @line-height-h1-larger; // 44px

@font-size-h3: (@rhythm * 5); // 20px
@line-height-h3: (@rhythm * 7); // 28px

@font-size-h3-larger: @font-size-h3; // 20px
@line-height-h3-larger: @line-height-h3; // 28px

// Links

@link-color: @link-primary; // #007aff
@link-border-width: 1px;
@link-border-fade: 30%;

@link-hover-darken: 15%;
@link-hover-border-fade: @link-border-fade; // 30%

// Animation

@duration: 0.2s;
@timing-function: ease-out;

// Breakpoints

@grid-breakpoints-sm: 576px; // Phone
@grid-breakpoints-md: 768px; // Tablet
@grid-breakpoints-lg: 992px; // Notebook
@grid-breakpoints-xl: 1200px; // Desktop

// Columns

@grid-columns: 12;
@grid-gutter: (@indent * 2); // 32px
```

## Миксины

```less
.link(@color) {
	color: @color;
	fill: @color;
	border-bottom-width: @link-border-width;
	border-bottom-style: solid;
	border-bottom-color: fade(@color, @link-border-fade);
}

.link-hover(@color) {
	@color-hover: darken(@color, @link-hover-darken);

	color: @color-hover;
	fill: @color-hover;
	border-bottom-color: fade(@color-hover, @link-hover-border-fade);
}

.focus(@color, @width: 2px) {
	outline: none;
	box-shadow: 0px 0px 0px @width @color;

	.no-focus & {
		box-shadow: none;
	}
}

.disabled(@opacity: 0.5) {
	cursor: not-allowed;
	opacity: @opacity;
}
```
