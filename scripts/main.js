(function($) {

    'use strict';

    var isAnimating = false,
        defaultInAnimation = 'flipIn',
        defaultOutAnimation = 'flipOut',
        sectionInAnimation = '',
        sectionOutAnimation = '',
        nextSectionId = '',
        animationEnd;

    function animationEndEventName() {
        var i,
            el = document.createElement('div'),
            animations = {
                'animation': 'animationend',
                'oAnimation': 'oAnimationEnd',
                'MSAnimation': 'MSAnimationEnd',
                'mozAnimation': 'mozAnimationEnd',
                'WebkitAnimation': 'webkitAnimationEnd'
            };
        for (i in animations) {
            if (animations.hasOwnProperty(i) && el.style[i] !== undefined) {
                return animations[i];
            }
        }
    }

    function animateSections() {

        $('.section-in').removeClass('section-in').addClass('section-out');

        var $sectionOut = $('.section-out'),
            $sectionOutBlocks = $sectionOut.find('.section-main-block, .section-secondary-block');
        sectionOutAnimation = $('body').data('animation-out') || defaultOutAnimation;
        $sectionOutBlocks.addClass(sectionOutAnimation).removeClass(sectionInAnimation);

        if ($(nextSectionId).length) {
            $(nextSectionId).addClass('section-in');
        } else {
            $('.section').eq(0).addClass('section-in');
        }

        var $sectionIn = $('.section-in'),
            $sectionInBlocks = $sectionIn.find('.section-main-block, .section-secondary-block');
        sectionInAnimation = $('body').data('animation-in') || defaultInAnimation;
        $sectionInBlocks.removeClass(sectionOutAnimation).addClass(sectionInAnimation);

        $('.nav-main a[href="' + nextSectionId + '"]').parent().addClass('active').siblings().removeClass('active');

    }

    function changeSections(e) {
        var sectionId = $(e.target).attr('href');
        if (isAnimating || sectionId === location.hash) {
            return false;
        } else {
            isAnimating = true;
            nextSectionId = sectionId;
            location.hash = sectionId;
            animateSections();
        }
    }

    function checkUrlHash() {
        var hash = location.hash;
        if (hash.length && $('section' + hash).length) {
            nextSectionId = hash;
            animateSections();
        }
    }

    $(document).ready(function() {

        var $navLinks = $('.nav-main a').not('.external');
        animationEnd = animationEndEventName();

        $('.btn-site-loader-close').on('click', function() {
            $('.site-loader').fadeOut('slow');
        });

        /*=============================================>>>>>
		= SHOW/HIDE MAIN NAVIGATION =
		===============================================>>>>>*/
        $('.hamburger').on('click', function() {
            $(this).toggleClass('is-active');
            $('.nav-main').toggleClass('active');
        });

        /*=============================================>>>>>
		= SLIDESHOW =
		===============================================>>>>>*/
        $('.owl-carousel').each(function () {
            var	$slider = $(this),
                sliderOptions = $slider.data('slideshow-options'),
                defaultOptions = {
                    items: 1,
                    loop: true,
                    mouseDrag: false,
                    autoplay: true,
                    autoplayTimeout: 10000,
                    autoplayHoverPause: true,
                    nav: true,
                    navText: ['<i class="fa fa-caret-left">', '<i class="fa fa-caret-right">']
                };
            $slider.owlCarousel($.extend(defaultOptions, sliderOptions));
        });

        /*=============================================>>>>>
		= PROGRESS BARS =
		===============================================>>>>>*/
        $('.progress').each(function() {
            var el = $(this),
                progressVal = el.data('progress');
            el.append('<div class="progress-bar"><div class="progress-bar-inner"></div></div>');
            el.find('.progress-bar').css('width', progressVal + '%');
        });

        /*=============================================>>>>>
		= PROJECTS FILTERING =
		===============================================>>>>>*/
        $('.projects').shuffle({
            itemSelector: '.projects-item',
            sizer: '.projects-sizer'
        });

        $('.filter').on('click', 'li', function() {
            var self = $(this);
            $(this).addClass('active').siblings().removeClass('active').parents('.filter').next('.projects').shuffle('shuffle', self.data('group'));
        });

        /*=============================================>>>>>
		= MAP =
		===============================================>>>>>*/
        var mapEl = document.getElementById('map');
        if (mapEl) {
            var lat = mapEl.getAttribute('data-latitude'),
                lng = mapEl.getAttribute('data-longitude'),
                styles = [
                    {
                        'featureType': 'all',
                        'elementType': 'all',
                        'stylers': [
                            {
                                'saturation': -100
                            },
                            {
                                'gamma': 1
                            }
                        ]
                    }
                ];
            var map = new GMaps({
                el: mapEl,
                lat: lat,
                lng: lng,
                streetViewControl: false,
                mapTypeControl: false,
                zoomControl: true,
                zoomControlOptions: {
                    position: google.maps.ControlPosition.RIGHT_BOTTOM
                }
            });

            map.addMarker({
                lat: lat,
                lng: lng,
                icon: 'images/map-marker.png'
            });
            map.addStyle({
                styledMapName: 'Styled Map',
                styles: styles,
                mapTypeId: 'map_style'
            });
            map.setStyle('map_style');
            map.panBy(0, -22);
        }

        /*=============================================>>>>>
		= POPUPS =
		===============================================>>>>>*/
        $('.projects-item-thumb').magnificPopup({
            type: 'inline',
            gallery: {
                enabled: true,
                arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"><i class="fa fa-long-arrow-%dir%"></i></button>'
            },
            closeMarkup: '<button title="%title%" type="button" class="mfp-close"><i class="fa fa-close"></i></button>',
            mainClass: 'flipcard',
            removalDelay: 800
        });

        $('.btn-popup').magnificPopup({
            closeMarkup: '<button title="%title%" type="button" class="mfp-close"><i class="fa fa-close"></i></button>',
            mainClass: 'flipcard',
            removalDelay: 800
        });

        $('.btn-lightbox').magnificPopup({
            type: 'image',
            closeMarkup: '<button title="%title%" type="button" class="mfp-close"><i class="fa fa-close"></i></button>',
            mainClass: 'flipcard',
            removalDelay: 800
        });

        $('.gallery').each(function() {
            $(this).magnificPopup({
                delegate: 'a',
                type: 'image',
                gallery: {
                    enabled: true,
                    arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"><i class="fa fa-long-arrow-%dir%"></i></button>'
                },
                closeMarkup: '<button title="%title%" type="button" class="mfp-close"><i class="fa fa-close"></i></button>',
                mainClass: 'flipcard',
                removalDelay: 800
            });
        });

        /*=============================================>>>>>
		= FORM VALIDATION =
		===============================================>>>>>*/
        $('form').each( function() {
            $(this).validate();
        });

        /*=============================================>>>>>
		= FORM SUBMIT =
		===============================================>>>>>*/
        $('.form-contact').submit(function(e){
            e.preventDefault();
            var $form = $(this),
                $submit = $form.find('[type="submit"]');
            if( $form.valid() ){
                var dataString = $form.serialize();
                $submit.after('<div class="loader"></div>');
                $.ajax({
                    type: $form.attr('method'),
                    url: $form.attr('action'),
                    data: dataString,
                    success: function() {
                        $submit.after('<div class="message message-success">Your message was sent successfully!</div>');
                    },
                    error: function() {
                        $submit.after('<div class="message message-error">Your message wasn\'t sent, please try again.</div>');
                    },
                    complete: function() {
                        $form.find('.loader').remove();
                        $form.find('.message').fadeIn();
                        setTimeout(function() {
                            $form.find('.message').fadeOut(function() {
                                $(this).remove();
                            });
                        }, 5000);
                    }
                });
            }
        });

        /*=============================================>>>>>
		= MEDIA QUERIES =
		===============================================>>>>>*/
        function handleWidthChange(mqlVal) {
            if (mqlVal.matches) {

                $navLinks.off('click');
                $('.btn-section').off('click');

                $navLinks.on('click', function(e) {
                    e.preventDefault();
                    var target = $(this).attr('href'),
                        targetOffset = $(target).offset();
                    $(this).parent().addClass('active').siblings().removeClass('active');
                    $('html,body').animate({scrollTop: (targetOffset.top)}, 500);
                    $('.nav-main').removeClass('active');
                    $('.hamburger').removeClass('is-active');
                });

                /*=============================================>>>>>
				= REMOVE CUSTOM SCROLLBAR =
				===============================================>>>>>*/
                $('.section-block-content').mCustomScrollbar('destroy');

            } else {

                $navLinks.off('click');

                checkUrlHash();

                $('.section-main-block, .section-secondary-block').addClass('animated');

                $('.section-secondary-block-right').on(animationEnd, function(e) {
                    if ($(e.target).parent().hasClass('section-out') && $(e.target).hasClass('section-secondary-block-right')) {
                        console.log('Section "' + $(e.target).parent().attr('id') + '" out.' );
                        $(e.target).parents('.section').removeClass('section-out');
                        $(e.target).removeClass(sectionOutAnimation).siblings('.section-secondary-b').removeClass(sectionOutAnimation);
                    } else if ($(e.target).parent().hasClass('section-in') && $(e.target).hasClass('section-secondary-block-right')) {
                        console.log('Section "' + $(e.target).parent().attr('id') + '" in.' );
                        isAnimating = false;
                    }
                });

                $navLinks.on('click', function(e) {
                    e.preventDefault();
                    changeSections(e);
                });
                $('.btn-section').on('click', function(e) {
                    e.preventDefault();
                    changeSections(e);
                });

                /*=============================================>>>>>
				= INIT CUSTOM SCROLLBAR =
				===============================================>>>>>*/
                $('.section-block-content').mCustomScrollbar({
                    theme: 'flipcard',
                    scrollInertia: 100
                });

            }
        }

        if (window.matchMedia) {
            var mql = window.matchMedia('(max-width: 1279px)');
            mql.addListener(handleWidthChange);
            handleWidthChange(mql);
        }

    });

    $(window).on('load', function() {

        $('.site-loader').delay(1000).fadeOut('slow');

    });

})(jQuery);
