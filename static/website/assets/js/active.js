(function ($) {
	"use strict";
	
    jQuery(document).ready(function($){
		
		/*Popover*/
		$('[data-toggle="popover"]').popover(
    		{
			html : true,
			trigger: 'focus',
			//trigger :'manual',
			content: function() {
				var content = $(this).attr("data-popover-content");
				return $(content).children(".popover-body").html();
			}
	    });
		
		$('[data-toggle="tooltip"]').tooltip();
		
		/*For mobile menu*/
		$("ul#navigation").slicknav({
            prependTo: ".mobile-menu-wrapper"
        });
		
		/*Fancybox option*/
		$('[data-fancybox="images"]').fancybox({
		  buttons : [ 
			'slideShow',
			'share',
			'zoom',
			'fullScreen',
			'close',
			'thumbs'
		  ],
		  thumbs : {
			//autoStart : true
		  }
		});
		 
		//Main Slider
        $(".homepage-slides").owlCarousel({
            items: 1,
            nav: true,
            dots: false,
            autoplay: true,
            loop: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            mouseDrag: false,
            touchDrag: false,
			animateOut: 'fadeOut',
        });
        
        $(".homepage-slides").on("translate.owl.carousel", function(){
            $(".single-slide-item h2, .single-slide-item h3").removeClass("animated fadeInUp").css("opacity", "0");
            $(".single-slide-item p").removeClass("animated fadeInDown").css("opacity", "0");
        });
        
        $(".homepage-slides").on("translated.owl.carousel", function(){
            $(".single-slide-item h2, .single-slide-item h3").addClass("animated fadeInUp").css("opacity", "1");
            $(".single-slide-item p").addClass("animated fadeInDown").css("opacity", "1");
        });
		
		//Upcoming Causes
		$(".upcoming-causes").owlCarousel({
            items: 3,
            nav: true,
			navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            dots: false,
            autoplay: false,
            loop: false,
            mouseDrag: false,
            touchDrag: true,
			responsiveClass:true,
			responsive:{
				0:{
					items:1,
				},
				580:{
					items:2,
				},
				992:{
					items:3,
				}
			}
        });
		
		//Vounteer
		$(".volunteer-section").owlCarousel({
            items: 4,
            nav: false,
			navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            dots: true,
            autoplay: false,
            loop: false,
            mouseDrag: false,
            touchDrag: true,
			responsiveClass:true,
			responsive:{
				0:{
					items:1,
				},
				480:{
					items:2,
				},
				768:{
					items:3,
				},
				1000:{
					items:4,
				}
			}
        });
		
		//News
		$(".news-carousel").owlCarousel({
            items: 1,
            nav: false,
			navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            dots: true,
            autoplay: false,
            loop: false,
            mouseDrag: false,
            touchDrag: true
        });
		
		//testimonial
		$(".testimonial").owlCarousel({
            items: 2,
            nav: false,
			navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            dots: true,
            autoplay: true,
            loop: true,
            mouseDrag: false,
            touchDrag: true,
			responsiveClass:true,
			responsive:{
				0:{
					items:1,
					nav:false
				},
				1000:{
					items:2,
					nav:false
				}
			}
        });
		
		//WOW animation
		new WOW().init();
		
		//Custom file upload
		$(document).on('click', '.browse', function(){
		  var file = $(this).parent().parent().parent().find('.inputfile');
		  file.trigger('click');
		});
		$(document).on('change', '.inputfile', function(){
		  $(this).parent().find('.form-control').val($(this).val().replace(/C:\\fakepath\\/i, ''));
		});
		
		
		//Page Scroll
		$('a[href^="#"]').on('click', function(event) {
		
			var target = $(this.getAttribute('href'));
		
			if( target.length ) {
				event.preventDefault();
				$('html, body').stop().animate({
					scrollTop: target.offset().top
				}, 1000);
			}
		
		});
		$('.home-nav #navigation > li > a').on('click', function(e) {
			e.preventDefault();
			$('li.nav-active').removeClass('nav-active');
			$(this).parent('li').addClass('nav-active');
		});
		
		$(".scrollup").on("click", function() {
			$("body,html").stop(false, false).animate({
				scrollTop: 0
			}, 800);
			return false;
		});
		
		$(window).on('scroll',function() {
		  if ($(this).scrollTop() > 0){  
			  $('header').addClass("sticky");
		     } else {
			  $('header').removeClass("sticky");
		   }
		   
		   if ($(this).scrollTop() > 200) {
				$('.scrollup').fadeIn();
			} else {
				$('.scrollup').fadeOut();
			}
		   
		});
		
		/*Counter*/
		$('.counter').each(function() {
		  var $this = $(this),
			  countTo = $this.attr('data-count');
		  
		  $({ countNum: $this.text()}).animate({
			countNum: countTo
		  },
		
		  {
			duration: 8000,
			easing:'linear',
			step: function() {
			  $this.text(Math.floor(this.countNum));
			},
			complete: function() {
			  $this.text(this.countNum);
			}
		
		  });  
		});
		
		/*Youtube Video*/
		$('[data-youtube]').youtube_background({
	      'load-background': false
	 	 });			

    });


    jQuery(window).on('load',function(){
		
	  setTimeout(function(){
	    //jQuery(".site-preloader-wrapper").fadeOut(300);
		$('body').addClass('loaded');
	  }, 3000);	

    });

}(jQuery));	