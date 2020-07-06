import { Swiper, Mousewheel, Pagination, A11y } from "swiper/js/swiper.esm.js";
import "./../../node_modules/swiper/css/swiper.css";

Swiper.use([Mousewheel, Pagination, A11y]);

export function carousel() {
  if (!document.querySelector(".swiper-container")) {
    return;
  }

  document.querySelectorAll(".swiper-container").forEach((el) => {
    const options = JSON.parse(el.dataset.options || "{}");
    const grid = options.grid;
    const pagination = options.pagination;

    const parameters = options.parameters || {};
    parameters.init = false;
    parameters.grabCursor = true;

    if (grid === "jordan") {
      parameters.slidesPerView = 1;
      parameters.spaceBetween = 12;
      parameters.breakpoints = {
        576: {
          slidesPerView: 1,
          spaceBetween: 24,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 48,
        },
        992: {
          slidesPerView: 2,
          spaceBetween: 48,
        },
      };
    } else if (grid === "meskit") {
      parameters.slidesPerView = 1;
      parameters.spaceBetween = 12;
      parameters.breakpoints = {
        576: {
          slidesPerView: 1,
          spaceBetween: 24,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 48,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 48,
        },
      };
    } else if (grid === "amara") {
      parameters.slidesPerView = 1;
      parameters.spaceBetween = 12;
      parameters.breakpoints = {
        576: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 48,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 48,
        },
        1194: {
          slidesPerView: 4,
          spaceBetween: 48,
        },
      };
    }

    if (pagination === "brand") {
      parameters.pagination = {
        el: ".carousel__pagination",
        bulletClass: "carousel__pagination--brand",
        renderBullet: (index, className) => {
          return `<span class="${className}">${index + 1}</span>`;
        },
      };
    }

    const swiper = new Swiper(el, parameters);
    swiper.init();
  });
}
