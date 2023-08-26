// Import our custom CSS
import "../scss/styles.scss";

//
// Custom JS here
//
const solidNavbarClassName = "nav-scrolled-down";
const yPositionForSolidNavbar = 60; // Arbitrary
const nav = document.getElementById("navbar");
function checkSolidNavbar() {
  // If the height is under 700, when opening the transparent menu we see links over the home screen so we need to avoid that situation
  if (window.innerHeight < 700) {
    nav.classList.add(solidNavbarClassName);
    return;
  }
  if (window.scrollY >= yPositionForSolidNavbar) {
    nav.classList.add(solidNavbarClassName);
  } else {
    nav.classList.remove(solidNavbarClassName);
  }
}
checkSolidNavbar();
window.onresize = checkSolidNavbar;
window.addEventListener("scroll", () => {
  checkSolidNavbar();
  // Activate correct section link
  let currentSection = "home-nav";
  document.querySelectorAll("section").forEach((section) => {
    // If the width is >= 357, the navbar height is 72; under 357 it wraps the hamburger on a new line and its height becomes 112
    const offset =
      window.innerWidth >= 357
        ? section.offsetTop - 72
        : section.offsetTop - 112;
    if (window.scrollY >= offset) {
      currentSection = section.id + "-nav";
    }
  });
  document.querySelectorAll(".nav-link").forEach((navLink) => {
    if (navLink.getAttribute("id") === currentSection) {
      document.querySelector(".active")?.classList.remove("active");
      navLink.classList.add("active");
    }
  });
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
  // The following width sizes are calculated on the jpg sizes to display them properly
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
import whatsapp from "../img/whatsapp.svg";
import email from "../img/email.svg";
import telephone from "../img/telephone.svg";
import facebook from "../img/facebook.svg";
import instagram from "../img/instagram.svg";
const whatsappImg = document.getElementById("whatsapp-img");
const emailImg = document.getElementById("email-img");
const telephoneImg = document.getElementById("telephone-img");
const facebookImg = document.getElementById("facebook-img");
const instagramImg = document.getElementById("instagram-img");
whatsappImg.src = whatsapp;
emailImg.src = email;
telephoneImg.src = telephone;
facebookImg.src = facebook;
instagramImg.src = instagram;
document.querySelectorAll(".nav-link").forEach((navLink) => {
  navLink.addEventListener("click", (e) => {
    e.preventDefault();
    const target = e.target.getAttribute("href");
    scrollToTarget(target);
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
});
function scrollToTarget(target) {
  if (!target) {
    return;
  }
  const targetElement = document.querySelector(target);
  // See previous comment on navbar height
  const headerOffset = window.innerWidth >= 357 ? 72 : 112;
  window.scrollTo({
    top:
      targetElement.getBoundingClientRect().top + window.scrollY - headerOffset,
  });
}

// Import only the Bootstrap components we need
//import { Popover } from "bootstrap";

// Create an example popover
//document.querySelectorAll('[data-bs-toggle="popover"]').forEach((popover) => {
//  new Popover(popover);
//});
