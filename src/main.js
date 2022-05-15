import "./styles/main.css";
import "core-js/stable";
import "regenerator-runtime/runtime";
import { home } from "./modules/home";
import { scroll } from "./modules/scroll";
import { bannerSwiper } from "./modules/swiper";
import { getHomeData } from "./modules/getHomeData";
import { newsDetail } from "./modules/newsDetail";
import { newsList } from "./modules/newslist";

let HomeData = {}
let cacheHome = ""
function changePage(getPageData, page) {
  let myPromis = new Promise((response, reject) => {
    let pageData = getPageData();
    
    response(pageData);
  });

  myPromis
    .then((res) => {
      HomeData = res
      let pageElement = page(res);
      cacheHome = pageElement
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
    setEvent()
  }, 1000);
}

function setEvent(){
  let arr = document.getElementsByClassName("news-card")
  for (let i = 0 ; i != arr.length ; i++){
    arr[i].addEventListener("click" , chanePagetoNews)
  }
  
}

function chanePagetoNews(e){
  let pageDetail = ""
  let newsD = e.currentTarget.title.split("-")

  if(newsD[0] == "sport" || newsD[0] == "world"){
    console.log("confirm")
    pageDetail = newsDetail(HomeData[newsD[0]][newsD[1]] , HomeData) 

  }else{
    pageDetail = newsDetail(HomeData[newsD[0]][newsD[1]][newsD[2]] , HomeData) 
  }
  insertElement(pageDetail)
  setTimeout(()=>{
    document.getElementById("gobackhomebtn").addEventListener("click" , ()=>{
      insertElement(cacheHome)
    })
  },1000)
}


init();
scroll();

setTimeout(() => {
  bannerSwiper();
}, 10000);
