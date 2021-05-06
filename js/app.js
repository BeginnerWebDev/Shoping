const navSlider = ()=> {
    const nav= document.querySelector('nav');
    const burger = document.querySelector('.burger');
    const header = document.querySelector('header');

    // console.log(navLinks);
    // console.log(burger);

    burger.addEventListener('click' , ()=> {
        header.classList.toggle('header-active');
        nav.classList.toggle('nav_active');
        burger.classList.toggle('burger_active');
        burger.classList.toggle('toggle');
    });
};

navSlider();


const hero_swiper = new Swiper('.hero-slider', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    loop: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    // autoplay: {
    //   delay: 2500,
    // },
    spaceBetween: 30,
  });


  const testimonial_swiper = new Swiper('.testimonial-slider', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true,
});