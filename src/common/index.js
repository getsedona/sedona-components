import MobileDetect from "mobile-detect";

const md = new MobileDetect(window.navigator.userAgent);

if (md.mobile()) {
  document.body.classList.add("mobile");
}

let vh = window.innerHeight * 0.01;

document.documentElement.style.setProperty("--vh", `${vh}px`);

window.addEventListener("resize", () => {
  vh = window.innerHeight * 0.01;

  document.documentElement.style.setProperty("--vh", `${vh}px`);
});
