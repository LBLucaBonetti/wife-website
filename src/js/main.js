// Import our custom CSS
import "../scss/styles.scss";

//
// Custom JS here
//
const solidNavbarClassName = "nav-scrolled-down";
const yPositionForSolidNavbar = 60;
const nav = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY >= yPositionForSolidNavbar) {
    nav.classList.add(solidNavbarClassName);
  } else if (window.scrollY < yPositionForSolidNavbar) {
    nav.classList.remove(solidNavbarClassName);
  }
});

import marikasilvestri from "../img/marikasilvestri.jpg";
const aboutImgSrcJpg = document.getElementById("about-img-src-jpg");
aboutImgSrcJpg.srcset = marikasilvestri;
const aboutImg = document.getElementById("about-img");
aboutImg.src = marikasilvestri;

// Import only the Bootstrap components we need
import { Popover } from "bootstrap";

// Create an example popover
document.querySelectorAll('[data-bs-toggle="popover"]').forEach((popover) => {
  new Popover(popover);
});
