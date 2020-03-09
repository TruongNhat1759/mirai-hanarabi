$(function () {
  "use strict";
  var obj = {
    init: function () {
      this.smoothScroll();
      this.toTop();
      this.Gnavi();
    },

    smoothScroll: function () {
      $('a[href^="#"]').not('#totop').click(function () {
        if ($($(this).attr('href')).length) {
          var p = $($(this).attr('href')).offset();
          if ($(window).width() > 640) {
            $('html,body').animate({
              scrollTop: p.top - 120
            }, 600);
          } else {
            $('html,body').animate({
              scrollTop: p.top - 85
            }, 600);
          }
        }
        return false;
      });
      $(window).load(function () {
        var hash1 = location.hash;
        var $root = $('html, body');
        if (hash1 !== "") {
          var top01 = $(hash1).offset().top;
          if ($(window).width() > 640) {
            $root.animate({
              scrollTop: top01 - 120
            }, 600);
          } else {
            $root.animate({
              scrollTop: top01 - 85
            }, 600);
          }
        }
      });

    },

    toTop: function () {
      $("#totop").hide();
      $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
          $('#totop').fadeIn();
        } else {
          $('#totop').fadeOut();
        }
      });
    },

    Gnavi: function () {
      $('.over').mouseenter(function () {
        if ($(this).hasClass('flag')) {
          return false;
        } else {
          $(this).find('.submenu').stop().slideDown();
        }
      });
      $('.over').mouseleave(function () {
        if ($(this).hasClass('flag')) {
          return false;
        } else {
          $(this).find('.submenu').stop().slideUp();
        }
      });
      $('.menu-icon').click(function () {
        $(this).toggleClass('active');
        $('#gnavi').stop().fadeToggle('fast');
        $('.submenu').stop().slideUp();
        $('.over').removeClass('active');
      });
      $('.close-menu').click(function () {
        $('.menu-icon').removeClass('active');
        $('#gnavi').fadeOut('fast');
        $('.submenu').stop().slideUp();
        $('.over').removeClass('active');
      });
      $('.over').click(function () {
        if ($(this).hasClass('flag')) {
          if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $('.submenu').stop().slideUp();
          } else {
            $('.over').removeClass('active');
            $('.submenu').stop().slideUp();
            $(this).addClass('active');
            $(this).find('.submenu').stop().slideDown();
          }
        }
      });
      $(window).bind("load resize scroll", function () {
        var vW = $(window).width();
        if (vW > 640) {
          $('.menu-icon').removeClass('active');
          $('.over').removeClass('flag');
          $('#gnavi').removeAttr('style');
        } else {
          $('.over').addClass('flag');
          $('#mainvisual').removeAttr('style');
        }

      });
      

    },

  };

  obj.init();

});
