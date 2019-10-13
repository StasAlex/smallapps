$(document).ready(function () {
  // Main Screen carousel
  $(".slide_one").owlCarousel({
    items: 1,
    loop: true,
    // autoplay: true,
    smartSpeed: 1000,
    autoplayTimeout: 3000,
    navigation: true,
    dots: false,
    autoplayHoverPause: true
  });

 // Gallery carousel
  $(".slide_two").owlCarousel({
    items: 3,
    loop: true,
    autoplay: true,
    smartSpeed: 1000,
    autoplayTimeout: 3000,
    nav: true,
    dots: false,
    autoplayHoverPause: true
  });


  //Features Tabs
  $(".tabs_menu li").click(function (event) {
    event.preventDefault();
    $('.tabs_menu .active_li').removeClass('active_li');
    $(this).addClass('active_li');

    var tab = $(this).attr('href');

    $('.tab').not(tab).css('display', 'none');
    $(tab).fadeIn(400);
    $('.icon_custom').removeClass('icon_active');
    $(this.querySelector('.icon_custom')).addClass('icon_active');
  })


  // Плавная прокрутка к якорю
  $("#menu").on("click", "a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();
    //забираем идентификатор бока с атрибута href
    var id = $(this).attr('href'),
    //узнаем высоту от начала страницы до блока на который ссылается якорь
    height = $(id).offset().top;
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({
      scrollTop: height
    }, 1000);

  });

  // Testimonials carousel
  $(".slide_three").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    smartSpeed: 1000,
    autoplayTimeout: 3000,
    dots: true,
    autoplayHoverPause: true
  });

  //Toggle responsive menu
  $('#resp_menu_close').click( function (){
    $('.nav__menu_responsive').fadeOut();
  });
  $('#resp_menu_open').click( function (){
    $('.nav__menu_responsive').fadeIn();
  });

});