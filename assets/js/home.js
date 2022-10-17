$(document).ready(function () {
  $(".slider-home").slick({
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: "linear",
    arrows: true,
    prevArrow:
      "<button type='button' class='slick-prev pull-left' onClick='textAnimate()'><i class='fas fa-chevron-left'></i></i></button>",
    nextArrow:
      "<button type='button' class='slick-next pull-right' onClick='textAnimate()'><i class='fas fa-chevron-right'></i></button>",
  });
  $(".slider-feature").slick({
    arrows: false,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    customPaging: function (slider, index) {
      var num = index + 1;
      return '<span class="dot">' + num + "</span>";
    },
  });
  $(".uni-slider").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
  });
  $(".customer-slider").slick({
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
  });

  var btn = $("#buttonTop");
  console.log(btn);
  btn.on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "300");
  });
  textAnimate();
});

function textAnimate() {
  var textWrapper = document.querySelector(".ml2");
  textWrapper.innerHTML = textWrapper.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
  );
  anime.timeline({ loop: false }).add({
    targets: ".ml2 .letter",
    scale: [4, 1],
    opacity: [0, 1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70 * i,
  });
}
