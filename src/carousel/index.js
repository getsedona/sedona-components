import { Swiper, Mousewheel, Pagination, A11y } from "swiper/js/swiper.esm.js";
import "./../../node_modules/swiper/css/swiper.css";

Swiper.use([Mousewheel, Pagination, A11y]);

export function carousel() {
  if (!document.querySelector(".swiper-container")) {
    return;
  }

  document.querySelectorAll(".swiper-container").forEach((el) => {
    const dataParameters = el.dataset.parameters;
    const swiperParameters = JSON.parse(dataParameters);
    swiperParameters.init = false;
    const swiper = new Swiper(el, swiperParameters);
    swiper.init();
  });
}
