jQuery(document).ready(function ($) {
    "use strict";

    /*

     # INDEX

     - Intro
     - Snapp on Scroll
     - SmoothState
     - Sticky Header
     - ImgLiquid
     - Slick Slider
     - Testimonial Slicer
     - Grid Slider
     - Expandable Slider
     - Carousel
     - Filter Carousel
     - MixItUp Filter Simple
     - MixItUp Filter Services
     - MixItUp Filter Advanced
     - Compact version for filter controls
     - Panorama
     - Split Headlines
     - Polaroid Photostack
     - Maps --> see google-scripts.js file
     - Booking Select Box Replacement
     - Booking Date-Time-Selector
     - Textarea Auto-Size
     - Scroll To Top
     - Add Class if menu-item has sub-menu
     - Animated Sections
     - Multiplage Animated Transition
     - Mail Handling
     - Single Blog Post
     - Responsive
     - DevTools
     */

// Intro
// handle prealoading and intro

    $('#intro').each(function () {

        // disable scrolling
        window.addEventListener('scroll', noscroll);

        // finished loading, handle intro
        setTimeout(
            function () {
                $('#intro').addClass('loaded');
            }, 4000);

        setTimeout(
            function () {
                // enable scrolling again
                window.removeEventListener('scroll', noscroll);
                $('#intro').remove();
                $('body').addClass('loaded');
            }, 5500);

    }); // has intro

// Snap on Scroll
// enable snapping on scroll

    $('body.panelsnap').panelSnap({
        $menu: $('#mainmenu ul'),
        menuSelector: 'a',
        panelSelector: '> section',
        namespace: '.panelSnap',
        onSnapStart: function () {
        },
        onSnapFinish: function ($target) {

            // if the active element is in a sub-menu, mark the parent as active as well
            $("#mainmenu a").removeClass('activeparent');
            var $tig = $target.attr('id');
            var $mitem = $("#mainmenu a[data-panel='" + $tig + "']");
            var $parul = $mitem.parent().parent('ul');

            if ($parul.hasClass('sub-menu')) {
                $parul.parents('li').children('a').addClass('activeparent');
            }

            if ($tig == 'end') {
                $('header').addClass('hidden');
            }
            else {
                $('header').removeClass('hidden');
            }

        },
        onActivate: function () {
        },
        directionThreshold: 150,
        slideSpeed: 200,
        easing: 'linear',
        offset: 0,
        keyboardNavigation: {
            enabled: true,
            nextPanelKey: 40,
            previousPanelKey: 38,
            wrapAround: true
        }

    });


// Sticky Header
// make the header stick when scrolling past the hero section

    $('.onepage.flexheader #hero').each(function () {
        var sticky = new Waypoint.Sticky({
            element: $('header')[0]
        });

    });

// ImgLiquid
// Stretching images to the parent container

    $('.grid li').imgLiquid({
        horizontalAlign: 'center',
        verticalAlign: 'center',
        fill: false
    });

    $('.col-3 .pic').imgLiquid({
        horizontalAlign: 'center',
        verticalAlign: 'center'
    });


//center/center
    $('.imgLiquid').imgLiquid();

    $('.imgLiquidCenterLeft').imgLiquid({
        verticalAlign: 'center',
        horizontalAlign: 'left'
    });

    $('.imgLiquidCenterRight').imgLiquid({
        verticalAlign: 'center',
        horizontalAlign: 'right'
    });

    $('.imgLiquidTopLeft').imgLiquid({
        verticalAlign: 'top',
        horizontalAlign: 'left'
    });

    $('.imgLiquidTopRight').imgLiquid({
        verticalAlign: 'top',
        horizontalAlign: 'right'
    });

    $('.imgLiquidTopCenter').imgLiquid({
        verticalAlign: 'top',
        horizontalAlign: 'center'
    });

    $('.imgLiquidBottomLeft').imgLiquid({
        verticalAlign: 'bottom',
        horizontalAlign: 'left'
    });

    $('.imgLiquidBottomRight').imgLiquid({
        verticalAlign: 'bottom',
        horizontalAlign: 'right'
    });

    $('.imgLiquidBottomCenter').imgLiquid({
        verticalAlign: 'bottom',
        horizontalAlign: 'center'
    });


// Testimonials Slider

    $('.testimonials .slick').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        autoplay: false,
        fade: false,
        prevArrow: '<button class="slick-prev slick-prev-light icon-salon_arrowleft"></button>',
        nextArrow: '<button class="slick-next slick-next-light icon-salon_arrowright"></button>',
        customPaging: htmlPaging(),
        responsive: [
            {
                breakpoint: 801,
                settings: {
                    infinite: false
                }
            }
        ]
    });

    function htmlPaging() {
        return function (slider, i) {
            var page = '';

            page += '<a class="slider-dot"></a>';

            return page;
        };
    }

