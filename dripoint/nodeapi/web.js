
// using common files at server side also

// INDIVIDUAL PLAYGROUND copy
var c = require('./config-server.js');
require('./config-server.js');
// var c = require('../dripoint/Staff_local/saurabh/config-server.js');

// MASTER files

require(ETCORE_API_ROOT + 'et-add.js');
require(ETCORE_API_ROOT + 'et-dto.js');
require(ETCORE_API_ROOT + 'et-security.js');
require(ETCORE_API_ROOT + 'et-utils.js');
require(ETCORE_API_ROOT + 'et-get.js');
require(ETCORE_API_ROOT + 'et-test.js');    
require(ETCORE_API_ROOT + 'et-query.js');
require(ETCORE_API_ROOT + 'et-unit_tests.js');

// require('../dripoint/Staff_local/saurabh/devjs/et-dto.js');
// require('../dripoint/Staff_local/saurabh/devjs/et-security.js');
// require('../dripoint/Staff_local/saurabh/devjs/et-utils.js');
// require('../dripoint/Staff_local/saurabh/devjs/et-add.js');
// require('../dripoint/Staff_local/saurabh/devjs/et-get.js');
// require('../dripoint/Staff_local/saurabh/devjs/et-test.js');
// require('../dripoint/Staff_local/saurabh/devjs/et-query.js');
// require('../dripoint/Staff_local/saurabh/devjs/et-unit_tests.js');

exports.configuration = configuration = c.config.configuration;
exports.async = async = require('async');

var express = require('express')
  , app = express()
  , request = require('request')
  , common = require('./routes/common')
  , server = require('./routes/server')
  , driTemplate = require('./routes/driTemplate')
  , driApi = require('./routes/driApi')
  , convert = require('./routes/convert.js');

 
 //// *********************** Express Application Configuration follows   *********************** 
app.configure(function (){
    app.set('port', process.env.PORT || 3003);  //test
	app.enable('trust proxy');
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());

    // Add headers
    app.use(express.static(__dirname + '/../dripoint'));
    app.use(function (req, res, next) {

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

app.configure('development', function (){
    app.use(express.errorHandler());
});

//// *********************** Route Mapping for Application follows   ***********************
app.get('/', common.index);
app.get('/test', common.test);
app.put('/executethis', server.putrunExecutethis);
app.get('/executethis', server.getrunExecutethis);
app.put('/buildtemplate', driTemplate.buildTemplate);
app.put('/getdata', driApi.driGetData);
app.put('/filetowid', convert.convertFileToWid);
app.get('/echo',common.echo);
// app.get('/testget',server.testget);

app.get('/updateWidTest', common.updateWidTest);

app.listen(process.env.PORT || 3003);
