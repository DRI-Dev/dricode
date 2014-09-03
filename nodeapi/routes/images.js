'use strict';
var aws = require('aws-sdk'),
    s3 = new aws.S3(),
    saveBase64ToServer;

exports.saveBase64ToServer = saveBase64ToServer = function saveBase64ToServer(req, res) {
    var parameters = req.body,
        path = parameters.path,
        startIndex = (path.indexOf('\\') >= 0 ? path.lastIndexOf('\\') : path.lastIndexOf('/')),
        filename = path.substring(startIndex + 1),
        imageBuffer = decodeBase64Image(parameters.imagesrc);

    console.log('** Image service is saving ' + filename + ' from base64 string to s3 storage **');

    fs.writeFile("C:\\sync\\Live_Images\\created_by_browser\\" + filename + ".hstd", "", "utf8",
        function(err) { console.log('** Image service created the ' + filename + '.hstd placeholder file in the sync folder **') });

    // save to amazon s3 bucket
    var s3Params = {
        Bucket: 'dripointImages',
        Key: filename,
        Body: imageBuffer
    };

    s3.putObject(s3Params, function (err, data) {
        if (err) {
            console.log('** Image service error saving ' + filename + ' =>');
            console.log(err);
            res.send('failure');
        } else {
//            console.log('** Image service successfully saved dripoint/images/' + filename + ' **');
            console.log('** Image service successfully saved ' + filename + ' to s3 storage **');
            res.send('success');
        }

        res.end();
    });

//    fs.writeFile("C:\\servers\\master\\dripoint\\images\\" + filename, imageBuffer.data, 'base64', function(err) {
//        if (err) {
//            console.log('** Image service error saving ' + filename + ' =>');
//            console.log(err);
//            res.send('failure');
//        } else {
//            console.log('** Image service successfully saved dripoint/images/' + filename + ' **');
//            res.send('success');
//        }
//
//        res.end();
//    });
};

function decodeBase64Image(dataString) {
    var matches = dataString.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/),
        response = {};

    if (matches.length !== 3) {
        return new Error('Invalid input string');
    }

    response.type = matches[1];
    response.data = new Buffer(matches[2], 'base64');

    return response;
}
