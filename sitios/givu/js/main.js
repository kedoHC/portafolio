 /************************************
************* Menu movil **************
**************************************/
 function toggleMobileMenu() 
  {
    var $mobileMenu = $('#mobile-main-menu'); 
    $mobileMenu.slideToggle('fast');
  }

  $(document).ready(function() {
    $('#mobile-menu-button').on('click', toggleMobileMenu);
  });
/************************************
************** Scroll ***************
**************************************/

  $(document).ready(function() {

    $("#menu-inicio").click(function() {
      $('html,body').animate({scrollTop: ($("#carousel-example-generic").offset().top) - 100}, 1000);
    });
    $("#menu-servicios").click(function() {
      $('html,body').animate({scrollTop: 170 + $("#fabricantes").offset().top}, 1000);
    });
     $("#menu-acerca").click(function() {
      $('html,body').animate({scrollTop: 500 + $("#servicios2").offset().top}, 1000);
    });
     $("#menu-equipo").click(function() {
      $('html,body').animate({scrollTop: 180 + $("#acerca-de").offset().top}, 1000);
    });
     $("#menu-contacto").click(function() {
      $('html,body').animate({scrollTop: 400 + $("#equipo").offset().top}, 1000);
    });

     //*****Scroll dispositivos mobiles******

     $("#mobile-menu-casos-exito").click(function() {
      $('html,body').animate({scrollTop: $("#casos-exito").offset().top}, 2000);
    });
    $("#mobile-menu-noticias").click(function() {
      $('html,body').animate({scrollTop: $("#noticias-eventos").offset().top}, 2000);
    });
     $("#mobile-menu-eventos").click(function() {
      $('html,body').animate({scrollTop: $("#eventos").offset().top}, 2000);
    });
     $("#mobile-menu-login").click(function() {
      $('html,body').animate({scrollTop: $("#login").offset().top},2000);
    });
  });
/**************************************
************ Scroll Reveal ************
**************************************/


