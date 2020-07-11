import { Swiper, Mousewheel, Navigation, Pagination, A11y } from "swiper";

export function carousel() {
  if (!document.querySelector(".carousel")) {
    return;
  }

  Swiper.use([Mousewheel, Navigation, Pagination, A11y]);

  document.querySelectorAll(".carousel").forEach((el) => {
    const options = JSON.parse(el.dataset.options);
    let grid = {};
    let pagination = {};

    if (options.grid === true) {
      grid = {
        spaceBetween: 12,
        breakpoints: {
          576: {
            spaceBetween: 24,
          },
          768: {
            spaceBetween: 48,
          },
        },
      };
    } else if (options.grid === "jordan") {
      grid = {
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
    } else if (options.grid === "meskit") {
      grid = {
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
    } else if (options.grid === "amara") {
      grid = {
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

    if (options.pagination) {
      pagination = {
        pagination: {
          el: ".carousel__pagination",
          type: options.pagination,
          bulletClass: "carousel__dot",
          bulletActiveClass: "carousel__dot--active",
          modifierClass: "carousel__pagination--",
          lockClass: "carousel__pagination--lock",
        },
      };
    }

    const parameters = {
      init: false,
      watchOverflow: true,
      grabCursor: true,
      mousewheel: {
        forceToAxis: true,
      },
      a11y: true,
      ...grid,
      ...pagination,
      ...options.parameters || {},
    };

    const swiper = new Swiper(el, parameters);
    swiper.init();
  });
}