// Grid Slider

    $('.grid .slick').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: false,
        prevArrow: '<button class="slick-prev slick-prev-dark icon-salon_arrowleft"></button>',
        nextArrow: '<button class="slick-next slick-next-dark icon-salon_arrowright"></button>',
        responsive: [
            {
                breakpoint: 801,
                settings: {
                    slidesToShow: 1,
                    autoplay: false,
                    infinite: false
                }
            }
        ]
    });

    $('.slider .slick').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 4000,
        fade: false,
        prevArrow: '<button class="slick-prev slick-prev-dark icon-salon_arrowleft"></button>',
        nextArrow: '<button class="slick-next slick-next-dark icon-salon_arrowright"></button>',
        responsive: [
            {
                breakpoint: 801,
                settings: {
                    slidesToShow: 1,
                    autoplay: false,
                    infinite: false
                }
            }
        ]
    });


// Expandable Slider

    $('.slickexpandable').prepend('<a class="slider-init icon-salon_plus"></a><a class="slider-hide icon-salon_minus"></a>');

    $('.slider-init').on('click', function () {
        var $slider_wrapper = $(this).parent('.sliderwrapper');
        $slider_wrapper.toggleClass('slickexpandable slickexpanded');

    });

    $('.slider-hide').on('click', function () {
        var $slider_wrapper = $(this).parent('.sliderwrapper');
        $slider_wrapper.toggleClass('slickexpandable slickexpanded');
    });


// Carousel
    $('.carousel .slickcarousel').each(function () {
        var items = $(this).find('.item').length;

        if (items >= 4) {
            $('.carousel .slickcarousel').slick({
                infinite: true,
                slidesToShow: 4,
                slidesToScroll: 2,
                speed: 1000,
                autoplay: true,
                autoplaySpeed: 2000,
                fade: false,
                prevArrow: '<button class="slick-prev slick-prev-dark icon-salon_arrowleft"></button>',
                nextArrow: '<button class="slick-next slick-next-dark icon-salon_arrowright"></button>',
                responsive: [
                    {
                        breakpoint: 1281,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1,
                        }
                    },
                    {
                        breakpoint: 1025,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                        }
                    },
                    {
                        breakpoint: 801,
                        settings: {
                            slidesToShow: 1,
                            autoplay: false,
                            infinite: false
                        }
                    },
                ]

            });
        }
    });

// Filter Carousel
    $('.carousel .filtercarousel').each(function () {
        var items = $(this).find('.item').length;

        if (items >= 4) {
            $('.carousel .filtercarousel').slick({
                infinite: true,
                slidesToShow: 4,
                slidesToScroll: 1,
                speed: 1000,
                autoplay: true,
                autoplaySpeed: 2000,
                fade: false,
                prevArrow: '<button class="slick-prev slick-prev-dark icon-salon_arrowleft"></button>',
                nextArrow: '<button class="slick-next slick-next-dark icon-salon_arrowright"></button>',
                responsive: [
                    {
                        breakpoint: 1281,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1,
                        }
                    },
                    {
                        breakpoint: 1025,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                        }
                    },
                    {
                        breakpoint: 801,
                        settings: {
                            slidesToShow: 1,
                            autoplay: false,
                            infinite: false
                        }
                    },
                ]
            });
        }
    });

// Filter Carousel

    $('.carousel .filternewscarousel').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: false,
        prevArrow: '<button class="slick-prev slick-prev-dark icon-salon_arrowleft"></button>',
        nextArrow: '<button class="slick-next slick-next-dark icon-salon_arrowright"></button>',

        responsive: [
            {
                breakpoint: 1281,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 801,
                settings: {
                    slidesToShow: 1,
                    autoplay: false,
                    infinite: false
                }
            }
        ]

    });


    $('.carousel .filterlist a').on('click', function () {

        var $tag = $(this).attr('data-filter');

        if ($tag == 'all') {
            $('.carousel .filtercarousel').slick('slickUnfilter');
            $('.carousel .filternewscarousel').slick('slickUnfilter');
        }
        else {
            $('.carousel .filtercarousel').slick('slickFilter', $tag);
            $('.carousel .filternewscarousel').slick('slickFilter', $tag);
        }

        $('.carousel .filterlist a').removeClass('active');
        $(this).addClass('active');

    });

