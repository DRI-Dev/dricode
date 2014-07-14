// using common files at server side also
exports.async = async = require('async');

require('./create_config.js');
require('./config.js');

exports.window = {"configuration":config.configuration};

var express = require('express'),
    app = express(),
    request = require('request'),
    server = require('./routes/server'),
    convert = require('./routes/convert.js');



eventdeviceready({}, function (err, res) { });

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

var startTime = new Date();
exports.getuptime = getuptime = function getuptime(params, callback) {
    console.log(">>>>>>>-----------=======-----==-=-=-=-=-=-=---=-=-------======----------");
    var execObj = [{
        "executethis" : "getwid",
        "wid": "russwid"
    }];
    execute(execObj, function (err, res) {
            res = res[0][0];
            var startTime = res.starttime;
            var now = new Date().getTime();
            var howLong = Math.floor((now - startTime)/1000) ;
            var currentUser = params.currentuser;

            console.log("How Long is " + howLong);
            var tooLong = 30;
            var upStatus = (howLong < tooLong);
            console.log("RESULT is " + JSON.stringify(res));
            res.status = upStatus;
            res.uptime = howLong;
            res.currentuser = currentUser; 
            res.sms = '+12313133930';
            callback(err, res)
        }
    );
}
    var startTime = new Date().getTime().toString();
    execute({
        "executethis":"addwidmaster", 
        "wid":"russwid", 
        "starttime": startTime
        , "a": "ee"
        }, function (err, res) {
            console.log("Res is " + res.toString() );
        }
    );


//// *********************** Route Mapping for Application follows   ***********************
app.put('/executethis', server.putrunExecutethis);
app.put('/filetowid', convert.convertFileToWid);

console.log('server config is ' + serverconfig.SERVER_PORT);

console.log('port is ' + serverconfig.SERVER_PORT);
app.listen(process.env.PORT || serverconfig.SERVER_PORT);
