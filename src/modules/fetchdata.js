
//     // let url =  `https://newsdata.io/api/1/news?apikey=pub_70268d984d9770f5a09a3c49c58c97a03e8b&`
// function fetchdata(){

// let imglist = []

// for(let i = 0 ; i != 2 ; i++){
//     let url = ` https://newsdata.io/api/1/news?apikey=pub_71863f9e1605fcfb63b7320b42f9c21e40da&language=en&category=sports&page=${i}`
// setTimeout(()=>{
//     fetch(url)
//     .then(resp => resp.json())
//     .then(resdata => {
//         console.log(resdata)
//         for(let i in resdata["results"]){
//             if(resdata["results"][i]["image_url"] != null){
//                 imglist.push(resdata["results"][i]["image_url"])
//             }
//         }
//         console.log(imglist)
//     })
//     .catch(err => console.log(err))

// },1000)

// }
// console.log(imglist)
// }

// // function fetching(url){
// //     let data = {}

// //     return resdata
// // }

// export {fetchdata}