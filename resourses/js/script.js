$(document).ready(function(){

/* Sticky navigation*/ 
    
$('.js--section-features').waypoint(function(direction) {
        if (direction == "down") {
            $('header') .addClass('sticky');
            
        } else {
            $('header').removeClass('sticky')
        }
    
    }, {
      offset: '25%;'
});
    
/* scroll on buttons */
    $('.js--btn-get-started').click(function() {
      $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
});
 
    
    /* Smooth Scrolling */
    $('a[href*="#howitworks"]').on('click', function(e) {
  e.preventDefault()

  $('html, body').animate(
    {
      scrollTop: $($(this).attr('href')).offset().top -100,
    },
    500,
    'linear'
  )
})
    
     $('a[href*="#partners"]').on('click', function(e) {
  e.preventDefault()

  $('html, body').animate(
    {
      scrollTop: $($(this).attr('href')).offset().top  -100,
    },
    500,
    'linear'
  )
}),
    
    
      $('a[href*="#about"]').on('click', function(e) {
  e.preventDefault()

  $('html, body').animate(
    {
      scrollTop: $($(this).attr('href')).offset().top  -100,
    },
    500,
    'linear'
  )
})
    
    /* Animations on Scroll */
    $('.js--wp-1').addClass('animated jackInTheBox');
    
  $('.js--wp-2').waypoint(function(direction) {
        
        $('.js--wp-2').addClass('animated slideInRight ');
        
    }, {
      offset: '50%'
});
    
    
    
    /* Mobile navigation */    
    $('.js--mobile-nav-icon').on('click',function(e) {
        e.preventDefault();
        $(".js--burger-menu").fadeIn(300);
    });

   $('.js--close-menu').on('click',function(e) {
        e.preventDefault();
        $(".js--burger-menu").fadeOut(200);
    });
    
    $('.js--burger-nav').on('click',function(e) {
        e.preventDefault();
        $(".js--burger-menu").fadeOut(200);
    });
       
});

