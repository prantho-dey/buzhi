
(function($) {
    var allfunction = {


        //=============== Menu ==============
        menu_toggle: function() {
            $('.hamburger').on('click', function() {
                $(this).toggleClass('opened')
                $('.main-menu').toggleClass('mobile-menu-active')
                $("body").toggleClass('menu-body')
            });
        },

        

        init: function() {
            allfunction.menu_toggle()
        },
    }

    $(document).ready(function() {
        allfunction.init();
        // window.addEventListener('load',function(){
        //     document.querySelector('body').classList.add("loaded")  
        // });
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



// Animi js All code here


anime({
    targets: '#banner-text-underline path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 1500,
    delay: function(el, i) { return i * 250 },
    direction: 'alternate',
    loop: true
});

