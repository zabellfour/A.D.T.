import HP from './modules/helpers';

(function($) {

    // When DOM is ready
    $(function() {
        HP.random(10, 20);
    });



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
    $(function() {
        $('.thumb .text-holder').matchHeight();
    });
      smoothScroll.init({
        selector: '.smooth'
    });
});