$(document).ready(function() {
   $('.photos__slider').slick({
      dots: true,
      slidesToShow: 3,
      speed: 1000,
      waitForAnimate: false,
      responsive: [
         {
            breakpoint: 376,
            settings: {
               slidesToShow: 3,
               vertical: true,
               verticalSwiping: true,
               speed: 100,
               arrows: false,
               dots: false
            }
         }
      ]
   });
   $('.news__slider').slick({
      dots: true,
      slidesToShow: 1,
      speed: 1000,
      fade: true,
      waitForAnimate: false
   });

   $('.burger').click(function(event) {
      $('.burger,.header__list').toggleClass('active');
      $('body').toggleClass('lock');
   });
});

