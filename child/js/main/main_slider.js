$(document).ready(function () {
  $('#slider__box').slick({
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    speed: 1500,
    fade: true,
    responsive: [
      {
        breakpoint: 760,
        settings: {
          autoplay: false,
        },
      },
    ],
  });
});
