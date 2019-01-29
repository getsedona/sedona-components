import MobileDetect from "mobile-detect";

let md = new MobileDetect(window.navigator.userAgent);

if (md.mobile()) {
	document.body.classList.add("mobile");
}