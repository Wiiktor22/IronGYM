$('.burger, .close_burger').on('click', function(){
    $('nav').toggleClass('on');
});

$('nav li a').on('click', function (){
  const goToSection = "#" + $(this).attr('class');
  $('body, html').animate({
    scrollTop: $(goToSection).offset().top
  }, 500)
  $('nav').removeClass('on');
})

$(window).scroll(function(){
  if($(this).scrollTop() > 110){
    $('#topBtn').fadeIn();
  }
  else {
    $('#topBtn').fadeOut();
  }
})

$('#topBtn').on('click', function(){
  $('html, body').animate({
    scrollTop: 0
  }, 800)
})

// SWIPER - TRAINING PLANS
var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 20,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows : true,
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });