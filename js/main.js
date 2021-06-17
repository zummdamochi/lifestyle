'use strict';

{

  // ヘッダー（スクロールで色が変わる）
  const header = document.querySelector('.header');
  const nav = document.querySelector('nav');
  

  window.addEventListener('scroll', () => {
    header.classList.add('change');
    nav.classList.add('change');
  });

  $('.topImage').slick({
      centerMode: true,
      centerPadding: '200px',
      autoplay: true,
      autoplaySpeed: 3000,
      speed: 1000,
      slidesToShow: 1,
      arrows: true,
      dots: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ]
  });
    
}