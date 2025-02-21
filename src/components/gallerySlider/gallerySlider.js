$('#gallerySlider').slick({
  dots: true,
  arrows: true,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  variableWidth: true,
  speed: 2000,
  autoplay: true,
  prevArrow:
    '<button class="gallerySlider__btn gallerySlider__btnprev"><img src="../images/ico/chevron-left.svg" loading="lazy" alt="" /></button>',
  nextArrow:
    '<button class="gallerySlider__btn gallerySlider__btnnext"><img src="./images/ico/chevron-right.svg" loading="lazy" alt="" /></button>',
  responsive: [
    {
      breakpoint: 1201,
      settings: {
        slidesToShow: 4,
      },
    },
  ],
});
