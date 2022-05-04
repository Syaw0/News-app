export function scroll(){
    let navHeader= document.getElementById("header-nav")
    navHeader.addEventListener("wheel", (e)=>{
        navHeader.scrollLeft += e.deltaY
    })
}