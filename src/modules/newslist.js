export function newsList(data , homeData ,query) {
  let componnetData = AllDetail(data , homeData ,query)
  return componnetData;
}


function news(data , query){
  let withImg = "";
  let element;
  for (let num = 0; num != 10; num++) {
    element = `
  <div class="news-card-vertical news-card-list" title="${query}-${num}" >
  <div class="news-card-vertical-img-con">
    <img src="${data[num]["image_url"]}" alt="" />
  </div>
  <div class="news-card-vertical-information">
    <h6 class="side-news-without-img-category">
    ${query}
    </h6>
    <h4 class="news-card-vertical-information-title">
    ${data[num]["title"]}
    </h4>
    <h6 class="news-card-vertical-information-description">
    ${data[num]["description"]}
    </h6>
    <h6 class="news-card-vertical-information-date">
    ${data[num]["pubDate"]}
    </h6>
  </div>
</div>
  `;
    withImg += element;
  }
  return withImg

}


function nav(data){
  let withoutImg = "";
  let withImg = "";
  let element;
  let element2;
  for (let num = 0; num != 10; num++) {
    element = `
    <div class="side-news-without-img news-card" title="top-withoutImg-${num}">
    <h6 class="side-news-without-img-category">
    ${data["top"]["withoutImg"][num]["category"][0]}
    </h6>
    <h6 class="side-news-without-img-date">
    ${data["top"]["withoutImg"][num]["pubDate"]}
    </h6>
    <h4 class="side-news-without-img-title">
    ${data["top"]["withoutImg"][num]["title"]}
    </h4>
  </div>
  `;
    withoutImg += element;
  }

  for (let num = 9; num != 14; num++) {
    element2 = `
    <div class="side-news-with-img news-card" title="top-withImg-${num}">
    <div class="side-news-with-img-imgcon">
      <img src="${data["top"]["withImg"][num]["image_url"]}" alt="" />
    </div>

    <div class="side-news-with-img-infos">
      <h6 class="side-news-with-img-infos-date">
      ${data["top"]["withImg"][num]["pubDate"]}
      </h6>

      <h4 class="side-news-with-img-infos-title">
      ${data["top"]["withImg"][num]["title"]}
      </h4>
    </div>
  </div>
  `;
    withImg += element2;
  }

  let detail = ` 
  <div id="newslist-nav" class="home-sections side-topnew">
  <legend id="home-side-legend" class="home-sections-legends">Top News</legend>
  <h3 id="home-side-header">Top News</h3>

  ${withoutImg}
  

  <!-- side connect icons -->

  <div class="side-connect-con">
    <h4 class="side-connect-header">Find Us Here</h4>
    <div class="side-connect-icon-con">
      <div class="footer-connect-icon-con" title="connect to our facebook">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="footer-connect-icon">
          <path
            fill-rule="evenodd"
            d="M4,2 L20,2 C21.1045695,2 22,2.8954305 22,4 L22,20 C22,21.1045695 21.1045695,22 20,22 L4,22 C2.8954305,22 2,21.1045695 2,20 L2,4 C2,2.8954305 2.8954305,2 4,2 Z M4,4 L4,20 L20,20 L20,4 L4,4 Z M13,12.0043945 L11.1330566,12.0043945 L11.1330566,10.0043945 L13,10.0043945 L13,9 C13,7.34314575 14.3431458,6 16,6 L17,6 L17,8 L16,8 C15.4477153,8 15,8.44771525 15,9 L15,10.0043945 L16.9824219,10.0043945 L16.9824219,12.0043945 L15,12.0043945 L15,18 L13,18 L13,12.0043945 Z"
          />
        </svg>
      </div>

      <div class="footer-connect-icon-con" title="connect to our Youtube">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="footer-connect-icon">
          <path
            fill-rule="evenodd"
            d="M23,11.9972 C23,15.0688707 22.7080514,16.9571365 22.0247481,18.1281724 C21.3347709,19.3777602 20.5269977,19.7708297 18.8782989,19.8862992 C17.7148693,19.9542414 14.794638,20 12.0026667,20 C9.2044172,20 6.28275714,19.9542562 5.10860514,19.8855427 C3.47493151,19.7708031 2.66701263,19.37838 1.97791182,18.142374 C1.29279472,16.9480084 1,15.052042 1,12.0084 C1,8.94737365 1.29138368,7.06090428 1.97193166,5.86259947 C2.67010997,4.61046509 3.49111627,4.21325835 5.11100471,4.1184917 C6.23144506,4.04250638 8.99660854,4 12.0026667,4 C15.002263,4 17.766208,4.04252223 18.8782989,4.11790083 C20.5073007,4.21303163 21.3281267,4.60936303 22.020213,5.8580297 C22.7108012,7.06048454 23,8.93778123 23,11.9972 Z M20.283329,6.84963647 C19.9603324,6.26505017 19.7713697,6.17346202 18.752413,6.11391338 C17.6926261,6.04212137 14.954737,6 12.0026667,6 C9.04424331,6 6.3050775,6.04210674 5.2370951,6.1144916 C4.22844212,6.17352647 4.03674592,6.26627 3.71489655,6.84342165 C3.2475376,7.66638709 3,9.26898917 3,11.9972 C3,14.7270394 3.24886149,16.33852 3.71873501,17.1577995 C4.03565111,17.7261665 4.22600958,17.8186276 5.23703026,17.8897046 C6.34874254,17.9546989 9.24212825,18 12.0026667,18 C14.7569983,18 17.6489264,17.9546849 18.7500936,17.8904464 C19.7737637,17.8187098 19.961409,17.7274 20.2855157,17.1409953 C20.752236,16.3407623 21,14.7382734 21,12.0084 C21,9.25771396 20.7535449,7.66399511 20.283329,6.84963647 Z M10,9 L15,12 L10,15 L10,9 Z"
          />
        </svg>
      </div>

      <div class="footer-connect-icon-con" title="connect to our Twiter">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="footer-connect-icon">
          <path
            fill-rule="evenodd"
            d="M21.1195379,4.50827277 L22.5342762,4.67349373 L21.8983361,5.94799866 C21.5882127,6.56952557 21.2777825,7.19105241 20.9670457,7.81257919 C20.9301859,7.94421707 20.8654361,8.05962088 20.7696585,8.20987253 C20.7296392,8.27265296 20.5929134,8.47235578 20.5865199,8.48194389 C20.5504194,8.53608265 20.5237244,8.57877603 20.5045116,8.612985 L20.5045116,11.0015223 C20.5045116,17.1135105 14.5895212,20.997433 9.0035407,20.997433 C7.86051052,20.997433 6.9920671,20.942655 5.99764648,20.7256544 C4.3611498,20.3685411 3.14327382,19.6586563 2.58597331,18.4179897 L2.01221067,17.1406749 L3.40658935,17.0124385 C4.66800583,16.8964301 5.76168918,16.6561247 6.60158598,16.3343284 C4.29576888,15.9635022 3.00360004,14.9507867 3.00360004,13.0488856 L3.00360004,12.0488856 L4.00360004,12.0488856 C4.22331194,12.0488856 4.42142655,12.031056 4.59854401,11.9983407 C2.86800086,10.9636463 2.00122175,9.30378982 2.00122175,7.00152231 C2.00103266,6.90339488 2.00103266,6.90339488 2.00044255,6.79847339 C1.99394143,5.63802549 2.05627216,5.01796633 2.37394794,4.22659275 C2.57754322,3.7194092 2.87183091,3.24988363 3.26789948,2.81966825 L4.02250949,2 L4.7561743,2.8384678 C7.17393937,5.60160726 9.56394913,7.2779529 12.0041718,7.48072062 C12.0145984,4.93104737 13.9415349,3.00152231 16.5043352,3.00152231 C17.6990777,3.00152231 18.7828136,3.4550135 19.6344797,4.27272548 C20.1006133,4.36850877 20.5956593,4.44709134 21.1195379,4.50827277 Z M18.9086413,6.1620157 L18.6020809,6.09259834 L18.390364,5.86027523 C17.8784597,5.29854774 17.2359357,5.00152231 16.5043352,5.00152231 C15.0413633,5.00152231 14.0041293,6.04390721 14.0041293,7.50152231 C14.0041293,7.73973624 13.9979686,7.88941876 13.9682939,8.0861482 C13.8498823,8.87116329 13.4095655,9.50152231 12.5040999,9.50152231 C9.50606541,9.50152231 6.80135608,7.8954174 4.16389262,5.15228013 C4.0279242,5.56560795 3.99594732,5.99047388 4.00041117,6.78726907 C4.0010134,6.8938353 4.0010134,6.8938353 4.00122175,7.00152231 C4.00122175,9.04953038 4.83093434,10.1697716 6.79546534,10.7941852 L7.49255437,11.0157505 L7.49255437,11.7472041 C7.49255437,12.6341912 6.65221936,13.4691441 5.42268337,13.8431328 C5.98631287,14.270758 7.13900191,14.5015223 9.00389409,14.5015223 L10.0038941,14.5015223 L10.0038941,15.5015223 C10.0038941,16.9342605 8.35761853,18.0560539 5.87074839,18.6418567 C6.68178057,18.8903379 7.76165536,18.997433 9.0035407,18.997433 C13.617962,18.997433 18.5045116,15.788809 18.5045116,11.0015223 L18.5045116,8.50152231 C18.5045116,8.20773972 18.5896702,7.95273379 18.731148,7.68759331 C18.7864644,7.58392608 18.8473687,7.48509444 18.9225327,7.37237332 C18.936682,7.35115417 18.9891853,7.27426284 19.0308673,7.21279246 L19.1101243,7.05428768 C19.2385516,6.79744834 19.3669263,6.54060902 19.4952487,6.28376971 C19.2958216,6.24599305 19.1002871,6.20541186 18.9086413,6.1620157 Z"
          />
        </svg>
      </div>

      <div class="footer-connect-icon-con" title="connect to our Instagram">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="footer-connect-icon">
          <path
            fill-rule="evenodd"
            d="M8,2 L16,2 C19.3137085,2 22,4.6862915 22,8 L22,16 C22,19.3137085 19.3137085,22 16,22 L8,22 C4.6862915,22 2,19.3137085 2,16 L2,8 C2,4.6862915 4.6862915,2 8,2 Z M8,4 C5.790861,4 4,5.790861 4,8 L4,16 C4,18.209139 5.790861,20 8,20 L16,20 C18.209139,20 20,18.209139 20,16 L20,8 C20,5.790861 18.209139,4 16,4 L8,4 Z M12,17 C9.23857625,17 7,14.7614237 7,12 C7,9.23857625 9.23857625,7 12,7 C14.7614237,7 17,9.23857625 17,12 C17,14.7614237 14.7614237,17 12,17 Z M12,15 C13.6568542,15 15,13.6568542 15,12 C15,10.3431458 13.6568542,9 12,9 C10.3431458,9 9,10.3431458 9,12 C9,13.6568542 10.3431458,15 12,15 Z M17,8 C16.4477153,8 16,7.55228475 16,7 C16,6.44771525 16.4477153,6 17,6 C17.5522847,6 18,6.44771525 18,7 C18,7.55228475 17.5522847,8 17,8 Z"
          />
        </svg>
      </div>
    </div>
  </div>

  <!-- side news with img -->

  ${withImg}

</div>`;

  return detail;
}