// MixItUp Filter Simple

    $('.simplemix').each(function () {
        var $uid = ID();

        $(this).addClass($uid);
        $(this).attr('data-mixid', $uid);

        var $uidclass = '.' + $uid;

        $($uidclass + ' .filteritems').mixItUp({
            animation: {
                effects: 'fade',
                animateChangeLayout: false
            },
            load: {
                filter: 'all'
            },
            selectors: {
                target: '.item',
                filter: $uidclass + ' .filter',
                pagersWrapper: $uidclass + ' .pagerlist'
            },
            pagination: {
                limit: 4,
                loop: true,
                generatePagers: true,
                maxPagers: 5,
                pagerClass: '',
                prevButtonHTML: '&laquo;',
                nextButtonHTML: '&raquo;',
            }
        });

    });


// MixItUp Filter Services

    $('.sixmix').each(function () {
        var $uid = ID();

        $(this).addClass($uid);
        $(this).attr('data-mixid', $uid);

        var $uidclass = '.' + $uid;

        $($uidclass + ' .filteritems').mixItUp({
            animation: {
                effects: 'fade',
                animateChangeLayout: false
            },
            load: {
                filter: 'all'
            },
            selectors: {
                target: '.item',
                filter: $uidclass + ' .filter',
                pagersWrapper: $uidclass + ' .pagerlist'
            },
            pagination: {
                limit: 6,
                loop: true,
                generatePagers: true,
                maxPagers: 5,
                pagerClass: '',
                prevButtonHTML: '&laquo;',
                nextButtonHTML: '&raquo;',
            }
        });

    });


// MixItUp Filter Advanced

    $('.supermix').each(function () {

        var $uuid = ID();

        $(this).addClass($uuid);
        $(this).attr('data-mixid', $uuid);

        var $uidclass = '.' + $uuid;

        var buttonFilter = {

            $filters: null,
            $reset: null,
            groups: [],
            outputArray: [],
            outputString: '',

            init: function () {
                var self = this;
                self.$filters = $($uidclass + ' .multilist');
                self.$reset = $($uidclass + ' .reset');
                self.$container = $($uidclass + ' .filteritems');

                self.$filters.find('ul').each(function () {
                    self.groups.push({
                        $buttons: $(this).find('.filter'),
                        active: ''
                    });
                });

                self.bindHandlers();
            },

            bindHandlers: function () {
                var self = this;

                self.$filters.on('click', '.filter', function (e) {
                    e.preventDefault();

                    var $button = $(this);

                    if ($button.hasClass('active')) {
                        $button.removeClass('active');
                        var $defaulttext = $button.parent().parent().attr('data-default');
                        $button.parent().parent().parent().find('.filtered').text($defaulttext);
                    }
                    else {
                        $button.addClass('active').parent().siblings().find('a').removeClass('active');
                        $button.parent().siblings('.label').find('a').removeClass('default');
                        $button.parent().parent().parent().find('.filtered').text($button.text());
                    }

                    if ($button.parent().parent().find('.active').length == 0) {
                        $button.parent().parent().find('.label > a').addClass('default');
                    }

                    self.parseFilters();

                });

                self.$reset.on('click', function (e) {
                    e.preventDefault();

                    self.$filters.find('.filter').removeClass('active');
                    self.$filters.find('.label > a').addClass('default');

                    // this must get better
                    var $defaulttext = self.$filters.parent().find('.compactlist').attr('data-default');
                    self.$filters.parent().find('.filtered').text($defaulttext);

                    self.parseFilters();
                });
            },

            parseFilters: function () {
                var self = this;

                for (var i = 0, group; group = self.groups[i]; i++) {
                    group.active = group.$buttons.filter('.active').attr('data-filter') || '';
                }

                self.concatenate();
            },

            concatenate: function () {
                var self = this;

                self.outputString = ''; // Reset output string

                for (var i = 0, group; group = self.groups[i]; i++) {
                    self.outputString += group.active;
                }

                !self.outputString.length && (self.outputString = 'all');

                console.log(self.outputString);

                if (self.$container.mixItUp('isLoaded')) {
                    self.$container.mixItUp('filter', self.outputString);
                }
            }
        };


        buttonFilter.init();

        $($uidclass + ' .filteritems').mixItUp({
            controls: {
                enable: true
            },
            animation: {
                effects: 'fade',
                animateChangeLayout: false
            },
            selectors: {
                target: '.item',
                filter: $uidclass + ' .dontlookforme',
                pagersWrapper: $uidclass + ' .pagerlist'
            },
            pagination: {
                limit: 4,
                loop: true,
                generatePagers: true,
                maxPagers: 5,
                pagerClass: '',
                prevButtonHTML: '&laquo;',
                nextButtonHTML: '&raquo;',
            }
        });


    }); // each

