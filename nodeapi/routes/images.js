'use strict';
var fs = require('fs'),
    saveBase64ToServer;

exports.saveBase64ToServer = saveBase64ToServer = function saveBase64ToServer(req, res) {
    var parameters = req.body,
        path = parameters.path,
        startIndex = (path.indexOf('\\') >= 0 ? path.lastIndexOf('\\') : path.lastIndexOf('/')),
        filename = path.substring(startIndex),
        base64image = parameters.imagesrc.replace(/^data:image\/png;base64,/,"");

    console.log('** Image service is saving ' + filename + ' from base64 string **');

    fs.writeFile("C:\\servers\\master\\dripoint\\images\\" + filename, base64image, 'base64', function(err) {
        if (err) {
            console.log('** Image service error saving ' + filename + ' =>');
            consoel.log(err);
            res.send('failure');
        } else {
            console.log('** Image service successfully saved dripoint/images/' + filename + ' **');
            res.send('success');
        }

        res.end();
    });
};