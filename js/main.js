(function ($) {
    'use strict';

    jQuery(document).ready(function () {
        
        
        //slicknav
        $('ul.nav.navbar-nav').slicknav({
            allowParentLinks: true
        });
        
        // Faq Filter
        $('#faqfilter').mixItUp({
            load: {
                filter:  '.testall'// pass it to MixItUp when you instantiate
            }
        });

        // Doctor
        $('#docfilter').mixItUp({
            load: {
                filter:  '.testall'// pass it to MixItUp when you instantiate
            }
        });

        // PrettyPhoto
        $("a[data-gal^='prettyPhoto']").prettyPhoto();

        $(".accordion-demo").smk_Accordion({
            showIcon: true, // Show the expand/collapse icons.
            animation: true, // Expand/collapse sections with slide aniamtion.
            closeAble: false, // Closeable section.
            slideSpeed: 200 // the speed of slide animation.
        });

        // Doctors carousel
        $('.doctor_carousel').owlCarousel({
            loop: true,
            margin: 29,
            dots: false,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                400: {
                    items: 2
                },
                600: {
                    items: 4
                },
                992: {
                    items: 6
                }
            }
        });

        // Doctors carousel
        $('.product_carousel').owlCarousel({
            loop: true,
            margin: 10,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                270: {
                    items: 1,
                    nav: true
                }
            }
        });

        // DatePicker
        $('.datepicker').datepicker();	

        //Horizontal Tab
        $('#parentHorizontalTab').easyResponsiveTabs({
            type: 'default', //Types: default, vertical, accordion
            width: 'auto', //auto or any width like 600px
            fit: true, // 100% fit in a container
            tabidentify: 'hor_1', // The tab groups identifier
            activate: function (event) { // Callback function if tab is switched
                var $tab = $(this);
                var $info = $('#nested-tabInfo');
                var $name = $('span', $info);
                $name.text($tab.text());
                $info.show();
            }
        });	

        $(".back_top").click(function () {
            $("html, body").animate({scrollTop: 0}, 1000);
        });
        
        
        $('.tp-banner').revolution({
            delay: 9000,
            startwidth: 960,
            startheight: 650,
            startWithSlide: 0,
 
            fullScreenAlignForce: "off",
            autoHeight: "on",
            minHeight: "off",

            shuffle: "off",

            onHoverStop: "on",

            thumbWidth: 100,
            thumbHeight: 50,
            thumbAmount: 3,

            hideThumbsOnMobile: "off",
            hideNavDelayOnMobile: 1500,
            hideBulletsOnMobile: "off",
            hideArrowsOnMobile: "off",
            hideThumbsUnderResoluition: 0,

            hideThumbs: 0,
            hideTimerBar: "off",

            keyboardNavigation: "on",

            navigationType: "none",
            navigationArrows: "solo",
            navigationStyle: "preview4",

            navigationHAlign: "center",
            navigationVAlign: "bottom",
            navigationHOffset: 30,
            navigationVOffset: 30,

            soloArrowLeftHalign: "left",
            soloArrowLeftValign: "center",
            soloArrowLeftHOffset: 20,
            soloArrowLeftVOffset: 0,

            soloArrowRightHalign: "right",
            soloArrowRightValign: "center",
            soloArrowRightHOffset: 20,
            soloArrowRightVOffset: 0,


            touchenabled: "on",
            swipe_velocity: "0.7",
            swipe_max_touches: "1",
            swipe_min_touches: "1",
            drag_block_vertical: "false",

            parallax: "mouse",
            parallaxBgFreeze: "on",
            parallaxLevels: [10, 7, 4, 3, 2, 5, 4, 3, 2, 1],
            parallaxDisableOnMobile: "off",

            stopAtSlide: -1,
            stopAfterLoops: -1,
            hideCaptionAtLimit: 0,
            hideAllCaptionAtLilmit: 0,
            hideSliderAtLimit: 0,

            dottedOverlay: "none",

            spinned: "spinner4",

            fullWidth: "on",
            forceFullWidth: "off",
            fullScreen: "on",
            fullScreenOffset: "0px",

            panZoomDisableOnMobile: "off",

            simplifyAll: "off",

            shadow: 0
        });
        

    });

    $(window).scroll(function () {
        if ($(this).scrollTop()) {
            $('.back_top').fadeIn();
        } else {
            $('.back_top').fadeOut();
        }
    });




}(jQuery));