export function collapse() {
  if (!document.querySelector(".js-collapse-toggle")) {
    return;
  }

  document.querySelectorAll(".js-collapse-toggle").forEach((el) => {
    el.addEventListener("click", () => {
      const selector = el.getAttribute("data-target");

      document.querySelector(selector).classList.toggle("collapse--show");
    });
  });
}
