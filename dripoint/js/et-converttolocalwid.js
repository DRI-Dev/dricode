// copyright (c) 2014 DRI
$(document).ready(function () {
    var widName = getUrlParam('wid'),
        params = {},
        htmltarget = $('#default_view_loc').length > 0 ? '#default_view_loc' : 'body';

    if (typeof widforview !== 'undefined') { params.widforview = widforview; }
    if (typeof widforbase !== 'undefined') { params.widforbase = widforbase;}
    if (typeof widforbackground !== 'undefined') { params.widforbackground = widforbackground; }
    if (typeof dataforview !== 'undefined') { params.dataforview = dataforview; }
    if (typeof links !== 'undefined') { params.links = links; }

    // append any existing style blocks to body before continuing
    $('style').each(function () { $('body').append(this.outerHTML); });

    // delete any 'et-delete' classes
    // useful for removing the link to this file before saving to storage
    $('.et-delete').remove();

    // convert linked html page to a screenwid
    htmlToScreenwid(widName, $(htmltarget).html(), params, function() {
        $('body').html('<div id="default_view_loc"><div class="container" style="margin-top:30px;text-align:center;">'
            + '<div class="row well col-md-8 col-md-offset-2"><h4>This page has been saved as the '
            + widName + ' screenwid in the current angular data model as well as in localStorage.<br /> '
            + 'You will be directed to the ' + widName + ' html wid.</h4></div></div></div>'
            + '<div id="logs" class="container"><p id="errorlog" class="row"></p><p id="successlog" class="row"></p></div>');

        setTimeout(function() {
            $('#default_view_loc').html('');
            angularExecute({executethis:widName}, function (err, results) { });
        },3500);
    });

    function getUrlParam(name) {
        name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
        return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }
});
