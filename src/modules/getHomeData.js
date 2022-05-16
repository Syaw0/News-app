const sortedData = {
  sport: {},
  world: {},
  top: {
    withImg: {},
    withoutImg: {},
  },
};
//
//
//
const apiKey = `pub_7313ee5dfab47f7ce6c7640e80c136286353`;

async function fetching(url) {
  try {
    let response = await fetch(url);
    let data = await response.json();
    return data["results"];
  } catch (err) {
    console.log(err)
    throw "somthing happen";
  }
}

async function getSportsData() {
  try {
    for (let i = 0; i != 20; i++) {
      if (Object.keys(sortedData["sport"]).length >= 10) {
        return;
      }
      let url = ` https://newsdata.io/api/1/news?apikey=${apiKey}&language=en&category=sports&page=${i}`;
      let data = await fetching(url);

      for (let i in data) {
        if (data[i]["image_url"] != null) {
          sortedData["sport"][Object.keys(sortedData["sport"]).length] = data[i];
        }
      }
    }
  } catch (err) {
    return console.error(err);
  }
}

async function getWorldData() {
  try {
    for (let i = 0; i != 20; i++) {
      if (Object.keys(sortedData["world"]).length >= 10) {
        return;
      }
      let url = ` https://newsdata.io/api/1/news?apikey=${apiKey}&language=en&category=world&page=${i}`;
      let data = await fetching(url);

      for (let i in data) {
        if (data[i]["image_url"] != null) {
          sortedData["world"][Object.keys(sortedData["world"]).length] = data[i];
        }
      }
    }
  } catch (err) {
    console.error(err);
  }
}

async function getTopData() {
  try {
    for (let i = 0; i != 30; i++) {
      if (Object.keys(sortedData["top"]["withImg"]).length >= 30) {
        return;
      }
      let url = ` https://newsdata.io/api/1/news?apikey=${apiKey}&language=en&page=${i}`;
      let data = await fetching(url);
      console.log("im here1");
      for (let i in data) {
        if (data[i]["image_url"] != null) {
          sortedData["top"]["withImg"][Object.keys(sortedData["top"]["withImg"]).length] = data[i];
        } else {
          sortedData["top"]["withoutImg"][Object.keys(sortedData["top"]["withoutImg"]).length] = data[i];
        }
      }
    }
  } catch (err) {
    console.error(err);
  }
}

async function getHomeData() {
  try {
    await getSportsData();
    await getWorldData();
    await getTopData();
    console.log("im here 3");
    return sortedData;
  } catch (err) {
    throw "error happen";
  }
}

export { getHomeData , fetching , apiKey };
