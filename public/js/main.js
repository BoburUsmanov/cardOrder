$(document).ready(function() {
  var owl = $(".slider.owl-carousel");
  owl.owlCarousel({
    dots: true,
    navs: false,
    loop: true,
    items: 1,
    autoplay: false,
    autoplaySpeed: 0,
    autoplayTimeout: 5000
    // autoplayHoverPause:true
  });

  var title = $(".demo__title "),
    subtitle = $(".demo__subtitle"),
    text = $(" .demo__text"),
    img = $(" .demo__img"),
    overlay = $(".demo__overlay");

  var t1 = new TimelineMax({ paused: true });
  t1.from(title, 1, { y: -50, autoAlpha: 0 })
    .from(subtitle, 0.5, { autoAlpha: 0 })
    .from(text, 0.5, { y: 50, autoAlpha: 0 })
    .from(img, 1, { x: "-100%", autoAlpha: 0 })
    .from(overlay, 1, { scale: 0.5, autoAlpha: 0 }, "-=1");

  t1.play();

  owl.on("changed.owl.carousel", function(event) {
    t1.play(0);
  });


  $(".modal button").on("click", function() {
    $(".modal").fadeOut();
  });
  $(".questionBtn").on("click", function() {
    $(".modal").fadeIn();
  });
  $(".onFocusBtnShow input").on("focus", function() {
    $(".questionBtn").fadeIn();
  });
  $(".tel input").on("focus", function() {
    $(".questionBtn").fadeOut();
  });

  $(".confirmCode").mask("999999");
  $("#phone").inputmask("(99) 999-99-99", {
    showMaskOnFocus: true,
    showMaskOnHover: false,
    autoclear: false
  });

  // $("#reload").on("click", function() {
  //   location.reload();
  // });

});

$(document).on("load", function() {
  $(".innerBlock").fadeIn(3500);
});

