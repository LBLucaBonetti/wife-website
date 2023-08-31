import home from "../img/home.jpg";
import homeWebp from "../img/home.webp";
import homeMd from "../img/home-md.jpg";
import homeMdWebp from "../img/home-md.webp";
import homeSm from "../img/home-sm.jpg";
import homeSmWebp from "../img/home-sm.webp";

export default function changeHomeImg() {
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
