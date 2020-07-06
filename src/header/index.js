import { disablePageScroll, enablePageScroll } from "scroll-lock";

export function header() {
  if (!document.querySelector(".header")) {
    return;
  }

  document.querySelector(".js-header-toggle").addEventListener("click", () => {
    document.querySelector(".header").classList.toggle("header--open");

    if (document.querySelector(".header").classList.contains("header--open")) {
      disablePageScroll();

      if (window.pageYOffset <= 0) {
        document.querySelector(".header").classList.add("header--sticky");
      }
    } else {
      enablePageScroll();

      if (window.pageYOffset <= 0) {
        document.querySelector(".header").classList.remove("header--sticky");
      }
    }
  });

  document.addEventListener("scroll", () => {
    if (window.pageYOffset > 0) {
      document.querySelector(".header").classList.add("header--sticky");
    } else {
      document.querySelector(".header").classList.remove("header--sticky");
    }
  });
}
