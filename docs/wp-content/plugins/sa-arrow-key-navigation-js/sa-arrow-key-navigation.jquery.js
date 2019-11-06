/*
  http://simplyaccessible.com/article/arrow-key-navigation/
  Copyright © Simply Accessible Inc.
  Author: Jeff Smith on September 18, 2013.

  https://gist.github.com/nfreear/568819ea9a233a3cfa4b
  Modifications: Nick Freear.
*/

(function ($) {

$.fn.arrowKeyNavigation = function (options) {

    var defaults = {
        sub_menu_sel: '.menu',
        link_sel: 'a, input[type="text"], button, etc',
        debug: false
    },
    opts = $.extend(defaults, options),
    $menu = this,
    C = window.console && opts.debug;


    $menu.keydown(function (e) {

        C && console.log("keydown", e);

        // Listen for the up, down, left and right arrow keys, otherwise, end here
        if ([37,38,39,40].indexOf(e.keyCode) == -1) {
            return;
        }

        // Store the reference to our top level link
        var link = $(this);

        switch(e.keyCode) {
            case 37: // left arrow
                // Make sure to stop event bubbling
                e.preventDefault();
                e.stopPropagation();

                // This is the first item in the top level mega menu list
                if(link.parent('li').prevAll('li').filter(':visible').first().length == 0) {
                    // Focus on the last item in the top level
                    link.parent('li').nextAll('li').filter(':visible').last().find('a').first().focus();
                } else {
                    // Focus on the previous item in the top level
                    link.parent('li').prevAll('li').filter(':visible').first().find('a').first().focus();
                }
                break;
            case 38: /// up arrow
                // Find the nested element that acts as the menu
                var dropdown = link.parent('li').find(opts.sub_menu_sel);

                // If there is a UL available, place focus on the first focusable element within
                if(dropdown.length > 0){
                    e.preventDefault();
                    e.stopPropagation();

                    dropdown.find(opts.link_sel).filter(':visible').first().focus();
                }

                break;
            case 39: // right arrow
                // Make sure to stop event bubbling
                e.preventDefault();
                e.stopPropagation();

                // This is the last item
                if(link.parent('li').nextAll('li').filter(':visible').first().length == 0) {
                    // Focus on the first item in the top level
                    link.parent('li').prevAll('li').filter(':visible').last().find('a').first().focus();
                } else {
                    // Focus on the next item in the top level
                    link.parent('li').nextAll('li').filter(':visible').first().find('a').first().focus();
                }
                break;
            case 40: // down arrow
                // Find the nested element that acts as the menu
                var dropdown = link.parent('li').find(opts.sub_menu_sel);

                // If there is a UL available, place focus on the first focusable element within
                if(dropdown.length > 0){
                    // Make sure to stop event bubbling
                    e.preventDefault();
                    e.stopPropagation();

                    dropdown.find(opts.link_sel).filter(':visible').first().focus();
                }
                break;
        }
    });

    C && console.log("sa-arrow-key-navigation.jquery.js");

    return this;
};

}( jQuery ));
