/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - https://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function($, Drupal, window, document, undefined) {


    // To understand behaviors, see https://drupal.org/node/756722#behaviors
    Drupal.behaviors.my_custom_behavior = {
        attach: function(context, settings) {

            // Place your code here.
            $("#system-message ul.marquee").marquee({
                yScroll: "left"
            });

            // $("#select-music-title").live("click", function() {
            //     var hasclass = $(this).hasClass("dropdown");
            //     if (hasclass == false) {
            //         $("#block-views-517c9052369d7981221c62d5a16828e7 .jp-playlist").css('display', 'block');
            //         $(this).addClass("dropdown");
            //     }
            // });

            // $("#block-views-517c9052369d7981221c62d5a16828e7 .jp-playlist ul").live("click", function() {
            //     var hasclass = $('#select-music-title').hasClass("dropdown");
            //     if (hasclass == true) {
            //         $("#block-views-517c9052369d7981221c62d5a16828e7 .jp-playlist").css('display', 'none');
            //         $('#select-music-title').removeClass("dropdown");
            //     }
            // });
                        $( "#select-music-title" ).click(function() {
   $("#block-views-517c9052369d7981221c62d5a16828e7 .jp-playlist").toggle('display');
   if ( display === true ) {
  $( "#block-views-517c9052369d7981221c62d5a16828e7 .jp-playlist" ).show();
} else if ( display === false ) {
  $( "#block-views-517c9052369d7981221c62d5a16828e7 .jp-playlist" ).hide();
}
});


            window.onload = function() {

                $('#navigation #main-menu ul.links').click(function() {
                    $('#navigation .region-navigation').css('display', 'block');

                });
                $('#header').live('hover', function() {
                    $('#navigation .region-navigation').css('display', 'none');
                });
                $('#navigation .region-navigation').hover(
                    function() {
                        $('#navigation .region-navigation').css('display', 'block');
                    },
                    function() {
                        $('#navigation .region-navigation').css('display', 'none');
                    }
                );

                $('a[href$="/buy"]').attr("target", "_blank");
            }

            //mobile navigation
            $("#mobile-nav").css("height", 0);
            $("#mobile-nav .menu-block-5").css("display", 'none');
            $("#mobile-navigation").live("click", function() {

                var main = $("#main").css("position");

                if (main == "static") {
                    $("#header").css({
                        'position': 'fixed',
                        'top': '0px',
                        'left': '0%',
                        'width': "100%",
                    });
                    $("#main").css({
                        'position': 'fixed',
                        'top': '100px',
                        'left': '0%',
                        'width': "100%",
                    });
                    $("#footer").css({
                        'position': 'fixed',
                        'top': '1000px',
                        'left': '280px',
                        'width': "100%",
                    });
                    $("#mobile-nav").css("height", 'auto');
                    $("#mobile-nav .menu-block-5").css("display", 'block');
                    $("#mobile-nav").css("opacity", 1);
                    $("#main").animate({
                        'left': "280px"
                    }, {
                        duration: 180,
                        queue: false
                    });
                    $("#header").animate({
                        'left': "280px"
                    }, {
                        duration: 180,
                        queue: false
                    });
                } else {
                    $("#main").animate({
                        'left': "0%"
                    }, {
                        duration: 180,
                        queue: false
                    });
                    $("#header").animate({
                        'left': "0%"
                    }, {
                        duration: 180,
                        queue: false
                    });
                    $("#header").css({
                        'position': 'static',
                    });
                    $("#main").css({
                        'position': 'static',
                    });
                    $("#footer").css({
                        'position': 'static',
                        'left': '0%',
                    });
                    $("#mobile-nav").css("height", 0);
                    $("#mobile-nav .menu-block-5").css("display", 'none');
                    $("#mobile-nav").css("opacity", 0);
                }
            });


            //$(".testimonial-body").click(function(){
            //$(this).parent().children(".testimonial-body2").css('display','block');


            //var test=$(this).parent().attr('class');
            //alert(test);
            //})

            $(".views-field-nothing").click(function() {
                if ($('.testimonial-body').css('height') != '100px') {
                    $('.testimonial-body').stop().animate({
                        height: '100px'
                    }, 200);
                    $(this).text('More').css('color', '#000');
                } else {
                    $('.testimonial-body').css({
                        height: '500px'
                    });
                    var xx = $('.testimonial-body').height();
                    $('.testimonial-body').css({
                        height: '100px'
                    });
                    $('.testimonial-body').stop().animate({
                        height: xx
                    }, 400);
                    //^^ The above is beacuse you can't animate css to 100%.  So I change it to 100%, get the value, change it back, then animate it to the value. If you don't want animation, you can ditch all of it and just leave: $('.show-more-snippet').css({height:'100%'});^^ //
                    $(this).text('Less...').css('color', '#000');
                }
            });

            window.parent.jQuery.colorbox.resize({
                width: "700px",
                height: "500px"
            });

        }
    };






})(jQuery, Drupal, this, this.document);
