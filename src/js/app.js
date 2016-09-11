import HP from './modules/helpers';

(function($) {

    // When DOM is ready
    $(function() {
        HP.random(10, 20);
    });

    // smoothScroll.init({
    //     selector: '[data-scroll]', // Selector for links (must be a class, ID, data attribute, or element tag)
    //     selectorHeader: null, // Selector for fixed headers (must be a valid CSS selector) [optional]
    //     speed: 500, // Integer. How fast to complete the scroll in milliseconds
    //     easing: 'easeInOutCubic', // Easing pattern to use
    //     offset: 0, // Integer. How far to offset the scrolling anchor location in pixels
    //     callback: function ( anchor, toggle ) {} // Function to run after scrolling
    // });


}(jQuery));

$(document).ready(function() {

    $("#carousel1").owlCarousel({
        items: 1,
        nav: true,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: false
    });
});


jQuery(document).ready(function() {

    function mobile() {
        var checkWidth = $(window).width();
        var demo = $("#carousel2");
        if (checkWidth > 768) {
          if(typeof $('#carousel2').data('owlCarousel') != 'undefined') {
            $('#carousel2').data('owlCarousel').destroy();
          }
        } else if (checkWidth < 768) {
            demo.owlCarousel({
                items: 1,
                nav: true,
                itemElement: "partners li",
                nav: true,
                loop: true,
                autoplay: true,
                autoplayTimeout: 4000,
                autoHeight: false

            });
        }
    }

    $(document).ready(mobile);
    $(window).resize(mobile);
});
