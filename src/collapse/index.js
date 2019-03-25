export function collapse() {
  if (!document.querySelector("[data-toggle='collapse']")) {
    return;
  }

  document.querySelectorAll("[data-toggle='collapse']").forEach((el) => {
    el.addEventListener("click", () => {
      const selector = el.getAttribute("data-target");

      document.querySelector(selector).classList.toggle("collapse--show");
    });
  });
}
