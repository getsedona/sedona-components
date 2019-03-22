const defaultParams = {
  selector: ".js-notify-close",
  hideClass: "notify--hide"
};

export function notify(params = defaultParams) {
  const element = document.querySelector(params.selector);
  if (element !== null) {
    element.addEventListener("click", function() {
      document.querySelector(".notify").classList.add(params.hideClass);
    });
  }
}
