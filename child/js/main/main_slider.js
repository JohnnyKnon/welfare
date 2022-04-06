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
  // Poster Slider
  $('.info__slider').slick({
    autoplay: true,
    infinite: true,
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 3,
    prevArrow: $('.prevArrow'),
    nextArrow: $('.nextArrow'),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 625,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 1,
        },
      },
    ],
  });
  // affiliated organization
  $('#others__slider').slick({
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 840,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 1,
        },
      },
    ],
  });
});
