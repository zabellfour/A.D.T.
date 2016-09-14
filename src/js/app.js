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

$(function() {
    var url = window.location.pathname,
        urlRegExp = new RegExp(url.replace(/\/$/, ''));
    $('#navbar1 .navbar-right > li > a').each(function() {
        if (urlRegExp.test(this.href)) {
            $(this).parent('li').addClass('active');
        }
    });
    $('.footer-nav > li > a').each(function() {
        if (urlRegExp.test(this.href)) {
            $(this).parent('li').addClass('active');
        }
    });
});