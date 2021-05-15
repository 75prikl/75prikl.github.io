// HTML document is loaded
jQuery( window ).on( "load", function() {
  "use strict";


// var preloader
var loader = jQuery( '.loader' );
var bgpreloader = jQuery( '#preloader' );  

// start function fadeOut preloader when condition window has been load
loader.fadeOut( 'slow', function() {
    "use strict";

    // opening slideup
    setTimeout(function() {
      bgpreloader.hide("slide", { direction: "left" }, 300);
    }, 200);

    // animated transition & scroll onStep
    onStep();

});
// end function

// var navigation
var menublock = jQuery('#menu-block');
var navicon = jQuery('#nav-icon');
var navclasmenu = jQuery('.nav-icon')
var dropdwown = jQuery(".dropdown-container");
var blockmain = jQuery(".block-main");
var menuline = jQuery(".menu-line, .menu-line1, .menu-line2");

// full block menu
  navicon.on("click", function(e) {
    menublock.toggle('slide', {
            direction: 'right'
        }, 'fast');
    jQuery(this).toggleClass('open');
    blockmain.fadeToggle(300);
    menuline.toggleClass('black');
    });
  
  // block-main close block menu
  blockmain.on("click", function(e) {
    jQuery(this).fadeToggle(300);
  menublock.toggle('slide', {
            direction: 'right'
        }, 'fast');
    navicon.toggleClass('open');
    menuline.toggleClass('black');
   });

  // clasic menu mobile
  navclasmenu.on("click", function(e) {
    menumobile.slideToggle('fast');
    });

  //dropdown
  jQuery('.dropdown').each(function() {
     var $dropdown = $(this);
     jQuery("a.dropdown-link i", $dropdown).on('click', function(e) {
      e.preventDefault();
      var $divspan = jQuery("a.dropdown-link i", $dropdown);
      $(this).children('span.pls, span.min').toggle();
      var $div = jQuery(".dropdown-container", $dropdown);
      $div.slideToggle('fast');
      return false;
    });
     $('html').on("click", function(e) {
        jQuery('.dropdown-container').slideUp('fast');
        jQuery('span.pls').show();
        jQuery('span.min').hide();
      });
   });

  $(".wrap-menu-child").mCustomScrollbar({
    theme:"dark",
    mouseWheelPixels: 80,
    scrollInertia: 0
  });



  // contact form


  // contact-1 form



});
// HTML document is loaded end


$(document).ready(function() {

    // animsition
    $('.animsition-overlay').animsition({
      inClass: 'overlay-slide-in-left',
      outClass: 'overlay-slide-out-right',
      overlay : true,
      overlayClass : 'animsition-overlay-slide',
      overlayParentElement : 'body'
    })
    .one('animsition.inStart',function(){
      $('body').removeClass('bg-init');
      console.log('event -> inStart');
    })
    .one('animsition.inEnd',function(){
      $('.target', this).html('Callback: End');
      console.log('event -> inEnd');
    })
    .one('animsition.outStart',function(){
      console.log('event -> outStart');
    })
    .one('animsition.outEnd',function(){
      $('.target', this).html('Callback: End');
      console.log('event -> outEnd');
    });

    // stick navbar
    $('.navbar-default-white').sticky();

    // owlCarousel expertnesses
    $("#owl-expertnesses").owlCarousel({
    margin:15,
    responsiveClass:true,
    dots : false,
    responsive:{
    0:{
        items:1,
        nav:true,
        stagePadding: 0
    },
    320:{
        items:1,
        nav:true,
        stagePadding: 0
    },
    414:{
        items:1,
        nav:true,
        loop:false,
        stagePadding: 0
    },
    800:{
        items:2,
        nav:true,
        loop:false,
        stagePadding: 0
    },
    1024:{
        items:3,
        nav:true,
        loop:false,
        stagePadding: 0
     }
    },
    nav:true,
    navText : ['<i class="fa fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-chevron-right" aria-hidden="true"></i>']
    });

    // owlCarousel logo
    $("#owl-logo").owlCarousel({
    margin:60,
    responsiveClass:true,
    dots : false,
    responsive:{
    0:{
        items:1,
        nav:true,
        stagePadding: 0
    },
    320:{
        items:1,
        nav:false,
        stagePadding: 0
    },
    414:{
        items:2,
        nav:false,
        loop:false,
        stagePadding: 0
    },
    800:{
        items:3,
        nav:false,
        loop:false,
        stagePadding: 0
    },
    1024:{
        items:4,
        nav:false,
        loop:false,
        stagePadding: 0
     }
    },
    nav:true,
    navText : ['<i class="fa fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-chevron-right" aria-hidden="true"></i>']
    });

    // owlCarousel projects
    $("#owl-projects").owlCarousel({
    margin:0,
    responsiveClass:true,
    dots : false,
    responsive:{
    0:{
        items:1,
        nav:true,
        stagePadding: 0
    },
    500:{
        items:1,
        nav:true,
        stagePadding: 0
    },
    600:{
        items:2,
        nav:true,
        loop:false,
        stagePadding: 0
    },
    800:{
        items:3,
        nav:true,
        loop:false,
        stagePadding: 0
    },
    1024:{
        items:4,
        nav:true,
        loop:false,
        stagePadding: 0
     }
    },
    nav:true,
    navText : ['<i class="fa fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-chevron-right" aria-hidden="true"></i>']
    });

    // owlCarousel team
    $("#owl-team").owlCarousel({
    margin:15,
    responsiveClass:true,
    dots : false,
    responsive:{
    0:{
        items:1,
        nav:true,
        stagePadding: 0
    },
    320:{
        items:1,
        nav:true,
        stagePadding: 0
    },
    414:{
        items:1,
        nav:true,
        loop:false,
        stagePadding: 0
    },
    800:{
        items:2,
        nav:true,
        loop:false,
        stagePadding: 0
    },
    1024:{
        items:3,
        nav:true,
        loop:false,
        stagePadding: 0
     }
    },
    nav:true,
    navText : ['<i class="fa fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-chevron-right" aria-hidden="true"></i>']
    });

    // owlCarousel news
    $("#owl-news").owlCarousel({
    margin:15,
    responsiveClass:true,
    dots : false,
    responsive:{
    0:{
        items:1,
        nav:true,
        stagePadding: 0
    },
    320:{
        items:1,
        nav:true,
        stagePadding: 0
    },
    414:{
        items:1,
        nav:true,
        loop:false,
        stagePadding: 0
    },
    800:{
        items:2,
        nav:true,
        loop:false,
        stagePadding: 0
    },
    1024:{
        items:3,
        nav:true,
        loop:false,
        stagePadding: 0
     }
    },
    nav:true,
    navText : ['<i class="fa fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-chevron-right" aria-hidden="true"></i>']
    });

  });

