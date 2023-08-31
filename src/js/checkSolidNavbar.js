const solidNavbarClassName = "nav-scrolled-down";
const yPositionForSolidNavbar = 60; // Arbitrary
const nav = document.getElementById("navbar");

export default function checkSolidNavbar() {
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
