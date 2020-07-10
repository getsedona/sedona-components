import { Swiper, Mousewheel, Pagination, A11y } from "swiper";

Swiper.use([Mousewheel, Pagination, A11y]);

export function carousel() {
  if (!document.querySelector(".swiper-container")) {
    return;
  }

  document.querySelectorAll(".swiper-container").forEach((el) => {
    const options = JSON.parse(el.dataset.options || "{}");
    const grid = options.grid;

    let ggg = {};

    if (grid === "jordan") {
      ggg = {
        slidesPerView: 1,
        spaceBetween: 12,
        breakpoints: {
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
        },
      };
    } else if (grid === "meskit") {
      ggg = {
        slidesPerView: 1,
        spaceBetween: 12,
        breakpoints: {
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
        },
      };
    } else if (grid === "amara") {
      ggg = {
        slidesPerView: 1,
        spaceBetween: 12,
        breakpoints: {
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
        },
      };
    }

    // parameters.pagination = {
    //   el: ".carousel__pagination",
    //   type: "custom",
    //   bulletClass: "carousel__dot",
    //   bulletActiveClass: "carousel__dot--active",
    //   modifierClass: "carousel__pagination--",
    //   renderCustom: function(swiper, current, total) {
    //     return current + " of " + total;
    //   },
    // };

    const parameters = {
      init: false,
      grabCursor: true,
      ...options.parameters || {},
      ...ggg,
    };

    const swiper = new Swiper(el, parameters);
    swiper.init();
  });
}
