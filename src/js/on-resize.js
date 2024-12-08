import changeHomeImg from "./changeHomeImg.js";
import checkSolidNavbar from "./checkSolidNavbar.js";

export default function onResize() {
  checkSolidNavbar();
  changeHomeImg();
}
