// Import the Bootstrap bundle
//
// This includes Popper and all of Bootstrap's JS plugins.

import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

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

// Create an example popover
document.querySelectorAll('[data-bs-toggle="popover"]').forEach((popover) => {
  new bootstrap.Popover(popover);
});