function AllDetail(data, hdata ,query){
let detail = `
<div id="newslist-con">
  <div id="newslist">
    <div id="newslist-head">
      <h3 id="newslist-head-header">Search For Results : ${query}</h3>
    </div>

    <div id="newslist-body">
      ${news(data , query)}
    </div>

    <div id="newslist-footer">
      <button id="newslist-loadmore" class="btn-ghost">LOAD MORE</button>
    </div>
  </div>
  ${nav(hdata)}
</div>`



return detail
}

export function addNews(data , query){
  console.log(data)
  let arr = document.getElementById("newslist-body").getElementsByClassName("news-card-list")
  let element = ""
  let withImg = ""
  console.log(arr.length)
  for(let num = arr.length ; num != arr.length + 10 ; num++){
    console.log(num)
    element = `
    <div class="news-card-vertical news-card-list" title="${query}-${num}" >
    <div class="news-card-vertical-img-con">
      <img src="${data[num]["image_url"]}" alt="" />
    </div>
    <div class="news-card-vertical-information">
      <h6 class="side-news-without-img-category">
      ${query}
      </h6>
      <h4 class="news-card-vertical-information-title">
      ${data[num]["title"]}
      </h4>
      <h6 class="news-card-vertical-information-description">
      ${data[num]["description"]}
      </h6>
      <h6 class="news-card-vertical-information-date">
      ${data[num]["pubDate"]}
      </h6>
    </div>
  </div>
    `
    withImg += element
  }

  document.getElementById("newslist-body").innerHTML += withImg



}