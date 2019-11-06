/*!
* Detect high contrast/ ignore colours browser/operating-system modes - accessibility.
* License: MIT
* Copyright 2012 The Open University.
* Author: Nick Freear, 2012-04-17
* Author: John Snyder, 2009-11-04
*
* https://gist.github.com/nfreear/c82581b4485cd303150d
* https://github.com/IET-OU/open-media-player-themes
*/
/*
  Based on John Snyder's work (License: public domain)
  http://stackoverflow.com/questions/1921047/how-to-check-if-user-is-in-high-contrast-mode-via-javascript-or-css
  http://hardlikesoftware.com/weblog/2009/11/04/css-sprites-vs-high-contrast-mode/
  http://hardlikesoftware.com/projects/HCMtest.html
*/

/*global window, jQuery */

(function (W, $) {

  'use strict';

  var $body = $("body")
  , interval = $body.data("ignore-color-int") || 4000
  , debug = W.location.href.match(/debug=1/) || $body.data("debug")
  , C = W.console
  , D = C && debug
  ;

  function detect_ignore_color () {
    /*
    The following code detects high contrast mode.
    It works because in high contrast mode the reported background color will not
    be the same as it was explicitly set.
    */
    var hcmclass = "no-ignore-color"
    // (No need to append or remove the element.)
    // add an element with explicit background color set, and now get the background color.
    , $hcm = $("<p style='position:absolute;top:0;left:-999px;background-color:#878787;'>T</p>")
    , testcolor = $hcm.css("background-color").toLowerCase()
    ;

    // different browsers return the color in different ways - beware spaces!
    $.isIgnoreColor = (testcolor !== "#878787" && testcolor !== "rgb(135, 135, 135)");

    if ($.isIgnoreColor) {
      hcmclass = "ignore-color";
    }

    $body.removeClass('ignore-color no-ignore-color').addClass(hcmclass);

    D && C.log('> ', interval, hcmclass);
  }

  // Resize event seems to be fired on change to/from Windows high-contrast.
  $(W).resize(detect_ignore_color);

  $(function () {
    detect_ignore_color();

    // ?? http://darcyclarke.me/development/detect-attribute-changes-with-jquery/

    // Experimental: works when MSIE/Mozilla enter 'ignore colour' mode (and Mozilla leaves).
    W.setInterval(detect_ignore_color, interval);
  });

}( window, jQuery ));
