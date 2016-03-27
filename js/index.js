/**
 * Created by Deepak Kadarivel on 27.03.16.
 *
 * Ripple animation
 * Tested and working in: ?IE9+, Chrome (Mobile + Desktop), ?Safari, ?Opera, ?Firefox.
 * JQuery plugin add .dot span in element with class .ripple
 * Animation work on CSS3 by add/remove class .animate to .dot span
 */

 (function($) {
    $(".ripple").click(function(e){
        var rippler = $(this);

        // create .dot element if it doesn't exist
        if(rippler.find(".dot").length == 0) {
            rippler.append("<span class='dot'></span>");
        }

        var dot = rippler.find(".dot");

        // prevent quick double clicks
        dot.removeClass("animate");

        // set .dot diametr
        if(!dot.height() && !dot.width())
        {
            var d = Math.max(rippler.outerWidth(), rippler.outerHeight());
            dot.css({height: d, width: d});
        }

        // get click coordinates
        var x = e.pageX - rippler.offset().left - dot.width()/2;
        var y = e.pageY - rippler.offset().top - dot.height()/2;

        // set .dot position and add class .animate
        dot.css({
            top: y+'px',
            left:x+'px'
        }).addClass("animate");
    })
})(jQuery);