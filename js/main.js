$(document).ready(function () {
  // Main Screen carousel
  $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplaySpeed: 1500 / true,
    dots: false,
    autoplayHoverPause: true
  });

  //Features Tabs
  $(".tabs_menu li").click(function (event) {
    event.preventDefault();
    $('.tabs_menu .active').removeClass('active');
    $(this).addClass('active');

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



});