$(function(){
	'use strict';

	//adjust slider height
 	$('.slider').height($(window).height());
 	
 	//adjust resize of the window
 	$(window).resize(function(){
		$('.slider').height($(window).height());
		$('.label_skitter').css('bottom',($(window).height()/4));

	});

 	//social media hover
	$('.social-media').hover(function() {
		/* Stuff to do when the mouse enters the icons */
		$(this).find('i').animate({top:'-30px'})
	}, function() {
		/* Stuff to do when the mouse leaves the icons */
		$(this).find('i').animate({top:'0'})
	});

 	//adding active class to nav-link
	$('.navbar .nav-item a').click(function(e){
		e.preventDefault();
		$(this).parent().addClass('active').siblings().removeClass('active');
	});
	//smooth scroll
	$('.nav-item .nav-link').click(function() {
		/* Act on the event */
		$('html, body').animate({
			scrollTop: $('#'+$(this).data('scroll')).offset().top},1000);
	});

	//navbar when scroll
	$(window).scroll(function() {
		var scrollTop= $('.scroll-to-top');
		if ($(window).scrollTop()>200) {
			$('#bgFade').slideDown();
		}else{
			$('#bgFade').slideUp();
		}
		if ($(window).scrollTop()>$(window).height()) {
			scrollToTp.fadeIn(400);
		}else{
			scrollToTp.fadeOut(400);
		}
	});
	//event when we click on scrollTop
	$('.scroll-to-top').click(function(e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: 0
		},600);
	});
	
	//fire the skitter plugin
	$('.skitter-large').skitter({
		fullscreen:true,
		interval:4000,
		dots:false,
		stop_over:false,
		with_animations:["paralell","swapBarsBack" ,"swapBars","glassBlock"],
	});

	//fire owl carusal
	 $(".owl-carousel").owlCarousel({
	 	margin:30,
	 	responsiveClass:true,
	 	autoplay:true,
	 	responsive:{
	        0:{
	            items:1,
	        },
	        600:{
	            items:2,
	        },
	        1000:{
	            items:3,
	        },
    	}
	 });

	 //hover on img of owl-link
	 $(".owl-link img").hover(function() {
	 	/* Stuff to do when the mouse enters the img */
	 	$(this).animate({bottom: '8px'}, 400)
	 }, function() {
	 	/* Stuff to do when the mouse leaves the img */
	 	$(this).animate({bottom: 0}, 400)
	 });
	 
	 //chefs team-img hover
	$('.chef-item img').hover(function() {
		/* Stuff to do when the mouse enters the img */
		$(this).animate({top:'-9px'})
	}, function() {
		/* Stuff to do when the mouse leaves the img */
		$(this).animate({top:'0'})
	});

	//gallery-img hover
	$('.gallery img').hover(function() {
		/* Stuff to do when the mouse enters the img */
		$(this).animate({top:'-6px'})
	}, function() {
		/* Stuff to do when the mouse leaves the img */
		$(this).animate({top:'0'})
	});
});