// Compact version for filter controls

    function do_compactlist() {

        $('.compactlist').each(function () {

            if (!$(this).parent().hasClass('togglebox')) {

                var $label = $(this).attr('data-label');

                var $active = $(this).find('.active').text();

                if ($active.length == 0) {
                    $active = $(this).attr('data-default');
                }
                $(this).wrap('<div class="togglebox"></div>');

                $(this).parent().prepend('<div class="filterselect"><span class="selectlabel">' + $label + '</span><span class="filtered">' + $active + '</span></div>');
                $(this).find('.label').hide();
                $(this).hide();
            }


        });

        $(".togglebox").on("mouseenter", function () {
            $(this).find('.filterlist').show();
        }).on("mouseleave", function () {
            $(this).find('.filterlist').hide();
        });

        $(".controls .togglebox").last().addClass('last');

        // single list action
        $('.compactlist a').on('click', function () {
            if (!$(this).parent().hasClass('multilist')) {
                var $active = $(this).text();
                $(this).parent().parent().parent().find('.filtered').text($active);
            }
        });

        // maplist action
        $('.compactlist.maplist a').on('click', function () {
            var $active = $(this).text();
            $(this).closest('.togglebox').find('.filtered').text($active);
        });
    }

    do_compactlist();

// Panorama

    $('.panorama').each(function () {

        var $imgsrc = $(this).attr('data-panorama');

        $(this).css({
            'background-image': 'url(' + $imgsrc + ')',
        });

        var $uuid = ID();
        $(this).addClass($uuid);
        var $uidclass = '.' + $uuid;

        // define panelement
        var $panelement = document.querySelector($uidclass);
        var pan = new Motio($panelement, {
            fps: 40, // Frames per second. More fps = higher CPU load.
            speedX: '-50'
        });

        $($uidclass + ' .pan_controls').on('click', function () {
            pan.toggle();
            $(this).toggleClass('icon-salon_play').toggleClass('icon-salon_pause');
            $($uidclass).toggleClass('panocursor');
        });

        // Update the animation speed & direction based on a cursor position
        var offset = $($uidclass).offset();
        $($uidclass).on('mousemove', function (event) {
            pan.set('speedX', event.pageX - offset.left - pan.width / 2);
        });

    });


// Split Headlines,
// add break after each word

    function do_breakheadlines() {

        $('article h1').each(function () {

            var $new = do_wrapwords($(this).html());
            $(this).html($new);

        });

        $('.stripes h2').each(function () {

            var $new = do_wrapwords($(this).html());
            $(this).html($new);

        });

    }

    do_breakheadlines();


    function do_wrapwords($txt) {

        if ($txt.indexOf('</span>') < 0) {

            var $text = $txt.split(' ');
            var $r = '';

            var $len = $text.length;
            var $result = [];

            for (var i = 0; i < $len; i++) {
                $result[i] = '<span>' + $text[i] + '</span>';
            }
            $r += $result.join(' ');

            return $r;

        }

    }

// Polaroid Photostack

    $('.photostack').each(function () {

        var $uid = ID();

        $(this).attr('id', $uid);

        var $uidselect = '#' + $uid;

        var $phoid = $uid + 'phostack';

        $phoid = new Photostack(document.getElementById($uid), {
            showNavigation: true,
            afterInit: function () {
                $($uidselect).find('nav').prepend('<button class="stack-prev icon-salon_arrowleft"></button>').append('<button class="stack-next icon-salon_arrowright"></button>');
            }
        });

        $($uidselect + ' .stack-prev').on('click', function () {
            $phoid.navigate('prev');
        });

        $($uidselect + ' .stack-next').on('click', function () {
            $phoid.navigate('next');
        });
    });


// Booking Select Box Replacement

    $('select').chosen({
        disable_search_threshold: 20
    });

// Date-Time-Selector

    $('.datetime').datetimepicker({
        lang: 'en',
        startDate: '+1970/01/02',
        minDate: '0',
        mask: true,
        theme: 'dark',
        minTime: '09:00',
        maxTime: '17:00'
    });

