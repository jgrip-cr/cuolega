$(function(){
   // #にダブルクォーテーションが必要
   $('a[href^="#"]').click(function() {
      var speed = 400;
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top;
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
   });
});

$('.slider').slick({
	accessibility:false ,
	//adaptiveHeight:true,
	autoplay: true,
	autoplaySpeed:3000,
	arrows: false,
	draggable:true,
	fade:true,
	//respondTo:'window',
	//slidesToScroll:3,
});



