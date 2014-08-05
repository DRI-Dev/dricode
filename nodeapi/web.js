// using common files at server side also ...
// exports.async = async = require('async');
require('./create_config.js');
require('./config.js');

// switch between the location of core files

configfn = require('./config-server.js');

var DIR_TO_CORE_JS = '../dripoint/js/';

require(DIR_TO_CORE_JS + 'et-security.js');
require(DIR_TO_CORE_JS + 'et-utils.js');
require(DIR_TO_CORE_JS + 'et-add.js');
require(DIR_TO_CORE_JS + 'et-get.js');
require(DIR_TO_CORE_JS + 'et-query.js');
require(DIR_TO_CORE_JS + 'executethis.js');

require(DIR_TO_CORE_JS + 'et-test.js');
require(DIR_TO_CORE_JS + 'test-addhoc.js');
require(DIR_TO_CORE_JS + 'test-dto.js');
require(DIR_TO_CORE_JS + 'test-et-utils.js');
require(DIR_TO_CORE_JS + 'test-execute.js');
require(DIR_TO_CORE_JS + 'test-inherit.js');
require(DIR_TO_CORE_JS + 'test-main.js');
require(DIR_TO_CORE_JS + 'test-query.js');
require(DIR_TO_CORE_JS + 'test-security.js');
require(DIR_TO_CORE_JS + 'tests-up-for-review.js');
require(DIR_TO_CORE_JS + 'et-dto.js');

require('./dao/mongo.js');
async = require('async');
path = require('path');
superagent = require('superagent');
https = require('https');
querystring = require('querystring');
url = require('url');
util = require('util');

express = require('express');
app = express();
http = require('http');
needle = require('needle');
request = require('request');
server = require('./routes/server');
convert = require('./routes/convert.js');
imageService = require('./routes/images.js');


//// *********************** Express Application Configuration follows   *********************** 
app.configure(function() {
    app.enable('trust proxy');
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());

    // Add headers
    app.use(express.static(__dirname + '/../dripoint'));
    app.use(function(req, res, next) {

        // Website you wish to allow to connect
        res.setHeader('Access-Control-Allow-Origin', '*');

        // Request methods you wish to allow
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

        // Request headers you wish to allow
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

        // Set to true if you need the website to include cookies in the requests sent
        // to the API (e.g. in case you use sessions)
        res.setHeader('Access-Control-Allow-Credentials', true);

        // Pass to next layer of middlewaresssss
        next();
    });

    app.use(app.router);
    app.set('html', __dirname + '/html');
    app.use("/css", express.static(__dirname + '/views/css'));
    app.use("/js", express.static(__dirname + '/views/js'));
    app.engine('html', require('ejs').renderFile);
});

app.configure('development', function() {
    app.use(express.errorHandler());
});


//// *********************** Route Mapping for Application follows   ***********************
app.put('/executethis', postputgetrunExecutethis);
app.post('/executethis', postputgetrunExecutethis);
app.get('/executethis', postputgetrunExecutethis);
// app.put('/executethis', server.putrunExecutethis);
app.put('/filetowid', convert.convertFileToWid);
app.put('/base64toserver', imageService.saveBase64ToServer);

//console.log('server config is ' + serverconfig.SERVER_PORT);
//exports.window = {"configuration":config.configuration};

console.log('port is ' + serverconfig.SERVER_PORT);
app.listen(process.env.PORT || serverconfig.SERVER_PORT);


eventdeviceready({}, function (err, res) {
    sendsms({
        'tonumber': '+12145644732',
        'msgbody': 'This the server- I just restarted '
    }, function (err, result) {
        //console.log('running');
    });
});

exports.postputgetrunExecutethis = function (req, resp) {
    var parameters = req.body;
    console.log(" JSON " + JSON.stringify(parameters));
    var url_parts = url.parse(req.url, true);
    var query = url_parts.query;

    extend(true, parameters, query);
    runExecuteThis(parameters, resp);
};


function runExecuteThis(parameters, resp) {

    Debug = false;
    if (parameters.Debug) {
        Debug = "true";
        delete parameters.Debug
    }

    if (parameters.command) {
        // grab server defaults
        extend(true, parameters.command, config.configuration.d.default);

        if (parameters.command.environment && parameters.command.environment.default) {
            // overwrite current environment defaults with server defaults
            parameters.command.environment.default = config.configuration.d.default;
        }
    }

    // also grab server defaults for xrun objects
    if (parameters.command && parameters.command.xrun) {
        for (var index in parameters.command.xrun) {
            if (parameters.command.xrun[index].command) {
                extend(true, parameters.command.xrun[index].command, config.configuration.d.default);

                if (parameters.command.xrun[index].command.environment
                    && parameters.command.xrun[index].command.environment.default) {
                    // overwrite current environment defaults with server defaults
                    parameters.command.xrun[index].command.environment.default = config.configuration.d.default;
                }
            }
        }
    }

    execute(parameters, function (err, results) {
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

        if (!results) { results = {}; }

        resp.send(results);
        resp.end();
    });
}


