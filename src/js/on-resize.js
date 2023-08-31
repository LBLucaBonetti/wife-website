import changeHomeImg from "./changeHomeImg";
import checkSolidNavbar from "./checkSolidNavbar";

export default function onResize() {
  checkSolidNavbar();
  changeHomeImg();
}
