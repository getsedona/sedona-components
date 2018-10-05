# Шапка

Шаблонный тип.

## Особенности

* Подключается к `<header>` или располагается внутри него
* По-умолчанию имеет максимальную для контента ширину — `@header-max-width`
* По-умолчанию имеет мобильный вид. Разворачивается, начиная с ширины `@header-breakpoints-desktop`
* Имеет встраиваемые дополнительные элементы и иконки (указаны в разметке)
* По-умолчанию имеет тон всего сайта. Может принудительно иметь светлый и темный тон

## Настройка

```less
// Base

@header-height: (@line-height + @indent * 2);

@header-color: @base-primary;
@header-background: none;
@header-link-color: @link-primary;

@header-breakpoints: @grid-breakpoints-md;
@header-max-width: @grid-breakpoints-xl;

// Darken

@header-darken-color: @light-primary;
@header-darken-background: @dark-primary;
@header-darken-link-color: @header-link-color;

// Lighten

@header-lighten-color: @dark-primary;
@header-lighten-background: @light-primary;
@header-lighten-link-color: @header-link-color;
```

## Разметка

```html
<header class="header">
  <div class="header__wrap">
    <div class="header__fold">
      <div class="header__logo">
        <a href="#">Sedona</a>
      </div>

      <ul class="header__mobile">
        <!-- Дополнительно (примеры) -->
        <li>Привет!</li>
        <li><a href="#">Вход</a></li>
        <li class="header__icon  header__icon--call"><a href="#">8 800 200-66-00</a></li>
        <li class="header__icon  header__icon--search"><a href="#">Поиск</a></li>
        <!-- / -->
  
        <li class="header__toggle"><button class="js-header-toggle">Меню</button></li>
      </ul>
    </div>

    <div class="header__collapse">
      <nav class="header__menu">
        <ul>
          <li><a href="#">Компания</a></li>
          <li><a href="#">Продукция</a></li>
          <li><a href="#">Услуги и цены</a></li>
          <li><a href="#">Контакты</a></li>
        </ul>
      </nav>
      
      <!-- Дополнительно -->
      <ul class="header__extra">
        <li><a href="#">Вход</a></li>
        <li><a class="btn" href="#">Выход</a></li>
      </ul>
      <!-- / -->
      
      <!-- Дополнительно -->
      <ul class="header__extra  header__extra--nowrap">
        <li><a href="#">EN</a></li>
        <li><a href="#">FR</a></li>
      </ul>
      <!-- / -->
      
      <!-- Дополнительно -->
      <ul class="header__extra  header__extra--hidden-mobile">
        <li class="header__icon  header__icon--call"><a href="#">8 800 200-66-00</a></li>
        <li class="header__icon  header__icon--search"><a href="#">Поиск</a></li>
      </ul>
      <!-- / -->
    </div>
  </div>
</header>
```

## Модификаторы

### `header`

* `header--darken` — делает шапку в темных тонах
* `header--lighten` — делает шапку в светлых тонах

### `header__extra`

* `header__extra--nowrap` — запрещает перенос внутренних элементов на новые строки
* `header__extra--hidden-mobile` — скрывает элементы, когда шапка становися мобильной