// All Options http://xdsoft.net/jqplugins/datetimepicker/

// Textarea Auto Size
    $('textarea.autosize').textareaAutoSize();


// Scroll To Top
    $("#back2top").scroll2Top({
        appearAt: 650,
        scrollSpeed: 200
    });

    $('#end').waypoint(function () {
        $('.scrollarrow_right').toggleClass('reverse');
        $('.scrollarrow_left').toggleClass('reverse');
    });

// Add Class if menu-item has sub-menu
    $("#mainmenu li").has("ul").addClass('has-sub');

// Scroll-Arrows on One-Page

    $('body.onepage').each(function () {
        $(this).append('<span class="scrollarrow_left icon-salon_scrollarrow"></span><span class="scrollarrow_right icon-salon_scrollarrow"></span>');
    });


// Multipage Animated Transition

    $('.animtrans #mainmenu a').addClass('animsition-link');

    var $in_anim = $('body').attr('data-inanim');
    var $out_anim = $('body').attr('data-outanim');

    /* all possible animations:
     overlay-slide-in-top
     overlay-slide-out-top
     overlay-slide-in-bottom
     overlay-slide-out-bottom
     overlay-slide-in-left
     overlay-slide-out-left
     overlay-slide-in-right
     overlay-slide-out-right
     */

    $(".animtrans").animsition({
        inClass: $in_anim,
        outClass: $out_anim,
        inDuration: 1700,
        outDuration: 900,
        linkElement: '.animsition-link', // e.g. linkElement   :   'a:not([target="_blank"]):not([href^=#])'
        loading: true,
        loadingParentElement: 'body', //animsition wrapper element
        loadingClass: 'animsition-loading',
        unSupportCss: ['animation-duration', '-webkit-animation-duration', '-o-animation-duration'],
        overlay: true,
        overlayClass: 'animsition-overlay-slide',
        overlayParentElement: 'body'

    });

// Animated Sections

// Remove Animation on IE9
    if ($('html').hasClass('no-flexbox')) {
        $('body').removeClass('animsections');
    }

// Prepare
    $('body.animsections').each(function () {

        // add 'animated' to all sections
        $(this).find('section').addClass('animated');

        // find first section
        var $starting = $('section:first');
        $($starting).addClass('active');
    });

// Trigger animation on menu link
    $('body.animsections #mainmenu a').on('click', function () {
        do_sectionanim($(this));
    });
// Trigger animation on logo click

    $('body.animsections header h1 a').on('click', function () {
        do_sectionanim($(this));
    });

// Trigger animation on internal links

    $('body.animsections article a[href^="#"]').on('click', function () {
        do_sectionanim($(this));
    });


    function do_sectionanim($clickitem) {

        if (!$('body').hasClass('nosnapres')) {

            // find target & animations
            var $targethash = $clickitem.attr('href');
            var $target = $($targethash);
            var $targetintrans = $($target).data('intrans');
            var $targetouttrans = $($target).data('outtrans');
            if (!$targetintrans) {
                $targetintrans = $('body').data('intrans');
            }
            if (!$targetouttrans) {
                $targetouttrans = $('body').data('outtrans');
            }

            // remove 'active' from all menu links
            $('#mainmenu a').removeClass('active').removeClass('activeparent');

            // add 'active' to current menu link
            $clickitem.addClass('active');

            // if the active element is in a sub-menu, mark the parent as active as well
            var $tig = $target.attr('id');
            var $mitem = $("#mainmenu a[data-panel='" + $tig + "']");
            var $parul = $mitem.parent().parent('ul');

            if ($parul.hasClass('sub-menu')) {
                $parul.parents('li').children('a').addClass('activeparent');
            }

            // find currently active section & animations
            var $current = $('section.active');
            var $intrans = $current.data('intrans');
            var $outtrans = $current.data('outtrans');
            if (!$intrans) {
                $intrans = $('body').data('intrans');
            }
            if (!$outtrans) {
                $outtrans = $('body').data('outtrans');
            }

            // position menu
            var $starting = $('section:first');
            var $starterhash = '#' + $starting.attr('id');

            if ($starterhash === $targethash) {
                $('header').addClass('bottom');
            }
            else {
                $('header').removeClass('bottom');
            }

            // run animations

            $current.removeClass($intrans).addClass($outtrans).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                $current.removeClass($outtrans).removeClass('active');
                $target.addClass($targetintrans).addClass('active').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                    $target.removeClass($targetintrans);
                });
            });
        } // nosnapres

    }

