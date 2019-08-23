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

  $(".menu-item a").on("click", function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top - 100
        },
        500,
        function() {
          return false;
        }
      );
    }
  });

  var menuOpen = false;
  $(window).scroll(function() {
    if ($(window).innerWidth() > 576) {
      if (!menuOpen) {
        if ($(this).scrollTop() > 200) {
          $("nav.navbar #navbar").css({
            transition: "all .1s",
            height: "100%"
          });
          $("nav.navbar #navbar ul.navbar-nav>li>a").css("font-size", "14px");
          $("nav.navbar").css({
            transition: "all .1s",
            height: "60px",
            padding: "4px 0 0"
          });
          $("#logo").css({
            width: "60%",
            margin: "5px 0 0",
            padding: "10px"
          });
        } else {
          $("nav.navbar").css({
            transition: "all .1s",
            background: "#fff",
            height: "110px",
            padding: "8px 0"
          });
          $("#logo").css({
            width: "90%",
            margin: "10px",
            padding: "20px"
          });
          $("nav.navbar #navbar ul.navbar-nav>li>a").css("font-size", "16px");
        }
      } else {
        $("#navbar").css({
          height: "100%!important"
        });
      }
    }
  });

  $(".navbar-toggle").click(function() {
    $("nav.navbar #navbar.collapse").css({
      left: 0,
      overflow: "hidden",
      transition: "all .3s linear"
    });
    return (menuOpen = true);
  });
  $(".closeBtn").click(function() {
    $("nav.navbar #navbar.collapse").css({
      left: "-1000%",
      overflow: "hidden",
      transition: "all .3s linear"
    });
    return (menuOpen = false);
  });

  $('.modal button').on('click',function(){
    $('.modal').fadeOut();
  });
  $('.questionBtn').on('click',function(){
    $('.modal').fadeIn();
  });
  $('.onFocusBtnShow input').on('focus', function(){
    $('.questionBtn').fadeIn();
  })
  $('.tel input').on('focus', function(){
    $('.questionBtn').fadeOut();
  })


  $('.confirmCode').mask('999999');
  $("#phone").inputmask("(99) 999-99-99", {showMaskOnFocus: true, showMaskOnHover: false,autoclear: false});

  $('#reload').on('click',function(){
    location.reload();
  })

  // $('.number').on('click',function(){
  //   $('.number__content').toggle();
  //   // alert('test')
  // })
});


$(document).on('load', function(){
  $('.innerBlock').fadeIn(3500);
})