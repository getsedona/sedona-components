# Набор компонентов

## Принципы

* Тон всего сайта (переменная @tone -- `background-color` тега `body`) определяет базовый цвет текста
* Цвет текста может быть темный или светлый
* Контрастные цвета инвертируют правильно цвета
* Сетка строится от размера шрифта
* Верхний элемент всегда отталкивает нижний
* Отступы по горизонтали равны половине значения
* Левые и правые отступы — внутренние (padding)
* Верхний и нижний — внешние (margin)
* Начиная с планшетов некоторые размеры увеличиваются

## Лейаут

Рекомендуемая разметка тела документа.

```html
<div class="page">
  <header class="header">
    Шапка
  </header>

  <main class="main">
    Контент
  </main>

  <aside class="aside">
    Сайдбар
  </aside>

  <footer class="footer">
    Подвал
  </footer>
</div>
```

## Компоненты

### Global

* global
* wysiwyg

### Layout

* header
* scene
* grid
* footer
* notify

### Components

* carousel
* card
* form
* icon
* social
* table
