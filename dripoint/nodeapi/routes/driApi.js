'use strict';
var needle = require('needle')
    , host = 'http://drirest.drillar.com/json/Data/'
    , apiKey = '2FFA4085C7994016913F8589B765D4E5'
    , driGetData;

exports.driGetData = driGetData = function driGetData(req, resp) {
    console.log('************** start getdata from dri Api ***************');
    var params = req.body;

    // get results from dri Api
    getData(params, function(err, results) {
        var returnData = err || results;

        console.log('************** end getdata from dri Api ***************');

        resp.send(returnData);
        resp.end();
    });
};

function getData(params, callback) {
    var actionQueryString = params.actionQueryString || ''
        , putUrl = actionQueryString.indexOf('?') !== -1
            ? actionQueryString + '&apiKey=' + apiKey  // no url params found
            : actionQueryString + '?apiKey=' + apiKey;  // url params already present

    console.log('calling dri Api address => ' + host + putUrl);

    needle.put(host + putUrl, params.parameterDTOs, { json: true }, function(err, resp, body) {
        if (err) {
            console.log('error occurred during getdata call => ' + err);
            callback(err, body)
        }
        else {
            console.log('results from dri getdata call => ' + JSON.stringify(body));
            callback(null, body);
        }
    });
}