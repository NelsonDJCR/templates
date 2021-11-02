(function($) {
	
	"use strict";


    // Back to top
    $.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });
     
    // Bootstrap Tooltip
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })
	
    //js code for mobile menu toggle
   $(".menu-toggle").on("click", function() {
       $(this).toggleClass("is-active");
   });
	

   // Hero Slider
   $('.hero-content').owlCarousel({
        loop:true,
        dots: false,
        autoplay: true,
        mouseDrag: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplayTimeout: 10000,
        smartSpeed: 1000,
        responsive:{
            0:{
                items:1,
            },
            576:{
                items:1
            },
            991:{
                items:1
            },
            1024:{
                items:1
            },
            1199:{
                items:1
            }
        }
    });

   // Product Slider
   $('.product-slide').owlCarousel({
        loop:true,
        dots: false,
        autoplay: true,
        mouseDrag: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplayTimeout: 10000,
        smartSpeed: 1000,
        margin: 15,
        nav:true,
        navText: [
            '<i class="fa fa-angle-left"></i>',
            '<i class="fa fa-angle-right"></i>'
        ],
        responsive:{
            0:{
                items:1,
            },
            576:{
                items:2
            },
            991:{
                items:3
            },
            1024:{
                items:3
            },
            1199:{
                items:4
            }
        }
    });



    
    // screenshot popup

    $(".screenshot-gallery").each(function () {
        $(this).find(".popup-screenshot").magnificPopup({
            type: "image",
            gallery: {
                enabled: true
            }
        });
    }); 

    $('.video-popup').magnificPopup({
        type: 'iframe',
    });

    //Counter-JS
    $('.count').counterUp({
        delay: 10,
        time: 2000
    });




    // Preloader Js
    $(window).on('load', function(){
      $('.preloader').fadeOut(1000); // set duration in brackets    
    });


    // Wow js active
    // new WOW().init(); 


    // Full Screen Search
    $(".search-btn").on('click', function(){
        $(".search-full").removeClass("close");
        $(".search-full").addClass("open");
    })

    $(".search-close").on('click', function(){
        $(".search-full").removeClass("open");
        $(".search-full").addClass("close");
    })
    


    //Faq area Accordion
	$('.accordion > li:eq(0) a').addClass('active').next().slideDown();

	$('.accordion a').on( 'click',function(j) {
		var dropDown = $(this).closest('li').find('p');

		$(this).closest('.accordion').find('p').not(dropDown).slideUp();

		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
		} else {
			$(this).closest('.accordion').find('a.active').removeClass('active');
			$(this).addClass('active');
		}

		dropDown.stop(false, true).slideToggle();

		j.preventDefault();
	});

	
})(jQuery);