// JavaScript Document
$(function () {
  "use strict";
  var obj = {
    init: function () {
      this.slider();
      this.BlogIDX();
    },

    slider: function () {
      $('.main-slide').slick({
        dots: false,
        autoplay: true,
        arrows: false,
        pauseOnHover: false,
        infinite: true,
        touchMove: true,
        fade: true,
        cssEase: 'linear'
      });

      $(window).bind("load resize scroll", function () {
        var vW = $(window).width();
        if (vW > 425) {
          $('.b01-btn').insertBefore('.b01-list');
        } else {
          $('.b01-btn').insertAfter('.b01-list');
        }

      });

    },

    BlogIDX: function () {
      $.ajax({
        'url': 'about/blog/_custom/?limit=3',
        'dataType': 'jsonp',
        'success': function (json) {
          $.each(json.data, function (i, val) {
            var $li_ind = $('<li data-aos="zoom-in" data-aos-duration="1000" />').html(
              '<a href="about/blog/' + val.url + '"><span class="b01-date">' + val.date.substr(0,4) + '.' + val.date.substr(5,2) + '.' + val.date.substr(8,2) + '</span><span class="b01-ttl">'+ val.title + '</span></a>'
            );
            $li_ind.appendTo('.b01-list');

          });
        }
      });
    },
  };

  obj.init();

});
