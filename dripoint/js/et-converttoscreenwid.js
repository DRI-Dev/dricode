// copyright (c) 2014 DRI
$(document).ready(function () {
    var fileName = window.location.href.split('/').pop(),
        widName = fileName.substr(0, fileName.indexOf('.')),
        params = {};

    if (typeof widforview !== 'undefined') { params.widforview = widforview; }
    if (typeof widforbase !== 'undefined') { params.widforbase = widforbase;}
    if (typeof widforbackground !== 'undefined') { params.widforbackground = widforbackground; }
    if (typeof dataforview !== 'undefined') { params.dataforview = dataforview; }
    if (typeof links !== 'undefined') { params.links = links; }

    // append any existing style blocks to body before continuing
    $('style').each(function () { $('body').append(this.outerHTML); });

    // convert linked html page to a screenwid
    htmlToScreenwid(widName, $('body').html(), params, function() {
        $('body').html('<div class="container" style="margin-top:30px;text-align:center;">'
                     + '<div class="row well col-md-8 col-md-offset-2"><h4>This page has been saved as the '
                     + widName + ' screenwid.<br /> ' + 'You will be redirected to <a href="http://dripoint.com?wid='
                     + widName + '">http://dripoint.com?wid = ' + widName + '</a></h4></div></div>');
        setTimeout(function() { window.location = 'http://dripoint.com?wid=' + widName; },3500);
    });
});