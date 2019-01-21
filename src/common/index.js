import MobileDetect from "mobile-detect";
import "./styles.less";

let md = new MobileDetect(window.navigator.userAgent);

if (md.mobile()) {
	document.body.classList.add("mobile");
}
