const toggleCollapse = (selector, cmd) => {
  const fnmap = {
    "toggle": "toggle",
    "show": "add",
    "hide": "remove"
  };

  const targets = Array.from(document.querySelectorAll(selector));

  targets.forEach(target => {
    target.classList[fnmap[cmd]]("show");
  });
}

export function collapse() {
  const triggers = Array.from(document.querySelectorAll("[data-toggle='collapse']"));

  window.addEventListener("click", (event) => {
    const element = event.target;

    if (triggers.includes(element)) {
      const selector = element.getAttribute("data-target");

      toggleCollapse(selector, "toggle");
    }
  }, false);
}