// Form Handling

    $('form.salonform').validetta({
        display: 'inline', // bubble or inline
        errorTemplateClass: 'validetta-bubble',
        errorClass: 'validetta-error',
        validClass: 'validetta-valid', // Same for valid validation
        errorClose: true,
        errorCloseClass: 'validetta-bubbleClose',
        realTime: false,
        custom: {},
        remote: {},
        onValid: function (event) {
            event.preventDefault();

            var $formdata = $(this.form).serialize();
            var $status = $(this.form).find('div.status');

            $.ajax({
                url: 'lib/salon_mailer.php',
                data: $formdata,
                type: 'POST',
                beforeSend: function () {
                    console.log('Starting form request');
                }
            })
                .done(function (data) {
                    $status.show();
                })
        },
        onError: function () {
        }
    });


//Single Blog Post

// position bottom_meta

    function do_reposmeta() {

        $('.single-post .meta-top').each(function () {
            var $width = $(this).width();
            $('.meta-bottom').css('width', $width).addClass('positioned');
        });

    }

    do_reposmeta();

// show comments

    $('.single-post .comments').addClass('animated');
    $('.single-post .commentsform').addClass('animated');

    $('.single-post .commentscount').on('click', function () {
        $(this).parents('section').find('.comments').toggleClass('on');
        $(this).parents('section').find('.commentsform').removeClass('on');
    });

    $('.single-post .postacomment').on('click', function () {
        $(this).parents('section').find('.commentsform').toggleClass('on');
        $(this).parents('section').find('.comments').removeClass('on');
    });

    $('.comments .close').on('click', function () {
        $(this).parent('.comments').removeClass('on');
    });

    $('.commentsform .close').on('click', function () {
        $(this).parent('.commentsform').removeClass('on');
    });


// Responsive Version

    function do_check_filterlist() {
        $('.filterlist').each(function () {
            var $height = $(this).height();

            if ($height > 55) {
                $('.filterlist').addClass('compactlist');
            }
        });
        do_compactlist();
    }

    do_check_filterlist();


