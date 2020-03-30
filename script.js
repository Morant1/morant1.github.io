$(document).ready(function() {
 /*For sticky navigation*/   
    $('.js--section-features').waypoint(function(direction) {
      if (direction =="down") {
        $('nav').removeClass('opener');
        $('nav').addClass('sticky');
    } else {
        $('nav').removeClass('sticky');
        $('nav').addClass('opener');
    }}, {offset: '60px;'
    });
    
    $('.js--scroll-to-plans').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-cities').offset().top},1000);
    });
    
    $('.js--scroll-to-me').click(function() {
        $('html, body').animate({scrollTop: $('.js--me').offset().top},1000)
    });
    
        $('.js--scroll-to-contact').click(function() {
        $('html, body').animate({scrollTop: $('.js--contact').offset().top},1000);
    });
    
    
    /*Animation on scroll*/
    
   $('.js--wp-1').waypoint(function(direction){
       $('.js--wp-1').addClass('animated fadeInUp');
   } , {offset: '50%'}
   );
    
    
    $('.js--wp-2').waypoint(function(direction){
       $('.js--wp-2').addClass('animated fadeIn');
   } , {
        offset: '50%'
    });
    
    
    
 $('.js--nav--icon').click(function() {
     var nav= $('.js--main-nav');
     nav.slideToggle(200)
 });

    

    
});  