// Import our custom CSS
import "../scss/styles.scss";

//
// Custom JS here
//
import onResize from "./on-resize";
import onScroll from "./on-scroll";
import checkSolidNavbar from "./checkSolidNavbar";
import changeHomeImg from "./changeHomeImg";
import { setImgSrc, setImgSrcset } from "./setImg";
import marikasilvestri from "../img/marikasilvestri.jpg";
import adults from "../img/adults.jpg";
import childrenAndTeenagers from "../img/children-and-teenagers.jpg";
import couples from "../img/couples.jpg";
import perinatal from "../img/perinatal.jpg";
import whatsapp from "../img/whatsapp.svg";
import email from "../img/email.svg";
import telephone from "../img/telephone.svg";
import facebook from "../img/facebook.svg";
import instagram from "../img/instagram.svg";

checkSolidNavbar();
changeHomeImg();
window.onresize = onResize;
window.onscroll = onScroll;

const imgSrcset = {
  "about-img-src-jpg": marikasilvestri,
};
const imgSrc = {
  "about-img": marikasilvestri,
  "adults-img": adults,
  "children-and-teenagers-img": childrenAndTeenagers,
  "couples-img": couples,
  "perinatal-img": perinatal,
  "whatsapp-img": whatsapp,
  "email-img": email,
  "telephone-img": telephone,
  "facebook-img": facebook,
  "instagram-img": instagram,
};
Object.entries(imgSrcset).forEach(([elementId, imgRef]) =>
  setImgSrcset(elementId, imgRef)
);
Object.entries(imgSrc).forEach(([elementId, imgRef]) =>
  setImgSrc(elementId, imgRef)
);

document.querySelectorAll(".nav-link").forEach((navLink) => {
  navLink.addEventListener("click", (e) => {
    // The following trick triggers a click on the menu toggler button to hide the navbar menu when the user click on a navigation item
    const navbarToggler = document.querySelector("button.navbar-toggler");
    if (
      navbarToggler &&
      window.getComputedStyle(navbarToggler, null).display !== "none"
    ) {
      navbarToggler.click();
    }
  });
});

// Import only the Bootstrap components we need
import { Popover } from "bootstrap";

// Create an example popover
document.querySelectorAll('[data-bs-toggle="popover"]').forEach((popover) => {
  new Popover(popover);
});
