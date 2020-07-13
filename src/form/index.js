export function form() {
  if (!document.querySelector(".form__item--slip")) {
    return;
  }

  document.querySelectorAll(".form__item--slip").forEach((el) => {
    if (el.classList.contains("js-form-item-slip-init")) {
      return;
    }

    el.classList.add("js-form-item-slip-init");

    el.addEventListener("focusin", (evt) => {
      const targetEl = evt.target;

      if (targetEl.classList.contains("form__input") || targetEl.classList.contains("form__textarea")) {
        el.classList.add("form__item--slippery");
      }
    });

    el.addEventListener("focusout", (evt) => {
      const targetEl = evt.target;

      if (targetEl.classList.contains("form__input") || targetEl.classList.contains("form__textarea")) {
        if (targetEl.value) {
          el.classList.add("form__item--slippery");
        } else {
          el.classList.remove("form__item--slippery");
        }
      }
    });
  });
}
