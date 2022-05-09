import "./styles/main.css"

import { scroll } from "./modules/scroll"
import {swiper} from "./modules/swiper"
import {fetchdata} from "./modules/fetchdata"
import {home} from "./modules/home"
import {newsDetail} from "./modules/newsDetail"


function insertElement(element){
    document.getElementById("main-page-con").innerHTML=`<h1>LOADING...</h1>`
    setTimeout(()=>{
        document.getElementById("main-page-con").innerHTML=`${element}`
    },1000)
}
insertElement(newsDetail())
// fetchdata()
scroll()
swiper()