// Windows resize

    function do_breakpoint() {

        var $width_classes = 'res_big res_nbl res_tbl res_stbl res_phl res_phs';
        var $height_classes = 'nosnapres';

        var $width_points = window.getComputedStyle(document.querySelector('body'), ':after').getPropertyValue('content');
        var $height_points = window.getComputedStyle(document.querySelector('header'), ':after').getPropertyValue('content');

        var $bp_w = $width_points.replace(/["']/g, "");
        var $bp_h = $height_points.replace(/["']/g, "");

        $('body').removeClass($width_classes).addClass($bp_w);
        $('body').removeClass($height_points).addClass($bp_h);

    }

    do_breakpoint();


// check if snapping should bei enabled
    function do_checksnap() {

        if ($('body').hasClass('nosnapres') || $('body').hasClass('res_stbl') || $('body').hasClass('res_phl') || $('body').hasClass('res_phs')) {
            $('body.panelsnap').panelSnap('disable');
        }
        else {
            $('body.panelsnap').panelSnap('enable');
        }
    }

// refresh layout on certain resolutions
    function do_refreshlayout() {

        // check if snapping should be enabled
        do_checksnap();

        if ($('body').hasClass('res_big')) {

            // limit mixitup
            $('.supermix').each(function () {
                var $id2 = $(this).attr('data-mixid');
                $('.' + $id2 + ' .filteritems').mixItUp('paginate', {limit: 4});
            });

            // limit mixitup
            $('.simplemix').each(function () {
                var $id1 = $(this).attr('data-mixid');
                $('.' + $id1 + ' .filteritems').mixItUp('paginate', {limit: 4});
            });

            // show/hide imgLiquid images
            do_liquify('hide');

            // reposition col-2 elements
            do_reposition_col2('restore');

            // reposition col-3 elements
            do_reposition_col3('restore');

            // reposition col-3 stripes
            do_reposition_stripes('restore');

            // create mobile menu
            do_mobilenav('destroy');


        }
        else if ($('body').hasClass('res_nbl')) {

            // limit mixitup
            $('.supermix').each(function () {
                var $id2 = $(this).attr('data-mixid');
                $('.' + $id2 + ' .filteritems').mixItUp('paginate', {limit: 3});
            });

            // limit mixitup
            $('.simplemix').each(function () {
                var $id1 = $(this).attr('data-mixid');
                $('.' + $id1 + ' .filteritems').mixItUp('paginate', {limit: 3});
            });

            // show/hide imgLiquid images
            do_liquify('hide');

            // reposition col-2 elements
            do_reposition_col2('restore');

            // reposition col-3 elements
            do_reposition_col3('restore');

            // reposition col-3 stripes
            do_reposition_stripes('restore');

            // create mobile menu
            do_mobilenav('destroy');

        } // res_nbl

        else if ($('body').hasClass('res_tbl')) {

            // limit mixitup
            $('.supermix').each(function () {
                var $id2 = $(this).attr('data-mixid');
                $('.' + $id2 + ' .filteritems').mixItUp('paginate', {limit: 2});
            });

            // limit mixitup
            $('.simplemix').each(function () {
                var $id1 = $(this).attr('data-mixid');
                $('.' + $id1 + ' .filteritems').mixItUp('paginate', {limit: 2});
            });

            // show/hide imgLiquid images
            do_liquify('hide');

            // reposition col-2 elements
            do_reposition_col2('restore');

            // reposition col-3 elements
            do_reposition_col3('repos');

            // reposition col-3 stripes
            do_reposition_stripes('repos');

            // create mobile menu
            do_mobilenav('create');


        } // res_tbl

        else if ($('body').hasClass('res_stbl') || $('body').hasClass('res_phl') || $('body').hasClass('res_phs')) {

            // limit mixitup
            $('.supermix').each(function () {
                var $id2 = $(this).attr('data-mixid');
                $('.' + $id2 + ' .filteritems').mixItUp('paginate', {limit: 1});
            });

            // limit mixitup
            $('.simplemix').each(function () {
                var $id1 = $(this).attr('data-mixid');
                $('.' + $id1 + ' .filteritems').mixItUp('paginate', {limit: 1});
            });

            // show/hide imgLiquid images
            do_liquify('show');

            // reposition col-2 elements
            do_reposition_col2('repos');

            // reposition col-3 elements
            do_reposition_col3('repos');

            // reposition col-3 stripes
            do_reposition_stripes('restore');

            // create mobile menu
            do_mobilenav('create');

        } // res_stbl

    } // do_refreshlayout

    do_refreshlayout();

    function do_liquify(state) {

        var $css = '';

        if (state === 'show') {
            $css = 'block';
        }
        else if (state === 'hide') {
            $css = 'none';
        }

        // show imgLiquid images
        $('.col-3.hl-text-pic .imgLiquid_ready img').css('display', $css);
        $('.col-3.hl-pic-text .imgLiquid_ready img').css('display', $css);
        $('.col-3.pic-text-hl .imgLiquid_ready img').css('display', $css);
        $('.col-3.pic-hl-text .imgLiquid_ready img').css('display', $css);
        $('.col-3.text-hl-pic .imgLiquid_ready img').css('display', $css);
        $('.col-3.text-pic-pic .imgLiquid_ready img').css('display', $css);

        // show imgLiquid images
        $('.col-2.grid .imgLiquid_ready img').css('display', $css);

        // show imgLiquid images
        $('.carousel .imgLiquid_ready img').css('display', $css);

        // show imgLiquid images
        $('.mixitup .imgLiquid_ready img').css('display', $css);

    }

    function do_reposition_col3(state) {


        if (state === 'repos') {

            $('.pic-text-hl').each(function () {
                if ($(this).find('.repos-clone').length == 0) {
                    $(this).find('.hlblock').hide().clone().addClass('repos-clone').insertBefore($(this).find('.pic')).show();
                }
            });

            $('.pic-hl-text').each(function () {
                if ($(this).find('.repos-clone').length == 0) {
                    $(this).find('.hlblock').hide().clone().addClass('repos-clone').insertBefore($(this).find('.pic')).show();
                }
            });

            $('.text-hl-pic').each(function () {
                if ($(this).find('.repos-clone').length == 0) {
                    $(this).find('.hlblock').hide().clone().addClass('repos-clone').insertBefore($(this).find('.content:first-child')).show();
                }
            });

            $('.text-pic-hl').each(function () {
                if ($(this).find('.repos-clone').length == 0) {
                    $(this).find('.hlblock').hide().clone().addClass('repos-clone').insertBefore($(this).find('.content:first-child')).show();
                }
            });

            $('.slider-text-hl').each(function () {
                if ($(this).find('.repos-clone').length == 0) {
                    $(this).find('.hlblock').hide().clone().addClass('repos-clone').insertBefore($(this).find('.sliderwrapper')).show();
                }
            });

            $('.slider-hl-text').each(function () {
                if ($(this).find('.repos-clone').length == 0) {
                    $(this).find('.hlblock').hide().clone().addClass('repos-clone').insertBefore($(this).find('.sliderwrapper')).show();
                }
            });

            $('.text-hl-slider').each(function () {
                if ($(this).find('.repos-clone').length == 0) {
                    $(this).find('.hlblock').hide().clone().addClass('repos-clone').insertBefore($(this).find('.content:first-child')).show();
                }
            });


        }
        else if (state === 'restore') {
            $('.col-3 .repos-clone').remove();
            $('.col-3').each(function () {
                if (!$(this).hasClass('stripes')) {
                    $(this).find('.hlblock').show();
                }
            });
        }

    }


    function do_reposition_col2(state) {

        if (state === 'repos') {

            $('.default-right').each(function () {
                if ($(this).find('.repos-clone').length == 0) {
                    $(this).find('.hlblock').hide().clone().addClass('repos-clone').insertBefore($(this).find('.content')).show();
                }
            });

            $('.grid-right').each(function () {
                if ($(this).find('.repos-clone').length == 0) {
                    $(this).find('.hlblock').hide().clone().addClass('repos-clone').insertBefore($(this).find('.content')).show();
                }
            });

            $('.panorama-right').each(function () {
                if ($(this).find('.repos-clone').length == 0) {
                    $(this).find('.hlblock').hide().clone().addClass('repos-clone').insertBefore($(this).find('.content')).show();
                }
            });

            $('.slider-right').each(function () {
                if ($(this).find('.repos-clone').length == 0) {
                    $(this).find('.hlblock').hide().clone().addClass('repos-clone').insertBefore($(this).find('.content')).show();
                }
            });

            $('.testimonials-right').each(function () {
                if ($(this).find('.repos-clone').length == 0) {
                    $(this).find('.hlblock').hide().clone().addClass('repos-clone').insertBefore($(this).find('.content')).show();
                }
            });

        }

        else if (state === 'restore') {
            $('.col-2 .repos-clone').remove();
            $('.col-2 .hlblock').show();
        }

    }

    function do_reposition_stripes(state) {

        if (state === 'repos') {

            $('.col-3.stripes').each(function () {

                if (!$(this).hasClass('stripes-original') && !$(this).hasClass('stripes-clone')) {
                    var $clone = $(this).clone().addClass('stripes-clone');
                    $(this).before($clone).addClass('stripes-original');
                }

            });
        }

        else if (state === 'restore') {
            $('.col-3.stripes-clone').remove();
            $('.col-3.stripes').removeClass('stripes-original');
        }

    }


    function do_mobilenav(state) {

        if (state === 'create') {

            if ($('header #mobilenav').length <= 0) {

                // clone menu and create mobile menu
                var $mnav = $('#mainmenu').clone();
                $mnav.attr('class', 'menu-mobile');
                $mnav.removeAttr('id');

                $('header').append($mnav);
                $('header .menu-mobile').wrap('<div id="mobilenav"></div>');
                $('header #mobilenav').prepend('<a id="mobilenav_trigger" class="icon-"></a>');

                // calc height

            } // exists?

            var $wh = $(window).height();
            var $h = Math.round($wh - 80);

            $('#mobilenav nav').css('max-height', $h);

            // add trigger for sub-menus
            $('#mobilenav nav li').each(function () {
                if ($(this).hasClass('has-sub')) {
                    $(this).append('<span class="sub-trigger icon-"></span>');
                }
            });

            // open/close sub-menus
            $('.sub-trigger').on('click', function () {
                $(this).parent('li').toggleClass('open-sub');
            });

            // close menu when link has been clicked
            $('#mobilenav nav a').on('click', function () {
                $('#mobilenav').removeClass('on');
                $('#mobilenav li').removeClass('open-sub');

                if ($('body').hasClass('animsections')) {
                    do_sectionanim($(this));
                }

            });

            $('#mobilenav')
                .mouseover(function () {
                    $('#mobilenav').addClass('on');
                })
                .mouseout(function () {
                    $('#mobilenav').removeClass('on');
                });

        }

        else if (state === 'destroy') {
            $('header #mobilenav').remove();
        }

    }

    // Make links without HREF focusable
    $("a").not("[href]").attr('href', 'javascript:;');

    $(window).resize(function () {
        do_breakpoint();
        do_reposmeta();
        do_check_filterlist();
        do_refreshlayout();
    });

}); // document
