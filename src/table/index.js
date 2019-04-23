let toggleShadow = (el) => {
  if (el.scrollWidth - el.scrollLeft <= el.clientWidth) {
    el.parentElement.classList.remove("table--shadow-right");
  }

  if (el.scrollWidth - el.scrollLeft > el.clientWidth) {
    el.parentElement.classList.add("table--shadow-right");
  }

  if (el.scrollLeft <= 0) {
    el.parentElement.classList.remove("table--shadow-left");
  }

  if (el.scrollLeft > 0) {
    el.parentElement.classList.add("table--shadow-left");
  }
};

export function table() {
  if (!document.querySelector(".table .table__content")) {
    return;
  }

  document.querySelectorAll(".table__content").forEach((el) => {
    if (el.parentElement.classList.contains("js-table-init")) {
      return;
    }

    el.parentElement.classList.add("js-table-init");

    toggleShadow(el);

    el.addEventListener("scroll", () => {
      toggleShadow(el);
    });

    window.addEventListener("resize", () => {
      toggleShadow(el);
    });
  });
}
