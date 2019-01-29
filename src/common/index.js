import MobileDetect from "mobile-detect";
import "normalize.css/normalize.css";

let md = new MobileDetect(window.navigator.userAgent);

if (md.mobile()) {
	document.body.classList.add("mobile");
}
