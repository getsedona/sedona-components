import { disablePageScroll, enablePageScroll } from "scroll-lock";

export function header() {
  if (!document.querySelector(".header")) {
    return;
  }

  document.querySelector(".js-header-toggle").addEventListener("click", () => {
    document.querySelector(".header__toggle").classList.toggle("header__toggle--open");
    document.querySelector(".header__menu").classList.toggle("header__menu--open");

    if (document.querySelector(".header__toggle").classList.contains("header__toggle--open")) {
      disablePageScroll();
    } else {
      enablePageScroll();
    }
  });
}
