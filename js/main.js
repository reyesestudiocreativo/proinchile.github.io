$(document).ready(function(){

    $(window).load(function(){
	$('#preloader').fadeOut('slow',function(){
            $(this).remove();
        });
    });

    // jQuery to collapse the navbar on scroll
    $(window).scroll(function() {
        if ($(".navbar").offset().top > 50) {
            $(".navbar-fixed-top").addClass("top-nav-collapse");
        } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
        }
    });

   // slider text effect
    $("#slider").Morphext({
        animation: 'fadeIn',
        speed: 3500
    });

   // half object
    var height = ($("ul.subnav").height() / 2);
    $(".subnav").css({
        'margin-top': -height+'px'
    });

    var height = ($(".team .team-header ul").height() / 2);
    $(".team .team-header ul").css({
        'margin-top': -height+'px'
    });

    //team effect
    $('.team').hover(
        function(){
            $(this).find('.team-header ul.social-icons').fadeIn( "fast" );
            $(this).find('.team-header .team-layer').fadeIn( "fast" );
        },
        function(){
            $(this).find('.team-header ul.social-icons').fadeOut( "fast" );
            $(this).find('.team-header .team-layer').fadeOut( "fast" );
        }
    );

    // submanu scroll
    $('.subnav a').on('click', function() {
        var scrollAnchor = $(this).attr('data-scroll'),
                scrollPoint = $('div[data-anchor="' + scrollAnchor + '"]').offset().top + 1;
        $('body,html').animate({
                scrollTop: scrollPoint
        }, 500);
        return false;
    })
    $(window).scroll(function() {
        var windscroll = $(window).scrollTop();
        if (windscroll >= 0) {
            $('div[data-anchor]').each(function(i) {
                if ($(this).position().top <= windscroll + 0) {
                    $('.subnav li.active-subnav').removeClass('active-subnav');
                    $('.subnav li').eq(i).addClass('active-subnav');
                }
            });
        } else {
            $('.subnav li.active-subnav').removeClass('active-subnav');
        }
    }).scroll();
});

// CUBE PORTFOLIO
(function($, window, document, undefined) {
    'use strict';

    var gridContainer = $('#grid-container'),
        filtersContainer = $('#filters-container'),
        wrap, filtersCallback;


    /*******************************
        init cubeportfolio
     ****************************** */
    gridContainer.cubeportfolio({
        layoutMode: 'grid',
        rewindNav: true,
        scrollByPage: false,
        mediaQueries: [{
            width: 1100,
            cols: 3
        }, {
            width: 800,
            cols: 3
        }, {
            width: 500,
            cols: 2
        }, {
            width: 320,
            cols: 1
        }],
        defaultFilter: '*',
        animationType: 'rotateSides',
        gapHorizontal: 10,
        gapVertical: 10,
        gridAdjustment: 'responsive',
        caption: 'overlayBottomPush',
        displayType: 'sequentially',
        displayTypeSpeed: 100
    });


})(jQuery, window, document);
