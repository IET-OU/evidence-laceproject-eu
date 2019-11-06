/*!
  Various Javascript fixes/hacks for LACE (inc. CleanPrint customizations)
*/

jQuery(function ($) {

  var W = window
    , debug = W.location.search.match(/debug=1/)
    , C = debug && W.console
    , $body_class = $("#lace-js-body-class")
    , has_cleanprint = W.WpCpCleanPrintPrintHtml || W.CleanPrintHtml
    , $inject_cleanprint = $("body") //.search-results, body.single-hypothesis")
    , cleanprint_post_re = /(search-results|postid-\d+)/
    , cleanprint_exclude_sel = "#cookie-notice, .nav-menu, .assistive-text, .lace-assistive-help, .jxl-message, .oer-chart-loading, .leaflet-control-container, .hyp-tpl-hint"
    , cleanprint_include_sel = ".page-title, .entry-title, #X-primary"
    , vis_table_row_sel = ".hypothesis #country-vis-table tbody tr";

  C && console.log("Body class:", $body_class);
  $("body").addClass($body_class && $body_class.attr("class"));

  /* Fix for blank country-cell in [hypothesis_geosummary] table [Bug: #6]
  */
  when_call(function () {
    return $(vis_table_row_sel).length;
  },
  function () {
    var $vis_table_row = $(vis_table_row_sel);

    C && console.log("Vis table:", $vis_table_row);

    $vis_table_row.each(function () {

      var $row = $(this)
        , $cell_1 = $row.find("td").first();

      if ("" === $cell_1.text()) {
        $cell_1.html("<i>No location given</i>");

        $row.addClass("no-location-row").attr("title", "No location given");
      }

      C && console.log("Row:", $row, $cell_1);
    });

  });


  // Evidence map attribution hack.
  var $map_icon = $(".lace-map-icon");
  if ($map_icon.length) {
    $(".leaflet-bottom.leaflet-left").append($map_icon[0].outerHTML);
  }

  // Accessibility-related help [a11y][Bug: #17]
  $(".nav-menu:first").before(
  '<p class="lace-assistive-help lace-nav-help" tabindex="0" role="note">' +
  'You can navigate the top level of the navigation using the left &amp; right arrow keys. Screen reader users can use ALT plus the left &amp; right arrows.' +
  '</p>');

  // LACE banner [Bug: #10]
  var logo_sel = "#site-logo-image"
    , banner_path = "/wp-content/plugins/wp-iet-generic-plugins/images/lace/lace"
    , banner_alt = "Evidence Hub - learning analytics community exchange (LACE)"
    , with_banner = $(".lace-with-banner").length;

  if (with_banner) {
    $(logo_sel).after(
    "<img class='lace-bnr left' alt='%t' src='%s_evidence-hub-banner.png'><img class='lace-bnr right' alt='' src='%s_lace-banner.png'>"
    .replace(/%s/g, banner_path).replace(/%t/, banner_alt)
    );
  }


  /* CleanPrint customizations [Bug: #9]
  */
  C && console.log("CleanPrint?", has_cleanprint);
  if (has_cleanprint) {

  if ($inject_cleanprint.length) {
    var post_id = $("body").attr("class").match(cleanprint_post_re);
    post_id = (post_id && post_id[1]) || "custom";

    $(".page-title, .entry-title").first().append(
    '<div class="lace-cleanprint-buttons"><button onclick="WpCpCleanPrintPrintHtml(\'%s\');return false" class="cleanprint-exclude">Export</button></div>'
      .replace("%s", post_id));

    $.fn.qtip && $(".lace-cleanprint-buttons button").qtip({
      content: 'Print/export page to rich-text, PDF & other formats <img src="/wp-content/plugins/cleanprint-lt/images/CleanPrintBtn_white.png">',
      style: { classes: 'lace-cleanprint-qtip qtip-bootstrap' },
      show: { solo: true },
      hide: {
	    delay: 2500
	  }
    });

    C && console.log("Inject CleanPrint:", $inject_cleanprint);
  }

  $(cleanprint_exclude_sel).addClass("cleanprint-exclude");
  $(cleanprint_include_sel).addClass("cleanprint-include");

  $(".oer-chart-loading").first().after(
    "<p class='lace-cleanprint-diagram-warn cleanprint-include'>[ Diagrams and maps may not print or export well. Sorry! ]</p>");

  var $cleanprint_bn_wrap = $(".lace-cleanprint-buttons");  //$("a[ onclick ^= WpCpCleanPrint ]").parent();
  $cleanprint_bn_wrap.find("a[onclick]").attr("role", "button");

  $(".XX--a[ onclick ^= WpCpCleanPrintPrint ]").attr("title",
    "Print/export page to rich-text, PDF & other formats");


    /* CleanPrint - keyboard accessibility hacks (incomplete!) (uses WAI-ARIA)
    */
    $cleanprint_bn_wrap.find("a, button").on("click", function (ev) {

      var $cleanprint_return = $(".lace-cleanprint-buttons a, .lace-cleanprint-buttons button").first();

      when_call(function () {
        return $("#cpf-closeButton").length
      }, function () {

        var $cp_close_btn = $("#cpf-closeButton")
          , $cp_dialog = $("#cpf-root iframe:first");

        // 1. Make the 'close' pseudo-button into a functional button.
        $cp_close_btn.attr({
          role: "button",
          tabindex: 0,
          title: "Close CleanPrint dialog",
          "aria-label": "Close CleanPrint dialog",
          "aria-controls": $cp_dialog.attr("id")
        })
        // 2. Start keyboard focus in a sensible place.
        .focus()
        // 3. Return keyboard focus when the user closes the CleanPrint dialog (by any means...)
        .on("click cleanprint_close", function () {
          $cleanprint_return.focus();
        });

        // 4. Let users know this is a modal dialog (needs more work).
        $cp_dialog.attr({
          role: "dialog",
          title: "CleanPrint export",
          "aria-label": "CleanPrint export",
          "aria-owns": $cp_close_btn.attr("id")
        });

        /* 5. Todo: prevent keyboard navigation outside the modal dialog, while its open.
           6. Todo: make all the pseudo-buttons inside the CleanPrint <iframe> into functional buttons.
           7. Todo: visual indication of keyboard focus in dialog - CSS - *:focus { outline: 1px dotted gray; }

        ... Test and iterate ..! */

      });

    });

  }


  function when_call(when_true_FN, callback_FN, interval) {
    var int_id = setInterval(function () {
      if (when_true_FN()) {
        clearInterval(int_id);
        callback_FN();
      }
    }, interval || 500); // Milliseconds.
  }

  C && console.log('lace-javascript.js');
});
