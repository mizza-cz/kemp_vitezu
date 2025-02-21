$('#postsSlider').slick({
  dots: false,
  arrows: false,
  autoplay: true,
  speed: 3000,
  slidesToShow: 4,
  slidesToScroll: 1,
  infinite: false,

  responsive: [
    {
      breakpoint: 1101,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 871,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 570,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});
