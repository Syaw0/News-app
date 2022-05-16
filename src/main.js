import "./styles/main.css";
import "core-js/stable";
import "regenerator-runtime/runtime";
import { home } from "./modules/home";
import { scroll } from "./modules/scroll";
import { bannerSwiper } from "./modules/swiper";
import { getHomeData } from "./modules/getHomeData";
import { newsDetail } from "./modules/newsDetail";
import { newsList , addNews } from "./modules/newslist";
import { Promise } from "core-js";
import {getList} from "./modules/getListData"
let HomeData = {};
let cacheHome = "";
let lastcacheData= {}


function init() {
  setEvent("btn-inline-nav" , changeToNewsList)
  
  changePage(getHomeData, home);
  scroll();
setTimeout(() => {
  bannerSwiper();
}, 10000);

}


function changePage(getPageData, page) {
  let myPromis = new Promise((response, reject) => {

    let pageData = getPageData();

    response(pageData);
  });

  myPromis
    .then((res) => {

      HomeData = res;
      let pageElement = page(res);
      cacheHome = pageElement;
      insertElement(pageElement);
    })
    .catch((err) => console.log(err));
}


function insertElement(element) {
  document.getElementById("main-page-con").innerHTML = `<div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>`;
  setTimeout(() => {
    document.getElementById("main-page-con").innerHTML = `${element}`;
    
  }, 1000);
  setTimeout(()=>{
    setEvent("news-card" , chanePagetoNews )
    setEvent("news-card-list" , chanePagetoNews )
    search();
  },1000)
}

function setEvent(className , callback) {
  console.log("im here2")
  let arr = document.getElementsByClassName(className);
  console.log(arr)
  for (let i = 0; i != arr.length; i++) {
    arr[i].addEventListener("click", callback);
  }
}

function chanePagetoNews(e) {
  let pageDetail = "";
  let newsD = e.currentTarget.title.split("-");

  if (newsD[0] == "sport" || newsD[0] == "world")  {
    pageDetail = newsDetail(HomeData[newsD[0]][newsD[1]], HomeData);
  }else if(newsD[0] == "top"){
    pageDetail = newsDetail(HomeData[newsD[0]][newsD[1]][newsD[2]], HomeData);
  }else{
    pageDetail = newsDetail(lastcacheData[1], HomeData);
  }
  insertElement(pageDetail);
  setTimeout(() => {
    document.getElementById("gobackhomebtn").addEventListener("click", () => {
      insertElement(cacheHome);
    });
  }, 1000);
}


function changeToNewsList(e , val , stat){
  if(stat != "search"){
let q =  e.currentTarget.innerHTML
  changePagetoList(getList, newsList  , q )
}else{
  let q =  e.currentTarget.innerHTML
  changePagetoList(getList, newsList  , val  , stat)
}


}


function changePagetoList(getPageData, page , query , stat) {
  let myPromis = new Promise((response, reject) => {
    let pageData = getPageData(query , stat);

    response(pageData);
  });

  myPromis
    .then((res) => {      
      let pageElement = page(res , HomeData ,query);
      lastcacheData = res
      insertElement(pageElement);
      setTimeout(()=>{
        hanldeLoadmoreBtn(lastcacheData , query)
      } , 3000)
    })
    .catch((err) => console.log(err));
}

function search(){
  let arr = document.getElementsByClassName("searchbox");
  for (let i = 0; i != arr.length; i++) {
    arr[i].addEventListener("keydown", (e)=>{
      if(e.key == "Enter"){
        let val = e.target.value
        changeToNewsList(e , val , "search")
        e.target.value = ""
        
      }
    });
  }
}


function hanldeLoadmoreBtn(data , q){
let btn  = document.getElementById('newslist-loadmore')
btn.addEventListener("click" , ()=>{
  addNews(data , q)
  setTimeout(()=>{
    console.log("im here")
    setEvent("news-card-list" , chanePagetoNews )
  },2000)
})
}

init();
