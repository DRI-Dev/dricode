// using common files at server side also ...
// exports.async = async = require('async');
console.log('----x22');
require('./create_config.js');
require('./config.js');
require('./config-server.js');


// switch between the location of core files
var DIR_TO_CORE_JS = '../dripoint/js/';

require(DIR_TO_CORE_JS + 'et-dto.js');
require(DIR_TO_CORE_JS + 'et-security.js');
exports.utils = require(DIR_TO_CORE_JS + 'et-utils.js');
require(DIR_TO_CORE_JS + 'et-add.js');
require(DIR_TO_CORE_JS + 'et-get.js');
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
require(DIR_TO_CORE_JS + 'et-query.js');
exports.executethis = require(DIR_TO_CORE_JS + 'executethis.js');

exports.config = require('./config-server.js');

exports.configuration = configuration = config.configuration;

// Server specific Routes here
console.log('server.js -- bof');

require('../config.js');

var async = require('async');


// var mongoskin = require('mongoskin'),
//     SkinStore = require('connect-mongoskin');
console.log('server.js -- a002');

  path = require('path')
console.log('server.js -- a003');
    // dao = require('../dao/alterdao.js'),
    dao = require('../dao/mongo.js')
console.log('server.js -- a004');
    superagent = require('superagent')
console.log('server.js -- a005');
    https = require('https')
console.log('server.js -- a006');
    querystring = require('querystring')
console.log('server.js -- a007');
    url = require('url')
console.log('server.js -- a008');
    util = require('util');
require('../dao/mongotest.js');
// , drifn = require('../dao/dri_functions.js')


express = require('express')
console.log('---44a');
    app = express()
console.log('---44b');
    http = require('http')
console.log('---44c');
    needle = require('needle')
console.log('---44d');
    request = require('request')
console.log('---44e');
//    server = require('./routes/server')
console.log('---44f');
    convert = require('./routes/convert.js')
console.log('---44g');
    querystring = require('querystring')
console.log('---44h');
    imageService = require('./routes/images.js');
console.log('---44i');



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
app.put('/executethis', server.postputgetrunExecutethis);
app.post('/executethis', server.postputgetrunExecutethis);
app.get('/executethis', server.postputgetrunExecutethis);
// app.put('/executethis', server.putrunExecutethis);
app.put('/filetowid', convert.convertFileToWid);
app.put('/base64toserver', imageService.saveBase64ToServer);

console.log('server config is ' + serverconfig.SERVER_PORT);

exports.window = {"configuration":config.configuration};


console.log('port is ' + serverconfig.SERVER_PORT);
app.listen(process.env.PORT || serverconfig.SERVER_PORT);


eventdeviceready({}, function (err, res) {
    sendsms({
    'tonumber': '+12313133930',
    'msgbody': 'This the server- I just restarted '
}, function (err, result) {
    //console.log('running');
});
});

