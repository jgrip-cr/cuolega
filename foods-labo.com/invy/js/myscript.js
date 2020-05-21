
        $(function () {
            $('.point_li li').click(function () {
                var winW = $(window).width();
                var devW = 750;
                console.log(winW);
                if (winW <= devW) {
                $(this).children('.sp_btn').stop().slideToggle();
                $('.point_li li').not($(this)).children('.sp_btn').slideUp();
                $(this).toggleClass('active');
                $('.point_li li').not($(this)).removeClass('active');
                }
            });
            $('.careerup .visible-xs').click(function () {
                var winW = $(window).width();
                var devW = 750;
                if (winW <= devW) {
                $(this).next('.text').stop().slideToggle();
                $('.careerup .visible-xs').not($(this)).next('.text').slideUp();
                }
            });
            $('.voice .slide').click(function () {
                var winW = $(window).width();
                var devW = 750;
                if (winW <= devW) {
                $(this).find('.text').stop().slideToggle();
                $('.voice .slide').not($(this)).find('.text').slideUp();
                $(this).toggleClass('active');
                $('.voice .slide').not($(this)).removeClass('active');
                }
            });
        });




$(document).on('click', 'a[href*="#"]', function () {
    let time = 1000;
    let target = $(this.hash);
    if (!target.length) return;

    let targetY = target.offset().top-100;
    $('html,body').animate({
        scrollTop: targetY
    }, time, 'swing');
    return false;
});


$(function() {
var topBtn = $('.stepform_btn');
var topOffset =  $('.jobs').offset().top;
var topOffset =  topOffset - 300;
    topBtn.hide();
  $(window).scroll(function() {
    var sc = $(this).scrollTop();
      if ($(this).scrollTop() > topOffset) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
  });
});

$(function() {
var f_btn = $('.f_btn');
    
    f_btn.hide();
var fOffset =  $('.merit').offset().top;
var fOffset =  fOffset;
  $(window).scroll(function() {
          if ($(this).scrollTop() > fOffset) {
            f_btn.fadeIn();
        } else {
            f_btn.fadeOut();
        }
  });
});

$(function () {
    $('.step_form .radio_input').click(function () {
        $('.step_form .radio_input').removeClass('check');
        $(this).addClass('check');
        $('input[value="' + $(this).text() + '"]').prop('checked', true);
    });

    $('.step_form .more').click(function () {
        $('.step_form .step_wrap').css('transform', 'translateX(-50%)');
        $('.number_step2').addClass('active');
        // sp
        var winW = $(window).width();
        var devW = 750;
        if (winW <= devW) {
            $(this).css('transform', 'translateX( -' + $(window).width() + 'px)');
            $('.form_ttl').css('transform', 'translateX( -' + $(window).width() + 'px)');
            $('.step_form .submit').css('visibility', 'inherit');
            $('.step_form .submit').css('transform', 'translateX(0)');
            $('.back_step').css('visibility', 'inherit');
            $('.back_step').css('transform', 'translateX(0)');
        } else {
            $('.back_step').show();
        }
    });
    $('.step_form .back_step').click(function () {
        $('.step_form .step_wrap').css('transform', 'translateX(0%)');
        $('.step_form .number_step2').removeClass('active');
        // sp
        var winW = $(window).width();
        var devW = 750;
        if (winW <= devW) {
            $('.step_form .more').css('transform', 'translateX(0%)');
            $('.form_ttl').css('transform', 'translateX(0%)');
            $('.step_form .submit').css('transform', 'translateX(' + $(window).width() + 'px)');
            $('.step_form .back_step').css('transform', 'translateX(' + $(window).width() + 'px)');
        } else {
            $(this).hide();
        }
    });
    var winW = $(window).width();
    var devW = 750;
    if (winW <= devW) {
        $('.step_form .submit').css('transform', 'translateX(' + $(window).width() + 'px)');
        $('.step_form .back_step').css('transform', 'translateX(' + $(window).width() + 'px)');
    }
});
