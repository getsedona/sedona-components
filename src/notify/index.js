export function notify() {
  const el = document.querySelector(".js-notify-close");

  if (el) {
    el.addEventListener("click", function() {
      document.querySelector(".notify").classList.add("notify--hide");
    });
  }
}
