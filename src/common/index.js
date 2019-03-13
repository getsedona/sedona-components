import MobileDetect from "mobile-detect";

const md = new MobileDetect(window.navigator.userAgent);

if (md.mobile()) {
  document.body.classList.add("mobile");
}
