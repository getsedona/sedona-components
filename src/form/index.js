export function form() {
  if (!document.querySelector(".form--slip")) {
    return;
  }

  document.querySelectorAll(".form--slip").forEach((el) => {
    if (el.classList.contains("js-form-slip-init")) {
      return;
    }

    el.classList.add("js-form-slip-init");

    el.querySelectorAll(".form__item").forEach((item) => {
      item.addEventListener("focusin", (evt) => {
        const targetEl = evt.target;

        if (targetEl.classList.contains("form__input") || targetEl.classList.contains("form__textarea")) {
          item.classList.add("form__item--slip");
        }
      });

      item.addEventListener("focusout", (evt) => {
        const targetEl = evt.target;

        if (targetEl.classList.contains("form__input") || targetEl.classList.contains("form__textarea")) {
          if (targetEl.value) {
            item.classList.add("form__item--slip");
          } else {
            item.classList.remove("form__item--slip");
          }
        }
      });
    });
  });
}
