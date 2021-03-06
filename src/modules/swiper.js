function bannerSwiper(){
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    spaceBetween: 100,
    lazy:true,
    pagination: {
      el: '.swiper-pagination',
    },
  });
  return swiper
}



export {bannerSwiper}