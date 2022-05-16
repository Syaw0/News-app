import {fetching , apiKey} from "./getHomeData"

async function listData(query){
  let resdata = {}
  try {
      for (let i = 0; i != 200; i++) {
          let url = `https://newsdata.io/api/1/news?apikey=${apiKey}&language=en&category=${query}&page=${i}`
          let data = await fetching(url);
          
          for (let i in data) {
              if (data[i]["image_url"] != null) {
                  resdata[Object.keys(resdata).length] = data[i];
                  
              }
          }
          if (Object.keys(resdata).length >= 100) {
            return resdata;
          }
      }
    } catch (err) {
      return console.error(err);
    }
    return sortedData
}

async function search(query){
  let resdata = {}
  try {
      for (let i = 0; i != 50; i++) {
          let url = `https://newsdata.io/api/1/news?apikey=${apiKey}&language=en&q=${query}&page=${i}`
          let data = await fetching(url);
          console.log(data)
          for (let i in data) {
              if (data[i]["image_url"] != null) {
                  resdata[Object.keys(resdata).length] = data[i];
                  
              }
          }
          if (Object.keys(resdata).length >= 20) {
            return resdata;
          }
      }
    } catch (err) {
      return console.error(err);
    }
    return sortedData
}



async function getList(query , stat) {
  console.log(query , stat)
    try {
      let data
      if (stat == "search"){
        data = await search(query)
      }else{
        data  = await listData(query)
      }
      return data
    } catch (err) {
      throw "error happen";
    }
  }

export {getList}