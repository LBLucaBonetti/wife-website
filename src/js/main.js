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

import home from "../img/home.jpg";
import homeWebp from "../img/home.webp";
import homeMd from "../img/home-md.jpg";
import homeMdWebp from "../img/home-md.webp";
import homeSm from "../img/home-sm.jpg";
import homeSmWebp from "../img/home-sm.webp";
function changeHomeImg() {
  const homeImgSrcJpg = document.getElementById("home-img-src-jpg");
  const homeImgSrcWebp = document.getElementById("home-img-src-webp");
  const homeImg = document.getElementById("home-img");
  let imgToSet = homeSm;
  let imgToSetWebp = homeSmWebp;
  const width = window.innerWidth;
  if (width >= 576 && width <= 1024) {
    imgToSet = homeMd;
    imgToSetWebp = homeMdWebp;
  } else if (width > 1024) {
    imgToSet = home;
    imgToSetWebp = homeWebp;
  }
  homeImgSrcJpg.srcset = imgToSet;
  homeImgSrcWebp.srcset = imgToSetWebp;
  homeImg.src = imgToSet;
}
changeHomeImg();
window.addEventListener("resize", changeHomeImg);
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
