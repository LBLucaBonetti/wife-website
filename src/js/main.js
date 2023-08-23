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
import adults from "../img/adults.jpg";
import childrenAndTeenagers from "../img/children-and-teenagers.jpg";
import couples from "../img/couples.jpg";
import perinatal from "../img/perinatal.jpg";
const adultsImg = document.getElementById("adults-img");
adultsImg.src = adults;
const childrenAndTeenagersImg = document.getElementById(
  "children-and-teenagers-img"
);
childrenAndTeenagersImg.src = childrenAndTeenagers;
const couplesImg = document.getElementById("couples-img");
couplesImg.src = couples;
const perinatalImg = document.getElementById("perinatal-img");
perinatalImg.src = perinatal;
document.querySelectorAll(".nav-link").forEach((navLink) => {
  navLink.addEventListener("click", (e) => {
    e.preventDefault();
    const target = e.target.getAttribute("href");
    scrollToTarget(target);
    // Set this active and remove other active states
    document.querySelector(".active")?.classList.remove("active");
    navLink.classList.add("active");
    const navbarToggler = document.querySelector("button.navbar-toggler");
    if (
      navbarToggler &&
      window.getComputedStyle(navbarToggler, null).display !== "none"
    ) {
      navbarToggler.click();
    }
  });
});
document.getElementById("call-to-action").addEventListener("click", (e) => {
  e.preventDefault();
  const target = e.target.getAttribute("href");
  scrollToTarget(target);
  document.querySelector(".active")?.classList.remove("active");
  document.getElementById("contacts-nav").classList.add("active");
});
function scrollToTarget(target) {
  if (!target) {
    return;
  }
  const targetElement = document.querySelector(target);
  targetElement.scrollIntoView();
}

// Import only the Bootstrap components we need
import { Popover } from "bootstrap";

// Create an example popover
document.querySelectorAll('[data-bs-toggle="popover"]').forEach((popover) => {
  new Popover(popover);
});
