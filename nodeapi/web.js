// using common files at server side also
exports.async = async = require('async');

var bc = require('./boxconfiguration.js');

var express = require('express'),
    app = express(),
    request = require('request'),
    common = require('./routes/common'),
    server = require('./routes/server'),
    driTemplate = require('./routes/driTemplate'),
    driApi = require('./routes/driApi'),
    convert = require('./routes/convert.js');


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
app.put('/executethis', server.putrunExecutethis);
app.get('/executethis', server.getrunExecutethis);
app.put('/buildtemplate', driTemplate.buildTemplate);
app.put('/getdata', driApi.driGetData);
app.put('/filetowid', convert.convertFileToWid);
app.get('/echo', common.echo);
// app.get('/testget',server.testget);

console.log('server config is ' + bc.serverconfig.SERVER_PORT);

console.log('port is ' + bc.serverconfig.SERVER_PORT);
app.listen(process.env.PORT || bc.serverconfig.SERVER_PORT);