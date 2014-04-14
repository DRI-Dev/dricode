// Server specific Routes here



// TEST copy files
// require('../../dripoint/test/et-utils.js');
// require('../../dripoint/test/et-get.js');
// require('../../dripoint/test/et-add.js');
// require('../../dripoint/test/et-query.js');
// var executethis = require('../../dripoint/test/executethis.js');

// // MASTER copy files
require('../../dripoint/js/et-utils.js');
require('../../dripoint/js/et-get.js');
require('../../dripoint/js/et-add.js');
require('../../dripoint/js/et-query.js');
var executethis = require('../../dripoint/js/executethis.js');

// individual payground copy files
// require('../../dripoint/Staff_local/saurabh/devjs/et-utils.js');
// require('../../dripoint/Staff_local/saurabh/devjs/et-get.js');
// require('../../dripoint/Staff_local/saurabh/devjs/et-add.js');
// require('../../dripoint/Staff_local/saurabh/devjs/et-query.js');
// var executethis = require('../../dripoint/Staff_local/saurabh/devjs/executethis.js');

var async = require('async');

var mongoskin = require('mongoskin'),
    config = require('../config-server.js'),
    settings = require('../settings.js'),
    db = mongoskin.db(settings.MONGODB_URL, settings.MONGODB_OPTIONS),
    SkinStore = require('connect-mongoskin'),
    path = require('path'),
    dao = require('../dao/mongo.js'),
    superagent = require('superagent'),
    filecheck = require('../scrapejob/scrape.js'),
    https = require('https'),
    querystring = require('querystring'),
    url = require('url'),
    util = require('util'),
    cheerio = require('cheerio');
// , drifn = require('../dao/dri_functions.js')


var TABLE_NAME = settings.TABLE_NAME;

console.log(TABLE_NAME + ' is the name of the table !!! ');

if (!exports) {
    exports = {};
}


exports.putrunExecutethis = function (req, resp) {
    var parameters = req.body;
    console.log(" JSON " + JSON.stringify(parameters));
    runExecuteThis(parameters, resp);
};


exports.getrunExecutethis = function (req, resp) {
    var url_parts = url.parse(req.url, true);
    var query = url_parts.query;

    console.log(query); //{Object}
    console.log(" JSON " + JSON.stringify(query));
    runExecuteThis(query, resp);

};

function runExecuteThis(parameters, resp) {

    Debug = false;
    if (parameters.Debug) {
        Debug = "true"
        delete parameters.Debug
    }
    executethis.execute(parameters, function (err, results) {

        if (Debug === 'true') {
            var tempoutput = {};
            tempoutput.command = {};
            tempoutput.command.angularexeucute = {};
            tempoutput.command.angularexeucute.parameters = {};
            extend(true, tempoutput.command.angularexeucute.parameters, localStore);
            // extend(true, executeobject, postResults);
            results.push(tempoutput);
            localStore.clear();
        }
        debuglinenum = 0;
        resp.send(results);
        resp.end();
    });
}

function callUpdateWid(entityToAdd, callback) {
    // Make another request, to update DB data
    var data = JSON.stringify(entityToAdd["data"]);
    console.log(">>>>>> callUpdateWid >>>>>>> :::: " + data);
    var requestObj = [];
    requestObj.push({
        "executethis": "updatewid",
        "Wid": entityToAdd["wid"],
        "data": entityToAdd["data"]
    });

    superagent.put(settings.SERVICE_URL + 'executethis')
        .send(requestObj)
        .end(function (e, res) {
            console.log('>>>>>>>>> callUpdateWid :::: Sent another request :: updatewid :: PUT request ');
            callback(res);
        });
}

function getJsonFromMap(leftOverParameters) {
    var rec = {};
    leftOverParameters.forEach(function (value, key) {
        if (key != "Wid") {
            rec[key] = value;
        }
    });
    return rec;
}

function handleProcessHtmlPersistence(nodeObjects, callback) {
    if (nodeObjects && nodeObjects['processHtmlJson'] && nodeObjects['processHtmlJson'][0]) {
        // persist the scrape results from processHTML process   
        for (var i = 0; i < nodeObjects['processHtmlJson'][0].length; i++) {
            // iterate over objects and make according entries in the DB
            var entityToAdd = nodeObjects['processHtmlJson'][0][i];
            console.log(">>>> :::: extractthis :::: processHtmlJson Now go ahead and add the requested JSON to mongoDB : " + JSON.stringify(entityToAdd));

            callUpdateWid(entityToAdd, function (o) {
                console.log("::: extractthis :: processHtmlJson :: After adding/updating node to Mongo - " + o);
                callback();
            });
        }
    } else {
        callback();
    }
}

function handleAddThisPersistence(nodeObjects, callback) {
    if (nodeObjects && nodeObjects['addThisJson'] && nodeObjects['addThisJson'][0]) {
        // persist the scrape results from processHTML process   
        for (var i = 0; i < nodeObjects['addThisJson'][0].length; i++) {
            // iterate over objects and make according entries in the DB
            var entityToAdd = nodeObjects['addThisJson'][0][i];
            console.log(">>>> :::: extractthis :::: handleAddThisPersistence Now go ahead and add the requested JSON to mongoDB : " + JSON.stringify(entityToAdd));

            callUpdateWid(entityToAdd, function (o) {
                console.log("::: extractthis :: handleAddThisPersistence :: After adding/updating node to Mongo - " + o);
                callback();
            });
        }
    } else {
        callback();
    }
}

function callScrapeLogic(res, callback) {
    var dirName = config.LOOKUP_DIR;
    filecheck.run(dirName, function (returnJson) {
        console.log(' json formatHTML array  ' + JSON.stringify(returnJson));
        var objToJson = {};
        objToJson.res = res;
        callback(returnJson);
    });
}

function cleanParameters(inboundParameters, paramsToClean) {
    var outBoundParameters = {};
    extend(true, outBoundParameters, inboundParameters);
    for (var i = 0; i < paramsToClean.length; i++) {
        if (outBoundParameters[paramsToClean[i]]) {
            delete outBoundParameters[paramsToClean[i]];
        }
    }
    return outBoundParameters;
}

function mergeParameters(c1, c2) {
    var mergedMap = {};
    extend(true, mergedMap, c1);

    for (var key in c2 && (!mergedMap[key])) {
        mergedMap[key] = c2[key];
    }

    return mergedMap;
}


function toLowerKeys(obj) {
    var key, keys = Object.keys(obj);
    var n = keys.length;
    var newobj = {};
    while (n--) {
        key = keys[n];
        newobj[key.toLowerCase()] = obj[key];
    }
    return newobj;
}

exports.gethtmlbyid = gethtmlbyid = function gethtmlbyid(params, callback) {
    var foundHtml;

    async.series([
            function (cb) {
                execute({
                        executethis: 'getwid',
                        wid: params.fromwid
                    },
                    function (err, resultsArray) {
                        var $ = cheerio.load(resultsArray[0].html),
                            fromIdEle = $('#' + params.fromid);

                        foundHtml = fromIdEle.html();

                        cb(null, resultsArray);
                    });
            },
            function (cb) {
                execute({
                        executethis: 'addwidmaster',
                        wid: params.towid,
                        html: foundHtml
                    },
                    function (err, returnArray) {
                        cb(null, returnArray);
                    });
            }
        ],
        function (err, resultsArr) {
            callback(null, foundHtml);
        });
};