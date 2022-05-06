const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 10000000,
      disableOnInteraction: false,
    },
    spaceBetween: 100,
    lazy:true,
    pagination: {
      el: '.swiper-pagination',
    },
  
  });
  

export {swiper}