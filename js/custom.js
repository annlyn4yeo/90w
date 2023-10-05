(function($) { "use strict";

	
	//Preloader
	
	$(window).on('load', function(e) { // makes sure the whole site is loaded
		$(".loader__figure").fadeOut(); // will first fade out the loading animation
		$(".loader").delay(500).fadeOut("slow"); // will fade out the white DIV that covers the website.
	})
	
	
	//Page Scroll to id
	
	$(window).on("load",function(){
				
		/* Page Scroll to id fn call */
		$(".pag-3d-work-wrap a,a[href='#top'],a[data-gal='m_PageScroll2id']").mPageScroll2id({
			highlightSelector:".pag-3d-work-wrap a",
			offset: 68,
			scrollSpeed:800
		});
				
		/* demo functions */
		$("a[rel='next']").on('click', function(e){
			e.preventDefault();
			var to=$(this).parent().parent("section").next().attr("id");
			$.mPageScroll2id("scrollTo",to);
		});
				
	});

	
	//Navigation

	var app = function () {
		var body = undefined;
		var menu = undefined;
		var menuItems = undefined;

		var init = function init() {
			body = document.querySelector('body');
			menu = document.querySelector('.menu-icon');
			menuItems = document.querySelectorAll('.nav__list-item');

			applyListeners();
		};

		var applyListeners = function applyListeners() {
			menu.addEventListener('click', function () {
				return toggleClass(body, 'nav-active');
			});
		};

		var toggleClass = function toggleClass(element, stringClass) {
			if (element.classList.contains(stringClass)) element.classList.remove(stringClass);else element.classList.add(stringClass);
		};

		init();
	}();
	
	
	/* Scroll Animation */
	
	window.scrollReveal = new scrollReveal();		
		
		
	//Parallax & fade on scroll	
	
	function scrollBanner() {
	  $(document).on('scroll', function(){
		var scrollPos = $(this).scrollTop();
		$('.parallax-fade-top').css({
		  'top' : (scrollPos/2)+'px',
		  'opacity' : 1-(scrollPos/450)
		});
	  });    
	}
	scrollBanner();
	
	
	//parallax hover tilt effect	
	
	$('.js-tilt').tilt({
		glare: false
	})	
	
	
	/* Parallax effect */
	
	if ($(window).width() > 991) {
		$().enllax();
	}
		

	
	$(document).ready(function() {
		
				
		//Tooltip

		$(".tipped").tipper();

	
		//Animeted Lines

		(function() {
			var lineMaker = new LineMaker({
					position: 'fixed',
					lines: [
						{top: 0, left: '-30px', width: 1, height: '100vh', color: '#e8e9e9', hidden: true, animation: { duration: 1000, easing: 'easeInOutExpo', delay: 100, direction: 'TopBottom' }},
						{top: 0, left: '0%', width: 1, height: '100vh', color: '#e8e9e9', hidden: true, animation: { duration: 1000, easing: 'easeInOutExpo', delay: 250, direction: 'TopBottom' }},
						{top: 0, left: 'calc(50% - 15px)', width: 1, height: '100vh', color: '#e8e9e9', hidden: true, animation: { duration: 1000, easing: 'easeInOutExpo', delay: 400, direction: 'TopBottom' }},
						{top: 0, left: 'calc(50% + 15px)', width: 1, height: '100vh', color: '#e8e9e9', hidden: true, animation: { duration: 1000, easing: 'easeInOutExpo', delay: 550, direction: 'TopBottom' }},
						{top: 0, left: '100%', width: 1, height: '100vh', color: '#e8e9e9', hidden: true, animation: { duration: 1000, easing: 'easeInOutExpo', delay: 700, direction: 'TopBottom' }},
						{top: 0, left: 'calc(100% + 30px)', width: 1, height: '100vh', color: '#e8e9e9', hidden: true, animation: { duration: 1000, easing: 'easeInOutExpo', delay: 850, direction: 'TopBottom' }},
					]
			});
			
			setTimeout(function() {
				disableButtons();
				lineMaker.animateLinesIn(enableButtons);
			}, 1000);
			
			var ctrls = [].slice.call(document.querySelectorAll('.actions > button'));
			ctrls.forEach(function(ctrl) {
				ctrl.setAttribute('disabled', true);
			});
			
			function enableButtons() {
				ctrls.forEach(function(ctrl) {
					ctrl.removeAttribute('disabled');
				});
			}

			function disableButtons() {
				ctrls.forEach(function(ctrl) {
					ctrl.setAttribute('disabled', true);
				});
			}

		})();

		
		//Scroll back to top
	
		var offset = 300;
		var duration = 400;
		jQuery(window).on('scroll', function() {
			if (jQuery(this).scrollTop() > offset) {
				jQuery('.scroll-to-top').fadeIn(duration);
			} else {
				jQuery('.scroll-to-top').fadeOut(duration);
			}
		});
				
		jQuery('.scroll-to-top').on('click', function(event) {
			event.preventDefault();
			jQuery('html, body').animate({scrollTop: 0}, duration);
			return false;
		})	

		
		//Social show on scroll
	
		var offset = 300;
		var duration = 400;
		jQuery(window).on('scroll', function() {
			if (jQuery(this).scrollTop() > offset) {
				jQuery('.social-fixed-left').fadeIn(duration);
			} else {
				jQuery('.social-fixed-left').fadeOut(duration);
			}
		});

		
		//Line pagination show on scroll
	
		var offset = 400;
		var duration = 400;
		jQuery(window).on('scroll', function() {
			if (jQuery(this).scrollTop() > offset) {
				jQuery('.pag-3d-work-wrap').fadeIn(duration);
			} else {
				jQuery('.pag-3d-work-wrap').fadeOut(duration);
			}
		});
		
		
		/* Video */
		
		$(".container").fitVids();
						
		$('.vimeo a,.youtube a').on('click', function (e) {
			e.preventDefault();
			var videoLink = $(this).attr('href');
			var classeV = $(this).parent();
			var PlaceV = $(this).parent();
			if ($(this).parent().hasClass('youtube')) {
				$(this).parent().wrapAll('<div class="video-wrapper">');
				$(PlaceV).html('<iframe frameborder="0" height="333" src="' + videoLink + '?autoplay=1&showinfo=0" title="YouTube video player" width="547"></iframe>');
			} else {
				$(this).parent().wrapAll('<div class="video-wrapper">');
				$(PlaceV).html('<iframe src="' + videoLink + '?title=0&amp;byline=0&amp;portrait=0&amp;autoplay=1&amp;color=6dc234" width="500" height="281" frameborder="0"></iframe>');
			}
		});	
		

		/* Portfolio fade elements on hover */
		
		$('#projects-grid.elements-fade-on-hover').children().hover(function() {
		$(this).siblings().stop().fadeTo(400,0.2);
		}, function() {
			$(this).siblings().stop().fadeTo(400,1);
		});


		/* Portfolio Sorting */

		(function ($) { 
		
		
			var container = $('#projects-grid');
			
			
			function getNumbColumns() { 
				var winWidth = $(window).width(), 
					columnNumb = 1;
				
				
				if (winWidth > 1500) {
					columnNumb = 2;
				} else if (winWidth > 1200) {
					columnNumb = 2;
				} else if (winWidth > 900) {
					columnNumb = 2;
				} else if (winWidth > 600) {
					columnNumb = 1;
				} else if (winWidth > 300) {
					columnNumb = 1;
				}
				
				return columnNumb;
			}
			
			
			function setColumnWidth() { 
				var winWidth = $(window).width(), 
					columnNumb = getNumbColumns(), 
					postWidth = Math.floor(winWidth / columnNumb);

			}
			
			$('#portfolio-filter #filter a').on('click', function () { 
				var selector = $(this).attr('data-filter');
				
				$(this).parent().parent().find('a').removeClass('current');
				$(this).addClass('current');
				
				container.isotope( { 
					filter : selector 
				});
				
				setTimeout(function () { 
					reArrangeProjects();
				}, 300);
				
				
				return false;
			});
			
			function reArrangeProjects() { 
				setColumnWidth();
				container.isotope('reLayout');
			}
			
			
			container.imagesLoaded(function () { 
				setColumnWidth();
				
				
				container.isotope( { 
					itemSelector : '.portfolio-box', 
					layoutMode : 'masonry', 
					resizable : false 
				} );
			} );
			
			
		
			
		
			$(window).on('debouncedresize', function () { 
				reArrangeProjects();
				
			} );
			
		
		} )(jQuery);
		
	});
 
	/* DebouncedResize Function */
		(function ($) { 
			var $event = $.event, 
				$special, 
				resizeTimeout;
			
			
			$special = $event.special.debouncedresize = { 
				setup : function () { 
					$(this).on('resize', $special.handler);
				}, 
				teardown : function () { 
					$(this).off('resize', $special.handler);
				}, 
				handler : function (event, execAsap) { 
					var context = this, 
						args = arguments, 
						dispatch = function () { 
							event.type = 'debouncedresize';
							
							$event.dispatch.apply(context, args);
						};
					
					
					if (resizeTimeout) {
						clearTimeout(resizeTimeout);
					}
					
					
					execAsap ? dispatch() : resizeTimeout = setTimeout(dispatch, $special.threshold);
				}, 
				threshold : 150 
			};
		} )(jQuery);	
		
	
  })(jQuery); 