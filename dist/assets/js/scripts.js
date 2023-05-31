
(function($) {
    var allfunction = {


        //=============== Menu ==============
        menu_toggle: function(){
            var mainMenu = $('.main-menu,.hv4-main-menu'),
                menuBody = $("body"),
                hamburger = $('.hamburger');

                hamburger.on("click", function() {
                    mainMenu.toggleClass('active');
                    menuBody.toggleClass('main-menu-overlay');
                    $(".sticky-header").toggleClass('transprent-header');
            });

            $('#menu-close').on("click", function() {
                mainMenu.removeClass('active');
                menuBody.removeClass('main-menu-overlay');
                $(".sticky-header").toggleClass('transprent-header');
            })

            $('.nav-drop-arrow').click(function(e) {
                $(this).parent().toggleClass('active').children('.sub-menu,.mega-menu,.hdr-cretors-wrapper').slideToggle().addClass('active').parent('li').siblings().removeClass('active').find('.sub-menu,.mega-menu,.hdr-cretors-wrapper').slideUp().removeClass('active');
                console.log($(this))
            });

            $(document).on('click', function(event){
                if(!mainMenu.is(event.target) && !mainMenu.has(event.target).length && !hamburger.is(event.target) && !hamburger.has(event.target).length){
                    mainMenu.removeClass('active');
                    $(".sticky-header").removeClass('transprent-header');
                    menuBody.removeClass('main-menu-overlay');
                    $('.main-menu ul li').siblings().removeClass('active').find('.sub-menu,.mega-menu,.mega-menu,.hdr-cretors-wrapper').slideUp();

                }
            })
        },
        
        // Settings
        settings: function() {
            var settingWrapper = $('#settings'),
                settingBody = $('body');
            $('#settings-switch').on("click", function() {
                settingWrapper.toggleClass('active');
                settingBody.addClass('settings-overflow');
            })
            $(document).on('click', function(event){
                if(!settingWrapper.is(event.target) && !settingWrapper.has(event.target).length){
                    settingWrapper.removeClass('active');
                    settingBody.removeClass('settings-overflow');
                }
            })
        },

        //============= Nice Select ===============
        nice_select: function(){
            $('select').niceSelect();
        },
        
        // Cart Active
        active_cart: function() {
            $('.clickable-cart').on('click', function() {
                $(this).toggleClass('active');
            })
        },
        
        //============= Counter Up ===============
        counter_up: function(){
            $('.odometer').appear(function (e) {
                var odo = $(".odometer");
                odo.each(function () {
                    var countNumber = $(this).attr("data-count");
                    $(this).html(countNumber);
                });
            });
        },

        //============== SVG IMG to SVG CODE ==================
        imgToSvg: function() {
            function jetix_svg() {
                jQuery('img').each(function() {
                    var jQueryimg = jQuery(this);
                    var imgClass = jQueryimg.attr('class');
                    var imgURL = jQueryimg.attr('src');
                    jQuery.get(imgURL, function(data) {
                        // Get the SVG tag, ignore the rest
                        var jQuerysvg = jQuery(data).find('svg');

                        // Add replaced image's classes to the new SVG
                        if (typeof imgClass !== 'undefined') {
                            jQuerysvg = jQuerysvg.attr('class', imgClass + ' replaced-svg');
                        }
                        jQuerysvg = jQuerysvg.removeAttr('xmlns:a');
                        // Replace image with new SVG
                        jQueryimg.replaceWith(jQuerysvg);

                    }, 'xml');

                });
            }
            $(document).each(function() {
                jetix_svg();
            })
        },


        //=============== Sticky Header ================= 
        // sticky_menu: function() {
        //     let win = $(window);
        //     let sticky_id = $(".header-area,.header-v4-area,.header-v6-main");
        //     // let sticky_body = $('body');
        //     win.on('scroll', function () {
        //         let scroll = win.scrollTop();
        //         if (scroll < 245) {
        //             sticky_id.removeClass("sticky-header");
        //             // sticky_body.removeClass("sticky-body");
        //         } else {
        //             sticky_id.addClass("sticky-header");
        //             // sticky_body.addClass("sticky-body");
        //         }
        //     });
        // },

        //=============== Scroll Up ================= 
        // scrollUp: function() {
        //     $(window).scroll(function () {
        //         if ($(this).scrollTop() !== 0) {
        //             $('#scroll-up').fadeIn();
        //         } else {
        //             $('#scroll-up').fadeOut();
        //         }
        //     });
            
        //     $('#scroll-up').on('click', function () {
        //         $("html, body").animate({scrollTop: 0});
        //         return false;
        //     });
        // },


        

        init: function() {
            allfunction.imgToSvg()
            allfunction.menu_toggle()
        },
    }

    $(document).ready(function() {
        allfunction.init();
        window.addEventListener('load',function(){
            document.querySelector('body').classList.add("loaded")  
        });
    });
    
})(jQuery);

// Mouse Move
// document.addEventListener("mousemove", parallax);
// function parallax(e) {
//     document.querySelectorAll(".anemiXY").forEach(function(move){

//         var moving_value = move.getAttribute("data-value");

//         var x = (e.clientX * moving_value) / 300;
//         var y = (e.clientY * moving_value) / 300;

//         move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
//     })
// }



// anime({
//     targets: '#animy-select .txtShape',
//     strokeDasharray: [anime.setDashoffset, 5],
//     easing: 'easeInOutSine',
//     duration: 1500,
//     delay: function(el, i) { return i * 250 },
//     direction: 'alternate',
//     loop: true
// });
