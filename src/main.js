import "./styles/main.css";
import "core-js/stable";
import "regenerator-runtime/runtime";
import { home } from "./modules/home";
import { scroll } from "./modules/scroll";
import { bannerSwiper } from "./modules/swiper";
import { getHomeData } from "./modules/getHomeData";
import { newsDetail } from "./modules/newsDetail";
import { newsList } from "./modules/newslist";

function changePage(getPageData, page) {
  let myPromis = new Promise((response, reject) => {
    let pageData = getPageData();
    response(pageData);
  });

  myPromis
    .then((res) => {
      let pageElement = page(res);
      insertElement(pageElement);
    })
    .catch((err) => console.log(err));
}

function init() {
  changePage(getHomeData, home);
}

function insertElement(element) {
  document.getElementById("main-page-con").innerHTML = `<h1>LOADING...</h1>`;
  setTimeout(() => {
    document.getElementById("main-page-con").innerHTML = `${element}`;
  }, 1000);
}

init();
scroll();

setTimeout(() => {
  bannerSwiper();
}, 10000);
