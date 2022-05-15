export function newsDetail(newsdata , navdata){
    console.log(newsdata)
    return AllDetail(newsdata , navdata)
}


function NewsData(newsdata){

    let creator = ""
    let content = ""
    let des = ""
    if(newsdata["creator"] != null){
        creator = newsdata["creator"][0]
    }else{
        creator = "anonymous"
    }
    
    if(newsdata["content"] != null){
        console.log("its not null content")
        content = newsdata["content"]
    }else{
        content = ""
    }
    
    if(newsdata["description"] != null){
        des = newsdata["description"]
    }else{
        des = ""
    }
    


let detail =`
<div id="news-detail-news">
    <button class="btn-inline " id="gobackhomebtn" >Go Back</button>

    <h1 id="news-detail-news-header">
        ${newsdata["title"]}
    </h1>
    <div id="news-detail-news-date-writer">
        <h5 id="news-detail-news-writer">
        ${creator}
        </h5>
        <h5 id="news-detail-news-date">
        ${newsdata["pubDate"]}
        </h5>
    </div>
    <div id="news-detail-news-img-con">
        <img src="${newsdata["image_url"]}" alt="">
    </div>
    <div id="news-detail-news-detail-con">
        <h5 id="news-detail-news-detail">
        ${des}
        ${content}
        </h5>
    </div>
    <div id="news-detail-news-footer">
        <div id="news-detail-news-footer-tags">

        </div>
        <button class="btn-raised " onclick="window.location.href='${newsdata["link"]}';">
            Follow On Source
        </button>
    </div>
</div>
`
return detail
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
    <fieldset id="news-detail-nav" class="home-sections side-topnew">
    <legend id="news-detail-side-legend" class="home-sections-legends">Top News</legend>
    
  
    ${withoutImg}
    
  
    <!-- side news with img -->
  
    ${withImg}
  
  </fieldset>`;
  
    return detail;
}

function AllDetail(newsdata , navdata){
    let detail=`
<div id="news-detail-con">
${NewsData(newsdata)}
${nav(navdata)}
</div>
`   
    return detail
}