/*
Copyright (c) 2017 
------------------------------------------------------------------
[Master Javascript]

Project:	Responsive Interior Design Template

-------------------------------------------------------------------*/
(function($) {
    "use strict";
    var landingpage = {
        initialised: false,
        version: 1.0,
        mobile: false,
        init: function() {

            if (!this.initialised) {
                this.initialised = true;
            } else {
                return;
            }

            /*-------------- Interior Design Functions Calling ---------------------------------------------------
            ------------------------------------------------------------------------------------------------*/
            this.Slider();
            this.Scroll_to_bottom()
            this.MailFunction();
            this.Map();
            this.Counter();
            this.Gallery();
            this.Blog_gallery();
            this.Wow();



        },

        /*-------------- Interior Design definition ---------------------------------------------------
        ---------------------------------------------------------------------------------------------------*/
        //Banner Slider

        Slider: function() {
            if ($(".rev_slider_wrapper").length) {

                var tpj = jQuery;

                var revapi1068;
                tpj(document).ready(function() {
                    if (tpj("#rev_slider_1068_1").revolution == undefined) {
                        revslider_showDoubleJqueryError("#rev_slider_1068_1");
                    } else {
                        revapi1068 = tpj("#rev_slider_1068_1").show().revolution({
                            sliderType: "standard",
                            jsFileLocation: "plugin/revolution/js",
                            sliderLayout: "fullscreen",
                            dottedOverlay: "none",
                            delay: 9000,
                            navigation: {
                                keyboardNavigation: "off",
                                keyboard_direction: "horizontal",
                                mouseScrollNavigation: "off",
                                mouseScrollReverse: "default",
                                onHoverStop: "off",
                                touch: {
                                    touchenabled: "off",
                                    swipe_threshold: 75,
                                    swipe_min_touches: 1,
                                    swipe_direction: "vertical",
                                    drag_block_vertical: false
                                },
                                bullets: {
                                    enable: true,
                                    hide_onmobile: true,
                                    hide_under: 1024,
                                    style: "uranus",
                                    hide_onleave: false,
                                    direction: "vertical",
                                    h_align: "right",
                                    v_align: "center",
                                    h_offset: 30,
                                    v_offset: 0,
                                    space: 5,
                                    tmp: '<span class="tp-bullet-inner"></span>'
                                }
                            },
                            viewPort: {
                                enable: true,
                                outof: "wait",
                                visible_area: "80%",
                                presize: false
                            },
                            responsiveLevels: [1240, 1024, 778, 480],
                            visibilityLevels: [1240, 1024, 778, 480],
                            gridwidth: [1240, 1024, 778, 480],
                            gridheight: [868, 768, 960, 720],
                            lazyType: "single",
                            shadow: 0,
                            spinner: "off",
                            stopLoop: "off",
                            stopAfterLoops: -1,
                            stopAtSlide: -1,
                            shuffle: "off",
                            autoHeight: "off",
                            autoPlay: "true",
                            fullScreenAutoWidth: "off",
                            fullScreenAlignForce: "off",
                            fullScreenOffsetContainer: ".header",
                            fullScreenOffset: "",
                            disableProgressBar: "on",
                            hideThumbsOnMobile: "off",
                            hideSliderAtLimit: 0,
                            hideCaptionAtLimit: 0,
                            hideAllCaptionAtLilmit: 0,
                            debugMode: false,
                            fallbacks: {
                                simplifyAll: "off",
                                nextSlideOnWindowFocus: "off",
                                disableFocusListener: false,
                            }
                        });
                    }
                }); /*ready*/
            }
        },
        //Scroll
        Scroll_to_bottom: function() {
            $('.int_scroll').on('click', function() {
                var height = $(window).height();
                $('html,body').animate({
                    scrollTop: $(this).offset().top
                }, height);
            });
        },

        //Help mail function	
        MailFunction: function() {
            $('.submit_frm').on('click', function() {
                var u_name = $('#name').val();
                var u_email = $('#email').val();
                var u_subject = $('#subject').val();
                var u_msg = $('#message').val();

                $.ajax({
                    type: "POST",
                    url: "contactmail.php",
                    data: {
                        'username': u_name,
                        'useremail': u_email,
                        'usersubject': u_subject,
                        'user_msg': u_msg,
                    },
                    success: function(msg) {
                        var full_msg = msg.split("#");
                        if (full_msg[0] == '1') {
                            $('#name').val("");
                            $('#email').val("");
                            $('#subject').val("");
                            $('#message').val("");
                            $('#err_msg').html(full_msg[1]);
                        } else {
                            $('#name').val(u_name);
                            $('#email').val(u_email);
                            $('#subject').val(u_subject);
                            $('#message').val(u_msg);
                            $('#err_msg').html(full_msg[1]);
                        }
                    }
                });
            });
        },

        //Map
        Map: function() {
            if ($(".ed_map").length) {
                $(".ed_map").each(function(index) {
                    var id = $(this).attr("id");
                    var address = $(this).attr("data-address");
                    $(this).googleMap({
                        scrollwheel: true
                    });
                    $(this).addMarker({
                        //coords: [22.9622672, 76.05079490000003] // for using lat long for marker
                        address: ""
                    });
                });
            }


        },

        // Counter
        Counter: function() {
            if ($('.counter_text').length > 0) {
                $('.counter_text').appear(function() {
                    $('.count-no').countTo();
                });
            }
        },

        //Gallery		  
        Gallery: function() {
            $('.popup-gallery').magnificPopup({
                delegate: 'a',
                type: 'image',
                removalDelay: 500,
                mainClass: 'mfp-with-zoom',
                gallery: {
                    enabled: true
                },

            });

        },

        //Blog gallery
        Blog_gallery: function() {
            $('.popup-gallery1').magnificPopup({
                delegate: 'a.fa-search',
                type: 'image',
                mainClass: 'mfp-with-zoom',

            });

        },
        //Wow
        Wow: function() {

            new WOW().init();
        }



    };

    $(document).ready(function() {
        landingpage.init();
    });
	
		// Load Event
	
	$(window).on('load', function() {
		jQuery(".loader").fadeOut();
		jQuery(".loader").delay(600).fadeOut("slow");

	});
	

    //On scroll fixed menu
    $(window).scroll(function() {
        var wh = window.innerWidth;
        if (wh > 767) {
            var h = window.innerHeight;
            var window_top = $(window).scrollTop() + 1;
            if (window_top > 100) {
                $('.int_menu_wrapper').addClass('int_fixed');
            } else {
                $('.int_menu_wrapper').removeClass('int_fixed');
            }
        }

    });



})(jQuery);




//Menu scroll

(function($) {
    'use strict';

    var pluginName = 'ScrollIt',
        pluginVersion = '1.0.3';

    /*
     * OPTIONS
     */
    var defaults = {
        upKey: 38,
        downKey: 40,
        easing: 'linear',
        scrollTime: 600,
        activeClass: 'active',
        onPageChange: null,
        topOffset: 0
    };

    $.scrollIt = function(options) {

        /*
         * DECLARATIONS
         */
        var settings = $.extend(defaults, options),
            active = 0,
            lastIndex = $('[data-scroll-index]:last').attr('data-scroll-index');

        /*
         * METHODS
         */

        /**
         * navigate
         *
         * sets up navigation animation
         */
        var navigate = function(ndx) {
            if (ndx < 0 || ndx > lastIndex) return;

            var targetTop = $('[data-scroll-index=' + ndx + ']').offset().top + settings.topOffset + 1;
            $('html,body').animate({
                scrollTop: targetTop,
                easing: settings.easing
            }, settings.scrollTime);
        };

        /**
         * doScroll
         *
         * runs navigation() when criteria are met
         */
        var doScroll = function(e) {
            var target = $(e.target).closest("[href]").attr('href') ||
                $(e.target).closest("[data-scroll-goto]").attr('data-scroll-goto');
            navigate(parseInt(target));
        };

        /**
         * keyNavigation
         *
         * sets up keyboard navigation behavior
         */
        var keyNavigation = function(e) {
            var key = e.which;
            if ($('html,body').is(':animated') && (key == settings.upKey || key == settings.downKey)) {
                return false;
            }
            if (key == settings.upKey && active > 0) {
                navigate(parseInt(active) - 1);
                return false;
            } else if (key == settings.downKey && active < lastIndex) {
                navigate(parseInt(active) + 1);
                return false;
            }
            return true;
        };

        /**
         * updateActive
         *
         * sets the currently active item
         */
        var updateActive = function(ndx) {
            if (settings.onPageChange && ndx && (active != ndx)) settings.onPageChange(ndx);

            active = ndx;
            $('[href]').removeClass(settings.activeClass);
            $('[href=' + ndx + ']').addClass(settings.activeClass);
        };

        /**
         * watchActive
         *
         * watches currently active item and updates accordingly
         */
        var watchActive = function() {
            var winTop = $(window).scrollTop();

            var visible = $('[data-scroll-index]').filter(function(ndx, div) {
                return winTop >= $(div).offset().top + settings.topOffset &&
                    winTop < $(div).offset().top + (settings.topOffset) + $(div).outerHeight()
            });
            var newActive = visible.first().attr('data-scroll-index');
            updateActive(newActive);
        };

        /*
         * runs methods
         */
        $(window).on('scroll', watchActive).scroll();

        $(window).on('keydown', keyNavigation);

        $('.temp19_menu ul li ').on('click', '[href], [data-scroll-goto]', function(e) {
            e.preventDefault();
            doScroll(e);
        });

    };
}(jQuery));